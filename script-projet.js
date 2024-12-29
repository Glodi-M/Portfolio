
const images = ["Image-projet-hetic/collab1.png", "Image-projet-hetic/collab2.png", "Image-projet-hetic/collab3.png", "Image-projet-hetic/collab4.png", "Image-projet-hetic/collab6.png"]
let index = 0;

// Fonction pour changer l'image

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



// Arret de l'animation lorsque on survole 

const container = document.getElementById('image-contenaire');
let intervalId = setInterval(changeImage, 5000);
container.addEventListener("mouseover", () => clearInterval(intervalId));
container.addEventListener("mouseout", () => intervalId = setInterval(changeImage, 5000));






//MENU BURGER 

// Récupérer les éléments
const burgerMenu = document.getElementById('nav-burger'); // Image pour ouvrir le menu
const menu = document.getElementById('menu'); // Menu
const closeMenuIcon = document.getElementById('closeMenu'); // Image pour fermer le menu
const menuLinks = document.querySelectorAll('#menu a'); // Liens dans le menu

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    menu.classList.toggle("open");
}

// Fonction pour fermer le menu
function closeMenu() {
    menu.classList.remove("open");
}

// Ajouter les événements
burgerMenu.addEventListener("click", toggleMenu); // Ouvre le menu
closeMenuIcon.addEventListener("click", closeMenu); // Ferme le menu
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu); // Ferme le menu au clic sur un lien
});