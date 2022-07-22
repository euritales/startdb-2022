class Forca {
  constructor(palavraForca) {
    this.palavraForca = palavraForca;
    setPalavra(this.palavraForca);
  }

  chutar(letra) {
    // colocar lógica de alterar valores

    if (letra.includes(this.buscarDadosDoJogo().getLetras())) {
      console.log("Oxe, que viagem é essa?");
    }
    // console.log(this.palavra);
  }

  buscarEstado() {
    // colocar lógica de alterar estado
    // console.log("---Estado---");
    // console.log(`Vida: ${this.buscarDadosDoJogo().getVida()}`);
    // console.log(`Letras Chutadas: ${this.buscarDadosDoJogo().getLetras()}`);
    // console.log(`Palavra Misteriosa: ${this.buscarDadosDoJogo().getPalavra()}`);
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    let letrasChutadas = ["a", "b", "c"]; // Deve conter todas as letras chutadas
    let vidas = 6; // Quantidade de vidas restantes
    let palavra = ""; // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    let getLetras = function () {
      return letrasChutadas;
    };
    let getVida = function () {
      return vidas;
    };
    let getPalavra = function () {
      return palavra;
    };
    let setLetras = function (value) {
      return (letrasChutadas = value);
    };
    let setVida = function (value) {
      return (vidas = value);
    };
    let setPalavra = function (value) {
      return (palavra = value);
    };

    let metodos = {
      getPalavra: getPalavra,
      getVida: getVida,
      getLetras: getLetras,
      setPalavra: setPalavra,
      setVida: setVida,
      setLetras: setLetras,
    };

    Object.defineProperties(metodos, {
      getPalavra: {
        enumerable: false,
      },
      getVida: {
        enumerable: false,
      },
      getLetras: {
        enumerable: false,
      },
      setPalavra: {
        enumerable: false,
      },
      setVida: {
        enumerable: false,
      },
      setLetras: {
        enumerable: false,
      },
    });

    return metodos;
  }
}

module.exports = Forca;

/*
1. O jogo deve iniciar com 6 vidas

2. O jogo deve iniciar com o estado `aguardando chute`.

3. Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.

4. Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.

5. Toda chamada ao método chutar deve registrar a letra em letrasChutadas

6. Se a letra chutada não estiver contida na palavra, deve subtrair uma vida

7. Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição.

Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "_", "_", "_" ].

8. Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`.

9. Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`.
*/
