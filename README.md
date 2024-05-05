# @aitube/client

*Official API client for AiTube.at*

## ATTENTION

AiTube is currently in heavy development, and for the moment
the API client is reserved for *private use* (it is used by AI Stories Factory).

We are sorry for any inconvenience this might cause.

## Caveats

The official domain for AiTube is `aitube.at`, however right now
the Hugging Face Space is not configured to use this as a domain,
so we need to perform all API calls to `jbilcke-hf-ai-tube.hf.space`.

## Installation

To install the package, run the following command:

```bash
npm install @aitube/client
```

## Getting Started

```typescript
import {
  createClap,
  editClapDialogues,
  editClapEntities,
  editClapStoryboards,
  editClapVideos,
  exportClapToVideo,
  defaultAitubeHostname,
  defaultClapWidth,
  defaultClapHeight,
  defaultExportFormat,
  aitubeUrl,
  aitubeApiVersion,
  aitubeApiUrl,
  ClapCompletionMode,
  ClapEntityPrompt,
  SupportedExportFormat
  } from '@aitube/client';

const ultraSecret = "ultra secret token unavailable to common mortals"

const basicClap = await createClap({
  prompt: "story about a dog",
  token: ultraSecret
})

const illustratedClap = await editClapStoryboards({
  clap: basicClap,
  token: ultraSecret
})

const mp4VideoFile = await exportClapToVideo({
  clap: illustratedClap,
  format: "mp4",
  token: ultraSecret
})
```

## Customizing the server

The hostname can be overriden by defining the `AITUBE_HOSTNAME` environment variable.

eg:

```bash
AITUBE_HOSTNAME=http://localhost:3000
```

## Build Instructions

Install [Bun](https://bun.sh/)

Run the following commands:

```bash
bun install

bun run build
```

To publish:

```bash
bun run build

bun run build:declaration

bun run publish
```

## Contributing

We welcome contributions! Please feel free to submit a pull request.

## License

This package is under the MIT License. See `LICENSE` file for more details.
