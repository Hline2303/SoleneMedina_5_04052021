import { animateMenu } from "./functions.js";

// Chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const confirmation = document.querySelector("body.confirmation");
  if (!confirmation) return;

  // Changement du style au passage de la souris sur le menu de navigation
  animateMenu();
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
      <p class="confirmation__content--signature">L'équipe d'Orinoco</p>
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
