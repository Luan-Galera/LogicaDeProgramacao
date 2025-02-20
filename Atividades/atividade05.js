/******************************************************************************************
                                Lista de Exercícios 05
******************************************************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e a retorne sua idade.
// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L.

function nascimento(dataAtual, dataNascimento) {
  return nascimento = dataAtual - dataNascimento;
}
console.log("A pessoa tem", nascimento(2025, 2001), "anos");

console.log("-------------------------------------------");
const combustivel = (litros) => {
  return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("Carro 1:", car1, "->", combustivel(car1), "kms.");
console.log("Carro 2:", car2, "->", combustivel(car2), "kms.");
console.log("Carro 3:", car3, "->", combustivel(car3), "kms.");
