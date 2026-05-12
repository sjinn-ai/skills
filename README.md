# SJinn Skills

[![License](https://img.shields.io/github/license/sjinn-ai/skills?label=license)](./LICENSE)
[![Version](https://img.shields.io/github/v/release/sjinn-ai/skills?label=version)](https://github.com/sjinn-ai/skills/releases)
[![Skills](https://img.shields.io/badge/skills-4-purple)](./skills)

Open source agent skills for image and video generation with SJinn. They work with Codex, Claude Code, Gemini, OpenCode, Hermes, OpenClaw, and other agents that load Markdown-based skills.

These skills teach your agent how to use the official `sjinn` CLI: install and authenticate, create image/video jobs, poll async tasks, and return generated output URLs in a useful format.

The skills are open source. The `sjinn` CLI is the official closed-source execution layer and handles browser login, uploads, API calls, polling, and result formatting.

## Install

Recommended, cross-agent:

```bash
npx skills add sjinn-ai/skills
```

Install a pinned release:

```bash
npx skills add sjinn-ai/skills@<version>
```

### For Humans

Copy and paste this prompt to your LLM agent:

```text
Install SJinn skills with:
npx skills add sjinn-ai/skills

If you need details, follow the instructions here:
https://raw.githubusercontent.com/sjinn-ai/skills/main/INSTALL.md
```

Or read the [Installation Guide](INSTALL.md) and install manually.

### For LLM Agents

Fetch the installation guide and follow it:

```bash
curl -fsSL https://raw.githubusercontent.com/sjinn-ai/skills/main/INSTALL.md
```

## Requirements

- Node.js 18 or newer
- npm
- An SJinn account with access to the official CLI

## Skills

| Skill | Invoke | Description |
| --- | --- | --- |
| `sjinn-setup` | `$sjinn-setup` | Install the official CLI, complete browser authorization, and verify the account with `sjinn auth whoami`. |
| `sjinn-image-generation` | `$sjinn-image-generation` | Generate images from prompts, reference images, URLs, or local files; supports sync, async, and optional downloads. |
| `sjinn-video-generation` | `$sjinn-video-generation` | Generate videos from text, start images, local files, URLs, and optional end frames; supports long-running async jobs. |
| `sjinn-task-status` | `$sjinn-task-status` | Check task progress, inspect failures, and extract final output URLs from `sjinn status <task_id> --json`. |

## Quick Reference

| What you want | Use | Notes |
| --- | --- | --- |
| Set up SJinn on this machine | `sjinn-setup` | Uses browser login only: `sjinn auth login`. |
| Generate an image from text | `sjinn-image-generation` | Runs `sjinn image generate --prompt ... --json`. |
| Transform or restyle an image | `sjinn-image-generation` | Pass an input URL or local file with `--image`. |
| Start a long image job and come back later | `sjinn-image-generation` | Add `--async --json`, then check with `sjinn-task-status`. |
| Generate a video from text | `sjinn-video-generation` | Prefer `--async --json` for long-running video jobs. |
| Animate an image | `sjinn-video-generation` | Pass a start image with `--image`. |
| Generate an end-frame video | `sjinn-video-generation` | Pass both `--image` and `--end-image`. |
| Retrieve a finished result | `sjinn-task-status` | Returns status, errors, and output URLs when available. |

## Quick Start

Ask your agent:

```text
Use sjinn-setup to check whether SJinn is installed and authenticated.
```

Or run the setup commands directly:

```bash
node --version
npm install -g @sjinn-build/cli
sjinn --version
sjinn auth login
sjinn auth whoami
```

Then create jobs through the CLI or the matching skill:

```bash
sjinn image generate --prompt "a clean product render of a glass lamp" --json
sjinn video generate --prompt "a cinematic dolly shot through a neon studio" --async --json
sjinn status <task_id> --json
```

## Boundary

These skills only call stable public CLI commands. They do not document or call SJinn internal service endpoints, storage signing details, provider-specific dispatch fields, custom API base URLs, or token-based login flows.

## Versioning

Versions are GitHub tags and releases. Use `main` for the latest skills, or pin a release with `npx skills add sjinn-ai/skills@<version>`. See [CHANGELOG.md](CHANGELOG.md) for release notes.

## License

MIT - see [LICENSE](LICENSE).
