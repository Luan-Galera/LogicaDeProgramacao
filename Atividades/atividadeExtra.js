/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------


*/


// var num = 3;
// var par_impar = num % 2;
// if (par_impar == 0) {
//   console.log("O número", num, "é par");
// } else {
//   console.log("O número", num, "é impar");
// }

const parimpar = (num) => {
  return num % 2 == 0 ? "O número é par!" : "O número é impar!";
};
console.log(parimpar(10));
console.log(parimpar(3));
console.log(parimpar(2));

console.log("------------------------------------------------------------");
var tabuada = 3;
console.log(tabuada, "x", 1, "=", tabuada * 1);
console.log(tabuada, "x", 2, "=", tabuada * 2);
console.log(tabuada, "x", 3, "=", tabuada * 3);
console.log(tabuada, "x", 4, "=", tabuada * 4);
console.log(tabuada, "x", 5, "=", tabuada * 5);
console.log(tabuada, "x", 6, "=", tabuada * 6);
console.log(tabuada, "x", 7, "=", tabuada * 7);
console.log(tabuada, "x", 8, "=", tabuada * 8);
console.log(tabuada, "x", 9, "=", tabuada * 9);
console.log(tabuada, "x", 10, "=", tabuada * 10);

console.log("------------------------------------------------------------");
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

console.log("------------------------------------------------------------");
let numeros = [10, 20, 30, 40];
let soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log("A soma dos numeros é igual a", soma);

console.log("------------------------------------------------------------");
var vetor = [8, 3, 5, 1, 9];
console.log(vetor);
console.log(vetor.sort());
