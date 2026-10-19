# SJinn Video Models

Use these public model names with `sjinn video generate --model`.

| Model | Best for | Supported options and values |
| --- | --- | --- |
| `veo3` | General text-to-video and image-to-video | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`; `--end-image` for image-to-video |
| `gemini-omni-video` | Full-modality video with reference images and audio-native output | `--prompt`, `--image-urls` up to 7 reference images, `--video-urls` at most 1 reference video; `--aspect` `16:9`, `9:16`; `--duration` `4`, `6`, `8`, `10` |
| `grok` | Flexible short video generation | `--prompt`, `--image`; `--aspect` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds |
| `kling4` | Text-to-video or image/video reference generation | Requires `--prompt` (max 8,000 characters); up to 10 `--image-urls` and 5 `--video-urls`; `--duration` integer 3-30 seconds (default 5); `--resolution` `720p` (default), `1080p`; `--aspect` `16:9` (default), `9:16`, `1:1`, `21:9`, `auto` |
| `kling4-frames` | First, last, and ordered intermediate frame control | Requires `--image`; optional `--end-image`, `--keyframe-urls`, and `--prompt` (non-empty when provided, max 8,000 characters); `--duration` integer 3-30 seconds (default 5); `--resolution` `720p` (default), `1080p`; aspect follows the input image, so `--aspect` is not supported |
| `kling3` | Image animation and controlled video | `--prompt`, `--image`; text-to-video `--aspect` `16:9`, `9:16`, `1:1`; `--duration` 3-15 seconds; `--mode` `standard`, `pro`; `--multi-shot` `true`, `false`; `--end-image` for image-to-video |
| `seedance2` | Multi-reference video generation | `--prompt`, `--image`, `--media-urls` up to 9 total image/video/audio reference paths or URLs; `--aspect` `16:9`, `9:16`, `1:1`, `4:3`, `3:4`; `--duration` 4-15 seconds; `--mode` `pro`, `fast`; `--resolution` `480p`, `720p`, `1080p` |
| `seedance2.5` | Multimodal reference video generation | `--prompt`; `--image-urls` up to 30 local `.jpg`, `.jpeg`, `.png`, `.webp` files or URLs; `--video-urls` up to 10 local `.mp4`, `.mov` files or URLs; `--audio-urls` up to 10 local `.mp3`, `.m4a`, `.wav` files or URLs; `--duration` 4-30 seconds; `--aspect` `16:9`, `9:16`, `1:1`, `3:4`, `4:3`, `21:9`; `--resolution` `480p`, `720p`, `1080p` |
| `minimax-h3` | 2K video generation with optional multimodal references | Requires `--prompt`; up to 9 `--image-urls`, 3 `--video-urls`, and 3 `--audio-urls`; `--duration` integer 5-15 seconds (default 5); `--aspect` `auto`, `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` (default `auto`); `--resolution` only `2K` (default) |
| `wan3` | Text or multimodal reference video generation, including references without a prompt | Requires `--prompt` or at least one reference; prompt at most 20,000 characters; up to 10 `--image-urls`, 5 `--video-urls`, and 5 `--audio-urls`; `--duration` integer 2-30 seconds (default 5); `--aspect` `auto`, `16:9`, `9:16`, `1:1`, `4:3`, `3:4` (default `auto`); `--resolution` `480p`, `720p`, `1080p` (default `480p`) |

## Common Options

For Kling 4 reference inputs and frame controls, see [Kling 4 References and Frames](#kling-4-references-and-frames). For `minimax-h3` and `wan3` reference input options, see [MiniMax H3 and Wan3 References](#minimax-h3-and-wan3-references) below.

- `--prompt <text>`: Required non-empty video description, except for `kling4-frames`, or `wan3` when at least one reference is provided.
- `--image <path-or-url>`: Starting image for models that list this option; required for `kling4-frames`. Local paths and URLs are supported. For `kling4`, `minimax-h3`, and `wan3`, use `--image-urls` instead.
- `--end-image <path-or-url>`: Optional end frame for `veo3`, `kling3`, and `kling4-frames` image-to-video.
- `--keyframe-urls <paths-or-urls>`: Comma-separated, chronologically ordered intermediate frames for `kling4-frames` only, excluding first and last frames.
- `--duration <seconds>`: Video duration. Use only values or ranges listed for the selected model.
- `--aspect <ratio>`: Output aspect ratio. Use only values listed for the selected model.
- `--mode <mode>`: Model quality or speed mode. Use only values listed for the selected model.
- `--resolution <res>`: Output resolution for `kling4`, `kling4-frames`, `seedance2`, `seedance2.5`, `minimax-h3`, and `wan3`. Use only values listed for the selected model.
- `--media-urls <paths-or-urls>`: Comma-separated image, video, or audio reference paths or URLs for `seedance2`, up to 9 total items across all media types. Supported local extensions are `.jpg`, `.jpeg`, `.png`, `.webp`, `.mp4`, `.mov`, `.mp3`, `.m4a`, and `.wav`. Requires `@sjinn-build/cli` 0.1.15 or newer. For `seedance2`, use either `--image` or `--media-urls`; put all multi-reference inputs in `--media-urls`.
- `--image-urls <paths-or-urls>`: Comma-separated reference images for `gemini-omni-video`, up to 7 total. Local `.jpg`, `.jpeg`, `.png`, `.webp` are uploaded automatically; a single `--image` is merged into this set. For `seedance2.5`, provide up to 30 reference images with the same local extensions or URLs.
- `--video-urls <paths-or-urls>`: Reference video for `gemini-omni-video`, at most 1 (`.mp4`, `.mov`). For `seedance2.5`, provide up to 10 reference videos with the same local extensions or URLs.
- `--audio-urls <paths-or-urls>`: For `seedance2.5`, provide up to 10 reference audio files or URLs (`.mp3`, `.m4a`, `.wav`). Seedance 2.5 reference inputs must not be combined with `--image`, `--media-urls`, or `--mode`.
- Seedance 2.5 prompt references: Use `@Image 1`, `@Video 1`, and `@Audio 1` to refer to supplied resources. Number each media type independently in the comma-separated order of its matching option, and reference only resources included in the command.
- `--multi-shot <true|false>`: Multi-shot mode for `kling3`.
- `--async`: Return a task ID without waiting.
- `--download [path]`: Download the result when complete.
- `--json`: Emit machine-readable output.

## Kling 4 References and Frames

Both models require CLI `0.1.20` or newer. Use local paths or complete HTTP(S) URLs without embedded credentials. Images support `.jpg`, `.jpeg`, `.png`, `.webp`; videos support `.mp4`, `.mov`. Local files are uploaded automatically, and signed URLs are accepted. Comma-separated lists preserve order and duplicate entries. The CLI checks parameters and all local assets before uploads begin.

Both models reject `--mode`, `--multi-shot`, `--audio-urls`, and `--media-urls`. Use `--async`, `--json`, and optional `--download` through the standard video workflow.

### Omni (`kling4`)

- Requires a non-empty prompt of at most 8,000 characters. Reference inputs are optional for text-to-video.
- Use `--image-urls` for one or more reference images (up to 10), and `--video-urls` for reference videos (up to 5). Images and videos can be combined; counts apply separately by media type.
- Use `@image_1` / `@video_1` (also `@Image1` / `@Video1`) in the prompt. Indices start at 1, count independently by media type, and follow the corresponding list order. Only refer to supplied resources; do not use Seedance 2.5's spaced marker syntax.
- Each reference video must be 3-30 seconds; their combined duration must not exceed 30 seconds. The service checks these limits before charging; local parameter validation alone does not establish video duration.
- References guide generation without fixing specific frames. `--image`, `--end-image`, and `--keyframe-urls` are not supported.

### Frames (`kling4-frames`)

- Requires `--image` as the first frame. `--prompt` may be omitted; if provided, it must be non-empty and at most 8,000 characters.
- `--end-image` is an optional last frame. `--keyframe-urls` contains intermediate frames in chronological order, excluding the first and last frames.
- Total frames, including the required first frame and optional last frame, must not exceed `min(10, duration + 1)`. For example, a 5-second video with both first and last frames can include at most 4 intermediate frames.
- Aspect follows the input image. `--aspect`, `--image-urls`, and `--video-urls` are not supported.

## MiniMax H3 and Wan3 References

Both models require CLI `0.1.18` or newer. Use comma-separated local paths or HTTP(S) URLs with `--image-urls`, `--video-urls`, and `--audio-urls`. Images support `.jpg`, `.jpeg`, `.png`, `.webp`; videos `.mp4`, `.mov`; audio `.mp3`, `.m4a`, `.wav`. Local files are uploaded automatically. Reference order and duplicates are preserved. Image, video, and audio inputs may be combined; their count limits in the table apply separately by media type.

Both models reject `--image`, `--mode`, `--multi-shot`, `--end-image`, and `--media-urls`.

- MiniMax H3: Each reference video and audio must be 2-15 seconds. Total reference-video duration and total reference-audio duration must each be at most 15 seconds.
- Wan3: Total reference-video duration and total reference-audio duration must each be at most 15 seconds. Total reference-video duration plus requested output duration must be at most 30 seconds.

Reference duration limits may produce errors during task creation or generation; successful local parameter validation does not guarantee that the media meets these limits.
