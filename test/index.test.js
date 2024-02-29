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

// testin with endopointos receiving data from the body
// describe(' POST / testingdata', () => {
//   let response;
//   const userTest = {
//     name: 'maikel',
//     email: 'maikel@maikel.com',
//     password: 'maikel'
//   }
//   const emailTest = 'maikel@maikel.com'

//   beforeEach(async () => {
//     response = await request(app).post('/api/v1/testingdata').send({ email: emailTest, name: userTest.name })
//   })

//   it('Should return code 200 and msg saying successful', async () => {
//     expect(response.status).toEqual(200);
//     expect(response.headers['content-type']).toContain('json');
//     expect(response.body.email).toBe(emailTest)
//     expect(response.body.name).toBe(userTest.name)
//     console.log(emailTest)
//   })
//   // afterAll(function (done) {
//   //   server.close(done);
//   //   mongoose.disconnect()
//   // });
// });

// Testing with DBs
describe('POST/testingdata with DBs', () => {
  // const emailTest = 'maikel@maikel.com'
  const emailTest = 'keron12404@lendfash.com'
  let response;
  beforeEach(async () => {
    response = await request(app).post('/api/v1/testingdata').send({ email: emailTest })
    mongoose.connect(process.env.MONGO_URI)
  }, 3180)

  it('Should return 200 and the user found on database', async () => {
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body.email).toBe(emailTest)
  })

  it('Should return 404 user no found', async () => {
    expect(response.status).toEqual(404);
    expect(response.headers['content-type']).toContain('json')

  })
  it('Should return 500 internal error', async () => {
    expect(response.status).toEqual(500);
    expect(response.headers['content-type']).toContain('json')
    expect(response.body).toEqual({ "error": {}, "msg": "failure" })
  })

  afterAll(function (done) {
    server.close(done);
    mongoose.disconnect()
  });
})