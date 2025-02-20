/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
1. Realize as seguintes instruções:
// - Crie uma variável texto e armazene o nome de uma pessoa
// - Crie uma variável numérica e armazene o ano de nascimento
// - Escreva "Nome da pessoa" nasceu em "ano de nascimento"
// - Calcule a idade da pessoa
// - Escreva "Nome da pessoa" tem "idade" anos 

2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  

3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume? 

4. Se temos uma equação 2x² + 3x -1, qual seria o valor de delta? 

5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?

6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h. 
Calcule a distância percorrida, sabendo que Vmedia = S/T
*/
var nome = "Paulo";
var anoN = 2001;
console.log(nome,"nasceu em",anoN);
var idade = 2025 - anoN;
console.log(nome,"tem",idade,"anos");

console.log("-----------------------------------------")
var base = 12;
var altura = 6;
var area = base * altura
console.log("A área do retângulo de base",base,"e altura",altura,"é:",area);

var profundidade = 5;
var volume = area * profundidade;
console.log("O volume do retângulo é:", volume);

console.log("-----------------------------------------")
var a = 2;
var b = 3;
var c = -1;
var delta = b**2 - 4 * a * c;
console.log("O valor de delta é:",delta);

console.log("-----------------------------------------")
var compra = 450;
var desconto = 3/100;
var vD = compra*desconto;
var vC = compra-vD;
console.log("Valor da compra foi: R$",compra);
console.log("O desconto foi de: R$",vD);
console.log("o valor total compra foi: R$",vC)

console.log("-----------------------------------------")
var vM = 95;
var t = 3.5;
var s = vM * t;
console.log("A distância percorrida é de",s,"Km");
