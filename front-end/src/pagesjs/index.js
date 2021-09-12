// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const accueil = document.querySelector("body.accueil"); // Regarde si accueil apparaît dans la partie body
  if (!accueil) return; // Si accueil n'apparait pas (différent d'accueil) alors ne charge pas la page

  // Changement du style au passage de la souris sur le menu de navigation
  const accueilHover = document.querySelector("#accueilNav");
  const clicHomepage = document.querySelector("#accueilNav");
  const panierHover = document.querySelector("#panierNav");
  const openPanier = document.querySelector("#panierNav");

  accueilHover.addEventListener("mouseover", changeTexte1);
  accueilHover.addEventListener("mouseout", changeTexte2);
  panierHover.addEventListener("mouseover", changeTexte1);
  panierHover.addEventListener("mouseout", changeTexte2);
  clicHomepage.addEventListener("click", ouvreHomepage);
  openPanier.addEventListener("click", panierWindow);

  function changeTexte1() {
    this.style.color = "white";
    this.style.padding = "5px";
    this.style.marginLeft = "15px";
    this.style.backgroundColor = "#8f7361";
  }

  function changeTexte2() {
    this.style.color = "";
    this.style.padding = "";
    this.style.backgroundColor = "";
  }

  function ouvreHomepage() {
    window.location.href = "/front-end/index.html";
  }

  function panierWindow() {
    window.location.href = "/front-end/pages/panier.html";
  }

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
