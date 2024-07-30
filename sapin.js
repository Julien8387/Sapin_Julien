
// Exo indiv SAPIN le 30/07/24 Semaine de padding
// ETAPE 1.1

function afficherEtoiles(n) {
    let etoile = "";
    for (let i = 0; i < n; i++) {
      etoile += "*";
    }
    return etoile;
  }
  //console.log(afficherEtoiles(2))
  //console.log(afficherEtoiles(5))
  //______________________________________
  
  //ETAPE 1.2
  
  function afficherRectangle(hauteur, largeur) {
    let rectangle = "";
    for (let i = 0; i < hauteur; i++) {
      rectangle += afficherEtoiles(largeur) + "\n"; //\n est un retour a la ligne
    }
    return rectangle;
  }
  //console.log(afficherRectangle(5, 5));
  //______________________________________
  
  //ETAPE 1.3
  
  function afficherTriangleDroite(n) {
    let triangle_droite = ""
    for (let i = 1; i <= n; i++) { 
      triangle_droite += afficherEtoiles(i-1) + "\\"+ "\n"
    }
    console.log(triangle_droite);
  }
  // En s'inspirant de la fonction afficherRectangle(),
  // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
  
  afficherTriangleDroite(5);
  
  //______________________________________
  
  // //ETAPE 1.4 
  // function afficherTriangleGauche(n) {
  //     let triangle_g = "";
  //     for (let i = n; i >= n; i--) { 
  //       triangle_g +=  afficherEtoiles(i) +"\\" + "\n";
  //     }
  //     // let reverse = triangle_g.split('').reverse().join('') //Pour la science !
  //     // console.log(reverse);
  //     console.log(triangle_g);
  // }
      
  //     afficherTriangleGauche(5)
  
  
  //ETAPE 1.4 
  // function afficherTriangleGauche(n) {
  //     let triangle_g = "";
  //     for (let i = n; i >= 1; i--) {
  //         triangle_g +=  afficherEtoiles(i) +"\\" + "\n";
  //         }
  //         console.log(triangle_g);
  // }
  // afficherTriangleGauche(5)
  