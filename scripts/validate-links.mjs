import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, "..")
const publicDir = path.join(root, "public")
const siteBase = "/wolf_hall"

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

function isIgnoredHref(href) {
  return (
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
    href.includes(".pdf")
  )
}

async function exists(target) {
  try {
    await fs.access(target)
    return true
  } catch {
    return false
  }
}

const htmlFiles = await collectHtmlFiles(publicDir)
const failures = []

for (const htmlFile of htmlFiles) {
  const html = await fs.readFile(htmlFile, "utf8")
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1])

  for (const href of hrefs) {
    if (isIgnoredHref(href)) continue

    const baseHref = href.split("#")[0]
    let resolved = ""

    if (baseHref.startsWith(siteBase)) {
      const relative = baseHref.slice(siteBase.length).replace(/^\/+/, "")
      resolved = relative ? path.join(publicDir, relative, "index.html") : path.join(publicDir, "index.html")
    } else if (baseHref.startsWith("/")) {
      const relative = baseHref.replace(/^\/+/, "")
      resolved = path.join(publicDir, relative, "index.html")
    } else {
      resolved = path.resolve(path.dirname(htmlFile), baseHref, "index.html")
    }

    if (!(await exists(resolved))) {
      failures.push({
        page: path.relative(publicDir, htmlFile),
        href,
        target: path.relative(publicDir, resolved),
      })
    }
  }
}

if (failures.length > 0) {
  console.error(`Broken links found: ${failures.length}`)
  for (const failure of failures.slice(0, 200)) {
    console.error(`${failure.page} -> ${failure.href} -> ${failure.target}`)
  }
  process.exit(1)
}

console.log(`Validated ${htmlFiles.length} HTML files with no broken internal links.`)
