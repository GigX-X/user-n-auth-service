import { config } from "dotenv";
import { IAdminLoginUseCase } from "../../interfaces/use-cases/admin/adminLogin-usecase.interface";
import { IUserRepo } from "../../interfaces/repositories/user-repo.interface";
import jwt from "jsonwebtoken";

config({ path: __dirname + "/../../../../.env" });

export class AdminLoginUseCase implements IAdminLoginUseCase {
  constructor(private userRepository: IUserRepo) {}
  async execute(email: string, password: string): Promise<string | null> {
    if (email !== process.env.EMAIL) throw new Error("Invalid credentials");
    if (password !== "asdfasdf") throw new Error("Invalid credentials");
    const token = jwt.sign(
      {
        role: "admin",
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );
    return token;
  }
}
