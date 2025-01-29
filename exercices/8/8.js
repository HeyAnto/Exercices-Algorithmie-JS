function checkPassword(password) {
  return password.length >= 9 && password.includes("@");
}

// Exemple
console.log(`anto1234 : ${checkPassword("anto1234")}`); // Faux
console.log(`antonin63@sio8 : ${checkPassword("antonin63@sio8")}`); // Vrai
console.log(`anto@63 : ${checkPassword("anto@63")}`); // Faux
