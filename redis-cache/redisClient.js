import redis from 'redis';

const redisClient = redis.createClient({
    socket: {
        host: 'redis',
        port: 6379,
    }
});

redisClient.on('error', (err) => console.error('Redis Client error', err));

await redisClient.connect();
console.log('Redis connected successfully');

export default redisClient; 