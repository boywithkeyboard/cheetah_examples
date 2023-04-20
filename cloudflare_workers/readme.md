## examples/cloudflare_workers

### Building

```bash
deno task build
```

### Deploying

```bash
deno task deploy
```

#### Requirements

- Node.js
- NPM
- `npm i -g wrangler`

### Files

- `.github/workflows/bump.yml` - Updates your dependencies daily at 12 AM (midnight).
- `.vscode/settings.json` - Makes sure you have Deno enabled for your workspace.
- `mod.ts` - Your main file.

### Configuration

You need to set the `name` and `account_id` for your worker script in the `wrangler.toml` file before you can deploy it to Cloudflare's Edge Network.

If you need to edit the `build` or `deploy` task, simply edit those in the `deno.json` file.
