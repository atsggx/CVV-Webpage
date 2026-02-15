/* ===== Spoiler Redactions ===== */
const _r = {
    ace: 'QUNF',
    aceFull: 'QUNFIC0gQXNzb2NpYXRpb24gb2YgQ29tcHV0ZXIgRW50aHVzaWFzdHM=',
    vips: 'Vml2ZWthbmFuZGEgSW5zdGl0dXRlIG9mIFByb2Zlc3Npb25hbCBTdHVkaWVz',
    dps: 'RGVsaGkgUHVibGljIFNjaG9vbCwgVmFzYW50IEt1bmo='
};

document.querySelectorAll('.spoiler').forEach(el => {
    const k = el.dataset.k;
    if (_r[k]) {
        const len = atob(_r[k]).length;
        el.style.width = (k === 'ace' ? len : Math.round(len * 0.8)) + 'ch';
    }
    el.textContent = '\u00A0';
    el.addEventListener('click', function () {
        if (!this.classList.contains('revealed')) {
            if (_r[k]) {
                this.textContent = atob(_r[k]);
                this.classList.add('revealed');
            }
        }
    });
});

/* ===== Mobile Menu ===== */
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = mobileMenuButton.querySelector('i');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenuIcon.classList.contains('fa-bars')) {
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-times');
    } else {
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    }
});

const mobileNavLinks = mobileMenu.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    });
});

/* ===== Scroll Fade-in Observer ===== */
const sections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

/* ===== Footer Year ===== */
document.getElementById('current-year').textContent = new Date().getFullYear();

/* ===== Theme Toggle with Morph Animation ===== */
const darkModeToggle = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        darkModeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        htmlElement.classList.remove('dark');
        darkModeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }
};

// Apply initial theme (class is already set by inline script, just sync aria)
const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
applyTheme(currentTheme);

darkModeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.contains('dark');
    const newTheme = isDarkMode ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Respect system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.getItem('theme')) {
        applyTheme(event.matches ? 'dark' : 'light');
    }
});
