
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const categories = [
    
    'accessories', 'audio', 'cameras', 'components', 'consoles', 'desktops',
    'drones', 'ereaders', 'fones', 'health', 'headphones', 'laptops',
    'leitores', 'monitores', 'networking', 'notebooks', 'perifericos',
    'redes', 'smart-home', 'smartphones', 'smartwatches', 'speakers',
    'storage', 'tablets', 'tvs', 'vr', 'wearables','monitors'
];

async function main() {
  console.log('Cadastrando categorias...');
  await prisma.categoria.deleteMany({}); // Limpa as categorias existentes

  for (const categoryName of categories) {
    await prisma.categoria.create({
      data: {
        nome: categoryName,
      },
    });
  }
  console.log('Categorias cadastradas com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });