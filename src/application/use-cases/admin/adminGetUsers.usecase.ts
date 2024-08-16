import { config } from "dotenv";
import { IAdminGetUsers } from "../../interfaces/use-cases/admin/adminGetUsers-usecase.interface";
import { IAdminRepo } from "../../interfaces/repositories/admin-repo.interface";
import { User } from "../../../domain/entities/user";

config({ path: __dirname + "/../../../../.env" });

export class AdminGetUsersUseCase implements IAdminGetUsers {
  constructor(private adminRespository: IAdminRepo) {}
  async execute(): Promise<User[] | null> {
    const users = await this.adminRespository.getAllUsers();
    return users;
  }
}
