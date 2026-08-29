//22. Desafio — Playlist

let musicas = ["Everlong", "Floods", "Twin Flames", "Love Will Tear Us Apart", "Down Under", "Kiss the Ladder", "When You Sleep", "Enjoy the Silence"];

console.log("Playlist inicial:");
console.log("Tem enjoy the silence?", musicas.includes("Enjoy the Silence") ? "Sim!" : "Não");
console.log("Sua posição é:", musicas.indexOf("Enjoy the Silence"));

let selecaoMusicas = musicas.slice(4, 8);
selecaoMusicas.splice(1, 1);
selecaoMusicas.sort();
selecaoMusicas.reverse();

console.log();
console.log("Playlist final:");
console.log(selecaoMusicas.join("\n"));