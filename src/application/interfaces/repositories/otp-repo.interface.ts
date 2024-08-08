import { Otp } from "../../../domain/entities/otp";

export interface IOtp {
  createOtp(email: string, otp: string): Promise<void>;
  findOtpByEmail(email: string): Promise<Otp | null>;
}
