
import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import cors from 'cors';


import authRoutes from './src/api/routes/authRoutes.js';
import productRoutes from './src/api/routes/productRoutes.js';
import cartRoutes from './src/api/routes/cartRoutes.js';
import orderRoutes from './src/api/routes/orderRoutes.js';
import publicRoutes from './src/api/routes/publiRoutes.js'; 

const app = express();
const PORT = process.env.PORT || 3333; 


app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes);       
app.use('/api/orders', orderRoutes);    
app.use('/api', publicRoutes);          


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});