//19. Ordenando números

let numeros = [50, 10, 100, 5, 25, 1];
numeros.sort((a, b) => a - b);

console.log(numeros);

//Com apenas numeros.sort(), os numeros são convertidos em string, então o código não conta o número completo, e sim os primeiros algarismos.
//Ex.: 100 fica menor que 25, pois o 1 do 100 é menor que o 2 do 25.

//Por isso, é usado o ((a, b) => a - b), o JS pega o número a e b, respectivamente, e faz a subtração.
//Se der negativo, ele sabe que a ordem está correta e o a vem primeiro na ordem crescente;
//Se der positivo, ele inverte, e sabe que o b vem antes na ordem crescente.

//Ex.: a = 10, b = 4.
//numeros.sort((a, b) => a - b) → 10 - 4 = 6 → Deu positivo, então ele precisa inverter a ordem, começando do b e indo para o a para a ordem crescente.
//O resultado fica: "4, 10".