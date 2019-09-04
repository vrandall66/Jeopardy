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

  it.skip('should generate category names', () => {
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

  it.skip('should generate clues for the given categories', () => {
    game.generateCategoryObjects();
    expect(game.generateClues()).to.eql('');
  });

  it.skip('should generate clues given a category ID', () => {
    game.generateCategoryObjects();
    expect(game.generateClues()).to.eql('');
  });

  it.skip('should generate the category name', () => {
    game.generateCategoryObjects();
    expect(game.generateCategories()).to.eql('')
  });

  it('should split category name strings at end of word', () => {
    game.splitCategoryNames();
    expect(game.splitCategoryNames()).to.eql('');
  })
  
});