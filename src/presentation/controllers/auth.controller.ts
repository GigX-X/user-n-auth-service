import { Response } from "express";
import { SignUpUseCase } from "../../application/use-cases/user/signup.usecase";
import { UserRepository } from "../../infrastructure/repositories/user/user.repository";
import {
  LoginRequest,
  sendOtpRequest,
  verifyOtpRequest,
} from "../../shared/types/express";
import { LoginUseCase } from "../../application/use-cases/user/login.usecase";
import { OtpRepository } from "../../infrastructure/repositories/user/otp.repository";
import { SendOtpUseCase } from "../../application/use-cases/user/sendOtp.usecase";
import { VerifyOtpUseCase } from "../../application/use-cases/user/verifyOtp.usecase";

const userRepository = new UserRepository();
const otpRepository = new OtpRepository();
const signupUseCase = new SignUpUseCase(userRepository);
const loginUseCase = new LoginUseCase(userRepository);
const sendOtpUseCase = new SendOtpUseCase(otpRepository, userRepository);
const verifyOtpUseCase = new VerifyOtpUseCase(otpRepository);

export const login = async (
  req: LoginRequest,
  res: Response
): Promise<void> => {
  const { email, password } = req.body;
  try {
    const result = await loginUseCase.execute(email, password);
    res.status(201).json({ message: "logged in successfully", result });
  } catch (error) {
    res
      .status(402)
      .json({ message: "something went wrong in login controller", error });
  }
};

export const sendOtp = async (
  req: sendOtpRequest,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body;
    await sendOtpUseCase.execute(email);
    res.status(200).json({ message: "OTP send successfully" });
  } catch (error) {
    res
      .status(401)
      .json({ message: "something went wrong while sending Otp", error });
  }
};

export const verifyOtpAndSignUp = async (
  req: verifyOtpRequest,
  res: Response
): Promise<void> => {
  try {
    const { email, password, username, otp } = req.body;
    const isOtpValid = await verifyOtpUseCase.execute(email, otp);
    if (!isOtpValid) res.status(401).json({ message: "invalid OTP" });

    await signupUseCase.execute(email, password, username);

    res.status(201).json({ message: "User created successfully " });
  } catch (error) {
    res.status(401).json({
      message: "something went wrong while verifyOtpAndSignUp",
      error,
    });
  }
};
