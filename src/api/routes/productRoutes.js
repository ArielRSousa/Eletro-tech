import express from 'express';
// IMPORTAR AS NOVAS FUNÇÕES DO CONTROLLER
import {
  getAllProducts,      // <- NOVO
  getProductById,      // <- NOVO
  createProduct,
  updateProduct,
  deleteProduct,
  getMyProducts
} from '../controllers/productController.js';
import { protect, isVendedor } from '../middlewares/authMiddleware.js';

const router = express.Router();

// --- ROTAS PÚBLICAS (para clientes) ---
// Qualquer um pode ver todos os produtos
router.get('/', getAllProducts);
// Qualquer um pode ver um produto específico pelo ID
router.get('/:id', getProductById);


// --- ROTAS PRIVADAS (apenas para vendedores) ---
// Vendedor logado vê apenas os seus produtos
router.get('/my-products', protect, isVendedor, getMyProducts);
// Vendedor logado pode criar, atualizar e deletar produtos
router.post('/', protect, isVendedor, createProduct);
router.put('/:id', protect, isVendedor, updateProduct);
router.delete('/:id', protect, isVendedor, deleteProduct);

export default router;