import request from 'supertest';
import app from '../index.js'
import { server } from '../index.js';
import mongoose from 'mongoose'




describe('POST /test', function () {
  let response;
  beforeEach(async () => {
    response = (await request(app).post('/test'));
  })

  // test that /test endpoint works 
  it('Should response with a 200 status code', async () => {
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toContain('json');
  });



  // afterAll(function (done) {
  //   server.close(done);
  //   mongoose.disconnect()
  // });

});