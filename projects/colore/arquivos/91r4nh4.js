// === Importações === 
import * as menuc from "./modulos/fns_menu.js";

// === Objetos para Tags e Instâncias Relacionadas ===
// Root
const root = document.documentElement;

// == Escopo da Cor Desafio ==
// Botão para gerar cor desafio
const botaoGerarCor = document.getElementById("botaoGerarCor");
// Cor desafio (que deve ser adivinhada)
const corDesafio = document.getElementById("corDesafio");

// == Tentar Cor ==
// Campo para tentar o código da cor desafio
const entradaCor = document.getElementById("entradaCor");
// Botão para confirmar tentativa
const botaoTentarCor = document.getElementById("botaoTentarCor");
// Valor da entrada de tentativa 
let valorEntrada = entradaCor.value;
// Tamanho do valor da entrada de tentativa
let tamanhoEntrada = entradaCor.value.length;
// Campo de histórico de tentativas
const escopoTentativas = document.getElementById("escopoTentativas");

// == Menu ==
const menu = document.getElementById("menu");
// Botão para abrir/fechar menu
const btnAbrirMenu = document.getElementById("btnAbrirMenu");
// Botão para confirmar configuração
const confirmaConfig = document.getElementById("confirmaConfig");
// Input para selecionar o tipo de código do jogo
const opcaoCod = document.getElementsByName("opcaoCod");
// Input para selecionar o modo de jogo
const opcaoModo = document.getElementsByName("opcaoModo");
// Tipo de código de cor
let configCod = opcaoCod[0].value;
// Modo de jogo
let configModo = opcaoModo[0].value;


// === Teste ===
document.getElementById("teste").onclick = function teste() {
  
}

// === Abrir Menu ===
btnAbrirMenu.onclick = menuc.interruptorMenu;
// === Confirmar Configurações no Menu ===
confirmaConfig.onclick = menuc.confirmConfig;

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


