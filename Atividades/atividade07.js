/******************************************************************************************
                                Lista de Exercícios 07
******************************************************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que exiba ao usuário os elementos da sua diagonal principal com laço FOR.

|   3   5   8   |
|   1   9   2   |
|   7   1   4   |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[0].length; c++) {
    // l == c && console.log(matriz[l][c]);
    if (l == c) {
      console.log(matriz[l][c]);
    }
  }
}

/*
Dada a matriz abaixo, faça um programa em JavaScript
que exiba ao usuário os elementos por um valor x e exiba ao usuário a matriz antes e após a multiplicação.
|   3   5   8   |
|   1   9   2   |
|   7   1   4   |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.log("Números da matriz antes da multiplicação:");
console.table(matriz);
var x = 4;

for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[0].length; c++) {
    matriz[l][c] *= x;
  }
}
console.log("Números da matriz depois da multiplicação:");
console.table(matriz);

// Faça um loop FOR onde apresente os números ímpares de 0 a 100;
//Não pode ser resolvido com conta ou resto de divisão
console.log("Números impares de 0 a 100");
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
console.log("Números pares de 0 a 100");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
