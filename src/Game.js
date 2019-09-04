import Player from "./Player";
import Round from "./Round";
import domUpdates from "../src/domUpdates";
class Game {
  constructor(p1, p2, p3, data) {
    this.player1 = new Player(p1);
    this.player2 = new Player(p2);
    this.player3 = new Player(p3);
    this.players = [];
    this.data = data;
    this.randomCategories = Object.entries(this.data.categories).sort(
      (a, b) => 0.5 - Math.random());
    this.categories;
    this.categoryNamesAndIds;
    this.categoryNames;
    this.clues;
    this.cluesByCategory = [];
    this.roundCounter = 0;
    this.round;
  };

  startGame() {
    this.generatePlayers();
    this.generateCategoryNamesAndIds();
    this.generateCategories();
    this.generateClues(100);
    domUpdates.firstRowClues(this.cluesByCategory);
    this.generateClues(200);
    domUpdates.firstRowClues(this.cluesByCategory);
    this.generateClues(300);
    domUpdates.firstRowClues(this.cluesByCategory);
    this.generateClues(400);
    domUpdates.firstRowClues(this.cluesByCategory);
    // this.startNewRound();
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  };

  generateCategoryNamesAndIds() {
    this.categories = this.randomCategories.splice(0, 4);
    this.categoryNamesAndIds = this.categories.map(category => {
      return {category: category[0], id: category[1]};
  });
    return this.categoryNamesAndIds;
  };

  generateCategories() {
    this.categoryNames = this.categoryNamesAndIds.map(category => {
    let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
      return category.category.replace(rex, '$1$4 $2$3$5').toUpperCase();
    });
    return this.categoryNames;
   }

  generateClues(pointVal) {
    this.categoryNamesAndIds.forEach(category => {
    let clues = this.data.clues.filter(clue => {
        return clue.categoryId === category.id;
      });
      let pointValue = clues.find(clue => {
        return clue.pointValue === pointVal;
      });
      this.cluesByCategory.push(pointValue);
      return this.cluesByCategory
    });
  };

  sortCategories() {
    this.cluesByCategory.sort((a, b) => {
      a.categoryId - b.categoryId;
    });
    // console.log(this.cluesByCategory)
    return this.cluesByCategory;
  };


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