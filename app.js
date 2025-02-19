//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listagemAmigos = [];


function adicionarAmigo(){
    let amigo = document.getElementById('amigo-input').value;


    if(amigo.trim() === "" ){
        alert('Por favor, insira um nome!');
    } else {
        let tituloLista = document.getElementById('listaTitulo');
        tituloLista.textContent = "Lista de amigos";
       
        listagemAmigos.push(amigo);
        addItens(amigo);
        limparCampo();
        
    }
}

function limparCampo (){
    nome = document.getElementById('amigo-input');
    nome.value = '';
}

function addItens(amigo){
    let lista = document.getElementById('listaAmigos');

    let novoItem = document.createElement("li");
    novoItem.textContent = amigo;

    lista.appendChild(novoItem);
}




function sortearAmigo(){
    let nomeResultado = document.getElementById('resultadoLista');
    nomeResultado.textContent = "Resultado:";

    let amigoSorteado = parseInt(Math.random() * listagemAmigos.length);
    
    let resultadoElemento = document.getElementById('resultado');

    let sorteado = document.createElement("li");

    sorteado.textContent = listagemAmigos[amigoSorteado];
    resultadoElemento.appendChild(sorteado);


    console.log(amigoSorteado);
}



