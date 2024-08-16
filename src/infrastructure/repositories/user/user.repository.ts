import { IUserRepo } from "../../../application/interfaces/repositories/user-repo.interface";
import { User } from "../../../domain/entities/user";
import { UserModel } from "../../models/user.schema";

export class UserRepository implements IUserRepo {
    async addUser(user: User): Promise<void> {
        const userDocument = new UserModel(user);
        await userDocument.save();
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return await UserModel.findOne({ email }); 
    }
}