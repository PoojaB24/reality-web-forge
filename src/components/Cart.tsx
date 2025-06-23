
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

interface CartProps {
  onBackToShopping: () => void;
  onProceedToCheckout: () => void;
}

const Cart = ({ onBackToShopping, onProceedToCheckout }: CartProps) => {
  const { items, removeFromCart, updateQuantity, clearCart, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center p-8">
          <CardContent className="space-y-4">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-600">Your cart is empty</h2>
            <p className="text-gray-500">Start shopping for eco-friendly Indian products!</p>
            <Button onClick={onBackToShopping} className="bg-green-600 hover:bg-green-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <Button
          onClick={onBackToShopping}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Continue Shopping</span>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="bg-white/90 backdrop-blur-sm border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌿</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">{item.brand}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={`${
                        item.ecoScore === 'A' ? 'bg-green-500' :
                        item.ecoScore === 'B' ? 'bg-yellow-500' :
                        'bg-orange-500'
                      } text-white`}>
                        Eco Score: {item.ecoScore}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">₹{item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-white/90 backdrop-blur-sm border-green-200 sticky top-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Items ({itemCount})</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-green-600">₹{total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-2 pt-4">
                <Button 
                  onClick={onProceedToCheckout}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  onClick={clearCart}
                  variant="outline" 
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600 mt-4">
                <p>🌱 You're supporting eco-friendly Indian brands!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
