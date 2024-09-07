import { UserData } from "../../../../shared/types/express";

export interface ISendOtpUseCase {
    execute(userData: UserData): Promise<string>;
}