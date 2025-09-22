// Carrega as variáveis de ambiente do ficheiro .env
import 'dotenv/config';

// Importa o app do ficheiro app.js (na mesma pasta)
// A CORREÇÃO ESTÁ AQUI: o caminho mudou de './src/app.js' para './app.js'
import app from './app.js';

// Define a porta a partir das variáveis de ambiente ou usa 3333 como padrão
const PORT = process.env.PORT || 3333;

// Inicia o servidor e coloca-o a escutar na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor a ser executado na porta ${PORT}`);
});

