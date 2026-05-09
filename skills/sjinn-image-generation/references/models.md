# SJinn Image Models

Use these public model names with `sjinn image generate --model`.

| Model | Best for | Options |
| --- | --- | --- |
| `gpt-image-2` | General image generation and edits | `--prompt`, `--image`, `--aspect` |
| `nano-banana` | Fast image generation and variations | `--prompt`, `--image`, `--aspect` |
| `nano-banana-pro` | Higher quality image generation | `--prompt`, `--image`, `--aspect`, `--resolution` |
| `nano-banana-2` | Higher resolution image generation | `--prompt`, `--image`, `--aspect`, `--resolution` |
| `seedream` | Stylized image generation | `--prompt`, `--image`, `--aspect` |
| `seedream-v4` | Image generation and edits | `--prompt`, `--image`, `--aspect` |

## Common Options

- `--prompt <text>`: Required image description.
- `--image <paths-or-urls>`: Optional reference images. Local paths and URLs are supported. Multiple values are comma-separated.
- `--aspect <ratio>`: Output aspect ratio such as `1:1`, `16:9`, `9:16`, `4:3`, or `3:4`.
- `--resolution <res>`: Supported by selected models, such as `1K`, `2K`, or `4K`.
- `--async`: Return a task ID without waiting.
- `--download [path]`: Download the result when complete.
- `--json`: Emit machine-readable output.
