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
  }

  
  incrementScore(clue) {
    this.currentPlayer.score += clue.pointValue;
    this.changePlayer();
  }


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

}
export default Round;