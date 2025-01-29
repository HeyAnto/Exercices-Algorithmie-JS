function calcMoyenne(notes) {
  if (notes.length === 0) {
    return 0;
  }

  let somme = 0;

  for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i]; // Ajoute chaque note à la somme
  }

  return somme / notes.length; // Retourne la moyenne
}

// Exemple
let tableau = [14, 21, 12, 18, 8];
console.log(`[${tableau}] Moyenne : ${calcMoyenne(tableau)}`);
