# Marvin Carlos — Portfolio

Single-page portfolio built with Vite + React + Tailwind CSS + Framer Motion. Deployed via GitHub Pages.

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    Nav.jsx          # Top navigation
    Hero.jsx         # Header / intro section
    Work.jsx         # Project list container
    ProjectCard.jsx  # Individual expandable project
    About.jsx        # Bio + skills grid
    Contact.jsx      # CTA + links
    Footer.jsx
  data/
    projects.js      # All project content — edit this to update work
  App.jsx
  main.jsx
  index.css

public/
  assets/
    images/          # Place all downloaded .png/.jpg files here
    gifs/            # Place all downloaded .gif files here
```

## Adding Your Assets

After downloading assets from Squarespace, place them in:
- `public/assets/images/` — all .png and .jpg files
- `public/assets/gifs/` — all .gif files

Expected filenames (matching projects.js):
- mc-logo.png
- central-copy.gif
- copy-rows-to-new-bill.gif
- qb-forms-d4d.png
- qb-ma-01.gif
- qb-ma-05-competitors.gif
- qb-ma-screenshot.png
- ms-r4-01.png
- ms-r4-02.png
- amex-recon-01.png
- amex-recon-02.png
- mastercard-sp-01.jpg
- mastercard-sp-02.jpg
- mastercard-sp-03.jpg
- elt-dashboard-01.png
- elt-dashboard-02.png
- elt-dashboard-03.png

## GitHub Pages Deployment

1. Create a GitHub repo named `marvin-portfolio` (or update `vite.config.js` base to match)
2. Push this project to the repo
3. Run: `npm run deploy`
4. In GitHub repo Settings → Pages → Source: `gh-pages` branch

Your site will be live at: `https://[your-github-username].github.io/marvin-portfolio/`

### Custom Domain (marvincarlos.com)

1. Add a `CNAME` file to the `public/` folder containing: `marvincarlos.com`
2. In your DNS provider, add: `CNAME www → [username].github.io`
3. In GitHub repo Settings → Pages → Custom domain: `marvincarlos.com`

## Updating Content

All project data lives in `src/data/projects.js`. Each project has:
- `images[]` — filenames from public/assets/images/
- `gifs[]` — filenames from public/assets/gifs/
- `overview` — longer description shown when expanded
- `outcomes[]` — { value, label } pairs shown as stat callouts

## Adding Insight Partners Assets

When ready, add images to `public/assets/images/` and update the
`insight-partners` entry in `src/data/projects.js`:

```js
images: ['insight-01.png', 'insight-02.png'],
```
