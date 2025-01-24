/* 
Ideias:
- Adicionar o modo (normal) sem transparência
- O input de cor sempre vai comparar com 8 caracteres. Faz com que consiga comparar com, no mínimo 4. Ou melhor, faz com que ele identifique o padrão no texto (como um regex), onde está cada cor e quais informações estão no input. 
*/

//import gerarTentativa from "./funcoes/tentativas.js";
//import gerarHex from "./funcoes/codigoHEX.js";
//import gerarRGB from "./funcoes/codigoRGB.js";


// === Variáveis ===




// === Tags ===

const cor = document.getElementById("cor");
const botaoGerarCor = document.getElementById("botaoGerarCor");
const formTentarCor = document.getElementById("formTentarCor");
const entradaCor = document.getElementById("entradaCor");
const botaoTentarCor = document.getElementById("botaoTentarCor");
const escopoTentativas = document.getElementById("escopoTentativas");
// exemplo pra função "onclick": element.onclick = function (event) {}


// === Funções genéricas ===

// Funcao para todos botões funcionarem com enter
entradaCor.addEventListener("keypress", function(event) {
  // se o usuario pressionar a tecla "Enter" 
  if (event.key === "Enter") {
    // cancela a acao padrao, se for preciso 
    event.preventDefault();
    // aciona o elemento botao com um clique 
    botaoTentarCor.click();
  }
});


// === HEX ===

const hexCaracs = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 



// Função que gera um cor hex aleatoria 
botaoGerarCor.onclick = function gerarHEX() {
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
  
  // Define o codigo de cor hexagonal, gerado aleatoriamente, como cor de fundo do elemento 'cor' 
  console.log(hexCod);
  return cor.style.backgroundColor = hexCod;
}


// === Tentativas ===



// Código para verificar tentativa

formTentarCor.addEventListener('submit', function(e) {
  // Criação dos objetos para as tentativas
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

  // impede o envio do form
  e.preventDefault();
});
