function texteTronquer(chaine) {
  return chaine.length > 15 ? chaine.slice(0, 15) + "..." : chaine;
}

// Exemple
const texte = "Lorem quisque class vestibulum";

console.log(texteTronquer(texte));
