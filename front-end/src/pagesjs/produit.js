document.addEventListener("DOMContentLoaded", function() {
    const produit = document.querySelector("body.produit");
        if(!produit)return;

    console.log(produit);

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
const idExtraction = window.location.search;
console.log(idExtraction);
// const myUrl = new URL("http://127.0.0.1:5500/front-end/pages/produit.html");
// console.log(myUrl);


// const urlActuelle = window.location.search;
// console.log(urlActuelle);

// Extraction de l'id
const params = new URLSearchParams(idExtraction);
console.log(params);
const idProduit = params.get("id");
console.log(idProduit);

// // Affichage du produit 
fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
.then((response) => response.json()) // Convertir en json
.then((data) => { // Récupération de la réponse et affichage des produits 
    const fiche = document.querySelector("section.fiche");
    console.log(fiche);

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
                         <p>${data.price}€</p>
                     </div>
                 </div>

                 <div class="fiche__produit--selection">
                     <input type="text" id="colorNorbert" name="color" list="listeNorbert" > 
                     <datalist id="listeNorbert">
                         <option>${data.colors[0]}</option>
                         <option>${data.colors[1]}</option>
                         <option>${data.colors[2]}</option>
                         <option>${data.colors[3]}</option>
                     </datalist>


                        <input type="number" min="0" max="10" step="1" id="quantity" name="quantity"/>

                        <button type="submit" name="ajouter" id="btn_ajouter" class="fiche__produit--panier">Ajouter au panier</button>
                    </div>
                </div>
    `   
});

});