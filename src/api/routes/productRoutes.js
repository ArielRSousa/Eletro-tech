import express from 'express';
import { createProduct, updateProduct, deleteProduct, getMyProducts } from '../controllers/productController.js';
import { protect, isVendedor } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/my-products', protect, isVendedor, getMyProducts);


router.post('/', protect, isVendedor, createProduct);
router.put('/:id', protect, isVendedor, updateProduct);
router.delete('/:id', protect, isVendedor, deleteProduct);

export default router;