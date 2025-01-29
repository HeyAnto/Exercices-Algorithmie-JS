function reverseChaine(chaine) {
  return chaine.split("").reverse().join("").toLowerCase();
}

// Exemple
console.log(`Bonjour => ${reverseChaine("Bonjour")}`); // ruojnob
console.log(`Antonin => ${reverseChaine("Antonin")}`); // ninotna
console.log(`Simplon => ${reverseChaine("Simplon")}`); // nolpmis
