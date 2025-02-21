/* 
Ideias:
- Adicionar o modo (normal) sem transparência
- O input de cor sempre vai comparar com 8 caracteres. Faz com que consiga comparar com, no mínimo 4. Ou melhor, faz com que ele identifique o padrão no texto (como um regex), onde está cada cor e quais informações estão no input. 
  Solução: Usar "length" para saber a quantidade de caracteres e assim saber o padrão de cores que foi inserido, mas introduz isso na parte do "formTentarCor". Então seria chamada uma função, como "identificarCorTentativa()" (ou algo assim), logo nas primeiras linhas da função.
- Usar SVG para substituir as imagens que aparecem nos objetos de tentativa
*/

// === Arquivos Importados ===
/* Como importar:
 * const { objetoTentativa } = require("./91r4nh4");
 * No outro arquivo, onde está o componente, basta um "export" (nesse caso) antes do componente "objetoTentativa". 
 * Agora você sabe o que fazer, bonitão
*/ 

//import gerarTentativa from "./modulos/tentativas.js";
//import gerarHex from "./fmodulos/codigoHEX.js";
//import gerarRGB from "./modulos/codigoRGB.js";



// === Variáveis ===





// === Tags para Objetos ===

const botaoGerarCor = document.getElementById("botaoGerarCor");
const cor = document.getElementById("cor");
const entradaCor = document.getElementById("entradaCor");

const formTentarCor = document.getElementById("formTentarCor");
const botaoTentarCor = document.getElementById("botaoTentarCor");
const escopoTentativas = document.getElementById("escopoTentativas");

const formConfig = document.getElementById("formConfig");



// === Funções genéricas ===

// Função inútil, mas quero saber se vale a pena fazer funcionar
// Função para prevenir ação padrão
function prevenirPadrao(e) {
  e.preventDefault();
}



// === Configuração ===

//
function alterarModo(modo) {

}


// 
function alterarCod(cod) {

}


// Sessão do que acontecer quando as configurações forem confirmadas
formConfig.addEventListener("submit", function(e) {
  e.preventDefault();
  alterarModo();
  alterarCod();
});



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
{const objetoTentativa = 
" <li id='objetoTentativa'> " +
"   <div id='corTentativa' class='itemTentativa'></div> " +
"   <img id='setaVermelha' class='seta itemTentativa' src='./arquivos/imgs/seta.png'> " +
"   <img id='setaVerde' class='seta itemTentativa' src='./arquivos/imgs/seta.png'> " +
"   <img id='setaAzul' class='seta itemTentativa' src='./arquivos/imgs/seta.png'> " +
"   <img id='setaTransparente' class='seta itemTentativa' style='display: none' src='./arquivos/imgs/seta.png'> " +
" </li>";}

// Atribuição de objetos às tags (relacionadas ao escopo de tentativas)
const corTentativa = document.getElementById("corTentativa");
const setaVermelha = document.getElementById("setaVermelha");
const setaVerde = document.getElementById("setaVerde");
const setaAzul = document.getElementById("setaAzul");
const setaTransparente = document.getElementById("setaTransparente");

// Atribuição de Classes
objetoTentativa.classList.add("margin-bottom-15");


// Função para fazer uma verificação geral de cada tentativa (talvez usar esta função para verificar ambos os tipos de código)
/* Verificar :
 * Input vázio;
 * Padrão inserido (aceito apenas 3, 4, 6 ou 8 caracteres)
 */
function verTentativa() {
  if(entradaCor != null) {
    escopoTentativas.innerHTML += 
    "<span>Sem cor não da né chefe</span>";
    // adicionar animação pro texto tremer e desaparecer depois de 5 segundos
    
    escopoTentativas.removeChild(span);
  } else {

  }
}

//Função para verificar compatibiliade de cada tentativa
function compTentativa() {
  let chave = true;
  let tentativa;

  // Os módulos de cores são definidos
  if(chave == true) {
    const mVermelho = 1;
    const mVerde = 1;
    const mAzul = 1;
  } else {
    const mVermelho = 1;
    const mVerde = 1;
    const mAzul = 1;
  }
}


// Função para criar o objeto DOM para as tentativas
formTentarCor.addEventListener("submit", function(e) {
  // SEMPRE USE "preventDefault()" NA PRIMEIRA LINHA (acho que isso ajuda um bucado kk...)
  e.preventDefault();

  // Atribui cor da tentativa ao escopo da tentativa
  corTentativa.style.backgroundColor = "#" + entradaCor.value;

  console.log(entradaCor.value);
});
