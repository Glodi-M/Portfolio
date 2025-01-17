
const images = ["Image-projet-hetic/collab1.png", "Image-projet-hetic/collab2.png", "Image-projet-hetic/collab3.png", "Image-projet-hetic/collab4.png", "Image-projet-hetic/collab6.png"]
let index = 0;




// Fonction pour changer l'image PAge Projet Hetic Collab

function changeImage() {
    index = (index + 1) % images.length; // Passe à l'image suivante (revient au début à la fin)
    const imageElement = document.getElementById('image-animate');
    imageElement.style.opacity = 0; // Effet de disparition

    setTimeout(() => {
        imageElement.src = images[index]; // Change la source de l'image
        imageElement.style.opacity = 1; // Effet de réapparition
    }, 2500); // Correspond à la durée de l'effet de transition
}

// Lancer le changement d'image toutes les secondes
setInterval(changeImage, 5000);



// Fonction pour changer l'image Page projet Random Start-up

const image1=["Image-projet-random/cap1.png","Image-projet-random/cap2.png","Image-projet-random/cap3.png","Image-projet-random/cap4.png","Image-projet-random/cap5.png"]
let index1= 0;

function changeImage1() {
    index1 = (index1 + 1) % image1.length;
    const imageElement = document.getElementById('image-animate-random');
    imageElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.src = image1[index1];
        imageElement.style.opacity = 1;
    }, 2500);
}

setInterval(changeImage1, 5000);



// Arret de l'animation lorsque on survole 

const container = document.getElementById('image-contenaire');
let intervalId = setInterval(changeImage, 5000);
container.addEventListener("mouseover", () => clearInterval(intervalId));
container.addEventListener("mouseout", () => intervalId = setInterval(changeImage, 5000));






//MENU BURGER 

// Récupérer les éléments
const burgerMenu = document.getElementById('nav-burger'); 
const menu = document.getElementById('menu');
const closeMenuIcon = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('#menu a'); 

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    menu.classList.toggle("open");
}

// Fonction pour fermer le menu
function closeMenu() {
    menu.classList.remove("open");
}

// Ajouter les événements
burgerMenu.addEventListener("click", toggleMenu); 
closeMenuIcon.addEventListener("click", closeMenu); 
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
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
