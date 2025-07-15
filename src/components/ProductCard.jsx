import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {

  const rating = product.rating || 0;
  const reviews = product.reviews || 0;

  return (
    <Card
      key={product.id}
      className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden"
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <img
              
              src={product.images || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white border-none">-{product.discount}%</Badge>
          )}

          
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/70 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-1 flex flex-col">
       
        <Badge variant="secondary" className="mb-2 w-fit">
          {product.category}
        </Badge>

       
        <CardTitle className="text-lg mb-2 line-clamp-2 min-h-[3.5rem] flex items-start">
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({reviews})</span>
        </div>

       
        <div className="flex items-center space-x-2 mt-auto mb-4">
          <span className="text-2xl font-bold text-green-600">R$ {product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
      
        <div className='flex items-center gap-2 w-full'>
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              Ver Detalhes
            </Button>
          </Link>
          <Button>
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;