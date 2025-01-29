function augmentationPrix(prix, pourcentage) {
  const augmentation = prix * (pourcentage / 100); // Calcul l'augmentation
  const prixFinal = prix + augmentation; // Ajout de l'augmentation
  return prixFinal;
}

// Exemple
const prix = 430;
const pourcentageAugmentation = 4.9;
const prixAvecAugmentation = augmentationPrix(prix, pourcentageAugmentation);

console.log(prixAvecAugmentation.toFixed(2));
