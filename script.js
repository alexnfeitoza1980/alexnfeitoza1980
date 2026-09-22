const themeToggle = document.querySelector('.theme-toggle');
const revealItems = document.querySelectorAll('.reveal');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

if (localStorage.getItem('portfolio-theme') === 'light') {
    document.body.classList.add('light');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.main-nav a').forEach((navLink) => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

if (window.lucide) {
    lucide.createIcons();
}