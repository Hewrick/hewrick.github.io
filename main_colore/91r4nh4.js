const hexCaracs = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
const cor = document.getElementById("cor");
const botaoGerarCor = document.getElementById("botao-gerar-cor");
const inputHEX = document.getElementById("input-HEX");
const inputRGB = document.getElementById("input-RGB");
const enviarHEX = document.getElementById("enviar-HEX");
const enviarRGB = document.getElementById("enviar-RGB");
const tentativas = document.getElementById("tentativas");
// element.onclick = function (event) {} - ai aqui ce mete o 'enviarCodigoCor()'

// Funcao para todos botoes que funcinoam com enter
function inputEnter(event, id) {
  // se o usuario pressionar a tecla "Enter" 
  if (event.key === "Enter") {
    // cancela a acao padrao, se for preciso 
    event.preventDefault();
    // aciona o elemento botao com um clique 
    document.getElementById(id).click();
  }
}


/* -= cores hex =- */
function criarTentativa() {
	const elementoTentativa = document.createElement("li");
  elementoTentativa.classList.add("elemento-tentativa");
  
  tentativas.appendChild(elementoTentativa);
};//ALGO ESTÁ ERRADO

// funcao que gera um cor hex aleatoria 
function gerarHex() {
  // coloca # antes do codigo da co hex 
  hexValue = ['#'];
  // dentro do loop de 6 voltas, ele escolhe um dos valores da matriz hexCaracs e coloca dentro de hexValue, só cabem 16 caracteres no 
  for (var i = 0; i < 6; i++) { 
    hexValue.push(hexCaracs[Math.floor(Math.random() * 16)]);
  }

  // coloca a matriz hexValue "dentro" de um string (texto) 
  hexValue = hexValue.join('');
	// define o codigo de cor hex, gerado aleatoriamente, como cor de fundo do elemento 'cor' 
  cor.style.backgroundColor = hexValue;
}
/* /cores */

// ESCOPO inputs de cores


