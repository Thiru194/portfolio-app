# 💼 Thiruselvan S — Personal Portfolio

A modern, fully responsive personal portfolio built with **React.js**, showcasing my skills, projects, education, and contact details. Features a persistent dark/light theme and subtle animations for a polished experience.

### 🔗 Live Demo
**[https://thiru194.github.io/portfolio-app/](https://thiru194.github.io/portfolio-app/)**

---

## ✨ Features

- **Responsive design** — adapts from desktop to mobile; the side navigation collapses into a bottom bar on smaller screens.
- **Dark / light mode** — toggle with a single click; your choice is saved in `localStorage` and persists across visits.
- **Active-link scroll spy** — the navigation highlights the section currently in view.
- **Animated hero** — gradient shine on the name plus a typewriter effect cycling through roles.
- **Smooth interactions** — section reveal animations, hover lifts on cards and buttons.
- **Sections** — Home, About, Technical Skills, Journey (education & experience), and Contact.
- **Downloadable résumé** — one-click PDF download.

---

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| Frontend | React.js, JavaScript (ES6+), CSS3 |
| UI / Icons | Bootstrap, React Bootstrap, Font Awesome, Simple Line Icons |
| Routing | React Router DOM |
| Tooling | Create React App |
| Deployment | GitHub Pages (`gh-pages`) |

---

## 📂 Project Structure

```
portfolio-app/
├── public/                 # index.html, favicon, résumé PDF
└── src/
    ├── App.js              # App shell (sidebar + sections)
    ├── index.css           # Theme variables (light & dark), globals
    ├── App.css             # Layout offsets
    └── Components/
        ├── sidebar/        # Navigation + dark-mode toggle
        ├── home/           # Hero with typewriter & socials
        ├── about/          # About + résumé download
        ├── services/       # Technical skills cards
        ├── resume/         # Education & experience timeline
        └── contact/        # Contact & social cards
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Thiru194/portfolio-app.git
cd portfolio-app

# Install dependencies
npm install

# Start the development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000) and reloads on save.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Build an optimized production bundle to `build/` |
| `npm test` | Launch the test runner |
| `npm run deploy` | Build and publish to GitHub Pages (`gh-pages` branch) |

---

## 🌐 Deployment

This project deploys to **GitHub Pages**. The `homepage` field in `package.json` is set to the live URL, and deployment is a single command:

```bash
npm run deploy
```

This builds the app and publishes the `build/` folder to the `gh-pages` branch. Changes go live within a minute or two.

---

## 📬 Contact

- **Email:** thiruselvan0319@gmail.com
- **LinkedIn:** [linkedin.com/in/thiruselvan](https://linkedin.com/in/thiruselvan)
- **GitHub:** [github.com/Thiru194](https://github.com/Thiru194)
- **LeetCode:** [leetcode.com/u/Thiruselvan_S](https://leetcode.com/u/Thiruselvan_S/)

---

<p align="center">Built with ❤️ using React.js</p>
