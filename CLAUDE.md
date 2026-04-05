# Marvin Portfolio — Claude Code Notes

## Deployment
- Site is deployed via `npm run deploy` (builds and pushes to `gh-pages` branch)
- GitHub Pages serves from `gh-pages` branch, NOT `main`
- Custom domain: `marvincarlos.com`
- `public/CNAME` contains the custom domain — never delete this
- `vite.config.js` base is set to `/` (not `/marvin-portfolio/`)
- Do NOT change base back to `/marvin-portfolio/`
- After code changes, always run `npm run deploy` to publish
- `git push` alone only updates `main`, not the live site

## Stack
- React + Vite + Tailwind + Framer Motion
- Deployed to GitHub Pages via gh-pages branch
- Custom domain: marvincarlos.com

## Key Files
- `public/CNAME` — custom domain mapping, do not delete
- `vite.config.js` — base must stay as `/`
- `public/404.html` — handles React Router client-side routing on GitHub Pages
