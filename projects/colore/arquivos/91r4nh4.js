// === Arquivos Importados ===
/* Como importar:
 * const { objetoTentativa } = require("./91r4nh4");
 * No outro arquivo, onde está o componente, basta um "export" (nesse caso) antes do componente "objetoTentativa". 
 * Agora você sabe o que fazer, bonitão
*/ 
//import gerarTentativa from "./modulos/tentativas.js";
//import gerarHex from "./modulos/codigoHEX.js";
//import gerarRGB from "./modulos/codigoRGB.js";

// === Objetos para Tags ===
// Root
const root = document.documentElement;
// Cor desafio (que deve ser adivinhada)
const botaoGerarCor = document.getElementById("botaoGerarCor");
const cor = document.getElementById("cor");
const entradaCor = document.getElementById("entrada-cor");
// Tentar Cor
const form_tentar_cor = document.getElementById("form-tentar-cor");
const botaoTentarCor = document.getElementById("botaoTentarCor");
const escopoTentativas = document.getElementById("escopoTentativas");
// Menu
const menu = document.getElementById("menu");
// Botão para abrir/fechar menu
const btnAbrirMenu = document.getElementById("btn-abrir-menu");
// Botão para confirmar configuração
const confirma_config = document.getElementById("confirma-config");
// Input para selecionar o tipo de código do jogo
const opcaoCod = document.getElementsByName("opcaoCod");
// Input para selecionar o modo de jogo
const opcaoModo = document.getElementsByName("opcaoModo");

// === Variáveis ===
// Tipo de código de cor
let configCod = opcaoCod[0].value;
// Modo de jogo
let configModo = opcaoModo[0].value;

// Valor da entrada de tentativa 
let valorEntrada = entradaCor.value;
// Tamanho do valor da entrada de tentativa
let tamanhoEntrada = entradaCor.value.length;


// === Função Teste ===
document.getElementById("teste").onclick = function teste() {
  console.clear();
  for (const radio of opcaoCod) {
    radio.checked ? configCod = radio.value : configCod.default;
  }
  
  for (const radio of opcaoModo) {
    radio.checked ? configModo = radio.value : configModo.default;
  }
  console.log(configCod);
  console.log(configModo);
}


// === Menu ===

// Abrir/fechar menu
btnAbrirMenu.onclick = () => {
  if (menu.style.left != "0px") {
    menu.style.left = "0px";
    btnAbrirMenu.style.left = "250px";
  } else {
    menu.style.left = "-250px";
    btnAbrirMenu.style.left = "0px";
  }
}

// Função para atualizar o valor de qual input radio está selecionado
function atualizarSelecaoRadio(selecao, opcao) {
  for (const radio of opcao) {
    radio.checked ? selecao = radio.value : null;
  }
  return selecao;
}

// O que acontece quando clica o botão de confirmar configuração
confirma_config.onclick = function() {
  console.clear();
  console.log("Configuração atual: ")
  configCod = atualizarSelecaoRadio(configCod, opcaoCod);
  configModo = atualizarSelecaoRadio(configModo, opcaoModo);
  console.log("Tipo de código: "+configCod);
  console.log("Modo de jogo: "+configModo);
};


// === Escopo Cores ===

// === HEX ===

const hexCaracs = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

// Função que gera uma cor aleatória com o código hexadecimal 
botaoGerarCor.onclick = function gerarHEX() {
  // Tentar fazer hexCod ser string sempre
  
  // Coloca # antes do codigo da cor hexadecimal
  let hexCod = ['#'];    
  
  // Dentro do loop de 6 voltas, que é o número de caracteres no código hexadecimal, é escolhido um dos valores da matriz "hexCaracs" e coloca dentro de "hexValue". 
  // A função "Math.random()" sempre gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo), por isso está sendo multiplicada pelo número de caracteres da matriz "hexCaracs" (logo a chance de aparecer um 'F' é bem mínima, talvez eu resolva isso). 
  // A função "Math.floor" arredonda qualquer valor para baixo, o que se torna o indice da matriz "hexCaracs"
  for (var i = 0; i < 6; i++) { 
    hexCod.push(hexCaracs[Math.floor(Math.random() * 16)]);
  }
  
  /*/ Looping para limitar a opacidade à acima de 40% (40% de 15 (valor máximo de um caracter hexadecimal) é 6). Mas isso é só para o "modo difícil", então é preciso mudar a condição do looping que gera código hexadecimal
  while (hexCod[7] < 6) {
    hexCod[7] = hexCaracs[Math.floor(Math.random() * 16)];
  }
  */
  
  // Coloca a matriz hexValue "dentro" de um string (texto) 
  hexCod = hexCod.join("");
  
  // Define o codigo de cor hexadecimal, gerado aleatoriamente, como cor de fundo do elemento 'cor' 
  return cor.style.backgroundColor = hexCod;
}



// === Tentativas ===

// Código de cada tentativa, passado para HTML
const objetoTentativa = 
" <li id='objetoTentativa'> " +
"   <div id='corTentativa' class='itemTentativa'></div> " +
"   <img id='setaVermelha' class='seta itemTentativa' src='./arquivos/imgs/seta.png'> " +
"   <img id='setaVerde' class='seta itemTentativa' src='./arquivos/imgs/seta.png'> " +
"   <img id='setaAzul' class='seta itemTentativa' src='./arquivos/imgs/seta.png'> " +
"   <img id='setaTransparente' class='seta itemTentativa' style='display: none' src='./arquivos/imgs/seta.png'> " +
" </li>";

// Atribuição de elementos às tags (relacionadas ao escopo de tentativas)
const corTentativa = document.getElementById("corTentativa");
const setaVermelha = document.getElementById("setaVermelha");
const setaVerde = document.getElementById("setaVerde");
const setaAzul = document.getElementById("setaAzul");
const setaTransparente = document.getElementById("setaTransparente");

//pesquisar: module.exports = { objetoTentativa, instanciarTentativa };
