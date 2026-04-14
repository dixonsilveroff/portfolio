# Portfolio Website

Modern portfolio website for Victor (Vick) built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Clean, minimalistic design with premium aesthetics
- ⚡ Lightning-fast performance with Vite
- 📱 Fully responsive across all devices
- ♿ Accessibility-first approach
- 🎯 SEO optimized
- 🎭 Smooth animations and micro-interactions
- 📂 Projects showcase with filtering
- 📝 Case study pages with detailed project information

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── data/           # Project and content data
│   ├── assets/         # Images and static assets
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
└── package.json        # Dependencies
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and configure build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Create a new site in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

## Updating Content

### Adding New Projects

Edit `src/data/projectsData.json` and add a new project object with the following structure:

```json
{
  "id": "unique-slug",
  "title": "Project Title",
  "tagline": "Short description",
  "category": ["Web", "SaaS"],
  "stack": ["React", "Node.js"],
  "thumbnail": "/path/to/image.png",
  "featured": true,
  "problem": "...",
  "role": "...",
  "solution": "...",
  "techStack": "...",
  "challenges": "...",
  "results": "...",
  "screenshots": ["..."],
  "links": {
    "github": "...",
    "live": "..."
  }
}
```

### Updating Skills

Edit the skills data in `src/pages/Skills.jsx`.

### Adding Blog Posts

Edit the essays array in `src/pages/Writing.jsx`.

## License

This project is licensed under the MIT License.

## Contact

Victor Nwafor - dixonsilverofficial@gmail.com

Portfolio: [Your deployed URL]
