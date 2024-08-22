import { config } from "dotenv";
import { IUserRepo } from "../../interfaces/repositories/user-repo.interface";
import { ILoginUseCase } from "../../interfaces/use-cases/user/login-usecase.interface";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

config({ path: __dirname + "/../../../../.env" });

export class LoginUseCase implements ILoginUseCase {
  constructor(private userRepository: IUserRepo) {}

  async execute(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    return token;
  }
}
