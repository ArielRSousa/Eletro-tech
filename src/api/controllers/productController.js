  import { PrismaClient } from '@prisma/client';
  const prisma = new PrismaClient();

  // Criar um novo produto (apenas para vendedores logados)
  export const createProduct = async (req, res) => {
    const { nome, descricao, preco, estoque, imagemUrl, categoriaId } = req.body;
    // Pega o ID do vendedor a partir do token (middleware de autenticação)
    const vendedorId = req.user.id; 

    try {
      const product = await prisma.produto.create({
        data: { nome, descricao, preco, estoque, imagemUrl, categoriaId, vendedorId },
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar produto.', error: error.message });
    }
  };

  // Atualizar um produto existente (apenas o dono do produto)
  export const updateProduct = async (req, res) => {
    const productId = parseInt(req.params.id);
    const vendedorId = req.user.id;

    try {
      // Primeiro, verifica se o produto existe e se pertence ao vendedor logado
      const product = await prisma.produto.findFirst({
        where: { id: productId, vendedorId: vendedorId },
      });

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado ou você não tem permissão para editá-lo.' });
      }

      // Se tudo estiver certo, atualiza o produto
      const updatedProduct = await prisma.produto.update({
          where: { id: productId },
          data: req.body,
      });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar produto.', error: error.message });
    }
  };

  // Deletar um produto (apenas o dono do produto)
  export const deleteProduct = async (req, res) => {
    const productId = parseInt(req.params.id);
    const vendedorId = req.user.id;

    try {
      // Verifica se o produto existe e pertence ao vendedor
      const product = await prisma.produto.findFirst({
        where: { id: productId, vendedorId: vendedorId },
      });

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado ou você не tem permissão para deletá-lo.' });
      }

      // Deleta o produto
      await prisma.produto.delete({
        where: { id: productId },
      });

      res.status(200).json({ message: 'Produto deletado com sucesso.' });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar produto.', error: error.message });
    }
  };

  // Listar produtos do vendedor logado
  export const getMyProducts = async (req, res) => {
    const vendedorId = req.user.id;

    try {
      const products = await prisma.produto.findMany({
        where: { vendedorId: vendedorId },
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar seus produtos.', error: error.message });
    }
  };

  // Listar todos os produtos (público)
  export const getAllProducts = async (req, res) => {
    try {
      const products = await prisma.produto.findMany();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar produtos.', error: error.message });
    }
  };

  // Obter um produto específico pelo ID (público)
  export const getProductById = async (req, res) => {
    const productId = parseInt(req.params.id);

    try {
      const product = await prisma.produto.findUnique({
        where: { id: productId },
      });

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado.' });
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar o produto.', error: error.message });
    }
  };