const textElement = document.getElementById('poste');
const phrases = ["Développeur Web", "Support Informatique"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Effacer le texte
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Écrire le texte
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    // Vérifier si on a fini d'écrire
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause à la fin de la phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Passer à la phrase suivante
        typingSpeed = 500; // Pause avant de commencer la nouvelle phrase
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Démarrer l'animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// OUVERTURE MODALE

document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes au scroll
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
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    function openModal(modal) {
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            openModal(modal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Fermer avec la touche ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('open')) {
                    closeModal(modal);
                }
            });
        }
    });
});


// BOUTTON SCROLL

// récupèere le boutton 
const backTOTopButton = document.getElementById("backToTop");

// afficher ou masquer le boutton au defillement
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backTOTopButton.style.display = "block";
    }
    else {
        backTOTopButton.style.display = "none";
    }
};

// Remonter en haut lorsque on clique sur le boutton
backTOTopButton.onclick = function () {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth" // defilement fluide
        }
    );
};

// MENU BURGER

 // Récupérer les éléments
        const burgerButton = document.getElementById("nav-burger");
        const menu = document.getElementById("menu");
        const closeMenuIcon = document.getElementById("closeMenu");
        const menuLinks = document.querySelectorAll("#menu a");
        const menuContainer = document.getElementById("menu-burger");

        // Vérifier que les éléments existent
        if (burgerButton && menu && closeMenuIcon && menuContainer) {
            // Fonction pour ouvrir le menu
            function openMenu() {
                menu.classList.add("open");
                menuContainer.classList.add("open");
                document.body.classList.add("no-scroll");
                burgerButton.setAttribute("aria-expanded", "true");
                // Focus on first menu item
                menuLinks[0].focus();
            }

            // Fonction pour fermer le menu
            function closeMenu() {
                menu.classList.remove("open");
                menuContainer.classList.remove("open");
                document.body.classList.remove("no-scroll");
                burgerButton.setAttribute("aria-expanded", "false");
                burgerButton.focus();
            }

            // Événements
            burgerButton.addEventListener("click", openMenu);
            closeMenuIcon.addEventListener("click", closeMenu);

            // Fermer le menu lorsqu'on clique sur un lien
            menuLinks.forEach(link => {
                link.addEventListener("click", closeMenu);
            });

            // Fermer le menu si on clique en dehors
            document.addEventListener("click", (event) => {
                if (!menuContainer.contains(event.target) && !burgerButton.contains(event.target)) {
                    closeMenu();
                }
            });

            // Fermer le menu avec la touche Échap
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
// SCROLL ANIMATION
// Fonction pour vérifier si un élément est visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Ajout de l'animation au scroll
function handleScrollAnimation() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('show'); // Ajoute la classe pour révéler la carte
        }
    });
}

// Écouteur d'événements pour le scroll
window.addEventListener('scroll', handleScrollAnimation);

// Lancer l'animation au chargement de la page
handleScrollAnimation();


// animations.js

// Fonction pour vérifier si un élément est visible dans la fenêtre d'affichage
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

// Fonction pour gérer l'animation des sections
function animateSections() {
    const sections = document.querySelectorAll('.animate-on-scroll');

    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible'); // Ajoute la classe visible pour les animations
        }
    });
}

// Ajout d'un écouteur pour détecter le défilement
window.addEventListener('scroll', animateSections);

// Lancer l'animation au chargement initial de la page
document.addEventListener('DOMContentLoaded', animateSections);


// Gestion du formulaire 
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const message = document.getElementById('input-message').value;

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (!email.includes('@')) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    // Envoyer le formulaire (à adapter avec Formspree ou autre)
    alert('Message envoyé avec succès !');
    form.reset();
});



// ANIMATION EFFET SCROLL

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".experience-contenaire");
    let lastScrollY = window.scrollY;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        // Détecter la direction du défilement
        if (currentScrollY > lastScrollY) {
            // Défilement vers le bas
            cards.forEach((card) => {
                if (isElementInViewport(card)) {
                    card.classList.remove("card-hidden");
                    card.classList.add("card-visible");
                }
            });
        } else {
            // Défilement vers le haut
            cards.forEach((card) => {
                if (isElementInViewport(card)) {
                    card.classList.remove("card-visible");
                    card.classList.add("card-hidden");
                }
            });
        }

        lastScrollY = currentScrollY;
    }

    // Vérifier si un élément est dans la vue
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Écouter l'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Appliquer l'effet au chargement de la page
    handleScroll();
});
