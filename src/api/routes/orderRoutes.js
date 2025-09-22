import express from 'express';
import { createOrderFromCart, getMyOrders, getOrderById } from '../controllers/orderController.js';
import { protect, isCliente } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.use(protect, isCliente);


router.route('/')
  .post(createOrderFromCart)
  .get(getMyOrders);


router.route('/:id')
  .get(getOrderById);

export default router;