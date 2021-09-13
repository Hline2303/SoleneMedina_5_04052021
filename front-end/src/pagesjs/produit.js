// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const produit = document.querySelector("body.produit");
  if (!produit) return;

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

  // Extraction de l'id
  const params = new URLSearchParams(window.location.search);
  const idProduit = params.get("id");

  // Affichage du produit
  fetch("http://localhost:3000/api/teddies/" + idProduit)
    .then((response) => response.json())
    .then((article) => {
      // Récupération de la réponse
      const fiche = document.querySelector("section.fiche");
      // Affichage de tous les produits
      const bodyFiche = `
    <div class="fiche__produit">
                <div class="fiche__produit--img"><img src="${
                  article.imageUrl
                }" class="ficheImage"></div>
               
                <div class="fiche__produit--content">
                <div class="fiche__produit--global">
                    <div class="fiche__produit--description"> 
                        <h2>${article.name}</h2>

                        <p>${article.description}</p>

                         <p class="fiche__produit--stock">En stock</p>
                     </div>
                    
                     <div class="fiche__produit--price">
                         <p>${article.price / 100}€</p>
                     </div>
                 </div>

                 <div class="fiche__produit--selection">
                     <select id="listColors">
                         <option value="${article.colors[0]}">${
        article.colors[0]
      }</option>
                         <option value="${article.colors[1]}">${
        article.colors[1]
      }</option>
                         <option value="${article.colors[2]}">${
        article.colors[2]
      }</option>
                         <option value="${article.colors[3]}">${
        article.colors[3]
      }</option>
                     </select>
                      
                    <button type="button" name="ajouter" id="btnAjouter" class="fiche__produit--panier">Ajouter au panier</button>
                    </div>
                </div>
    `;
      fiche.innerHTML = bodyFiche;

      const ajouterPanier = document.querySelector("#btnAjouter");

      // Stockage dans le localStorage
      ajouterPanier.addEventListener("click", (e) => {
        e.preventDefault();

        // Récupération des valeurs du produit
        const choixProduit = {
          image: article.imageUrl,
          idProduit: article._id,
          nom: article.name,
          quantité: 1,
          prix: article.price / 100,
        };

        // Contenu du localStorage
        let contentLocalStorage = JSON.parse(localStorage.getItem("article"));

        // Ajouter un produit dans le localStorage
        function ajoutProduit() {
          contentLocalStorage.push(choixProduit);
          localStorage.setItem("article", JSON.stringify(contentLocalStorage));
        };

        // Vérification contenu déjà présent dans le localStorage et ajouter le produit
        if (contentLocalStorage) {
          ajoutProduit();
        } else {
          contentLocalStorage = [];
          ajoutProduit();
        }
      });
    });
});
