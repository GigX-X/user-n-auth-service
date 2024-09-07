import { UserData } from "../../../../shared/types/express";

export interface IVerifyOtpUseCase {
    execute(token: string, otp: string): Promise<UserData | null>;
}