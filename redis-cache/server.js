import express from 'express';
import redisClient from './redisClient.js';
import productRoutes from './routes/products.js';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/api/products', productRoutes);

app.use('/ping', (req, res) =>{
    res.send("API is live");
})

app.listen(port, () =>{
    console.log(`Server Listening on port ${port}`);
})

process.on('SIGINT', () =>{
    redisClient.quit();
});