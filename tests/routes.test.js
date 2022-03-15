/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const supertest = require('supertest');
const app = require('../server/app');

describe('testing views pages', () => {
  test('Testing the loginPage', (done) => {
    supertest(app)
      .get('/login')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  test('Testing the signup page', (done) => {
    supertest(app)
      .get('/signup')
      .expect(200)
      .expect('Content-Type', /html/)

      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  test('Testing the profile page', (done) => {
    supertest(app)
      .get('/profile/:username')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  test('Testing the not found page', (done) => {
    supertest(app)
      .get('/bughere')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
describe('Testing get data user', () => {
  test('Testing get data user', (done) => {
    supertest(app)
      .get('/api/v1/userData')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
