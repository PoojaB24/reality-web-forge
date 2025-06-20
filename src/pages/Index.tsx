
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Lightbulb } from 'lucide-react';
import ProductScanner from '@/components/ProductScanner';
import EcoScoreCard from '@/components/EcoScoreCard';
import AlternativeSuggestions from '@/components/AlternativeSuggestions';
import { products, alternativesMap, ecoTips } from '@/data/productData';

const Index = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const currentProduct = selectedProductId ? products.find(p => p.id === selectedProductId) : null;
  const alternatives = selectedProductId ? alternativesMap[selectedProductId] || [] : [];
  const ecoTip = selectedProductId ? ecoTips[selectedProductId] : null;

  const handleProductScanned = (productId: string) => {
    setSelectedProductId(productId);
  };

  const handleSelectAlternative = (alternativeId: string) => {
    setSelectedProductId(alternativeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                EcoCart
              </h1>
              <p className="text-sm text-gray-600">
                Browser Extension & Mobile App
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-3 text-lg">
            Scan products to see their environmental impact and discover greener alternatives
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center mt-4 space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10M+</div>
              <div className="text-xs text-gray-500">Products Rated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">500K</div>
              <div className="text-xs text-gray-500">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2.3M kg</div>
              <div className="text-xs text-gray-500">CO2 Saved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Product Scanner */}
        <div className="max-w-2xl mx-auto mb-8">
          <ProductScanner onProductScanned={handleProductScanned} />
        </div>

        {/* Product Details */}
        {currentProduct && (
          <div className="max-w-4xl mx-auto space-y-6">
            <EcoScoreCard product={currentProduct} />

            {/* Eco Tip */}
            {ecoTip && (
              <Card className="bg-gradient-to-r from-blue-100 to-cyan-100 border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-2 rounded-full">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2">💡 Eco Insight:</h3>
                      <p className="text-blue-700">{ecoTip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Alternative Suggestions */}
            <AlternativeSuggestions 
              alternatives={alternatives} 
              onSelectAlternative={handleSelectAlternative}
            />
          </div>
        )}

        {/* Demo Products Grid - Only shown when no product is selected */}
        {!selectedProductId && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Try Demo Products
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Click on any product to see its EcoScore and environmental impact
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedProductId(product.id)}
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.brand}</p>
                        {product.price && (
                          <p className="text-green-600 font-bold">{product.price}</p>
                        )}
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
                      <p><strong>Recyclable:</strong> {product.recyclable ? '✅' : '❌'}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* How It Works Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-green-100">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How EcoCart Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Scan or Search</h3>
              <p className="text-gray-600">Use your camera to scan barcodes or search for products by name</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">2. See EcoScore</h3>
              <p className="text-gray-600">Get instant ratings based on sustainability factors like packaging and carbon footprint</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Choose Better</h3>
              <p className="text-gray-600">Discover greener alternatives and make environmentally conscious choices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
