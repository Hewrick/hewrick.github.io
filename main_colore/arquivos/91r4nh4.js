/* 
Ideias:
- Adicionar o modo (normal) sem transparência
- O input de cor sempre vai comparar com 8 caracteres. Faz com que consiga comparar com, no mínimo 4. Ou melhor, faz com que ele identifique o padrão no texto (como um regex), onde está cada cor e quais informações estão no input. 
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


// Talvez essa função seja bem da inútil...
// Funçãoo para o "botaoTentarCor" funcionar com a tecla enter
entradaCor.addEventListener("keypress", function(e) {
  // se a tecla pressionada for "Enter" 
  if (e.key === "Enter") {
    // cancela a ação padrão 
    e.preventDefault();
    
    // aciona o objeto "botaoTentarCor" como se fosse um clique 
    botaoTentarCor.click();
  }
});



// === Configuração ===

//
function alterarModo() {

}


// 
function alterarCod() {

}


// Sessão do que acontecer quando as configurações forem confirmadas
formConfig.addEventListener("submit", function(e) {
  e.preventDefault();
  alterarModo();
  alterarCod();
});


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
  //Substituir por: tudoIsso.innerHTML = [tags];

  /* // Criação dos objetos para as tentativas
  const objetoTentativa = document.createElement("li");
  const corTentativa = document.createElement("div");
  const setaVermelha = document.createElement("img");
  const setaVerde = document.createElement("img");
  const setaAzul = document.createElement("img");
  // const setaOpacidade = document.createElement("img"); 

  // Atribuindo ID e Classes aos objetos criados
  objetoTentativa.setAttribute("id", "objetoTentativa");
  corTentativa.classList.add("itemTentativa");
  corTentativa.classList.add("cor");

  setaVermelha.classList.add("itemTentativa");
  setaVermelha.classList.add("seta");
  setaVermelha.setAttribute("id", "setaVermelha");

  setaVerde.classList.add("itemTentativa");
  setaVerde.classList.add("seta");
  setaVerde.setAttribute("id", "setaVerde");

  setaAzul.classList.add("itemTentativa");
  setaAzul.classList.add("seta");
  setaAzul.setAttribute("id", "setaAzul");

  // setaOpacidade.classList.add("seta");
  // setaOpacidade.setAttribute("id", "setaOpacidade");

  // Atribuindo objetos à cada tentativa
  objetoTentativa.appendChild(corTentativa);
  objetoTentativa.appendChild(setaVermelha);
  objetoTentativa.appendChild(setaVerde);
  objetoTentativa.appendChild(setaAzul);
  // objetoTentativa.appendChild(setaOpacidade);

  // Atribui características às setas de comparação de cor
  setaVermelha.setAttribute("src", "./arquivos/imgs/seta.png");
  setaVerde.setAttribute("src", "./arquivos/imgs/seta.png");
  setaAzul.setAttribute("src", "./arquivos/imgs/seta.png");

  corTentativa.style.backgroundColor = "#" + entradaCor.value;
  
  // Adiciona uma tentativo ao histórico
  escopoTentativas.appendChild(objetoTentativa);
  */

  escopoTentativas.innerHTML += 
  " <li id='objetoTentativa'> \n" +
  "   <div class='cor itemTentativa'></div> \n" +
  "   <img id='setaVermelha' class='seta itemTentativa'> \n" +
  "   <img id='setaVerde' class='seta itemTentativa'> \n" +
  "   <img id='setaAzul' class='seta itemTentativa'> \n" +
  "   <img id='setaTransparente' class='seta itemTentativa' style='display: none'> \n" +
  " </li>";

  document.getElementById("objetoTentativa").classList.add("margin-bottom-15");

  //document.getElementsByClassName("cor").style.backgroundColor = "#" + entradaCor.value;
  e.preventDefault();
});
