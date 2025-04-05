import express from 'express';
import getProduct from '../controllers/productControllers.js';

const router = express.Router();

router.get('/:id', getProduct);

export default router;