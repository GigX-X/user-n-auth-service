import { UserData } from "../../../../shared/types/express";

export interface ISignupUseCase {
  execute(userData: UserData): Promise<void | string>;
}
