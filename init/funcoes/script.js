// Crie uma função para verificar se um valor é Truthy
function verificar (valor){
    if (valor){
        
       return console.log('Truthy')
    } else{
       return console.log('Falsie')
    }
}
verificar(0);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
    return console.log(lado * 4);
}
perimetro(3);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
 
    return console.log(`${nome} ${sobrenome}`)
}
nomeCompleto('Antonio', 'Brito');
// Crie uma função que verifica se um número é par
function verifica (numero){
    if(numero % 2 === 0){
        return console.log('É par')
    }else{
        return console.log('É impar')
    }
}
verifica(2);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado){
    return console.log(typeof(dado));
}
tipoDado();
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log("Antonio Henrique");
});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
   