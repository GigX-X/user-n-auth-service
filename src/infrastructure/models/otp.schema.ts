import mongoose, {Document, Schema} from "mongoose";

interface IOtpSchema extends Document {
    email: string;
    otp: string;
    createdAt: Date;
}

const OtpSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            expires: 60
        }
    }
)

export const OtpModel = mongoose.model<IOtpSchema>("Otp", OtpSchema);