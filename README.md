# Holly's Art Studio

A React, TypeScript, and Tailwind website for Holly's Art Studio, built with Vite.

## Development

```sh
npm install
npm run dev
```

Use `npm run build` to create the production site in `dist/`, and `npm run preview` to serve that build locally. Run `npm run lint` for ESLint.

## Project structure

- `src/components/layout/` contains the shared site banner and footer.
- `src/components/shared/` contains reusable UI and typography primitives.
- `src/components/tabs/` contains the portfolio tab controller and its panels.
- `src/pages/` contains route-level page components.
- `src/assets/` contains images imported by React components.
- `src/constants/` and `src/data/` contain shared copy and portfolio data.
- `flyers/index.html` is the secondary Vite HTML entry point for the `/flyers/` page; its React page component is in `src/pages/FlyerPage.tsx`.
