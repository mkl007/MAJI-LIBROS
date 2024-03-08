import express from "express";
import { randomFillSync } from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import User from "../models/user.model.js";
import Token from "../models/token.model.js";
import { sendConfirmationEmail } from "../utils/email.utils.js";


export const testingNow = async (req, re) => {
  try {
    const email = req.body.email
    return res.status(200).json({ email })
  } catch (error) {
    return res.status(500).json({ error, msg: 'no working' })
  }
}

export const registerUser = async (req, res) => {
  try {
    const verifyEmail = await User.findOne({ email: req.body.email });
    if (verifyEmail)
      return res.status(409).json({ msg: "Email already exist. Do you mean to login?" });
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
    // Sending confirmation email
    const emailResult = await sendConfirmationEmail(newUser, verificationLink);
    if (emailResult.success) {
      await newUser.save();
      await token.save();
      return res.status(200).json({
        status: 'SUCCESSFULL',
        message: "Email successfully registered. Please check your mailbox to validate your account",
        newUser,
      });
    } else {
      return res.status(404).json({ message: "Error sending confirmation email. Email no found, double check email address" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error. Please refresh the page and try again" })
  }
};

export const emailTokenConfimation = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });
    await User.updateOne({ _id: token.userId }, { $set: { verified: true } });
    await Token.findByIdAndDelete(token._id)
    res.status(200).json({ message: "email verified" })
  } catch (error) {
    // console.log(error)
    res.status(502).json({ message: 'Error while verifying or email already verified' })
  }
}

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User no found with email provided, please review the email or register your email' })
    } else if (user && user.verified) {
      const paswrdDeshash = bcrypt.compareSync(password, user.password)
      if (!paswrdDeshash) return res.statu(502).json({ message: "Wrong password" })
      const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: '1800s' })
      res.cookie('token', token, {
        httpOnly: false,
        sameSite: 'none',
        secure: true
      })
      res.status(200).json({ message: "Logged in", user })
    } else {
      res.status(400).json({ message: "Email not verified. Please check your Mail box to verify your email or register your account" })
    }
  } catch (error) {
    return res.status(404).json({message: 'error', error})
  }
}

export const logout = async (req, res) => {
  try {
    res.cookie('token', null, {
      expires: new Date(0)
    })
    return res.status(200).json({ msg: 'Loggin out...' })
  } catch (error) {
    //console.log("Error", error)
    return res.status(500).json({message: "Internal Error"})
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

// // for testing data user
export const testingData = async (req, res) => {
  try {

    const name = req.body.name
    // const email = 'mk1ultra1eb@gmail.com'
    let email = await User.findOne({ email: req.body.email })
    if (email) {
      email = email.email;
      return res.status(200).json({ msg: 'success', email })
    }
    return res.status(404).json({ msg: 'failure', email })
  } catch (error) {
    return res.status(504).json({ error, msg: 'failure' })
  }
}

// for testing DBs data
// export const testingData = async (req, res) => {
//   try {
//     let email = await User.findOne({ email: req.body.email })
//     email = email.email;
//     if (email) {
//       return res.status(200).json({ msg: 'success', email })
//     } else {
//       return res.status(404).json({ msg: 'failure from 404' })
//     }

//   } catch (error) {
//     return res.status(500).json({ error, msg: 'failure' })
//   }
// }