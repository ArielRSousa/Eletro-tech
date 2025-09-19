import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

// Criar Produto (Vendedor)
export const createProduct = async (req, res) => {
  const { nome, descricao, preco, estoque, imagemUrl, categoriaId } = req.body;
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


export const updateProduct = async (req, res) => {
  const productId = parseInt(req.params.id);
  const vendedorId = req.user.id;


  const product = await prisma.produto.findFirst({
    where: { id: productId, vendedorId: vendedorId },
  });

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado ou você não tem permissão para editá-lo.' });
  }

 
  const updatedProduct = await prisma.produto.update({
      where: { id: productId },
      data: req.body,
  });
  res.json(updatedProduct);
};

