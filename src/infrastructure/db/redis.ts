import {RedisClientType, createClient} from 'redis';

let redisClient: RedisClientType | null = null;

const connectRedis = async (): Promise<RedisClientType> => {
    redisClient = createClient({
        url: process.env.REDIS_URI as string
    })

    redisClient.on('error', (err) => console.log("redis client error", err));

    try {
        await redisClient.connect();
        console.log("connected to Redis");
    } catch (error) {
        console.error("Error connecting to redis", error);
        process.exit(1);
    }

    return redisClient;
}

export default connectRedis;

