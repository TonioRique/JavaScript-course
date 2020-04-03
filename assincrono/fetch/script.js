const doc = fetch ('https://viacep.com.br/ws/13310132/json');

doc
.then(r =>  r.json())
.then(body => {
    console.log(body.bairro)
const conteudo = document.querySelector('.conteudo');
conteudo.innerText = body.logradouro;
})
