import request from 'supertest';
import app from '../../app.js';
// Importa a instância partilhada do Prisma a partir do novo ficheiro
import prisma from '.././prismaCliente.js';

describe('API de Autenticação - /api/auth', () => {

  // Limpa a tabela de utilizadores antes de cada teste
  beforeEach(async () => {
    await prisma.user.deleteMany({});
  });

  // Garante a desconexão do Prisma após todos os testes
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /register', () => {
    it('deve registar um novo utilizador com sucesso e retornar um token', async () => {
      const novoUtilizador = {
        name: 'Utilizador Teste',
        email: 'teste@exemplo.com',
        password: 'password123'
      };

      const resposta = await request(app)
        .post('/api/auth/register')
        .send(novoUtilizador);

      expect(resposta.statusCode).toBe(201);
      expect(resposta.body).toHaveProperty('token');
      
      const utilizadorNaBD = await prisma.user.findUnique({ where: { email: 'teste@exemplo.com' } });
      expect(utilizadorNaBD).not.toBeNull();
    });

    it('deve retornar erro 400 se o email já estiver em uso', async () => {
       await prisma.user.create({
        data: {
          name: 'Utilizador Existente',
          email: 'existente@exemplo.com',
          password: 'outrapassword'
        }
      });

      const utilizadorDuplicado = {
        name: 'Outro Utilizador',
        email: 'existente@exemplo.com',
        password: 'password456'
      };

      const resposta = await request(app)
        .post('/api/auth/register')
        .send(utilizadorDuplicado);

      expect(resposta.statusCode).toBe(400);
    });
  });
});

