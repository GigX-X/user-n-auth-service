import { User } from "../../../domain/entities/user";

export interface IAdminRepo {
  getAllUsers(): Promise<User[] | null>;
}
