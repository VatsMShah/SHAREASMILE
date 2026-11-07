# Share a Smile – Official Website

A modern, responsive web application for **Share a Smile USA**, a 501(c)(3) nonprofit organization dedicated to education, healthcare, poverty enrichment, and women empowerment.

## Tech Stack
- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Styling:** Modular CSS architecture with design tokens
- **Typography:** Playfair Display (Headings) & Outfit (Body)

## Project Structure
```text
share-a-smile-website/
├── public/                 # Static assets (images, badges, logos)
│   └── images/
├── src/
│   ├── components/         # Modular React components
│   │   ├── common/         # Shared page primitives (PageHead, Cards, Ul, etc.)
│   │   ├── home/           # Homepage sections (Hero, Pillars, AboutBand, etc.)
│   │   └── layout/         # Layout components (Header, Footer)
│   ├── data/               # Structured data & content models
│   ├── pages/              # Route view components
│   ├── styles/             # Modular CSS stylesheets (variables, layout, components, etc.)
│   ├── App.jsx             # Top-level routing
│   └── main.jsx            # Application entry point
├── vite.config.js          # Vite configuration with '@' alias
└── package.json
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The site will run on `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

## License
Private / Proprietary to Share a Smile USA.

