// src/pages/CartPage.jsx
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { ShoppingCart, ArrowLeft, Minus, Plus, Trash2, Tag } from "lucide-react"
import { Input } from "../components/ui/input"
import { Link } from "react-router-dom" 
import { useCart } from "../contexts/CartContexts"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart()

  const shope = 29.99
  const desconto = 50.0
  const subtotal = getCartTotal()
  const total = subtotal + shope - desconto

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
       
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Continuar Comprando</span>
              </Link>

              <Link to="/" className="flex items-center space-x-2"> 
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ET</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ElectroTech</span>
              </Link>

              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-medium">Carrinho ({getCartCount()})</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-8">Adicione alguns produtos incríveis ao seu carrinho!</p>
          <Link to="/"> 
            <Button size="lg">Continuar Comprando</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2"> 
              <ArrowLeft className="w-5 h-5" />
              <span>Continuar Comprando</span>
            </Link>

            <Link to="/" className="flex items-center space-x-2"> 
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ET</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ElectroTech</span>
            </Link>

            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Carrinho ({getCartCount()})</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Carrinho de Compras ({getCartCount()} {getCartCount() === 1 ? "item" : "itens"})
            </h1>

            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500">Em estoque</p>
                      <div className="mt-2">
                        <span className="text-xl font-bold text-green-600">R$ {item.price.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                        <span className="px-3 py-1 border rounded-md font-medium min-w-[3rem] text-center">
                            {item.quantity}
                        </span>
                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 mt-2"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remover
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tag className="w-5 h-5" />
                  <span>Cupom de Desconto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder="Digite seu cupom" />
                  <Button variant="outline">Aplicar</Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">DESCONTO10 aplicado</span>
                  <span className="text-green-600">-R$ 50,00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                    <span>Subtotal ({getCartCount()} {getCartCount() === 1 ? "item" : "itens"})</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Frete</span>
                    <span>R$ {shope.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                    <span>Desconto</span>
                    <span>-R$ {desconto.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                </div>
                <Link to="/checkout"> 
                  <Button className="w-full" size="lg">
                    Finalizar Compra
                  </Button>
                </Link>
                <div className="text-center">
                  <Link to="/" className="text-blue-600 hover:underline"> 
                    Continuar Comprando
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}