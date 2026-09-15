---
name: sjinn-image-generation
description: Generate images or image variations with SJinn using the official sjinn image generate CLI command.
---

# SJinn Image Generation

Use this skill when the user wants to create an image, transform an image, use a reference image, or download an image result through SJinn.

## Prerequisites

Before generating, quickly verify the CLI and login:

```bash
sjinn --version
sjinn auth whoami
```

The CLI must be `0.1.19` or newer for GPT Image 2.5 Flare and Sunburst. If either command fails or the CLI version is older, use `sjinn-setup` first.

## Workflow

1. Choose a model and options. For model-specific options, see `references/models.md`. GPT Image 2.5 models have different aspect ratios from `gpt-image-2`; do not reuse its `auto`, `3:2`, or `2:3` values.
2. Prefer JSON output so results are easy to parse.
3. Use `--async` when the user wants a task ID immediately.
4. Use `--download [path]` only when the user asks to save the result locally.

## Commands

Text to image:

```bash
sjinn image generate --prompt "a clean product render of a glass lamp" --model gpt-image-2 --aspect 1:1 --json
```

Image variation from a URL:

```bash
sjinn image generate --prompt "make this product photo more cinematic" --image "https://example.com/input.png" --model nano-banana --json
```

Image variation from a local file:

```bash
sjinn image generate --prompt "turn this sketch into a polished concept render" --image "./sketch.png" --model seedream-v4 --json
```

GPT Image 2.5 Flare text to image:

```bash
sjinn image generate --prompt "a clean product render of a glass lamp" --model gpt-image-2.5-flare --aspect 3:4 --resolution 2K --json
```

GPT Image 2.5 Sunburst with multiple reference images:

```bash
sjinn image generate --prompt "keep the product from the first image and use the lighting from the second" --model gpt-image-2.5-sunburst --image "./product.png,./lighting.webp" --aspect 16:9 --resolution 4K --json
```

Both GPT Image 2.5 models support up to 16 reference images and default to `--aspect 1:1 --resolution 1K` when those options are omitted.

Async:

```bash
sjinn image generate --prompt "a futuristic workspace at sunrise" --model nano-banana-2 --resolution 4K --async --json
```

## Output Handling

On success, return the task ID, primary URL, any additional URLs, model, and elapsed time. If `status` is `created`, tell the user to query the task with `sjinn-task-status`.

On error, summarize the CLI error plainly and suggest `sjinn-setup` only when the error indicates the CLI is missing or unauthenticated.
