import express from "express";
import { randomFillSync } from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import User from "../models/user.model.js";
import Token from "../models/token.model.js";

export const registerUser = async (req, res) => {
  try {
    const verifyEmail = await User.findOne({ email: req.body.email });
    if (verifyEmail)
      return res.json({ msg: "Email already exist. Do you want to login?" });
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    // // send mail
    const tokenBytes = randomFillSync(Buffer.alloc(16));
    const tok = tokenBytes.toString("hex");
    const token = new Token({ userId: newUser._id, token: tok });

    const verificationLink = `${process.env.BACKEND_URI}/confirm/${token.token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      port: 587,
      secure: false,
    });

    // confirm registration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: "MAJI BOOKS ",
      html: `<div>
        <p>Welcome, ${newUser.fullname}! 🎉</p>
        <p>We are thrilled to have you as a new member of our community. 🌟</p>
        <p>Your journey with our app is about to begin, and we can't wait to share exciting experiences together. 🚀</p>
        <p>To get started, please confirm your email address by clicking the link below:</p>
        <a href="${verificationLink}">Confirm your account here</a>
        <p>If you have any questions or need assistance, feel free to reach out to our support team. 🤝</p>
        <p>Thank you for choosing our app! 🙌</p>
        <p>Best regards, 🌈</p>
        <p>The Your App Team 🚀</p>
      </div>`,
    };

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({
          status: "FAILED",
          message: "Error :( Email not found. Please check the email provided",
        });
      } else {
        await newUser.save();
        await token.save();
        return res.json({
          message: "Please check your mail box to validate your account",
          token,
          newUser,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internet Error. Please refresh the page and try again" })
  }
};

export const emailTokenConfimation = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });
    await User.updateOne({ _id: token.userId }, { $set: { verified: true } });
    await Token.findByIdAndDelete(token._id)
    res.json({ msg: "email verified" })
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: 'Error while verifying', Token })
  }
}

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.json({ msg: 'User no found with email provided. Please review the email.' })
    } else if (user && user.verified) {
      const paswrdDeshash = bcrypt.compareSync(password, user.password)
      if (!paswrdDeshash) return res.json({ msg: "Wrong password" })
      const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: '1800s' })
      res.cookie('token', token, {
        httpOnly: false,
        sameSite: 'none',
        secure: true
      })
      res.json({ msg: "Logged in", user })
    } else {
      res.json({ msg: "Email not verified. Please check your Mail box or register your account" })
    }
  } catch (error) {
    console.log(error)
  }
}

export const logout = async (req, res) => {
  try {
    res.cookie('token', null, {
      expires: new Date(0)
    })
    return res.status(200).json({ msg: 'Loggin out...' })
  } catch (error) {
    console.log("Error", error)
    return res.status(500).send("Internal Error")
  }
}

export const passwordReset = async (req, res) => {
  try {
    // verify the email
    const verifyEmail = await User.findOne({ email: req.body.email })
    if (!verifyEmail) return res.json({ msg: 'Email not registered. Would you like to register your account?' })
    const tokenBytes = randomFillSync(Buffer.alloc(16))
    const tok = tokenBytes.toString('hex')

    const token = new Token({ userId: verifyEmail._id, token: tok });
    const link = `${process.env.BACKEND_URI}/password_reset/${token.token}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: verifyEmail.email,
      subject: "MAJI BOOKS ",
      html: `<div><p><b>${verifyEmail.fullname}</b>, a password reset has been requested. 
             Click on the link below to reset your password
             </p><a href="${link}">Click to reset the password</a></div>`
    }

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        return res.status(500).json({ status: "FAILED", message: "Email operation failed" });
      } else {
        //  await newUser.save()
        await token.save()
        return res.json({ message: "Password reset requested. Please check your email " });
      }
    });


  } catch (error) {
    console.log('error while resetting the password! ', error)
  }
}

export const passwordResetHandler = async (req, res) => {
  try {
    const { password, passwordConfimation } = req.body
    const token = await Token.findOne({ token: req.params.token });
    const findUser = await User.findOne({ _id: token.userId })
    if (!findUser) return res.json({ msg: "user/email no exists" })
    const paswrdDeshash = bcrypt.compareSync(password, findUser.password)
    if (paswrdDeshash) return res.json({ msg: 'This password has been used before. Try different password.' })
    // 2. verify if the password confirmation is the same 
    if (password !== passwordConfimation) return res.json({ msg: 'Password no match, please enter the same password' })
    const passwordToSave = await bcrypt.hash(password, 10)
    await User.updateOne({ _id: token.userId }, { $set: { password: passwordToSave } });
    await Token.findByIdAndDelete(token._id)
    console.log('Password successfully reset')
    res.json({ msg: "Your password has been changed. Log into your account" })
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: 'Error while verifying', error })
  }

}