import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "..")
const publicDir = path.join(root, "public")

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

async function rewriteInternalLinks() {
  const htmlFiles = await collectHtmlFiles(publicDir)

  for (const htmlFile of htmlFiles) {
    let html = await fs.readFile(htmlFile, "utf8")

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
        href.endsWith("/") ||
        href.endsWith(".html")
      ) {
        return match
      }

      return `href="${href}/"`
    })

    await fs.writeFile(htmlFile, html, "utf8")
  }
}

await ensurePrettyUrlCopies()
await rewriteInternalLinks()
console.log(`Pretty URL directories and link rewrites generated in: ${publicDir}`)
