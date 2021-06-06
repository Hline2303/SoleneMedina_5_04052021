document.addEventListener("DOMContentLoaded", function() {
    const panier = document.querySelector("body.panier");
        if(!panier)return;
        console.log(panier);

/////////// Menu navigation Orinoco ATTENTION DOIT SE REPETER SUR TT LES PAGES


const menuHover = document.querySelector('#accueilNav');
const clicHomepage = document.querySelector('#accueilNav');
const panierHover = document.querySelector('#panierNav');
const openPanier = document.querySelector("#panierNav");


// p2.addEventListener('click', changeTexte);
menuHover.addEventListener('mouseover', changeTexte1);
menuHover.addEventListener('mouseout', changeTexte2);

// p2.addEventListener('click', ouvreHomepage);
clicHomepage.addEventListener('click', ouvreHomepage);

// p2.addEventListener('click', changeTexte);
panierHover.addEventListener('mouseover', changeTexte1);
panierHover.addEventListener('mouseout', changeTexte2);

openPanier.addEventListener('click', panierWindow);


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

// function ouvreHomepage() {
function ouvreHomepage() {
window.location.href="http://127.0.0.1:5500/front-end/index.html";
}

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

function panierWindow () {
window.location.href="http://127.0.0.1:5500/front-end/pages/panier.html";
}

// Création d'un objet avec le constructeur
function Produits(produit, couleur, prix) {
    this.produit = produit;
    this.couleur = couleur;
    this.prix = prix;  
}

//Création d'une instance pour 5 objets
const produit1 = new Produits('../images/Fenton', 'Brun', 25);
const produit2 = new Produits('../images/Fenton', 'Beige', 25);
const produit3 = new Produits('../images/Rowen', 'Brun', 35);
const produit4 = new Produits('../images/Rowen', 'Beige', 35);
const produit5 = new Produits('../images/Teddy', 'Brun', 20);
const produit6 = new Produits('../images/Teddy', 'Beige', 20);
const produit7 = new Produits('../images/Smokey', 'Brun', 9);
const produit8 = new Produits('../images/Smokey', 'Beige', 9);
const produit9 = new Produits('../images/Oscar et Poupy', 'Brun', 40);
const produit10 = new Produits('../images/Oscar et Poupy', 'Beige', 40);

console.log(produit1.produit);

// Placement des objets dans un array
let produits = [];
// En ajoutant ces objets avec push
produits.push(produit1,produit2,produit3,produit4,produit5,produit6,produit7,produit8,produit9,produit10);

/* Faire afficher les produits dans la produitList en utilisant la fonction tableList 
en allant récupérer les éléments qui se trouvent dans l'array pour afficher les objets
dans une page HTML */
function tableList() {
    let listOfProducts = ''; // Contient tous les produits

    // Itérer la liste de produits pour récupérer chaque produit et leurs données
    produits.forEach(prod =>
        listOfProduits += `
        <tr class="listeProuits" id="listeProduits">
            <td><img src=${prod.produit} class="liste__img"></td>
            <td class="liste__produits"><h2>${prod.name}</h2></td>
            <td>

            </td>
            <td class="liste__produits">${prod.price}€</td>
            <td>${prod.price}€</td>
        </tr>
        `
    )
    document.getElementById("productList").innerHTML = listOfProducts;
const ajoutProduit = document.querySelector("#listeProduits");

for (const i = 0; i < ajoutProduit.length; i++) {
    ajoutProduit[i].addEventListener("click", () => {
        quantityPanier();
    })
}

function quantityPanier() {
    const quantityProduit = localStorage.getItem("quantitiesPanier");
    quantityProduit = parseInt(quantityProduit);
    if(quantityProduit) {
        localStorage.setItem("quantitiesPanier", quantityProduit + 1);
    } else {
        localStorage.setItem("quantitiesPanier", 1);
    }
}

// Validation du formulaire 


// Envoi du formulaire
const envoiForm = document.querySelector("#validForm");
console.log(envoiForm);
// Stocker les données dans le localStorage
envoiForm.addEventListener("click", stockForm);
console.log(envoiForm);
function stockForm() {
localStorage.setItem("Nom", document.querySelector("#nom").value);
localStorage.setItem("Prénom", document.querySelector("#prenom").value);
localStorage.setItem("Adresse", document.querySelector("#adresse").value);
localStorage.setItem("Code Postal", document.querySelector("#codePostal").value);
localStorage.setItem("Ville", document.querySelector("#ville").value);
localStorage.setItem("E-mail", document.querySelector("#mail").value);
};
stockForm();
}
// const recupForm = document.querySelector(stockForm);
// console.log(recupForm);
document.querySelector("#nom").innerHTML = localStorage.getItem("Nom");
document.querySelector("#prenom").innerHTML = localStorage.getItem("Prénom");
document.querySelector("#adresse").innerHTML = localStorage.getItem("Adresse");
document.querySelector("#codePostal").innerHTML = localStorage.getItem("Code Postal");
document.querySelector("#ville").innerHTML = localStorage.getItem("Ville");
document.querySelector("#mail").innerHTML = localStorage.getItem("E-mail");

// Calcul du panier
// quantité * prix TTC = Net à payer
// Net à payer = result

});



