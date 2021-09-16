export function animateMenu() {
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

  function ouvreHomepage() {
    window.location.href = "/front-end/index.html";
  }

  function panierWindow() {
    window.location.href = "/front-end/pages/panier.html";
  }
