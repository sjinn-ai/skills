# SJinn Video Models

Use these public model names with `sjinn video generate --model`.

| Model | Best for | Options |
| --- | --- | --- |
| `veo3` | General text-to-video and image-to-video | `--prompt`, `--image`, `--aspect`, `--end-image` |
| `sora2` | Text-to-video and image-to-video | `--prompt`, `--image`, `--aspect`, `--duration`, `--mode` |
| `grok` | Flexible short video generation | `--prompt`, `--image`, `--aspect`, `--duration` |
| `kling3` | Image animation and controlled video | `--prompt`, `--image`, `--aspect`, `--duration`, `--mode`, `--multi-shot`, `--end-image` |
| `seedance` | Multi-reference video generation | `--prompt`, `--image`, `--media-urls`, `--aspect`, `--duration`, `--mode`, `--resolution` |

## Common Options

- `--prompt <text>`: Required video description.
- `--image <path-or-url>`: Optional starting image. Local paths and URLs are supported.
- `--end-image <path-or-url>`: Optional end frame for supported models.
- `--duration <seconds>`: Video duration where supported.
- `--aspect <ratio>`: Output aspect ratio such as `16:9`, `9:16`, or `1:1`.
- `--mode <mode>`: Model quality or speed mode where supported.
- `--resolution <res>`: Output resolution where supported.
- `--media-urls <urls>`: Comma-separated reference media URLs where supported.
- `--multi-shot <true|false>`: Multi-shot mode where supported.
- `--async`: Return a task ID without waiting.
- `--download [path]`: Download the result when complete.
- `--json`: Emit machine-readable output.
