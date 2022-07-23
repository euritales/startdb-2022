class Forca {
  constructor(palavra) {
    this._palavra = palavra.toUpperCase().trim().split("");
    this._palavraSecreta = "".padStart(palavra.length, "-").split("");
    this._vidas = 6;
    this._letrasChutadas = [];
  }

  get getVida() {
    return this._vidas;
  }
  get getPalavra() {
    return this._palavra;
  }
  get getPalavraSeparada() {
    return this._palavraSecreta;
  }
  get getLetrasChutadas() {
    return this._letrasChutadas;
  }
  set setVida(value) {
    this._vidas = value;
  }
  set setPalavra(value) {
    this._palavra = value;
  }
  set setPalavraSeparada(value) {
    this._palavraSecreta = value;
  }
  set setLetras(value) {
    this._letrasChutadas = value;
  }
  chutar(letra) {
    //Pensei em por uma verificação de tipo também, mas achei que poderia limitar a brincadeira
    let chute = letra.toUpperCase();
    if (chute.length != 1) {
      return console.log("Você deve inserir uma letra por vez!");
    } else if (this.getLetrasChutadas.includes(chute)) {
      return console.log("Letra repetida. Por favor, tente outra!");
    } else if (!this._palavra.includes(chute)) {
      this._vidas--;
      this._letrasChutadas.push(chute);
      return console.log("PEM!!! Letra errada!");
    } else {
      //inserir troca de '-' por letras
      this._letrasChutadas.push(chute);
      for (let i = 0; i < this._palavra.length; i++) {
        // console.log(this._palavraSecreta);
        if (chute == this._palavra[i]) {
          this._palavraSecreta.splice(i, 1, chute);
        }
      }
      return console.log("Você acertou a letra!");
    }
    // console.log(this.palavra);
  }

  buscarEstado() {
    console.log("ESTADO * * *");
    // colocar lógica de alterar estado
    if (!this._palavraSecreta.includes("-")) {
      return "ganhou";
    }
    if (this._vidas > 0) {
      return "aguardando chute";
    } else if (this._vidas == 0) {
      return "perdeu";
    }
  }
  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    const status = {
      letraChutada: this._letrasChutadas,
      vida: this._vidas,
      palavra: this._palavraSecreta.join(""),
    };
    console.log("* * * STATUS JOGADOR * * *");
    return console.log(
      `Letra(s) chutadas: ${status.letraChutada}\nVida: ${status.vida}\nPalavra: ${status.palavra}`
    );
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

// let letrasChutadas = ["a", "b", "c"]; // Deve conter todas as letras chutadas
    // let vidas = 6; // Quantidade de vidas restantes
    // let palavra = ""; // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    // let getLetras = function () {
    //   return letrasChutadas;
    // };
    // let getVida = function () {
    //   return vidas;
    // };
    // let getPalavra = function () {
    //   return palavra;
    // };
    // let setLetras = function (value) {
    //   return (letrasChutadas = value);
    // };
    // let setVida = function (value) {
    //   return (vidas = value);
    // };
    // let setPalavra = function (value) {
    //   return (palavra = value);
    // };

    // let metodos = {
    //   getPalavra: getPalavra,
    //   getVida: getVida,
    //   getLetras: getLetras,
    //   setPalavra: setPalavra,
    //   setVida: setVida,
    //   setLetras: setLetras,
    // };

    // Object.defineProperties(metodos, {
    //   getPalavra: {
    //     enumerable: false,
    //   },
    //   getVida: {
    //     enumerable: false,
    //   },
    //   getLetras: {
    //     enumerable: false,
    //   },
    //   setPalavra: {
    //     enumerable: false,
    //   },
    //   setVida: {
    //     enumerable: false,
    //   },
    //   setLetras: {
    //     enumerable: false,
    //   },
    // });

    // return metodos;

*/
