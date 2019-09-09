import Player from "./Player";
import Round from "./Round";
import domUpdates from "./domUpdates";
import FinalRound from "./FinalRound";

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
    this.dailyDouble;
    this.roundCounter = 0;
    this.round;
    this.gameData = [];
    this.finalRound;
  };

  startGame() {
    this.generatePlayers();
    this.generateCategoryNamesAndIds();
    this.generateCategories();
    this.getGameData();
    this.startNewRound();
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
    return this.categoryNamesAndIds;
  };

  generateCategories() {
    this.categoryNames = this.categoryNamesAndIds.map(category => {
      let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
      return category.category.replace(rex, '$1$4 $2$3$5').toUpperCase();
    });
    return this.categoryNames;
  };

  getGameData() {
    this.gameData = this.data && this.categoryNamesAndIds.map(cat => {
      const clues = this.getCatClues(cat.id);
      console.log(cat.id)
      return ({
        id: cat.id,
        name: cat.category,
        clues,
      });
    });
    domUpdates.assignClues(this.gameData);
  };

  getCatClues(id) {
    const clue1Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 100);
    const clue2Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 200);
    const clue3Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 300);
    const clue4Index = this.data.clues.findIndex(clue => clue.categoryId === id && clue.pointValue === 400);
    this.clues = {
      100: {
        question: this.data.clues[clue1Index].question,
        answer: this.data.clues[clue1Index].answer,
        isDailyDouble: false
      },
      200: {
        question: this.data.clues[clue2Index].question,
        answer: this.data.clues[clue2Index].answer,
        isDailyDouble: false
      },
      300: {
        question: this.data.clues[clue3Index].question,
        answer: this.data.clues[clue3Index].answer,
        isDailyDouble: false
      },
      400: {
        question: this.data.clues[clue4Index].question,
        answer: this.data.clues[clue4Index].answer,
        isDailyDouble: false
      },
    };
    return this.clues;
  };

  generateDailyDouble() {
    let randomIndex = Math.floor(Math.random() * (3 - 0)) + 0
    let randomClues = Object.values(this.clues)
    this.dailyDouble = randomClues[randomIndex].isDailyDouble = true
    console.log(this.dailyDouble)
    return this.dailyDouble;
  };

  startNewRound() {
    this.roundCounter++;
    if (this.roundCounter < 2) {
      this.round = new Round(this.players, this.clues, this.categoryNames)
    }
    this.startFinalRound();
  };

  startFinalRound() {
    // this.finalRound = new FinalRound(category, clue);
  };

}

export default Game;