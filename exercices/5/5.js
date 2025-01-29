function suprDoublons(tableau) {
  let unique = [];

  for (let i = 0; i < tableau.length; i++) {
    if (!unique.includes(tableau[i])) {
      unique.push(tableau[i]); // Ajoute l'élément s'il n'est pas déjà présent
    }
  }

  return unique;
}

// Exemple
const tableau = [1, 2, 3, 3, 3, 4, 5, 5];
const resultat = suprDoublons(tableau);

console.log(resultat);
