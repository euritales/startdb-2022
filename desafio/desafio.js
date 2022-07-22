const readline = require("readline-sync");
const Forca = require("./forca");

const jogo = new Forca("abacaxi");

if (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
  const chute = readline.question("Aguardando chute: \n");
  jogo.chutar(chute);
  console.log(jogo.buscarDadosDoJogo().getLetras());
  console.log(jogo.buscarDadosDoJogo().getPalavra());
  console.log(jogo.buscarDadosDoJogo().getVida());
  // console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());
