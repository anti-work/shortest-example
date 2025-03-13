# Shortest example repo

A minimal example showing how to use [@antiwork/shortest](https://www.npmjs.com/package/@antiwork/shortest) - an AI-powered natural language end-to-end testing framework.

> [!NOTE]
> This is a template repository for reproducing issues. Please **do not** submit pull requests.
> For feature requests or questions, use [Discussions](https://github.com/antiwork/shortest/discussions).

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Click the "Use this template" button above, or [use this template directly](https://github.com/new?template_name=shortest-example&template_owner=antiwork).

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

5. Run the example test:

```bash
npx shortest
```

## Create a bug report

1. Modify `example.test.ts` to reproduce your issue
2. Run the test:

```bash
# Wrapper script around Shortest to log the output to .shortest/trace.log
npm run test:trace

# Or with Shortest arguments
npm run test:trace -- --no-cache
```

3. Commit and push your changes:

> [!IMPORTANT]
> The `.shortest` folder contains valuable debugging information and it will be commited to the repository.
> Please review its contents before sharing to ensure you're not including any sensitive information you don't want to share publicly.

```bash
git add .
git commit -m "Add reproduction"
git push
```

5. [Create a bug report](https://github.com/antiwork/shortest/issues/new?template=bug.yml) and include your repo URL

## License

MIT
