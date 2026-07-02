# SJinn Video Models

Use these public model names with `sjinn video generate --model`.

| Model | Best for | Supported options and values |
| --- | --- | --- |
| `veo3` | General text-to-video and image-to-video | `--prompt`, `--start-frame-url`, `--end-frame-url`; `--aspect-ratio` `16:9`, `9:16` |
| `gemini-omni-video` | Full-modality video with reference images and audio-native output | `--prompt`, `--image-urls` up to 7 reference images, `--video-urls` at most 1 reference video; `--aspect-ratio` `16:9`, `9:16`; `--duration` `4`, `6`, `8`, `10` |
| `grok` | Flexible short video generation | `--prompt`, `--start-frame-url`; `--aspect-ratio` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds |
| `kling3` | Image animation and controlled video | `--prompt`, `--start-frame-url`, `--end-frame-url`; text-to-video `--aspect-ratio` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds; `--mode` `standard`, `pro`; `--multi-shot` `true`, `false` |
| `seedance2` | Multi-reference video generation | `--prompt`, `--image-urls` up to 9, `--video-urls` up to 3, `--audio-urls` up to 3; `--aspect-ratio` `16:9`, `9:16`, `1:1`, `4:3`, `3:4`; `--duration` 4-15 seconds; `--mode` `pro`, `fast`; `--resolution` `480p`, `720p`, `1080p`; no first/last frame in CLI/MCP |

## Common Options

- `--prompt <text>`: Required video description.
- `--start-frame-url <path-or-url>`: Optional starting image for supported image-to-video models. Local paths and URLs are supported.
- `--end-frame-url <path-or-url>`: Optional end frame for `veo3` and `kling3` image-to-video.
- `--duration <seconds>`: Video duration. Use only values or ranges listed for the selected model.
- `--aspect-ratio <ratio>`: Output aspect ratio. Use only values listed for the selected model.
- `--mode <mode>`: Model quality or speed mode. Use only values listed for the selected model.
- `--resolution <res>`: Output resolution for `seedance2`.
- `--image-urls <paths-or-urls>`: Comma-separated reference images. `seedance2` accepts up to 9; `gemini-omni-video` accepts up to 7. Local `.jpg`, `.jpeg`, `.png`, `.webp` are uploaded automatically.
- `--video-urls <paths-or-urls>`: Comma-separated reference videos. `seedance2` accepts up to 3; `gemini-omni-video` accepts at most 1. Local `.mp4`, `.mov` files are uploaded automatically.
- `--audio-urls <paths-or-urls>`: Comma-separated reference audio files for `seedance2`, up to 3. Local `.mp3`, `.m4a`, `.wav` files are uploaded automatically.
- `--multi-shot <true|false>`: Multi-shot mode for `kling3`.
- `--async`: Return a task ID without waiting.
- `--download [path]`: Download the result when complete.
- `--json`: Emit machine-readable output.
