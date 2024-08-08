import { User } from "../../../domain/entities/user";

export interface IUserRepo {
  addUser(user: User): Promise<void>;
}
