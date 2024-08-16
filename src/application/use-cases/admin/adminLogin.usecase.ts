import { config } from "dotenv";
import { IAdminLoginUseCase } from "../../interfaces/use-cases/admin/adminLogin-usecase.interface";
import { IUserRepo } from "../../interfaces/repositories/user-repo.interface";

config({ path: __dirname + "/../../../../.env" });

export class AdminLoginUseCase implements IAdminLoginUseCase {
  constructor(private userRepository: IUserRepo) {}
  async execute(email: string, password: string): Promise<string | null> {
    if (email !== process.env.EMAIL) throw new Error("Invalid credentials");
    if (password !== "asdfasdf") throw new Error("Invalid credentials");
    return "Admin Logged in";
  }
}
