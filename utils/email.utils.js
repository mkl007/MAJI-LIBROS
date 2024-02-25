import nodemailer from 'nodemailer';

export async function sendConfirmationEmail(newUser, verificationLink) {
  try {
    // const verificationLink = `${process.env.BACKEND_URI}/confirm/${newUser.token}`;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      port: 587,
      secure: false,
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: "MAJI BOOKS",
      html: `<div>
        <p>Welcome, ${newUser.fullname}! 🎉</p>
        <p>We are thrilled to have you as a new member of our community. 🌟</p>
        <p>Your journey with our app is about to begin, and we can't wait to share exciting experiences together. 🚀</p>
        <p>To get started, please confirm your email address by clicking the link below:</p>
        <a href="${verificationLink}">Confirm your account here</a>
        <p>If you have any questions or need assistance, feel free to reach out to our support team. 🤝</p>
        <p>Thank you for choosing our app! 🙌</p>
        <p>Best regards, 🌈</p>
        <p>MajiBooks 🚀</p>
      </div>`,
    };
    
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Email sending failed" };
  }
}
