//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let lista = document.getElementById("listaAmigos")




function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById('amigo').value;
  
    if (validaInput(nomeDoAmigo)) {
      listaDeAmigos.push(nomeDoAmigo);
      adicionarALista();
      limparInput();
    }
  }


  function validaInput(valor) {
    if (valor === "") {
      alert("Por favor, digite um nome");
      return false;
    } else if (listaDeAmigos.includes(valor)) {
      alert("Seu amigo já se encontra na lista");
      return false;
    }
    return true;
  }

  function adicionarALista() {
    console.log(listaDeAmigos)
    lista.innerHTML = ""; 
    listaDeAmigos.forEach(amigo => {
      const item_lista = document.createElement("li");
      item_lista.textContent = amigo;
      lista.appendChild(item_lista);
    });
  }

  function limparInput() {
    document.getElementById('amigo').value = '';
  }

  function sortearAmigo(){
    if (listaDeAmigos.length == 0){
        alert("Adicione ao menos UM amigo");
        return;
    }else{
        const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        resultado.innerHTML = `<li>O Amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
    }
  }