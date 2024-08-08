import { User } from "../../domain/entities/user";
import { IUserRepo } from "../interfaces/repositories/user-repo.interface";
import { ISignupUseCase } from "../interfaces/use-cases/signup-usecase.interface";

export class SignUpUseCase implements ISignupUseCase {
  constructor(private userRepository: IUserRepo) {}
  async execute(
    username: string,
    password: string,
    email: string
  ): Promise<void> {
    const user = new User(username, password, email);
    await this.userRepository.addUser(user);
  }
}
