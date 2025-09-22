import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * @desc    
 * @route   
 * @access  
 */
export const createOrderFromCart = async (req, res) => {
  const clienteId = req.user.id;
  const { enderecoId } = req.body;

  if (!enderecoId) {
      return res.status(400).json({ message: 'O endereço de entrega é obrigatório.'});
  }

  try {
    const carrinho = await prisma.carrinho.findUnique({
      where: { clienteId },
      include: { itens: { include: { produto: true } } },
    });

    if (!carrinho || carrinho.itens.length === 0) {
      return res.status(400).json({ message: 'Seu carrinho está vazio.' });
    }

    const total = carrinho.itens.reduce((acc, item) => acc + item.quantidade * item.produto.preco, 0);
    const produtosDoPedido = carrinho.itens.map(item => ({
      produtoId: item.produtoId,
      quantidade: item.quantidade,
      preco: item.produto.preco,
    }));

    const pedido = await prisma.$transaction(async (tx) => {
      const novoPedido = await tx.pedido.create({
        data: {
          clienteId,
          enderecoId,
          total,
          status: 'AGUARDANDO_PAGAMENTO',
          produtos: {
            create: produtosDoPedido,
          },
        },
      });

      for (const item of carrinho.itens) {
        await tx.produto.update({
          where: { id: item.produtoId },
          data: { estoque: { decrement: item.quantidade } },
        });
      }

      await tx.carrinhoItem.deleteMany({ where: { carrinhoId: carrinho.id } });

      return novoPedido;
    });

    res.status(201).json(pedido);

  } catch (error) {
    res.status(500).json({ message: 'Falha ao processar o pedido.', error: error.message });
  }
};


/**
 * @desc  
 * @route   
 * @access  
 */
export const getMyOrders = async (req, res) => {
    const clienteId = req.user.id;

    try {
        const pedidos = await prisma.pedido.findMany({
            where: { clienteId },
            orderBy: { criadoEm: 'desc' },
            include: {
             
                produtos: {
                    include: {
                        produto: {
                            select: { nome: true, imagemUrl: true }
                        }
                    }
                }
            }
        });
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar histórico de pedidos.', error: error.message });
    }
};


/**
 * @desc    
 * @route
 * @access
 */
export const getOrderById = async (req, res) => {
    const clienteId = req.user.id;
    const pedidoId = parseInt(req.params.id);

    try {

        const pedido = await prisma.pedido.findFirst({
            where: {
                id: pedidoId,
                clienteId: clienteId 
            },
            include: {
                endereco: true, 
                produtos: {
                    include: {
                        produto: true 
                    }
                }
            }
        });
        
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado.' });
        }
        
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar detalhes do pedido.', error: error.message });
    }
};