# Holly's Art Studio

A React, TypeScript, and Tailwind website for Holly's Art Studio, built with Vite.

## Development

Use **Node.js 22 or newer**. On Windows, install the current LTS release from
[nodejs.org](https://nodejs.org/en/download), then close and reopen VS Code so
new terminals refresh their PATH. Verify the installation in a new terminal:

```sh
node --version
npm --version
```

The `node` command should print `v22` or a newer version. If Windows says
`'node' is not recognized`, install Node.js and reopen the terminal before
running the project.

```sh
npm install
npm run dev
```

Use `npm run build` to create the production site in `dist/`, and `npm run preview` to serve that build locally. Run `npm run lint` for ESLint.

Run `npm run check` before committing or deploying. It runs ESLint, checks Prettier formatting, type-checks TypeScript, builds both site entries, and verifies that the generated HTML references existing production assets.

## Deployment

GitHub Pages must use **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow builds and deploys `dist/`; the root `index.html` is for Vite development and must not be published directly. After deployment, the workflow checks that the live site serves compiled JavaScript and CSS.

## Project structure

- `src/components/layout/` contains the shared site banner and footer.
- `src/components/shared/` contains reusable UI and typography primitives.
- `src/components/tabs/` contains the portfolio tab controller and its panels.
- `src/pages/` contains route-level page components.
- `src/assets/` contains images imported by React components.
- `src/constants/` and `src/data/` contain shared copy and portfolio data.
- `flyers/index.html` is the secondary Vite HTML entry point for the `/flyers/` page; its React page component is in `src/pages/FlyerPage.tsx`.
