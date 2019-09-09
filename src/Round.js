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
    this.dailyDouble;
  }

  decrementScore(clue) {
    this.currentPlayer.score = this.currentPlayer.score - clue.pointValue
    this.changePlayer();
    // update DOM
    // boo-hoo
  }

  changePlayerWhenIncorrect() {
    this.assessIncorrectGuess('');
    this.changePlayer();
    return this.currentPlayer
  }

  incrementScore(clue) {
    this.currentPlayer.score += clue.pointValue;
    this.changePlayer();
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

  // dailyDouble() {
  //   this.dailyDouble = new DailyDouble(this.categories, this.clues);
  // }

}
export default Round;