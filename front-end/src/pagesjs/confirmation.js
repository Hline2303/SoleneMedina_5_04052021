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
    window.location.href = "http://127.0.0.1:5500/front-end/index.html";
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
    window.location.href = "http://127.0.0.1:5500/front-end/pages/panier.html";
  }

  // document.querySelector("#nom").innerHTML = localStorage.getItem("Nom");
  // document.querySelector("#prenom").innerHTML = localStorage.getItem("Prénom");
  const nomClient = localStorage.getItem("Nom");
  console.log(nomClient);
  const prenomClient = localStorage.getItem("Prénom");
  console.log(prenomClient);
  // Récupérer l'id de la commande
  const orderId = localStorage.getItem("orderId");
  console.log(orderId);

  // Confirmation
  const msgConfirmation = document.querySelector(".confirmation");
  console.log(msgConfirmation);
  msgConfirmation.innerHTML += `
    <div class="confirmation__content">
                <p class="confirmation__content--justify">${msgConfirmation.prenomClient}</p>
                <p class="confirmation__content--justify">Votre commande d'un montant de  € a bien été enregistrée sous le :</p>
                <p class="confirmation__content--center">N° orderId <br> <br>Nous vous remercions <br>de votre confiance. <br> <p>L'équipe d' <img src="../images/logo_orinoco.png"></p>
            </div> 
    `;
});
