import { config } from "dotenv";
import nodemailer from "nodemailer";

config({ path: __dirname + "/../../../.env" });

export const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendMail = async (to: string, otp: string): Promise<void> => {
  console.log(process.env.EMAIL, process.env.PASS);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  await transporter.sendMail({
    from: `GigX <${process.env.EMAIL}>`,
    to,
    subject: "OTP for GigX user registration",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4CAF50; text-align: center;">Welcome to GigX!</h2>
        <p style="font-size: 16px; color: #333;">Dear User,</p>
        <p style="font-size: 16px; color: #333;">
          Thank you for registering with us. Please use the following OTP to complete your registration:
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="font-size: 24px; font-weight: bold; color: #FF5733;">${otp}</span>
        </div>
        <p style="font-size: 16px; color: #333;">
          This OTP is valid for just 1 min. If you did not request this, please ignore this email.
        </p>
        <p style="font-size: 16px; color: #333;">Best regards,<br>Your App Name Team</p>
        <hr style="border-top: 1px solid #ddd;">
        <p style="font-size: 12px; color: #999; text-align: center;">
          If you have any issues, feel free to contact us at <a href="mailto:support@GigX.com">support@GigX.com</a>.
        </p>
      </div>
    `,
  });
};
