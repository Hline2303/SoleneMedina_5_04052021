document.addEventListener("DOMContentLoaded", function () {
  const produit = document.querySelector("body.produit");
  if (!produit) return;

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

  // Extraction de l'id
  const params = new URLSearchParams(window.location.search);
  // // console.log(params);
  const idProduit = params.get("id");

  // // Affichage du produit
  // fetch("http://localhost:3000/api/teddies/" + idProduit)
  fetch("http://localhost:3000/api/teddies/" + idProduit)
    .then((response) => response.json()) // Convertir en json
    .then((data) => {
      // Récupération de la réponse et affichage des produits
      const fiche = document.querySelector("section.fiche");
      // console.log(fiche);

      const bodyFiche = `
    <div class="fiche__produit">
                <div class="fiche__produit--img"><img src="${
                  data.imageUrl
                }" class="ficheImage"></div>
               
                <div class="fiche__produit--content">
                <div class="fiche__produit--global">
                    <div class="fiche__produit--description"> 
                        <h2>${data.name}</h2>

                        <p>${data.description}</p>

                         <p class="fiche__produit--stock">En stock</p>
                     </div>
                    
                     <div class="fiche__produit--price">
                         <p>${data.price / 100}€</p>
                     </div>
                 </div>

                 <div class="fiche__produit--selection">
                     <select id="listColors">
                         <option value="${data.colors[0]}">${
        data.colors[0]
      }</option>
                         <option value="${data.colors[1]}">${
        data.colors[1]
      }</option>
                         <option value="${data.colors[2]}">${
        data.colors[2]
      }</option>
                         <option value="${data.colors[3]}">${
        data.colors[3]
      }</option>
                     </select>
                      
                    <button type="button" name="ajouter" id="btnAjouter" class="fiche__produit--panier">Ajouter au panier</button>
                    </div>
                </div>
    `;
      fiche.innerHTML = bodyFiche;

      const ajouterPanier = document.querySelector("#btnAjouter");
      // console.log(ajouterPanier);
      // Staockage dans le localStorage
      ajouterPanier.addEventListener("click", (e) => {
        e.preventDefault();

        // Récupération des valeurs du panier
        const choixProduit = {
          image: data.imageUrl,
          idProduit: data._id,
          nom: data.name,
          quantité: 1,
          prix: data.price / 100,
        };
        console.log(choixProduit);
        // Contenu du localStorage
        let contentLocalStorage = JSON.parse(localStorage.getItem("article"));

        const ajoutProduit = () => {
          contentLocalStorage.push(choixProduit);
          localStorage.setItem("article", JSON.stringify(contentLocalStorage));
        };
        // // Vérification contenu présent dans le localStorage
        // contentLocalStorage[this.name] = choixProduit;
        // localStorage.setItem("itemsObject", JSON.stringify(oldItems));

        if (contentLocalStorage) {
          ajoutProduit();
        } else {
          contentLocalStorage = [];
          ajoutProduit();
        }
      });
    });
});
