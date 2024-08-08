import { User } from "../../domain/entities/user";
import { IUserRepo } from "../interfaces/repositories/user-repo.interface";
import { ISignupUseCase } from "../interfaces/use-cases/signup-usecase.interface";
import bcryptjs from "bcryptjs";

export class SignUpUseCase implements ISignupUseCase {
  constructor(private userRepository: IUserRepo) {}
  async execute(
    username: string,
    password: string,
    email: string
  ): Promise<void | string> {
    const existingUser = await this.userRepository.findUserByEmail(email);
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User(username, hashedPassword, email);
    await this.userRepository.addUser(user);
  }
}
