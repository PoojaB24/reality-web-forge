import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, Lightbulb, ArrowLeft, HelpCircle, Star, Users, TrendingUp, ShoppingCart, User, LogOut, Search } from 'lucide-react';
import ProductScanner from '@/components/ProductScanner';
import EcoScoreCard from '@/components/EcoScoreCard';
import AlternativeSuggestions from '@/components/AlternativeSuggestions';
import MoreLikeThis from '@/components/MoreLikeThis';
import ProductReviews from '@/components/ProductReviews';
import SearchSuggestions from '@/components/SearchSuggestions';
import HelpPage from '@/components/HelpPage';
import Cart from '@/components/Cart';
import Auth from '@/components/Auth';
import Checkout from '@/components/Checkout';
import { products, alternativesMap, ecoTips, type Product as ProductType } from '@/data/productData';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import DeliveryTracking from '@/components/DeliveryTracking';
import SalesOffers from '@/components/SalesOffers';

type ViewState = 'home' | 'help' | 'cart' | 'auth' | 'checkout' | 'order-complete';

const Index = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { addToCart, itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { toast } = useToast();

  const currentProduct = selectedProductId ? products.find(p => p.id === selectedProductId) : null;
  const alternatives = selectedProductId ? alternativesMap[selectedProductId] || [] : [];
  const ecoTip = selectedProductId ? ecoTips[selectedProductId] : null;

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductScanned = (productId: string) => {
    console.log('Product scanned in Index:', productId);
    const product = products.find(p => p.id === productId);
    console.log('Found product in Index:', product);
    setSelectedProductId(productId);
    setCurrentView('home');
    setShowSuggestions(false);
  };

  const handleSelectAlternative = (alternativeId: string) => {
    console.log('Alternative selected:', alternativeId);
    setSelectedProductId(alternativeId);
  };

  const handleAddToCart = (product: ProductType) => {
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

  const handleBackToHome = () => {
    setSelectedProductId(null);
    setCurrentView('home');
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSuggestions(value.length > 0 || value === '');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Auto-search for the suggestion
    const matchedProduct = products.find(p => 
      p.name.toLowerCase().includes(suggestion.toLowerCase()) ||
      p.brand.toLowerCase().includes(suggestion.toLowerCase()) ||
      p.category.toLowerCase().includes(suggestion.toLowerCase())
    );
    if (matchedProduct) {
      setSelectedProductId(matchedProduct.id);
    }
  };

  // Render different views based on currentView state
  if (currentView === 'help') {
    return <HelpPage onBack={handleBackToHome} />;
  }

  if (currentView === 'cart') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 py-8">
          <Cart 
            onBackToShopping={() => setCurrentView('home')} 
            onProceedToCheckout={() => setCurrentView('checkout')} 
          />
        </div>
      </div>
    );
  }

  if (currentView === 'auth') {
    return <Auth onBack={handleBackToHome} />;
  }

  if (currentView === 'checkout') {
    return <Checkout onBack={() => setCurrentView('cart')} onOrderComplete={() => setCurrentView('order-complete')} />;
  }

  if (currentView === 'order-complete') {
    return <DeliveryTracking onBackToShopping={handleBackToHome} />;
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
                  EcoCart India
                </h1>
                <p className="text-sm text-gray-600">
                  Eco-Friendly Indian Products
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setCurrentView('help')}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-green-50"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Help</span>
              </Button>

              <Button
                onClick={() => setCurrentView('cart')}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-green-50 relative"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>

              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user?.name}</span>
                  </Button>
                  <Button onClick={logout} variant="outline" size="icon">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setCurrentView('auth')} className="bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              )}
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-3 text-lg">
            Discover authentic Indian eco-friendly products from trusted brands
          </p>
          
          {/* Enhanced Stats Bar */}
          <div className="flex justify-center mt-4 space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <div className="text-2xl font-bold text-green-600">250+</div>
              </div>
              <div className="text-xs text-gray-500">Indian Products</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Users className="h-5 w-5 text-green-600" />
                <div className="text-2xl font-bold text-green-600">10L+</div>
              </div>
              <div className="text-xs text-gray-500">Happy Indians</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Star className="h-5 w-5 text-green-600" />
                <div className="text-2xl font-bold text-green-600">5M kg</div>
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
              <span>Back to Products</span>
            </Button>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for Indian products (e.g., Masala Chai, Basmati Rice, Neem Face Wash)..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="pl-10 pr-4 py-3 text-lg border-green-200 focus:border-green-400 rounded-xl"
            />
          </div>
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 z-20">
              <SearchSuggestions 
                onSuggestionClick={handleSuggestionClick}
                currentSearch={searchQuery}
              />
            </div>
          )}
        </div>

        {/* Product Scanner - Always visible */}
        <div className="max-w-2xl mx-auto mb-8">
          <ProductScanner onProductScanned={handleProductScanned} />
        </div>

        {/* Sales and Offers Section - Show when no product is selected */}
        {!selectedProductId && !searchQuery && (
          <div className="mb-12">
            <SalesOffers onProductClick={setSelectedProductId} />
          </div>
        )}

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
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentProduct.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{currentProduct.rating}.0</span>
                <span className="text-gray-600">({currentProduct.reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>

            <EcoScoreCard product={currentProduct} />

            {/* Product Description */}
            <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">About this product</h3>
                <p className="text-gray-700">{currentProduct.description}</p>
              </CardContent>
            </Card>

            {/* Add to Cart Button */}
            <div className="text-center">
              <Button
                onClick={() => handleAddToCart(currentProduct)}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ₹{currentProduct.price}
              </Button>
            </div>

            {/* Product Reviews */}
            <ProductReviews 
              reviews={currentProduct.reviews}
              rating={currentProduct.rating}
              reviewCount={currentProduct.reviewCount}
            />

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

            {/* More Like This Section */}
            <MoreLikeThis 
              currentProduct={currentProduct}
              allProducts={products}
              onSelectProduct={setSelectedProductId}
            />
          </div>
        )}

        {/* Demo Products Grid - Show filtered or all products when no product is selected */}
        {!selectedProductId && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Authentic Indian Eco-Friendly Products'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {searchQuery ? `Found ${filteredProducts.length} products` : 'Discover traditional and sustainable products from across India'}
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                'beverages', 
                'food-grains', 
                'personal-care', 
                'household', 
                'textiles-clothing', 
                'spices-condiments', 
                'beauty-cosmetics', 
                'ayurveda-wellness', 
                'home-decor', 
                'organic-health-foods'
              ].map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-green-50">
                  {category.replace('-', ' ')}
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(searchQuery ? filteredProducts : products).map((product) => (
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
                        <p className="text-green-600 font-bold text-xl">₹{product.price}</p>
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

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600">({product.reviewCount})</span>
                    </div>
                    
                    <div className="text-sm space-y-1">
                      <p><strong>CO2:</strong> {product.co2Impact}</p>
                      <p><strong>Packaging:</strong> {product.packaging}</p>
                      <p><strong>Recyclable:</strong> {product.recyclable ? '✅' : '❌'}</p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button
                        onClick={() => setSelectedProductId(product.id)}
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
        )}

        {/* How It Works Section - Only show when no product is selected and no search */}
        {!selectedProductId && !searchQuery && (
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              How EcoCart India Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Discover Products</h3>
                <p className="text-gray-600">Search for authentic Indian eco-friendly products</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Check EcoScore</h3>
                <p className="text-gray-600">View sustainability ratings and environmental impact</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Read Reviews</h3>
                <p className="text-gray-600">Check authentic customer reviews and ratings</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">4. Shop Sustainably</h3>
                <p className="text-gray-600">Add to cart and support Indian eco-friendly brands</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
