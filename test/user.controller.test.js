import request from 'supertest';
import app from '../index.js'
import { server } from '../index.js';
import mongoose from 'mongoose'
import { faker } from '@faker-js/faker';
import User from '../models/user.model.js';
import Token from '../models/token.model.js';

const fullname = faker.person.fullName()
const unregisteredEmail = "mk1ultra1eb@gmail.com"
const existingEmail = "fay.lebsack@ethereal.email"
const password = faker.internet.password()
const wrongPassword = 'wrongPassword'
const emailNotVerifiedYet = "fifoto2648@artgulin.com"
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


})

describe('GET / confirm/:token', () => {

  it('should return 200 success if email is verified and token confirmation token deleted', async () => {
    const userInfo = await User.findOne({ email: existingEmail })
    const token = await Token.findOne({ userId: userInfo._id })
    const tokenString = token.token;
    const response = await request(app).get(`/api/v1/confirm/${tokenString}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('email verified');
  });

  it('should return 502 bad request if token is not found since the email has been verified already', async () => {
    const userInfo = await User.findOne({ email: existingEmail })
    const token = await Token.findOne({ userId: userInfo._id })
    const response = await request(app).get(`/api/v1/confirm/${token}`);
    expect(response.status).toBe(502);
    expect(response.body.message).toBe('Error while verifying or email already verified');
  });

})

describe('POST /login', () => {

  it('should return 404 if Email was not found.', async () => {
    const response = await request(app).post(`/api/v1/login`).send({ email: unregisteredEmail, password: password })
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('User no found with email provided, please review the email or register your email');
  });


  it('should return 200, user logged in.', async () => {
    const response = await request(app).post(`/api/v1/login`).send({ email: existingEmail, password: password })
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Logged in");
  });


  it('should return 400, Email and password correct but account not verified. Need to be confirmed on email link', async () => {
    await request(app).post('/api/v1/register').send({ fullname, email: emailNotVerifiedYet, password })
    const response = await request(app).post(`/api/v1/login`).send({ email: emailNotVerifiedYet, password: password })
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email not verified. Please check your Mail box to verify your email or register your account");
  });

  // afterAll(function (done) {
  //   server.close(done);
  //   mongoose.disconnect()
  //   // process.exit(0); // Exit with code 0 upon successful completion

  // });
})

describe('POST /logout', () => {

  it('should return 200 for logout.', async () => {
    const response = await request(app).post(`/api/v1/logout`).send({ email: existingEmail, password: password })
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Loggin out...');
  });



  afterAll(function (done) {
    server.close(done);
    mongoose.disconnect()
    // process.exit(0); // Exit with code 0 upon successful completion
  });
})

// describe('POST / reset_password', () => {

//   it('should return 200 for logout.', async () => {
//     const response = await request(app).post(`/api/v1/reset_password`).send({ email: unregisteredEmail, password: password })
//     expect(response.status).toBe(404);
//     expect(response.body.message).toBe('Email not registered. Would you like to register your account?');
//   });



//   afterAll(function (done) {
//     server.close(done);
//     mongoose.disconnect()
//     // process.exit(0); // Exit with code 0 upon successful completion

//   });
// })

