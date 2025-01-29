function etatEau(temperature) {
  if (temperature <= 0) {
    return "Solide"; // Inférieure ou égale à 0°C
  } else if (temperature <= 100) {
    return "Liquide"; // Entre 0°C et 100°C
  } else {
    return "Gaz"; // Supérieur à 100°C
  }
}

// Exemple
console.log(`Température de -8°C : ${etatEau(-8)}`);
console.log(`Température de 14°C : ${etatEau(14)}`);
console.log(`Température de 110°C : ${etatEau(110)}`);
