import { IAdminRepo } from "../../../application/interfaces/repositories/admin-repo.interface";
import { User } from "../../../domain/entities/user";
import { UserModel } from "../../models/user.schema";

export class AdminRepository implements IAdminRepo {
  async getAllUsers(): Promise<User[] | null> {
    return await UserModel.find({});
  }
}
