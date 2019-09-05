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

  incorrectGuess() {
    return this.clues.forEach( clue => {
      if (clue.answer !== guess) {
        console.log("here!!!", true)
        console.log("points", this.player1Score -= clue.pointValue)
        return false
      } 
     })
  // decrement score
  // update DOM
  // boo-hoo
  }

  returnCorrectGuess(guess) {
   let matchingClue = this.clues.filter( clue => {
     if (clue.answer === guess) {
       return clue
     } 
    })
      return matchingClue[0].answer;
      //this.curentPlayer.score += matchingClue[0].pointValue
  // update DOM
  // YIPEE!!!
  }

  

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