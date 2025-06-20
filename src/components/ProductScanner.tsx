
import { useState } from 'react';
import { Camera, Search, Scan } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ProductScannerProps {
  onProductScanned: (productId: string) => void;
}

const ProductScanner = ({ onProductScanned }: ProductScannerProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Mock search - in real app would search product database
      const mockResults = ['1', '2', '3', '4', '5'];
      const randomProduct = mockResults[Math.floor(Math.random() * mockResults.length)];
      onProductScanned(randomProduct);
      setSearchQuery('');
    }
  };

  const handleBarcodeScan = () => {
    setIsScanning(true);
    // Mock barcode scan - in real app would use camera API
    setTimeout(() => {
      const mockBarcodes = ['1', '2', '3', '4', '5', '6', '7'];
      const scannedProduct = mockBarcodes[Math.floor(Math.random() * mockBarcodes.length)];
      onProductScanned(scannedProduct);
      setIsScanning(false);
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
            placeholder="Search product name or enter barcode..."
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
