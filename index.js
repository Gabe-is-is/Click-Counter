const botao = document.getElementById("botao");

function incrementar() {
  const elementh1 = document.getElementById("h1");
  const valorantigo = elementh1.innerText;
  elementh1.innerText = parseInt(valorantigo)+1;
}

botao.addEventListener("click", incrementar);

// criar botão de decrementar, se por acaso o número for igual a zero, então não decrementar

