
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, Minus, Plus, RotateCcw, Share2, Shield, ShoppingCart, Star, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {productsData} from "@/data/productsData";
import { useCart } from "@/contexts/CartContexts";


export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const { id } = useParams();

  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
     
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>

            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ElectroTech</span>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  0
                </Badge>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
        
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                    <Badge className="bg-red-500">-{product.discount}%</Badge>
                  </>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantidade:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setQuantity(
                        Math.min(product.stockQuantity, quantity + 1)
                      )
                    }
                    disabled={quantity >= product.stockQuantity}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stockQuantity} disponíveis
                </span>
              </div>

              <div className="flex space-x-4">
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <Link to="/checkout">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  size="lg"
                >
                  Comprar Agora
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">Frete Grátis</p>
                    <p className="text-xs text-gray-600">Acima de R$ 299</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm">Garantia</p>
                    <p className="text-xs text-gray-600">12 meses</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-sm">Troca Fácil</p>
                    <p className="text-xs text-gray-600">30 dias</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Principais Características
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Especificações Técnicas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b"
                        >
                          <span className="font-medium">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
               <Card>
                 <CardContent className="p-6">
                   <h3 className="text-xl font-semibold mb-4">Avaliações dos Clientes</h3>
                   <div className="space-y-4">
                     <div className="flex items-center space-x-4">
                       <div className="text-3xl font-bold">{product.rating}</div>
                       <div>
                         <div className="flex items-center">
                           {[...Array(5)].map((_, i) => (
                             <Star
                               key={i}
                               className={`w-5 h-5 ${
                                 i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                               }`}
                             />
                           ))}
                         </div>
                         <p className="text-sm text-gray-600">{product.reviews} avaliações</p>
                       </div>
                     </div>
                     <div className="space-y-4">
                       {[5, 4, 3, 2, 1].map((stars) => (
                         <div key={stars} className="flex items-center space-x-2">
                           <span className="text-sm w-8">{stars}★</span>
                           <div className="flex-1 bg-gray-200 rounded-full h-2">
                             <div
                               className="bg-yellow-400 h-2 rounded-full"
                               style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%` }}
                             ></div>
                           </div>
                           <span className="text-sm text-gray-600 w-12">
                             {`${stars === 5 ? 70 : stars === 4 ? 20 : 5}%`}
                           </span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </CardContent>
               </Card>
             </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}