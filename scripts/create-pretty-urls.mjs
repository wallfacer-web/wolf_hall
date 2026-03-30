import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "..")
const publicDir = path.join(root, "public")
const posix = path.posix
const siteBase = "/wolf_hall"
const customRedirects = new Map([
  ["06-Theory/文学理论入口", "06-Theory/文学理论与阅读框架"],
  ["02-People/托马斯·摩尔", "02-People/托马斯·莫尔"],
  ["02-People/托马斯·霍华德，第三代诺福克公爵", "02-People/托马斯·霍华德"],
  ["02-People/阿拉贡的凯瑟琳", "02-People/凯瑟琳·阿拉贡"],
  ["04-Institutions/财政与行政官僚体系", "04-Institutions/财政与行政官僚系统"],
  ["03-Events/王位继承焦虑", "05-Concepts/王位继承焦虑"],
  ["07-Queries/案例二-国王大事与英格兰脱离罗马", "07-Queries/07.3_Case_Studies/QCase_国王大事与英格兰脱离罗马"],
  ["07-Queries/案例三-安妮·博林的倒台", "07-Queries/07.3_Case_Studies/QCase_安妮·博林的倒台"],
  ["07-Queries/人物社会网络分析社区图.canvas", "01-MOCs/人物总览"],
  ["08-Sources/NotebookLM-数字人文人物研究方法", "01-MOCs/人物研究提问指南"],
  ["08-Sources/NotebookLM-数字人文小说研究与现代技术", "01-MOCs/数字人文方法总览"],
  ["08-Sources/NotebookLM-数字人文事件研究方法", "01-MOCs/事件研究提问指南"],
  ["00-Inbox/Templates/人物问答模板", "01-MOCs/人物研究提问指南"],
  ["10-Automation/reports/timeline_index", "01-MOCs/事件总览"],
  ["安妮案同案人物比较", "07-Queries/07.4_Cross_Matrices/QCross_安妮案同案人物比较"],
  ["11-Appendix/数字人文问答/13-财政与行政官僚体系", "04-Institutions/财政与行政官僚系统"],
  ["11-Appendix/数字人文问答/14-修道院体制与解散运动", "04-Institutions/修道院体系"],
  ["H:/graphrag-0.5.0/ragtest/trilogy/Wolf_Hall/06-Theory/05-历史小说理论与新历史主义", "06-Theory/05-历史小说理论与新历史主义"],
])

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

function isCanonicalHtml(relativePath) {
  const normalized = relativePath.split(path.sep).join("/")
  const parsed = path.parse(relativePath)
  if (parsed.base === "404.html") return false
  if (parsed.base === "index.html") {
    return !normalized.split("/").some((segment, index) => index > 0 && segment.startsWith("p-"))
  }
  return !parsed.name.startsWith("p-")
}

function buildAliasSegment(relativePath) {
  const digest = crypto.createHash("sha1").update(relativePath, "utf8").digest("hex").slice(0, 10)
  return `p-${digest}`
}

function normalizeForMap(relativePath) {
  const parsed = path.parse(relativePath)
  return posix.join(parsed.dir.split(path.sep).join("/"), parsed.name)
}

function normalizeResolvedBase(currentDir, baseHref) {
  if (baseHref === "" || baseHref === ".") {
    return currentDir === "." ? "" : currentDir
  }

  if (baseHref.startsWith("/")) {
    return baseHref.replace(/^\/+/, "").replace(/^wolf_hall\/?/, "")
  }

  return posix.normalize(posix.join(currentDir, baseHref))
}

async function buildAliasMap(canonicalHtmlFiles) {
  const aliasMap = new Map()

  for (const htmlFile of canonicalHtmlFiles) {
    const relativePath = path.relative(publicDir, htmlFile)
    const parsed = path.parse(relativePath)

    if (parsed.base === "index.html" || parsed.base === "404.html") {
      continue
    }

    const normalized = normalizeForMap(relativePath)
    const aliasSegment = buildAliasSegment(normalized)
    aliasMap.set(normalized, posix.join(parsed.dir.split(path.sep).join("/"), aliasSegment))
  }

  return aliasMap
}

async function rewriteCanonicalLinks(canonicalHtmlFiles, aliasMap) {
  for (const htmlFile of canonicalHtmlFiles) {
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

      const resolvedBase = normalizeResolvedBase(currentDir, baseHref)
      const normalizedResolved = resolvedBase.replace(/^\.\//, "").replace(/\/$/, "")
      const redirectedTarget = customRedirects.get(normalizedResolved) ?? normalizedResolved
      const finalTarget = aliasMap.get(redirectedTarget) ?? redirectedTarget
      const finalHref = finalTarget ? `${siteBase}/${finalTarget}/` : `${siteBase}/`

      return `href="${finalHref}${anchor}"`
    })

    await fs.writeFile(htmlFile, html, "utf8")
  }
}

async function emitPrettyAndAliasCopies(canonicalHtmlFiles, aliasMap) {
  for (const htmlFile of canonicalHtmlFiles) {
    const relativePath = path.relative(publicDir, htmlFile)
    const parsed = path.parse(relativePath)

    if (parsed.base === "index.html" || parsed.base === "404.html") {
      continue
    }

    const prettyDir = path.join(publicDir, parsed.dir, parsed.name)
    await fs.mkdir(prettyDir, { recursive: true })
    await fs.copyFile(htmlFile, path.join(prettyDir, "index.html"))

    const normalized = normalizeForMap(relativePath)
    const aliasTarget = aliasMap.get(normalized)
    if (!aliasTarget) continue

    const aliasDir = path.join(publicDir, aliasTarget.split("/").join(path.sep))
    await fs.mkdir(aliasDir, { recursive: true })
    await fs.copyFile(htmlFile, path.join(aliasDir, "index.html"))
  }
}

const allHtmlFiles = await collectHtmlFiles(publicDir)
const canonicalHtmlFiles = allHtmlFiles.filter((file) => isCanonicalHtml(path.relative(publicDir, file)))
const aliasMap = await buildAliasMap(canonicalHtmlFiles)

await rewriteCanonicalLinks(canonicalHtmlFiles, aliasMap)
await emitPrettyAndAliasCopies(canonicalHtmlFiles, aliasMap)

console.log(`Pretty URL directories and link rewrites generated in: ${publicDir}`)
