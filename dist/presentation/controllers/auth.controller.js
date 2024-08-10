"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtpAndSignUp = exports.sendOtp = exports.login = exports.signup = void 0;
const signup_usecase_1 = require("../../application/use-cases/signup.usecase");
const user_repository_1 = require("../../infrastructure/repositories/user.repository");
const login_usecase_1 = require("../../application/use-cases/login.usecase");
const otp_repository_1 = require("../../infrastructure/repositories/otp.repository");
const sendOtp_usecase_1 = require("../../application/use-cases/sendOtp.usecase");
const verifyOtp_usecase_1 = require("../../application/use-cases/verifyOtp.usecase");
const userRepository = new user_repository_1.UserRepository();
const otpRepository = new otp_repository_1.OtpRepository();
const signupUseCase = new signup_usecase_1.SignUpUseCase(userRepository);
const loginUseCase = new login_usecase_1.LoginUseCase(userRepository);
const sendOtpUseCase = new sendOtp_usecase_1.SendOtpUseCase(otpRepository, userRepository);
const verifyOtpUseCase = new verifyOtp_usecase_1.VerifyOtpUseCase(otpRepository);
const signup = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        await signupUseCase.execute(username, password, email);
        res.status(201).json({ message: "user created and saved successfully" });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: "something went wrong in signup controller", error });
    }
};
exports.signup = signup;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await loginUseCase.execute(email, password);
        res.status(201).json({ message: "logged in successfully", result });
    }
    catch (error) {
        res
            .status(402)
            .json({ message: "something went wrong in login controller", error });
    }
};
exports.login = login;
const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        await sendOtpUseCase.execute(email);
        res.status(200).json({ message: "OTP send successfully" });
    }
    catch (error) {
        res
            .status(401)
            .json({ message: "something went wrong while sending Otp", error });
    }
};
exports.sendOtp = sendOtp;
const verifyOtpAndSignUp = async (req, res) => {
    try {
        const { email, password, username, otp } = req.body;
        const isOtpValid = await verifyOtpUseCase.execute(email, otp);
        if (!isOtpValid)
            res.status(401).json({ message: "invalid OTP" });
        await signupUseCase.execute(email, password, username);
        res.status(201).json({ message: "User created successfully " });
    }
    catch (error) {
        res
            .status(401)
            .json({
            message: "something went wrong while verifyOtpAndSignUp",
            error,
        });
    }
};
exports.verifyOtpAndSignUp = verifyOtpAndSignUp;
