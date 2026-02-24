// ========== PAGE LOADER ==========
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }
});

// ========== SCROLL PROGRESS INDICATOR ==========
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ========== EFFET PARALLAXE ==========
function updateParallax() {
    const scrollY = window.scrollY;

    // Parallaxe sur le header
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundPositionY = scrollY * 0.5 + 'px';
    }

    // Parallaxe sur les éléments décoratifs
    document.querySelectorAll('.parallax-element').forEach(el => {
        const speed = el.dataset.speed || 0.3;
        const yPos = -(scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
}

// Vérifier si l'utilisateur n'a pas désactivé les animations
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateParallax);
    });
}

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Charger le thème sauvegardé ou détecter la préférence système
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

loadTheme();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ========== TYPING ANIMATION ==========
const textElement = document.getElementById('poste');
const phrases = ["Web & IT", "Cybersécurité", "Support & Réseaux", "Analyste IAM & SOC"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 200;

// Animation de frappe
function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 70;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 250;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

// Fonction utilitaire pour vérifier si un élément est visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

// Throttle pour optimiser les événements scroll
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Gestion des animations au scroll
function handleScrollAnimations() {
    // Animations des sections
    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });

    // Animations des cartes
    document.querySelectorAll('.card').forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show');
        }
    });
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Démarrer l'animation de frappe
    setTimeout(typeWriter, 1000);

    // Animation des cartes d'expérience
    const experienceSection = document.getElementById('Experiences');
    const cards = document.querySelectorAll('.card-experience');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 150 * index);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (experienceSection) observer.observe(experienceSection);

    // Gestion des modales
    const modals = document.querySelectorAll('.modal');

    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-modal-target]').forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.getAttribute('data-modal-target'));
            openModal(modal);
        });
    });

    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            closeModal(button.closest('.modal'));
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('open')) {
                    closeModal(modal);
                }
            });
        }
    });

    // Lancer les animations au scroll au chargement
    handleScrollAnimations();
});

// Bouton retour en haut
const backToTopButton = document.getElementById("backToTop");

window.addEventListener('scroll', throttle(() => {
    // Bouton retour en haut
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }

    // Animations au scroll
    handleScrollAnimations();
}, 100));

backToTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Menu Burger
const burgerButton = document.getElementById("nav-burger");
const menu = document.getElementById("menu");
const closeMenuIcon = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll("#menu a");
const menuContainer = document.getElementById("menu-burger");

if (burgerButton && menu && closeMenuIcon && menuContainer) {
    function openMenu() {
        menu.classList.add("open");
        menuContainer.classList.add("open");
        burgerButton.classList.add("active");
        document.body.classList.add("no-scroll");
        burgerButton.setAttribute("aria-expanded", "true");
        menuLinks[0]?.focus();
    }

    function closeMenu() {
        menu.classList.remove("open");
        menuContainer.classList.remove("open");
        burgerButton.classList.remove("active");
        document.body.classList.remove("no-scroll");
        burgerButton.setAttribute("aria-expanded", "false");
        burgerButton.focus();
    }

    burgerButton.addEventListener("click", openMenu);
    closeMenuIcon.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!menuContainer.contains(event.target) && !burgerButton.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("open")) {
            closeMenu();
        }
    });

    // Gestion du focus pour l'accessibilité
    const focusableElements = menu.querySelectorAll('a, img.close-icon');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    menuContainer.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
            if (event.shiftKey && document.activeElement === firstFocusable) {
                event.preventDefault();
                lastFocusable.focus();
            } else if (!event.shiftKey && document.activeElement === lastFocusable) {
                event.preventDefault();
                firstFocusable.focus();
            }
        }
    });
}

// ========== SMOOTH SCROLL WITH OFFSET ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Close menu if it was open on mobile
            const menu = document.getElementById("menu");
            const menuContainer = document.getElementById("menu-burger");
            const burgerButton = document.getElementById("nav-burger");
            if (menu && menu.classList.contains("open")) {
                menu.classList.remove("open");
                menuContainer.classList.remove("open");
                burgerButton.classList.remove("active");
                document.body.classList.remove("no-scroll");
                burgerButton.setAttribute("aria-expanded", "false");
            }
        }
    });
});
