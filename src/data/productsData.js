// /data/products.js
export const productsData = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 9299.0,
    originalPrice: 10999.0,
    images: [
      '/imagens_produtos/1.jpg'
    ],
    rating: 4.9,
    reviews: 2150,
    category: 'smartphones',
    discount: 15,
    description:
      'O iPhone 15 Pro Max representa o ápice da tecnologia móvel da Apple, oferecendo desempenho excepcional com o chip A17 Pro e um sistema de câmera Pro inigualável.',
    features: [
      'Chip A17 Pro com GPU de 6 núcleos',
      'Sistema de câmera Pro com teleobjetiva 5x',
      'Tela Super Retina XDR de 6,7 polegadas',
      'Construção em titânio aeroespacial',
      'Botão de Ação personalizável',
    ],
    specifications: {
      Tela: '6,7" Super Retina XDR',
      Processador: 'Chip A17 Pro',
      Armazenamento: '256GB, 512GB, 1TB',
      Câmera: 'Sistema Pro 48MP + 12MP + 12MP',
      Bateria: 'Até 29 horas de reprodução de vídeo',
    },
    inStock: true,
    stockQuantity: 30,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 8999.0,
    originalPrice: 9999.0,
    images: [
      '/imagens_produtos/2.jpg'
    ],
    rating: 4.8,
    reviews: 1890,
    category: 'smartphones',
    discount: 10,
    description:
      'Explore novas possibilidades com o Galaxy S24 Ultra e sua IA integrada. Câmera revolucionária e a S Pen para máxima produtividade.',
    features: [
      'Galaxy AI integrado',
      'Câmera de 200MP com ProVisual Engine',
      'S Pen integrada para anotações e desenhos',
      'Tela Dynamic AMOLED 2X de 6.8"',
    ],
    specifications: {
      Tela: '6.8" Dynamic AMOLED 2X',
      Processador: 'Snapdragon 8 Gen 3 for Galaxy',
      RAM: '12 GB',
      Armazenamento: '256GB, 512GB, 1TB',
    },
    inStock: true,
    stockQuantity: 45,
  },
  {
    id: 3,
    name: 'Xiaomi 14',
    price: 5499.0,
    originalPrice: 6599.0,
    images: [
      '/imagens_produtos/3.jpg'
    ],
    rating: 4.7,
    reviews: 980,
    category: 'smartphones',
    discount: 17,
    description:
      'Co-desenvolvido com a Leica, o Xiaomi 14 oferece uma experiência fotográfica profissional em um design elegante e compacto.',
    features: [
      'Lentes ópticas Leica Summilux',
      'Processador Snapdragon 8 Gen 3',
      'Tela CrystalRes AMOLED de 1.5K',
      'Carregamento HyperCharge de 90W',
    ],
    specifications: {
      Tela: '6.36" AMOLED 120Hz',
      Processador: 'Snapdragon 8 Gen 3',
      Câmera: 'Leica 50MP + 50MP + 50MP',
      Bateria: '4610mAh',
    },
    inStock: true,
    stockQuantity: 50,
  },
  {
    id: 4,
    name: 'Motorola Razr 40 Ultra',
    price: 4899.0,
    originalPrice: 5499.0,
    images: [
      '/imagens_produtos/4.jpg'
    ],
    rating: 4.6,
    reviews: 750,
    category: 'smartphones',
    discount: 11,
    description:
      'O icônico design flip reinventado. O Razr 40 Ultra possui a maior tela externa da categoria, permitindo que você use seus apps favoritos com o celular fechado.',
    features: [
      'Tela externa de 3,6" pOLED de 144 Hz',
      'Design dobrável ultra compacto',
      'Câmera principal de 12 MP com OIS',
      'Processador Snapdragon 8+ Gen 1',
    ],
    specifications: {
      'Tela Interna': '6.9" pOLED 165Hz',
      'Tela Externa': '3.6" pOLED 144Hz',
      Processador: 'Snapdragon 8+ Gen 1',
      Armazenamento: '256 GB',
    },
    inStock: true,
    stockQuantity: 20,
  },
  {
    id: 5,
    name: 'Asus ROG Phone 8 Pro',
    price: 9999.0,
    originalPrice: 11999.0,
    images: [
      '/imagens_produtos/5.jpg'
    ],
    rating: 4.9,
    reviews: 650,
    category: 'smartphones',
    discount: 17,
    description:
      'O smartphone gamer definitivo. Desempenho extremo, sistema de refrigeração avançado e tela impecável para a melhor experiência em jogos.',
    features: [
      'Snapdragon 8 Gen 3 otimizado para games',
      'Sistema de refrigeração GameCool 8',
      'Tela Samsung AMOLED de 165Hz',
      'AirTriggers ultrassônicos programáveis',
    ],
    specifications: {
      Tela: '6.78" AMOLED 165Hz',
      Processador: 'Snapdragon 8 Gen 3',
      RAM: '16GB ou 24GB',
      Bateria: '5500mAh',
    },
    inStock: true,
    stockQuantity: 15,
  },
  {
    id: 6,
    name: 'MacBook Air M3 13',
    price: 9499.0,
    originalPrice: 10999.0,
    images: [
      '/imagens_produtos/6.jpg'
    ],
    rating: 4.9,
    reviews: 1500,
    category: 'notebooks',
    discount: 14,
    description:
      'Superleve e superpotente. O MacBook Air com chip M3 é perfeito para trabalhar, estudar e se divertir em qualquer lugar, com uma bateria que dura o dia todo.',
    features: [
      'Chip Apple M3 com CPU de 8 núcleos e GPU de até 10 núcleos',
      'Até 18 horas de bateria',
      'Tela Liquid Retina de 13,6 polegadas',
      'Design sem ventoinha, totalmente silencioso',
    ],
    specifications: {
      Tela: '13.6" Liquid Retina',
      Processador: 'Apple M3',
      Memória: '8GB, 16GB, 24GB',
      Armazenamento: '256GB, 512GB, 1TB, 2TB SSD',
    },
    inStock: true,
    stockQuantity: 40,
  },
  {
    id: 7,
    name: 'Dell XPS 15',
    price: 13999.0,
    originalPrice: 15499.0,
    images: [
      '/imagens_produtos/7.jpg'
    ],
    rating: 4.8,
    reviews: 880,
    category: 'notebooks',
    discount: 10,
    description:
      'O notebook perfeito para criadores. Com tela deslumbrante, desempenho de ponta e design premium em alumínio, o XPS 15 eleva sua criatividade.',
    features: [
      'Processador Intel Core Ultra 9',
      'Placa de vídeo NVIDIA GeForce RTX 4060',
      'Tela OLED 3.5K Touch',
      'Chassi de alumínio usinado em CNC',
    ],
    specifications: {
      Processador: 'Intel Core Ultra 9 185H',
      'Placa de Vídeo': 'NVIDIA RTX 4060 8GB GDDR6',
      Memória: '32 GB DDR5',
      Armazenamento: '1 TB SSD NVMe',
    },
    inStock: true,
    stockQuantity: 25,
  },
  {
    id: 8,
    name: 'Lenovo Yoga Slim 7i',
    price: 7899.0,
    originalPrice: 8999.0,
    images: [
      '/imagens_produtos/8.jpg'
    ],
    rating: 4.7,
    reviews: 640,
    category: 'notebooks',
    discount: 12,
    description:
      'Potência e portabilidade se encontram no Yoga Slim 7i. Certificado pela plataforma Intel Evo, ele oferece uma experiência premium em um corpo fino e leve.',
    features: [
      'Plataforma Intel Evo com Core Ultra 7',
      'Tela 14" OLED com Dolby Vision',
      'Corpo todo em metal pesando apenas 1,35 kg',
      'Bateria de longa duração com carregamento rápido',
    ],
    specifications: {
      Processador: 'Intel Core Ultra 7 155H',
      Tela: '14" OLED 120Hz',
      Memória: '16 GB LPDDR5X',
      Armazenamento: '1 TB SSD NVMe Gen4',
    },
    inStock: true,
    stockQuantity: 35,
  },
  {
    id: 9,
    name: 'Samsung Galaxy Book4 Ultra',
    price: 15999.0,
    originalPrice: 18999.0,
    images: [
      '/imagens_produtos/9.jpg'
    ],
    rating: 4.8,
    reviews: 530,
    category: 'notebooks',
    discount: 16,
    description:
      'O notebook mais poderoso da Samsung, projetado para máxima performance em jogos e criação de conteúdo, com a melhor tela da categoria.',
    features: [
      'Tela Dynamic AMOLED 2X Touchscreen',
      'Processador Intel Core Ultra 9 de alta performance',
      'Placa de vídeo NVIDIA GeForce RTX 4070',
      'Ecossistema Galaxy integrado',
    ],
    specifications: {
      Tela: '16" Dynamic AMOLED 2X 120Hz',
      Processador: 'Intel Core Ultra 9 185H',
      'Placa de Vídeo': 'NVIDIA RTX 4070 8GB',
      Armazenamento: '2 TB SSD NVMe',
    },
    inStock: true,
    stockQuantity: 18,
  },
  {
    id: 10,
    name: 'Acer Nitro 5',
    price: 5899.0,
    originalPrice: 6999.0,
    images: [
      '/imagens_produtos/10.jpg'
    ],
    rating: 4.5,
    reviews: 1200,
    category: 'notebooks',
    discount: 16,
    description:
      'Domine seus jogos com o Acer Nitro 5. Equipado com processador Intel e placa de vídeo NVIDIA, é a porta de entrada ideal para o universo gamer.',
    features: [
      'Processador Intel Core i5 de 12ª Geração',
      'Placa de vídeo NVIDIA GeForce RTX 3050',
      'Tela 15.6" Full HD IPS de 144Hz',
      'Teclado retroiluminado em vermelho',
    ],
    specifications: {
      Processador: 'Intel Core i5-12450H',
      'Placa de Vídeo': 'NVIDIA RTX 3050 4GB',
      Memória: '16 GB DDR4',
      Armazenamento: '512 GB SSD NVMe',
    },
    inStock: true,
    stockQuantity: 60,
  },

  {
    id: 11,
    name: 'iPad Pro 11" M4',
    price: 11299.0,
    originalPrice: 12299.0,
    images: [
      '/imagens_produtos/11.jpg'
    ],
    rating: 4.9,
    reviews: 950,
    category: 'tablets',
    discount: 8,
    description:
      'Impossivelmente fino. Incrivelmente poderoso. O novo iPad Pro com chip M4 e tela Ultra Retina XDR redefine o que um tablet pode fazer.',
    features: [
      'Chip Apple M4 para desempenho revolucionário',
      'Tela Tandem OLED Ultra Retina XDR',
      'Design mais fino e leve da Apple',
      'Compatível com Apple Pencil Pro e Magic Keyboard',
    ],
    specifications: {
      Tela: '11" Ultra Retina XDR (Tandem OLED)',
      Processador: 'Apple M4',
      Armazenamento: '256GB a 2TB',
      Câmera: 'Grande-angular de 12 MP',
    },
    inStock: true,
    stockQuantity: 28,
  },
  {
    id: 12,
    name: 'Samsung Galaxy Tab S9 Ultra',
    price: 7499.0,
    originalPrice: 8999.0,
    images: [
      '/imagens_produtos/12.jpg'
    ],
    rating: 4.8,
    reviews: 810,
    category: 'tablets',
    discount: 17,
    description:
      'A maior e mais imersiva tela em um tablet Galaxy. Ideal para multitarefa, criação e entretenimento, com a S Pen inclusa.',
    features: [
      'Tela gigante Dynamic AMOLED 2X de 14,6"',
      'Processador Snapdragon 8 Gen 2 for Galaxy',
      'Estrutura de Armor Aluminum, resistente à água e poeira (IP68)',
      'S Pen inclusa com baixa latência',
    ],
    specifications: {
      Tela: '14.6" Dynamic AMOLED 2X 120Hz',
      Processador: 'Snapdragon 8 Gen 2 for Galaxy',
      Memória: '12 GB',
      Armazenamento: '256GB / 512GB',
    },
    inStock: true,
    stockQuantity: 33,
  },
  {
    id: 13,
    name: 'Xiaomi Pad 6',
    price: 2199.0,
    originalPrice: 2599.0,
    images: [
      '/imagens_produtos/13.jpg'
    ],
    rating: 4.7,
    reviews: 1300,
    category: 'tablets',
    discount: 15,
    description:
      'Trabalhe e jogue em alto nível com o Xiaomi Pad 6. Tela de alta resolução com 144Hz, processador potente e design premium unibody de metal.',
    features: [
      'Tela de 11" com resolução 2.8K e 144Hz',
      'Processador Snapdragon 870',
      'Quatro alto-falantes com Dolby Atmos',
      'Bateria de 8840mAh com carregamento rápido de 33W',
    ],
    specifications: {
      Tela: '11" IPS LCD 144Hz',
      Processador: 'Snapdragon 870',
      Memória: '6GB ou 8GB',
      Armazenamento: '128GB ou 256GB',
    },
    inStock: true,
    stockQuantity: 70,
  },
  {
    id: 14,
    name: 'Sony WH-1000XM5',
    price: 1899.0,
    originalPrice: 2499.0,
    images: [
      '/imagens_produtos/14.jpg'
    ],
    rating: 4.9,
    reviews: 3200,
    category: 'fones',
    discount: 24,
    description:
      'O melhor cancelamento de ruído do mercado, agora mais inteligente. Ouça música com qualidade de áudio excepcional e desfrute do silêncio quando precisar.',
    features: [
      'Cancelamento de ruído líder do setor com dois processadores',
      'Qualidade de som Hi-Res Audio Wireless',
      'Até 30 horas de bateria',
      'Design ultraconfortável e leve',
    ],
    specifications: {
      Tipo: 'Over-ear',
      Conectividade: 'Bluetooth 5.2',
      'Cancelamento de Ruído': 'Sim, Ativo (ANC)',
      Bateria: 'Até 30h com ANC ligado',
    },
    inStock: true,
    stockQuantity: 80,
  },
  {
    id: 15,
    name: 'Apple AirPods Pro (2ª geração)',
    price: 1799.0,
    originalPrice: 2199.0,
    images: [
      '/imagens_produtos/15.jpg'
    ],
    rating: 4.8,
    reviews: 4500,
    category: 'fones',
    discount: 18,
    description:
      'Áudio imersivo e cancelamento de ruído até 2x mais eficaz. O AirPods Pro reinventa a experiência de áudio pessoal.',
    features: [
      'Cancelamento Ativo de Ruído e modo Ambiente Adaptável',
      'Áudio Espacial Personalizado com Rastreamento Dinâmico da Cabeça',
      'Estojo de recarga MagSafe com alto-falante integrado',
      'Controle por toque para ajustar o volume',
    ],
    specifications: {
      Tipo: 'Intra-auricular (In-ear)',
      Conectividade: 'Bluetooth 5.3',
      Chip: 'Apple H2',
      Resistência: 'IPX4 (suor e água)',
    },
    inStock: true,
    stockQuantity: 120,
  },
  {
    id: 16,
    name: 'JBL Tune 770NC',
    price: 499.0,
    originalPrice: 649.0,
    images: [
      '/imagens_produtos/16.jpg'
    ],
    rating: 4.6,
    reviews: 2800,
    category: 'fones',
    discount: 23,
    description:
      'Som JBL Pure Bass e cancelamento de ruído adaptativo. O Tune 770NC oferece uma experiência sonora potente e livre de distrações por um preço acessível.',
    features: [
      'JBL Pure Bass Sound',
      'Cancelamento de Ruído Adaptativo com Smart Ambient',
      'Até 70 horas de autonomia de bateria',
      'Conexão multipontos',
    ],
    specifications: {
      Tipo: 'Over-ear',
      Conectividade: 'Bluetooth 5.3',
      'Cancelamento de Ruído': 'Sim, Adaptativo',
      Bateria: 'Até 70h',
    },
    inStock: true,
    stockQuantity: 150,
  },
  {
    id: 17,
    name: 'Samsung Galaxy Buds FE',
    price: 449.0,
    originalPrice: 599.0,
    images: [
      '/imagens_produtos/17.jpg'
    ],
    rating: 4.5,
    reviews: 1900,
    category: 'fones',
    discount: 25,
    description:
      'Seu companheiro de áudio para o dia a dia. Com design ergonômico, cancelamento de ruído ativo e som de alta qualidade, o Buds FE é a escolha inteligente.',
    features: [
      'Cancelamento de Ruído Ativo (ANC)',
      'Design confortável e seguro',
      'Som nítido com graves potentes',
      'Fácil pareamento com dispositivos Galaxy',
    ],
    specifications: {
      Tipo: 'Intra-auricular (In-ear)',
      Conectividade: 'Bluetooth 5.2',
      'Cancelamento de Ruído': 'Sim, Ativo',
      Bateria: 'Até 8.5h (fone), 30h (com estojo)',
    },
    inStock: true,
    stockQuantity: 200,
  },

  {
    id: 18,
    name: 'Apple Watch Series 9',
    price: 3999.0,
    originalPrice: 4499.0,
    images: [
      '/imagens_produtos/18.jpg'
    ],
    rating: 4.9,
    reviews: 2800,
    category: 'smartwatches',
    discount: 11,
    description:
      'Seu parceiro essencial para uma vida saudável. Monitore sua saúde, atividades físicas e fique sempre conectado com o smartwatch mais avançado do mundo.',
    features: [
      'Gesto de toque duplo para interações mágicas',
      'Tela Retina Sempre Ativa mais brilhante',
      'App Oxigênio no Sangue e App ECG',
      'Detecção de Acidente e Detecção de Queda',
    ],
    specifications: {
      Caixa: '41mm ou 45mm',
      Chip: 'S9 SiP',
      Tela: 'Retina LTPO OLED Sempre Ativa',
      Sensores: 'Cardíaco, Oxigênio no Sangue, Temperatura',
    },
    inStock: true,
    stockQuantity: 90,
  },
  {
    id: 19,
    name: 'Samsung Galaxy Watch6 Classic',
    price: 2499.0,
    originalPrice: 3199.0,
    images: [
      '/imagens_produtos/19.jpg'
    ],
    rating: 4.7,
    reviews: 1750,
    category: 'smartwatches',
    discount: 22,
    description:
      'O design atemporal encontra a tecnologia moderna. Com sua coroa giratória física, o Galaxy Watch6 Classic oferece navegação intuitiva e monitoramento completo de saúde.',
    features: [
      'Coroa giratória física para controle preciso',
      'Tela Super AMOLED com cristal de safira',
      'Sensor BioActive para monitoramento de saúde',
      'Análise de composição corporal',
    ],
    specifications: {
      Caixa: '43mm ou 47mm',
      Material: 'Aço inoxidável',
      Tela: 'Super AMOLED',
      Sistema: 'Wear OS Powered by Samsung',
    },
    inStock: true,
    stockQuantity: 75,
  },
  {
    id: 20,
    name: 'Amazfit GTR 4',
    price: 1099.0,
    originalPrice: 1299.0,
    images: [
      '/imagens_produtos/20.jpg'
    ],
    rating: 4.6,
    reviews: 2200,
    category: 'smartwatches',
    discount: 15,
    description:
      'Um smartwatch premium para quem leva a sério a atividade física. GPS de alta precisão, mais de 150 modos esportivos e uma bateria que dura semanas.',
    features: [
      'GPS de dupla frequência e 6 sistemas de satélite',
      'Até 14 dias de autonomia de bateria',
      'Mais de 150 modos esportivos com reconhecimento inteligente',
      'Corpo em liga de alumínio e design clássico',
    ],
    specifications: {
      Tela: '1.43" AMOLED HD',
      Bateria: 'Até 14 dias (uso típico)',
      GPS: 'Sim, dupla frequência',
      'Resistência à água': '5 ATM',
    },
    inStock: true,
    stockQuantity: 110,
  },
  {
    id: 21,
    name: 'Console PlayStation 5 Slim',
    price: 3799.0,
    originalPrice: 4299.0,
    images: [
      '/imagens_produtos/21.jpg'
    ],
    rating: 4.9,
    reviews: 5500,
    category: 'consoles',
    discount: 12,
    description:
      'A nova geração de jogos em um design mais compacto. Experimente o carregamento ultrarrápido do SSD, imersão profunda com o controle DualSense e jogos incríveis.',
    features: [
      'Design Slim e compacto',
      'SSD de 1TB ultrarrápido',
      'Controle sem fio DualSense com feedback tátil',
      'Compatível com jogos em 4K e 120Hz',
    ],
    specifications: {
      CPU: 'x86-64-AMD Ryzen “Zen 2”',
      GPU: 'AMD Radeon RDNA 2',
      Memória: '16GB GDDR6',
      Armazenamento: '1TB SSD',
    },
    inStock: true,
    stockQuantity: 100,
  },
  {
    id: 22,
    name: 'Console Xbox Series X',
    price: 4199.0,
    originalPrice: 4499.0,
    images: [
      '/imagens_produtos/22.jpg'
    ],
    rating: 4.9,
    reviews: 4800,
    category: 'consoles',
    discount: 7,
    description:
      'O Xbox mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles com o melhor visual e desempenho.',
    features: [
      '12 teraflops de poder de processamento',
      'SSD NVMe de 1 TB customizado',
      'Xbox Velocity Architecture',
      'Acesso ao Game Pass (vendido separadamente)',
    ],
    specifications: {
      CPU: '8X Cores @ 3.8 GHz (3.66 GHz w/SMT) Custom Zen 2 CPU',
      GPU: '12 TFLOPS, 52 CUs @ 1.825 GHz Custom RDNA 2 GPU',
      Memória: '16GB GDDR6',
      Armazenamento: '1TB SSD',
    },
    inStock: true,
    stockQuantity: 85,
  },
  {
    id: 23,
    name: 'Nintendo Switch OLED',
    price: 2399.0,
    originalPrice: 2699.0,
    images: [
      '/imagens_produtos/23.jpg'
    ],
    rating: 4.8,
    reviews: 6200,
    category: 'consoles',
    discount: 11,
    description:
      'Jogue em casa ou em qualquer lugar com a vibrante tela OLED de 7 polegadas. O Nintendo Switch se adapta ao seu estilo de vida.',
    features: [
      'Tela OLED de 7 polegadas com cores vivas',
      'Três modos de jogo: TV, semiportátil e portátil',
      'Joy-Con destacáveis',
      '64 GB de armazenamento interno',
    ],
    specifications: {
      Tela: '7" OLED Touchscreen',
      Armazenamento: '64 GB',
      Saída: 'Até 1080p (modo TV), 720p (modo portátil)',
      Áudio: 'Stereo',
    },
    inStock: true,
    stockQuantity: 130,
  },
  {
    id: 24,
    name: 'Smart TV Samsung Crystal 55" 4K',
    price: 2799.0,
    originalPrice: 3299.0,
    images: [
      '/imagens_produtos/24.jpg'
    ],
    rating: 4.7,
    reviews: 3100,
    category: 'tvs',
    discount: 15,
    description:
      'Cores puras e vibrantes em resolução 4K. A TV Samsung Crystal UHD oferece uma experiência de imagem imersiva com seu processador Crystal 4K.',
    features: [
      'Processador Crystal 4K',
      'Tela sem limites aparentes',
      'Plataforma Tizen com principais apps de streaming',
      'Múltiplos assistentes de voz (Bixby, Alexa)',
    ],
    specifications: {
      Tamanho: '55 polegadas',
      Resolução: '4K UHD (3840 x 2160)',
      Sistema: 'Tizen',
      Conexões: '3 HDMI, 2 USB',
    },
    inStock: true,
    stockQuantity: 95,
  },
  {
    id: 25,
    name: 'Smart TV LG QNED 65" 4K',
    price: 4999.0,
    originalPrice: 5999.0,
    images: [
      '/imagens_produtos/25.jpg'
    ],
    rating: 4.8,
    reviews: 1400,
    category: 'tvs',
    discount: 17,
    description:
      'A evolução das TVs LCD. Com as tecnologias Quantum Dot e NanoCell, a LG QNED entrega cores mais puras e um brilho surpreendente.',
    features: [
      'Tecnologia Quantum Dot NanoCell',
      'Processador α7 Gen6 AI 4K',
      'Painel de 120Hz ideal para games',
      'Sistema webOS 23 com ThinQ AI',
    ],
    specifications: {
      Tamanho: '65 polegadas',
      Resolução: '4K UHD (3840 x 2160)',
      TaxaDeAtualização: '120Hz',
      Sistema: 'webOS 23',
    },
    inStock: true,
    stockQuantity: 55,
  },
  {
    id: 26,
    name: 'Câmera Sony Alpha a7 IV',
    price: 15999.0,
    originalPrice: 17999.0,
    images: [
      '/imagens_produtos/26.jpg'
    ],
    rating: 4.9,
    reviews: 850,
    category: 'cameras',
    discount: 11,
    description:
      'A câmera híbrida perfeita. Com um novo sensor de 33MP e gravação de vídeo 4K 60p, a a7 IV é a ferramenta ideal para fotógrafos e videomakers.',
    features: [
      'Sensor Exmor R full-frame de 33 MP',
      'Gravação de vídeo 4K 60p em 10-bit',
      'Foco automático em tempo real para humanos, animais e pássaros',
      'Corpo com estabilização de 5 eixos',
    ],
    specifications: {
      Sensor: 'Full-Frame Exmor R CMOS 33MP',
      Processador: 'BIONZ XR',
      ISO: '100-51200 (Expansível até 204800)',
      Vídeo: '4K 60p',
    },
    inStock: true,
    stockQuantity: 22,
  },
  {
    id: 27,
    name: 'Drone DJI Mini 4 Pro',
    price: 6999.0,
    originalPrice: 7999.0,
    images: [
      '/imagens_produtos/27.jpg'
    ],
    rating: 4.9,
    reviews: 1100,
    category: 'drones',
    discount: 13,
    description:
      'Capture imagens aéreas incríveis com facilidade. O Mini 4 Pro é compacto, leve (menos de 249g) e possui detecção de obstáculos omnidirecional.',
    features: [
      'Menos de 249g, não requer registro em muitos países',
      'Detecção de obstáculos omnidirecional',
      'Gravação 4K/60fps HDR e vídeos verticais',
      'Tempo de voo estendido',
    ],
    specifications: {
      Peso: '< 249g',
      Câmera: '1/1.3" CMOS, 48MP',
      Vídeo: '4K/60fps HDR',
      'Tempo de Voo': 'Até 34 minutos',
    },
    inStock: true,
    stockQuantity: 48,
  },
  {
    id: 28,
    name: 'Monitor Gamer Dell Alienware 27" OLED',
    price: 7499.0,
    originalPrice: 8299.0,
    images: [
      '/imagens_produtos/28.jpg'
    ],
    rating: 4.8,
    reviews: 450,
    category: 'monitores',
    discount: 10,
    description:
      'Vantagem competitiva com a tecnologia QD-OLED. Contraste infinito, cores vibrantes e uma taxa de atualização de 360Hz para uma jogabilidade ultra fluida.',
    features: [
      'Painel QD-OLED com contraste infinito',
      'Taxa de atualização de 360Hz e tempo de resposta de 0,03ms',
      'Resolução QHD (2560x1440)',
      'Compatível com AMD FreeSync Premium Pro e NVIDIA G-SYNC',
    ],
    specifications: {
      Tamanho: '27 polegadas',
      Painel: 'QD-OLED',
      Resolução: 'QHD (2560x1440)',
      TaxaDeAtualização: '360Hz',
    },
    inStock: false,
    stockQuantity: 0,
  },
  {
    id: 29,
    name: 'Mouse Gamer Logitech G Pro X Superlight',
    price: 699.0,
    originalPrice: 849.0,
    images: [
      '/imagens_produtos/29.jpg'
    ],
    rating: 4.9,
    reviews: 3500,
    category: 'perifericos',
    discount: 18,
    description:
      'Projetado com e para pro-players. Com menos de 63 gramas e a tecnologia sem fio LIGHTSPEED, o G Pro X Superlight oferece velocidade e precisão sem barreiras.',
    features: [
      'Ultraleve, com menos de 63 gramas',
      'Tecnologia sem fio LIGHTSPEED de nível profissional',
      'Sensor HERO 25K de alta precisão',
      'Pés de PTFE com zero aditivo para deslize suave',
    ],
    specifications: {
      Peso: '< 63g',
      Sensor: 'HERO 25K',
      Resolução: '100 – 25.600 DPI',
      Conexão: 'LIGHTSPEED Wireless',
    },
    inStock: true,
    stockQuantity: 180,
  },
  {
    id: 30,
    name: 'Teclado Mecânico Redragon Kumara K552',
    price: 249.0,
    originalPrice: 329.0,
    images: [
      '/imagens_produtos/30.jpg'
    ],
    rating: 4.7,
    reviews: 8900,
    category: 'perifericos',
    discount: 24,
    description:
      'O teclado mecânico mais popular do Brasil. O Kumara oferece switches Outemu Blue para um feedback tátil e sonoro, construção robusta e iluminação Rainbow.',
    features: [
      'Switches mecânicos Outemu Blue',
      'Formato compacto TKL (Tenkeyless)',
      'Construção em metal e plástico ABS',
      'Iluminação Rainbow com vários modos',
    ],
    specifications: {
      Formato: 'TKL',
      Switches: 'Outemu Blue (Clicky)',
      Layout: 'ABNT2',
      Iluminação: 'Rainbow',
    },
    inStock: true,
    stockQuantity: 300,
  },
  {
    id: 31,
    name: 'Samsung Galaxy Z Fold 5',
    price: 10999.0,
    originalPrice: 13799.0,
    images: [
      '/imagens_produtos/31.jpg'
    ],
    rating: 4.7,
    reviews: 450,
    category: 'smartphones',
    discount: 20,
    description:
      'Uma tela de cinema que cabe no seu bolso. O Galaxy Z Fold 5 oferece a experiência de um tablet com a portabilidade de um smartphone.',
    features: [
      'Tela principal de 7.6" Dynamic AMOLED 2X',
      'Dobradiça Flex aprimorada, mais fina e resistente',
      'Modo Flex para multitarefa e fotos hands-free',
      'Compatibilidade com S Pen',
    ],
    specifications: {
      'Tela Interna': '7.6" Dynamic AMOLED 2X',
      'Tela Externa': '6.2" Dynamic AMOLED 2X',
      Processador: 'Snapdragon 8 Gen 2 for Galaxy',
      RAM: '12 GB',
    },
    inStock: true,
    stockQuantity: 25,
  },
  {
    id: 32,
    name: 'iPad Air 13" M2',
    price: 7499.0,
    originalPrice: 8499.0,
    images: [
      '/imagens_produtos/32.jpg'
    ],
    rating: 4.8,
    reviews: 780,
    category: 'tablets',
    discount: 12,
    description:
      'Potência de sobra em um design fino e leve. Com o chip M2, o iPad Air é uma ferramenta versátil para trabalho, estudos e criatividade.',
    features: [
      'Chip Apple M2 de alta performance',
      'Tela Liquid Retina de 13 polegadas',
      'Câmera frontal na horizontal com Palco Central',
      'Compatível com Apple Pencil Pro',
    ],
    specifications: {
      Tela: '13" Liquid Retina',
      Processador: 'Apple M2',
      Armazenamento: '128GB a 1TB',
      Câmera: '12MP',
    },
    inStock: true,
    stockQuantity: 50,
  },
  {
    id: 33,
    name: 'Headset Gamer HyperX Cloud III',
    price: 599.0,
    originalPrice: 749.0,
    images: [
      '/imagens_produtos/33.jpg'
    ],
    rating: 4.8,
    reviews: 2100,
    category: 'perifericos',
    discount: 20,
    description:
      'A lenda evoluiu. O Cloud III oferece o conforto e a qualidade de áudio que consagraram a linha, agora com drivers angulados e microfone aprimorado.',
    features: [
      'Conforto exclusivo HyperX com espuma de memória',
      'Drivers angulados de 53 mm',
      'Microfone ultranítido de 10 mm com cancelamento de ruído',
      'Compatível com PC, PS5, Xbox, Switch e mobile',
    ],
    specifications: {
      Drivers: '53mm Neodímio',
      Conexão: '3.5mm, USB-A, USB-C',
      Microfone: 'Removível, condensador de eletreto',
      Compatibilidade: 'Multiplataforma',
    },
    inStock: true,
    stockQuantity: 150,
  },
  {
    id: 34,
    name: 'Soundbar JBL Bar 9.1',
    price: 4599.0,
    originalPrice: 5999.0,
    images: [
      '/imagens_produtos/34.jpg'
    ],
    rating: 4.7,
    reviews: 950,
    category: 'audio',
    discount: 23,
    description:
      'A experiência de cinema definitiva em sua casa. Som surround real com Dolby Atmos e caixas destacáveis sem fio para uma imersão completa.',
    features: [
      'Som surround real com caixas destacáveis sem fio',
      'Dolby Atmos e DTS:X integrados',
      'Subwoofer sem fio de 10 polegadas',
      'Potência total de 820W',
    ],
    specifications: {
      Potência: '820W RMS',
      Canais: '5.1.4',
      Conexões: 'HDMI eARC, Óptica, Bluetooth, Wi-Fi',
      Formatos: 'Dolby Atmos, DTS:X',
    },
    inStock: true,
    stockQuantity: 40,
  },
  {
    id: 35,
    name: 'Kindle Paperwhite Signature Edition',
    price: 749.0,
    originalPrice: 849.0,
    images: [
      '/imagens_produtos/35.jpg'
    ],
    rating: 4.9,
    reviews: 15000,
    category: 'leitores',
    discount: 12,
    description:
      'Sua biblioteca em um único lugar. Tela antirreflexo de 6,8”, temperatura de luz ajustável, 32GB de armazenamento e carregamento sem fio.',
    features: [
      'Tela de 6.8" com 300 ppi, sem reflexo',
      'Temperatura de luz ajustável',
      '32 GB de armazenamento',
      'Carregamento sem fio e USB-C',
    ],
    specifications: {
      Tela: '6.8" Paperwhite',
      Armazenamento: '32 GB',
      Resistência: 'À prova d’água (IPX8)',
      Iluminação: '17 LEDs + Luz adaptável',
    },
    inStock: true,
    stockQuantity: 250,
  },
  {
    id: 36,
    name: 'Google Pixel 8 Pro',
    price: 7999.0,
    originalPrice: 8999.0,
    images: [
      '/imagens_produtos/36.jpg'
    ],
    rating: 4.7,
    reviews: 1200,
    category: 'smartphones',
    discount: 11,
    description:
      'A câmera mais inteligente em um smartphone. Com o chip Google Tensor G3 e recursos de IA, o Pixel 8 Pro captura fotos e vídeos incríveis com facilidade.',
    features: [
      'Chip Google Tensor G3',
      'Câmera tripla com controles Pro',
      'Recursos de IA como Melhor Versão e Editor Mágico',
      'Tela Super Actua de 6,7 polegadas e 120Hz',
    ],
    specifications: {
      Tela: '6.7" LTPO OLED',
      Processador: 'Google Tensor G3',
      Câmera: '50MP + 48MP + 48MP',
      Sistema: 'Android Puro',
    },
    inStock: true,
    stockQuantity: 30,
  },
  {
    id: 37,
    name: 'Notebook Gamer Avell A70 MOB',
    price: 11999.0,
    originalPrice: 13499.0,
    images: [
      '/imagens_produtos/37.jpg'
    ],
    rating: 4.8,
    reviews: 350,
    category: 'notebooks',
    discount: 11,
    description:
      'Alto desempenho para gamers e profissionais. O Avell A70 MOB combina processadores Intel de alta performance com placas de vídeo NVIDIA GeForce RTX série 40.',
    features: [
      'Processador Intel Core i9-13900HX',
      'Placa de vídeo NVIDIA GeForce RTX 4060',
      'Tela de 16" QHD+ (2560x1600) de 165Hz',
      'Teclado mecânico com iluminação RGB por tecla',
    ],
    specifications: {
      Processador: 'Intel Core i9-13900HX',
      'Placa de Vídeo': 'NVIDIA RTX 4060 8GB GDDR6',
      Memória: '32 GB DDR5',
      Armazenamento: '1 TB SSD NVMe Gen4',
    },
    inStock: true,
    stockQuantity: 20,
  },
  {
    id: 38,
    name: 'Edifier W820NB Plus',
    price: 399.0,
    originalPrice: 549.0,
    images: [
      '/imagens_produtos/38.jpg'
    ],
    rating: 4.7,
    reviews: 4100,
    category: 'fones',
    discount: 27,
    description:
      'Áudio de alta resolução e cancelamento de ruído com um custo-benefício imbatível. O W820NB Plus é perfeito para o dia a dia, trabalho e viagens.',
    features: [
      'Certificação Hi-Res Audio e Hi-Res Audio Wireless (LDAC)',
      'Cancelamento de ruído ativo híbrido',
      'Até 49 horas de bateria',
      'Drivers de 40mm com diafragma de titânio',
    ],
    specifications: {
      Tipo: 'Over-ear',
      Conectividade: 'Bluetooth 5.2',
      'Cancelamento de Ruído': 'Sim, Híbrido',
      Codecs: 'LDAC, SBC',
    },
    inStock: true,
    stockQuantity: 280,
  },
  {
    id: 39,
    name: 'Garmin Forerunner 265',
    price: 3199.0,
    originalPrice: 3599.0,
    images: [
      '/imagens_produtos/39.jpg'
    ],
    rating: 4.8,
    reviews: 980,
    category: 'smartwatches',
    discount: 11,
    description:
      'Treine de forma brilhante. Com tela AMOLED colorida, métricas de treino avançadas e relatórios matinais, o Forerunner 265 é o seu parceiro de corrida ideal.',
    features: [
      'Tela AMOLED vibrante',
      'Relatório matinal com status da VFC e sugestões de treino',
      'Métricas de corrida avançadas e potência de corrida no pulso',
      'Até 13 dias de bateria no modo smartwatch',
    ],
    specifications: {
      Tela: 'AMOLED',
      Lente : 'Corning Gorilla Glass 3',
      GPS: 'Sim, multi-banda',
      Bateria: 'Até 13 dias',
    },
    inStock: true,
    stockQuantity: 65,
  },
  {
    id: 40,
    name: 'Roteador Wi-Fi 6 TP-Link Archer AX73',
    price: 799.0,
    originalPrice: 999.0,
    images: [
      '/imagens_produtos/40.jpg'
    ],
    rating: 4.8,
    reviews: 2500,
    category: 'redes',
    discount: 20,
    description:
      'Leve sua rede Wi-Fi para o próximo nível. O Archer AX73 oferece velocidades gigabit, ampla cobertura e capacidade para conectar dezenas de dispositivos simultaneamente.',
    features: [
      'Wi-Fi 6 Dual-Band AX5400',
      '6 antenas de alto desempenho e Beamforming',
      'Tecnologia OFDMA e MU-MIMO',
      'Segurança HomeShield Pro',
    ],
    specifications: {
      Padrão: 'Wi-Fi 6 (802.11ax)',
      Velocidade: 'Até 5400 Mbps',
      Portas: '1x WAN Gigabit, 4x LAN Gigabit',
      Antenas: '6 externas',
    },
    inStock: true,
    stockQuantity: 140,
  },
  {
    id: 41,
    name: 'Motorola Razr 50 Ultra',
    price: 7499.0,
    originalPrice: 8499.0,
    images: [
      '/imagens_produtos/41.jpg'
    ],
    rating: 4.6,
    reviews: 850,
    category: 'smartphones',
    discount: 12,
    description: 'O icônico flip reimaginado. O Motorola Razr 50 Ultra apresenta uma tela externa maior e mais funcional, e um design ultracompacto e elegante.',
    features: [
      'Tela externa pOLED de 4.0 polegadas',
      'Tela interna pOLED de 6,9 polegadas com 165Hz',
      'Processador Snapdragon 8s Gen 3',
      'Design dobrável com zero gap',
      'Experiência de câmera versátil com Flex View'
    ],
    specifications: {
      TelaExterna: '4.0" pOLED',
      TelaInterna: '6.9" FHD+ pOLED 165Hz',
      Processador: 'Snapdragon 8s Gen 3',
      Câmera: '50MP (Principal) + 13MP (Híbrida)',
      Bateria: '4000mAh com carregamento TurboPower 33W'
    },
    inStock: true,
    stockQuantity: 28
  },
  {
    id: 42,
    name: 'Philips Hue Play Gradient Lightstrip 65',
    price: 1899.0,
    originalPrice: 2199.0,
    images: [
      '/imagens_produtos/42.jpg'
    ],
    rating: 4.8,
    reviews: 1500,
    category: 'smart-home',
    discount: 14,
    description: 'Crie uma experiência de entretenimento imersiva. A fita de luz Play Gradient produz um degradê de luzes coloridas que reagem ao conteúdo da sua TV.',
    features: [
      'Mistura de várias cores de luz em uma única fita',
      'Sincroniza com o conteúdo da sua TV (requer Hue Bridge e Sync Box)',
      'Projetado para TVs de 65 a 70 polegadas',
      'Efeito de luz surround',
      'Fácil de instalar'
    ],
    specifications: {
      Potência: '20W',
      Fluxo_Luminoso: '1100 lúmens',
      Vida_Útil: '25.000 horas',
      Compatibilidade: 'Philips Hue Bridge, Amazon Alexa, Google Assistant',
      Tamanho: 'Para TVs de 65-70"'
    },
    inStock: true,
    stockQuantity: 65
  },
  {
    id: 43,
    name: 'Wacom Cintiq Pro 27',
    price: 27999.0,
    originalPrice: 29999.0,
    images: [
      '/imagens_produtos/43.jpg'
    ],
    rating: 4.9,
    reviews: 350,
    category: 'accessories',
    discount: 7,
    description: 'A tela interativa definitiva para profissionais criativos. A Cintiq Pro 27 oferece precisão de cor incomparável, alta resolução e a nova caneta Pro Pen 3.',
    features: [
      'Tela 4K de 27 polegadas com taxa de atualização de 120Hz',
      '99% de cobertura Adobe RGB e 98% DCI-P3',
      'Caneta Pro Pen 3 personalizável',
      'ExpressKeys na parte traseira do monitor',
      'Bordas mais finas e design compacto'
    ],
    specifications: {
      Tamanho_da_Tela: '26.9 polegadas',
      Resolução: '4K (3840 x 2160)',
      Precisão_de_Cor: '1.07 bilhões de cores (10 bit)',
      Caneta: 'Pro Pen 3 com 8192 níveis de pressão',
      Interface: 'USB-C, HDMI, DisplayPort'
    },
    inStock: true,
    stockQuantity: 9
  },
  {
    id: 44,
    name: 'Sonos Era 300',
    price: 3499.0,
    originalPrice: 3999.0,
    images: [
      '/imagens_produtos/44.jpg'
    ],
    rating: 4.9,
    reviews: 1200,
    category: 'speakers',
    discount: 13,
    description: 'Sinta o som por todos os lados. Com seis drivers posicionados na frente, laterais e topo, a Era 300 oferece uma experiência de áudio espacial inovadora com Dolby Atmos.',
    features: [
      'Áudio Espacial com suporte a Dolby Atmos',
      'Seis drivers de alta performance',
      'Ajuste Trueplay que analisa a acústica do ambiente',
      'Controle por voz, app Sonos, Apple AirPlay 2',
      'Conectividade Wi-Fi 6 e Bluetooth'
    ],
    specifications: {
      Amplificadores: '6 amplificadores digitais classe D',
      Drivers: '4 tweeters, 2 woofers',
      Conectividade: 'Wi-Fi 6, Bluetooth 5.0, USB-C Line-in',
      Controle_de_Voz: 'Amazon Alexa, Sonos Voice Control',
      Dimensões: '160 x 260 x 185 mm'
    },
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 45,
    name: 'AMD Ryzen 9 9950X',
    price: 5499.0,
    originalPrice: 5999.0,
    images: [
      '/imagens_produtos/45.jpg'
    ],
    rating: 5.0,
    reviews: 800,
    category: 'components',
    discount: 8,
    description: 'O processador para desktops mais avançado do mundo. Com a nova arquitetura Zen 5, o Ryzen 9 9950X oferece um desempenho revolucionário em jogos e criação.',
    features: [
      '16 núcleos e 32 threads',
      'Nova arquitetura de núcleo "Zen 5"',
      'Velocidades de clock impulsionadas',
      'Suporte para PCIe 5.0 e memória DDR5',
      'Soquete AM5'
    ],
    specifications: {
      'Núcleos/Threads': '16/32',
      Clock_Máx: 'Até 5.7 GHz',
      Cache_Total: '80MB (L2+L3)',
      TDP: '170W',
      Soquete: 'AM5'
    },
    inStock: true,
    stockQuantity: 55
  },
  {
    id: 46,
    name: 'NVIDIA GeForce RTX 5090',
    price: 14999.0,
    originalPrice: 16999.0,
    images: [
      '/imagens_produtos/46.jpg'
    ],
    rating: 5.0,
    reviews: 1100,
    category: 'components',
    discount: 12,
    description: "A GPU para jogos mais rápida do planeta. A GeForce RTX 5090, com a arquitetura 'Blackwell', redefine o realismo e o desempenho em jogos e aplicações criativas.",
    features: [
      "Nova arquitetura de GPU 'Blackwell'",
      'Desempenho quântico em Ray Tracing e IA',
      'DLSS 4 com Frame Generation e Ray Reconstruction',
      'Memória GDDR7 de última geração',
      'Conector de energia 12V-2x6 aprimorado'
    ],
    specifications: {
      Memória: '32 GB GDDR7',
      Interface_da_Memória: '512-bit',
      CUDA_Cores: '~24576',
      Boost_Clock: 'A ser anunciado',
      TDP: '~450W'
    },
    inStock: false,
    stockQuantity: 0
  },
  {
    id: 47,
    name: 'iRobot Roomba Combo j9+',
    price: 8999.0,
    originalPrice: 9999.0,
    images: [
      '/imagens_produtos/47.jpg'
    ],
    rating: 4.8,
    reviews: 900,
    category: 'smart-home',
    discount: 10,
    description: 'O robô aspirador e passa pano mais inteligente do mundo. O Roomba Combo j9+ esvazia a sujeira e reabastece a água automaticamente, oferecendo uma limpeza completa.',
    features: [
      'Sistema de limpeza de 4 estágios',
      'Esfrega com pressão e movimento',
      'Base de autolimpeza e reabastecimento automático',
      'Navegação vSLAM com reconhecimento de objetos',
      'Sugestões personalizadas com iRobot OS'
    ],
    specifications: {
      Tipo: 'Aspirador e Passa Pano',
      Autonomia: 'Até 120 minutos',
      Sistema_de_Filtro: 'Filtro de alta eficiência',
      Navegação: 'PrecisionVision com câmera',
      Base: 'Clean Base Auto-Fill Dock'
    },
    inStock: true,
    stockQuantity: 20
  },
  {
    id: 48,
    name: 'Shure MV7+',
    price: 2199.0,
    originalPrice: 2499.0,
    images: [
      '/imagens_produtos/48.jpg'
    ],
    rating: 4.9,
    reviews: 1800,
    category: 'accessories',
    discount: 12,
    description: 'O microfone híbrido para podcasters e streamers, agora com mais recursos. O Shure MV7+ oferece saídas USB-C e XLR, e um painel de toque LED personalizável.',
    features: [
      'Saídas USB-C e XLR',
      'Painel de toque LED personalizável para silenciar',
      'Tecnologia de Isolamento de Voz aprimorada',
      'Modo de Nível Automático e filtros de som em tempo real',
      'Construção toda em metal'
    ],
    specifications: {
      Tipo: 'Dinâmico (Cardioide)',
      Resposta_de_Frequência: '50 Hz a 16,000 Hz',
      Conectividade: 'USB-C, XLR, 3.5mm (fone)',
      Qualidade_Digital: 'Até 24 bit / 48 kHz',
      Software: 'Shure MOTIV Desktop App'
    },
    inStock: true,
    stockQuantity: 50
  },
  {
    id: 49,
    name: 'Mac Mini M4',
    price: 6999.0,
    originalPrice: 7599.0,
    images: [
      '/imagens_produtos/49.jpg'
    ],
    rating: 4.8,
    reviews: 750,
    category: 'desktops',
    discount: 8,
    description: 'Poder e versatilidade em um design incrivelmente compacto. O Mac mini com o novo chip M4 é perfeito para trabalho, jogos e criação, com um desempenho surpreendente.',
    features: [
      'Chip Apple M4 com CPU de até 10 núcleos',
      'Neural Engine de 16 núcleos para aprendizado de máquina avançado',
      'Memória unificada de até 24GB',
      'Ampla variedade de portas, incluindo Thunderbolt / USB 4',
      'Design compacto de 19,7 cm'
    ],
    specifications: {
      Processador: 'Apple M4',
      Memória_RAM: '8GB, 16GB, 24GB',
      Armazenamento: '256GB, 512GB, 1TB, 2TB SSD',
      Portas: '2x Thunderbolt 4, 2x USB-A, HDMI, Ethernet',
      Conectividade: 'Wi-Fi 6E, Bluetooth 5.3'
    },
    inStock: true,
    stockQuantity: 35
  },
  {
    id: 50,
    name: 'Rode Wireless PRO',
    price: 2999.0,
    originalPrice: 3399.0,
    images: [
      '/imagens_produtos/50.jpg'
    ],
    rating: 5.0,
    reviews: 1100,
    category: 'accessories',
    discount: 12,
    description: 'O sistema de microfone sem fio compacto mais poderoso de todos os tempos. O Wireless PRO oferece áudio de 32-bit float, timecode e a tecnologia GainAssist para uma qualidade de som impecável.',
    features: [
      'Transmissão sem fio Série IV de 2.4GHz com alcance de 260m',
      'Gravação interna de 32-bit float',
      'Capacidade de timecode avançada',
      'Tecnologia GainAssist inteligente',
      'Kit completo com estojo de carregamento, microfones de lapela e acessórios'
    ],
    specifications: {
      Princípio_Acústico: 'Transdutor de pressão pré-polarizado',
      Padrão_Polar: 'Omnidirecional',
      Alcance: '260m (linha de visão)',
      Conectividade: 'USB-C, 3.5mm TRS',
      Bateria: 'Até 7 horas'
    },
    inStock: true,
    stockQuantity: 45
  },
  {
    id: 51,
    name: 'Apple Studio Display Pro',
    price: 19999.0,
    originalPrice: 22999.0,
    images: [
      '/imagens_produtos/51.jpg'
    ],
    rating: 4.9,
    reviews: 650,
    category: 'monitors',
    discount: 13,
    description: 'O monitor definitivo para profissionais. O Studio Display Pro apresenta uma tela Mini-LED de 27 polegadas com ProMotion e brilho de até 1600 nits para uma qualidade de imagem XDR.',
    features: [
      'Tela Mini-LED de 27 polegadas com resolução 5K',
      'Tecnologia ProMotion com taxa de atualização de 120Hz',
      'Brilho de 1000 nits (sustentado) e 1600 nits (pico)',
      'Vidro nano-texture para redução de reflexos',
      'Câmera de 12MP com Palco Central e sistema de som com seis alto-falantes'
    ],
    specifications: {
      Tela: '27" 5K Retina Mini-LED',
      Resolução: '5120 x 2880',
      Brilho: '1600 nits (pico)',
      Portas: '1x Thunderbolt 3 (USB-C), 3x USB-C',
      Recursos: 'Palco Central, Áudio Espacial'
    },
    inStock: true,
    stockQuantity: 15
  },
  {
    id: 52,
    name: 'Xiaomi Pad 7 Pro',
    price: 3499.0,
    originalPrice: 3999.0,
    images: [
     '/imagens_produtos/52.jpg'
    ],
    rating: 4.7,
    reviews: 1150,
    category: 'tablets',
    discount: 13,
    description: 'Performance e entretenimento em um design fino e leve. O Xiaomi Pad 7 Pro vem com o processador Snapdragon 8 Gen 3 e uma tela de 144Hz para máxima fluidez.',
    features: [
      'Tela de 12.4 polegadas com resolução 2.5K e 144Hz',
      'Processador Snapdragon 8 Gen 3',
      'Sistema de seis alto-falantes com Dolby Atmos',
      'Bateria de 10000mAh com carregamento rápido de 120W',
      'Compatível com a Xiaomi Smart Pen e teclado'
    ],
    specifications: {
      Tela: '12.4" LCD 2.5K 144Hz',
      Processador: 'Snapdragon 8 Gen 3',
      Armazenamento: '256GB, 512GB',
      Câmera: 'Traseira 50MP, Frontal 20MP',
      Bateria: '10000mAh'
    },
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 53,
    name: 'Corsair K100 AIR Wireless',
    price: 1999.0,
    originalPrice: 2299.0,
    images: [
      '/imagens_produtos/53.jpg'
    ],
    rating: 4.8,
    reviews: 950,
    category: 'accessories',
    discount: 13,
    description: 'Um teclado mecânico incrivelmente fino. O K100 AIR Wireless combina um design elegante com switches CHERRY MX Ultra Low Profile e conectividade sem fio ultrarrápida.',
    features: [
      'Design ultrafino de 11mm no ponto mais baixo',
      'Switches mecânicos CHERRY MX Ultra Low Profile',
      'Três modos de conexão: SLIPSTREAM WIRELESS, Bluetooth e USB com fio',
      'Até 200 horas de bateria com a iluminação RGB desligada',
      'Quatro teclas macro dedicadas'
    ],
    specifications: {
      Switches: 'CHERRY MX Ultra Low Profile Tactile',
      Layout: 'Full-size',
      Conectividade: '2.4GHz Slipstream, Bluetooth 4.2, USB 3.0',
      Polling_Rate: 'Até 8.000Hz (com fio)',
      Iluminação: 'RGB por tecla'
    },
    inStock: true,
    stockQuantity: 30
  },
  {
    id: 54,
    name: 'Oppo Find X8 Pro',
    price: 8299.0,
    originalPrice: 9299.0,
    images: [
      '/imagens_produtos/54.jpg'
    ],
    rating: 4.8,
    reviews: 900,
    category: 'smartphones',
    discount: 11,
    description: 'A excelência em fotografia móvel. O Oppo Find X8 Pro, com seu sistema de câmera Hasselblad e o chip de imagem MariSilicon X2, captura imagens impressionantes.',
    features: [
      'Sistema de Câmera Hasselblad com sensor de 1 polegada',
      'NPU de imagem MariSilicon X2',
      'Processador Snapdragon 8 Gen 4',
      'Tela AMOLED LTPO QHD+ com 1 bilhão de cores',
      'Carregamento SUPERVOOC de 100W'
    ],
    specifications: {
      Tela: '6.82" AMOLED LTPO 120Hz',
      Processador: 'Snapdragon 8 Gen 4',
      Armazenamento: '256GB, 512GB',
      Câmera: 'Sistema Triplo 50MP (Wide) + 50MP (Ultrawide) + 50MP (Periscópio)',
      Bateria: '5000mAh'
    },
    inStock: true,
    stockQuantity: 22
  },
  {
    id: 55,
    name: 'LG C5 Series OLED TV (65”)',
    price: 12999.0,
    originalPrice: 14999.0,
    images: [
      '/imagens_produtos/55.jpg'
    ],
    rating: 4.9,
    reviews: 2800,
    category: 'tvs',
    discount: 13,
    description: 'A evolução da tecnologia OLED. A LG C5 oferece brilho aprimorado com a tecnologia Brightness Booster Max e o processador a11 AI para uma imagem e som espetaculares.',
    features: [
      'Painel OLED evo com Brightness Booster Max',
      'Processador α11 AI 4K Gen8',
      'Design ultrafino com bordas quase invisíveis',
      'Compatível com Dolby Vision e Dolby Atmos',
      'Taxa de atualização de 144Hz para jogos'
    ],
    specifications: {
      Tela: '65" OLED evo 4K',
      Resolução: '3,840 x 2,160',
      Processador: 'α11 AI Processor 4K Gen8',
      Taxa_de_Atualização: '144Hz',
      Recursos_de_Jogo: 'G-SYNC, FreeSync, VRR, 4x HDMI 2.1'
    },
    inStock: true,
    stockQuantity: 25
  },
  {
    id: 56,
    name: 'Sennheiser Momentum True Wireless 4',
    price: 2299.0,
    originalPrice: 2599.0,
    images: [
      '/imagens_produtos/56.jpg'
    ],
    rating: 4.7,
    reviews: 1400,
    category: 'headphones',
    discount: 12,
    description: 'Som de alta fidelidade sem fios. Os Momentum True Wireless 4 oferecem o som característico da Sennheiser, cancelamento de ruído adaptativo e suporte para os codecs mais recentes.',
    features: [
      'Drivers TrueResponse da Sennheiser',
      'Cancelamento de ruído adaptativo híbrido',
      'Suporte para aptX Lossless e Auracast',
      'Personalização de som via Smart Control App',
      'Até 7.5 horas de bateria (28h com o estojo)'
    ],
    specifications: {
      Tipo: 'Intra-auricular (In-ear)',
      Drivers: '7mm TrueResponse',
      Conectividade: 'Bluetooth 5.4',
      Codecs: 'SBC, AAC, aptX, aptX Lossless, LC3',
      Bateria: 'Até 7.5h (fone), 28h (total)'
    },
    inStock: true,
    stockQuantity: 50
  },
  {
    id: 57,
    name: 'Meta Quest 4',
    price: 4999.0,
    originalPrice: 5499.0,
    images: [
      '/imagens_produtos/57.jpg'
    ],
    rating: 4.8,
    reviews: 4500,
    category: 'vr',
    discount: 9,
    description: 'Mergulhe em novas realidades com o Meta Quest 4. Mais leve, mais potente e com lentes de nova geração para uma experiência de VR e realidade mista ainda mais imersiva.',
    features: [
      'Processador Snapdragon XR3 Gen 2',
      'Lentes pancake de nova geração',
      'Passthrough de alta resolução em cores',
      'Controladores Touch Plus com feedback tátil TruTouch',
      'Design mais fino e balanceado'
    ],
    specifications: {
      Processador: 'Snapdragon XR3 Gen 2',
      Resolução: 'A ser anunciado (superior ao Quest 3)',
      Armazenamento: '128GB, 512GB',
      Sensores: 'Rastreamento inside-out, câmeras de profundidade',
      Áudio: 'Alto-falantes estéreo integrados'
    },
    inStock: true,
    stockQuantity: 60
  },
  {
    id: 58,
    name: 'Asus Zenbook Duo (2025)',
    price: 13999.0,
    originalPrice: 15999.0,
    images: [
      '/imagens_produtos/58.jpg'
    ],
    rating: 4.7,
    reviews: 600,
    category: 'laptops',
    discount: 13,
    description: 'O futuro da produtividade. O Zenbook Duo possui duas telas OLED sensíveis ao toque de 14 polegadas, oferecendo um espaço de trabalho versátil e um teclado destacável.',
    features: [
      'Duas telas 14” 3K 120Hz ASUS Lumina OLED',
      'Processador Intel Core Ultra 9',
      'Múltiplos modos de uso (Laptop, Tela Dupla, Desktop)',
      'Teclado e touchpad ErgoSense Bluetooth destacável',
      'Design fino e leve de 1,35 kg'
    ],
    specifications: {
      Telas: '2x 14.0" 3K (2880 x 1800) OLED 120Hz',
      Processador: 'Intel Core Ultra 9 185H',
      Armazenamento: '1TB, 2TB SSD NVMe',
      Memória_RAM: '32GB LPDDR5x',
      Gráficos: 'Intel Arc Graphics'
    },
    inStock: true,
    stockQuantity: 18
  },
  {
    id: 59,
    name: 'Keychron Q1 Max',
    price: 1499.0,
    originalPrice: 1699.0,
    images: [
      '/imagens_produtos/59.jpg'
    ],
    rating: 4.9,
    reviews: 1200,
    category: 'accessories',
    discount: 12,
    description: 'Um teclado mecânico premium 75% totalmente em metal. O Q1 Max oferece conectividade sem fio 2.4GHz e Bluetooth, e uma experiência de digitação superior com gasket mount.',
    features: [
      'Corpo em alumínio 6063 usinado em CNC',
      'Design gasket mount para uma digitação flexível',
      'Conectividade 2.4GHz, Bluetooth e com fio (USB-C)',
      'Hot-swappable para troca de switches sem solda',
      'Firmware QMK/VIA para personalização total'
    ],
    specifications: {
      Layout: '75%',
      Material_do_Corpo: 'Alumínio',
      Polling_Rate: '1000Hz (2.4GHz/Com fio)',
      Switches: 'Gateron Jupiter (Red/Brown/Banana)',
      Keycaps: 'PBT double-shot'
    },
    inStock: true,
    stockQuantity: 60
  },
  {
    id: 60,
    name: 'Ugreen Nexode Pro 160W 4-Port GaN Fast Charger',
    price: 799.0,
    originalPrice: 999.0,
    images: [
      '/imagens_produtos/60.jpg'
    ],
    rating: 4.9,
    reviews: 2500,
    category: 'accessories',
    discount: 20,
    description: 'Carregue todos os seus dispositivos com um único carregador. O Ugreen Nexode Pro de 160W oferece 4 portas e tecnologia GaN para um carregamento rápido e eficiente.',
    features: [
      'Potência total de 160W',
      '3 portas USB-C e 1 porta USB-A',
      'Tecnologia GaN III para maior eficiência e menor tamanho',
      'Suporta múltiplos protocolos de carregamento rápido (PD 3.1, QC 4+)',
      'Distribuição de energia inteligente'
    ],
    specifications: {
      Potência_Máxima: '160W',
      Portas: '3x USB-C, 1x USB-A',
      Saída_USB_C1: 'Até 140W',
      Tecnologia: 'GaNFast',
      Dimensões: '7.6 x 7.6 x 3.5 cm'
    },
    inStock: true,
    stockQuantity: 90
  },
  {
    id: 61,
    name: 'BenQ ScreenBar Pro',
    price: 899.0,
    originalPrice: 1049.0,
    images: [
      '/imagens_produtos/61.jpg'
    ],
    rating: 4.9,
    reviews: 3100,
    category: 'accessories',
    discount: 14,
    description: 'Ilumine seu espaço de trabalho, não sua tela. A ScreenBar Pro da BenQ otimiza a iluminação da sua mesa, reduzindo o cansaço visual e economizando espaço.',
    features: [
      'Design óptico assimétrico que ilumina apenas a mesa',
      'Sensor de luz ambiente para ajuste automático de brilho',
      'Temperatura de cor e brilho ajustáveis',
      'Controlador de desktop sem fio',
      'Alimentado por USB, sem necessidade de tomada'
    ],
    specifications: {
      Fonte_de_Luz: 'Dual Color LED',
      Iluminância: '1000 lux (centro)',
      Renderização_de_Cor: '>Ra95',
      Material: 'Liga de Alumínio',
      Peso: '640g'
    },
    inStock: true,
    stockQuantity: 75
  },
  {
    id: 62,
    name: 'Samsung Galaxy Ring',
    price: 1899.0,
    originalPrice: 2199.0,
    images: [
      '/imagens_produtos/62.jpg'
    ],
    rating: 4.7,
    reviews: 1100,
    category: 'wearables',
    discount: 14,
    description: 'Monitore sua saúde de forma discreta e confortável. O Galaxy Ring rastreia seu sono, atividade e bem-estar geral, oferecendo insights valiosos diretamente no seu dedo.',
    features: [
      'Monitoramento avançado do sono',
      'Medição de frequência cardíaca e variabilidade (HRV)',
      'Acompanhamento de atividade e passos',
      'Design leve em titânio',
      'Bateria de longa duração (vários dias)'
    ],
    specifications: {
      Material: 'Titânio',
      Sensores: 'PPG (Fotopletismografia), Acelerômetro',
      Conectividade: 'Bluetooth Low Energy',
      Bateria: 'Varia com o tamanho (5-9 dias)',
      Compatibilidade: 'Smartphones Samsung Galaxy e Android'
    },
    inStock: true,
    stockQuantity: 80
  },
  {
    id: 63,
    name: 'AnkerWork C310 4K AI Webcam',
    price: 999.0,
    originalPrice: 1299.0,
    images: [
      '/imagens_produtos/63.jpg'
    ],
    rating: 4.8,
    reviews: 950,
    category: 'accessories',
    discount: 23,
    description: 'Apresente-se com clareza cristalina. A AnkerWork C310 oferece resolução 4K, enquadramento automático por IA e foco rápido para videochamadas profissionais.',
    features: [
      'Resolução 4K Ultra HD',
      'Sensor grande de 1/2 polegada para excelente performance em baixa luz',
      'Enquadramento automático e foco por IA (AnkerSight)',
      'HDR e microfones estéreo duplos',
      'Capa de privacidade integrada'
    ],
    specifications: {
      Resolução: '4K@30fps, 1080p@60fps',
      Campo_de_Visão: 'Ajustável (65°, 78°, 95°)',
      Foco: 'Autofoco',
      Microfones: 'Estéreo com cancelamento de ruído',
      Conexão: 'USB-C'
    },
    inStock: true,
    stockQuantity: 55
  },
  {
    id: 64,
    name: 'TP-Link Deco BE85 (Wi-Fi 7)',
    price: 8999.0,
    originalPrice: 9999.0,
    images: [
      '/imagens_produtos/64.jpg'
    ],
    rating: 4.9,
    reviews: 400,
    category: 'networking',
    discount: 10,
    description: 'Experimente a próxima geração de conectividade com o sistema Mesh Wi-Fi 7. O Deco BE85 oferece velocidades ultrarrápidas, baixa latência e cobertura para toda a casa.',
    features: [
      'Wi-Fi 7 Tri-Band com velocidades de até 22 Gbps',
      'Operação Multi-Link (MLO) para maior estabilidade',
      'Duas portas 10 Gbps para conexões cabeadas ultrarrápidas',
      'Cobertura de até 500 m² (2-pack)',
      'AI-Driven Mesh para otimização inteligente da rede'
    ],
    specifications: {
      Padrão_Wi_Fi: '802.11be (Wi-Fi 7)',
      Bandas: 'Tri-Band (6GHz, 5GHz, 2.4GHz)',
      Velocidade: 'Até 22000 Mbps',
      Portas: '2x 10 Gbps + 2x 2.5 Gbps por unidade',
      Segurança: 'WPA3, HomeShield'
    },
    inStock: true,
    stockQuantity: 15
  },
  {
    id: 65,
    name: 'Lenovo Yoga Book 9i Gen 9',
    price: 14599.0,
    originalPrice: 16599.0,
    images: [
      '/imagens_produtos/65.jpg'
    ],
    rating: 4.8,
    reviews: 550,
    category: 'laptops',
    discount: 12,
    description: 'Redefina a versatilidade com o Lenovo Yoga Book 9i. Este notebook inovador possui duas telas OLED, permitindo modos de uso nunca antes vistos para máxima produtividade.',
    features: [
      'Duas telas 13.3" 2.8K OLED PureSight',
      'Processador Intel Core Ultra 7',
      'Suporte para caneta e teclado Bluetooth destacável inclusos',
      'Design 360° com sistema de som Bowers & Wilkins',
      'Construção em alumínio premium'
    ],
    specifications: {
      Telas: '2x 13.3" 2.8K (2880x1800) OLED',
      Processador: 'Intel Core Ultra 7 155U',
      Memória_RAM: '16GB LPDDR5x',
      Armazenamento: '1TB SSD NVMe',
      Portas: '3x Thunderbolt 4 (USB-C)'
    },
    inStock: true,
    stockQuantity: 20
  },
  {
    id: 66,
    name: 'Withings Body Scan',
    price: 2499.0,
    originalPrice: 2799.0,
    images: [
      '/imagens_produtos/66.jpg'
    ],
    rating: 4.7,
    reviews: 700,
    category: 'smart-home',
    discount: 11,
    description: 'A balança mais avançada do mundo. A Withings Body Scan vai além do peso, analisando a composição corporal por segmento, saúde nervosa e realizando um ECG de 6 derivações.',
    features: [
      'Análise de composição corporal segmentada (tronco, braços, pernas)',
      'ECG de 6 derivações para detecção de fibrilação atrial',
      'Avaliação da saúde nervosa',
      'Medição da idade vascular',
      'Sincronização via Wi-Fi e Bluetooth com o app Withings'
    ],
    specifications: {
      Sensores: '4 sensores de peso, 14 eletrodos ITO, 4 eletrodos de aço inoxidável',
      Medições: 'Peso, IMC, gordura corporal, massa muscular, ECG, e mais',
      Tela: 'LCD colorida de 3.2"',
      Bateria: 'Recarregável, até 12 meses de autonomia',
      Compatibilidade: 'iOS, Android'
    },
    inStock: true,
    stockQuantity: 30
  },
  {
    id: 67,
    name: 'Sonos Arc SL',
    price: 5499.0,
    originalPrice: 5999.0,
    images: [
      '/imagens_produtos/67.jpg'
    ],
    rating: 4.9,
    reviews: 1800,
    category: 'speakers',
    discount: 8,
    description: 'A soundbar premium da Sonos para um som de cinema imersivo, agora sem microfones. A Arc SL preenche seu ambiente com Dolby Atmos e um palco sonoro ultralargo.',
    features: [
      'Som 3D com Dolby Atmos',
      'Onze drivers de alta performance, incluindo woofers e tweeters',
      'Ajuste Trueplay para otimizar o som para o seu cômodo',
      'Controle via app Sonos, controle remoto da TV e Apple AirPlay 2',
      'Design elegante que pode ser montado na parede ou colocado em um móvel'
    ],
    specifications: {
      Drivers: '11 amplificadores digitais classe D',
      Conexão_TV: 'HDMI eARC / ARC',
      Conectividade: 'Wi-Fi, Porta Ethernet',
      Formato_de_Áudio: 'Dolby Atmos, TrueHD, Dolby Digital Plus',
      Dimensões: '87 x 1141.7 x 115.7 mm'
    },
    inStock: true,
    stockQuantity: 25
  },
  {
    id: 68,
    name: 'Cooler Master MasterBox 600',
    price: 899.0,
    originalPrice: 999.0,
    images: [
      '/imagens_produtos/68.jpg'
    ],
    rating: 4.8,
    reviews: 500,
    category: 'components',
    discount: 10,
    description: 'Um gabinete projetado para facilitar a montagem. O MasterBox 600 possui conectores na parte traseira da placa-mãe, otimizando o fluxo de ar e o gerenciamento de cabos.',
    features: [
      'Compatível com placas-mãe com conectores traseiros (ASUS BTF, MSI Project Zero)',
      'Painel lateral de vidro temperado sem parafusos',
      'Três ventoinhas SickleFlow de 140mm pré-instaladas',
      'Amplo espaço para placas de vídeo e sistemas de refrigeração líquida',
      'Filtros de poeira removíveis para fácil limpeza'
    ],
    specifications: {
      Formato: 'Mid Tower',
      Suporte_Placa_Mãe: 'E-ATX, ATX, Micro-ATX, Mini-ITX',
      Baias: '2x 3.5", 2x 2.5"',
      Portas_I_O: '1x USB 3.2 Gen 2x2 Type C, 2x USB 3.2 Gen 1',
      Dimensões: '474 x 230 x 481mm'
    },
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 69,
    name: 'Nothing Ear (3)',
    price: 999.0,
    originalPrice: 1199.0,
    images: [
      '/imagens_produtos/69.jpg'
    ],
    rating: 4.7,
    reviews: 1600,
    category: 'headphones',
    discount: 17,
    description: 'Design icônico encontra som de alta fidelidade. O Nothing Ear (3) oferece áudio Hi-Res sem fio, cancelamento de ruído inteligente e um perfil de som pessoal.',
    features: [
      'Driver de cerâmica personalizado para clareza excepcional',
      'Suporte a áudio de alta resolução LHDC 5.0 e LDAC',
      'Cancelamento de ruído ativo inteligente de até 50 dB',
      'Perfil de Som Pessoal aprimorado',
      'Design transparente exclusivo'
    ],
    specifications: {
      Driver: '11 mm de cerâmica',
      Conectividade: 'Bluetooth 5.3',
      Codecs: 'LHDC 5.0, LDAC, AAC, SBC',
      Bateria: 'Até 8.5h (fone), 40h (com estojo)',
      Resistência: 'IP54 (fones), IP55 (estojo)'
    },
    inStock: true,
    stockQuantity: 70
  },
  {
    id: 70,
    name: 'Polar Vantage V3',
    price: 4499.0,
    originalPrice: 4999.0,
    images: [
      '/imagens_produtos/70.jpg'
    ],
    rating: 4.8,
    reviews: 600,
    category: 'smartwatches',
    discount: 10,
    description: 'O relógio multiesportivo que combina biossensores, uma tela AMOLED vibrante e GPS de dupla frequência para atletas que buscam o melhor desempenho.',
    features: [
      'Tecnologia de biossensoriamento Elixir (ECG, SpO2, temperatura)',
      'Tela AMOLED curva de 1,39 polegadas',
      'GPS de dupla frequência para máxima precisão',
      'Mapas offline',
      'Métricas avançadas de treino e recuperação'
    ],
    specifications: {
      Tela: "1.39'' AMOLED Touchscreen",
      Material: 'Alumínio aeroespacial, Gorilla Glass 3',
      Sensores: 'ECG, SpO2, Frequência Cardíaca Ótica',
      GPS: 'Dual-frequency',
      Bateria: 'Até 8 dias no modo relógio'
    },
    inStock: true,
    stockQuantity: 25
  },
  {
    id: 71,
    name: 'HyperX Alloy Rise',
    price: 1299.0,
    originalPrice: 1499.0,
    images: [
      '/imagens_produtos/71.jpg'
    ],
    rating: 4.9,
    reviews: 800,
    category: 'accessories',
    discount: 13,
    description: 'Um teclado gamer feito para personalização. O HyperX Alloy Rise possui design hot-swappable, gasket mount e iluminação RGB aprimorada para uma experiência única.',
    features: [
      'Hot-swappable, compatível com switches de 3 e 5 pinos',
      'Design Gasket Mount para uma digitação mais suave',
      'Switches lineares HyperX pré-lubrificados',
      'Sensor de luz ambiente para ajuste automático do brilho RGB',
      'Placa superior removível para fácil customização'
    ],
    specifications: {
      Layout: '75% ou Full-size',
      Switches: 'HyperX Linear',
      Material: 'Estrutura de alumínio',
      Conectividade: 'USB-C destacável',
      Software: 'HyperX NGENUITY'
    },
    inStock: true,
    stockQuantity: 35
  },
  {
    id: 72,
    name: 'Samsung Galaxy Z Fold 7',
    price: 12999.0,
    originalPrice: 14499.0,
    images: [
      '/imagens_produtos/72.jpg'
    ],
    rating: 4.8,
    reviews: 1100,
    category: 'smartphones',
    discount: 10,
    description: 'O futuro se desdobra em suas mãos. O Galaxy Z Fold 7 é mais fino, mais leve e mais potente, com uma tela interna sem vincos e recursos de IA para multitarefa.',
    features: [
      'Design mais fino e leve com nova tecnologia de dobradiça',
      'Tela externa mais larga para melhor usabilidade',
      'Processador Snapdragon 8 Gen 4 for Galaxy',
      'Recursos de IA aprimorados para o modo Flex',
      'Suporte à S Pen (vendida separadamente)'
    ],
    specifications: {
      Tela_Interna: '7.6" Dynamic AMOLED 2X 120Hz',
      Tela_Externa: '6.4" Dynamic AMOLED 2X 120Hz',
      Processador: 'Snapdragon 8 Gen 4 for Galaxy',
      Câmera: 'Sistema Triplo 50MP + 12MP + 10MP',
      Bateria: '4500mAh'
    },
    inStock: true,
    stockQuantity: 20
  },
  {
    id: 73,
    name: 'Fitbit Charge 7',
    price: 1199.0,
    originalPrice: 1399.0,
    images: [
      '/imagens_produtos/73.jpg'
    ],
    rating: 4.6,
    reviews: 4500,
    category: 'wearables',
    discount: 14,
    description: 'Conheça seu corpo e atinja suas metas com a Fitbit Charge 7. Monitoramento contínuo de saúde, GPS integrado e novas ferramentas de gerenciamento de estresse.',
    features: [
      'Monitoramento de resposta do corpo (cEDA)',
      'App de ECG e notificações de ritmo cardíaco irregular',
      'GPS integrado',
      'Painel de Métricas de Saúde (SpO2, VFC, temperatura da pele)',
      'Até 7 dias de bateria'
    ],
    specifications: {
      Tela: 'AMOLED colorida sensível ao toque',
      Sensores: 'Frequência cardíaca, EDA, SpO2, ECG',
      GPS: 'Integrado + GLONASS',
      Bateria: 'Até 7 dias',
      Resistência_à_água: 'Até 50 metros'
    },
    inStock: true,
    stockQuantity: 100
  },
  {
    id: 74,
    name: 'Razer Viper V4 Pro',
    price: 999.0,
    originalPrice: 1149.0,
    images: [
      '/imagens_produtos/74.jpg'
    ],
    rating: 4.9,
    reviews: 1500,
    category: 'accessories',
    discount: 13,
    description: 'O mouse para e-sports mais rápido e leve, agora com polling rate de 8000Hz sem fio. O Viper V4 Pro é projetado para a vitória.',
    features: [
      'Tecnologia sem fio HyperPolling com polling rate real de 8000Hz',
      'Sensor óptico Focus Pro 35K Gen-2',
      'Design ultraleve de 55g',
      'Switches ópticos de mouse Gen-3',
      'Até 80 horas de bateria'
    ],
    specifications: {
      Sensor: 'Focus Pro 35K Optical Sensor Gen-2',
      Sensibilidade: '35,000 DPI',
      Velocidade: '750 IPS',
      Polling_Rate: 'Até 8000 Hz (sem fio)',
      Peso: '55g'
    },
    inStock: true,
    stockQuantity: 60
  },
  {
    id: 75,
    name: 'Sony Bravia 9 (75”)',
    price: 24999.0,
    originalPrice: 27999.0,
    images: [
      '/imagens_produtos/75.jpg'
    ],
    rating: 4.9,
    reviews: 700,
    category: 'tvs',
    discount: 11,
    description: 'A TV Mini LED mais brilhante de todos os tempos da Sony. A Bravia 9 oferece contraste espetacular, cores cinematográficas e som que vem diretamente da tela.',
    features: [
      'Painel Mini LED com High Peak Luminance',
      'XR Backlight Master Drive para controle preciso da iluminação',
      'XR Processor para imagem e som otimizados por IA',
      'Acoustic Multi-Audio+ e suporte para Dolby Atmos',
      'Perfeita para PlayStation 5 com recursos exclusivos'
    ],
    specifications: {
      Tela: '75" Mini LED',
      Resolução: '4K Ultra HD',
      Processador: 'XR Processor',
      HDR: 'Dolby Vision, IMAX Enhanced',
      Sistema_Operacional: 'Google TV'
    },
    inStock: true,
    stockQuantity: 15
  },
  {
    id: 76,
    name: 'Intel Core i9-15900K',
    price: 4999.0,
    originalPrice: 5499.0,
    images: [
      '/imagens_produtos/76.jpg'
    ],
    rating: 4.8,
    reviews: 900,
    category: 'components',
    discount: 9,
    description: 'Desempenho de elite para gamers e criadores com a nova arquitetura Arrow Lake. O Core i9-15900K redefine a velocidade em desktops.',
    features: [
      'Nova arquitetura de núcleo Lion Cove (P-Cores) e Skymont (E-Cores)',
      'Desempenho de IPC (instruções por clock) aprimorado',
      'NPU integrada para aceleração de IA',
      'Suporte para DDR5 e PCIe 5.0',
      'Plataforma LGA 1851'
    ],
    specifications: {
      Arquitetura: 'Arrow Lake',
      'Núcleos/Threads': '8 P-Cores + 16 E-Cores / 32 Threads',
      Soquete: 'LGA 1851',
      Gráficos_Integrados: 'Intel Arc (Battlemage)',
      TDP: '125W'
    },
    inStock: true,
    stockQuantity: 50
  },
  {
    id: 77,
    name: 'Crucial Pro Overclocking DDR5 32GB Kit',
    price: 1199.0,
    originalPrice: 1399.0,
    images: [
      '/imagens_produtos/77.jpg'
    ],
    rating: 4.9,
    reviews: 1100,
    category: 'components',
    discount: 14,
    description: 'Desbloqueie o próximo nível de desempenho com a memória Crucial Pro Overclocking DDR5. Velocidades incríveis para jogos e aplicações exigentes.',
    features: [
      'Velocidades de até 7200MT/s',
      'Latências baixas para resposta rápida',
      'Compatível com Intel XMP 3.0 e AMD EXPO',
      'Dissipador de calor em alumínio com design elegante',
      'Estabilidade e confiabilidade da Micron'
    ],
    specifications: {
      Capacidade: '32GB Kit (2 x 16GB)',
      Tipo: 'DDR5',
      Velocidade: '7200MT/s',
      Latência_CAS: 'CL34',
      Tensão: '1.4V'
    },
    inStock: true,
    stockQuantity: 80
  },
  {
    id: 78,
    name: 'Logitech G Pro X 3 Lightspeed',
    price: 1699.0,
    originalPrice: 1899.0,
    images: [
      '/imagens_produtos/78.jpg'
    ],
    rating: 4.8,
    reviews: 1300,
    category: 'headphones',
    discount: 11,
    description: 'Projetado com e para pro-players. O headset G Pro X 3 Lightspeed oferece drivers de grafeno para áudio preciso e conectividade sem fio de nível profissional.',
    features: [
      'Drivers de áudio PRO-G de 50mm em grafeno',
      'Tecnologia sem fio LIGHTSPEED confiável',
      'Até 50 horas de autonomia de bateria',
      'Microfone cardioide de 6mm destacável com tecnologia Blue VO!CE',
      'Construção durável e confortável com dobradiças giratórias'
    ],
    specifications: {
      Drivers: '50 mm de Grafeno',
      Resposta_de_Frequência: '20 Hz-20 KHz',
      Conectividade: 'LIGHTSPEED Wireless, Bluetooth, 3.5mm',
      Alcance: 'Até 30 metros',
      Peso: '345g'
    },
    inStock: true,
    stockQuantity: 45
  },
  {
    id: 79,
    name: 'Samsung SmartTag 3',
    price: 199.0,
    originalPrice: 249.0,
    images: [
      '/imagens_produtos/79.jpg'
    ],
    rating: 4.7,
    reviews: 6800,
    category: 'accessories',
    discount: 20,
    description: 'Encontre seus pertences com mais facilidade. O SmartTag 3 possui um design aprimorado, bateria de maior duração e busca por realidade aumentada mais precisa.',
    features: [
      'Busca por Proximidade com Bluetooth Low Energy',
      'Busca por Realidade Aumentada (AR Finding) com UWB',
      'Rede SmartThings Find para localização à distância',
      'Novo design com anel de metal integrado',
      'Resistência à água e poeira IP67'
    ],
    specifications: {
      Conectividade: 'Bluetooth 5.3, UWB (Ultra-Wideband)',
      Bateria: 'Substituível, até 700 dias',
      Alcance: 'Até 120m (Bluetooth)',
      Compatibilidade: 'Dispositivos Samsung Galaxy',
      Dimensões: '39.1 x 39.1 x 9.9 mm'
    },
    inStock: true,
    stockQuantity: 300
  },
  {
    id: 80,
    name: 'Valve Steam Deck 2',
    price: 4999.0,
    originalPrice: 5499.0,
    images: [
      '/imagens_produtos/80.jpg'
    ],
    rating: 4.9,
    reviews: 5500,
    category: 'consoles',
    discount: 9,
    description: 'O PC gamer portátil da Valve, agora mais poderoso. O Steam Deck 2 vem com uma APU de nova geração, tela OLED HDR e ergonomia aprimorada para jogar sua biblioteca Steam em qualquer lugar.',
    features: [
      'APU AMD customizada de nova geração (Zen 4 + RDNA 3.5)',
      'Tela OLED HDR de 7.4 polegadas e 90Hz',
      'Wi-Fi 6E para downloads mais rápidos',
      'Bateria de maior capacidade e eficiência aprimorada',
      'Controles e ergonomia refinados'
    ],
    specifications: {
      Processador: 'Custom AMD APU',
      RAM: '16 GB LPDDR5X',
      Armazenamento: '512GB, 1TB, 2TB NVMe SSD',
      Tela: '7.4" OLED HDR 1280x800 90Hz',
      Sistema: 'SteamOS 4.0'
    },
    inStock: false,
    stockQuantity: 0
  },
  {
    id: 81,
    name: 'Nanoleaf Skylight',
    price: 1899.0,
    originalPrice: 2199.0,
    images: [
      '/imagens_produtos/81.jpg'
    ],
    rating: 4.7,
    reviews: 450,
    category: 'smart-home',
    discount: 14,
    description: 'Crie um céu particular dentro de casa. O Nanoleaf Skylight é um sistema de painéis de luz de teto modulares e inteligentes que imitam a luz do sol.',
    features: [
      'Design modular para criar layouts personalizados no teto',
      'Mais de 16 milhões de cores e brancos ajustáveis',
      'Sincronização com música e tela (Screen Mirror)',
      'Funciona como um hub de borda Thread',
      'Compatível com Apple Home, Google Home, Alexa e SmartThings'
    ],
    specifications: {
      Fluxo_Luminoso: '1400 lumens por painel',
      Temperatura_de_Cor: '2700K – 6500K',
      Renderização_de_Cor: 'CRI > 90',
      Conectividade: 'Wi-Fi, Thread',
      Vida_Útil: '25.000 horas'
    },
    inStock: true,
    stockQuantity: 30
  },
  {
    id: 82,
    name: 'WD_BLACK SN850X 4TB NVMe SSD',
    price: 2499.0,
    originalPrice: 2999.0,
    images: [
      '/imagens_produtos/82.jpg'
    ],
    rating: 5.0,
    reviews: 3200,
    category: 'components',
    discount: 17,
    description: 'Velocidades extremas para gamers e criadores de conteúdo. O SN850X de 4TB oferece tempos de carregamento incrivelmente rápidos e amplo espaço para sua biblioteca de jogos.',
    features: [
      'Velocidades de leitura de até 7.300 MB/s',
      'Interface PCIe Gen4',
      'Game Mode 2.0 para otimização de desempenho',
      'Modelo opcional com dissipador de calor e iluminação RGB',
      'Capacidade massiva de 4TB'
    ],
    specifications: {
      Capacidade: '4TB',
      Interface: 'PCIe Gen4 x4',
      Formato: 'M.2 2280',
      Velocidade_Leitura_Seq: 'Até 7300MB/s',
      Velocidade_Escrita_Seq: 'Até 6600MB/s'
    },
    inStock: true,
    stockQuantity: 50
  },
  {
    id: 83,
    name: 'FiiO K7 BT',
    price: 1899.0,
    originalPrice: 2199.0,
    images: [
      '/imagens_produtos/83.jpg'
    ],
    rating: 4.9,
    reviews: 750,
    category: 'audio',
    discount: 14,
    description: 'Um amplificador de fones e DAC de mesa verdadeiramente balanceado. O FiiO K7 agora com Bluetooth para oferecer áudio de alta fidelidade a partir de qualquer fonte.',
    features: [
      'Arquitetura de áudio de seis estágios totalmente balanceada',
      'DACs duplos AK4493S',
      'Amplificadores duplos THX AAA 788+',
      'Receptor Bluetooth QCC5124 com suporte a LDAC e aptX HD',
      'Múltiplas entradas e saídas (USB, Óptica, Coaxial, RCA)'
    ],
    specifications: {
      DAC: '2x AK4493S',
      AMP: '2x THX AAA 788+',
      Potência_de_Saída: '≥2000mW (32Ω, balanceado)',
      Bluetooth: '5.1 (SBC, AAC, aptX, aptX HD, LDAC)',
      Entradas: 'USB, Óptica, Coaxial, RCA'
    },
    inStock: true,
    stockQuantity: 35
  },
  {
    id: 84,
    name: 'HP Spectre Foldable PC',
    price: 28999.0,
    originalPrice: 31999.0,
    images: [
      '/imagens_produtos/84.jpg'
    ],
    rating: 4.7,
    reviews: 200,
    category: 'laptops',
    discount: 9,
    description: 'O futuro da computação 3 em 1. Use-o como um laptop, tablet ou desktop com sua tela OLED dobrável de 17 polegadas e teclado destacável.',
    features: [
      'Tela OLED dobrável de 17 polegadas QXGA',
      'Processador Intel Core Ultra 7',
      'Design 3 em 1 (Laptop, Tablet, Desktop)',
      'Teclado Bluetooth destacável',
      'Caneta MPP 2.0 inclusa'
    ],
    specifications: {
      Tela: '17" QXGA (2560x1920) OLED Dobrável',
      Processador: 'Intel Core Ultra 7 155U',
      Memória_RAM: '16GB LPDDR5',
      Armazenamento: '1TB SSD NVMe',
      Portas: '2x Thunderbolt 4'
    },
    inStock: true,
    stockQuantity: 10
  },
  {
    id: 85,
    name: 'Aqara Hub M3',
    price: 899.0,
    originalPrice: 999.0,
    images: [
      '/imagens_produtos/85.jpg'
    ],
    rating: 4.8,
    reviews: 650,
    category: 'smart-home',
    discount: 10,
    description: 'O coração da sua casa inteligente. O Hub M3 é o primeiro controlador Matter da Aqara, conectando dispositivos Zigbee, Thread, Wi-Fi e infravermelho.',
    features: [
      'Controlador Matter e Roteador de Borda Thread',
      'Conecta dispositivos Zigbee e infravermelho ao ecossistema Matter',
      'Execução de automações locais para maior confiabilidade',
      'Alto-falante de 95dB para alarmes e campainhas',
      'Alimentação via PoE ou USB-C'
    ],
    specifications: {
      Protocolos: 'Wi-Fi, Zigbee 3.0, Thread, Bluetooth, Infravermelho',
      Compatibilidade: 'Matter, Apple Home, Alexa, Google Home',
      Alimentação: 'USB-C (5V 2A), PoE (802.3af)',
      Dimensões: '105 × 105 × 36.5 mm',
      Processador: 'Dual-core A7 1.2GHz'
    },
    inStock: true,
    stockQuantity: 45
  },
  {
    id: 86,
    name: 'Google Nest Wifi Pro 6E',
    price: 2899.0,
    originalPrice: 3299.0,
    images: [
      '/imagens_produtos/86.jpg'
    ],
    rating: 4.7,
    reviews: 2100,
    category: 'networking',
    discount: 12,
    description: 'Wi-Fi rápido e confiável para toda a sua casa. O Nest Wifi Pro usa a tecnologia Wi-Fi 6E para oferecer as maiores velocidades e a menor latência.',
    features: [
      'Wi-Fi 6E Tri-Band (2.4, 5, 6 GHz)',
      'Velocidades combinadas de até 5.4 Gbps',
      'Otimização automática da rede para evitar congestionamento',
      'Funciona como um Roteador de Borda Thread',
      'Configuração e gerenciamento fáceis pelo app Google Home'
    ],
    specifications: {
      Padrão_Wi_Fi: '802.11ax (Wi-Fi 6E)',
      Bandas: 'Tri-Band',
      Cobertura: 'Até 220 m² por roteador',
      Portas: '2x 1 Gbps Ethernet por roteador',
      Segurança: 'WPA3'
    },
    inStock: true,
    stockQuantity: 50
  },
  {
    id: 87,
    name: 'SanDisk Professional PRO-G40 SSD 2TB',
    price: 2399.0,
    originalPrice: 2799.0,
    images: [
      '/imagens_produtos/87.jpg'
    ],
    rating: 4.9,
    reviews: 900,
    category: 'storage',
    discount: 14,
    description: 'Um SSD externo ultrarrápido e ultrarresistente para profissionais. O PRO-G40 oferece conectividade dupla Thunderbolt 3 e USB-C em um chassi robusto.',
    features: [
      'Conectividade dupla: Thunderbolt 3 (40Gbps) e USB-C (10Gbps)',
      'Velocidades de leitura de até 3000MB/s via Thunderbolt 3',
      'Resistência a quedas de até 3m e esmagamento de 1800kg',
      'Classificação IP68 de resistência à água e poeira',
      'Núcleo de alumínio para resfriamento passivo'
    ],
    specifications: {
      Capacidade: '2TB',
      Interface: 'Thunderbolt 3, USB 3.2 Gen 2',
      Velocidade_Leitura_Seq: '3000MB/s (Thunderbolt), 1050MB/s (USB-C)',
      Velocidade_Escrita_Seq: '2500MB/s (Thunderbolt), 1000MB/s (USB-C)',
      Dimensões: '111 x 58 x 12 mm'
    },
    inStock: true,
    stockQuantity: 30
  },
  {
    id: 88,
    name: 'Audio-Technica AT2020USB-X',
    price: 1199.0,
    originalPrice: 1399.0,
    images: [
      '/imagens_produtos/88.jpg'
    ],
    rating: 4.8,
    reviews: 1900,
    category: 'accessories',
    discount: 14,
    description: 'O lendário som do AT2020, agora com a conveniência do USB-C. Ideal para streaming, podcasting e gravação de música com qualidade de estúdio.',
    features: [
      'Condensador cardioide para captação focada e rejeição de ruído',
      'Conversor A/D de alta resolução (até 24-bit/96 kHz)',
      'Saída para fone de ouvido com controle de volume',
      'Botão de mudo sensível ao toque',
      'Conexão USB-C'
    ],
    specifications: {
      Elemento: 'Condensador',
      Padrão_Polar: 'Cardioide',
      Resposta_de_Frequência: '20-20,000 Hz',
      Profundidade_de_Bits: '16/24 bit',
      Taxa_de_Amostragem: '44.1/48/88.2/96 kHz'
    },
    inStock: true,
    stockQuantity: 60
  },
  {
    id: 89,
    name: 'Kobo Libra Colour',
    price: 1499.0,
    originalPrice: 1699.0,
    images: [
      '/imagens_produtos/89.jpg'
    ],
    rating: 4.7,
    reviews: 850,
    category: 'ereaders',
    discount: 12,
    description: 'Veja suas histórias ganharem vida com a nova tela E Ink Kaleido 3 colorida. O Kobo Libra Colour é perfeito para ler livros, quadrinhos e fazer anotações coloridas.',
    features: [
      'Tela E Ink Kaleido 3 de 7 polegadas',
      '16GB de armazenamento',
      'Compatível com a Kobo Stylus 2 para anotações coloridas',
      'Design ergonômico com botões de virada de página',
      'ComfortLight PRO para ajuste de brilho e temperatura de cor'
    ],
    specifications: {
      Tela: '7” E Ink Kaleido 3 (150 ppi colorido, 300 ppi p&b)',
      Armazenamento: '16GB',
      Conectividade: 'Wi-Fi, Bluetooth',
      Bateria: 'Semanas de duração',
      À_prova_d_água: 'IPX8'
    },
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 90,
    name: 'OWC Thunderbolt 5 Dock',
    price: 2499.0,
    originalPrice: 2799.0,
    images: [
      '/imagens_produtos/90.jpg'
    ],
    rating: 4.9,
    reviews: 300,
    category: 'accessories',
    discount: 11,
    description: 'Expanda drasticamente a conectividade do seu computador com a primeira docking station Thunderbolt 5 do mundo. Velocidades incríveis e suporte para múltiplos monitores 8K.',
    features: [
      'Tecnologia Thunderbolt 5 com 80Gbps de largura de banda (até 120Gbps)',
      'Múltiplas portas USB-C e USB-A',
      'Porta Ethernet de 2.5 Gigabit',
      'Leitor de cartão SD e microSD',
      'Fornecimento de energia de até 140W para carregar seu notebook'
    ],
    specifications: {
      Interface: 'Thunderbolt 5',
      Portas_Host: '1x Thunderbolt 5',
      Portas_Adicionais: '3x Thunderbolt 5, 3x USB-A 10Gb/s, 2.5GbE, Leitor SD',
      Suporte_a_Monitores: 'Até 3x monitores 4K 144Hz ou 2x 8K',
      Fornecimento_de_Energia: '140W'
    },
    inStock: false,
    stockQuantity: 0
  },
  {
    id: 91,
    name: 'LaCie Rugged RAID Shuttle 8TB',
    price: 3499.0,
    originalPrice: 3999.0,
    images: [
      '/imagens_produtos/91.jpg'
    ],
    rating: 4.8,
    reviews: 700,
    category: 'storage',
    discount: 13,
    description: 'Armazenamento robusto e de alta capacidade para criadores em movimento. O Rugged RAID Shuttle oferece 8TB de espaço e a segurança da configuração RAID.',
    features: [
      'Capacidade de 8TB',
      'Design plano para caber em bolsas e envelopes de envio',
      'Configurável em RAID 0 (velocidade) ou RAID 1 (redundância)',
      'Resistência a quedas, esmagamento e chuva (IP54)',
      'Conectividade USB-C (compatível com Thunderbolt 3)'
    ],
    specifications: {
      Capacidade: '8TB (2x 4TB HDD)',
      Interface: 'USB-C 3.1 Gen 1 (5Gb/s)',
      Velocidade: 'Até 250MB/s (RAID 0)',
      RAID: 'Hardware RAID 0/1',
      Segurança: 'Criptografia AES de 256 bits (opcional)'
    },
    inStock: true,
    stockQuantity: 25
  },
  {
    id: 92,
    name: 'Netgear Orbi 970 Series (Wi-Fi 7)',
    price: 12999.0,
    originalPrice: 14999.0,
    images: [
      '/imagens_produtos/92.jpg'
    ],
    rating: 4.9,
    reviews: 550,
    category: 'networking',
    discount: 13,
    description: 'O sistema Mesh Wi-Fi 7 definitivo para cobrir grandes áreas com velocidade incomparável. O Orbi 970 oferece um backhaul dedicado e portas Multi-Gig para máximo desempenho.',
    features: [
      'Wi-Fi 7 Quad-Band com velocidades de até 27 Gbps',
      'Backhaul dedicado aprimorado para comunicação entre os nós',
      'Portas 10GbE e 2.5GbE no roteador e satélites',
      'Design elegante e de alta performance',
      'Segurança avançada com Netgear Armor'
    ],
    specifications: {
      Padrão_Wi_Fi: '802.11be (Wi-Fi 7)',
      Bandas: 'Quad-Band',
      Velocidade: 'Até 27000 Mbps',
      'Portas (Roteador)': '1x 10GbE WAN, 1x 10GbE LAN, 4x 2.5GbE LAN',
      Cobertura: 'Até 660 m² (3-pack)'
    },
    inStock: true,
    stockQuantity: 12
  },
  {
    id: 93,
    name: 'Belkin BoostCharge Pro 2-in-1 Dock',
    price: 899.0,
    originalPrice: 999.0,
    images: [
      '/imagens_produtos/93.jpg'
    ],
    rating: 4.8,
    reviews: 1800,
    category: 'accessories',
    discount: 10,
    description: 'Carregue seu iPhone e Apple Watch simultaneamente e com rapidez. Este dock oferece carregamento MagSafe de 15W e carregamento rápido para Apple Watch.',
    features: [
      'Carregamento MagSafe de até 15W para iPhone',
      'Carregamento rápido para Apple Watch Series 7 e posteriores',
      'Design moderno e ajustável para o iPhone',
      'Fonte de alimentação inclusa',
      'Certificado MFi (Made for iPhone) e MFW (Made for Watch)'
    ],
    specifications: {
      'Potência (iPhone)': '15W via MagSafe',
      'Potência (Watch)': 'Carregamento Rápido',
      Compatibilidade: 'iPhone 12 ou posterior, Apple Watch 7 ou posterior',
      Fonte: '30W USB-C Power Adapter',
      Material: 'Acabamento premium'
    },
    inStock: true,
    stockQuantity: 90
  },
  {
    id: 94,
    name: 'Eve Outdoor Cam 2',
    price: 1799.0,
    originalPrice: 1999.0,
    images: [
      '/imagens_produtos/94.jpg'
    ],
    rating: 4.7,
    reviews: 750,
    category: 'smart-home',
    discount: 10,
    description: 'Segurança inteligente e privada para o exterior da sua casa. A Eve Outdoor Cam 2 foi projetada exclusivamente para o Apple HomeKit Secure Video.',
    features: [
      'Exclusiva para Apple HomeKit Secure Video',
      'Gravação baseada em detecção de pessoas, animais e veículos',
      'Criptografia de ponta a ponta, com gravação no iCloud',
      'Holofote com sensor de movimento e brilho ajustável',
      'Comunicação bidirecional'
    ],
    specifications: {
      Resolução: '1080p/24fps HDR',
      Campo_de_Visão: '157°',
      Visão_Noturna: 'Até 8m',
      Conectividade: 'Wi-Fi (2.4 GHz/5 GHz)',
      Requisitos: 'Hub Apple (HomePod ou Apple TV)'
    },
    inStock: true,
    stockQuantity: 35
  },
  {
    id: 95,
    name: 'Samsung M8 Smart Monitor (2025)',
    price: 4499.0,
    originalPrice: 4999.0,
    images: [
      '/imagens_produtos/95.jpg'
    ],
    rating: 4.7,
    reviews: 1600,
    category: 'monitors',
    discount: 10,
    description: 'O monitor que faz tudo. Assista a filmes, trabalhe sem PC e controle sua casa inteligente. O Smart Monitor M8 vem com apps de streaming e o Microsoft 365 integrados.',
    features: [
      'Plataforma Smart TV integrada (Tizen)',
      'Acesso ao Microsoft 365 e Samsung DeX sem fio',
      'Câmera SlimFit magnética e removível',
      'Design ultrafino e cores vibrantes',
      'Hub IoT para controlar dispositivos de casa inteligente'
    ],
    specifications: {
      Tela: '32" VA 4K',
      Resolução: '3,840 x 2,160',
      HDR: 'HDR10+',
      Conectividade: 'USB-C (65W), Micro HDMI, Wi-Fi 5, Bluetooth',
      'Alto-falantes': 'Integrados com Adaptive Sound+'
    },
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 96,
    name: 'NZXT H9 Elite',
    price: 1499.0,
    originalPrice: 1699.0,
    images: [
      '/imagens_produtos/96.jpg'
    ],
    rating: 4.9,
    reviews: 1100,
    category: 'components',
    discount: 12,
    description: 'Exiba sua build com uma visão panorâmica ininterrupta. O H9 Elite possui painéis de vidro temperado na frente e na lateral, e ventoinhas com iluminação dupla.',
    features: [
      'Painéis de vidro frontal e lateral para visão panorâmica',
      'Design de câmara dupla para gerenciamento de cabos limpo',
      'Três ventoinhas F120 RGB Duo pré-instaladas',
      'Painel superior de vidro e amplo espaço para radiadores',
      'Controlador RGB e de ventoinhas V2 incluído'
    ],
    specifications: {
      Formato: 'Mid Tower',
      Suporte_Placa_Mãe: 'ATX, Micro-ATX, Mini-ITX',
      Material: 'Aço SGCC, Vidro Temperado',
      Portas_I_O: '2x USB 3.2 Gen 1, 1x USB 3.2 Gen 2 Type-C',
      Dimensões: '495 x 290 x 466mm'
    },
    inStock: true,
    stockQuantity: 28
  },
  {
    id: 97,
    name: 'Theragun PRO Plus',
    price: 4299.0,
    originalPrice: 4699.0,
    images: [
      '/imagens_produtos/97.jpg'
    ],
    rating: 4.9,
    reviews: 950,
    category: 'health',
    discount: 9,
    description: 'Mais do que uma massagem percussiva. O Theragun PRO Plus combina terapia de percussão, luz infravermelha, calor e frio para um tratamento completo.',
    features: [
      'Terapia percussiva de 16mm de amplitude',
      'Terapia com luz infravermelha (LED) integrada',
      'Terapia de calor e frio (acessórios vendidos separadamente)',
      'Sensor biométrico para medição de frequência cardíaca',
      'Rotinas guiadas visualmente na tela LCD'
    ],
    specifications: {
      Amplitude: '16 mm',
      Força: 'Até 27 kg (60 lbs)',
      Velocidades: '5 velocidades + ajustável via app',
      Bateria: 'Removível, até 150 minutos',
      Acessórios: '6 ponteiras inclusas'
    },
    inStock: true,
    stockQuantity: 20
  },
  {
    id: 98,
    name: 'Yeti Rambler 30 oz Tumbler',
    price: 299.0,
    originalPrice: 349.0,
    images: [
      '/imagens_produtos/98.jpg'
    ],
    rating: 5.0,
    reviews: 55000,
    category: 'accessories',
    discount: 14,
    description: 'O copo térmico que mantém suas bebidas na temperatura ideal por horas. Feito com aço inoxidável de cozinha e isolamento a vácuo de parede dupla.',
    features: [
      'Isolamento a vácuo de parede dupla',
      'Feito com aço inoxidável 18/8',
      'Tampa MagSlider resistente a respingos',
      'Pode ser lavado na máquina de lavar louça',
      'Acabamento DuraCoat que não descasca ou racha'
    ],
    specifications: {
      Capacidade: '887 ml (30 oz)',
      Material: 'Aço inoxidável 18/8',
      Dimensões: '20 x 10.2 cm',
      Peso: '454g',
      Livre_de_BPA: 'Sim'
    },
    inStock: true,
    stockQuantity: 500
  },
  {
    id: 99,
    name: 'Peak Design Everyday Backpack 20L',
    price: 1999.0,
    originalPrice: 2299.0,
    images: [
      '/imagens_produtos/99.jpg'
    ],
    rating: 4.9,
    reviews: 4200,
    category: 'accessories',
    discount: 13,
    description: 'Uma mochila icônica para uso diário e transporte de equipamentos fotográficos. A Everyday Backpack combina acesso inteligente, organização personalizável e proteção.',
    features: [
      'Acesso lateral duplo através de zíperes Weatherproof',
      'Divisórias FlexFold personalizáveis',
      'Compartimento dedicado para laptop de até 15 polegadas',
      'Fecho MagLatch para acesso rápido e seguro',
      'Tecido de nylon reciclado 400D à prova de intempéries'
    ],
    specifications: {
      Capacidade: '17L a 20L',
      Peso: '2.01 kg (com divisórias)',
      Dimensões: '46cm x 30cm x 17cm',
      Compartimento_Laptop: '38.1cm x 25.4cm x 2.5cm',
      Material: 'Lona de nylon 400D reciclado'
    },
    inStock: true,
    stockQuantity: 40
  },
  {
    id: 100,
    name: 'Oura Ring Gen 4',
    price: 2499.0,
    originalPrice: 2799.0,
    images: [
      '/imagens_produtos/100.jpg'
    ],
    rating: 4.8,
    reviews: 12000,
    category: 'wearables',
    discount: 11,
    description: 'Um computador no seu dedo. O Oura Ring Gen 4 oferece o monitoramento de sono e recuperação mais preciso do mercado, agora com novos sensores de saúde diurna.',
    features: [
      'Monitoramento avançado do sono com análise de estágios',
      'Medição contínua da temperatura corporal',
      'Pontuações de Prontidão, Sono e Atividade',
      'Novos sensores para medição de SpO2 e estresse diurno',
      'Até 7 dias de autonomia de bateria'
    ],
    specifications: {
      Material: 'Titânio leve com revestimento PVD',
      Sensores: 'LED infravermelho, NTC, Acelerômetro 3D',
      Conectividade: 'Bluetooth Low Energy',
      Bateria: '4-7 dias',
      Resistência_à_água: 'Até 100 metros'
    },
    inStock: true,
    stockQuantity: 150
  }

];