// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }
  // as variaveis estão dentro de um escopo de bloco, ou seja, não é possivel visualizar elas fora do escopo

  // Como corrigir o erro abaixo?
  let dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);
     // O que fazer para total retornar 500?
   const numero = 50;
  
   for(let numero = 0; numero < 10; numero++) {
     console.log(numero);
   }
  
   const total = 10 * numero;
   console.log(total);
  