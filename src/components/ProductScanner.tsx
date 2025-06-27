
import { useState } from 'react';
import { Camera, Search, Scan } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products } from '@/data/productData';

interface ProductScannerProps {
  onProductScanned: (productId: string) => void;
}

const ProductScanner = ({ onProductScanned }: ProductScannerProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleSearch = () => {
    console.log('Search triggered with query:', searchQuery);
    
    if (searchQuery.trim()) {
      // Search through actual products by name, brand, or category
      const foundProduct = products.find(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      console.log('Found product:', foundProduct);
      
      if (foundProduct) {
        onProductScanned(foundProduct.id);
        setSearchQuery('');
        console.log('Product scanned with ID:', foundProduct.id);
      } else {
        // If no exact match, find partial matches
        const partialMatches = products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (partialMatches.length > 0) {
          onProductScanned(partialMatches[0].id);
          setSearchQuery('');
          console.log('Partial match found, using product ID:', partialMatches[0].id);
        } else {
          // Return a random product for demo purposes
          const randomProduct = products[Math.floor(Math.random() * products.length)];
          onProductScanned(randomProduct.id);
          setSearchQuery('');
          console.log('No match found, using random product ID:', randomProduct.id);
        }
      }
    }
  };

  const handleBarcodeScan = () => {
    setIsScanning(true);
    console.log('Barcode scan started');
    
    // Mock barcode scan - in real app would use camera API
    setTimeout(() => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      onProductScanned(randomProduct.id);
      setIsScanning(false);
      console.log('Barcode scan completed with product ID:', randomProduct.id);
    }, 2000);
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Scan className="h-5 w-5 text-green-600" />
          <span>Product Scanner</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Try: 'basmati rice', 'neem face wash', 'masala chai'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1"
          />
          <Button onClick={handleSearch} variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <Button 
          onClick={handleBarcodeScan} 
          disabled={isScanning}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          <Camera className="h-4 w-4 mr-2" />
          {isScanning ? 'Scanning...' : 'Scan Barcode'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductScanner;
