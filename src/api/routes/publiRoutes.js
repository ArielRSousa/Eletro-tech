import express from 'express';
import { getAllProducts, getProductById, getAllCategories, getAllVendedores } from '../controllers/publiController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.get('/categories', getAllCategories);
router.get('/vendedores', getAllVendedores);

export default router;