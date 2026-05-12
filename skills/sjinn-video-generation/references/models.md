# SJinn Video Models

Use these public model names with `sjinn video generate --model`.

| Model | Best for | Supported options and values |
| --- | --- | --- |
| `veo3` | General text-to-video and image-to-video | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`; `--end-image` for image-to-video |
| `sora2` | Text-to-video and image-to-video | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`; `--duration` `4`, `8`, `12`; `--mode` `std`, `pro` |
| `grok` | Flexible short video generation | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds |
| `kling3` | Image animation and controlled video | `--prompt`, `--image`; text-to-video `--aspect` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds; `--mode` `standard`, `pro`; `--multi-shot` `true`, `false`; `--end-image` for image-to-video |
| `seedance2` | Multi-reference video generation | `--prompt`, `--image`, `--media-urls` up to 9 items; `--aspect` `16:9`, `9:16`, `1:1`, `4:3`, `3:4`; `--duration` 4-15 seconds; `--mode` `pro`, `fast`; `--resolution` `480p`, `720p`, `1080p` |

## Common Options

- `--prompt <text>`: Required video description.
- `--image <path-or-url>`: Optional starting image. Local paths and URLs are supported.
- `--end-image <path-or-url>`: Optional end frame for `veo3` and `kling3` image-to-video.
- `--duration <seconds>`: Video duration. Use only values or ranges listed for the selected model.
- `--aspect <ratio>`: Output aspect ratio. Use only values listed for the selected model.
- `--mode <mode>`: Model quality or speed mode. Use only values listed for the selected model.
- `--resolution <res>`: Output resolution for `seedance2`.
- `--media-urls <urls>`: Comma-separated reference media URLs for `seedance2`, up to 9 items.
- `--multi-shot <true|false>`: Multi-shot mode for `kling3`.
- `--async`: Return a task ID without waiting.
- `--download [path]`: Download the result when complete.
- `--json`: Emit machine-readable output.
