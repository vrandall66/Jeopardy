import chai from 'chai';
import FinalRound from '../src/FinalRound';
import data from '../sampleData/sampleData';
const expect = chai.expect;

let finalRound;

beforeEach(() => {
  finalRound = new FinalRound(category, clue);
});

describe('FinalRound', () => {
  it('should be an instance of Final Round', () => {
    expect(finalRound).to.be.an.instanceOf(FinalRound);
  })
});