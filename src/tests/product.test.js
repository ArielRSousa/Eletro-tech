import request from 'supertest';
import app from '../../app.js';
// Importa a instância partilhada do Prisma (caminho corrigido)
import prisma from '.././prismaClient.js';

let token; // Variável para armazenar o nosso token de autenticação

describe('API de Produtos - /api/products', () => {

  beforeAll(async () => {
    // Limpa as tabelas para garantir um estado inicial limpo
    await prisma.product.deleteMany({});
    await prisma.user.deleteMany({});

    // 1. Cria um utilizador de teste para obter um token
    const utilizadorTeste = {
      name: 'Testador de Produtos',
      email: 'testador.produtos@exemplo.com',
      password: 'password123'
    };
    const resposta = await request(app)
      .post('/api/auth/register')
      .send(utilizadorTeste);
    
    // 2. Armazena o token para ser usado em todos os testes de produto
    token = resposta.body.token; 
  });

  beforeEach(async () => {
    // Limpa apenas os produtos antes de cada teste individual
    await prisma.product.deleteMany({});
  });

  afterAll(async () => {
    // Limpa tudo no final e desconecta
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  describe('POST /api/products', () => {
    it('deve criar um novo produto com sucesso se estiver autenticado', async () => {
      const novoProduto = {
        name: 'Portátil Gamer',
        description: 'Portátil de alta performance para jogos',
        price: 1500.50,
        stock: 15,
      };

      const resposta = await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${token}`) // 3. Envia o token no cabeçalho
        .send(novoProduto);

      expect(resposta.statusCode).toBe(201);
      expect(resposta.body).toHaveProperty('name', 'Portátil Gamer');
    });

    it('deve retornar erro 401 se não estiver autenticado', async () => {
      const novoProduto = { name: 'Produto Sem Token', price: 10, stock: 1 };
      
      const resposta = await request(app)
        .post('/api/products')
        .send(novoProduto);
        
      expect(resposta.statusCode).toBe(401);
    });
  });

  describe('GET /api/products', () => {
    it('deve retornar uma lista de produtos (rota pública, sem token necessário)', async () => {
      await prisma.product.create({
        data: {
          name: 'Rato Gamer',
          description: 'Rato com RGB',
          price: 50.00,
          stock: 50
        }
      });

      const resposta = await request(app).get('/api/products');

      expect(resposta.statusCode).toBe(200);
      expect(Array.isArray(resposta.body)).toBe(true);
      expect(resposta.body.length).toBeGreaterThan(0);
    });
  });
});

