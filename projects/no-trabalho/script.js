//GERAL

const seletor_jogos = document.getElementById("seletor");
const opcao_campoMinado = document.getElementById("opcao-campoMinado");
const opcao_incremental = document.getElementById("opcao-incremental");

// Injeção dinâmica de script
function carregarScript(caminho, callback) {
  // Remove script anterior, caso haja um
  removerScriptAntigo();

  // Cria uma nova tag "script"
  const script = document.createElement("script");
  script.src = caminho;
  script.id = "script-dinamico";
  script.onload = callback;

  document.body.appendChild(script);
}

function removerScriptAntigo() {
  const scriptAntigo = document.getElementById("script-dinamico");
  if (scriptAntigo) scriptAntigo.remove();
  seletor_jogos.display = "none";
}


// -- Iniciando jogos -- da pra transformar essas duas funções em uma só

// Iniciando Campo minado
opcao_campoMinado.addEventListener("click", () => {
  carregarScript("campo-minado/sketch.js", () => {
    console.log("campo minado carregado");
    if (typeof iniciarCM === "function") iniciarCM();
  });
});

// Iniciando Incremental
opcao_incremental.addEventListener("click", () => {
  carregarScript("incremental/script.js", () => {
    console.log("incremental carregado");
    if (typeof iniciarIncremental === "function") iniciarIncremental();
  });
});

