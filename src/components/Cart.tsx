
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

interface CartProps {
  onBackToShopping: () => void;
  onProceedToCheckout: () => void;
}

const Cart = ({ onBackToShopping, onProceedToCheckout }: CartProps) => {
  const { items, total, itemCount, updateQuantity, removeFromCart } = useCart();
  const { isAuthenticated } = useAuth();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some eco-friendly products to get started!</p>
        <Button onClick={onBackToShopping} className="bg-green-600 hover:bg-green-700">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          onClick={onBackToShopping}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Continue Shopping</span>
        </Button>
        <h1 className="text-3xl font-bold text-gray-800">
          Shopping Cart ({itemCount} items)
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600">{item.brand}</p>
                        <Badge className={`mt-2 ${
                          item.ecoScore === 'A' ? 'bg-green-500' :
                          item.ecoScore === 'B' ? 'bg-yellow-500' :
                          item.ecoScore === 'C' ? 'bg-orange-500' :
                          item.ecoScore === 'D' ? 'bg-red-400' :
                          'bg-red-600'
                        } text-white`}>
                          EcoScore: {item.ecoScore}
                        </Badge>
                      </div>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        variant="outline"
                        size="icon"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-medium text-lg">{item.quantity}</span>
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-lg sticky top-4">
            <CardHeader>
              <CardTitle className="text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Eco Impact Bonus</span>
                <span className="text-green-600 font-medium">-$5.00</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-600">${Math.max(0, total - 5).toFixed(2)}</span>
              </div>
              
              <div className="space-y-3 mt-6">
                {isAuthenticated ? (
                  <Button
                    onClick={onProceedToCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  >
                    Proceed to Checkout
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 text-center">
                      Please sign in to continue
                    </p>
                    <Button
                      onClick={onProceedToCheckout}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Sign In to Checkout
                    </Button>
                  </div>
                )}
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Free shipping on all eco-friendly products
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    🌱 This order will save 2.5kg CO2
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
