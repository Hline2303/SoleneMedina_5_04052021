// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const panier = document.querySelector("body.panier");
  if (!panier) return;

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

  // Contenu du localStorage
  let contentLocalStorage = JSON.parse(localStorage.getItem("article"));
  const fillCart = document.querySelector("#bodyCart");
  let fullCart = [];
  const totalPanier = [];
  const totalProducts = [];
  const netAPayer = document.querySelector("#total");

  // Affichage du panier
  if (contentLocalStorage === null) {
    const emptyCart = `
     <td>Votre panier est vide</td>
     `;
    fillCart.innerHTML = emptyCart;
  } else {
    let result = contentLocalStorage.reduce(function (array, item) {
      array[item.idProduit] = array[item.idProduit] || [];
      array[item.idProduit].push(item);
      return array;
    }, Object.create(null));

    result = Object.entries(result);
    result.forEach((article) => {
      const quantity = article[1].length;
      const productId = article[1][0];
      const montant = quantity * productId.prix;

      fullCart =
        fullCart +
        `
              <tr class="storage_article" id="storage_article" data-id="${article[0]}">
                <td class="bodycart__produit"><img src="${article[1][0].image}" width="200"></td>
                <td class="bodycart__nom"><h2>${article[1][0].nom}</h2></td>
                <td class="quantityInput bodycart__quantity" >
                ${quantity}

                </td>
          
                <td class="bodycart__delete" id="delete"><button class="btn_delete" id="btn_delete"><i class="fas fa-trash"></i></button></td>
                <td class="bodycart__prix" id="price">${article[1][0].prix}€</td>
                <td class="bodycart__montant" id="montant">${montant}€</td>
              </tr> 
              `;
      fillCart.innerHTML = fullCart;

      // Mettre les quantités et montant dans le panier
      totalPanier.push(montant);
      totalProducts.push(quantity);

      // Suppression d'un produit
      const trash = document.getElementsByClassName("btn_delete");
      for (let i = 0; i < trash.length; i++) {
        trash[i].addEventListener("click", (e) => {
          e.preventDefault();
          const removeProduct = contentLocalStorage[i].idProduit;

          contentLocalStorage = contentLocalStorage.filter(
            (pdt) => pdt.idProduit != removeProduct
          );

          localStorage.setItem("article", JSON.stringify(contentLocalStorage));
          window.location.href = "/front-end/pages/panier.html";
        });
      }
    });
  }

  // Vider le panier
  delete_all.addEventListener("click", (e) => {
    e.preventDefault();
    function emptyCart() {
      localStorage.clear();
      document.location.href = "/front-end/index.html";
    }
    emptyCart();
  });

  //  Calculs du panier et affichage des montants
  const total = (collect, montantInitial) => collect + montantInitial;
  const montantTotal = totalPanier.reduce(total, 0);
  localStorage.setItem("amount", montantTotal);
  const totalQuantity = totalProducts.reduce(total, 0);
  const displayQuantity = `${totalQuantity}`;
  const amountOrder = `
     <td id="amount">${montantTotal}€</td>
     `;
  netAPayer.innerHTML = amountOrder;

  // Affichage des quantités totales sur l'icône du panier
  const cart = document.querySelector("#quantityCart");
  cart.innerHTML = displayQuantity;

  //////////////////////// FORMULAIRE //////////////////////////
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formulaire = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    };

    // Validation du formulaire
    function validationInputs() {
      const formNomValue = firstName.value.trim();
      const formPrenomValue = lastName.value.trim();
      const formAdresseValue = address.value.trim();
      const formVilleValue = city.value.trim();
      const formMailValue = email.value.trim();

      if (formNomValue === "") {
        erreur(firstName, "Le champs nom doit être complété.");
        e.preventDefault();
      } else if (!testFormNom(formNomValue)) {
        erreur(
          firstName,
          "Le nom doit comporter entre 3 à 20 lettres majuscules."
        );
        e.preventDefault();
      } else {
        success(firstName);
      }

      if (formPrenomValue === "") {
        erreur(lastName, "Le champs prénom doit être complété.");
        e.preventDefault();
      } else if (!testFormPrenom(formPrenomValue)) {
        erreur(
          lastName,
          "Le prénom doit commencer par une lettre majuscule et être composer uniquement de lettres, au minimum 3."
        );
        e.preventDefault();
      } else {
        success(lastName);
      }

      if (formAdresseValue === "") {
        erreur(address, "Le champs adresse doit être complété.");
        e.preventDefault();
      } else if (!testFormAdresse(formAdresseValue)) {
        erreur(address, "Veuillez entrer une adresse valide.");
        e.preventDefault();
      } else {
        success(address);
      }

      if (formVilleValue === "") {
        erreur(city, "Le champs ville doit être complété.");
        e.preventDefault();
      } else if (!testFormVille(formVilleValue)) {
        erreur(
          city,
          "La ville doit contenir uniquement des majuscules, 3 minimum."
        );
        e.preventDefault();
      } else {
        success(city);
      }

      if (formMailValue === "") {
        erreur(email, "Le champs email doit être complété.");
        e.preventDefault();
      } else if (!testFormMail(formMailValue)) {
        erreur(
          email,
          "L'email doit être composé sous cette forme : email@nomdedomaine.fr"
        );
        e.preventDefault();
      } else {
        success(email);
      }
    }

    validationInputs();

    // Style en fonction de la validation ou non du formulaire
    function erreur(input, message) {
      const formValidation = input.parentElement;
      const small = formValidation.querySelector("small");
      small.innerText = message;
      formValidation.className = "form-validation erreur i.checked";
    }

    function success(input) {
      const formValidation = input.parentElement;
      formValidation.className = "form-validation success";
    }

    // Test regex
    function testFormNom(formNom) {
      return /^[A-Z-\s]{3,20}$/.test(formNom);
    }

    function testFormPrenom(formPrenom) {
      return /^[A-Z-\s][a-z\xc0-\xff-\s]{3,20}$/.test(formPrenom);
    }

    function testFormAdresse(formAdresse) {
      return /^[0-9a-zA-Z\xc0-\xff-\s]{5,50}$/.test(formAdresse);
    }

    function testFormVille(formVille) {
      return /^[A-Z-]{3,20}$/.test(formVille);
    }

    function testFormMail(formMail) {
      return /^([+\.\w\+-]{3,})*@[\w-]+(\.[a-z]{2,6})*(\.[a-z]{2,6})$/.test(
        formMail
      );
    }

    // Envoi du formulaire
    localStorage.setItem("contact", JSON.stringify(formulaire));

    const productsId = [];

    contentLocalStorage.forEach((contentLocalStorage) => {
      productsId.push(contentLocalStorage.idProduit);
    });

    const contact = formulaire;

    const order = {
      products: productsId,
      contact: contact,
    };

    const orderResult = fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    orderResult.then(async (response) => {
      try {
        const command = await response.json();
        if (response.ok) {
          localStorage.setItem("orderId", command.orderId);
          window.location.href = "/front-end/pages/confirmation.html";
        } else {
          alert(`Problème avec le serveur : erreur ${response.status}`);
        }
      } catch (e) {
        alert(`ERREUR`);
      }
    });
  });
});

// *****************************************************
// ******************* QUANTITY PANIER *****************
// *****************************************************

// const totalProducts = [];
// const totalQuantity = totalProducts.reduce(total, 0);
// const displayQuantity = `${totalQuantity}`;
// let cart = document.querySelector("#quantityCart");

// cart.innerHTML = displayQuantity;

// *****************************************************
// ******************* QUANTITY PANIER *****************
// *****************************************************
