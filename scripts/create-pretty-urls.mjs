import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "..")
const publicDir = path.join(root, "public")
const posix = path.posix

async function collectHtmlFiles(dir, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await collectHtmlFiles(fullPath, results)
      continue
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(fullPath)
    }
  }
  return results
}

async function ensurePrettyUrlCopies() {
  const htmlFiles = await collectHtmlFiles(publicDir)

  for (const htmlFile of htmlFiles) {
    const relativePath = path.relative(publicDir, htmlFile)
    const parsed = path.parse(relativePath)

    if (parsed.base === "index.html" || parsed.base === "404.html") {
      continue
    }

    const prettyDir = path.join(publicDir, parsed.dir, parsed.name)
    const prettyIndex = path.join(prettyDir, "index.html")

    await fs.mkdir(prettyDir, { recursive: true })
    await fs.copyFile(htmlFile, prettyIndex)
  }
}

function buildAliasSegment(relativePath) {
  const digest = crypto.createHash("sha1").update(relativePath, "utf8").digest("hex").slice(0, 10)
  return `p-${digest}`
}

function normalizeForMap(relativePath) {
  const parsed = path.parse(relativePath)
  return posix.join(parsed.dir.split(path.sep).join("/"), parsed.name)
}

async function ensureAsciiAliasCopies() {
  const htmlFiles = await collectHtmlFiles(publicDir)
  const aliasMap = new Map()

  for (const htmlFile of htmlFiles) {
    const relativePath = path.relative(publicDir, htmlFile)
    const parsed = path.parse(relativePath)

    if (parsed.base === "index.html" || parsed.base === "404.html") {
      continue
    }

    const normalized = normalizeForMap(relativePath)
    const aliasSegment = buildAliasSegment(normalized)
    const aliasDir = path.join(publicDir, parsed.dir, aliasSegment)
    const aliasIndex = path.join(aliasDir, "index.html")

    await fs.mkdir(aliasDir, { recursive: true })
    await fs.copyFile(htmlFile, aliasIndex)

    aliasMap.set(normalized, posix.join(parsed.dir.split(path.sep).join("/"), aliasSegment))
  }

  return aliasMap
}

async function rewriteInternalLinks() {
  const aliasMap = await ensureAsciiAliasCopies()
  const htmlFiles = await collectHtmlFiles(publicDir)

  for (const htmlFile of htmlFiles) {
    let html = await fs.readFile(htmlFile, "utf8")
    const relativePath = path.relative(publicDir, htmlFile)
    const currentDir = posix.dirname(relativePath.split(path.sep).join("/"))

    html = html.replace(/href="([^"]+)"/g, (match, href) => {
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("#") ||
        href.includes(".css") ||
        href.includes(".js") ||
        href.includes(".xml") ||
        href.includes(".png") ||
        href.includes(".jpg") ||
        href.includes(".svg") ||
        href.includes(".json") ||
        href.includes(".pdf") ||
        href.endsWith(".html")
      ) {
        return match
      }

      const anchorIndex = href.indexOf("#")
      const baseHref = anchorIndex >= 0 ? href.slice(0, anchorIndex) : href
      const anchor = anchorIndex >= 0 ? href.slice(anchorIndex) : ""

      const resolvedBase = posix.normalize(posix.join(currentDir, baseHref))
      const normalizedResolved = resolvedBase.replace(/^\.\//, "").replace(/\/$/, "")
      const aliasTarget = aliasMap.get(normalizedResolved)

      if (!aliasTarget) {
        return `href="${href.endsWith("/") ? href : `${href}/`}"`
      }

      const relativeAlias = posix.relative(currentDir, aliasTarget) || "."
      const finalHref = `${relativeAlias.startsWith(".") ? relativeAlias : `./${relativeAlias}`}/${
        anchor || ""
      }`

      return `href="${finalHref}"`
    })

    await fs.writeFile(htmlFile, html, "utf8")
  }
}

await ensurePrettyUrlCopies()
await rewriteInternalLinks()
console.log(`Pretty URL directories and link rewrites generated in: ${publicDir}`)
