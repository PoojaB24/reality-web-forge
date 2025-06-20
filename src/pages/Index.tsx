
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Lightbulb, ArrowLeft, HelpCircle, Star, Users, TrendingUp } from 'lucide-react';
import ProductScanner from '@/components/ProductScanner';
import EcoScoreCard from '@/components/EcoScoreCard';
import AlternativeSuggestions from '@/components/AlternativeSuggestions';
import HelpPage from '@/components/HelpPage';
import { products, alternativesMap, ecoTips } from '@/data/productData';

const Index = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const currentProduct = selectedProductId ? products.find(p => p.id === selectedProductId) : null;
  const alternatives = selectedProductId ? alternativesMap[selectedProductId] || [] : [];
  const ecoTip = selectedProductId ? ecoTips[selectedProductId] : null;

  const handleProductScanned = (productId: string) => {
    console.log('Product scanned in Index:', productId);
    console.log('Available products:', products.map(p => ({ id: p.id, name: p.name })));
    
    const product = products.find(p => p.id === productId);
    console.log('Found product in Index:', product);
    
    setSelectedProductId(productId);
  };

  const handleSelectAlternative = (alternativeId: string) => {
    console.log('Alternative selected:', alternativeId);
    setSelectedProductId(alternativeId);
  };

  const handleBackToHome = () => {
    setSelectedProductId(null);
    setShowHelp(false);
  };

  const handleShowHelp = () => {
    setShowHelp(true);
    setSelectedProductId(null);
  };

  console.log('Current selected product ID:', selectedProductId);
  console.log('Current product:', currentProduct);

  // Show Help Page
  if (showHelp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-6 py-8">
          <HelpPage onBackToHome={handleBackToHome} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                  EcoCart
                </h1>
                <p className="text-sm text-gray-600">
                  Browser Extension & Mobile App
                </p>
              </div>
            </div>
            
            <Button
              onClick={handleShowHelp}
              variant="outline"
              className="flex items-center space-x-2 hover:bg-green-50"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help & Tutorial</span>
            </Button>
          </div>
          
          <p className="text-center text-gray-600 mt-3 text-lg">
            Scan products to see their environmental impact and discover greener alternatives
          </p>
          
          {/* Enhanced Stats Bar */}
          <div className="flex justify-center mt-4 space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <div className="text-2xl font-bold text-green-600">25+</div>
              </div>
              <div className="text-xs text-gray-500">Products Available</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Users className="h-5 w-5 text-green-600" />
                <div className="text-2xl font-bold text-green-600">500K</div>
              </div>
              <div className="text-xs text-gray-500">Active Users</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Star className="h-5 w-5 text-green-600" />
                <div className="text-2xl font-bold text-green-600">2.3M kg</div>
              </div>
              <div className="text-xs text-gray-500">CO2 Saved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Back Button - Only show when a product is selected */}
        {selectedProductId && (
          <div className="max-w-4xl mx-auto mb-6">
            <Button 
              onClick={handleBackToHome}
              variant="outline"
              className="flex items-center space-x-2 hover:bg-green-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </div>
        )}

        {/* Product Scanner - Always visible */}
        <div className="max-w-2xl mx-auto mb-8">
          <ProductScanner onProductScanned={handleProductScanned} />
        </div>

        {/* Product Details */}
        {currentProduct && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Product Name Display */}
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {currentProduct.name}
              </h2>
              <p className="text-lg text-gray-600 mt-1">
                by {currentProduct.brand}
              </p>
            </div>

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
              Search for any product name or click on any item below to see its environmental impact
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['beverages', 'food', 'personal-care', 'household', 'electronics', 'snacks'].map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-green-50">
                  {category.replace('-', ' ')}
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedProductId(product.id)}
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
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
                    
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* How It Works Section - Only show when no product is selected */}
        {!selectedProductId && (
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
            
            <div className="text-center mt-8">
              <Button 
                onClick={handleShowHelp}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                View Full Tutorial & Demo Videos
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
