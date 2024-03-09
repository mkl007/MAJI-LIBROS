import request from 'supertest';
import app from '../index.js'
import { server } from '../index.js';
import mongoose from 'mongoose'
import { faker } from '@faker-js/faker';
import User from '../models/user.model.js';
import Token from '../models/token.model.js';

const fullname = faker.person.fullName()
const unregisteredEmail = "mk1ultra1eb@gmail.com"
const existingEmail = "xofopeb186@bizatop.com"
const password = faker.internet.password()
const wrongPassword = 'wrongPassword'
const emailNotVerifiedYet = "hulda.stracke@ethereal.email"
const invalidEmail = faker.internet.email()


describe('POST / register', () => {

  let response;
  beforeAll(async () => {
    try {
      await mongoose.connection.dropDatabase();
      await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  });

  test('Should return 200 since the new user is now successfully registered, the email was sent. Only waiting for email verification at end of user', async () => {
    response = await request(app).post('/api/v1/register').send({ fullname, email: existingEmail, password })
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body.status).toEqual('SUCCESSFULL')
  })

  test('Should return 409 conflict, when email is already registered', async () => {
    response = await request(app).post('/api/v1/register').send({ fullname: fullname, email: existingEmail, password })
    expect(response.status).toBe(409);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body.msg).toEqual("Email already exist. Do you mean to login?")
  })

  it('Should return 404 and msg to indicate the email was not sent. The issue might be caused by: invalid email, lost connection or internal issue', async () => {
    response = await request(app).post('/api/v1/register').send({ fullname, password })
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body.message).toEqual('Error sending confirmation email. Email no found, double check email address')
  })

  it('Should return 500 and msg indicating the the operation was not done, registration process on went through.', async () => {
    response = await request(app).post('/api/v1/register').send({})
    expect(response.status).toBe(500);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body.message).toEqual("Internal Error. Please refresh the page and try again")
  })

  afterAll(async (done) => {
    await server.close(done);
    await mongoose.disconnect();
  });

})


