import { User } from "../../../../domain/entities/user";

export interface IAdminGetUsers {
    execute(): Promise<User[] | null>;
}