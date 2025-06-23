
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Package, CheckCircle, Clock, MapPin } from 'lucide-react';

interface DeliveryTrackingProps {
  orderId?: string;
  estimatedDelivery?: string;
}

const DeliveryTracking = ({ orderId = "ECO123456", estimatedDelivery }: DeliveryTrackingProps) => {
  const [currentStatus] = useState(1); // 0: ordered, 1: packed, 2: shipped, 3: delivered

  const deliveryDate = estimatedDelivery || new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const trackingSteps = [
    { 
      id: 0, 
      title: 'Order Confirmed', 
      description: 'Your eco-friendly order has been received',
      icon: CheckCircle,
      completed: true 
    },
    { 
      id: 1, 
      title: 'Being Packed', 
      description: 'Your items are being carefully packed with eco-friendly materials',
      icon: Package,
      completed: currentStatus >= 1 
    },
    { 
      id: 2, 
      title: 'Shipped', 
      description: 'Your order is on its way via carbon-neutral delivery',
      icon: Truck,
      completed: currentStatus >= 2 
    },
    { 
      id: 3, 
      title: 'Delivered', 
      description: 'Enjoy your sustainable Indian products!',
      icon: CheckCircle,
      completed: currentStatus >= 3 
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800">
            <Truck className="h-5 w-5" />
            <span>Delivery Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Order ID</div>
              <div className="font-semibold">{orderId}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Estimated Delivery</div>
              <div className="font-semibold text-green-600">{deliveryDate}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-green-700">
            <MapPin className="h-4 w-4" />
            <span>Free eco-friendly delivery to your doorstep</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delivery Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === currentStatus;
              
              return (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${
                    step.completed 
                      ? 'bg-green-500 text-white' 
                      : isActive 
                        ? 'bg-yellow-500 text-white animate-pulse' 
                        : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className={`font-semibold ${
                        step.completed ? 'text-green-600' : isActive ? 'text-yellow-600' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h4>
                      {step.completed && (
                        <Badge className="bg-green-100 text-green-800">Completed</Badge>
                      )}
                      {isActive && (
                        <Badge className="bg-yellow-100 text-yellow-800 animate-pulse">In Progress</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    
                    {step.completed && (
                      <div className="text-xs text-green-600 mt-1 flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Completed today at {new Date().toLocaleTimeString('en-IN', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <div className="text-blue-600 text-2xl">🌱</div>
              <div>
                <h4 className="font-semibold text-blue-800">Eco-Impact of Your Order</h4>
                <p className="text-sm text-blue-700 mt-1">
                  By choosing eco-friendly Indian products, you've helped save 2.5kg CO2 emissions and supported sustainable local businesses.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryTracking;
