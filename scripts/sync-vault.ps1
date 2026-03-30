$ErrorActionPreference = "Stop"

$publishRoot = Split-Path -Parent $PSScriptRoot
$vaultRoot = Split-Path -Parent $publishRoot
$contentRoot = Join-Path $publishRoot "content"

$includeDirs = @(
  "01 MOCs",
  "02 People",
  "03 Events",
  "04 Institutions",
  "05 Concepts",
  "06 Theory",
  "07 Queries",
  "11 Appendix"
)

$includeRootFiles = @("README.md")

if (Test-Path $contentRoot) {
  Get-ChildItem $contentRoot -Force | Remove-Item -Recurse -Force
} else {
  New-Item -ItemType Directory -Path $contentRoot | Out-Null
}

foreach ($dir in $includeDirs) {
  $source = Join-Path $vaultRoot $dir
  if (Test-Path $source) {
    Copy-Item $source -Destination $contentRoot -Recurse -Force
  }
}

foreach ($file in $includeRootFiles) {
  $source = Join-Path $vaultRoot $file
  if (Test-Path $source) {
    Copy-Item $source -Destination $contentRoot -Force
  }
}

$rootMarkdown = Get-ChildItem $vaultRoot -File -Filter *.md | Where-Object { $_.Name -ne "README.md" } | Select-Object -First 1
$readmeFile = Join-Path $vaultRoot "README.md"
$indexFile = Join-Path $contentRoot "index.md"

if ($null -ne $rootMarkdown -and (Test-Path $rootMarkdown.FullName)) {
  Copy-Item $rootMarkdown.FullName -Destination $indexFile -Force
} elseif (Test-Path $readmeFile) {
  Copy-Item $readmeFile -Destination $indexFile -Force
} else {
  Set-Content -Path $indexFile -Encoding UTF8 -Value @(
    "# Wolf Hall Notes",
    "",
    "This site publishes the Wolf Hall research notes with Quartz."
  )
}

Write-Host "Vault content synced to Quartz content directory:" $contentRoot
