function addFe(chaine) {
  let nouvelleChaine = "";
  let voyelles = "aeiouyAEIOUY";

  for (let i = 0; i < chaine.length; i++) {
    let lettre = chaine[i];

    if (voyelles.includes(lettre)) {
      nouvelleChaine = nouvelleChaine + lettre + "fe" + lettre; // Ajoute "fe" entre les voyelles
    } else {
      nouvelleChaine = nouvelleChaine + lettre; // Ajoute simplement les consonnes
    }
  }

  return nouvelleChaine;
}

// Exemple
console.log(`Bonjour => ${addFe("Bonjour")}`); // Bofeonjofeoufeur
console.log(`Chat => ${addFe("Chat")}`); // Chafeat
console.log(`Simplon => ${addFe("Simplon")}`); // Sifeimplofeon
