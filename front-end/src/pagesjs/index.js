document.addEventListener("DOMContentLoaded", function () {
  const accueil = document.querySelector("body.accueil"); // Regarde si accueil apparaît dans la partie body
  if (!accueil) return; // Si accueil n'apparait pas (différent d'accueil) alors ne charge pas la page

  console.log(accueil); // Si accueil apparaît alors charge la page

  /////////// Menu navigation Orinoco ATTENTION DOIT SE REPETER SUR TT LES PAGES

  const menuHover = document.querySelector("#accueilNav");
  // p2.addEventListener('click', changeTexte);
  menuHover.addEventListener("mouseover", changeTexte1);
  menuHover.addEventListener("mouseout", changeTexte2);

  function changeTexte1() {
    this.style.color = "white";
    this.style.padding = "";
    this.style.backgroundColor = "#8f7361";
  }

  function changeTexte2() {
    this.style.color = "";
    this.style.padding = "";
    this.style.backgroundColor = "";
  }

  const clicHomepage = document.querySelector("#accueilNav");
  // p2.addEventListener('click', ouvreHomepage);
  clicHomepage.addEventListener("click", ouvreHomepage);
  // function ouvreHomepage() {
  function ouvreHomepage() {
    window.location.href = "/front-end/index.html";
  }

  /////////// Menu panier Orinoco

  const panierHover = document.querySelector("#panierNav");

  // p2.addEventListener('click', changeTexte);
  panierHover.addEventListener("mouseover", changeTexte1);
  panierHover.addEventListener("mouseout", changeTexte2);

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

  // function openPanier()
  const openPanier = document.querySelector("#panierNav");

  openPanier.addEventListener("click", panierWindow);

  function panierWindow() {
    window.location.href = "/front-end/pages/panier.html";
  }

  /////////// Récup des données dans l'API

  fetch("http://localhost:3000/api/teddies")
    .then((response) => response.json()) // Convertir en json
    .then((data) => {
      // Récupération de la réponse et affichage des produits
      const cardHtml = document.querySelector("section.card");

      console.log(data);
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
