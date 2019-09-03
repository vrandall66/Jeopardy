// round 1 will need to instantiate daily double once
// round 2 will have to instantiate daily double twice

class Round {
  constructor(players) {
    // this.board = game.board;
    this.turnCounter = 0;
    this.clues = [];
    this.players = players;
    this.currentPlayer = 0;
    this.player1Score;
    this.player2Score;
    this.player3Score;
  }

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

  changePlayer() {
    // at the beginning of each round
    // this.currentPlayer = this.players[0];
    // At the end of a turn
    // Change player will be called
    // ?? this.currentPlayer++ ??
  }

  //   generateBoard() {

  //   }

}
  export default Round;