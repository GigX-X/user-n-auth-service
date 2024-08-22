import { ObjectId } from "mongoose";
export class User {
  constructor(
    public email: string,
    public password: string,
    public username: string,
    public _id?: ObjectId
  ) {}
}
