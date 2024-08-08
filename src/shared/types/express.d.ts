import { Request } from "express";

export interface SignupRequest extends Request {
  body: {
    username: string;
    email: string;
    password: string;
  };
}
