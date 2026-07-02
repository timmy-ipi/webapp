const request = require('supertest');
const { calcul, app } = require('./app');

test('2 + 3 = 5', () => {
  expect(calcul(2, 3)).toBe(5);
});

test('GET / retourne 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('GET /health retourne OK', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('OK');
});
