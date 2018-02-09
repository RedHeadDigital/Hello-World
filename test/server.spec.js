import expect from 'expect';
import request from 'supertest';

import app from '../src/server';

describe('GET root API', () => {
  it('should return a 200 status', () => {
    request(app)
      .get('/')
      .expect(200);
  });
});
