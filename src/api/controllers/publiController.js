import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * @desc    Lista todos os produtos com filtros, ordenação e paginação.
 * @route   GET /api/products
 * @access  Público
 */
export const getAllProducts = async (req, res) => {
  const { nome, categoriaId, vendedorId, precoMin, precoMax, sortBy, order = 'asc' } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const where = {};
    if (nome) {
      where.nome = { contains: nome, mode: 'insensitive' };
    }
    if (categoriaId) {
      where.categoriaId = parseInt(categoriaId);
    }
    if (vendedorId) {
      where.vendedorId = parseInt(vendedorId);
    }
    if (precoMin || precoMax) {
        where.preco = {};
        if (precoMin) where.preco.gte = parseFloat(precoMin);
        if (precoMax) where.preco.lte = parseFloat(precoMax);
    }
    
    const orderBy = {};
    if (sortBy) {
        orderBy[sortBy] = order;
    }

    const [products, total] = await prisma.$transaction([
      prisma.produto.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
            categoria: { select: { id: true, nome: true } },
            vendedor: { select: { id: true, nome: true } },
        },
      }),
      prisma.produto.count({ where }),
    ]);

    res.status(200).json({
      data: products,
      pagination: {
        total,
        limit,
        page,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos.', error: error.message });
  }
};

/**
 * @desc    Busca um único produto pelo ID.
 * @route   GET /api/products/:id
 * @access  Público
 */
export const getProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const product = await prisma.produto.findUnique({
      where: { id: productId },
      include: {
        categoria: true,
        vendedor: {
            select: { // Seleciona apenas campos públicos do vendedor
                id: true,
                nome: true,
            }
        },
        avaliacoes: {
            include: {
                cliente: { select: { nome: true } } // Mostra o nome de quem avaliou
            }
        },
      },
    });

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o produto.', error: error.message });
  }
};

/**
 * @desc    
 * @route 
 * @access  
 */
export const getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.categoria.findMany();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar categorias.', error: error.message });
    }
};

/**
 * @desc
 * @route
 * @access
 */
export const getAllVendedores = async (req, res) => {
    try {
        const vendedores = await prisma.vendedor.findMany({
            select: { 
                id: true,
                nome: true,
            }
        });
        res.status(200).json(vendedores);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar vendedores.', error: error.message });
    }
};