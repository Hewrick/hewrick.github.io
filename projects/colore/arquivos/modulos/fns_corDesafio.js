function gerarCod(fundo) {
  let cod = [];

  for(let i=0; i<3; i++){
    cod.push(Math.floor(Math.random()*255));
  }
  
  fundo.style.backgroundColor = `rgb(${cod[0]}, ${cod[1]}, ${cod[2]})`;
}


// EXPORT GERAL
export {gerarCod};