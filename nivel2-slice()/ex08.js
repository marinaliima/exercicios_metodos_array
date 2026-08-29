//8. slice() não altera o original

let planetas = ["Marte", "Terra", "Netuno", "Júpiter", "Urano"];
let planetasNovos = planetas.slice(2, 5);

console.log("Array original:", planetas);
console.log("Array criado:", planetasNovos);