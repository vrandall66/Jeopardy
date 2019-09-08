class DailyDouble {
  constructor(category, clue) {
    this.category = category;
    this.clue = clue;
    this.wager = 0;
  }

  evaluateGuess() {
    //if answer is correct, player.score = this.wager + player.score
    //else player.score = player.score - this.wager
  }

  stopNextGuess() {
    // will not move on to the next player 
  }
}