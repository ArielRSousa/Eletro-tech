import express from 'express';
import { getCart, addItemToCart, updateCartItem, removeItemFromCart } from '../controllers/cartController.js';
import { protect, isCliente } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.use(protect, isCliente);

router.get('/', getCart);
router.post('/items', addItemToCart);
router.put('/items/:itemId', updateCartItem);
router.delete('/items/:itemId', removeItemFromCart);

export default router;