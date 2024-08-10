"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpRepository = void 0;
const otp_schema_1 = require("../models/otp.schema");
class OtpRepository {
    async createOtp(email, otp) {
        const otpDoc = new otp_schema_1.OtpModel({ email, otp });
        await otpDoc.save();
        console.log("your email otp:" + otp);
    }
    async findOtpByEmail(email) {
        return await otp_schema_1.OtpModel.findOne({ email });
    }
}
exports.OtpRepository = OtpRepository;
