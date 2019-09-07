import Player from "./Player";
import Round from "./Round";
import domUpdates from "./domUpdates";

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
    this.gameData = [];
  };

  startGame() {
    this.generatePlayers();
    this.generateCategoryNamesAndIds();
    this.generateCategories();
    this.getGameData();
    // this.generateClues(100);
    // this.sortClues();
    // this.generateClues(200);
    // this.sortClues();
    // this.generateClues(300);
    // this.sortClues();
    // this.generateClues(400);
    // this.sortClues();
    // this.startNewRound();
  };

  generatePlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  };

  generateCategoryNamesAndIds() {
    this.categories = this.randomCategories.splice(0, 4);
    this.categoryNamesAndIds = this.categories.map(category => {
      return { category: category[0], id: category[1] };
    });
    console.log(this.categoryNamesAndIds);
    return this.categoryNamesAndIds;
  };

  generateCategories() {
    this.categoryNames = this.categoryNamesAndIds.map(category => {
      let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
      return category.category.replace(rex, '$1$4 $2$3$5').toUpperCase();
    });
    return this.categoryNames;
  }

  // generateClues(pointVal) {
  //   this.categoryNamesAndIds.forEach(category => {
  //     let clues = this.data.clues.filter(clue => {
  //       return clue.categoryId === category.id;
  //     });
  //     let pointValue = clues.find(clue => {
  //       return clue.pointValue === pointVal;
  //     });
  //     this.cluesByCategory.push(pointValue);
  //     return this.cluesByCategory;
  //   });
  // }

  getGameData() {
    this.gameData = this.data && this.categoryNamesAndIds.map(cat => {
      const clues = this.getCatClues(cat.id);
      return ({
        id: cat.id,
        name: cat.category,
        clues
      });
    })
    console.log('line 84', this.gameData);
    domUpdates.assignClues(this.gameData);
  }

  getCatClues(id) {
    const clue1Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 100);
    const clue2Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 200);
    const clue3Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 300);
    const clue4Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 400);

    console.log(this.data.clues[clue1Index]);

    const result = ({
      100: {
        question: this.data.clues[clue1Index].question,
        answer: this.data.clues[clue1Index].answer
      },
      200: {
        question: this.data.clues[clue2Index].question,
        answer: this.data.clues[clue2Index].answer
      },
      300: {
        question: this.data.clues[clue3Index].question,
        answer: this.data.clues[clue3Index].answer
      },
      400: {
        question: this.data.clues[clue4Index].question,
        answer: this.data.clues[clue4Index].answer
      },
    });
    // I THINK vv this vv was causing reload issues
    // Probably 20% of the time, functions would have undefined data
    // this.data.clues.splice(clue1Index, 1);
    // this.data.clues.splice(clue2Index, 2);
    // this.data.clues.splice(clue3Index, 3);
    // this.data.clues.splice(clue4Index, 4);

    return result;
  }

  // sortCategories() {
  //   this.cluesByCategory.sort((a, b) => {
  //     return a.categoryId - b.categoryId;
  //   });
  //   return this.cluesByCategory;
  // };

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