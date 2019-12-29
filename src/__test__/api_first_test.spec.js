/* eslint-disable no-undef */
const assert = require('assert');
import configyml from 'config-yml'; 
import { getAsync, postAsync, patchAsync } from '../utils/apiHelper';
const host = configyml.host;

describe('test Get API', () => {
  describe('get teams', () => {
    it('should return right', async function () {
      // Arrange
      const urlGetTeams = `${host}/teams/v2`;

      // Action
      const teams = await getAsync(urlGetTeams);

      // Assert
      assert.equal(teams.length, 2, 'The result should be matched');
    });
  });
});

describe('test POST API', () => {
  describe('post new title', () => {
    it('should create new title', async function () {
      // Arrange
      const urlTitles = `${host}/titles`;
      const titleBeforeAdding = await getAsync(urlTitles);

      // Action
      const data = { short_title: 'HR', title: 'HR1' };
      const result = await postAsync(urlTitles, data);

      // Assert
      const titles = await getAsync(urlTitles);
      assert.equal(titles.length, titleBeforeAdding.length + 1, 'The number of titles must be consistent');
      assert.equal(result.status_code, 201, 'The status code must be 201');
    });

    it('should return error when the post data is not correct', async function () {
      // Arrange
      const urlTitles = `${host}/titles`;
      const titleBeforeAdding = await getAsync(urlTitles);

      // Action
      const data = { short_title: 'HR', title: 'Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title' };
      const result = await postAsync(urlTitles, data);

      // Assert
      const titles = await getAsync(urlTitles);
      assert.equal(titles.length, titleBeforeAdding.length, 'The number of titles must be consistent');
      assert.equal(result.status_code, 500, 'The status code must be 500');
    });
  });
});

describe('test PATCH API', () => {
  describe('update the existed title', () => {
    it('should update the existed title successfully', async function () {
      // Arrange
      const titleId = 1;
      const urlTitleById = `${host}/titles/${titleId}`;

      // Action
      const data = { short_title: 'SE', title: 'Software Engineer' };
      await patchAsync(urlTitleById, data);

      // Assert
      const actual = await getAsync(urlTitleById);
      console.log(actual);
      assert.equal(actual.title, data.title, 'The title must be matched ');
    });

    it('should return error when the id was not existed', async function () {
      // Arrange
      const titleId = 10000;
      const urlTitleById = `${host}/titles/${titleId}`;
      const titleBeforePatching = await getAsync(urlTitleById);

      // Action
      const data = { short_title: 'SE', title: 'Junior Software Engineer' };
      const result = await patchAsync(urlTitleById, data);

      // Assert
      const titleAfterPatching = await getAsync(urlTitleById);
      assert.deepEqual(titleAfterPatching, titleBeforePatching, `${JSON.stringify(result)}The title must be deeply matched`);
    });
  });
});

