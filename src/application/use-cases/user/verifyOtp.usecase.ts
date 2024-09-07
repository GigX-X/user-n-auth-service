import { UserData } from "../../../shared/types/express";
import { IOtp } from "../../interfaces/repositories/otp-repo.interface";
import { IVerifyOtpUseCase } from "../../interfaces/use-cases/user/verifyOtp-usecase.interface";

export class VerifyOtpUseCase implements IVerifyOtpUseCase {
  constructor(private otpRepository: IOtp) {}
  async execute(token: string, otp: string): Promise<UserData | null> {
    const key = `registration:${token}`;
    const storedData = await this.otpRepository.verifyOtpWithToken(key);
    if (!storedData) return null;

    const { userData, otp: storedOtp } = JSON.parse(storedData);
    if (otp !== storedOtp) return null;

    await this.otpRepository.removeOtp(token);

    return userData;
  }
}
