import { ObjectId } from "mongoose";


export class User {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public _id?: ObjectId
  ) {}
}
