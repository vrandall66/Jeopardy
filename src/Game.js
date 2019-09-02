import Player from "./Player";

class Game {
  constructor(p1, p2, p3, data) {
    this.clues;
    this.player1 = new Player(p1);
    this.player2 = new Player(p2);
    this.player3 = new Player(p3);
    this.players = [];
    this.data = data;
    this.categories = [];
    this.round1Categories = [];
    this.round2Categories = [];
    this.finalRoundCategory;
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  }

  shuffleCategories() {
    // How do we write a test for a randomized array?? Do we not?
    const categories = Object.values(this.data.categories);
    this.categories = categories.sort(() => Math.random() - 0.5);
    return this.categories;
  }

  generateRound1Categories() {
   this.round1Categories = this.categories.splice(0, 4);
   console.log('Round 1', this.round1Categories);
  }

  generateRound2Categories() {
    this.generateRound1Categories();
    console.log('Round 2', this.round2Categories = this.categories.splice(0, 4));
  }

  generateFinalRoundCategory() {
    this.generateRound2Categories();
    console.log('Final Round', this.finalRoundCategory = this.categories.splice(0, 1));
  }
  
  generateCategoryNames() {

  }

  generateRound1Clues() {

  }

  generateRound2Clues() {

  }

  generateFinalRoundClue() {

  }

}

export default Game;