// == Tags ==
const imgClique = document.getElementById("imgClique");
const escopoPontos = document.getElementById("escopoPontos");
const escopoMelhorias = document.getElementById("escopoMelhorias");
const melhoria = document.getElementsByClassName("melhoria");


// == Variáveis ==
let pontos = 0;
const nivelM = [10, 20, 30, 40, 50, 60, 70, 80]
let indiceM; // variável geralmente usada para teste do console

class Ganho {
  constructor() {
    this.aumento = 1;
    this.aumentoBrutal = this.aumento * 3;
  }
};
let ganho = new Ganho();


// == Objetos ==


// Bônus de 15% de aumento brutal: Math.random() <= 0.15 ? pontos += ganho.aumentoBrutal;


// == Lista de sons ==(fazer a lista com tags <audio>)
let trompete = new Audio("arquivos/trompete0.mp3");


// "Object.assign()" sobrepõe os parâmetros, que não seja o primeiro, sobre o alvo. Então é interessante fazer uma função ou método que escolhe um "case" (conforme índice ou coisa parecida) e retorna "assign()" do novo (instanciado na função) com o original

// == Funções ==



// == Interações ==
// Clique no botão de teste1
document.getElementById("teste").onclick = () => {
  trompete.pause();
  trompete.currentTime = 0;
  trompete.play();
}
// Clique no botão de teste2
document.getElementById("teste1").onclick = () => {
  trompete.pause();
  trompete.currentTime = 0;
}

// Clique no botão principal com foto de gato
imgClique.onclick = function clique() {
  // Se quiser que adicione 8px, use toString()
  let height1 = imgClique.style.height;
  imgClique.style.height = "108px";
  setTimeout(() => imgClique.style.height = height1, 35);
  
  Math.random() < 0.15 ? pontos += ganho.aumentoBrutal : pontos += ganho.aumento;

  escopoPontos.innerHTML = (Math.trunc(pontos * 1) / 1);
}

// Clique no botão de melhoria
melhoria.onclick = () => {
  //aplicaBonus();
  //someMelhoria();
}




// Códigos não esquecidos

/*// refactor: for(pontos>=nivelM) -> if(id == valido); depois um switch(idMelhoria) para aplicar o bônus
function apareceMelhoria() {
  /*let objMelhoria = `
    <div id="m${indiceM}" class="melhoria">
      <img src="">
    </div>`;*
  let objMelhoria = {
    /* buscar na lista de melhoria
     * lista de melhoria externa
     *
  }
  
  for (indiceM; pontos >= nivelM[indiceM]; indiceM++) {
      
  }
  console.log(`melhoria ${indiceM}`);
  escopoMelhorias.innerHTML += objMelhoria;
}

if (pontos >= nivelM[indiceM]) {
  apareceMelhoria(indiceM);
  indiceM++;
    
  //console.log(nivelM[proximoNivel]);
  //console.log(proximoNivel)
}
*/
