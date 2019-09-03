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
    this.categoryNames;
    this.clues;
    this.categoryIds;
    this.randomCategories = Object.entries(this.data.categories).sort(
      (a, b) => 0.5 - Math.random());
    this.roundCounter = 0;
    this.round;
    this.categoryObjects;

  };

  startGame() {
    this.generatePlayers();
    this.generateCategoryObjects();
    this.generateClues();
    this.startNewRound();
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  };


  generateCategoryObjects() {
    this.categories = this.randomCategories.splice(0, 4);
    this.categoryObjects = this.categories.map(category => {
      return {category: category[0], id: category[1]};
  });
    return this.categoryObjects
  }

  generateCategories() {
    this.categoryNames = this.categoryObjects.map(category => {
      return category.category
    })
  }

  generateClues() {
    this.categoryObjects.forEach(category => {
      this.clues = this.data.clues.filter(clue => {
        return clue.categoryId === category.id
      })
      // console.log('categoryObj', this.categoryObjects)
      // console.log('clues', this.clues)
      return this.clues
    })
}

  // generateRound2Clues() {

  // }

  // generateFinalRoundClue() {

  // }

  startNewRound() {
    this.roundCounter++;
    if (this.roundCounter < 2) {
      this.round = new Round(this.players, this.clues, this.categoryNames);
    };
    this.startFinalRound();
  };

  startFinalRound() {
// do this
  };

}

export default Game;