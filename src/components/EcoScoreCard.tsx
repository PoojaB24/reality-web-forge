
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Recycle, TreePine } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  category: string;
  co2Impact: string;
  waterUsage: string;
  packaging: string;
  recyclable: boolean;
  sustainabilityFeatures: string[];
  price?: string;
  image?: string;
}

interface EcoScoreCardProps {
  product: Product;
}

const EcoScoreCard = ({ product }: EcoScoreCardProps) => {
  const getScoreColor = (score: string) => {
    switch (score) {
      case 'A': return 'bg-green-500';
      case 'B': return 'bg-yellow-500';
      case 'C': return 'bg-orange-500';
      case 'D': return 'bg-red-400';
      case 'E': return 'bg-red-600';
      default: return 'bg-gray-500';
    }
  };

  const getScoreText = (score: string) => {
    switch (score) {
      case 'A': return 'Excellent';
      case 'B': return 'Good';
      case 'C': return 'Fair';
      case 'D': return 'Poor';
      case 'E': return 'Very Poor';
      default: return 'Unknown';
    }
  };

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'A': return <TreePine className="h-8 w-8 text-green-700" />;
      case 'B': return <Leaf className="h-8 w-8 text-yellow-700" />;
      case 'C': return <Leaf className="h-8 w-8 text-orange-700" />;
      case 'D': return <Recycle className="h-8 w-8 text-red-700" />;
      case 'E': return <Recycle className="h-8 w-8 text-red-800" />;
      default: return <Leaf className="h-8 w-8 text-gray-700" />;
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-xl">
      <CardHeader className={`${getScoreColor(product.ecoScore)}/10 rounded-t-lg`}>
        <CardTitle className="flex items-center justify-between text-white">
          <div>
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-sm opacity-90">{product.brand}</p>
          </div>
          <div className="text-center">
            {getScoreIcon(product.ecoScore)}
            <Badge className={`${getScoreColor(product.ecoScore)} text-white text-lg font-bold mt-1`}>
              {product.ecoScore}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">
            EcoScore: {getScoreText(product.ecoScore)}
          </p>
          {product.price && (
            <p className="text-green-600 font-bold text-xl">{product.price}</p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Packaging:</strong> {product.packaging}
          </div>
          <div>
            <strong>Recyclable:</strong> {product.recyclable ? '✅ Yes' : '❌ No'}
          </div>
          <div>
            <strong>CO2 Impact:</strong> {product.co2Impact}
          </div>
          <div>
            <strong>Water Usage:</strong> {product.waterUsage}
          </div>
        </div>

        {product.sustainabilityFeatures.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Sustainability Features:</h4>
            <div className="flex flex-wrap gap-2">
              {product.sustainabilityFeatures.map((feature, index) => (
                <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EcoScoreCard;
