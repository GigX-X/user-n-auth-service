"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const signup_usecase_1 = require("../../application/use-cases/signup.usecase");
const user_repository_1 = require("../../infrastructure/repositories/user.repository");
const userRepository = new user_repository_1.UserRepository;
const signupUseCase = new signup_usecase_1.SignUpUseCase(userRepository);
const signup = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        await signupUseCase.execute(username, password, email);
        res.status(201).json({ message: "user created and saved successfully" });
    }
    catch (error) {
        res.status(400).json({ message: "something went wrong in signup controller", error: error });
    }
};
exports.signup = signup;
