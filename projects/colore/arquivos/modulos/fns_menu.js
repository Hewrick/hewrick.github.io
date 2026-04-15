// Botão de abrir/fechar o menu
function interruptorMenu() {
  // Menu
  const menu = document.getElementById("menu");
  // Botão para abrir/fechar menu
  const btnAbrirMenu = document.getElementById("btnAbrirMenu");

  if (menu.style.left != "0px") {       // se desativado então
    menu.style.left = "0px";
  } else {                              // se ativado então
    menu.style.left = "-250px";
  }
}

// O que acontece quando clica o botão de confirmar configuração
function confirmConfig() {
  // Input para selecionar o tipo de código do jogo
  const opcaoCod = document.getElementsByName("opcaoCod");
  // Input para selecionar o modo de jogo
  const opcaoModo = document.getElementsByName("opcaoModo");
  // Opções de código de cor
  let configCod = opcaoCod[0].value;
  // Opções de modo de jogo
  let configModo = opcaoModo[0].value

  // Método para atualizar o valor de qual input radio está selecionado
  function atualizarSelecaoRadio(selecao, opcao) {
    for (const radio of opcao) {
      radio.checked ? selecao = radio.value : selecao.default;
    }
    console.log(selecao);
    return selecao;
  }
  
  configCod = atualizarSelecaoRadio(configCod, opcaoCod);
  configModo = atualizarSelecaoRadio(configModo, opcaoModo);
  
  /* debug
  console.clear();
  console.log("Configuração atual: ");
  console.log("Tipo de código: "+configCod);
  console.log("Modo de jogo: "+configModo);*/
};


// EXPORT GERAL
export {interruptorMenu, confirmConfig};