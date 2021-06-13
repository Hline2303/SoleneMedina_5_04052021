document.addEventListener("DOMContentLoaded", function () {
  const panier = document.querySelector("body.panier");
  if (!panier) return;
  console.log(panier);

  /////////// Menu navigation Orinoco ATTENTION DOIT SE REPETER SUR TT LES PAGES

  const menuHover = document.querySelector("#accueilNav");
  const clicHomepage = document.querySelector("#accueilNav");
  const panierHover = document.querySelector("#panierNav");
  const openPanier = document.querySelector("#panierNav");

  // p2.addEventListener('click', changeTexte);
  menuHover.addEventListener("mouseover", changeTexte1);
  menuHover.addEventListener("mouseout", changeTexte2);

  // p2.addEventListener('click', ouvreHomepage);
  clicHomepage.addEventListener("click", ouvreHomepage);

  // p2.addEventListener('click', changeTexte);
  panierHover.addEventListener("mouseover", changeTexte1);
  panierHover.addEventListener("mouseout", changeTexte2);

  openPanier.addEventListener("click", panierWindow);

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

  // function ouvreHomepage() 
  function ouvreHomepage() {
    window.location.href = "http://127.0.0.1:5500/front-end/index.html";
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

  function panierWindow() {
    window.location.href = "http://127.0.0.1:5500/front-end/pages/panier.html";
  }

   // Contenu du localStorage
   let contentLocalStorage = JSON.parse(localStorage.getItem("article"));
   console.log(contentLocalStorage);

   const fillCart = document.querySelector("#bodyCart");
   console.log(fillCart);

   

   if(contentLocalStorage === null) {
     const emptyCart = `
     <td>Votre panier est vide</td>
     `;
     fillCart.innerHTML = emptyCart;

   } else {
     
   }
});

/////////////////////////////////
// else {
//   let articles = contentLocalStorage;
//  //  let articles = [];
//  //  console.log(articles);
  
//   articles.forEach(function(article,index, array) {
//      // console.log(array[index].nom);
//      // console.log(array);
//      articles = articles + `
//      <tr class="listeProduits" id="listeProduits">
//      <td><img src=${article[index].image} class="liste__img"></td>
//      <td class="liste__produits"><h2>${article[index].nom}</h2></td>
//      <td>
//        <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="0"/>
//      </td>
//      <td class="liste__produits">${article[index].prix}€</td>
//      <td>${article[index].price}/100€</td>
//      </tr> `
//    ;
   
//    fillCart.innerHTML = articles;
//   })
//     }
////////////////////////////////

//        let articles = contentLocalStorage;
//        console.log(articles);
       
//        articles.forEach(function(article,index, array) {
//           // console.log(array[index].nom);
//           console.log(array[index]);
//           articles = articles + backstich
//           <tr class="listeProduits" id="listeProduits">
//           <td><img src=${article.imageUrl} class="liste__img"></td>
//           <td class="liste__produits"><h2>${article.name}</h2></td>
//           <td>
//             <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="0"/>
//           </td>
//           <td class="liste__produits">${article.price}€</td>
//           <td>${article.price}/100€</td>
//           </tr> backstitch
// ;
      // function displayProduitsByKey() {
      //   var typeofkey = null;
      //   for (var key in localStorage) {
      //     typeofkey = (typeof localStorage[key]);
      //     console.log(key, typeofKey);
      //   }
      // }
      // displayProduitsByKey(); 

// Placement des objets dans un array
  
//    const produits = [];
//    console.log(produits);
// for(i = 0; i < contentLocalStorage.length; i++) {
// produits = produits + backstitch
// <tr class="listeProduits" id="listeProduits">
// <td><img src=${contentLocalStorage.imageUrl} class="liste__img"></td>
// <td class="liste__produits"><h2>${contentLocalStorage.name}</h2></td>
// <td>
//   <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="0"/>
// </td>
// <td class="liste__produits">${contentLocalStorage.price}€</td>
// <td>${contentLocalStorage.price}/100€</td>
// </tr> backstitch
// ;
  // const quantityLocalStorage = JSON.parse(localStorage.getItem("Quantité"));
  // console.log(quantityLocalStorage);
  // const choixProduit = {
  //   image: data.imageUrl,
  //   nom: data.name,
  //   quantité: 1,
  //   prix: data.price / 100
  // }
  // console.log(choixProduit);

//   contentLocalStorage.forEach(function(imageUrl, name, price, qty){
//     contentLocalStorage.push(contenuPanier);// Contenu LocalStorage à modifier
//     contenuPanier();
//   });
//   let totalPanier = contenuPanier.reduce((total,produit) => {
//     console.log(`Prix = ${produit.price} Quantité = ${produit.qt}`);
//     console.log(`Total ${total}`);
//     console.log("------------");
//     return total + (produit.prix * produit.qt);
// },0); // Valeur initiale de total
// console.log(`Total panier ${totalPanier}`);

//   function groupByKey(array, key) {
//     return array
//       .reduce((hash, obj) => {
//         if(obj[key] === undefined) return hash; 
//         return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
//       }, {})
//  }
//  console.log(groupByKey(peluches, "name"));

//  const produitPanier = JSON.parse(localStorage.getItem("produit"));
//  console.log(produitPanier);

// contenuPanier.forEach((array) => {
//   peluches.push();
//   localStorage.setItem("produit", JSON.stringify(produit));
//   console.log(array);

//  function groupByName(array, key) {
//   return array
//     .reduce((hash, obj) => {
//       if(obj[key] === undefined) return hash; 
//       return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
//     }, {})
// }
//  var cars = [{'make':'audi','model':'r8','year':'2012'},{'make':'audi','model':'rs5','year':'2013'},{'make':'ford','model':'mustang','year':'2012'},{'make':'ford','model':'fusion','year':'2015'},{'make':'kia','model':'optima','year':'2012'}];
//  console.log(cars);
//  console.log(groupById(cars, 'make'))
  // // Récupérer stockage du local storage
  // const produitRecup = localStorage.getItem("Image");
  // const referenceRecup = localStorage.getItem("Name");
  // const quantityRecup = localStorage.getItem("Quantité");
  // const prixRecup = localStorage.getItem("Prix");
  // const montantTotal = localStorage.getItem("Montant");

  // function stockageRecup() {
  //   produitRecup;
  //   referenceRecup;
  // }
  // // Calculer le montant du panier
  // function result() {
  //   result.value = quantityRecup.value * prixRecup.value;
  //   // for (i = 0; i < 1; i++) {
  //   //   montantTotal.value = parseFloat(result);
  //   // }
  // }
  // stockageRecup();
  // result();

  // Empêcher le formulaire d'être soumis
  // const formClient = document.querySelector("#validFormClient");
  // const nameClient = document.querySelector("#nomClient");
  // let surnameClient = document.querySelector("#prenomClient");
  // let adressClient = document.querySelector("#adresseClient");
  // let codePostal = document.querySelector("#codePostalClient");
  // let cityClient = document.querySelector("#villeClient");
  // let emailClient = document.querySelector("#mailClient");

  // if(!nameClient.test(/^([A-Z])$/)) 
  // alert("Votre nom doit être en majuscules et contenir 3 lettres minimum !");

  // if(!surnameClient.match(/^([A-Z][a-z])$/))
  // alert("Votre prénom doit commencé par une majuscule et contenir 3 lettres minimum !");

  // if(!adressClient.match(/^([A-Z][a-z])$/))
  // alert("Votre adresse doit contenir 5 lettres minimum !");

  // if(!codePostal.match(/^([0-9]){5}$/))
  // alert("Votre code postal doit contenir 5 chiffres !");

  // if(!cityClient.match(/^([A-Z])$/))
  // alert("Votre ville doit être en majuscules et contenir 3 lettres minimum !");

  // if(!emailClient.match(/^([a-z][-_.])$/))
  // alert("Votre email doit être en minuscules, contenir @ et un nom de domaine !");

  // //////////////
  // Faire un if si validation formulaire ok 
  // Alors envoyer le formulaire
  // /////////////
  
  // formClient.addEventListener("click", function () {
  //   // Stocker la quantité dans le local Storage
  //   localStorage.setItem("Nom", document.querySelector("#nomClient").value);
  //   localStorage.setItem("Prénom", document.querySelector("#prenomClient").value);
  //   // orderDisplayCheck("http://127.0.0.1:5500/front-end/pages/panier.html");
  //   window.location.href="http://127.0.0.1:5500/front-end/pages/confirmation.html";
  // });
  // formClient();
  // console.log(formClient);
  
  // function envoiForm() {
  // localStorage.setItem("Nom", nomClient.value);
  // localStorage.setItem("Prénom", document.querySelector("#prenomClient").value);
  // };
  // envoiForm();
  // localStorage.setItem("Montant", document.querySelector("#result").value);

  // // Création d'un objet avec le constructeur
  // function Produits(produit, couleur, prix) {
  //     this.produit = produit;
  //     this.couleur = couleur;
  //     this.prix = prix;
  // }

  // //Création d'une instance pour 5 objets
  // const produit1 = new Produits('../images/Fenton', 'Brun', 25);
  // const produit2 = new Produits('../images/Fenton', 'Beige', 25);
  // const produit3 = new Produits('../images/Rowen', 'Brun', 35);
  // const produit4 = new Produits('../images/Rowen', 'Beige', 35);
  // const produit5 = new Produits('../images/Teddy', 'Brun', 20);
  // const produit6 = new Produits('../images/Teddy', 'Beige', 20);
  // const produit7 = new Produits('../images/Smokey', 'Brun', 9);
  // const produit8 = new Produits('../images/Smokey', 'Beige', 9);
  // const produit9 = new Produits('../images/Oscar et Poupy', 'Brun', 40);
  // const produit10 = new Produits('../images/Oscar et Poupy', 'Beige', 40);

  // console.log(produit1.produit);

//   // Placement des objets dans un array
//   const produits = [];

//   for(i = 0; i < contentLocalStorage.length; i++) {
//     produits = produits + `
//     <tr class="listeProduits" id="listeProduits">
//     <td><img src=${prod.produit} class="liste__img"></td>
//     <td class="liste__produits"><h2>${prod.name}</h2></td>
//     <td>
//       <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="0"/>
//     </td>
//     <td class="liste__produits">${prod.price}€</td>
//     <td>${prod.price}/100€</td>
// </tr>
//     `
//   }
  // // En ajoutant ces objets avec push
  // produits.push(produit1,produit2,produit3,produit4,produit5,produit6,produit7,produit8,produit9,produit10);

  // /* Faire afficher les produits dans la produitList en utilisant la fonction tableList
  // en allant récupérer les éléments qui se trouvent dans l'array pour afficher les objets
  // dans une page HTML */
  // function tableList() {
  //     let listOfProducts = ''; // Contient tous les produits

      // // Itérer la liste de produits pour récupérer chaque produit et leurs données
      // produits.forEach(prod =>
      //     listOfProduits.innerHTML += `
          // <tr class="listeProduits" id="listeProduits">
          //     <td><img src=${prod.produit} class="liste__img"></td>
          //     <td class="liste__produits"><h2>${prod.name}</h2></td>
          //     <td>
          //       <input type="number" min="0" max="10" step="1" id="quantity" name="quantity" value="0"/>
          //     </td>
          //     <td class="liste__produits">${prod.price}€</td>
          //     <td>${prod.price}/100€</td>
          // </tr>
      //     `
      // )
  //     document.getElementById("productList").innerHTML = listOfProducts;
  // const ajoutProduit = document.querySelector("#listeProduits");

  // for (const i = 0; i < ajoutProduit.length; i++) {
  //     ajoutProduit[i].addEventListener("click", () => {
  //         quantityPanier();
  //     })
  // }

  // function quantityPanier() {
  //     const quantityProduit = localStorage.getItem("quantitiesPanier");
  //     quantityProduit = parseInt(quantityProduit);
  //     if(quantityProduit) {
  //         localStorage.setItem("quantitiesPanier", quantityProduit + 1);
  //     } else {
  //         localStorage.setItem("quantitiesPanier", 1);
  //     }
  // }

  // // Validation du formulaire

  // // Envoi du formulaire
  // const envoiForm = document.querySelector("#validForm");
  // console.log(envoiForm);
  // // Stocker les données dans le localStorage
  // envoiForm.addEventListener("click", stockForm);
  // console.log(envoiForm);
  // function stockForm() {
  // localStorage.setItem("Nom", document.querySelector("#nom").value);
  // localStorage.setItem("Prénom", document.querySelector("#prenom").value);
  // localStorage.setItem("Adresse", document.querySelector("#adresse").value);
  // localStorage.setItem("Code Postal", document.querySelector("#codePostal").value);
  // localStorage.setItem("Ville", document.querySelector("#ville").value);
  // localStorage.setItem("E-mail", document.querySelector("#mail").value);
  // };
  // stockForm();
  // }
  // // const recupForm = document.querySelector(stockForm);
  // // console.log(recupForm);
  // document.querySelector("#nom").innerHTML = localStorage.getItem("Nom");
  // document.querySelector("#prenom").innerHTML = localStorage.getItem("Prénom");
  // document.querySelector("#adresse").innerHTML = localStorage.getItem("Adresse");
  // document.querySelector("#codePostal").innerHTML = localStorage.getItem("Code Postal");
  // document.querySelector("#ville").innerHTML = localStorage.getItem("Ville");
  // document.querySelector("#mail").innerHTML = localStorage.getItem("E-mail");

  // // Calcul du panier
  // // quantité * prix TTC = Net à payer
  // // Net à payer = result

