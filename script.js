const backToTopButton = document.getElementById('back-to-top');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primary-menu');

function updateBackToTopVisibility() {
    if (!backToTopButton) {
        return;
    }

    backToTopButton.classList.toggle('is-visible', window.scrollY > 320);
}

if (backToTopButton) {
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navLinks.classList.toggle('is-open', !isExpanded);
        document.body.classList.toggle('nav-open', !isExpanded);
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('is-open');
            document.body.classList.remove('nav-open');
        }
    });
}
