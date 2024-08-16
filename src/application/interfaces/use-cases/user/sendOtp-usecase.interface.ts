import { OAuth2 } from "nodemailer/lib/smtp-connection";
export interface ISendOtpUseCase {
    execute(email: string): Promise<void>;
}