import chai from 'chai';
import Game from '../src/Game';
import data from '../sampleData/sampleData';
const expect = chai.expect;

let game;

beforeEach(() => {
  game = new Game('Vanessa', 'Naomi', 'Julian', data);
});

describe('Game', () => {
  it('should have players', () => {
    expect(game.generatePlayers()).to.eql([
      { name: 'Vanessa', score: 0 },
      { name: 'Naomi', score: 0 },
      { name: 'Julian', score: 0 }
    ]);
  });

  it('should generate category names', () => {
    expect(game.generateCategoryObjects()).to.eql([{
      1:1
    }, {
      2:2
    }, {
      3:3
    }, {
      4:4
    }]);
  });

  it('should generate clues for the given categories', () => {
    game.generateCategoryNamesAndIds();
    expect(game.generateClues(100)).to.eql('');
  });

  it('should generate the category name', () => {
    game.generateCategoryNamesAndIds();
    expect(game.generateCategories()).to.eql('')
  });

  it('should generate clues given a point value', () => {
    game.generateCategoryNamesAndIds();
    expect(game.generateClues(100)).to.eql([1,2,3,4]);
  });

  it('should sort the clues by category ID', () => {
    game.generateCategoryNamesAndIds();
    expect(game.sortCategories()).to.eql('')
  });

  it('should get Game Data', () => {
    expect(game.getGameData()).to.eql('')
  });

  it.only('should generate a random Daily Double', () => {
    game.generateCategoryNamesAndIds();
    game.getGameData();
    game.getCatClues();
    expect(game.generateDailyDouble()).to.eql('');
  });
});