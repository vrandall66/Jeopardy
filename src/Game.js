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
    this.categoryIds;
    this.randomCategories = Object.entries(this.data.categories).sort(
      (a, b) => 0.5 - Math.random());
    this.roundCounter = 0;
    this.round;

  };

  startGame() {
    this.generatePlayers();
    this.generateCategoryNames();
    this.generateClues();
    this.startNewRound();
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  };

  generateCategoryNames() {
    this.categories = this.randomCategories.splice(0, 4);
    let categoryNames = this.categories.map(category => {
      return category[0];
    });
    // this.generateClues();
    return categoryNames;
  };

  generateClues() {
    let match
    this.categoryIds = this.categories.map(categoryId => {
      return categoryId[1];
    });
    console.log(this.categoryIds)
    return this.categoryIds.reduce((acc, id) => {
      this.data.clues.filter(clue => {
        match = clue.categoryId === id
      });
      acc.push(match)
      console.log(acc)
    }, []);
  }

  // generateRound2Clues() {

  // }

  // generateFinalRoundClue() {

  // }

  startNewRound() {
    this.roundCounter++;
    if (this.roundCounter < 2) {
      this.round = new Round(this.players);
    };
    this.startFinalRound();
  };

  startFinalRound() {

  };

}

export default Game;