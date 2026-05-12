# Installing SJinn Skills

SJinn skills are distributed from this GitHub repository. You do not need a SJinn skills npm package release to install them.

## Quick Install

Recommended, cross-agent:

```bash
npx skills add sjinn-ai/skills
```

Install a pinned release:

```bash
npx skills add sjinn-ai/skills@v0.1.1
```

List available skills before installing:

```bash
npx skills add sjinn-ai/skills --list
```

Install one skill:

```bash
npx skills add sjinn-ai/skills --skill sjinn-image-generation
```

## Versions

Versions are GitHub tags and releases. Use the unpinned command for the latest version on `main`, or pin a release when you want repeatable installs:

```bash
npx skills add sjinn-ai/skills@v0.1.1
```

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## Agent Prompt

Copy this prompt to your LLM agent:

```text
Install SJinn skills with:
npx skills add sjinn-ai/skills

After installation, verify that sjinn-setup, sjinn-image-generation,
sjinn-video-generation, and sjinn-task-status are available.
```

## After Installation

Restart or reload your agent session if it does not discover the new skills immediately.

Start with:

```text
Use sjinn-setup to check whether SJinn is installed and authenticated.
```
