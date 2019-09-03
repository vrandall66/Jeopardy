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

  it.skip('should have categories', () => {
    expect(game.shuffleCategories()).to.eql('')
  });

  it('should generate categories for Round 1',() => {
    expect(game.generateRound1Categories()).to.eql('');
  });

  it('should generate categories for Round 2', () => {
    expect(game.generateRound2Categories()).to.eql('');
  });

  it('should generate a category for the final round', () => {
    expect(game.generateFinalRoundCategory()).to.eql('');
  });

  it('should generate category names', () => {
    expect(game.generateCategoryNames()).to.eql('');
  });
});