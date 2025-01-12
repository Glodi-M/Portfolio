const texte="Développeur web"
const textEement=document.getElementById('poste')
let index =0

function typeWriter(){
    if (index < texte.length){
        textEement.innerHTML +=texte.charAt(index)
        index++
        setTimeout(typeWriter, 200)
    }
    else{
        setTimeout(() => {
            textEement.innerHTML = ""
            index=0
            typeWriter()    
        }, 1000);
    }
}
typeWriter()


// POP_UP

// Références aux éléments
const modal = document.getElementById('myModal');
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const modal5 = document.getElementById('myModal5');
const openModal = document.getElementById('card_dgi');
const openModa1 = document.getElementById('card_superviseur');
const openModa2 = document.getElementById('card_jedam');
const openModa3 = document.getElementById('card_ask');
const openModa4 = document.getElementById('card_gsa');
const openModa5 = document.getElementById('card_odc');
const closeModal = document.getElementById('closeModal');
const closeModal1 = document.getElementById('closeModal1');
const closeModal2 = document.getElementById('closeModal2');
const closeModal3 = document.getElementById('closeModal3');
const closeModal4 = document.getElementById('closeModal4');
const closeModal5 = document.getElementById('closeModal5');

// Afficher la modale
openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

openModa1.addEventListener('click', () => {
    modal1.style.display = 'flex';
});

openModa2.addEventListener('click', () => {
    modal2.style.display = 'flex';
});
openModa3.addEventListener('click', () => {
    modal3.style.display = 'flex';
});
openModa4.addEventListener('click', () => {
    modal4.style.display = 'flex';
});

openModa5.addEventListener('click', () => {
    modal5.style.display = 'flex';
});


// Fermer la modale
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
closeModal1.addEventListener('click', () => {
    modal1.style.display = 'none';
});

closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
});
closeModal3.addEventListener('click', () => {
    modal3.style.display = 'none';
});
closeModal4.addEventListener('click', () => {
    modal4.style.display = 'none';
});
closeModal5.addEventListener('click', () => {
    modal5.style.display = 'none';
});


// Fermer en cliquant à l'extérieur de la modale
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }

    else if (event.target === modal1) {
        modal1.style.display = 'none';
    }
    
    else if (event.target === modal2) {
        modal2.style.display = 'none';
    }
    else if (event.target === modal3) {
        modal3.style.display = 'none';
    }
    else if (event.target === modal4) {
        modal4.style.display = 'none';
    }
})



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


//MENU BURGER 

// Récupérer les éléments
const burgerMenu = document.getElementById("nav-burger"); // Image pour ouvrir le menu
const menu = document.getElementById("menu"); // Menu
const closeMenuIcon = document.getElementById("closeMenu"); // Image pour fermer le menu
const menuLinks = document.querySelectorAll("#menu a"); // Liens dans le menu

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

// Boutton Ouvrir un projet dans une autre page 
document.getElementById('btn-voir-plus').addEventListener("click",function() {

    window.open("projet-hetic-collab.html", "_bank");

});
document.getElementById('btn-voir-plus1').addEventListener("click",function() {

    window.open("projet-random-start-up.html", "_bank");

});

document.getElementById('btn-voir-plus2').addEventListener("click",function() {
    
    window.open("https://github.com/Glodi-M/Portfolio.git", "_bank");

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
  