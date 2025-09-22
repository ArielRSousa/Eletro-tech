import express from 'express';
import {
  registerCliente,
  loginCliente,
  getClienteProfile,
  registerVendedor,
  loginVendedor,
  getVendedorProfile
} from '../controllers/authController.js';
import { protect, isCliente, isVendedor } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('/cliente/register', registerCliente);
router.post('/cliente/login', loginCliente);


router.get('/cliente/me', protect, isCliente, getClienteProfile);



router.post('/vendedor/register', registerVendedor);
router.post('/vendedor/login', loginVendedor);


router.get('/vendedor/me', protect, isVendedor, getVendedorProfile);


export default router;