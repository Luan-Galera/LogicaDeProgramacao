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
//----------------------------------------------------------------------------

/* Estourando o cartão - versão While - utilizando o navegador
1. Crie uma variável e solicite ao usuário o seu nome; 
2. Crie uma variável e solicite ao usuário o seu banco; 
3. Crie uma variável e solicite ao usuário a sua agência; 
4. Crie uma variável e solicite ao usuário o número da conta; 
5. Crie uma variável e solicite ao usuário o saldo da conta; 
6. Exiba ao usuário os dados e o saldo da conta; 
7. Efetue e exiba ao usuário 5 movimentações na conta utilizando o laço While com valores aleatórios; 
8. Exiba ao usuário novamente os dados e o saldo da conta;
*/
// var nome = prompt("Informe seu nome:");
// var banco = prompt("Informe seu banco:");
// var agencia = prompt("Informe sua agência:");
// var conta = prompt("Informe sua conta:");
// var saldo = prompt("Informe seu saldo:");
// console.log(`Nome:${nome} | Banco:${banco} | Nº Agência:${agencia} | Nº Conta:${conta} | Saldo:${saldo}`);

// var i = 1;
// var saldo = 1000;
// while (i <= 5) { //Valor aleatório entre 0 e 99.999...
//   let gasto = Math.random() * 100;
//   saldo -= gasto;
//   i++;
// }
// console.log(`Nome:${nome} | Banco:${banco} | Nº Agência:${agencia} | Nº Conta:${conta} | Saldo:${saldo.toFixed(2)}`);

// Jogo cara e coroa - melhor de três rodadas - aleatório - DO-WHILE
var i = 1;
var cara = 0;
var coroa = 0;

do {
  let face = Math.random() * 100;
  face < 50 ? console.log("Cara") : console.log("Coroa");
  face < 50 ? cara++ : coroa++;
  i++;
} while (i <= 3);

console.log("----------------------------");
console.log("           PLACAR           ");
console.log("----------------------------");
console.log(`Cara: ${cara}`);
console.log(`Coroa: ${coroa}`);
console.log("----------------------------");

/******************************************************************************************
                              Lista de Exercícios MASTER
******************************************************************************************/
/*
  Supondo que a população de um país A seja de a habitantes com uma taxa anual de crescimento de 3% e que a população de um país B seja de b habitantes, com uma taxa anual de crescimento de 1,5%, fazer um algoritmo que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas essas taxas de crescimento
*/
var a = 800000;
var b = 950000;
var anos = 0;

while (b > a) {
  anos++;
  a += a * 0.03;
  b += b * 0.015;
  console.log(`Quantos anos se passaram: ${anos}`);
  //console.log`País A: ${a.toFixed(0)} habitantes | País B: ${b.toFixed(0)} habitantes`);
  console.log(
    `País A: ${Math.round(a)} habitantes | País B: ${Math.round(b)} habitantes`);
}
console.log(
  `Para o país A ter uma população maior ou igual a do país B, serão necessários ${anos} anos!`
);

