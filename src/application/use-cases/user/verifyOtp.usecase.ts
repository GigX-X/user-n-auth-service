import { IOtp } from "../../interfaces/repositories/otp-repo.interface";
import { IVerifyOtpUseCase } from "../../interfaces/use-cases/user/verifyOtp-usecase.interface";

export class VerifyOtpUseCase implements IVerifyOtpUseCase {
  constructor(private otpRepository: IOtp) {}
  async execute(email: string, otp: string): Promise<boolean> {
    const storedOtp = await this.otpRepository.findOtpByEmail(email);
    console.log("stored otp: ", storedOtp);
    if (!storedOtp || storedOtp.otp !== otp) return false;
    return true;
  }
}
