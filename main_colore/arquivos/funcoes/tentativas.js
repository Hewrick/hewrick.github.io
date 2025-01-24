// === Tentativas ===

// Função para criar histórico de tentativa depois de enviar uma tentativa de cor

export function gerarTentativa() {
  // Criação dos objetos para as tentativas
  const objetoTentativa = document.createElement("li");
  const corTentativa = document.createElement("div");

  // Atribuindo classe aos objetos criados
  objetoTentativa.classList.add("objetoTentativa");
  corTentativa.classList.add("cor");

  // Atribuindo objetos à cada tentativa
  objetoTentativa.appendChild(corTentativa);

  // Adiciona uma tentativo ao histórico
  escopoTentativas.appendChild(objetoTentativa);
}

enviarCor.onclick = function gerarTentativa() {
  // Criação dos objetos para as tentativas
  const objetoTentativa = document.createElement("li");
  const corTentativa = document.createElement("div");

  // Atribuindo classe aos objetos criados
  objetoTentativa.classList.add("objetoTentativa");
  corTentativa.classList.add("cor");

  // Atribuindo objetos à cada tentativa
  objetoTentativa.appendChild(corTentativa);

  // Adiciona uma tentativo ao histórico
  escopoTentativas.appendChild(objetoTentativa);
}