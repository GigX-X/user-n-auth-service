import { Request } from "express";

export interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface sendOtpRequest extends Request {
  body: {
    email: string;
    password: string;
    username: string;
    role: string;
  };
}

export interface verifyOtpRequest extends Request {
  body: {
    token: string;
    otp: string;
  };
}

export type UserData = {
  email: string;
  password: string;
  username: string;
  role: string;
}
