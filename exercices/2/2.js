function calcTTC(prixHT, quantite) {
  const tauxTVA = 0.2; // TVA 20%
  const totalHT = prixHT * quantite; // Total HT
  const totalTTC = totalHT * (1 + tauxTVA); // Total TTC
  return totalTTC;
}

// Exemple
const prixHT = 19.99;
const produits = 14;

const totalTTC = calcTTC(prixHT, produits);
console.log(`Total TTC : ${totalTTC.toFixed(2)} €`);
