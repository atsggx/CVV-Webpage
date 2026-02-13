Personal CV/portfolio website hosted at [cv.atsggx.net](https://cv.atsggx.net).
## Overview
A single-page responsive portfolio site featuring:
- About, Projects, Skills, Experience, Education, and Certifications sections
- Dark/light theme toggle with system preference detection
- Frosted-glass navbar with mobile hamburger menu
- Scroll-triggered fade-in animations
- Project cards showcasing ML, automation, and homelab work
## Tech Stack
- **HTML** with [Tailwind CSS](https://tailwindcss.com) (CDN)
- **Vanilla JavaScript** for theme switching, mobile menu, and scroll animations
- [Font Awesome](https://fontawesome.com) icons
- [Inter](https://fonts.google.com/specimen/Inter) typeface via Google Fonts
- Hosted on **GitHub Pages** with a custom domain
## Project Structure
```
├── index.html              # Main page
├── CNAME                   # Custom domain config
├── assets/
│   ├── css/style.css       # Custom styles (navbar frost, animations, timeline)
│   ├── js/main.js          # Theme toggle, mobile menu, IntersectionObserver
│   └── images/             # Avatar and project screenshots
└── .gitignore
```
## Local Development
Open `index.html` in a browser. No build step required.
## License
All rights reserved.
