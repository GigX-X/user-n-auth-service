import { Otp } from "../../../domain/entities/otp";
import { UserData } from "../../../shared/types/express";

export interface IOtp {
  createOtp(token: string, userData: UserData, otp: string): Promise<void>;
  verifyOtpWithToken(key: string): Promise<string | null>;
  removeOtp(token: string): Promise<void>;
}
