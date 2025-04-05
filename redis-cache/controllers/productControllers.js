import redisClient from '../redisClient.js';
import findProductById from '../db/db.js';

const TTL = 60; 

const getProduct = async (req, res) =>{
  const id = req.params.id;
  const cacheKey = `product:${id}`;

  try{
    const cached = await redisClient.get(cacheKey);

    if (cached){
      console.log(`🔁 Cache Hit for ID ${id}`);
      return res.json(JSON.parse(cached));
    }

    console.log(`Cache Miss for ID ${id} - Fetching from DB`);

    const product = await findProductById(id);

    if(!product){
      return res.status(404).json({ message: 'Product not found' });
    }

    await redisClient.setEx(cacheKey, TTL, JSON.stringify(product));

    res.json(product);
  }
  catch (err){
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default getProduct;
