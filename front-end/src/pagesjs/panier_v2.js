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
  
    // function displayCartQuantity(){
  
    // }
  
    // function idemProducts () {
    //   const idemProducts = localStorage.getItem("article");
  
    //   if(idemProducts) {
    //     localStorage.setItem("article", idemProducts + 1);
    //     document.querySelector("#nbQuantity").textContent = idemProducts + 1;
    //   } else {
    //     localStorage.setItem("article", 1);
    //     document.querySelector("#nbQuantity").textContent = 1;
    //   }
    // }
  
    // if(peluchesQuantity) {
  
    // } else {
    //   localStorage.setItem(contentLocalStorage.quantity);
    // }
  
    if (contentLocalStorage === null) {
      // const oldQuantity = (contentLocalStorage[this.name] && oldItems[this.name].qty) || 0;
  
      const emptyCart = `
       <td>Votre panier est vide</td>
       `;
      fillCart.innerHTML = emptyCart;
    } else {
      
      for (i = 0; i < contentLocalStorage.length; i++) {
  
        // contentLocalStorage[i] = contentLocalStorage + contentLocalStorage[i].quantity;
  
        const montantArticles =
          contentLocalStorage[i].quantity * contentLocalStorage[i].prix;
        console.log(montantArticles);
  ////////////////////////////////////////////////////////////////////////////
        // function groupByName(contentLocalStorage, propriete) {
        //   return contentLocalStorage.reduce(function (collector, article) {
        //     const key = article[propriete];
        //     if (!collector[key]) {
        //       collector[key] = [];
        //     }
        //     collector[key].push(article);
        //     return collector;
        //   }, {});
        // }
  
  
        // const peluchesQuantity = groupByName(contentLocalStorage, "nom");
        // console.log(peluchesQuantity);
  
        // if(contentLocalStorage === null) {
        //   peluchesQuantity =[];
        // } else {
        //   for (let i = 0; i < peluchesQuantity.length; i++) {
        //     peluchesQuantity[i] = peluchesQuantity + peluchesQuantity.qty;
        //   }
        // }
  ///////////////////////////////////////////////////////////////////////////
        fullCart =
          fullCart +
          `
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
  
        const montant =
          contentLocalStorage[i].prix * contentLocalStorage[i].quantity;
        totalPanier.push(montant);
        //       console.log(totalPanier);
      }
  
      if (i == contentLocalStorage.length) {
        fillCart.innerHTML = fullCart;
      }
    }
    const total = (collect, montantInitial) => collect + montantInitial;
    console.log(total);
  
    const montantTotal = totalPanier.reduce(total, 0);
    console.log(montantTotal);
  
    const amountOrder = `
       <td>${montantTotal} €</td>
       `;
    netAPayer.innerHTML = amountOrder;
  
    localStorage.setItem("article", JSON.stringify(contentLocalStorage));
  // ////////////////// FORMULAIRE //////////////
    const form = document.getElementById("form");
    const formNom = document.getElementById("nomClient");
    const formPrenom = document.getElementById("prenomClient");
    const formAdresse = document.getElementById("adresseClient");
    const formCodePostal = document.getElementById("codePostalClient");
    const formVille = document.getElementById("villeClient");
    const formMail = document.getElementById("mailClient");
  
    // const errorNom = document.querySelector("#errorNom");
    // const errorPrenom = document.querySelector("#errorPrenom");
    // const errorAdresse = document.querySelector("#errorAdresse");
    // const errorCodePostal = document.querySelector("#errorCodePostal");
    // const errorVille = document.querySelector("#errorVille");
    // const errorMail = document.querySelector("#errorMail");
  
    form.addEventListener("submit", (e) => {
      function validationInputs() {
        const formNomValue = formNom.value.trim();
        const formPrenomValue = formPrenom.value.trim();
        const formAdresseValue = formAdresse.value.trim();
        const formCodePostalValue = formCodePostal.value.trim();
        const formVilleValue = formVille.value.trim();
        const formMailValue = formMail.value.trim();
  
        if (formNomValue === "") {
          erreur(formNom, "Le champs nom doit être complété.");
          e.preventDefault();
        } else if (!testFormNom(formNomValue)) {
          erreur(
            formNom,
            "Le nom doit comporter entre 3 à 20 lettres majuscules."
          );
          e.preventDefault();
        } else {
          success(formNom);
        }
  
        if (formPrenomValue === "") {
          erreur(formPrenom, "Le champs prénom doit être complété.");
          e.preventDefault();
        } else if (!testFormPrenom(formPrenomValue)) {
          erreur(
            formPrenom,
            "Le prénom doit commencer par une lettre majuscule et être composer uniquement de lettres, au minimum 3."
          );
          e.preventDefault();
        } else {
          success(formPrenom);
        }
  
        if (formAdresseValue === "") {
          erreur(formAdresse, "Le champs adresse doit être complété.");
          e.preventDefault();
        } else if (!testFormAdresse(formAdresseValue)) {
          erreur(formAdresse, "Veuillez entrer une adresse valide.");
          e.preventDefault();
        } else {
          success(formAdresse);
        }
  
        if (formCodePostalValue === "") {
          erreur(formCodePostal, "Le champs code postal doit être complété.");
          e.preventDefault();
        } else if (!testFormCodePostal(formCodePostalValue)) {
          erreur(formCodePostal, "Le code postal doit contenir 5 chiffres.");
          e.preventDefault();
        } else {
          success(formCodePostal);
        }
  
        if (formVilleValue === "") {
          erreur(formVille, "Le champs ville doit être complété.");
          e.preventDefault();
        } else if (!testFormVille(formVilleValue)) {
          erreur(
            formVille,
            "La ville doit contenir uniquement des majuscules, 3 minimum."
          );
          e.preventDefault();
        } else {
          success(formVille);
        }
  
        if (formMailValue === "") {
          erreur(formMail, "Le champs email doit être complété.");
          e.preventDefault();
        } else if (!testFormMail(formMailValue)) {
          erreur(
            formMail,
            "L'email doit être composé sous cette forme : email@nomdedomaine.fr"
          );
          e.preventDefault();
        } else {
          success(formMail);
        }
      }
  
      validationInputs();
    });
  
    function erreur(input, message) {
      const formValidation = input.parentElement;
      const small = formValidation.querySelector("small");
  
      small.innerText = message;
  
      formValidation.className = "form-validation erreur";
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
  
    function testFormCodePostal(formCodePostal) {
      return /^[0-9]{5}$/.test(formCodePostal);
    }
  
    function testFormVille(formVille) {
      return /^[A-Z-]{3,20}$/.test(formVille);
    }
  
    function testFormMail(formMail) {
      return /^([+\.\w\+-]{3,})*@[\w-]+(\.[a-z]{2,6})*(\.[a-z]{2,6})$/.test(
        formMail
      );
    }
  
    // ////////////////////// Créer une clé pour les éléments à envoyer dans le localstorage
    // const formulaire = {
    //   nom: localStorage.setItem("nom", document.querySelector("#nomClient").value),
    //   prenom: localStorage.setItem("prenom", document.querySelector("#prenomClient").value),
    //   adresse: localStorage.setItem("adresse", document.querySelector("#adresseClient").value),
    //   codePostal: localStorage.setItem("code postal", document.querySelector("#codePostalClient").value),
    //   ville: localStorage.setItem("ville", document.querySelector("#villeClient").value),
    //   mail: localStorage.setItem("mail", document.querySelector("#mailClient").value),
    // };
    
    // console.log(document.querySelector("#nomClient").value);
    // /// if valid form and content localstorage ???
  
    // // const formulaireStorage = localStorage.getItem("formulaire");
    // // localStorage.setItem("formulaire", JSON.stringify(formulaireStorage));
  
    // /////////////////////If pdt cmd and valid form then POST
    // const envoiFormulaire = {
    //   contact,
    //   products,
    // };
    // console.log(envoiFormulaire);
  
    // const envoiServer = fetch("http://url-service-web.com/api/teddies", {
    //   method: "POST",
    //   body: JSON.stringify(envoiFormulaire),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // envoiServer();
    // form.addEventListener("submit")
    // function validNom() {
    //   const regexNom = /[A-Z]{3,20}/;
  
    //   if (formNom.value.trim === "" || formNom.value.trim === regexNom) {
    //     errorNom.innerText = "";
    //     errorNom.style.color = "green";
    //     return true;
    //   } else {
    //     errorNom.innerText = "Nom invalide";
    //     errorNom.style.color = "red";
    //     formNom.setCustomValidity(
    //       "Le nom est uniquement composé de 3 à 20 lettres majuscules."
    //     );
    //     return false;
    //   }
    // }
  
    // validNom();
  
    // formNom.addEventListener("keyup", function (event) {
    //   if (formNom.validity.typeMismatch) {
    //     formNom.setCustomValidity(
    //       "Le nom est uniquement composé de 3 à 20 lettres majuscules."
    //     );
    //   } else {
    //     formNom.setCustomValidity("");
    //   }
    // });
  
    // formNom.onkeydown = function () {
    // OK    const regexNom = /^[A-Z]{3,20}$/;
  
    //     if (regexNom.test(formNom)) {
    //         errorNom.innerText = "Nom valide";
    //         errorNom.style.color = "green";
    //       } else {
    //         errorNom.innerText = "Nom invalide";
    //         errorNom.style.color = "red";
    //         formNom.setCustomValidity("Le nom est uniquement composé de 3 à 20 lettres majuscules.")
    //       }
    // };
  
    // formPrenom.onkeydown = function () {
    // OK  const regexPrenom = /^[A-Z][a-z]{3,20}$/;
  
    //   if (regexPrenom.test(formPrenom.value)) {
    //     errorPrenom.innerText = "Prénom valide";
    //     errorPrenom.style.color = "green";
    //   } else {
    //     errorPrenom.innerText = "Prénom invalide";
    //     errorPrenom.style.color = "red";
    //     formPrenom.setCustomValidity(
    //       "Le prénom doit commencer par une lettre majuscule et être composer uniquement de lettres, au minimum 3."
    //     );
    //   }
    // };
  
    // formAdresse.onkeydown = function () {
    //  OK const regexAdresse = /^[0-9a-zA-Z-\s]{5,50}$/;
  
    //   if (regexAdresse.test(formAdresse.value)) {
    //     errorAdresse.innerText = "Adresse valide";
    //     errorAdresse.style.color = "green";
    //   } else {
    //     errorAdresse.innerText = "Adresse invalide";
    //     errorAdresse.style.color = "red";
    //     formPrenom.setCustomValidity("Veuillez entrer une adresse valide.");
    //   }
    // };
  
    // formCodePostal.onkeydown = function () {
    // OK  const regexCodePostal = /^[0-9]{5}$/;
  
    //   if (regexCodePostal.test(formCodePostal.value)) {
    //     errorCodePostal.innerText = "Code postal valide";
    //     errorCodePostal.style.color = "green";
    //   } else {
    //     errorCodePostal.innerText = "Code postal invalide";
    //     errorCodePostal.style.color = "red";
    //     formPrenom.setCustomValidity("Le code postal doit contenir 5 chiffres.");
    //   }
    // };
  
    // formVille.onkeydown = function () {
    //   const regexVille = /^[A-Z-]{3,20}$/;
  
    //   if (regexVille.test(formVille.value)) {
    //     errorVille.innerText = "Ville valide";
    //     errorVille.style.color = "green";
    //   } else {
    //     errorVille.innerText = "Ville invalide";
    //     errorVille.style.color = "red";
    //     formPrenom.setCustomValidity("La ville doit contenir uniquement des majuscules, 3 minimum.");
    //   }
    // };
  
    // formMail.onkeydown = function () {
    //   const regexEmail =
    //     /^([+\.\w\+-]{3,})*@[\w-]+(\.[a-z]{2,6})*(\.[a-z]{2,6})$/;
    //   // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    //   if (regexEmail.test(formMail.value)) {
    //     errorMail.innerText = "Email valide";
    //     errorMail.style.color = "green";
    //   } else {
    //     errorMail.innerText = "Email invalide";
    //     errorMail.style.color = "red";
    //     formPrenom.setCustomValidity("L'email doit être composé sous cette forme : email@nomdedomaine.fr");
    //   }
    // };
  
    // form.addEventListener( //FAIRE CELA POUR TOUS LES AUTRES CHAMPS
    //   "submit",
    //   function (event) {
    //     // Chaque fois que l'utilisateur tente d'envoyer les données
    //     // on vérifie que le champ email est valide.
    //     if (!formNom.validity.valid) {
    //       // S'il est invalide, on affiche un message d'erreur personnalisé
    //       errorNom.innerHTML = "Veuillez entrer un nom valide.";
    //       errorNom.className = "error active";
    //       errorNom.style.color = "red";
    //       // Et on empêche l'envoi des données du formulaire
    //       event.preventDefault();
    //     }
    //   },
    //   false
    // );
  
    // form.addEventListener(
    //   //FAIRE CELA POUR TOUS LES AUTRES CHAMPS
    //   "submit",
    //   function (event) {
    //     // Chaque fois que l'utilisateur tente d'envoyer les données
    //     // on vérifie que le champ email est valide.
    //     if (!formPrenom.validity.valid) {
    //       // S'il est invalide, on affiche un message d'erreur personnalisé
    //       errorPrenom.innerHTML = "Veuillez entrer votre prénom.";
    //       errorPrenom.className = "error active";
    //       errorPrenom.style.color = "red";
    //       // Et on empêche l'envoi des données du formulaire
    //       event.preventDefault();
    //     }
    //   },
    //   false
    // );
  
    // form.addEventListener(
    //   //FAIRE CELA POUR TOUS LES AUTRES CHAMPS
    //   "submit",
    //   function (event) {
    //     // Chaque fois que l'utilisateur tente d'envoyer les données
    //     // on vérifie que le champ email est valide.
    //     if (!formAdresse.validity.valid) {
    //       // S'il est invalide, on affiche un message d'erreur personnalisé
    //       errorAdresse.innerHTML = "Veuillez votre adresse.";
    //       errorAdresse.className = "error active";
    //       errorAdresse.style.color = "red";
    //       // Et on empêche l'envoi des données du formulaire
    //       event.preventDefault();
    //     }
    //   },
    //   false
    // );
  
    // form.addEventListener(
    //   //FAIRE CELA POUR TOUS LES AUTRES CHAMPS
    //   "submit",
    //   function (event) {
    //     // Chaque fois que l'utilisateur tente d'envoyer les données
    //     // on vérifie que le champ email est valide.
    //     if (!formCodePostal.validity.valid) {
    //       // S'il est invalide, on affiche un message d'erreur personnalisé
    //       errorCodePostal.innerHTML = "Veuillez entrer votre code postal.";
    //       errorCodePostal.className = "error active";
    //       errorCodePostal.style.color = "red";
    //       // Et on empêche l'envoi des données du formulaire
    //       event.preventDefault();
    //     }
    //   },
    //   false
    // );
  
    // form.addEventListener(
    //   //FAIRE CELA POUR TOUS LES AUTRES CHAMPS
    //   "submit",
    //   function (event) {
    //     // Chaque fois que l'utilisateur tente d'envoyer les données
    //     // on vérifie que le champ email est valide.
    //     if (!formVille.validity.valid) {
    //       // S'il est invalide, on affiche un message d'erreur personnalisé
    //       errorVille.innerHTML = "Veuillez entrer votre ville.";
    //       errorVille.className = "error active";
    //       errorVille.style.color = "red";
    //       // Et on empêche l'envoi des données du formulaire
    //       event.preventDefault();
    //     }
    //   },
    //   false
    // );
  
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
    //   const envoi = fetch("http://url-service-web.com/api/teddies", {
    //   method: “POST”,
    //   headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // },
    //   body: JSON.stringify(jsonBody),
    // });
  });
  
  // fetch(API_POST_URL)
  