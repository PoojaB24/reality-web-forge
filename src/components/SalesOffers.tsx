
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Gift, Percent, Star } from 'lucide-react';
import { weeklySales, specialOffers } from '@/data/salesData';

interface SalesOffersProps {
  onProductClick?: (productId: string) => void;
}

const SalesOffers = ({ onProductClick }: SalesOffersProps) => {
  const activeSales = weeklySales.filter(sale => sale.isActive);
  const activeOffers = specialOffers.filter(offer => offer.isActive);

  const handleSaleClick = (productIds: string[]) => {
    if (onProductClick && productIds.length > 0) {
      onProductClick(productIds[0]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Weekly Sales Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Percent className="h-6 w-6 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-800">Weekly Sales</h2>
          <Badge className="bg-red-500 text-white">Limited Time</Badge>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSales.map((sale) => (
            <Card key={sale.id} className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={sale.image} 
                    alt={sale.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-500 text-white text-lg font-bold">
                    {sale.discountPercentage}% OFF
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">{sale.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{sale.description}</p>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>Until {new Date(sale.endDate).toLocaleDateString()}</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleSaleClick(sale.productIds)}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    Shop Sale
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Gift className="h-6 w-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800">Special Offers</h2>
          <Badge className="bg-purple-500 text-white">Exclusive</Badge>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {activeOffers.map((offer) => (
            <Card key={offer.id} className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-500 text-white">
                    {offer.offerType.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-purple-800">{offer.title}</h3>
                  <p className="text-gray-600 mb-3">{offer.description}</p>
                  
                  <div className="text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1 mb-1">
                      <Clock className="h-3 w-3" />
                      <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span className="text-xs">{offer.terms}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleSaleClick(offer.productIds)}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    View Offer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOffers;
