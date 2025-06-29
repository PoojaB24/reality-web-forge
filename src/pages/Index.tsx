import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Bell, Globe, Mic, MicOff, Volume2, Star, Heart, Filter, Zap, Leaf, Recycle, Droplets, Sun, Wind, TreePine, Package, Truck, CreditCard, MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronDown, ChevronUp, Camera, BarChart3, Award, Users, Target, Lightbulb, Smartphone, Headphones, Laptop, Gamepad2, Watch, Tv, Car, Home, Coffee, Book, Shirt, ShoppingBag, Gift, Music, Video, Image, FileText, Download, Upload, Share, Settings, Help, Info, Menu, X, Plus, Minus, Check, AlertCircle, CheckCircle, XCircle, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RefreshCw, Eye, EyeOff, Lock, Unlock, Edit, Delete, Save, Copy, Paste, Cut, Undo, Redo, Search as SearchIcon, Filter as FilterIcon, SortAsc, SortDesc, Calendar, Clock as ClockIcon, User as UserIcon, Users as UsersIcon, Star as StarIcon, Heart as HeartIcon, ShoppingCart as CartIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import ProductScanner from '@/components/ProductScanner';
import EcoScoreCard from '@/components/EcoScoreCard';
import AlternativeSuggestions from '@/components/AlternativeSuggestions';
import ProductReviews from '@/components/ProductReviews';
import SalesOffers from '@/components/SalesOffers';
import Cart from '@/components/Cart';
import Auth from '@/components/Auth';
import Checkout from '@/components/Checkout';
import DeliveryTracking from '@/components/DeliveryTracking';
import MoreLikeThis from '@/components/MoreLikeThis';
import SearchSuggestions from '@/components/SearchSuggestions';
import VoiceSpeaker from '@/components/VoiceSpeaker';
import HelpPage from '@/components/HelpPage';
import LanguageSelector from '@/components/LanguageSelector';

const languageTranslations = {
  en: {
    searchPlaceholder: 'Search for products...',
    scanProduct: 'Scan Product',
    addToCart: 'Add to Cart',
    ecoScore: 'Eco-Score',
    alternativeSuggestions: 'Alternative Suggestions',
    productReviews: 'Product Reviews',
    salesOffers: 'Sales Offers',
    cart: 'Cart',
    auth: 'Auth',
    checkout: 'Checkout',
    deliveryTracking: 'Delivery Tracking',
    moreLikeThis: 'More Like This',
    help: 'Help',
    voiceSearch: 'Voice Search',
    sustainabilityInfo: 'Sustainability Info',
    productDetails: 'Product Details',
    relatedProducts: 'Related Products',
  },
  es: {
    searchPlaceholder: 'Buscar productos...',
    scanProduct: 'Escanear Producto',
    addToCart: 'Añadir al Carrito',
    ecoScore: 'Eco-Puntuación',
    alternativeSuggestions: 'Sugerencias Alternativas',
    productReviews: 'Reseñas de Productos',
    salesOffers: 'Ofertas de Ventas',
    cart: 'Carrito',
    auth: 'Autenticación',
    checkout: 'Finalizar Compra',
    deliveryTracking: 'Seguimiento de Entrega',
    moreLikeThis: 'Más Como Esto',
    help: 'Ayuda',
    voiceSearch: 'Búsqueda por Voz',
    sustainabilityInfo: 'Información de Sostenibilidad',
    productDetails: 'Detalles del Producto',
    relatedProducts: 'Productos Relacionados',
  },
  fr: {
    searchPlaceholder: 'Rechercher des produits...',
    scanProduct: 'Scanner le Produit',
    addToCart: 'Ajouter au Panier',
    ecoScore: 'Eco-Score',
    alternativeSuggestions: 'Suggestions Alternatives',
    productReviews: 'Avis sur le Produit',
    salesOffers: 'Offres de Ventes',
    cart: 'Panier',
    auth: 'Authentification',
    checkout: 'Paiement',
    deliveryTracking: 'Suivi de Livraison',
    moreLikeThis: 'Plus de Produits Similaires',
    help: 'Aide',
    voiceSearch: 'Recherche Vocale',
    sustainabilityInfo: 'Informations sur la Durabilité',
    productDetails: 'Détails du Produit',
    relatedProducts: 'Produits Associés',
  },
  de: {
    searchPlaceholder: 'Produkte suchen...',
    scanProduct: 'Produkt scannen',
    addToCart: 'Zum Warenkorb hinzufügen',
    ecoScore: 'Öko-Score',
    alternativeSuggestions: 'Alternative Vorschläge',
    productReviews: 'Produktbewertungen',
    salesOffers: 'Verkaufsangebote',
    cart: 'Warenkorb',
    auth: 'Authentifizierung',
    checkout: 'Kasse',
    deliveryTracking: 'Lieferverfolgung',
    moreLikeThis: 'Mehr davon',
    help: 'Hilfe',
    voiceSearch: 'Sprachsuche',
    sustainabilityInfo: 'Nachhaltigkeitsinformationen',
    productDetails: 'Produktdetails',
    relatedProducts: 'Verwandte Produkte',
  },
  zh: {
    searchPlaceholder: '搜索产品...',
    scanProduct: '扫描产品',
    addToCart: '添加到购物车',
    ecoScore: '生态评分',
    alternativeSuggestions: '替代建议',
    productReviews: '产品评论',
    salesOffers: '促销优惠',
    cart: '购物车',
    auth: '验证',
    checkout: '结账',
    deliveryTracking: '配送跟踪',
    moreLikeThis: '更多类似产品',
    help: '帮助',
    voiceSearch: '语音搜索',
    sustainabilityInfo: '可持续性信息',
    productDetails: '产品详情',
    relatedProducts: '相关产品',
  },
};

