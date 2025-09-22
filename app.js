import express from 'express';
import cors from 'cors';

// Importa suas rotas com os caminhos corrigidos
import authRoutes from './src/api/routes/authRoutes.js';
import productRoutes from './src/api/routes/productRoutes.js';
import cartRoutes from './src/api/routes/cartRoutes.js';
import orderRoutes from './src/api/routes/orderRoutes.js';
import publicRoutes from './src/api/routes/publiRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configura as rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', publicRoutes);

// Exporta o app para ser usado pelo server.js e pelos testes
export default app;
