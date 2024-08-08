import { Response } from "express";
import { SignUpUseCase } from "../../application/use-cases/signup.usecase";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { LoginRequest, SignupRequest } from "../../shared/types/express";
import { LoginUseCase } from "../../application/use-cases/login.usecase";

const userRepository = new UserRepository();
const signupUseCase = new SignUpUseCase(userRepository);
const loginUseCase = new LoginUseCase(userRepository);

export const signup = async (
  req: SignupRequest,
  res: Response
): Promise<void> => {
  const { username, password, email } = req.body;
  try {
    await signupUseCase.execute(username, password, email);
    res.status(201).json({ message: "user created and saved successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "something went wrong in signup controller", error });
  }
};

export const login = async (
  req: LoginRequest,
  res: Response
): Promise<void> => {
  const { email, password } = req.body;
  try {
    const result = await loginUseCase.execute(email, password);
    res.status(201).json({ message: "logged in successfully", result });
  } catch (error) {
    res
      .status(402)
      .json({ message: "something went wrong in login controller", error });
  }
};
