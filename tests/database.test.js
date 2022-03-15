/* eslint-disable no-undef */
const connection = require('../server/database/config/connection');
const dbBuild = require('../server/database/config/build');
const { addUser } = require('../server/database/queries');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

test(' register first  user', () => addUser('test', 'test@gmail.com', '12345asdasfda6', 'http:dasd').then((data) => {
  expect(data.rows.length).toBe(1);
  expect(data.rows[0].id).toBe(1);
}));
