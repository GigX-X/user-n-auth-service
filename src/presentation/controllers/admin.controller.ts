import { Request, Response } from "express";
import { LoginRequest } from "../../shared/types/express";
import { AdminLoginUseCase } from "../../application/use-cases/admin/adminLogin.usecase";
import { UserRepository } from "../../infrastructure/repositories/user/user.repository";
import { AdminGetUsersUseCase } from "../../application/use-cases/admin/adminGetUsers.usecase";
import { AdminRepository } from "../../infrastructure/repositories/admin/admin.repository";

const userRepository = new UserRepository();
const adminRepository = new AdminRepository();
const adminLoginUseCase = new AdminLoginUseCase(userRepository);
const adminGetUsersUseCase = new AdminGetUsersUseCase(adminRepository);

export const adminLogin = async (
    req: LoginRequest,
    res: Response
  ): Promise<void> => {
    const { email, password } = req.body;
    try {
      const result = await adminLoginUseCase.execute(email, password);
      res.status(201).json({ message: "logged in successfully", result });
    } catch (error) {
      res
        .status(402)
        .json({ message: "something went wrong in login controller", error });
    }
  };


export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await adminGetUsersUseCase.execute();
        res.status(201).json({ message: "fetched all users", users });
    } catch (error) {
        res
        .status(402)
        .json({ message: "something went wrong in login controller", error });
    }
}