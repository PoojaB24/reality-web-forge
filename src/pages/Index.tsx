
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Award, Lightbulb, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  packaging: string;
  recyclable: boolean;
  brand: string;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  category: string;
  co2Impact: string;
  waterUsage: string;
  sustainabilityFeatures: string[];
}

const products: Product[] = [
  {
    id: '1',
    name: 'Plastic Water Bottle',
    packaging: 'plastic',
    recyclable: true,
    brand: 'Generic',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '0.5kg CO2',
    waterUsage: '3L',
    sustainabilityFeatures: ['Recyclable', 'BPA-free']
  },
  {
    id: '2',
    name: 'Glass Water Bottle',
    packaging: 'glass',
    recyclable: true,
    brand: 'EcoFriendly Co.',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.2kg CO2',
    waterUsage: '1L',
    sustainabilityFeatures: ['100% Recyclable', 'Reusable', 'Zero Plastic']
  },
  {
    id: '3',
    name: 'Stainless Steel Bottle',
    packaging: 'metal',
    recyclable: true,
    brand: 'EcoSteel',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.1kg CO2',
    waterUsage: '0.5L',
    sustainabilityFeatures: ['Lifetime Durability', '100% Recyclable', 'Insulated']
  },
  {
    id: '4',
    name: 'Disposable Coffee Cup',
    packaging: 'paper/plastic',
    recyclable: false,
    brand: 'Generic',
    ecoScore: 'D',
    category: 'beverages',
    co2Impact: '0.8kg CO2',
    waterUsage: '5L',
    sustainabilityFeatures: ['Biodegradable (partially)']
  },
  {
    id: '5',
    name: 'Bamboo Coffee Cup',
    packaging: 'bamboo',
    recyclable: true,
    brand: 'GreenCup',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.1kg CO2',
    waterUsage: '0.3L',
    sustainabilityFeatures: ['Biodegradable', 'Renewable Material', 'Reusable']
  },
  {
    id: '6',
    name: 'Plastic Shopping Bag',
    packaging: 'plastic',
    recyclable: false,
    brand: 'Generic',
    ecoScore: 'E',
    category: 'bags',
    co2Impact: '1.2kg CO2',
    waterUsage: '8L',
    sustainabilityFeatures: []
  },
  {
    id: '7',
    name: 'Canvas Tote Bag',
    packaging: 'cotton',
    recyclable: true,
    brand: 'EcoBags',
    ecoScore: 'A',
    category: 'bags',
    co2Impact: '0.3kg CO2',
    waterUsage: '2L',
    sustainabilityFeatures: ['Reusable', 'Organic Cotton', 'Durable']
  }
];

const ecoTips = {
  'Plastic Water Bottle': 'Try using a reusable bottle to reduce plastic waste.',
  'Glass Water Bottle': 'Great choice! Glass is infinitely recyclable.',
  'Stainless Steel Bottle': 'Excellent! Steel bottles last a lifetime.',
  'Disposable Coffee Cup': 'Consider bringing your own reusable cup.',
  'Bamboo Coffee Cup': 'Perfect sustainable choice! Bamboo grows quickly.',
  'Plastic Shopping Bag': 'Switch to reusable bags to help the environment.',
  'Canvas Tote Bag': 'Fantastic! One tote bag can replace hundreds of plastic bags.'
};

const alternatives = {
  'Plastic Water Bottle': 'Stainless Steel Bottle',
  'Disposable Coffee Cup': 'Bamboo Coffee Cup',
  'Plastic Shopping Bag': 'Canvas Tote Bag'
};

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const currentProduct = products.find(p => p.id === selectedProduct);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              EcoCart
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Discover the environmental impact of your purchases and make sustainable choices
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex justify-center">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64 bg-white/80 backdrop-blur-sm border-green-200">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-sm">
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="beverages">Beverages</SelectItem>
                <SelectItem value="bags">Bags</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Select a product to see its EcoScore and learn how you can shop more sustainably
          </h2>
          <Select value={selectedProduct} onValueChange={setSelectedProduct}>
            <SelectTrigger className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-green-200 text-lg py-6">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-sm">
              {filteredProducts.map((product) => (
                <SelectItem key={product.id} value={product.id} className="text-lg py-3">
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Product Details */}
        {currentProduct && (
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Award className="h-6 w-6 text-green-600" />
                  <span>Product Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-xl mb-2">
                        {currentProduct.name}
                      </h3>
                      <div className="space-y-2">
                        <p><strong>Packaging:</strong> {currentProduct.packaging}</p>
                        <p><strong>Recyclable:</strong> {currentProduct.recyclable ? 'Yes' : 'No'}</p>
                        <p><strong>Brand:</strong> {currentProduct.brand}</p>
                        <p><strong>CO2 Impact:</strong> {currentProduct.co2Impact}</p>
                        <p><strong>Water Usage:</strong> {currentProduct.waterUsage}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <Badge 
                        className={`${getScoreColor(currentProduct.ecoScore)} text-white text-2xl px-6 py-3 font-bold`}
                      >
                        EcoScore: {currentProduct.ecoScore}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-2">
                        {getScoreText(currentProduct.ecoScore)} Environmental Impact
                      </p>
                    </div>
                    
                    {currentProduct.sustainabilityFeatures.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Sustainability Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProduct.sustainabilityFeatures.map((feature, index) => (
                            <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eco Tip */}
            <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-full">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Eco Tip:</h3>
                    <p className="text-green-700">{ecoTips[currentProduct.name as keyof typeof ecoTips]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Suggestion */}
            {alternatives[currentProduct.name as keyof typeof alternatives] && (
              <Card className="bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 p-2 rounded-full">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-800 mb-2">Try This Instead:</h3>
                        <p className="text-orange-700 text-lg font-medium">
                          {alternatives[currentProduct.name as keyof typeof alternatives]}
                        </p>
                      </div>
                    </div>
                    <Recycle className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Product Comparison Grid */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Compare All Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className={`bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  selectedProduct === product.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">EcoScore</span>
                    <Badge className={`${getScoreColor(product.ecoScore)} text-white font-bold`}>
                      {product.ecoScore}
                    </Badge>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><strong>CO2:</strong> {product.co2Impact}</p>
                    <p><strong>Water:</strong> {product.waterUsage}</p>
                    <p><strong>Recyclable:</strong> {product.recyclable ? '✓' : '✗'}</p>
                  </div>
                  {product.sustainabilityFeatures.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {product.sustainabilityFeatures.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-600 border-green-200">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
