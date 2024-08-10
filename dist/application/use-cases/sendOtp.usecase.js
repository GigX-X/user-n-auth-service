"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOtpUseCase = void 0;
const mailer_1 = require("../../shared/utils/mailer");
class SendOtpUseCase {
    constructor(otpRepository, userRepository) {
        this.otpRepository = otpRepository;
        this.userRepository = userRepository;
    }
    async execute(email) {
        const existingUser = await this.userRepository.findUserByEmail(email);
        if (existingUser)
            throw new Error("User already exists");
        const otp = (0, mailer_1.generateOtp)();
        await this.otpRepository.createOtp(email, otp);
        await (0, mailer_1.sendMail)(email, otp);
    }
}
exports.SendOtpUseCase = SendOtpUseCase;
