import Player from "./Player";
import Round from "./Round";

class Game {
  constructor(p1, p2, p3, data) {
    this.clues;
    this.player1 = new Player(p1);
    this.player2 = new Player(p2);
    this.player3 = new Player(p3);
    this.players = [];
    this.data = data;
    this.categories;
    this.round1Categories = [];
    this.round2Categories = [];
    this.finalRoundCategory;
    this.randomCategories = Object.entries(this.data.categories).sort(
        (a, b) => 0.5 - Math.random());
    this.round;
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  }
  
  generateCategoryNames() {
    this.categories = this.randomCategories.splice(0, 4);
    let categoryNames = this.categories.map(category => {
      return category[0]
    })
    return categoryNames
  }

  // generateRound1Clues() {

  // }

  // generateRound2Clues() {

  // }

  // generateFinalRoundClue() {

  // }

  startNewRound() {
    this.round = new Round(this.players);
  }

}

export default Game;