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
    if (l == c) {
      console.log(matriz[l][c]);
    }
  }
}
