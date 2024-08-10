"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtpUseCase = void 0;
class VerifyOtpUseCase {
    constructor(otpRepository) {
        this.otpRepository = otpRepository;
    }
    async execute(email, otp) {
        const storedOtp = await this.otpRepository.findOtpByEmail(email);
        if (!storedOtp || storedOtp.otp !== otp)
            return false;
        return true;
    }
}
exports.VerifyOtpUseCase = VerifyOtpUseCase;
