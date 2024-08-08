import { User } from "../../../domain/entities/user";

export interface IUserRepo {
  addUser(user: User): Promise<void>;
  findUserByEmail(email: string): Promise<User | null>;
  
}
