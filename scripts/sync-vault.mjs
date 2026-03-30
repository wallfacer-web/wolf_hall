import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publishRoot = path.resolve(__dirname, "..")
const vaultRoot = path.resolve(publishRoot, "..")
const contentRoot = path.join(publishRoot, "content")
const homepageTemplate = path.join(publishRoot, "site", "homepage.md")

const includeDirs = [
  "01 MOCs",
  "02 People",
  "03 Events",
  "04 Institutions",
  "05 Concepts",
  "06 Theory",
  "07 Queries",
  "11 Appendix",
]

const includeRootFiles = ["README.md"]

function resetDir(target) {
  fs.rmSync(target, { recursive: true, force: true })
  fs.mkdirSync(target, { recursive: true })
}

function copyIfExists(source, destination) {
  if (fs.existsSync(source)) {
    fs.cpSync(source, destination, { recursive: true, force: true })
  }
}

resetDir(contentRoot)

for (const dir of includeDirs) {
  copyIfExists(path.join(vaultRoot, dir), path.join(contentRoot, dir))
}

for (const file of includeRootFiles) {
  copyIfExists(path.join(vaultRoot, file), path.join(contentRoot, file))
}

const indexFile = path.join(contentRoot, "index.md")
if (fs.existsSync(homepageTemplate)) {
  copyIfExists(homepageTemplate, indexFile)
} else if (fs.existsSync(path.join(vaultRoot, "README.md"))) {
  copyIfExists(path.join(vaultRoot, "README.md"), indexFile)
} else {
  fs.writeFileSync(
    indexFile,
    "# Wolf Hall Notes\n\nThis site publishes the Wolf Hall research notes with Quartz.\n",
    "utf8",
  )
}

console.log(`Vault content synced to Quartz content directory: ${contentRoot}`)
