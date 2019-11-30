/* eslint-disable no-undef */
const assert = require('assert');
// const calculateAverageScore = require('../utils/calculateAverageScore');
import calculateAverageScore from '../utils/calculateAverageScore';

describe('testCalculation', () => {
  describe('calculateAverageScore()', () => {
    it('should return right', () => {

      let score = { math: 9, word: 9, exel: 9 };
      var actual = calculateAverageScore(score);

      assert.equal(actual, 9, 'The result should be matched');
    });
  });
});
