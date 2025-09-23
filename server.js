import express from 'express'; 
import 'dotenv/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


// Importa o app do ficheiro app.js (na mesma pasta)
// A CORREÇÃO ESTÁ AQUI: o caminho mudou de './src/app.js' para './app.js'
import app from './app.js';

// Define a porta a partir das variáveis de ambiente ou usa 3333 como padrão
const PORT = process.env.PORT || 3333;

// Inicia o servidor e coloca-o a escutar na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor a ser executado na porta ${PORT}`);
});

