// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navComp = document.querySelector('.nav-competences');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        if (navLinks) navLinks.classList.toggle('open');
        if (navComp) navComp.classList.toggle('open');
    });
}

// Active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-competences a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
    }
});

// Typewriter (homepage only)
const tw = document.querySelector('.typewriter');
if (tw) {
    const texts = ["Administrateur Réseau.", "Administrateur Système.", "Étudiant BTS SIO."];
    let ci = 0, li = 0;
    (function type() {
        if (ci === texts.length) ci = 0;
        const cur = texts[ci];
        tw.textContent = cur.slice(0, ++li);
        if (li === cur.length) {
            ci++; li = 0;
            setTimeout(type, 2200);
        } else {
            setTimeout(type, 90);
        }
    })();
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.comp-card, .skill-item, .step, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
