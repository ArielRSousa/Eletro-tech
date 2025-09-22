import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; 
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
  }
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado, nenhum token fornecido.' });
  }
};


export const isCliente = (req, res, next) => {
  if (req.user && req.user.tipo === 'CLIENTE') {
    next();
  } else {
    res.status(403).json({ message: 'Acesso negado. Rota exclusiva para clientes.' });
  }
};

export const isVendedor = (req, res, next) => {
  if (req.user && req.user.tipo === 'VENDEDOR') {
    next();
  } else {
    res.status(403).json({ message: 'Acesso negado. Rota exclusiva para vendedores.' });
  }
};