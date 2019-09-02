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
});