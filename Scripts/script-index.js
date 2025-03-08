const texte = "Développeur Web"
const textEement = document.getElementById('poste')
let index = 0

function typeWriter() {
    if (index < texte.length) {
        textEement.innerHTML += texte.charAt(index)
        index++
        setTimeout(typeWriter, 200)
    }
    else {
        setTimeout(() => {
            textEement.innerHTML = ""
            index = 0
            typeWriter()
        }, 1000);
    }
}
typeWriter()

// OUVERTURE MODALE

// Sélectionner tous les éléments qui déclenchent l'ouverture des modales
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close]");
const modals = document.querySelectorAll(".modal");

// Fonction pour ouvrir une modale
function openModal(modal) {
    if (modal) {
        modal.classList.add("open");
        modal.style.display = "flex";
    }
}

// Fonction pour fermer une modale
function closeModal(modal) {
    if (modal) {
        modal.classList.remove("open");
        setTimeout(() => { modal.style.display = "none"; }, 300)
    }
}

// Ajouter un événement à chaque bouton qui ouvre une modale
openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

// Ajouter un événement à chaque bouton de fermeture
closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

// Fermer en cliquant à l'extérieur de la modale
window.addEventListener("click", (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
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
const burgerMenu = document.getElementById("nav-burger");
const menu = document.getElementById("menu");
const closeMenuIcon = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll("#menu a");

// Vérifier que les éléments existent avant d'ajouter des écouteurs d'événements
if (burgerMenu && menu && closeMenuIcon) {
    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        menu.classList.toggle("open");
        document.body.classList.toggle("no-scroll"); // Désactive/réactive le défilement
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            document.body.classList.remove("no-scroll"); // Réactive le défilement
        }
    }

    // Ajouter les événements
    burgerMenu.addEventListener("click", toggleMenu); // Ouvre le menu
    closeMenuIcon.addEventListener("click", closeMenu); // Ferme le menu

    // Fermer le menu lorsqu'on clique sur un lien
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Optionnel : Fermer le menu si on clique en dehors
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
            closeMenu();
        }
    });
}



// Boutton Ouvrir un projet dans une autre page 
document.getElementById('btn-voir-plus').addEventListener("click", function () {

    window.open("projet-hetic-collab.html", "_bank");

});
document.getElementById('btn-voir-plus1').addEventListener("click", function () {

    window.open("projet-random-start-up.html", "_bank");

});

document.getElementById('btn-voir-plus2').addEventListener("click", function () {

    window.open("https://github.com/Glodi-M/Portfolio.git", "_bank");

});

document.getElementById('btn-voir-plus-cms').addEventListener("click", function () {

    window.open("https://github.com/ahmvdd/CMS-Nodejs.git", "_bank");

});
document.getElementById('btn-voir-plus-java').addEventListener("click", function () {

    window.open("https://github.com/Glodi-M/Gestion-etudiant.git", "_bank");

});

document.getElementById('btn-voir-plus-symfony').addEventListener("click", function () {

    window.open("https://github.com/Glodi-M/Events-manager.git", "_bank");

});



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