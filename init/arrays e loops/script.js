// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (i = 0; i < copas.length; i++){
    console.log(`o brasil ganhou a copa de ${copas[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (i = 0; i <=2 ;i++){

    console.log(frutas[i]);
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let fruta2 = frutas.pop