import { Response } from 'express';
import { SignUpUseCase } from "../../application/use-cases/signup.usecase";
import { UserRepository } from "../../infrastructure/repositories/user.repository"
import { SignupRequest } from '../../shared/types/express';

const userRepository = new UserRepository;
const signupUseCase = new SignUpUseCase(userRepository);

export const signup = async (req: SignupRequest, res: Response): Promise<void> => {
    const { username, password, email }  = req.body;
    try {
        await signupUseCase.execute(username, password, email);
        res.status(201).json({message: "user created and saved successfully"})
    } catch (error) {
        res.status(400).json({message: "something went wrong in signup controller", error: error})
    }
}