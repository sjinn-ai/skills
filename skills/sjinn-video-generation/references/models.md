# SJinn Video Models

Use these public model names with `sjinn video generate --model`.

| Model | Best for | Supported options and values |
| --- | --- | --- |
| `veo3` | General text-to-video and image-to-video | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`; `--end-image` for image-to-video |
| `gemini-omni-video` | Full-modality video with reference images and audio-native output | `--prompt`, `--image-urls` up to 7 reference images, `--video-urls` at most 1 reference video; `--aspect` `16:9`, `9:16`; `--duration` `4`, `6`, `8`, `10` |
| `grok` | Flexible short video generation | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds |
| `kling3` | Image animation and controlled video | `--prompt`, `--image`; text-to-video `--aspect` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds; `--mode` `standard`, `pro`; `--multi-shot` `true`, `false`; `--end-image` for image-to-video |
| `seedance2` | Multi-reference video generation | `--prompt`, `--image`, `--media-urls` up to 9 total image/video/audio reference paths or URLs; `--aspect` `16:9`, `9:16`, `1:1`, `4:3`, `3:4`; `--duration` 4-15 seconds; `--mode` `pro`, `fast`; `--resolution` `480p`, `720p`, `1080p` |
| `seedance2.5` | Multimodal reference video generation | `--prompt`; `--image-urls` up to 30 local `.jpg`, `.jpeg`, `.png`, `.webp` files or URLs; `--video-urls` up to 10 local `.mp4`, `.mov` files or URLs; `--audio-urls` up to 10 local `.mp3`, `.m4a`, `.wav` files or URLs; `--duration` 4-30 seconds; `--aspect` `16:9`, `9:16`, `1:1`, `3:4`, `4:3`, `21:9`; `--resolution` `480p`, `720p`, `1080p` |

## Common Options

- `--prompt <text>`: Required video description.
- `--image <path-or-url>`: Optional starting image. Local paths and URLs are supported.
- `--end-image <path-or-url>`: Optional end frame for `veo3` and `kling3` image-to-video.
- `--duration <seconds>`: Video duration. Use only values or ranges listed for the selected model.
- `--aspect <ratio>`: Output aspect ratio. Use only values listed for the selected model.
- `--mode <mode>`: Model quality or speed mode. Use only values listed for the selected model.
- `--resolution <res>`: Output resolution for `seedance2` and `seedance2.5`.
- `--media-urls <paths-or-urls>`: Comma-separated image, video, or audio reference paths or URLs for `seedance2`, up to 9 total items across all media types. Supported local extensions are `.jpg`, `.jpeg`, `.png`, `.webp`, `.mp4`, `.mov`, `.mp3`, `.m4a`, and `.wav`. Requires `@sjinn-build/cli` 0.1.15 or newer. For `seedance2`, use either `--image` or `--media-urls`; put all multi-reference inputs in `--media-urls`.
- `--image-urls <paths-or-urls>`: Comma-separated reference images for `gemini-omni-video`, up to 7 total. Local `.jpg`, `.jpeg`, `.png`, `.webp` are uploaded automatically; a single `--image` is merged into this set. For `seedance2.5`, provide up to 30 reference images with the same local extensions or URLs.
- `--video-urls <paths-or-urls>`: Reference video for `gemini-omni-video`, at most 1 (`.mp4`, `.mov`). For `seedance2.5`, provide up to 10 reference videos with the same local extensions or URLs.
- `--audio-urls <paths-or-urls>`: For `seedance2.5`, provide up to 10 reference audio files or URLs (`.mp3`, `.m4a`, `.wav`). Seedance 2.5 reference inputs must not be combined with `--image`, `--media-urls`, or `--mode`.
- Seedance 2.5 prompt references: Use `@Image 1`, `@Video 1`, and `@Audio 1` to refer to supplied resources. Number each media type independently in the comma-separated order of its matching option, and reference only resources included in the command.
- `--multi-shot <true|false>`: Multi-shot mode for `kling3`.
- `--async`: Return a task ID without waiting.
- `--download [path]`: Download the result when complete.
- `--json`: Emit machine-readable output.
