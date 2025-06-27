
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, TrendingUp } from 'lucide-react';
import { products } from '@/data/productData';

interface SearchSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  currentSearch?: string;
}

const SearchSuggestions = ({ onSuggestionClick, currentSearch }: SearchSuggestionsProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showTrending, setShowTrending] = useState(true);

  // Generate search suggestions from actual product data
  const searchSuggestions = [
    ...products.slice(0, 20).map(p => p.name),
    ...products.slice(0, 10).map(p => p.brand),
    ...Array.from(new Set(products.map(p => p.category))),
  ];

  useEffect(() => {
    if (currentSearch && currentSearch.length > 0) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(currentSearch.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8));
      setShowTrending(false);
    } else {
      setFilteredSuggestions([]);
      setShowTrending(true);
    }
  }, [currentSearch]);

  // Get trending suggestions from actual product names
  const trendingSuggestions = [
    'Organic Basmati Rice', 'Ayurvedic Products', 'Natural Face Care',
    'Traditional Spices', 'Eco-friendly Home', 'Herbal Remedies',
    'Masala Chai', 'Neem Products', 'Handloom Textiles', 'Coconut Oil'
  ];

  if (!showTrending && filteredSuggestions.length === 0) {
    return null;
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm border-green-200 shadow-lg mt-2">
      <CardContent className="p-4">
        {showTrending ? (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Trending Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSuggestions.map((suggestion, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-green-50 hover:border-green-300"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Search className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Suggestions</span>
            </div>
            <div className="space-y-1">
              {filteredSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left h-auto p-2 hover:bg-green-50"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  <Search className="h-3 w-3 mr-2 text-gray-400" />
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchSuggestions;
