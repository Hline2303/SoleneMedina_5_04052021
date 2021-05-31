document.addEventListener("DOMContentLoaded", function() {
    const produit = document.querySelector("body.produit");
        if(!produit)return;

    // console.log(produit);

/////////// Menu navigation Orinoco ATTENTION DOIT SE REPETER SUR TT LES PAGES


const menuHover = document.querySelector('#accueilNav');
// p2.addEventListener('click', changeTexte);
menuHover.addEventListener('mouseover', changeTexte1);
menuHover.addEventListener('mouseout', changeTexte2);

function changeTexte1() {
    this.style.color = 'white';
    this.style.padding = '';
    this.style.backgroundColor = '#8f7361';
}

function changeTexte2() {
    this.style.color = '';
    this.style.padding = '';
    this.style.backgroundColor = '';
}

const clicHomepage = document.querySelector('#accueilNav');
// p2.addEventListener('click', ouvreHomepage);
clicHomepage.addEventListener('click', ouvreHomepage);
// function ouvreHomepage() {
function ouvreHomepage() {
    window.location.href="http://127.0.0.1:5500/front-end/index.html";
}

/////////// Menu panier Orinoco

const panierHover = document.querySelector('#panierNav');

// p2.addEventListener('click', changeTexte);
panierHover.addEventListener('mouseover', changeTexte1);
panierHover.addEventListener('mouseout', changeTexte2);

function changeTexte1() {
    this.style.color = 'white';
    this.style.padding = '5px';
    this.style.marginLeft = '15px';
    this.style.backgroundColor = '#8f7361';
}

function changeTexte2() {
    this.style.color = '';
    this.style.padding = '';
    this.style.backgroundColor = '';
}

// function openPanier() {
const openPanier = document.querySelector("#panierNav");

openPanier.addEventListener('click', panierWindow);

function panierWindow () {
window.location.href="http://127.0.0.1:5500/front-end/pages/panier.html";
}

// Récupération de la chaîne de requête dans l'url
// const idExtraction = window.location.search;
// console.log(idExtraction);
// const myUrl = new URL("http://127.0.0.1:5500/front-end/pages/produit.html?id=5be9c8541c9d440000665243");
// console.log(myUrl);


// const urlActuelle = window.location.search;
// console.log(urlActuelle);

// Extraction de l'id
const params = new URLSearchParams(window.location.search);
// // console.log(params);
const idProduit = params.get("id");
console.log(idProduit);


// // Affichage du produit 
fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
.then((response) => response.json()) // Convertir en json
.then((data) => { // Récupération de la réponse et affichage des produits 
    const fiche = document.querySelector("section.fiche");
    // console.log(fiche);

    fiche.innerHTML += `
    <div class="fiche__produit">
                <div class="fiche__produit--img"><img src="${data.imageUrl}" class="ficheImage"></div>
               
                <div class="fiche__produit--content">
                <div class="fiche__produit--global">
                    <div class="fiche__produit--description"> 
                        <h2>${data.name}</h2>

                        <p>${data.description}</p>

                         <p class="fiche__produit--stock">En stock</p>
                     </div>
                    
                     <div class="fiche__produit--price">
                         <p>${data.price/100}€</p>
                     </div>
                 </div>

                 <div class="fiche__produit--selection">
                     <input type="text" id="colors" name="color" list="listColors" > 
                     <datalist id="listColors">
                         <option value="${data.colors[0]}">Tan</option>
                         <option value="${data.colors[1]}"></option>
                         <option value="${data.colors[2]}"></option>
                         <option value="${data.colors[3]}"></option>
                     </datalist>


                    <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="0"/>
                        
                    <button type="submit" name="ajouter" id="btn_ajouter" class="fiche__produit--panier">Ajouter au panier</button>
                    </div>
                </div>
    `; 
    // // Gestion des options de couleur
// const colorOption = data.options;
// const displayChoice = [];

// // Affichage de toutes les options 

// for (dataColor = 0; dataColor < colorOption.length; dataColor++) {
//     displayChoice.innerHTML += `
//         <option value="${dataColor}">${colorOption[dataColor]}</option>
//     `;
// }
// console.log(displayChoice);
// Récupérer les données du client pour envoyer au panier
// const colorChoice = document.querySelector("#listColors");
// console.log(colorChoice);
// Sélection du formulaire
    // Choix du client dans une variable
// Sélection de la quantité
const quantitySelect = document.querySelector("#quantity");
quantitySelect.addEventListener("click", quantityStock);
console.log(quantitySelect);
function quantityStock() {
    localStorage.setItem("Quantité", document.querySelector("#quantity").value);
}
quantityStock();

// Sélection de la couleur
const colorSelect = document.querySelector("#listColors");
colorSelect.addEventListener("click", colorStock);
console.log(colorSelect);
function colorStock() {
    localStorage.setItem("Couleur", document.querySelector("#listColors").value);
}
colorStock();
// // Sélection du bouton ajouter
// const btnAjout = document.querySelector("#btn_ajouter");
// // Ecoute du bouton pour envoyer au panier
// btnAjout.addEventListener("click", ajoutPanier);
// console.log(btnAjout);
// // Récuperation des valeurs du formulaires
// // function ajoutPanier {

// // }
    });





}); 

// // for(i = 0; i < 11; i++) {
//     quantitySelect = quantitySelect + i;
// }

const quantityOption = document.querySelector("#quantity");

const btnAjout = document.querySelector("#btn_ajouter");
btnAjout.addEventListener("click", (event) => {
event.preventDefault();

const quantityChoice = quantityOption.value;
console.log(quantityChoice);

const produitPanier = {
    imageUrl: data.imageUrl,
    name: data.name,
    colors: data.colors,
    quantityOption: 0,
    price: data.price / 100
}
console.log(produitPanier);
});
