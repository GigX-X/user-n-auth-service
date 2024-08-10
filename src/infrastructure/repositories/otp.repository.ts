import {IOtp}  from "../../application/interfaces/repositories/otp-repo.interface";
import { Otp } from "../../domain/entities/otp";
import { OtpModel } from "../models/otp.schema";


export class OtpRepository implements IOtp {
    async createOtp(email: string, otp: string): Promise<void> {
        const otpDoc = new OtpModel({ email, otp });
        await otpDoc.save();
        console.log("your email otp:" + otp);
    }
   
    async findOtpByEmail(email: string): Promise<Otp | null> {
        return await OtpModel.findOne({ email });
    }
}