import { OtpRepository } from "../../../infrastructure/repositories/user/otp.repository";
import { UserRepository } from "../../../infrastructure/repositories/user/user.repository";
import { UserData } from "../../../shared/types/express";
import {
  generateOtp,
  generateToken,
  sendMail,
} from "../../../shared/utils/mailer";
import { ISendOtpUseCase } from "../../interfaces/use-cases/user/sendOtp-usecase.interface";

export class SendOtpUseCase implements ISendOtpUseCase {
  constructor(
    private otpRepository: OtpRepository,
    private userRepository: UserRepository
  ) {}

  async execute(userData: UserData): Promise<string> {
    const { email } = userData;
    const existingUser = await this.userRepository.findUserByEmail(email);
    if (existingUser) throw new Error("User already exists");

    const otp = generateOtp();
    const token = generateToken();

    await this.otpRepository.createOtp(token, userData, otp);
    await sendMail(email, otp);

    return token;
  }
}
