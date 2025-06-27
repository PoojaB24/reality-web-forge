
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, Lightbulb, ArrowLeft, HelpCircle, Star, Users, TrendingUp, ShoppingCart, User, LogOut, Search, Languages } from 'lucide-react';
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
import LanguageSelector from '@/components/LanguageSelector';
import VoiceSpeaker from '@/components/VoiceSpeaker';

type ViewState = 'home' | 'help' | 'cart' | 'auth' | 'checkout' | 'order-complete';

const Index = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });
  const { addToCart, itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { toast } = useToast();

  const currentProduct = selectedProductId ? products.find(p => p.id === selectedProductId) : null;
  const alternatives = selectedProductId ? alternativesMap[selectedProductId] || [] : [];
  const ecoTip = selectedProductId ? ecoTips[selectedProductId] : null;

  // Language translations
  const translations = {
    en: {
      ecoCartIndia: 'EcoCart India',
      ecoFriendlyProducts: 'Eco-Friendly Indian Products',
      discoverProducts: 'Discover authentic Indian eco-friendly products from trusted brands',
      searchPlaceholder: 'Search for Indian products (e.g., Masala Chai, Basmati Rice, Neem Face Wash)...',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
      help: 'Help',
      cart: 'Cart',
      signIn: 'Sign In',
      language: 'Language',
      backToProducts: 'Back to Products',
      aboutProduct: 'About this product',
      categories: 'Categories',
      allProducts: 'All Products'
    },
    hi: {
      ecoCartIndia: 'इकोकार्ट भारत',
      ecoFriendlyProducts: 'पर्यावरण अनुकूल भारतीय उत्पाद',
      discoverProducts: 'विश्वसनीय ब्रांडों से प्रामाणिक भारतीय पर्यावरण अनुकूल उत्पादों की खोज करें',
      searchPlaceholder: 'भारतीय उत्पादों की खोज करें (जैसे, मसाला चाय, बासमती चावल, नीम फेस वाश)...',
      addToCart: 'कार्ट में जोड़ें',
      viewDetails: 'विवरण देखें',
      help: 'सहायता',
      cart: 'कार्ट',
      signIn: 'साइन इन करें',
      language: 'भाषा',
      backToProducts: 'उत्पादों पर वापस जाएं',
      aboutProduct: 'इस उत्पाद के बारे में',
      categories: 'श्रेणियां',
      allProducts: 'सभी उत्पाद'
    },
    bn: {
      ecoCartIndia: 'ইকোকার্ট ইন্ডিয়া',
      ecoFriendlyProducts: 'পরিবেশবান্ধব ভারতীয় পণ্য',
      discoverProducts: 'বিশ্বস্ত ব্র্যান্ডগুলি থেকে খাঁটি ভারতীয় পরিবেশবান্ধব পণ্যগুলি আবিষ্কার করুন',
      searchPlaceholder: 'ভারতীয় পণ্য খুঁজুন (যেমন, মসলা চা, বাসমতী চাল, নিম ফেস ওয়াশ)...',
      addToCart: 'কার্টে যোগ করুন',
      viewDetails: 'বিস্তারিত দেখুন',
      help: 'সাহায্য',
      cart: 'কার্ট',
      signIn: 'সাইন ইন করুন',
      language: 'ভাষা',
      backToProducts: 'পণ্যগুলিতে ফিরে যান',
      aboutProduct: 'এই পণ্য সম্পর্কে',
      categories: 'বিভাগ',
      allProducts: 'সমস্ত পণ্য'
    }
  };

  const t = translations[currentLanguage as keyof typeof translations] || translations.en;

  // Categories with proper labels
  const categories = [
    { id: 'all', label: t.allProducts, value: '' },
    { id: 'beverages', label: 'Beverages', value: 'beverages' },
    { id: 'food-grains', label: 'Food & Grains', value: 'food-grains' },
    { id: 'personal-care', label: 'Personal Care', value: 'personal-care' },
    { id: 'household', label: 'Household', value: 'household' },
    { id: 'textiles-clothing', label: 'Textiles & Clothing', value: 'textiles-clothing' },
    { id: 'spices-condiments', label: 'Spices & Condiments', value: 'spices-condiments' },
    { id: 'beauty-cosmetics', label: 'Beauty & Cosmetics', value: 'beauty-cosmetics' },
    { id: 'ayurveda-wellness', label: 'Ayurveda & Wellness', value: 'ayurveda-wellness' },
    { id: 'home-decor', label: 'Home Decor', value: 'home-decor' },
    { id: 'organic-health-foods', label: 'Organic Health Foods', value: 'organic-health-foods' }
  ];

  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Remove duplicates by product name and brand combination
  const uniqueProducts = filteredProducts.filter((product, index, self) => 
    index === self.findIndex(p => p.name === product.name && p.brand === product.brand)
  );

  // Listen for language changes
  useState(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

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
      price: product.price.toString(),
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
    setSelectedCategory('');
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

  const handleViewChange = (view: ViewState) => {
    console.log('Changing view to:', view);
    setCurrentView(view);
    setShowSuggestions(false);
  };

  const handleCategoryFilter = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    setSelectedProductId(null);
    setSearchQuery('');
    
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render different views based on currentView state
  if (currentView === 'help') {
    return <HelpPage onBackToHome={handleBackToHome} />;
  }

  if (currentView === 'cart') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 py-8">
          <Cart 
            onBackToShopping={() => handleViewChange('home')} 
            onProceedToCheckout={() => handleViewChange('checkout')} 
          />
        </div>
      </div>
    );
  }

  if (currentView === 'auth') {
    return <Auth onBackToHome={handleBackToHome} onSuccess={() => handleViewChange('home')} />;
  }

  if (currentView === 'checkout') {
    return <Checkout onBackToCart={() => handleViewChange('cart')} onOrderComplete={() => handleViewChange('order-complete')} />;
  }

  if (currentView === 'order-complete') {
    return <DeliveryTracking />;
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
                <div className="flex items-center space-x-2">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                    {t.ecoCartIndia}
                  </h1>
                  <VoiceSpeaker 
                    text={t.ecoCartIndia}
                    size="sm"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-600">
                    {t.ecoFriendlyProducts}
                  </p>
                  <VoiceSpeaker 
                    text={t.ecoFriendlyProducts}
                    size="sm"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <Button
                  onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                  variant="outline"
                  className="flex items-center space-x-2 hover:bg-green-50"
                  aria-label="Select Language"
                >
                  <Languages className="h-4 w-4" />
                  <span>{t.language}</span>
                </Button>
                {showLanguageSelector && (
                  <div className="absolute top-full right-0 mt-2 z-20">
                    <LanguageSelector onClose={() => setShowLanguageSelector(false)} />
                  </div>
                )}
              </div>

              <Button
                onClick={() => handleViewChange('help')}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-green-50"
                aria-label="Get Help"
              >
                <HelpCircle className="h-4 w-4" />
                <span>{t.help}</span>
              </Button>

              <Button
                onClick={() => handleViewChange('cart')}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-green-50 relative"
                aria-label={`Shopping Cart with ${itemCount} items`}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>{t.cart}</span>
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs" aria-label={`${itemCount} items in cart`}>
                    {itemCount}
                  </Badge>
                )}
              </Button>

              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="flex items-center space-x-2" aria-label={`User account: ${user?.name}`}>
                    <User className="h-4 w-4" />
                    <span>{user?.name}</span>
                  </Button>
                  <Button onClick={logout} variant="outline" size="icon" aria-label="Sign out">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button onClick={() => handleViewChange('auth')} className="bg-blue-600 hover:bg-blue-700" aria-label="Sign in to your account">
                  {t.signIn}
                </Button>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mt-3">
            <p className="text-center text-gray-600 text-lg">
              {t.discoverProducts}
            </p>
            <VoiceSpeaker 
              text={t.discoverProducts}
              size="sm"
            />
          </div>
          
          {/* Enhanced Stats Bar */}
          <div className="flex justify-center mt-4 space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <TrendingUp className="h-5 w-5 text-green-600" aria-hidden="true" />
                <div className="text-2xl font-bold text-green-600">250+</div>
              </div>
              <div className="text-xs text-gray-500">Indian Products</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Users className="h-5 w-5 text-green-600" aria-hidden="true" />
                <div className="text-2xl font-bold text-green-600">10L+</div>
              </div>
              <div className="text-xs text-gray-500">Happy Indians</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Star className="h-5 w-5 text-green-600" aria-hidden="true" />
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
              aria-label="Go back to product list"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t.backToProducts}</span>
            </Button>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
            <Input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="pl-10 pr-4 py-3 text-lg border-green-200 focus:border-green-400 rounded-xl"
              aria-label="Search for products"
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
              <div className="flex items-center justify-center space-x-2">
                <h2 className="text-3xl font-bold text-gray-800" role="heading" aria-level={2}>
                  {currentProduct.name}
                </h2>
                <VoiceSpeaker 
                  text={`Product: ${currentProduct.name} by ${currentProduct.brand}. Price: ₹${currentProduct.price}. Eco Score: ${currentProduct.ecoScore}.`}
                  size="sm"
                />
              </div>
              <p className="text-lg text-gray-600 mt-1">
                by {currentProduct.brand}
              </p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="flex items-center space-x-1" role="img" aria-label={`${currentProduct.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentProduct.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{currentProduct.rating}.0</span>
                <span className="text-gray-600">({currentProduct.reviewCount.toLocaleString()} reviews)</span>
              </div>
              <div className="sr-only">
                Product: {currentProduct.name} by {currentProduct.brand}. 
                Price: ₹{currentProduct.price}. 
                Eco Score: {currentProduct.ecoScore}. 
                Rating: {currentProduct.rating} out of 5 stars with {currentProduct.reviewCount} reviews.
                CO2 Impact: {currentProduct.co2Impact}.
                Packaging: {currentProduct.packaging}.
                {currentProduct.recyclable ? 'This product is recyclable.' : 'This product is not recyclable.'}
              </div>
            </div>

            <EcoScoreCard product={currentProduct} />

            {/* Product Description */}
            <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <h3 className="text-xl font-semibold">{t.aboutProduct}</h3>
                  <VoiceSpeaker 
                    text={`${t.aboutProduct}: ${currentProduct.description}`}
                    size="sm"
                  />
                </div>
                <p className="text-gray-700">{currentProduct.description}</p>
              </CardContent>
            </Card>

            {/* Add to Cart Button */}
            <div className="text-center">
              <Button
                onClick={() => handleAddToCart(currentProduct)}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                aria-label={`Add ${currentProduct.name} to cart for ₹${currentProduct.price}`}
              >
                <ShoppingCart className="h-5 w-5 mr-2" aria-hidden="true" />
                {t.addToCart} - ₹{currentProduct.price}
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
                      <Lightbulb className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-blue-800">💡 Eco Insight:</h3>
                        <VoiceSpeaker 
                          text={`Eco Insight: ${ecoTip}`}
                          size="sm"
                        />
                      </div>
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

        {/* Category Filters */}
        {!selectedProductId && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{t.categories}</h3>
              <VoiceSpeaker 
                text={`${t.categories}. Choose from different product categories.`}
                size="sm"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryFilter(category.value)}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedCategory === category.value 
                      ? 'bg-green-600 text-white' 
                      : 'hover:bg-green-50'
                  }`}
                  aria-label={`Filter by ${category.label} category`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Demo Products Grid - Show filtered or all products when no product is selected */}
        {!selectedProductId && (
          <div className="mt-12" id="products-section">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <h2 className="text-3xl font-bold text-center text-gray-800" role="heading" aria-level={2}>
                {searchQuery ? `Search Results for "${searchQuery}"` : 
                 selectedCategory ? `${categories.find(c => c.value === selectedCategory)?.label} Products` :
                 'Authentic Indian Eco-Friendly Products'}
              </h2>
              <VoiceSpeaker 
                text={`${uniqueProducts.length} products available`}
                size="sm"
              />
            </div>
            <p className="text-center text-gray-600 mb-8">
              {searchQuery ? `Found ${uniqueProducts.length} products` : 
               selectedCategory ? `Showing ${uniqueProducts.length} products in this category` :
               'Discover traditional and sustainable products from across India'}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="grid">
              {uniqueProducts.map((product) => (
                <Card 
                  key={`${product.id}-${product.name}-${product.brand}`}
                  className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  role="gridcell"
                >
                  <CardContent className="p-4 space-y-3">
                    {/* Product Image */}
                    <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src={product.image} 
                        alt={`${product.name} by ${product.brand}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                          <VoiceSpeaker 
                            text={`${product.name} by ${product.brand}. Price: ₹${product.price}. Eco Score: ${product.ecoScore}.`}
                            size="sm"
                          />
                        </div>
                        <p className="text-sm text-gray-600">{product.brand}</p>
                        <p className="text-green-600 font-bold text-xl" aria-label={`Price: ₹${product.price}`}>₹{product.price}</p>
                      </div>
                      <Badge className={`${
                        product.ecoScore === 'A' ? 'bg-green-500' :
                        product.ecoScore === 'B' ? 'bg-yellow-500' :
                        product.ecoScore === 'C' ? 'bg-orange-500' :
                        product.ecoScore === 'D' ? 'bg-red-400' :
                        'bg-red-600'
                      } text-white font-bold`} aria-label={`Eco Score: ${product.ecoScore}`}>
                        {product.ecoScore}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1" role="img" aria-label={`${product.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="text-xs text-gray-600">({product.reviewCount})</span>
                    </div>

                    {/* Screen reader content for product details */}
                    <div className="sr-only">
                      Product: {product.name} by {product.brand}. 
                      Price: ₹{product.price}. 
                      Eco Score: {product.ecoScore}. 
                      CO2 Impact: {product.co2Impact}. 
                      Packaging: {product.packaging}. 
                      {product.recyclable ? 'Recyclable' : 'Not recyclable'}.
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
                        aria-label={`View details for ${product.name}`}
                      >
                        {t.viewDetails}
                      </Button>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        aria-label={`Add ${product.name} to cart for ₹${product.price}`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" aria-hidden="true" />
                        {t.addToCart}
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
        {!selectedProductId && !searchQuery && !selectedCategory && (
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" role="heading" aria-level={2}>
              How EcoCart India Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Discover Products</h3>
                <p className="text-gray-600">Search for authentic Indian eco-friendly products</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Check EcoScore</h3>
                <p className="text-gray-600">View sustainability ratings and environmental impact</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Read Reviews</h3>
                <p className="text-gray-600">Check authentic customer reviews and ratings</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
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
