document.addEventListener("DOMContentLoaded", function () {
  const confirmation = document.querySelector("body.confirmation");
  if (!confirmation) return;
  console.log(confirmation);

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

  // function openPanier() {
  const openPanier = document.querySelector("#panierNav");

  openPanier.addEventListener("click", panierWindow);

  function panierWindow() {
    window.location.href = "/front-end/pages/panier.html";
  }

  // document.querySelector("#nom").innerHTML = localStorage.getItem("Nom");
  // document.querySelector("#prenom").innerHTML = localStorage.getItem("Prénom");
  // let nomClient = localStorage.getItem("Nom");
  // let prenomClient = localStorage.getItem("Prénom");
  // let montantClient = localStorage.getItem("Montant");
  // // const personalConfirmation = document.querySelector("#confirmation");
  // // Récupérer l'id de la commande
  // let orderId = localStorage.getItem("orderId");

  // // Définir la fonction orderDisplayCheck()
  // function orderDisplayCheck() {
  //   // Affichage message perso
  //   personalConfirmation.textContent =
  //     nomClient +
  //     prenomClient +
  //     "Votre commande d'un montant de " +
  //     montantClient +
  //     "€ a bien été enregistrée sous le : N° " +
  //     orderId +
  //     ". Nous vous remercions de votre confiance. L'équipe d'";
  // }
  // // console.log(orderDisplayCheck);
  // // orderDisplayCheck();
  // document.getElementById("confirmation").textContent = orderDisplayCheck;
  // Confirmation
  const formulaireStorage = JSON.parse(localStorage.getItem("contact"));
  console.log(formulaireStorage);
  function orderValidation() {
    const msgConfirmation = document.querySelector("#confirmation");
    const lastName = localStorage.getItem("nom");
    const prenomClient = localStorage.getItem("prenom");
    const amount = localStorage.getItem("amount");
    const orderId = localStorage.getItem("orderId");

    // msgConfirmation.innerHTML += `
    //   ${formulaireStorage.lastName} +
    //   ${formulaireStorage.firstName} +
    //   "Votre commande d'un montant de " +
    //   ${amount} +
    //   "€ a bien été enregistrée sous le : N° " +
    //   ${orderId} +
    //   "Nous vous remercions de votre confiance. L'équipe d'"
    //   `;

    msgConfirmation.innerHTML += `
    <div class="confirmation__content">
      <p class="confirmation__content--justify">${formulaireStorage.lastName} ${formulaireStorage.firstName}</p>
      <p class="confirmation__content--justify">Votre commande d'un montant de  ${amount}€ a bien été enregistrée sous le :</p>
      <p class="confirmation__content--center">N° ${orderId} <br> <br>Nous vous remercions <br>de votre confiance. <br> <p>L'équipe d' <img src="../images/logo_orinoco.png"></p>
    </div>
    `;
    
  }
  orderValidation();
  // const msgConfirmation = document.querySelector(".confirmation");
  // function orderId() {
    // msgConfirmation.innerHTML += `
    // <div class="confirmation__content">
    //   <p class="confirmation__content--justify">${formulaireStorage.lastName} ${formulaireStorage.firstName}</p>
    //   <p class="confirmation__content--justify">Votre commande d'un montant de  ${amount}€ a bien été enregistrée sous le :</p>
    //   <p class="confirmation__content--center">N° ${orderId} <br> <br>Nous vous remercions <br>de votre confiance. <br> <p>L'équipe d' <img src="../images/logo_orinoco.png"></p>
    // </div>
    // `;}
  //   orderId();

   // Vider le localstorage
   function emptyStorage(key) {
    localStorage.removeItem(key);
  }

  emptyStorage("amount");
  emptyStorage("article");
  emptyStorage("orderId");
});
