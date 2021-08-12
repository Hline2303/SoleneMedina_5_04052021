document.addEventListener("DOMContentLoaded", function () {
  const panier = document.querySelector("body.panier");
  if (!panier) return;
  // console.log(panier);

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
    window.location.href = "/front-end/index.html";
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
    window.location.href = "/front-end/pages/panier.html";
  }

  // Contenu du localStorage
  let contentLocalStorage = JSON.parse(localStorage.getItem("article"));
  // console.log(contentLocalStorage);

  const fillCart = document.querySelector("#bodyCart");
  // console.log(fillCart);

  let fullCart = [];
  // console.log(fullCart);

  // const panier = [];

  const totalPanier = [];
  // console.log(totalPanier);
  const totalProducts = [];

  const netAPayer = document.querySelector("#total");
  // console.log(netAPayer);

  // let i;

  // let deleteProduct = [];

  // let products = [];

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
    //
    // console.log(result);
    result.forEach((article) => {
      const quantity = article[1].length;
      const quantityProduct = document.querySelector("#quantity").value;
      quantityProduct.addEventListener("click", storage);

      function storage() {
        localStorage.setItem("quantityP", quantityProduct);
      }

      console.log(quantityProduct);
      // console.log(quantity);
      // let product_id = article[1][0];
      let productId = article[1][0];
      // console.log(article[1][0]);
      // let array_id = result;
      // array_id.sort();
      // console.log(array_id);
      // let product_id = [article[1][0].idProduit].length;
      // console.log(products);
      // console.log([result[0][0]]);
      // let array_id = [article.idProduit];

      // console.log(array_id);

      // const total = quantity * products.prix;
      // console.log(total);
      const montant = quantityProduct * productId.prix;
      console.log(montant);
      // ::::::const montant = quantity * productId.prix;
      // console.log(product_id.prix);

      fullCart =
        fullCart +
        `
              <tr class="storage_article" id="storage_article" data-id="${article[0]}">
                <td><img src="${article[1][0].image}" width="200"></td>
                <td><h2>${article[1][0].nom}</h2></td>
                <td class="quantityInput">
                  <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()">-</button>
                  <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="${quantity}"/>
                  <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()">+</button>
                </td>
                <td id="delete"><button class="btn_delete" id="btn_delete"><i class="fas fa-trash"></i></button></td>
                <td id="price">${article[1][0].prix}€</td>
                <td id="montant"> ${montant}€</td>
              </tr>
              `;
      fillCart.innerHTML = fullCart;

      totalPanier.push(montant);
      totalProducts.push(quantity);
      // console.log(totalPanier);
      // const panier = [];
      // panier.push(product_id);
      // console.log(panier);
      // localStorage.setItem("product_id", JSON.stringify(contentLocalStorage[].idProduit));
    });
    // const Cart = (function () {
    //   arrayId = [];
    //   function Properties(idProduit, image, nom, quantity, prix) {
    //     this.idProduit = idProduit;
    //     this.image = image;
    //     this.nom = nom;
    //     this.quantity= quantity;
    //     this.prix = prix;
    //   }

    // function savepanier() {
    //   // localStorage.setItem("contentLocalStorage", JSON.stringify(products));
    //   localStorage.setItem("Cart", JSON.stringify(arrayId));
    // }

    // savepanier();

    // function loadpanier() {
    //   // products = JSON.parse(localStorage.getItem("contentLocalStorage"));
    //   arrayId = JSON.parse(localStorage.getItem("Cart"));
    // }

    // loadpanier();

    // console.log(article[1][0].idProduit);

    // article.deleteProduct = function (idProduit){
    //   for(const item in arrayId) {
    //     if (arrayId[item].idProduit === idProduit) {
    //       arrayId[item].quantity--;
    //       if(arrayId[item].quantity === 0) {
    //         arrayId.splice(item, 1);
    //       }
    //       break;
    //     }
    //   }
    //   savepanier();
    // }
    // console.log(article);
    // deleteProductFromCart();
    // const btnDelete = document.querySelectorAll(".btn_delete");
    // console.log(btnDelete);

    // let deleteProduct = [];
    // // console.log(deleteProduct);
    // console.log(contentLocalStorage[0].idProduit);
    // for (let deleteProduct = 0; deleteProduct < btn_delete.length; deleteProduct++) {
    //   btnDelete[deleteProduct].addEventListener("click", (e) => {
    //     e.preventDefault();
    //     // document.getElementById("row_article");
    //     // contentLocalStorage.removeItem("row_article");
    //     // let deleteId = contentLocalStorage[deleteProduct].product_id;
    //     // console.log(deleteId);
    //     // console.log(deleteProduct);
    //   });
    // }
    // });
  }

  // let addBtns = document.querySelectorAll("#btnAjouter");

  // for(i = 0; i < addBtns.length; i++) {
  //   addBtns[i].addEventListener('click', function(e){
  //     e.preventDefault();
  //   });
  // }
  //   for(let addBtn of addBtns){
  //   addBtn.addEventListener("click", addProduct);
  //   function addProduct() {
  //     const idBtn = document.querySelector("storage_article");
  //     idBtn.dataset.id;
  //     if(addBtn === 'storage_article') {
  //       console.log(ok);
  //     }
  //     addBtn++;
  //     // if(i < 0 )
  //   }
  // }
  // function removeProduct() {
  //   //  addEventListener btn add
  //   // i--
  // }
  // const matchId = article.idProduit;
  // btn_delete.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   alert("Votre panier va être vidé");
  //   // if

  //   //   contentLocalStorage.forEach((article) => {
  //   //   const matchId = article.idProduit;
  //   //   product_id = [];
  //   //   console.log(matchId);
  //   // })
  // });
  // const storage_article = document.getElementById("storage_article");
  // const btn_delete = document.querySelectorAll(".btn_delete");
  // console.log(btn_delete);

  let trashes = document.querySelectorAll(".btn_delete");
  // console.log(trashes);
  for (let trash of trashes) {
    trash.addEventListener("click", deleteProduct);
    // console.log(trash);
    function deleteProduct() {
      const idTrash = document.querySelector(".storage_article");
      idTrash.dataset.id;

      const productTrash = trash.closest(".storage_article");
      console.log(productTrash);

      // trashes.forEach((productTrash) => {
      //   if (idTrash != id) {
      //     contentLocalStorage = contentLocalStorage.filter(productTrash);
      //   }
      // });
      const idProd = contentLocalStorage.filter(
        (idNumber) => idNumber != productTrash
      );
      console.log(idProd);
    }
  }

  // btn_delete.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   const eltDeletes = btn_delete.closest(".storage_article");
  //   console.log(eltDeletes);
  //   btn_delete.dataset.id;
  //   // function newArray(element) {
  //   //   for (let i = 0; i < element.idProduit.length; i++) {
  //   //     if (element.idProduit[i] === contentLocalStorage.idProduit) {
  //   //       return element;
  //   //     }
  //   //   }
  //   // }
  //   eltDeletes.forEach((eltDelete) => {
  //     if(dataId != id){
  //     contentLocalStorage = contentLocalStorage.filter(eltDelete);
  //   }
  //   });

  //   /////console.table(contentLocalStorage.filter(newArray));
  //   // contentLocalStorage.forEach((article) => {
  //   //   const matchId = article.idProduit;
  //   //   const product_ids = [article.idProduit];

  //   //   product_ids.filter(id);

  //   //   function id(product_id) {
  //   //     document.location.reload();
  //   //   }

  //   //   product_id();
  //   //   // if(matchId === true) {
  //   //   //   contentLocalStorage.filter
  //   //   // }
  //   //   // function matchId(){
  //   //   //   if(matchId = idProduit)
  //   //   // }
  //   //   // console.log();
  //   // });
  // });

  // Vider le panier
  delete_all.addEventListener("click", (e) => {
    e.preventDefault();
    function emptyCart() {
      localStorage.clear();
      document.location.href = "/front-end/index.html";
    }
    emptyCart();
  });
  // const arrayId = [];
  // console.log(arrayId);
  // // function matchId() {
  // //   if(localStorage.getItem("article") )
  // // }
  // console.log(contentLocalStorage["article"].idProduit);

  //   const btn_delete = document.querySelectorAll(".btn_delete");
  //   console.log(btn_delete);
  //   const storage_article = document.querySelectorAll(".storage_article");

  //   for(i = 0; i < btn_delete.length; i++) {

  //     btn_delete[i].addEventListener("click", (e) => {
  //       e.preventDefault();

  //   function deleteProductFromCart(pid) {
  //     let contentLocalStorage = JSON.parse(localStorage.getItem('contentLocalStorage'));

  //     let newcart = contentLocalStorage.filter((item) => item.productId != pid);

  //     localStorage.setItem("article", JSON.stringify(newcart));
  //   }
  //   deleteProductFromCart(pid);
  //   });
  // }

  const total = (collect, montantInitial) => collect + montantInitial;
  // console.log(total);
  ///// Mettre dans un addEventListener
  const montantTotal = totalPanier.reduce(total, 0);
  // console.log(montantTotal);
  localStorage.setItem("amount", montantTotal);
  const totalQuantity = totalProducts.reduce(total, 0);
  const displayQuantity = `<td>${totalQuantity}<td>`;
  // /////////cartQuantity.innerHTML = displayQuantity;

  const amountOrder = `
     <td id="amount">${montantTotal} €</td>
     `;
  netAPayer.innerHTML = amountOrder;
  console.log(montantTotal);

  // localStorage.setItem("article", JSON.stringify(contentLocalStorage));
  // function arrayId() {
  //   contentLocalStorage = [];
  //   idProduit.push(contentLocalStorage);
  // }
  // // arrayId();
  // console.log(arrayId);
  //////////////////////// FORMULAIRE //////////////////////////
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const contact = new FormData(form);

    const formulaire = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    };
    // fetch("http://localhost:3000/api/teddies/order", envoi)
    //   .then((response) => response.json())
    //   .then((order) => {

    function validationInputs() {
      const formNomValue = firstName.value.trim();
      const formPrenomValue = lastName.value.trim();
      const formAdresseValue = address.value.trim();
      // const formCodePostalValue = formCodePostal.value.trim();
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

      // if (formCodePostalValue === "") {
      //   erreur(formCodePostal, "Le champs code postal doit être complété.");
      //   e.preventDefault();
      // } else if (!testFormCodePostal(formCodePostalValue)) {
      //   erreur(formCodePostal, "Le code postal doit contenir 5 chiffres.");
      //   e.preventDefault();
      // } else {
      //   success(formCodePostal);
      // }

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

    validationInputs(); ///////////////////////// REMETTRE ///////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    // });

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

    function testFormNom(formNom) {
      return /^[A-Z-\s]{3,20}$/.test(formNom);
    }

    function testFormPrenom(formPrenom) {
      return /^[A-Z-\s][a-z\xc0-\xff-\s]{3,20}$/.test(formPrenom);
    }

    function testFormAdresse(formAdresse) {
      return /^[0-9a-zA-Z\xc0-\xff-\s]{5,50}$/.test(formAdresse);
    }

    // function testFormCodePostal(formCodePostal) {
    //   return /^[0-9]{5}$/.test(formCodePostal);
    // }

    function testFormVille(formVille) {
      return /^[A-Z-]{3,20}$/.test(formVille);
    }

    function testFormMail(formMail) {
      return /^([+\.\w\+-]{3,})*@[\w-]+(\.[a-z]{2,6})*(\.[a-z]{2,6})$/.test(
        formMail
      );
    }

    localStorage.setItem("contact", JSON.stringify(formulaire));
    console.log(formulaire);

    const productsId = [];
    // const contact = new FormData(form);

    contentLocalStorage.forEach((contentLocalStorage) => {
      // productsId.push(article.productId);
      productsId.push(contentLocalStorage.idProduit);
    });
    console.log(productsId);

    const contact = formulaire;

    const order = {
      products: productsId,
      contact: contact,
    };
    console.log(order);

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

    // }).then((res) => {
    //   console.log(res);

    //   if (res.ok) {
    // const orderId = orderId;
    // localStorage.setItem("orderId", orderId);
    //     // window.location = "confirmation.html";
    //   } else {
    //     console.log("erreur");
    //     alert("Erreur");
    //   }
    // });
  });
});
// form.addEventListener(
//   //FAIRE CELA POUR TOUS LES AUTRES CHAMPS
//   "submit",
//   function (event) {
//     // Chaque fois que l'utilisateur tente d'envoyer les données
//     // on vérifie que le champ email est valide.
//     if (!formMail.validity.valid) {
//       // S'il est invalide, on affiche un message d'erreur personnalisé
//       errorMail.innerHTML = "Veuillez entrer votre adresse e-mail.";
//       errorMail.className = "error active";
//       errorMail.style.color = "red";
//       // Et on empêche l'envoi des données du formulaire
//       event.preventDefault();
//     }
//   },
//   false
// );

////////////////////////////////////////////////////

//   const envoi = {
//   method: “POST”,
//   headers: {
// 'Accept': 'application/json',
// 'Content-Type': 'application/json',
// },
//   body: JSON.stringify(jsonBody),
// };
// fetch("http://url-service-web.com/api/teddies", envoi)
// });

// fetch(API_POST_URL)
