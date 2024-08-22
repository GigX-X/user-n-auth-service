import { User } from "../../../domain/entities/user";
import { IUserRepo } from "../../interfaces/repositories/user-repo.interface";
import { ISignupUseCase } from "../../interfaces/use-cases/user/signup-usecase.interface";
import bcryptjs from "bcryptjs";

export class SignUpUseCase implements ISignupUseCase {
  constructor(private userRepository: IUserRepo) {}
  async execute(
    email: string,
    password: string,
    username: string
  ): Promise<void | string> {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = new User(email, hashedPassword, username);
    await this.userRepository.addUser(user);
  }
}
