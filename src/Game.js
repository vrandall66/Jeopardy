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
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  }

  // generateClues() {

  // }
  shuffleCategories() {
    // How do we write a test for a randomized array?? Do we not?
    const categories = Object.values(this.data.categories);
    this.categories = categories.sort(() => Math.random() - 0.5);
    return this.categories;
  }
}

export default Game;