import request from 'supertest';
import app from '../index.js'
import { server } from '../index.js';
import mongoose from 'mongoose'
import { faker } from '@faker-js/faker';
import User from '../models/user.model.js';
import Token from '../models/token.model.js';

const fullname = faker.person.fullName()
const unregisteredEmail = "mk1ultra1eb@gmail.com"
const existingEmail = "fipef83364@cmheia.com"
const password = faker.internet.password()
const wrongPassword = 'wrongPassword'
const emailNotVerifiedYet = "kade.okuneva2@ethereal.email"
const invalidEmail = faker.internet.email()
const newPassword = faker.internet.password()
const passwordConfimation = faker.internet.password()

describe('POST / register', () => {
  let response;
  beforeAll(async () => {
    try {
      // Clean the database
      await mongoose.connect(process.env.MONGO_URI);
      await User.deleteMany();
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

})

describe('POST /logout', () => {

  it('should return 200 for logout.', async () => {
    const response = await request(app).post(`/api/v1/logout`).send({ email: existingEmail, password: password })
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Loggin out...');
  });
})

describe('POST /reset_password', () => {

  it('should return 404 to email no register on the account.', async () => {
    const response = await request(app).post(`/api/v1/reset_password`).send({ email: unregisteredEmail, password: password })
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Email not registered. Would you like to register your account?');
  });

  it('should return 404, failed sending email', async () => {
    const response = await request(app).post(`/api/v1/reset_password`).send({ email: invalidEmail, password: password })
    expect(response.status).toBe(404);
  });

  it('should return 200, password reset email sent', async () => {
    const response = await request(app).post(`/api/v1/reset_password`).send({ email: existingEmail, password: password })
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Password reset requested. Please check your email ")
  });

  afterAll(function (done) {
    server.close(done);
    mongoose.disconnect()

  });
})

describe('POST /password_reset/:token  => Handler', () => {
  let response;
  beforeAll(async () => {
    try {
      // Clean the database
      await mongoose.connect(process.env.MONGO_URI);
      // await User.deleteMany();
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  });

  it('should return 404, email no found.', async () => {
    const token = '65f4693b762f09125129d7b9'
    const response = await request(app).post(`/api/v1/password_reset/${token}`).send({ password, passwordConfimation })
    expect(response.status).toBe(404);
    // expect(response.body.message).toBe("user/email no exists");
    console.log(response.status)
    console.log(response.body)
  });

  it('should return 200, password successfully reset', async () => {
    const token = '65f4693b762f09125129d7b9'
    const response = await request(app).post(`/api/v1/reset_password/${token}`).send({ password: newPassword, passwordConfimation: passwordConfimation })
    expect(response.status).toBe(200);
  });

  afterAll(function (done) {
    server.close(done);
    mongoose.disconnect()

  });
})