import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

/**
 * @desc
 * @route   
 * @access  
 */
export const getCart = async (req, res) => {
  const clienteId = req.user.id;

  try {
    let carrinho = await prisma.carrinho.findUnique({
      where: { clienteId },
      include: {
        itens: {
          include: {
            produto: true, 
          },
          orderBy: {
            id: 'asc'
          }
        },
      },
    });

    
    if (!carrinho) {
      carrinho = await prisma.carrinho.create({
        data: {
          clienteId,
        },
        include: {
          itens: true,
        },
      });
    }

    res.status(200).json(carrinho);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o carrinho.', error: error.message });
  }
};

/**
 * @desc
 * @route
 * @access  
 */
export const addItemToCart = async (req, res) => {
  const clienteId = req.user.id;
  const { produtoId, quantidade } = req.body;

  if (!produtoId || !quantidade || quantidade <= 0) {
    return res.status(400).json({ message: 'Produto e quantidade são obrigatórios.' });
  }

  try {

    const produto = await prisma.produto.findUnique({ where: { id: produtoId } });
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    if (produto.estoque < quantidade) {
      return res.status(400).json({ message: `Estoque insuficiente. Disponível: ${produto.estoque}` });
    }


    const carrinho = await prisma.carrinho.upsert({
      where: { clienteId },
      update: {},
      create: { clienteId },
    });


    const itemExistente = await prisma.carrinhoItem.findFirst({
      where: { carrinhoId: carrinho.id, produtoId },
    });

    if (itemExistente) {
 
      await prisma.carrinhoItem.update({
        where: { id: itemExistente.id },
        data: { quantidade: { increment: quantidade } },
      });
    } else {
      
      await prisma.carrinhoItem.create({
        data: {
          carrinhoId: carrinho.id,
          produtoId,
          quantidade,
        },
      });
    }

    getCart(req, res);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar item ao carrinho.', error: error.message });
  }
};

/**
 * @desc    
 * @route   
 * @access  
 */
export const updateCartItem = async (req, res) => {
    const clienteId = req.user.id;
    const itemId = parseInt(req.params.itemId);
    const { quantidade } = req.body;

    if (quantidade <= 0) {

        return removeItemFromCart(req, res);
    }
    
    try {

        const carrinho = await prisma.carrinho.findUnique({ where: { clienteId }});
        if (!carrinho) {
            return res.status(404).json({ message: 'Carrinho não encontrado.' });
        }
        
        const item = await prisma.carrinhoItem.findFirst({
            where: { id: itemId, carrinhoId: carrinho.id }
        });

        if (!item) {
            return res.status(404).json({ message: 'Item não encontrado no seu carrinho.' });
        }
        
        await prisma.carrinhoItem.update({
            where: { id: itemId },
            data: { quantidade }
        });

        getCart(req, res);

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar item do carrinho.', error: error.message });
    }
};

/**
 * @desc    
 * @route
 * @access  
 */
export const removeItemFromCart = async (req, res) => {
  const clienteId = req.user.id;
  const itemId = parseInt(req.params.itemId);

  try {
    
    const carrinho = await prisma.carrinho.findUnique({ where: { clienteId } });
    if (!carrinho) {
      return res.status(404).json({ message: 'Carrinho não encontrado.' });
    }

    const item = await prisma.carrinhoItem.findFirst({
      where: { id: itemId, carrinhoId: carrinho.id },
    });

    if (!item) {
      return res.status(404).json({ message: 'Item não encontrado no seu carrinho.' });
    }

    // Deleta o item
    await prisma.carrinhoItem.delete({ where: { id: itemId } });
    
    getCart(req, res);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover item do carrinho.', error: error.message });
  }
};