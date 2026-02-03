// === Importações === 
import * as menuc from "./modulos/menu.js";

// === Objetos para Tags ===
// Root
const root = document.documentElement;

// Botão para gerar cor desafio
const botaoGerarCor = document.getElementById("botaoGerarCor");
// Cor desafio (que deve ser adivinhada)
const cor = document.getElementById("cor");
// Campo para tentar o código da cor desafio
const entradaCor = document.getElementById("entrada-cor");

// == Tentar Cor ==
// Botão para confirmar tentativa
const botaoTentarCor = document.getElementById("botaoTentarCor");
// Campo de histórico de tentativas
const escopoTentativas = document.getElementById("escopoTentativas");

// == Menu ==
const menu = document.getElementById("menu");
// Botão para abrir/fechar menu
const btnAbrirMenu = document.getElementById("btn-abrir-menu");
// Botão para confirmar configuração
const confirma_config = document.getElementById("confirma-config");
// Input para selecionar o tipo de código do jogo
const opcaoCod = document.getElementsByName("opcaoCod");
// Input para selecionar o modo de jogo
const opcaoModo = document.getElementsByName("opcaoModo");
// Tipo de código de cor
let configCod = opcaoCod[0].value;
// Modo de jogo
let configModo = opcaoModo[0].value;

// == Tentativas ==
/* talvez nem precise dessa variável para salvar a cor que o usuário tentou, 
 * a única informação interessante de se guardar é o número de tentativas do caba
 */
const corTentativa = document.getElementById("corTentativa");

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
btnAbrirMenu.onclick = menuc.interruptorMenu;
confirma_config.onclick = menuc.confirmConfig;


// === Escopo Cores ===

// Caracteres hexadecimais
const hexCaracs = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

// Gerar nova cor desafio



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


