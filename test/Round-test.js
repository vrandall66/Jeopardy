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

  it.only('should decrement the current player\'s score and change player' , () => {
    expect(round.assessIncorrectGuess('hi')).to.equal(-400)
  })

  it('should return true if the guess matches the clue answer', () => { 
    expect(round.returnCorrectGuess('yellow journalism')).to.eql('yellow journalism')
  });

  it('should start each round at Player 1', () => {
    expect(round.turnCounter).to.eql(0);
    expect(round.currentPlayer).to.eql(round.players[0]);
  })

  it('should be able to change to player 2', () => {
    expect(round.changePlayer()).to.eql({ name: 'Naomi', score: 0 });
    expect(round.turnCounter).to.eql(1);
  })

  it('should be able to change to player 3', () => {
    round.changePlayer();
    expect(round.changePlayer()).to.eql({ name: 'Julian', score: 0 });
    expect(round.turnCounter).to.eql(2);
  })

  it('should reset player turns', () => {
    round.changePlayer();
    round.changePlayer();
    expect(round.resetPlayerTurns()).to.eql({ name: 'Vanessa', score: 0 })
    expect(round.turnCounter).to.eql(0);
<<<<<<< HEAD
  });
=======
  })
>>>>>>> refs/remotes/origin/master
});