// round 1 will need to instantiate daily double once
// round 2 will have to instantiate daily double twice

class Round {
  constructor(players, clues, categories) {
    this.turnCounter = 0;
    this.clues = clues;
    this.categories = categories;
    this.players = players;
    this.currentPlayer = this.players[0];
    this.player1Score;
    this.player2Score;
    this.player3Score;
  }

  //   evaluateGuess(guess) {
  // deal with formatting the user input aka guess
  // if user guess is wrong, incorrectGuess();
  // if user guess is right, correctGuess()
  //   }


  assessIncorrectGuess(guess) {
    const result = this.clues.filter(clue => {
      let newScore;
      if (guess !== clue.answer) {
        newScore = this.currentPlayer.score = this.currentPlayer.score - clue.pointValue;
        console.log('new score', newScore);
        return newScore;

      }
      this.changePlayer();
      console.log(typeof(newScore))
      console.log('newScore 2.0', newScore);
      console.log('result', result);
    })
  // update DOM
  // boo-hoo
  }

  returnCorrectGuess(guess) {
   let matchingClue = this.clues.filter( clue => {
     if (clue.answer === guess) {
       return clue
     } 
    })
      this.changePlayer();
      return matchingClue[0].answer;
      //this.curentPlayer.score += matchingClue[0].pointValue
  // update DOM
  // YIPEE!!!
  }

  

  //   endRound() {
  //     this.turnCounter = 0
  //   }

  changePlayer() {
    if (this.currentPlayer === this.players[0]) {
      this.turnCounter++;
      return this.currentPlayer = this.players[1];
    }
    if (this.currentPlayer === this.players[1]) {
      this.turnCounter++;
      return this.currentPlayer = this.players[2]
    }
    if (this.currentPlayer === this.players[2]) {
      this.resetPlayerTurns();
    }
  }

  resetPlayerTurns() {
    this.turnCounter = 0;
    return this.currentPlayer = this.players[0]
  }

  //   generateBoard() {
  // 
  //   }

}
export default Round;