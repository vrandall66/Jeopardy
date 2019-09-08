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
   this.clues.filter(clue => {
      let newScore;
      if (guess !== clue.answer) {
        newScore = this.currentPlayer.score = this.currentPlayer.score - clue.pointValue
      }
      return newScore
    })
    return this.currentPlayer.score
  // update DOM
  // boo-hoo
  }

  changePlayerWhenIncorrect() {
    this.assessIncorrectGuess('');
    this.changePlayer();
    return this.currentPlayer
  }

  assessCorrectGuess(guess) {
    this.clues.filter( clue => {
     if (clue.answer === guess) {
       this.currentPlayer.score += clue.pointValue
      }
      return this.currentPlayer.score
    })
    this.changePlayer();
    return this.currentPlayer
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