const Index = () => {
  const [language, setLanguage] = useState('en');
  const translations = languageTranslations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDeliveryTrackingOpen, setIsDeliveryTrackingOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isVoiceSearchActive, setIsVoiceSearchActive] = useState(false);
  const [isProductScannerOpen, setIsProductScannerOpen] = useState(false);
  const [scannedProductId, setScannedProductId] = useState(null);
  const [ecoScore, setEcoScore] = useState(75);
  const [productReviews, setProductReviews] = useState([
    { id: 1, author: 'John Doe', rating: 4, comment: 'Great product!' },
    { id: 2, author: 'Jane Smith', rating: 5, comment: 'Highly recommended.' },
  ]);
  const [salesOffers, setSalesOffers] = useState([
    { id: 1, product: 'Eco-Friendly Bottle', discount: '20%' },
    { id: 2, product: 'Organic Cotton T-Shirt', discount: '15%' },
  ]);
  const [alternativeSuggestions, setAlternativeSuggestions] = useState([
    { id: 1, name: 'Reusable Coffee Cup', ecoScore: 85 },
    { id: 2, name: 'Bamboo Toothbrush', ecoScore: 90 },
  ]);
  const [moreLikeThis, setMoreLikeThis] = useState([
    { id: 1, name: 'Sustainable Yoga Mat', ecoScore: 80 },
    { id: 2, name: 'Organic Cotton Tote Bag', ecoScore: 88 },
  ]);
  const [searchSuggestions, setSearchSuggestions] = useState([
    'Organic Food',
    'Recycled Paper',
    'Solar Panels',
  ]);
  const { cart, addToCart } = useCart();
  const { isLoggedIn, user, login, logout } = useAuth();
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isVoiceSearchActive) {
      toast.info('Voice search is active. Speak now!', { duration: 5000 });
    }
  }, [isVoiceSearchActive]);

  const handleAddToCart = (productId) => {
    addToCart(productId, 1);
    toast.success('Product added to cart!');
  };

  const handleSearch = () => {
    if (searchQuery) {
      toast.info(`Searching for: ${searchQuery}`);
    } else {
      toast.warning('Please enter a search query.');
    }
  };

  const toggleVoiceSearch = () => {
    setIsVoiceSearchActive(!isVoiceSearchActive);
  };

  const handleScanProduct = () => {
    setIsProductScannerOpen(true);
  };

  const handleProductScanned = (productId) => {
    setScannedProductId(productId);
    setIsProductScannerOpen(false);
    toast.success(`Product ID scanned: ${productId}`);
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleOpenAuth = () => setIsAuthOpen(true);
  const handleCloseAuth = () => setIsAuthOpen(false);
  const handleOpenCheckout = () => setIsCheckoutOpen(true);
  const handleCloseCheckout = () => setIsCheckoutOpen(false);
  const handleOpenDeliveryTracking = () => setIsDeliveryTrackingOpen(true);
  const handleCloseDeliveryTracking = () => setIsDeliveryTrackingOpen(false);
  const handleOpenHelp = () => setIsHelpOpen(true);
  const handleCloseHelp = () => setIsHelpOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-5 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-green-600">EcoCart</a>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <Input
                type="text"
                placeholder={translations.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={searchInputRef}
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" onClick={handleScanProduct} className="mr-2">
              {translations.scanProduct}
            </Button>
            <IconButton onClick={toggleVoiceSearch} className="mr-2">
              {isVoiceSearchActive ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </IconButton>
            <IconButton onClick={handleOpenCart}>
              <CartIcon className="h-5 w-5" />
              {cart.length > 0 && (
                <Badge className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs p-1">
                  {cart.length}
                </Badge>
              )}
            </IconButton>
            <LanguageSelector setLanguage={setLanguage} />
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="ml-2">
                    <UserIcon className="mr-2 h-4 w-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleOpenCheckout}>Checkout</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleOpenDeliveryTracking}>Delivery Tracking</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleOpenHelp}>Help</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" className="ml-2" onClick={handleOpenAuth}>
                {translations.auth}
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-5">
        {scannedProductId && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{translations.productDetails}</h2>
            <p>Product ID: {scannedProductId}</p>
            <EcoScoreCard ecoScore={ecoScore} />
          </div>
        )}

        <SearchSuggestions suggestions={searchSuggestions} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AlternativeSuggestions suggestions={alternativeSuggestions} />
          <ProductReviews reviews={productReviews} />
          <SalesOffers offers={salesOffers} />
        </div>

        <MoreLikeThis products={moreLikeThis} />
      </main>

      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} EcoCart. All rights reserved.
        </p>
      </footer>

      <ProductScanner isOpen={isProductScannerOpen} onClose={() => setIsProductScannerOpen(false)} onProductScanned={handleProductScanned} />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
      <Auth isOpen={isAuthOpen} onClose={handleCloseAuth} />
      <Checkout isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
      <DeliveryTracking isOpen={isDeliveryTrackingOpen} onClose={handleCloseDeliveryTracking} />
      <HelpPage isOpen={isHelpOpen} onClose={handleCloseHelp} />
    </div>
  );
};

export default Index;

const IconButton = ({ children, ...props }) => {
  return (
    <Button variant="ghost" size="icon" {...props}>
      {children}
    </Button>
  );
};
