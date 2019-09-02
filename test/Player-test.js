import chai from 'chai';
import Player from '../src/Player';
const expect = chai.expect;

let player;

beforeEach(() => {
  player = new Player('Vanessa');
});

describe('Player', () => {
  it('should have a name', () => {
    expect(player.name).to.equal('Vanessa');
  });

  it('should have a score', () => {
    expect(player.score).to.equal(0);
  });
});