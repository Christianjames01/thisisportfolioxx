# Christian James Ortouste — Portfolio

React + Vite, plain CSS, no other runtime dependencies.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Update your content

| What | Where |
|------|-------|
| Name, intro, email, GitHub, LinkedIn, education, internships, certifications | `src/data/profile.js` |
| Projects (featured + "other projects") | `src/data/projects.js` |
| Skills, proficiency levels, "Experience Through Projects" | `src/data/skills.js` |
| Profile photo | `public/images/profile.jpg` (portrait 4:5 or square, ~1000px+) |
| Resume | `public/resume.pdf` (downloads as `Christian-James-Ortouste-Resume.pdf`) |
| Project screenshots | `public/images/projects/` |
| Page title, description, share image, canonical URL | `index.html`, `public/og-image.png` |

Empty fields are hidden automatically. The resume button appears only once
`public/resume.pdf` exists (in development a dashed placeholder reminds you).

## Add a project

Copy the template at the bottom of `src/data/projects.js` into the `projects`
array, or add a short entry to `otherProjects`. Leave `github`/`demo` empty to
hide those buttons.

## Deploy (Vercel)

1. Push this folder to a new GitHub repository.
2. On vercel.com → **Add New → Project** → import the repository.
3. Framework preset: **Vite** (build `npm run build`, output `dist`). Deploy.
4. Put the resulting URL in `profile.siteUrl` and in the commented canonical /
   `og:url` tags in `index.html`, and change `og:image` to the absolute URL.

Netlify or GitHub Pages also work — any static host serving `dist/`.
