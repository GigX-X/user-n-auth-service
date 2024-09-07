import { User } from "../../../domain/entities/user";
import { UserData } from "../../../shared/types/express";
import { IUserRepo } from "../../interfaces/repositories/user-repo.interface";
import { ISignupUseCase } from "../../interfaces/use-cases/user/signup-usecase.interface";
import bcryptjs from "bcryptjs";

export class SignUpUseCase implements ISignupUseCase {
  constructor(private userRepository: IUserRepo) {}
  async execute(userData: UserData): Promise<void | string> {
    const { email, username, password, role } = userData;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = new User(email, hashedPassword, username, role);
    await this.userRepository.addUser(user);
  }
}
