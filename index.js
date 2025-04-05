const botaoIncrementar = document.getElementById("botao");
const botaoDecrementar = document.getElementById("botao2"); //como diz o nome vai definir o ID.
const botaoReset = document.getElementById("botao3");

function incrementar() {
  const elementh1 = document.getElementById("h1"); 
  const valorantigo = parseInt(elementh1.innerText); // perseint vai definir o h1 como número/texto matemático???
  elementh1.innerText = valorantigo + 1; // Cada vez que clicar no Incrementar vai adicionar mais +1
}

function decrementar() {
  const elementh1 = document.getElementById("h1");
  const valorantigo = parseInt(elementh1.innerText);

  if (valorantigo > 0) { //se o valor antigo for maior que 0, pode subtrair.
    elementh1.innerText = valorantigo - 1; // Cada vez que clicar no Decrementar vai diminuir -1
  }
}

function reset() {
  const elementh1 = document.getElementById("h1");
  elementh1.innerText = 0;
}

botaoIncrementar.addEventListener("click", incrementar);
botaoDecrementar.addEventListener("click", decrementar);
botaoReset.addEventListener("click", reset);


// Quando chegar no número 50 apareça uma mensagem dizendo que chegou no limite e não pode subir mais.