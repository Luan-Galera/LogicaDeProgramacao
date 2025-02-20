// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho", idade, "anos");
idade = idade + 1; // idade++
console.log("Meu nome é", nome, ", e agora eu tenho", idade, "anos");
console.log("------------------------------------------------");

//JavaScript trabalha com sistema case sensitive (maiúscula são diferentes de minúsculas)
console.log("Criando uma váriavel Teste e tentando acessar como testE.");
let Teste = "Variável teste!";
//console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR IDENTIFICADORES(VARIAVEIS)
//Podem iniciar com 'A'-'Z', 'a'-'z', '_' ou '$'
let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaconstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//Variáveis lógicas (boolean)
var nome = "Luan";
var rico = false;
var preguicoso = true;
console.log("Nome:",nome,"| É preguiçoso?",preguicoso,"| É rico?", rico);
