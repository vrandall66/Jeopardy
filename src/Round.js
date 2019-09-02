// round 1 will need to instantiate daily double once
// round 2 will have to instantiate daily double twice

class Round {
  constructor() {
    this.board;
    this.turnCounter = 0;
    this.clues = [];
    this.players = [];
    this.currentPlayer = 0;
    this.player1Score;
    this.player2Score;
    this.player3Score;
  }
}

export default Round;
//   takeTurn() {
//     this.turnCounter++
//     OR change players 
//   }

//   evaluateGuess() {
//     if answer includes ... then increase score 
//     && change player
//   }

//   endRound() {
//     this.turnCounter = 0
//   }

//   changePlayer() {
//     this.currentPlayer++
//   }

//   generateBoard() {

//   }




// }