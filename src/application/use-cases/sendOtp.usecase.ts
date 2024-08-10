import { OtpRepository } from "../../infrastructure/repositories/otp.repository";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { generateOtp, sendMail } from "../../shared/utils/mailer";
import { ISendOtpUseCase } from "../interfaces/use-cases/sendOtp-usecase.interface";

export class SendOtpUseCase implements ISendOtpUseCase {
  constructor(
    private otpRepository: OtpRepository,
    private userRepository: UserRepository
  ) {}

  async execute(email: string): Promise<void> {
    const existingUser = await this.userRepository.findUserByEmail(email);
    if (existingUser) throw new Error("User already exists");

    const otp = generateOtp();
    await this.otpRepository.createOtp(email, otp);
    await sendMail(email, otp);
  }
}
