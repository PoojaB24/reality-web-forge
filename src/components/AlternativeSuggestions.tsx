
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TreePine } from 'lucide-react';

interface Alternative {
  id: string;
  name: string;
  brand: string;
  price: number;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  reason: string;
  image: string;
}

interface AlternativeSuggestionsProps {
  alternatives: Alternative[];
  onSelectAlternative: (id: string) => void;
}

const AlternativeSuggestions = ({ alternatives, onSelectAlternative }: AlternativeSuggestionsProps) => {
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

  if (alternatives.length === 0) return null;

  return (
    <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-green-800">
          <TreePine className="h-5 w-5" />
          <span>Greener Alternatives</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alternatives.map((alt) => (
          <div key={alt.id} className="bg-white/80 rounded-lg p-4 border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-800">{alt.name}</h4>
                <p className="text-sm text-gray-600">{alt.brand}</p>
              </div>
              <Badge className={`${getScoreColor(alt.ecoScore)} text-white font-bold`}>
                {alt.ecoScore}
              </Badge>
            </div>
            
            <p className="text-sm text-green-700 mb-2">{alt.reason}</p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="font-semibold">₹{alt.price.toFixed(2)}</span>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onSelectAlternative(alt.id)}
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                View Details <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AlternativeSuggestions;
