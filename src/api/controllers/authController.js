import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


const generateToken = (id, tipo) => {
  
  return jwt.sign({ id, tipo }, process.env.JWT_SECRET, { expiresIn: '1d' });
};



/**
 * @desc
 * @route   
 * @access  
 */
export const registerCliente = async (req, res) => {
  const { nome, email, senha, cpf, telefone } = req.body;
  
  if (!nome || !email || !senha || !cpf) {
      return res.status(400).json({ message: "Nome, email, senha e CPF são obrigatórios."});
  }

  try {
    const clienteExists = await prisma.cliente.findUnique({ where: { email }});
    if (clienteExists) {
        return res.status(400).json({ message: "Este email já está em uso." });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    
    const cliente = await prisma.cliente.create({
      data: { nome, email, senha: hashedPassword, cpf, telefone },
    });
    
    res.status(201).json({ token: generateToken(cliente.id, 'CLIENTE') });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao registrar cliente.', error: error.message });
  }
};

/**
 * @desc    
 * @route   
 * @access  
 */
export const loginCliente = async (req, res) => {
  const { email, senha } = req.body;
  const cliente = await prisma.cliente.findUnique({ where: { email } });

  if (cliente && (await bcrypt.compare(senha, cliente.senha))) {
    res.json({
        message: "Login realizado com sucesso!",
        token: generateToken(cliente.id, 'CLIENTE') 
    });
  } else {
    res.status(401).json({ message: 'Email ou senha inválidos.' });
  }
};

/**
 * @desc
 * @route   
 * @access  
 */
export const getClienteProfile = async (req, res) => {
    const clienteId = req.user.id;
    try {
        const cliente = await prisma.cliente.findUnique({
            where: { id: clienteId },
            select: { 
                id: true,
                nome: true,
                email: true,
                cpf: true,
                telefone: true,
                criadoEm: true
            }
        });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar perfil do cliente." });
    }
};




/**
 * @desc   
 * @route
 * @access
 */
export const registerVendedor = async (req, res) => {
  const { nome, email, senha, cnpj, telefone, endereco, cidade, estado, cep } = req.body;

  try {
    const vendedorExists = await prisma.vendedor.findUnique({ where: { email }});
    if (vendedorExists) {
        return res.status(400).json({ message: "Este email já está em uso." });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const vendedor = await prisma.vendedor.create({
      data: { nome, email, senha: hashedPassword, cnpj, telefone, endereco, cidade, estado, cep },
    });

    res.status(201).json({ token: generateToken(vendedor.id, 'VENDEDEDOR') });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao registrar vendedor.', error: error.message });
  }
};

/**
 * @desc    
 * @route
 * @access
 */
export const loginVendedor = async (req, res) => {
  const { email, senha } = req.body;
  const vendedor = await prisma.vendedor.findUnique({ where: { email } });

  if (vendedor && (await bcrypt.compare(senha, vendedor.senha))) {
    res.json({ 
        message: "Login realizado com sucesso!",
        token: generateToken(vendedor.id, 'VENDEDOR') 
    });
  } else {
    res.status(401).json({ message: 'Email ou senha inválidos.' });
  }
};

/**
 * @desc
 * @route   
 * @access
 */
export const getVendedorProfile = async (req, res) => {
    const vendedorId = req.user.id;
    try {
        const vendedor = await prisma.vendedor.findUnique({
            where: { id: vendedorId },
            select: { 
                id: true,
                nome: true,
                email: true,
                cnpj: true,
                telefone: true,
                endereco: true,
                cidade: true,
                estado: true,
                cep: true
            }
        });
        res.json(vendedor);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar perfil do vendedor." });
    }
};