let amigos = [];

function adicionarAmigo() {
  const nomeInput = document.getElementById('amigo');
  const nome = nomeInput.value.trim(); 


  if (nome === '') {
    alert('Por favor, insira um nome.'); 
    return; 
  }

  amigos.push(nome);

  nomeInput.value = '';

  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');

  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i]; 

    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo para sortear.'); 
    return; 
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo secreto: <strong>${amigoSorteado}</strong>`;
}