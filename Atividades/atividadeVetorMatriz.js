/******************************************************************************************
                            Exercícios Vetor Matriz
******************************************************************************************/
// Crie um vetor que receberá dados de um usuário.
var dados = [];
console.log("Favor informar seu nome:");
dados.push("Luan");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("123.456.789-09")

console.table(dados);

// Mostre ao usuário os dados e de um bom dia!
console.log("Bom dia",dados[0],"seu CPF é", dados[1]);
