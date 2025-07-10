
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CreditCard, Truck, MapPin, User, Lock } from "lucide-react"
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContexts"
import { useState } from "react"


export default function CheckoutPage() {
  const { items, getCartTotal, getCartCount } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("credit")

  const shipping = 29.99
  const discount = 50.0
  const subtotal = getCartTotal()
  const total = subtotal + shipping - discount

  return (
    <div className="min-h-screen bg-gray-50">
     
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/cart" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Carrinho</span>
            </Link>

            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ElectroTech</span>
            </Link>

            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-600 font-medium">Checkout Seguro</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Finalizar Compra</h1>

       
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Informações Pessoais</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="João" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" placeholder="Silva" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="joao@exemplo.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
              </CardContent>
            </Card>

           
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Endereço de Entrega</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input id="zipCode" placeholder="00000-000" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Rua</Label>
                    <Input id="street" placeholder="Rua das Flores, 123" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="123" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Apto 45" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input id="neighborhood" placeholder="Centro" />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="São Paulo" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="w-5 h-5" />
                  <span>Método de Entrega</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="standard" id="standard" />
                    <div className="flex-1">
                      <Label htmlFor="standard" className="font-medium">
                        Entrega Padrão
                      </Label>
                      <p className="text-sm text-gray-600">5-7 dias úteis</p>
                    </div>
                    <span className="font-medium">R$ 29,99</span>
                  </div>

                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="express" id="express" />
                    <div className="flex-1">
                      <Label htmlFor="express" className="font-medium">
                        Entrega Expressa
                      </Label>
                      <p className="text-sm text-gray-600">2-3 dias úteis</p>
                    </div>
                    <span className="font-medium">R$ 49,99</span>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Método de Pagamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="credit">Cartão de Crédito</TabsTrigger>
                    <TabsTrigger value="debit">Cartão de Débito</TabsTrigger>
                    <TabsTrigger value="pix">PIX</TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input id="cardName" placeholder="João Silva" />
                    </div>
                  </TabsContent>

                  <TabsContent value="debit" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="debitNumber">Número do Cartão</Label>
                      <Input id="debitNumber" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="debitExpiry">Validade</Label>
                        <Input id="debitExpiry" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label htmlFor="debitCvv">CVV</Label>
                        <Input id="debitCvv" placeholder="123" />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pix" className="mt-4">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="w-32 h-32 bg-white border-2 border-dashed border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-500">QR Code PIX</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Escaneie o código QR com seu app do banco ou copie o código PIX
                      </p>
                      <Button variant="outline" className="mt-4 bg-transparent">
                        Copiar Código PIX
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

      
          <div className="space-y-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="w-15 h-15 object-cover rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="text-sm font-medium">R$ {(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span>
                    Subtotal ({getCartCount()} {getCartCount() === 1 ? "item" : "itens"})
                  </span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>R$ {shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Desconto</span>
                  <span>-R$ {discount.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                <Button className="w-full" size="lg">
                  Finalizar Pedido
                </Button>

                <div className="text-center text-xs text-gray-500">
                  Ao finalizar, você concorda com nossos{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Termos de Uso
                  </Link>
                </div>
              </CardContent>
            </Card>

            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>Seus dados estão protegidos com criptografia SSL</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
