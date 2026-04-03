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
      results.push({ fullPath, name: entry.name, parentDir: dir })
    }
  }

  return results
}

function shouldEmitPrettyCopy(entry) {
  if (entry.name === "404.html") return false
  if (entry.name === "index.html") return false
  return true
}

async function emitPrettyCopies(htmlFiles) {
  for (const entry of htmlFiles) {
    if (!shouldEmitPrettyCopy(entry)) continue

    const baseName = entry.name.slice(0, -".html".length)
    const prettyDir = path.join(entry.parentDir, baseName)

    await fs.mkdir(prettyDir, { recursive: true })
    await fs.copyFile(entry.fullPath, path.join(prettyDir, "index.html"))
  }
}

const htmlFiles = await collectHtmlFiles(publicDir)
await emitPrettyCopies(htmlFiles)

console.log(`Pretty URL directories generated in: ${publicDir}`)
