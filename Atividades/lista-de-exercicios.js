console.log("-------------------1-Calculos-------------------");
var x = 4;
var y = 2;
var z = 1;

console.log(`O resultado da soma é: ${x + y + z}`);
console.log(`O resultado da subtraçãoa é: ${x - y - z}`);
console.log(`O resultado da multiplicação é: ${x * y * z}`);
console.log(`O resultado da divisão é: ${x / y / z}`);

console.log("-------------------2-Média-------------------");

var nota1 = 7;
var nota2 = 8;
var nota3 = 9;
var media = (nota1 + nota2 + nota3) / 3;

resultado = media >= 7 ? "Aprovado" : "Reprovado";
console.log(`O aluno foi ${resultado} | Média: ${media.toFixed(1)}`);

console.log("-------------------3-Salário-------------------");
var salario = 3000;
var desconto = 0.08;
var imposto = 0.05;
var diminuicaoS = desconto + imposto;
var sl = salario - salario * diminuicaoS;

console.log(`Salário: R$${salario}`);
console.log(`Salário líquido: R$${sl}`);

console.log("-------------------4-PI-------------------");
var pi = Math.PI;
var r = 7;

console.log(
  `Circunferência: ${(2 * pi * r ** 2).toFixed(2)} | Área: ${(
    pi *
    r ** 2
  ).toFixed(2)}`
);

console.log("-------------------5-Celular-------------------");
var cell = 1500;
console.log(`Preço do celular: R$${cell}`);
console.log(
  `Com desconto, 2 unidades: ${cell - cell * 0.05} | 3 unidades: ${
    cell - cell * 0.1
  }| 4 unidades: ${cell - cell * 0.15}`
);

console.log("-------------------6-Múltiplos-------------------");
var num = 12;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("O número é múltiplo de ambos");
} else if (num % 3 === 0 && num % 5 != 0) {
  console.log("O número é múltiplo de 3");
} else if (num % 3 != 0 && num % 5 === 0) {
  console.log("O número é múltiplo de 5");
} else {
  console.log("O número não é múltiplo nem de 3 e nem de 5");
}

console.log("-------------------7-Bissexto-------------------");
var ano = 2024;

console.log(`Ano: ${ano}`);

ano % 4 === 0 && ano % 100 > 0 ? "É ano Bissexto" : "Não é ano Bissexto";

console.log("-------------------8-Dia da Semana-------------------");
var dia = 1;

switch (dia) {
  case 0:
    console.log("O dia é domingo");
    break;
  case 1:
    console.log("O dia é segunda-feira");
    break;
  case 2:
    console.log("O dia é terça-feira");
    break;
  case 3:
    console.log("O dia é quarta-feira");
    break;
  case 4:
    console.log("O dia é quinta-feira");
    break;
  case 5:
    console.log("O dia é sexta-feira");
    break;
  case 6:
    console.log("O dia é sábado");
    break;
  default:
    console.log("Dia da semana informado incorretamente");
}

console.log("-------------------9-Multa-------------------");
var vlimite = 80;
var vcarro = 95;
console.log(
  `O limite de velocidade é: ${vlimite} km/h, o motorista estava andando a ${vcarro} km/h, então a multa será de R$${
    (vcarro - vlimite) * 5
  }`
);

console.log("-------------------10-Produto-------------------");
var valor = 150;
console.log(`O valor original da compra é de: R$${valor}`);

if (valor < 50) {
  console.log(`Sua compra custou R$${valor}, portanto não há desconto`);
} else if (valor <= 100) {
  console.log(
    `Sua compra custou R$${valor - valor * 0.05}, com desconto de 5%`
  );
} else if (valor > 100) {
  console.log(
    `Sua compra custou R$${valor - valor * 0.1}, com desconto de 10%`
  );
}

console.log("-------------------11-Pares-------------------");
var numero = 0;

while (numero <= 100) {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par!`);
  }
  numero++;
}

console.log("-------------------12-Tabuada do 9-------------------");
var tabuada = 9;
var i = 1;

while (i <= 10) {
  console.log(`${tabuada} x ${i} = ${9 * i}`);
  i++;
}

console.log("-------------------13-Soma de 1 a 100-------------------");
var somar = 0;

for (let i = 1; i <= 100; i++) {
  somar += i;
}
console.log(somar);

console.log("-------------------14-Array-------------------");
var array = [3, 5, 7, 9, 11];
var somar = 0;

console.table(array);

for (let index = 0; index < array.length; index++) {
  somar += array[index];
}
console.log(`A soma dos valores é igual a ${somar}`);

console.log("-------------------15-Contador-------------------");
var contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}

console.log("-------------------16-Array dia-------------------");
var array2 = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
console.log(array2[3]);

console.log("-------------------17-Frutas-------------------");
var arrayFrutas = ["Maçã", "Banana", "Uva", "Kiwi", "Abacaxi"];
console.table(arrayFrutas);

arrayFrutas.splice(2, 1);
console.table(arrayFrutas);

console.log("-------------------18-Maiores que 10-------------------");
var array3 = [3, 5, 11, 8, 13, 15];
for (let i = 0; i < array3.length; i++) {
  array3[i] > 10 ? console.log(array3[i]) : console.log();
}

console.log("-------------------19-Maiúsculas-------------------");
var frase = "Javascript é incrível";
console.log(frase.toUpperCase());

console.log("-------------------20-Palavras-------------------");
var string = "A vida é bela e cheia de desafios";
var stringA = string.split();
var ta = string.length;
var palavras = 1;

for (let i = 0; i < ta; i++) {
  if (string[i] == " ") {
    palavras++;
  }
}
console.log(`A frase tem ${palavras} palavras`);

console.log("-------------------21-Maior Valor-------------------");
var vetor2 = [12, 45, 67, 89, 23];
console.log(`Valores do vetor: ${vetor2}`);
var ordem = vetor2.sort();
var vFinal = vetor2.length - 1;
console.log(`O maior número do vetor é ${ordem[vFinal]}`);

console.log("-------------------22-Inverter string-------------------");
var frase2 = "Desenvolvimento";
var tamanho = frase2.length;
var inverter = "";

for (let i = tamanho - 1; i >= 0; i--) {
  inverter += frase2[i];
}
console.log(inverter);

console.log("-------------------23-Letras 'a'-------------------");
var string2 = "Aprender JavaScript é maravilhoso!";
var tamanho = string2.length;
var conta = 0;

for (let i = 0; i < tamanho; i++) {
  if (string2[i] == "a" || string2[i] == "A") {
    conta++;
  }
}
console.log(`Temos ${conta} letras A`);

console.log("-------------------24-Vogais em *-------------------");
var frase3 = "Desenvolvimento Web";
var frase3z = frase3.split("");
var t = frase3.length;

for (let i = 0; i < t; i++) {
  if (
    frase3[i] == "a" ||
    frase3[i] == "e" ||
    frase3[i] == "i" ||
    frase3[i] == "o" ||
    frase3[i] == "u"
  ) {
    frase3z[i] = "*";
  }
}
frase3s = frase3z.join("");
console.log(frase3s);

console.log("-------------------25-Vetor Média-------------------");
var vetor = [9, 10, 9.5, 8.5, 7];
var calc = 0;
for (let i = 0; i < vetor.length; i++) {
  calc += vetor[i];
}
console.log(`A média do vetor ${vetor} é ${calc / vetor.length}`);
