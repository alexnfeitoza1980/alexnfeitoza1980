const themeToggle = document.querySelector('.theme-toggle');
const revealItems = document.querySelectorAll('.reveal');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('portfolio-theme') === 'dark') {
    document.body.classList.add('dark');
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