//-------------------------------------------OBJETOS EM JAVASCRIPT-------------------------------------------

//Definindo uma classe em javascript (Pessoa)
//1.Classe (O molde dos objetos) - singular
// class Pessoa { // Criamos uma classe chamada Pessoa (o molde)
//   constructor(pNome, pIdade) { // O constructor é como um formulário
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
// }

//2.Objeto: Criando um personagem/aluno
//var aluno1 = new Pessoa("Lucas", 22); //criamos um aluno Lucas com 22 anos
//aluno1 é um objeto baseado no molde Pessoa

//3. Métodos - Ações que um objeto pode fazer

class Pessoa {
  //Criamos uma classe chamada Pessoa (o molde)
  constructor(pNome, pIdade) {
    // O constructor é como um formulário
    this.nome = pNome;
    this.idade = pIdade;
  }
  apresentarSe() {
    console.log(`Oi meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
  }
  envelhecer() {
    this.idade++;
  }
}

var aluno1 = new Pessoa("Lucas", 22);
aluno1.apresentarSe(); //Oi meu nome é Lucas, e eu tenho 22 anos
aluno1.envelhecer();
aluno1.apresentarSe();

// Class: Molde para criar objetos, como uma ficha de aluno ou um modelo de jogador de futebol

// Objeto: Uma instancia real do modelo, como Lucas ou Neymar.

// Atributo: Características do objeto, como nome e idade.

// Métodos: Ações que o objeto pode fazer, como falar sua idade ou envelhecer.

//----------------------------------------------------------------------------------//
//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//o objeto criado com base no jogador de futebol poderá apresentar-se
//da seguinte forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na posição "Atacante"
//Crie 3 objetos e faça com que eles se apresentem

console.log(
  "------------------------------------------------------------------"
);

class Jogador {
  constructor(jNome, jIdade, jPosicao) {
    this.nome = jNome;
    this.idade = jIdade;
    this.posicao = jPosicao;
  }
  apresentacao() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e jogo na posição ${this.posicao}.`
    );
  }
}
var jogador1 = new Jogador("Neymar", 33, "Atacante");
var jogador2 = new Jogador("Cleber", 25, "Goleiro");
var jogador3 = new Jogador("Sérgio", 38, "Zagueiro");

jogador1.apresentacao();
jogador2.apresentacao();
jogador3.apresentacao();

//----------------------------------------------------------------------------------
//Criando um Retângulo
console.log(
  "------------------------------------------------------------------"
);
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

var ret = new Retangulo(10, 15);
console.table(ret);

// Apresentando valores (atributos) do objeto instanciado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

// Apresentando a área
console.log(`Área: ${ret.obterArea()}`);

// Alterando o comprimento do retângulo
ret.alterarComprimento(20);
console.table(ret);

// Alterando a largura do retângulo
ret.alterarLargura(30);
console.table(ret);

// Calculando a área
console.log(`Área: ${ret.obterArea()}`);

console.log("----------------------------------------------------------")

/*********************************************************************** 
                            Lista de Exercícios
 ***********************************************************************/
/*
Crie e utilize uma classe "Sorvete" contendo as propriedades: sabor, preço e tamanho (P / M/ G)
*/
// Crie um sorvete de chocolate pequeno.
// Crie um sorvete de morango grande
// Crie um sorvete de pistache médio.
// Altere o preço do sorvete de morango grande para R$ 10,51.
// Altere o tamanho do sorvete do sorvete de pistache médio para grande.
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
}
var sorvete1 = new Sorvete("Chocolate", 4.00, "P");
var sorvete2 = new Sorvete("Morango", 5.50, "G");
var sorvete3 = new Sorvete("Pistache", 6.25, "M");

console.log(`Sorvete escolhido: ${sorvete1.sabor} | Valor: R$${sorvete1.preco}`);

sorvete2.preco = 10.51;
console.table(sorvete2);

sorvete3.tamanho = "G";
console.table(sorvete3);
