
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Camera, 
  Search, 
  Scan, 
  Leaf, 
  TreePine, 
  Recycle, 
  ArrowRight,
  Play,
  BookOpen,
  HelpCircle,
  Smartphone,
  Monitor,
  ShoppingBag
} from 'lucide-react';

interface HelpPageProps {
  onBackToHome: () => void;
}

const HelpPage = ({ onBackToHome }: HelpPageProps) => {
  const demoSteps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Search for Products",
      description: "Type product names like 'water bottle', 'coffee cup', or 'banana' in the search box.",
      demo: "Try searching: 'coca cola', 'bamboo toothbrush', 'organic pasta'"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Scan Barcodes",
      description: "Click the 'Scan Barcode' button to simulate scanning any product's barcode.",
      demo: "Demo: Click scan button and wait 2 seconds for a random product result"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "View EcoScore",
      description: "See the environmental rating (A-E) based on packaging, carbon footprint, and sustainability.",
      demo: "Scores: A = Excellent, B = Good, C = Fair, D = Poor, E = Very Poor"
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Find Alternatives",
      description: "Discover greener product alternatives with better environmental scores.",
      demo: "Example: Plastic water bottle → Glass or stainless steel alternatives"
    }
  ];

  const categories = [
    { name: "Beverages", count: "7 products", examples: "Water bottles, coffee cups, sodas" },
    { name: "Food Items", count: "5 products", examples: "Organic produce, pasta, snacks" },
    { name: "Personal Care", count: "4 products", examples: "Toothbrushes, shampoo, soap" },
    { name: "Household", count: "4 products", examples: "Cleaning products, bags" },
    { name: "Electronics", count: "2 products", examples: "Chargers, power banks" },
    { name: "Other", count: "3 products", examples: "Various sustainable items" }
  ];

  const ecoScoreGuide = [
    { score: 'A', color: 'bg-green-500', description: 'Excellent - Minimal environmental impact', examples: 'Bamboo products, glass bottles, organic items' },
    { score: 'B', color: 'bg-yellow-500', description: 'Good - Low environmental impact', examples: 'Recyclable packaging, energy-efficient products' },
    { score: 'C', color: 'bg-orange-500', description: 'Fair - Moderate environmental impact', examples: 'Some recyclable elements, mixed materials' },
    { score: 'D', color: 'bg-red-400', description: 'Poor - High environmental impact', examples: 'Single-use plastics, non-recyclable packaging' },
    { score: 'E', color: 'bg-red-600', description: 'Very Poor - Severe environmental impact', examples: 'Styrofoam, mixed non-recyclable materials' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-xl">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">
            Help & Tutorial
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how to use EcoCart to make sustainable shopping choices and discover eco-friendly alternatives
        </p>
        <Button 
          onClick={onBackToHome}
          variant="outline"
          className="mt-4 hover:bg-green-50"
        >
          ← Back to Home
        </Button>
      </div>

      {/* Quick Start Guide */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800">
            <Play className="h-6 w-6" />
            <span>Quick Start Guide</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          {demoSteps.map((step, index) => (
            <div key={index} className="bg-white/80 rounded-lg p-4 border border-green-100">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{index + 1}. {step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="bg-blue-50 p-2 rounded text-xs text-blue-700">
                    <strong>Demo:</strong> {step.demo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Demo Video Section */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-800">
            <Play className="h-6 w-6" />
            <span>Demo Walkthrough</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-lg p-6 border border-purple-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Search className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold">Search Demo</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Watch how to search for products by name and see instant EcoScores
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Play className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Demo Video: Product Search</p>
                <p className="text-xs text-gray-400 mt-1">
                  Search "water bottle" → View results → Check EcoScore
                </p>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-6 border border-purple-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Camera className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold">Barcode Scanning Demo</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                See how barcode scanning works and discover product alternatives
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Scan className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Demo Video: Barcode Scan</p>
                <p className="text-xs text-gray-400 mt-1">
                  Click scan → Processing → Results → View alternatives
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* EcoScore Guide */}
      <Card className="bg-white/90 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>Understanding EcoScores</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {ecoScoreGuide.map((score) => (
            <div key={score.score} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <Badge className={`${score.color} text-white font-bold text-lg w-12 h-12 flex items-center justify-center`}>
                {score.score}
              </Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{score.description}</h3>
                <p className="text-sm text-gray-600">{score.examples}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Product Categories */}
      <Card className="bg-white/90 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-blue-600" />
            <span>Available Product Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-1">{category.name}</h3>
                <p className="text-sm text-blue-600 mb-2">{category.count}</p>
                <p className="text-xs text-gray-600">{category.examples}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Compatibility */}
      <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="h-6 w-6 text-gray-600" />
            <span>Platform Compatibility</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Browser Extension</h3>
              <p className="text-sm text-gray-600">Works seamlessly while shopping online on any e-commerce site</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Mobile App</h3>
              <p className="text-sm text-gray-600">Scan products in-store using your smartphone camera</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Web App</h3>
              <p className="text-sm text-gray-600">Access EcoCart from any web browser on desktop or mobile</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-white/90 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HelpCircle className="h-6 w-6 text-orange-600" />
            <span>Frequently Asked Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">How accurate are the EcoScores?</h3>
              <p className="text-sm text-gray-600">Our scores are based on multiple factors including packaging materials, carbon footprint, water usage, and recyclability data from manufacturers and environmental databases.</p>
            </div>
            <Separator />
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Can I suggest new products to be added?</h3>
              <p className="text-sm text-gray-600">Yes! We continuously expand our database. Contact our support team to suggest products you'd like to see included.</p>
            </div>
            <Separator />
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800">Do you track my shopping data?</h3>
              <p className="text-sm text-gray-600">No, EcoCart respects your privacy. We only provide environmental information and don't track or store your personal shopping habits.</p>
            </div>
            <Separator />
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-800">Are the price comparisons updated?</h3>
              <p className="text-sm text-gray-600">Prices shown are examples for demonstration. In the full version, prices would be updated in real-time from retailer APIs.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
        <CardHeader>
          <CardTitle className="text-cyan-800">Need More Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-cyan-700 mb-4">
            Still have questions? Our support team is here to help you make the most sustainable choices!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
              📧 Contact Support
            </Button>
            <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
              💬 Live Chat
            </Button>
            <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50">
              📚 Documentation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpPage;
