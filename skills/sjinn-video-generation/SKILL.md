---
name: sjinn-video-generation
description: Generate videos with SJinn using the official sjinn video generate CLI command.
---

# SJinn Video Generation

Use this skill when the user wants to create a video from text, animate an image, use an end frame, or download a generated video through SJinn.

## Prerequisites

Before generating, quickly verify the CLI and login:

```bash
sjinn --version
sjinn auth whoami
```

If either command fails, use `sjinn-setup` first.

## Workflow

1. Choose a model and options. For model-specific options, see `references/models.md`.
2. Prefer JSON output so results are easy to parse.
3. Use `--async` for long-running jobs unless the user explicitly wants to wait.
4. Use `--download [path]` only when the user asks to save the result locally.

## Commands

Text to video:

```bash
sjinn video generate --prompt "a cinematic dolly shot through a neon studio" --model veo3 --aspect 16:9 --async --json
```

Image to video from a URL:

```bash
sjinn video generate --prompt "slow camera push in, soft evening light" --image "https://example.com/frame.png" --model kling3 --duration 5 --json
```

Image to video from a local file:

```bash
sjinn video generate --prompt "animate this character turning toward camera" --image "./character.png" --model sora2 --duration 4 --async --json
```

End-frame video:

```bash
sjinn video generate --prompt "transition from morning to sunset" --image "./start.png" --end-image "./end.png" --model veo3 --json
```

## Output Handling

On success, return the task ID, primary URL, any additional URLs, model, and elapsed time. If `status` is `created`, tell the user to query the task with `sjinn-task-status`.

On error, summarize the CLI error plainly and suggest `sjinn-setup` only when the error indicates the CLI is missing or unauthenticated.
