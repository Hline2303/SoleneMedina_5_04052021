// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const confirmation = document.querySelector("body.confirmation");
  if (!confirmation) return;

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

  // Confirmation de commande
  const formulaireStorage = JSON.parse(localStorage.getItem("contact"));
  function orderValidation() {
    const msgConfirmation = document.querySelector("#confirmation");
    const amount = localStorage.getItem("amount");
    const orderId = localStorage.getItem("orderId");

    msgConfirmation.innerHTML += `
    <div class="confirmation__content">
      <p class="confirmation__content--justify">${formulaireStorage.lastName} ${formulaireStorage.firstName}</p>
      <p class="confirmation__content--justify">Votre commande d'un montant de  ${amount}€ a bien été enregistrée sous le :</p>
      <p class="confirmation__content--center">N° ${orderId} <br> <br>Nous vous remercions <br>de votre confiance. <br> 
      <p class="confirmation__content--signature">L'équipe d'</p>
      <div class="confirmation__content--image"><img src="../images/logo_orinoco.png"></div>
    </div>
    `;
  }
  orderValidation();

  // Vider le localstorage
  function emptyStorage(key) {
    localStorage.removeItem(key);
  }

  emptyStorage("amount");
  emptyStorage("article");
  emptyStorage("orderId");
});
