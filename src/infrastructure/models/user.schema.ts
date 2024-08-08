import mongoose, { Schema } from "mongoose";

interface IUserSchema {
    username: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

export const UserModel = mongoose.model<IUserSchema>('User', UserSchema);
