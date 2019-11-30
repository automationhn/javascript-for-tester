/* eslint-disable no-undef */
const assert = require('assert');
import calculateAverageScore from '../utils/calculateAverageScore';

describe('testCalculation', () => {
  describe('calculateAverageScore()', () => {
    it('should return right 1', () => {
      // A - A - A
      // Arrange
      let score = { math: 9, word: 9, excel: 9 };
      const expect = 9;

      // Action
      const actual = calculateAverageScore(score);

      // Assert
      assert.equal(actual, expect, 'The result should be matched');
    });

    it('should return error when the expected average score is not equal', () => {
      // Arrange
      let score = { math: 9, word: 9, excel: 9 };
      const expect = 10;

      // Action
      const actual = calculateAverageScore(score);

      // Assert
      assert.notEqual(actual, expect, 'The result should not be matched');
    });

    it('should return message when missing one of score', () => {
      // Arrange      
      let score = { word: 9, excel: 9 };
      const expect = 0;

      // Action
      const actual = calculateAverageScore(score);

      // Assert
      assert.equal(actual, expect, 'The data is not matched');
    });

  });
});
