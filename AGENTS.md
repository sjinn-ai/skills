# AGENTS.md

Guidance for agents working in this repository.

## Project Scope

This repository contains open source agent skills for using SJinn through the official `sjinn` CLI.

The `sjinn` CLI is the closed-source execution layer. Skills in this repository must only call stable public CLI commands.

## Hard Boundaries

- Do not document or call SJinn internal service endpoints.
- Do not expose provider dispatch fields or internal task routing names.
- Do not document upload signing details.
- Do not guide users to configure custom API base URLs.
- Do not guide users through token-based login.
- Use browser login only:

```bash
sjinn auth login
```

## Skill Structure

Each skill must include:

- `SKILL.md`

Reference files may live under `references/` when detailed model tables or troubleshooting notes would make `SKILL.md` too long.

Do not add README files inside individual skill folders.
Do not add metadata folders for a single agent platform.

## Distribution

This repository is distributed through GitHub and the cross-agent skills CLI:

```bash
npx skills add sjinn-ai/skills
```

Do not add or document a custom SJinn skills npm package release flow unless explicitly requested.

Do not make installation steps install the SJinn CLI, run authentication, write credentials, call SJinn services, or add platform-specific metadata.

## Releases

Versions are GitHub tags and releases. Maintainers manually update `package.json`'s strict `x.y.z` version, then push to `main`; the GitHub Actions `Release` workflow creates `v<version>` and publishes a release only when that version is higher than the existing highest `vMAJOR.MINOR.PATCH` tag. Release notes are read from the matching `## vX.Y.Z` (or `## vX.Y.Z - ...`) section in `CHANGELOG.md`.

No manual `workflow_dispatch` release is required.

## Validation

Run before finishing changes:

```bash
npm run validate
```

The validator checks required files and scans skill content for closed-source implementation details.
