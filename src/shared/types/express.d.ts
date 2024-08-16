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
  };
}

export interface verifyOtpRequest extends Request {
  body: {
    email: string;
    password: string;
    username: string;
    otp: string;
  };
}
