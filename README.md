# Shortest example repo

A minimal example showing how to use the [@anti-work/shortest](https://www.npmjs.com/package/@antiwork/shortest) package for AI-powered natural language end-to-end testing framework.

Use this as a starting point when creating a [minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) for bug reports.

If you have questions about [Shortest](https://shortest.com), [join our discussions](https://github.com/anti-work/shortest/discussions)!

## Creating a bug report

1. Fork this repo
2. Modify `example.test.ts` to reproduce your issue
3. [Create a bug report](https://github.com/anti-work/shortest/issues/new?template=bug.yml) and include your repo URL

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Click the "Use this template" button above, or [use this template directly](https://github.com/new?template_name=shortest-example&template_owner=anti-work).

2. Clone your new repository:
  ```bash
  git clone https://github.com/YOUR_USERNAME/shortest-example.git
  cd shortest-example
  ```

3. Install dependencies:
```bash
npm install
```

4. Set up your environment variables:
```bash
cp .env.example .env
```
Then edit `.env` and replace `your_anthropic_api_key_here` with your actual [Anthropic API key](https://console.anthropic.com).

5. Run the example test (debug mode, no caching):
```bash
npx shortest --debug-ai --no-cache
```

## License

MIT
