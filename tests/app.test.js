import request from 'supertest';
import app from '../index.js';

describe('GET /', () => {
  it('responds with "¡Hola Mundo!"',  () => {
    request(app).get('/')
    .expect(200)
    .then(response => {
      expect(response.text).toEqual('¡Hola Mundo!');
   })
  });
});

describe('GET /:name', () => {
  it('responds with "¡Hola, Test!"', async () => {
    const response = await request(app).get('/Test');
    expect(response.text).toEqual('¡Hola, Test!');
    expect(response.status).toBe(200);
  });
});