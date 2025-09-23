// seed.js

import { PrismaClient } from '@prisma/client';

import productsData from './src/data/productsData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o processo de seeding...');

  // 1. LIMPAR DADOS ANTIGOS
  await prisma.produto.deleteMany({});
  console.log('Produtos antigos deletados.');

  // 2. BUSCAR CATEGORIAS PARA MAPEAMENTO
  const categories = await prisma.categoria.findMany();
  const categoryMap = categories.reduce((map, category) => {
    map[category.nome] = category.id;
    return map;
  }, {});
  console.log('Mapa de categorias criado com sucesso.');

  // 3. TRANSFORMAR OS DADOS (usando 'productsData')
  const transformedProducts = productsData.map(product => {
    const categoriaId = categoryMap[product.category];
    if (!categoriaId) {
      throw new Error(`A categoria '${product.category}' do produto '${product.name}' não foi encontrada.`);
    }
    return {
      nome: product.name,
      preco: product.price,
      precoOriginal: product.originalPrice,
      imagemUrl: product.images[0],
      avaliacao: product.rating,
      numAvaliacoes: product.reviews,
      desconto: product.discount,
      descricao: product.description,
      caracteristicas: product.features,
      especificacoes: product.specifications,
      emEstoque: product.inStock,
      estoque: product.stockQuantity,
      categoriaId: categoriaId,
      vendedorId: 1,
    };
  });

  // 4. INSERIR OS PRODUTOS
  console.log('Cadastrando os novos produtos...');
  await prisma.produto.createMany({
    // AQUI ESTÁ A CORREÇÃO: Usar a variável 'transformedProducts'
    data: transformedProducts,
    skipDuplicates: true,
  });
  
  // E AQUI TAMBÉM: Usar a variável correta para a contagem
  console.log(`Seeding finalizado. ${transformedProducts.length} produtos cadastrados com sucesso!`);
}

main()
  .catch((e) => {
    console.error('Ocorreu um erro durante o seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });