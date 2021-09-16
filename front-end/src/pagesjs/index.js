import { animateMenu } from "./functions.js";

// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const accueil = document.querySelector("body.accueil"); // Regarde si accueil apparaît dans la partie body
  if (!accueil) return; // Si accueil n'apparait pas (différent d'accueil) alors ne charge pas la page

  // Changement du style au passage de la souris sur le menu de navigation
  animateMenu();

  // Récupération des données dans l'API
  fetch("http://localhost:3000/api/teddies")
    .then((response) => response.json())
    .then((data) => {
      // Récupération de la réponse
      const cardHtml = document.querySelector("section.card");

      // Récupérer les données suivantes de chaque produit pour les afficher
      data.forEach((produit) => {
        cardHtml.innerHTML += `<a href="pages/produit.html?id=${
          produit._id
        }" class="card__produit" id="clicProduit">
            <div class="card__produit--img card__produit--img1"><img src=${
              produit.imageUrl
            } class="produitImage"></div>
            <div class="card__produit--content">
                <h2>${produit.name}</h2> 

                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <span class="fas fa-star"></span>
                <i class="fas fa-star"></i>

                <p class="card__produit--stock">En stock</p>

                <p class="card__produit--price">${produit.price / 100}€</p>
            </div>                    
        </a>
            `;
      });
    });
});
