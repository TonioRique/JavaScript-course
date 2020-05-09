// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
    nome: 'Antonio',
    sobrenome: 'Brito',
    idade: 20,
    seiCriarUmObjeto: true,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function(){
   return `${nome} ${sobrenome}`;
};
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  var cachorro = {
      raca: 'labrador',
      cor: 'preto',
      idadeEmAnos: 10,
      vendoHomem = true,
      latir(){
          if(this.vendoHomem){
          return console.log('au')
          }
      }
  }
  
  