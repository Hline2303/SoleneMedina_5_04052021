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

  const fillCart = document.querySelector("#bodyCart");
  let fullCart = [];
  const totalPanier = [];
  const totalProducts = [];
  const netAPayer = document.querySelector("#total");

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
      fullCart =
        fullCart +
        `
              <tr class="storage_article" id="storage_article" data-id="${article[0]}">
                <td><img src="${article[1][0].image}" width="200"></td>
                <td><h2>${article[1][0].nom}</h2></td>
                <td class="quantityInput">
                  <input type="number" min="0" max="10" step="1" class="quantity" id="quantity" name="quantity" value=""/>
                  <button type="button" name="ajouter" id="btnAjouter" class="fiche__produit--panier btnAjouter">Ajouter au panier</button>
                </td>
          
                <td id="delete"><button class="btn_delete" id="btn_delete"><i class="fas fa-trash"></i></button></td>
                <td id="price">${article[1][0].prix}€</td>
                <td id="montant"> 0 €</td>
              </tr>
              `;
      fillCart.innerHTML = fullCart;

      // console.log(data-id);
      // Identifiant article
      let idArticle = document.getElementById("storage_article");
      // idArticle.dataset.id;

      let id = idArticle.dataset.id;

      // $(this).data().id;

      const quantity = article[1].length;
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
      const montant = quantity * productId.prix;
      console.log(montant);

      totalPanier.push(montant);
      totalProducts.push(quantity);
      // console.log(article[1][0].quantité);
      // let choixQuantity = article[1][0].quantité;
      // console.log(choixQuantity);
      // let productId = article[1][0];

      let btnAjouter = document.getElementsByClassName("btnAjouter");
      // console.log(addProduct);

      /********************************************/ 
      // mettre inputNb dans storage article value et à la place de quantité dans choixProduit et dans le calcul

      for (let i = 0; i < btnAjouter.length; i++) {
        btnAjouter[i].addEventListener("click", (e) => {
          e.preventDefault();
          let inputNb = document.querySelector("#quantity").value;
          console.log(inputNb);
          // Récupération des valeurs du panier
          const choixProduit = {
            image: article[1][0].image,
            idProduit: article[1][0].idProduit,
            nom: article[1][0].nom,
            quantité: inputNb,
            prix: article[1][0].prix * inputNb,
          };

          // console.log(choixProduit);
          // let adding = contentLocalStorage[i].idProduit;

          const ajoutProduit = () => {
            contentLocalStorage.push(choixProduit);
            localStorage.setItem(
              "article",
              JSON.stringify(contentLocalStorage)
            );
          };

          let idProduct = contentLocalStorage[i].idProduit;
          // console.log(idProduct);
          // const idArticle = article.idProduit;
          // console.log(idArticle);
          // console.log(productId);

          if (id === idProduct){
              if (contentLocalStorage) {
                ajoutProduit();
                // console.log("Ce bouton correspond");
              } else {
                contentLocalStorage = [];
                ajoutProduit();
                // console.log("Il n'y a aucune correspondance");
          }};

          // if (contentLocalStorage) {
          //   ajoutProduit();
          // } else {
          //   contentLocalStorage = [];
          //   ajoutProduit();
          // }
          let adding = contentLocalStorage;

          console.log(contentLocalStorage);

          localStorage.setItem("article", JSON.stringify(contentLocalStorage));

          // contentLocalStorage = contentLocalStorage.filter(
          //   (pdt) => pdt.idProduit != removeProduct
          // );
          // localStorage.setItem("article", JSON.stringify(contentLocalStorage));
          // window.location.href = "/front-end/pages/panier.html";
        });
      }
      // let addBtn = document.getElementsByClassName("addBtn");
      // for (let i = 0; i < addBtn.length; i++) {
      //   addBtn[i].addEventListener("click", (e) => {
      //     e.preventDefault();
      //     function addQuantity() {
      //       let addQuantité = productId.quantité;
      //       console.log(addQuantité);

      //       let newQty = choixQuantity++;
      //       console.log(newQty);

      //       let newQuantity = addQuantité + choixQuantity;
      //       console.log(newQuantity);

      //       let inputNb = document.querySelector("#quantity").value;
      //       console.log(inputNb);
      //       // let inputQuantity = parseInt(inputNb);
      //       // console.log((choixQuantity = inputNb));

      //       let montant = inputNb * productId.prix;
      //       console.log(montant);

      //       const montantProduct = document.querySelector("#montant");
      //       montantProduct.innerHTML = montant;

      //       const choixProduit = {
      //         image: article[1][0].image,
      //         idProduit: article[1][0].idProduit,
      //         nom: article[1][0].name,
      //         quantité: inputNb,
      //         prix: article[1][0].prix * inputNb,
      //       };

      //       const ajoutProduit = () => {
      //         contentLocalStorage.push(choixProduit);
      //         localStorage.setItem(
      //           "article",
      //           JSON.stringify(contentLocalStorage)
      //         );
      //       };

      //       if (contentLocalStorage) {
      //         ajoutProduit();
      //       } else {
      //         contentLocalStorage = [];
      //         ajoutProduit();
      //       }
      //       // console.log(addProduct);
      //       totalPanier.push(montant);
      //       console.log(totalPanier);
      //       totalProducts.push(quantity.value);
      //       console.log(totalProducts);

      //       // const arrayTotal = totalPanier.reduce((a, b) => a + b, 0);
      //       // console.log(arrayTotal);

      //       const total = (collect, montantInitial) => collect + montantInitial;
      //       console.log(total);
      //       // console.log(contentLocalStorage);
      //       ///// Mettre dans un addEventListener
      //       const montantTotal = totalPanier.reduce(total);
      //       console.log(montantTotal);
      //       // const montantTotal = totalPanier;

      //       localStorage.setItem("amount", montantTotal);
      //       const totalQuantity = totalProducts.reduce(total);
      //       const displayQuantity = `${totalQuantity}`;
      //       // console.log(displayQuantity);
      //       // /////////cartQuantity.innerHTML = displayQuantity;

      //       const amountOrder = `
      //       <td id="amount">${montantTotal} €</td>
      //       `;
      //       netAPayer.innerHTML = amountOrder;

      //       let cart = document.querySelector("#quantityCart");
      //       // console.log(cart);

      //       cart.innerHTML = displayQuantity;
      //     }
      //     addQuantity();
      //   });
      // }

      ////////////////////////// EN TEST ////////////////////////////////
      // const addBtn = document.querySelector("#addBtn");
      // console.log(article.idProduit);
      // const idArticle = article[1][0].idProduit;
      // console.log(idArticle);
      // console.log(contentLocalStorage[article].idProduit);
      // console.log(result);
      // console.log(localStorage);
      /*/*/ /*/*/ /*/*/ /*/*
      let addBtn = document.getElementsByClassName(".addBtn");
      for (let i = 0; i < addBtn.length; i++) {
        addBtn[i].addEventListener("click", (e) => {
          e.preventDefault();
          let addProduct = contentLocalStorage[i].idProduit;
          console.log(addProduct);
          // const idArticle = article[1][0].idProduit;

          // if (addProduct === idArticle) {
          //   console.log("Ce bouton correspond");
          // } else {
          //   console.log("Il n'y a aucune correspondance");
          // }

          // contentLocalStorage = contentLocalStorage.filter(
          //   (pdt) => pdt.idProduit != removeProduct
          // );
          contentLocalStorage.push(article);
          localStorage.setItem("article", JSON.stringify(contentLocalStorage));
          // window.location.href = "/front-end/pages/panier.html";
        });
      }

      /*/ ///*/*/**/*/*/* */
      // const ajouterPanier = document.querySelector("#btnAjouter");
      // let inputNb = document.querySelector("#quantity").value;
      // //       console.log(inputNb);
      // // console.log(ajouterPanier);
      // // Stockage dans le localStorage
      // ajouterPanier.addEventListener("click", (e) => {
      //   e.preventDefault();

      //   // Récupération des valeurs du panier
      //   // const choixProduit = {
      //   //   image: article[1][0].image,
      //   //   idProduit: article[1][0]._id,
      //   //   nom: article[1][0].name,
      //   //   quantité: 1,
      //   //   prix: article.price / 100,
      //   // };
      //   const choixProduit = {
      //             image: article[1][0].image,
      //             idProduit: article[1][0].idProduit,
      //             nom: article[1][0].name,
      //             quantité: inputNb,
      //             prix: article[1][0].prix * inputNb,
      //           };
      //   console.log(choixProduit);

      //   // Contenu du localStorage
      //   let contentLocalStorage = JSON.parse(localStorage.getItem("article"));

      //   const ajoutProduit = () => {
      //     contentLocalStorage.push(choixProduit);
      //     localStorage.setItem("article", JSON.stringify(contentLocalStorage));
      //   };
      //   // // Vérification contenu présent dans le localStorage
      //   // contentLocalStorage[this.name] = choixProduit;
      //   // localStorage.setItem("itemsObject", JSON.stringify(oldItems));

      //   // if (contentLocalStorage) {
      //   //   ajoutProduit();
      //   // } else {
      //   //   contentLocalStorage = [];
      //   //   ajoutProduit();
      //   // }
      // }); EN ATTENTE

      // document.querySelectorAll(".addBtn").forEach((addBtn) => {
      //   addBtn.addEventListener("click", (e) => {
      //     e.preventDefault();

      //     const idArticle = article[1][0].idProduit;

      //     if (addBtn === idArticle) {
      //       console.log("Ce bouton correspond");
      //     } else {
      //       console.log("Il n'y a aucune correspondance");
      //     }

      //     // contentLocalStorage.push(article);
      //     // localStorage.setItem("article", JSON.stringify(contentLocalStorage));
      //     // // Récupération des valeurs du panier
      //     // const choixProduit = {
      //     //   image: article[1][0].image,
      //     //   idProduit: article[1][0].idProduit,
      //     //   nom: article[1][0].nom,
      //     //   quantité: 1,
      //     //   prix: article[1][0].prix,
      //     // };
      //     // console.log(choixProduit);

      //     // // Contenu du localStorage
      //     // let contentLocalStorage = JSON.parse(localStorage.getItem("article"));

      //     // const ajoutProduit = () => {
      //     //   contentLocalStorage.push(choixProduit);
      //     //   localStorage.setItem(
      //     //     "article",
      //     //     JSON.stringify(contentLocalStorage)
      //     //   );
      //     // };
      //     // // // Vérification contenu présent dans le localStorage
      //     // // contentLocalStorage[this.name] = choixProduit;
      //     // // localStorage.setItem("itemsObject", JSON.stringify(oldItems));

      //     // if (contentLocalStorage) {
      //     //   ajoutProduit();
      //     // } else {
      //     //   contentLocalStorage = [];
      //     //   ajoutProduit();
      //     // }
      //   });
      // });

      /////////////////////////////////////////////////////////////////////
      // let addBtn = document.getElementsByClassName("btnAjouter");
      // for (let i = 0; i < addBtn.length; i++) {
      //   addBtn[i].addEventListener("click", (e) => {
      //     e.preventDefault();
      //     let addProduct = contentLocalStorage[i].idProduit;
      //     console.log(addProduct);

      //     // contentLocalStorage = contentLocalStorage.filter(
      //     //   (pdt) => pdt.idProduit != removeProduct
      //     // );
      //     localStorage.setItem("article", JSON.stringify(contentLocalStorage));
      //     // window.location.href = "/front-end/pages/panier.html";
      //   });

      let trash = document.getElementsByClassName("btn_delete");
      for (let i = 0; i < trash.length; i++) {
        trash[i].addEventListener("click", (e) => {
          e.preventDefault();
          let removeProduct = contentLocalStorage[i].idProduit;
          console.log(removeProduct);

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

  const total = (collect, montantInitial) => collect + montantInitial;

  ///// Mettre dans un addEventListener
  const montantTotal = totalPanier.reduce(total, 0);
  // console.log(totalPanier.reduce(montantTotal));
  localStorage.setItem("amount", montantTotal);
  const totalQuantity = totalProducts.reduce(total, 0);
  const displayQuantity = `${totalQuantity}`;
  const amountOrder = `
     <td id="amount">${montantTotal} €</td>
     `;
  netAPayer.innerHTML = amountOrder;

  let cart = document.querySelector("#quantityCart");
  cart.innerHTML = displayQuantity;

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

    contentLocalStorage.forEach((contentLocalStorage) => {
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

    ////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    // NE PAS OUBLIER DE RAJOUTER LE LOGO
    // DANS LE PJT ET DANS LA PRESENTATION BROCHURE MAQUETTE
    //////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
  });
});
