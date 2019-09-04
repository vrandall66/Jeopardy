// round 1 will need to instantiate daily double once
// round 2 will have to instantiate daily double twice

class Round {
  constructor(players, clues, categories) {
    this.turnCounter = 0;
    this.clues = clues;
    this.categories = categories;
    this.players = players;
    this.currentPlayer = null;
    this.player1Score;
    this.player2Score;
    this.player3Score;
  }

//   evaluateGuess(guess) {
// deal with formatting the user input aka guess
// if user guess is wrong, incorrectGuess();
// if user guess is right, correctGuess()
//   }

  // incorrectGuess() {
  // decrement score
  // update DOM
  // boo-hoo
  // }

  // correctGuess() {
  // increment score
  // update DOM
  // YIPEE!!!
  // }

  //   endRound() {
    //     this.turnCounter = 0
  //   }

  // changePlayer() {
    // at the beginning of each round
    // this.currentPlayer = this.players[0];
    // At the end of a turn
    // Change player will be called
    // this.currentPlayer++ ??
  // }

  //   generateBoard() {
// 
  //   }

}
  export default Round;