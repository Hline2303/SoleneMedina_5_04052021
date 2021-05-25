document.addEventListener("DOMContentLoaded", function() {
    const confirmation = document.querySelector("body.confirmation");
        if(!confirmation)return;
        console.log(confirmation);
    
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

    // Stocker les saisies dans le localStorage
    document.querySelector("#nom").innerHTML = localStorage.getItem("Nom");
    document.querySelector("#prenom").innerHTML = localStorage.getItem("Prénom");
    
});