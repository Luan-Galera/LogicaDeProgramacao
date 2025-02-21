var i = 1;
var vitorias = 0;
var derrotas = 0;

do {
  let face = Math.random() * 100;
  face < 50 ? console.log("Cara") : console.log("Coroa");
  face < 50 ? vitorias++ : derrotas++
  i++;
} while (i <= 3);

console.log("----------------------------");
console.log("           PLACAR           ");
console.log("----------------------------");
console.log("Vitórias:", vitorias);
console.log("Derrotas:", derrotas);
console.log("----------------------------");
