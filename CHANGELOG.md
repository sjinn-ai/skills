# Changelog

## v0.1.3 - 2026-07-01

- Documented `gemini-omni-video` for video generation with reference images and one reference video.
- Removed obsolete `sora2` video model guidance.
- Documented that these skills require `@sjinn-build/cli` 0.1.14 or newer for Gemini Omni Video guidance.

## v0.1.2 - 2026-06-23

- Documented Seedance 2.0 multi-reference media inputs through `--media-urls`.
- Documented that these skills require `@sjinn-build/cli` 0.1.13 or newer.
- Clarified supported image, video, and audio reference paths or HTTP(S) URLs, with a 9-item total limit.
- Documented that Seedance 2.0 users should use either `--image` or `--media-urls`, putting all multi-reference inputs in `--media-urls`.
- Clarified HTTP(S) URL wording for image reference inputs.

## v0.1.1 - 2026-05-12

- Updated image and video generation model reference tables with supported option values.
- Renamed the video generation `seedance` model reference to `seedance2`.

## v0.1.0 - 2026-05-11

- Initial public SJinn skills release.
- Added setup, image generation, video generation, and task status skills.
- Documented GitHub-based installation with `npx skills add sjinn-ai/skills`.
