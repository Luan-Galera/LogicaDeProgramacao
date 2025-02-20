/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

let nomepessoa = "João";
let banco = "BarDesco";
let numag = 911;
let conta = "15879-9";
let saldo = 75;

console.log(saldo);
console.log("****************", banco, "****************");
console.log(
  "Cliente:",
  nomepessoa,
  "\nAgência:",
  numag,
  "| Conta:",
  conta,
  "\nSeu saldo é de R$",
  saldo
);
console.log("----------------------------------------------");
console.log(
  "Houveram 5 movimentações recentemente:\n+ Depósito: R$",
  mv1 = 5,
  "\n- Saque: R$",
  mv2 = 2,
  "\n+ Depósito: R$",
  mv3 = 10,
  "\n- Saque: R$",
  mv4 = 5,
  "\n- Saque: R$",
  mv5 = 3
);
console.log("----------------------------------------------");
console.log("****************", banco, "****************");
console.log(
  "Cliente:",
  nomepessoa,
  "\nAgência:",
  numag,
  "| Conta:",
  conta,
  "\nSeu saldo é de R$",
  saldo + mv1 - mv2 + mv3 - mv4 - mv5
);
