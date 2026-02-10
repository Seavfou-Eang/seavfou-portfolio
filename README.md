# Seavfou-Eang Portfolio

A modern, responsive portfolio website built with React, Three.js, and Vite. Inspired by [Rayu's Portfolio](https://github.com/Choeng-Rayu/Rayu_Portfolio).

## 🚀 Features

- **3D Interactive Scene** - Three.js powered 3D cube with floating animation
- **Typewriter Effect** - Dynamic text animation on the homepage
- **ChatBot Assistant** - Interactive chatbot to answer questions about Seavfou
- **Responsive Design** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion powered animations throughout
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Modern UI** - Dark theme with gradient accents

## 📁 Project Structure

```
├── public/
│   └── code-icon.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx        # Interactive chatbot component
│   │   ├── ChatBot.css
│   │   └── pages/
│   │       ├── Header.jsx     # Navigation header
│   │       ├── Header.css
│   │       ├── Home.jsx       # Homepage with 3D scene
│   │       ├── Home.css
│   │       ├── About.jsx      # About page
│   │       ├── About.css
│   │       ├── Skills.jsx     # Skills showcase
│   │       ├── Skills.css
│   │       ├── Projects.jsx   # Projects gallery
│   │       ├── Projects.css
│   │       ├── Contact.jsx    # Contact form
│   │       ├── Contact.css
│   │       ├── Footer.jsx     # Footer component
│   │       └── Footer.css
│   ├── styles/
│   │   └── animations.css     # Global animations
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
└── eslint.config.js           # ESLint configuration
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Three.js + React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **CSS3** - Styling with custom properties

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd /home/fou/Desktop/code
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Customization

To customize the portfolio for your own use:

1. **Update Personal Information**
   - Edit `src/components/pages/About.jsx` for your bio
   - Edit `src/components/pages/Home.jsx` for hero section
   - Update GitHub username and email in various components

2. **Add Your Projects**
   - Edit `src/components/pages/Projects.jsx`
   - Add your project details to the `projects` array

3. **Update Skills**
   - Edit `src/components/pages/Skills.jsx`
   - Modify the `skillCategories` array

4. **Change Colors**
   - Edit CSS custom properties in `src/index.css`
   - Modify the `:root` variables

5. **Update SEO**
   - Edit `index.html` with your information
   - Update meta tags and structured data

## 🎨 Color Scheme

The portfolio uses a professional dark theme:

- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#6366f1` (Indigo)
- **Accent**: `#10b981` (Green)
- **Background Dark**: `#0f172a` (Slate 900)
- **Background Medium**: `#1e293b` (Slate 800)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 968px
- **Mobile**: 480px

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Credits

- Inspired by [Rayu's Portfolio](https://github.com/Choeng-Rayu/Rayu_Portfolio)
- Built with [Vite](https://vitejs.dev/)
- 3D graphics powered by [Three.js](https://threejs.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

Made with 💙 by Seavfou-Eang
