import { OtpRepository } from "../../infrastructure/repositories/otp.repository";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { generateOtp, sendMail } from "../../shared/utils/mailer";
import { ISendOtpUseCase } from "../interfaces/use-cases/sendOtp-usecase.interface";

export class SendOtp implements ISendOtpUseCase {
    constructor(
        private otpRepository: OtpRepository,
        private userRepository: UserRepository
    ) {};

    async execute(email: string): Promise<void> {
        const otp = generateOtp();
        await this.otpRepository.createOtp(email, otp);
        await sendMail(email, otp);
    }
}