import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const skillsDir = join(root, 'skills')
const changelogPath = join(root, 'CHANGELOG.md')

const forbiddenPatterns = [
  /\/api\/un-api/,
  /\btool_type\b/,
  /\bSJINN_API_BASE\b/,
  /--token\b/,
]

function fail(message) {
  console.error(`Error: ${message}`)
  process.exitCode = 1
}

if (!existsSync(skillsDir)) {
  fail('skills directory is missing')
  process.exit()
}

if (!existsSync(changelogPath)) {
  fail('CHANGELOG.md is missing')
}

const skillNames = readdirSync(skillsDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort()

if (skillNames.length === 0) {
  fail('no skills found')
}

for (const skillName of skillNames) {
  const skillDir = join(skillsDir, skillName)
  const skillPath = join(skillDir, 'SKILL.md')
  const platformMetadataDir = join(skillDir, 'agents')

  if (!existsSync(skillPath)) {
    fail(`${skillName}: missing SKILL.md`)
    continue
  }

  if (existsSync(platformMetadataDir)) {
    fail(`${skillName}: platform-specific metadata directory is not allowed`)
  }

  const body = readFileSync(skillPath, 'utf8')
  if (!body.startsWith('---\n')) {
    fail(`${skillName}: SKILL.md must start with YAML frontmatter`)
  }
  if (!/^name:\s*.+$/m.test(body)) {
    fail(`${skillName}: SKILL.md frontmatter missing name`)
  }
  if (!/^description:\s*.+$/m.test(body)) {
    fail(`${skillName}: SKILL.md frontmatter missing description`)
  }

  const filesToScan = [skillPath]
  const referencesDir = join(skillDir, 'references')
  if (existsSync(referencesDir)) {
    for (const fileName of readdirSync(referencesDir)) {
      filesToScan.push(join(referencesDir, fileName))
    }
  }

  for (const filePath of filesToScan) {
    const content = readFileSync(filePath, 'utf8')
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(content)) {
        fail(`${skillName}: forbidden closed-source detail matched ${pattern} in ${filePath}`)
      }
    }
  }
}

if (!process.exitCode) {
  console.log(`Validated ${skillNames.length} skills.`)
}
