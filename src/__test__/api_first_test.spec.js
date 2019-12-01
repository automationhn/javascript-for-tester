/* eslint-disable no-undef */
const assert = require('assert');
// const calculateAverageScore = require('../utils/calculateAverageScore');
import getAsync from '../utils/apiHelper';

const host = 'http://localhost:3000';

describe('test Get API', () => {
  describe('get teams', () => {
    it('should return right', async function () {
      const urlGetTeams = `${host}/teams`;

      const teams = await getAsync(urlGetTeams);

      assert.equal(teams.length, 6, 'The result should be matched');
    });
  });
});

