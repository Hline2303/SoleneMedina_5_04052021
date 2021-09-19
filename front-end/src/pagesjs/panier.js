import { animateMenu } from "./functions.js";

// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const panier = document.querySelector("body.panier");
  if (!panier) return;

  // Changement du style au passage de la souris sur le menu de navigation
  animateMenu();

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
                <td class="bodycart__produit"><img src="${article[1][0].image}" class="bodycart__produit--img"></td>
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
    const formNomValue = firstName.value.trim();
    const formPrenomValue = lastName.value.trim();
    const formAdresseValue = address.value.trim();
    const formVilleValue = city.value.trim();
    const formMailValue = email.value.trim();

    function validationInputs(input, message, func) {
      if (input === "") {
        erreur;
        e.preventDefault();
      } else if (!func(input)) {
        erreur;
        e.preventDefault();
      } else {
        success(message);
      }
    }

    validationInputs(formNomValue, firstName, testFormNom);
    validationInputs(formPrenomValue, lastName, testFormPrenom);
    validationInputs(formAdresseValue, address, testFormAdresse);
    validationInputs(formVilleValue, city, testFormVille);
    validationInputs(formMailValue, email, testFormMail);

    function erreur(input) {
      const formValidation = input.parentElement;
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
