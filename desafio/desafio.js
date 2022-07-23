const readline = require("readline-sync");
const Forca = require("./forca");

const jogo = new Forca("Espacos-em-branco-nao-sao-validos");

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
  const chute = readline.question("Aguardando chute: \n");
  jogo.chutar(chute);

  console.log(jogo.buscarDadosDoJogo());
}
jogo.desvendarPalavra();
console.log("você " + jogo.buscarEstado());
