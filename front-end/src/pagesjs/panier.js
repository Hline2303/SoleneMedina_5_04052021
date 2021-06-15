document.addEventListener("DOMContentLoaded", function () {
  const panier = document.querySelector("body.panier");
  if (!panier) return;
  console.log(panier);

  /////////// Menu navigation Orinoco ATTENTION DOIT SE REPETER SUR TT LES PAGES

  const menuHover = document.querySelector("#accueilNav");
  const clicHomepage = document.querySelector("#accueilNav");
  const panierHover = document.querySelector("#panierNav");
  const openPanier = document.querySelector("#panierNav");

  // p2.addEventListener('click', changeTexte);
  menuHover.addEventListener("mouseover", changeTexte1);
  menuHover.addEventListener("mouseout", changeTexte2);

  // p2.addEventListener('click', ouvreHomepage);
  clicHomepage.addEventListener("click", ouvreHomepage);

  // p2.addEventListener('click', changeTexte);
  panierHover.addEventListener("mouseover", changeTexte1);
  panierHover.addEventListener("mouseout", changeTexte2);

  openPanier.addEventListener("click", panierWindow);

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

  // function ouvreHomepage()
  function ouvreHomepage() {
    window.location.href = "http://127.0.0.1:5500/front-end/index.html";
  }

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

  function panierWindow() {
    window.location.href = "http://127.0.0.1:5500/front-end/pages/panier.html";
  }
  
  // Contenu du localStorage
  let contentLocalStorage = JSON.parse(localStorage.getItem("article"));
  console.log(contentLocalStorage);

  const fillCart = document.querySelector("#bodyCart");
  console.log(fillCart);

  let fullCart = [];
  console.log(fullCart);

  const totalPanier = [];
  console.log(totalPanier);

  const netAPayer = document.querySelector("#total");
  console.log(netAPayer);


  var i;

  if (contentLocalStorage === null) {
    const emptyCart = `
     <td>Votre panier est vide</td>
     `;
    fillCart.innerHTML = emptyCart;
  } else {
    for ( i = 0; i < contentLocalStorage.length; i++) {
      const montantArticles = (contentLocalStorage[i].quantity) * (contentLocalStorage[i].prix);
      console.log(montantArticles);

      function groupByName(contentLocalStorage, propriete) {
        return contentLocalStorage.reduce(function (collector, article) {
          const key = article[propriete];
          if (!collector[key]) {
            collector[key] = [];
          }
          collector[key].push(article);
          return collector;
        }, {});
        
      }
    // console.log(groupByName(obj[propriete]));
      const peluchesQuantity = groupByName(contentLocalStorage, "nom");
      console.log(peluchesQuantity);

      fullCart = fullCart + `
              <tr>
                <td><img src="${contentLocalStorage[i].image}" width="200"></td>
                <td><h2>${contentLocalStorage[i].nom}</h2></td>
                <td>
                    <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="${contentLocalStorage[i].quantity}"/>
                </td>
                <td id="price">${contentLocalStorage[i].prix}€</td>
                <td id="montant">${montantArticles}€</td>
              </tr>
              `;
      // fillCart.innerHTML = fullCart;

      const montant = contentLocalStorage[i].prix * contentLocalStorage[i].quantity;
      totalPanier.push(montant);
  //       console.log(totalPanier);
    } 
    
    if ( i == contentLocalStorage.length) { 
      fillCart.innerHTML = fullCart;
    }
  } 
      const total = (collect, montantInitial) => collect + montantInitial;
      console.log(total);
  
      const montantTotal = totalPanier.reduce(total,0);
      console.log(montantTotal);

      const amountOrder = `
     <td>${montantTotal} €</td>
     `;
    netAPayer.innerHTML = amountOrder;

      localStorage.setItem("article", JSON.stringify(contentLocalStorage));

      const myForm = document.getElementById("myForm");

      myForm.addEventListener("submit", function(e) {
        const nameInput = document.getElementById("nomClient");
        const nameRegex = /^[a-zA-Z-\s]+$/;
        const surNameInput = document.getElementById("prenomClient");
        const surNameRegex = /^[a-zA-Z-\s]+$/;
        const adresseInput = document.getElementById("adresseClient");
        const adresseRegex = /^[0-9a-zA-Z-\s]+$/;
        const codeInput = document.getElementById("codePostalClient");
        const codeRegex = /^[0-9]+$/;
        const villeInput = document.getElementById("villeClient");
        const villeRegex = /^[a-zA-Z-]+$/;
        const mailInput = document.getElementById("mailClient");
        const mailRegex = /^[a-zA-Z-]+$/;

        const error = () => {
          document.getElementById("alert");
          error.style.color = "red";
          e.preventDefault();
        }

        if (nameInput.value.trim() = "") {
          error();
          error.innerHTML = "Le champs nom doit être complété.";
        } else if (nameRegex.test(nameInput.value) == false) {
          error();
          error.innerHTML = "Le nom doit comporter des lettres, des tirets uniquement.";
        }

        if (surNameInput.value.trim() = "") {
          error();
          error.innerHTML = "Le champs prénom doit être complété.";
        } else if (surNameRegex.test(surNameInput.value) == false) {
          error();
          error.innerHTML = "Le prénom doit comporter des lettres, des tirets uniquement.";
        }

        if (adresseInput.value.trim() = "") {
          error();
          error.innerHTML = "Le champs adresse doit être complété.";
        } else if (adresseRegex.test(adresseInput.value) == false) {
          error();
          error.innerHTML = "L'adresse doit comporter des lettres, des chiffres et des tirets uniquement.";
        }

        if (codeInput.value.trim() = "") {
          error();
          error.innerHTML = "Le champs code postal doit être complété.";
        } else if (codeRegex.test(codeInput.value) == false) {
          error();
          error.innerHTML = "Le code postal doit comporter des chiffres uniquement.";
        }

        if (villeInput.value.trim() = "") {
          error();
          error.innerHTML = "Le champs ville doit être complété.";
        } else if (villeRegex.test(villeInput.value) == false) {
          error();
          error.innerHTML = "La ville doit comporter des lettres, des tirets uniquement.";
        }

        if (mailInput.value.trim() = "") {
          error();
          error.innerHTML = "Le champs mail doit être complété.";
        } else if (mailRegex.test(mailInput.value) == false) {
          error();
          error.innerHTML = "Le mail doit comporter des lettres, un @ et un nom de domaine uniquement.";
        }
      });

      const envoiFormulaire = document.querySelector("#validFormClient");

      envoiFormulaire.addEventListener("click", (e) => {
        e.preventDefault();
      
      ////////////////////// Créer une clé pour les éléments à envoyer dans le localstorage
      const formulaire = {
        nom : document.querySelector("#nomClient").value,
        prenom : document.querySelector("#prenomClient").value,
        adresse : document.querySelector("#adresseClient").value,
        codePostal : document.querySelector("#codePostalClient").value,
        ville : document.querySelector("#villeClient").value,
        mail: document.querySelector("#mailClient").value
      }

      localStorage.setItem("formulaire", JSON.stringify(formulaire));
      })
});
