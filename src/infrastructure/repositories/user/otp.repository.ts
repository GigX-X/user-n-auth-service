import {IOtp}  from "../../../application/interfaces/repositories/otp-repo.interface";
import { UserData } from "../../../shared/types/express";
import redis from "../../db/redis";


export class OtpRepository implements IOtp {
    async createOtp(token: string, userData: UserData, otp: string): Promise<void> {
        const redisClient = await redis();
        await redisClient.setEx(
            `registration:${token}`,
            120,
            JSON.stringify({userData, otp})
        )
    }
   
    async verifyOtpWithToken(key: string): Promise<string | null> {
        const redisClient = await redis();
        return await redisClient.get(key);
    }

    async removeOtp(key: string): Promise<void> {
        const redisClient = await redis();
        await redisClient.del(key);
    }    
}