import { OtpRepository } from "../../../infrastructure/repositories/user/otp.repository";
import { UserRepository } from "../../../infrastructure/repositories/user/user.repository";
import { generateOtp, sendMail } from "../../../shared/utils/mailer";
import { ISendOtpUseCase } from "../../interfaces/use-cases/user/sendOtp-usecase.interface";

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
