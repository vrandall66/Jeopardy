import chai from 'chai';
import Round from '../src/Round';
import Player from '../src/Player';
const expect = chai.expect;

let round, p1, p2, p3;

beforeEach(() => {
  p1 = new Player('Vanessa');
  p2 = new Player('Naomi');
  p3 = new Player('Julian');
  round = new Round([p1, p2, p3], [{
    question: 'An ink used in a newspaper cartoon in the 1890s gave us this term for sensationalist reporting',
    pointValue: 400,
    answer: 'yellow journalism',
    categoryId: 1
  }], ['lifeSciences']);
});

describe('Round', () => {
  it('should have players', () => {
    expect(round.players).to.eql(
      [p1, p2, p3]
    );
  });

  it('should have clues', () => {
    expect(round.clues).to.eql([{
      question: 'An ink used in a newspaper cartoon in the 1890s gave us this term for sensationalist reporting',
      pointValue: 400,
      answer: 'yellow journalism',
      categoryId: 1
    }]);
  });

  it('should have categories', () => {
    expect(round.categories).to.eql(['lifeSciences'])
  });

  it.only('should return true if the guess matches the clue answer', () => { 
    expect(round.returnCorrectGuess('yellow journalism')).to.eql('yellow journalism')
  });
});