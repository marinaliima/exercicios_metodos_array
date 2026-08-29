//20. Pesquisa de produto

let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

console.log("Tem café?", produtos.includes("Café") ? "Sim" : "Não");
console.log("Sua posição é", produtos.indexOf("Café"));

let novosProdutos = produtos.slice(2, 6)

novosProdutos.splice(novosProdutos.indexOf("Leite"), 1);

console.log();
console.log("Lista final em texto:", novosProdutos.join(", "));