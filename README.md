# Zhangpeng Website

Personal portfolio website for ZHANG Peng, AI Product Operations Director.

## Live Website

The website is deployed using GitHub Pages and can be accessed at:

**🌐 [https://GoldBlackZ.github.io/Zhangpeng_Website/](https://GoldBlackZ.github.io/Zhangpeng_Website/)**

## Technology Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: GitHub Pages with GitHub Actions

## Project Structure

```
Zhangpeng_Website/
├── app/                    # Main application code
│   ├── src/               # React source code
│   ├── public/            # Static assets
│   ├── package.json       # Dependencies
│   └── vite.config.ts     # Build configuration
├── .github/workflows/     # GitHub Actions workflows
│   └── deploy.yml         # Deployment pipeline
└── README.md              # This file
```

## Local Development

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Deployment Configuration

- **Base URL**: `/Zhangpeng_Website/` (for GitHub Pages)
- **Build Output**: `app/dist/`
- **SPA Routing**: Configured with 404.html for client-side routing

## Features

- Responsive design
- Modern UI with shadcn/ui components
- Optimized for performance
- SEO-friendly metadata
- Automatic deployment via GitHub Actions

## License

© 2024 ZHANG Peng. All rights reserved.