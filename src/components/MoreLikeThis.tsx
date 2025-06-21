
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/data/productData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface MoreLikeThisProps {
  currentProduct: Product;
  allProducts: Product[];
  onSelectProduct: (productId: string) => void;
}

const MoreLikeThis = ({ currentProduct, allProducts, onSelectProduct }: MoreLikeThisProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Find similar products based on category and eco score
  const similarProducts = allProducts
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || product.ecoScore === currentProduct.ecoScore)
    )
    .slice(0, 8); // Show up to 8 similar products

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      ecoScore: product.ecoScore,
    });
    
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        More Like This
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <Card 
            key={product.id} 
            className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <CardContent className="p-4 space-y-3">
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <p className="text-green-600 font-bold text-xl">${product.price.toFixed(2)}</p>
                </div>
                <Badge className={`${
                  product.ecoScore === 'A' ? 'bg-green-500' :
                  product.ecoScore === 'B' ? 'bg-yellow-500' :
                  product.ecoScore === 'C' ? 'bg-orange-500' :
                  product.ecoScore === 'D' ? 'bg-red-400' :
                  'bg-red-600'
                } text-white font-bold`}>
                  {product.ecoScore}
                </Badge>
              </div>
              
              <div className="text-sm space-y-1">
                <p><strong>CO2:</strong> {product.co2Impact}</p>
                <p><strong>Packaging:</strong> {product.packaging}</p>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => onSelectProduct(product.id)}
                  variant="outline"
                  className="flex-1"
                >
                  View Details
                </Button>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoreLikeThis;
