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
    window.location.href="https://hline2303.github.io/SoleneMedina_2_07012021/";
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
window.location.href="https://hline2303.github.io/SoleneMedina_2_07012021/";
}


    fetch("http://localhost:3000/api/teddies")
    .then((response) => response.json())
    .then((dataProd) => {
        const ficheProduit = document.querySelector("section.fiche");
        console.log(dataProd);

        dataProd.forEach((fiche) => { /* Possibilité if concernant les couleurs pour certains produits + tableau affichage pb */
            ficheProduit.innerHTML +=
            `
            <div class="fiche__produit">
                <div class="fiche__produit--img"><img src="${fiche.imageUrl}" class="ficheImage"></div>
                

                <div class="fiche__produit--content">
                    <div class="fiche__produit--global">
                        <div class="fiche__produit--description"> 
                            <h2>${fiche.name}</h2>

                            <p>${fiche.description}</p>

                            <p class="fiche__produit--stock">En stock</p>
                        </div>
                        
                        <div class="fiche__produit--price">
                            <p>${fiche.price}€</p>
                        </div>
                    </div>

                    <div class="fiche__produit--selection">
                        <input type="text" id="colorNorbert" name="color" list="listeNorbert" > 
                        <datalist id="listeNorbert">
                            <option>${fiche.colors[0, 1, 2, 3, 4]}</option>
                            <option>${fiche.colors[0, 1, 2, 3, 4]}</option>
                            <option>${fiche.colors[0, 1, 2, 3, 4]}</option>
                            <option>${fiche.colors[0, 1, 2, 3, 4]}</option>
                        </datalist>

                        <input type="number" min="0" max="10" step="1" id="quantity" name="quantity"/>

                        <button class="fiche__produit--panier">Ajouter au panier</button>
                    </div>
                </div>
            </div>
            `
        })
    });    
});