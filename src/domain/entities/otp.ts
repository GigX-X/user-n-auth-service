import { ObjectId } from "mongoose";
export class Otp {
  constructor(
    public email: string,
    public otp: string,
    public createdAt: Date,
    public _id?: ObjectId
  ) {}
}
