import chai from 'chai';
import Round from '../src/Round';
import Player from '../src/Player';
const expect = chai.expect;

let round, p1, p2, p3;

beforeEach(() => {
  p1 = new Player('Vanessa');
  p2 = new Player('Naomi');
  p3 = new Player('Julian');
  round = new Round([p1, p2, p3]);

});

describe('Round', () => {
  it('should have players', () => {
    expect(round.players).to.eql(
      [p1, p2, p3]
    );
  });
  it('should have clues', () => {
    expect(round.clues).to.eql([{1:1}])
  })
});