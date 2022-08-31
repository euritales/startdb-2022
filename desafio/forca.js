class Forca {
  constructor(palavra) {
    this.palavra = palavra.toUpperCase().trim().split("");
    this._palavraSecreta = "".padStart(palavra.length, "_").split("");
    this.vidas = 6;
    this.letrasChutadas = [];
  }

  get getVida() {
    return this.vidas;
  }
  get getPalavra() {
    return this.palavra;
  }
  get getPalavraSeparada() {
    return this._palavraSecreta;
  }
  get getLetrasChutadas() {
    return this.letrasChutadas;
  }
  set setVida(value) {
    this.vidas = value;
  }
  set setPalavra(value) {
    this.palavra = value;
  }
  set setPalavraSeparada(value) {
    this._palavraSecreta = value;
  }
  set setLetras(value) {
    this.letrasChutadas = value;
  }
  chutar(letra) {
    //Pensei em por uma verificação de tipo, mas achei que poderia limitar a brincadeira
    console.log("________NOTIFICACAO________");
    let chute = letra.toUpperCase();
    if (chute.length != 1) {
      return console.log("- Você deve inserir uma letra por vez!");
    } else if (this.getLetrasChutadas.includes(chute)) {
      return console.log("- Letra repetida. Por favor, tente outra!");
    } else if (!this.palavra.includes(chute)) {
      this.vidas--;
      this.letrasChutadas.push(chute);
      return console.log("- PEM!!! Letra errada!");
    } else {
      this.letrasChutadas.push(chute);
      for (let i = 0; i < this.palavra.length; i++) {
        if (chute == this.palavra[i]) {
          this._palavraSecreta.splice(i, 1, chute);
        }
      }
      return console.log("- Você acertou a letra!");
    }
  }

  buscarEstado() {
    console.log("\n__________________");
    if (!this._palavraSecreta.includes("_")) {
      return "ganhou";
    } else if (this.vidas > 0) {
      return "aguardando chute";
    } else if (this.vidas == 0) {
      return "perdeu";
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  desvendarPalavra() {
    return console.log(`PALAVRA MISTERIOSA: "${this.palavra.join("")}"`);
  }

  buscarDadosDoJogo() {
    return {
      vidas: this.getVida,
      _palavraSecreta: this.getPalavraSeparada,
      letrasChutadas: this.getLetrasChutadas,
    };
  }
}

module.exports = Forca;

/*
----------REGRAS---------- 
1. O jogo deve iniciar com 6 vidas - V

2. O jogo deve iniciar com o estado `aguardando chute`. - V

3. Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado. - V

4. Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.  - V (Letras iguais certas seguirão a mesma lógica)

5. Toda chamada ao método chutar deve registrar a letra em letrasChutadas - V

6. Se a letra chutada não estiver contida na palavra, deve subtrair uma vida  - V

7. Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição. - V

Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "_", "_", "_" ]. - V (Achei que unindo ficaria mais bonito, visualmente falando)

8. Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`. - V

9. Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`. - V

Esperar não ter quebrado nenhuma parte testando. - V
*/
