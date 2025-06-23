
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  co2Impact: string;
  packaging: string;
  recyclable: boolean;
  category: string;
  image: string;
  reviews: Review[];
  rating: number;
  reviewCount: number;
  description: string;
  waterUsage: string;
  sustainabilityFeatures: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Alternative {
  id: string;
  name: string;
  brand: string;
  price: number;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  reason: string;
  image: string;
}

// Sample reviews for products
const sampleReviews: Review[] = [
  {
    id: '1',
    userName: 'Priya S.',
    rating: 5,
    comment: 'Excellent quality! Very eco-friendly packaging.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    userName: 'Rajesh K.',
    rating: 4,
    comment: 'Good product, delivered on time. Recommended!',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    userName: 'Anita M.',
    rating: 5,
    comment: 'Love this! Will definitely buy again.',
    date: '2024-01-08',
    verified: false
  }
];

export const products: Product[] = [
  // Indian Beverages (55 products)
  ...Array.from({ length: 55 }, (_, i) => {
    const beverages = [
      { name: 'Organic Masala Chai', brand: 'Tata Tea Premium', image: 'https://images.unsplash.com/photo-1571934811752-ee5a8b1b8bfb?w=300' },
      { name: 'Darjeeling Black Tea', brand: 'Goodricke', image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=300' },
      { name: 'Green Tea with Tulsi', brand: 'Organic India', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300' },
      { name: 'Coconut Water', brand: 'Real', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300' },
      { name: 'Mango Lassi', brand: 'Amul', image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300' },
      { name: 'Buttermilk Chaas', brand: 'Britannia', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300' },
      { name: 'Fresh Lime Water', brand: 'Patanjali', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300' },
      { name: 'Rose Milk', brand: 'Arun Ice Cream', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300' },
      { name: 'Badam Milk', brand: 'Nandini', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300' },
      { name: 'Sugarcane Juice', brand: 'Natural', image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300' }
    ];
    const item = beverages[i % beverages.length];
    return {
      id: `bev-${i + 1}`,
      name: `${item.name} ${i > 9 ? 'Premium' : 'Classic'}`,
      brand: item.brand,
      price: Math.floor(Math.random() * 200) + 50,
      ecoScore: ['A', 'B', 'C'][Math.floor(Math.random() * 3)] as 'A' | 'B' | 'C',
      co2Impact: `${(Math.random() * 2 + 0.5).toFixed(1)}kg`,
      packaging: ['Recyclable Glass', 'Biodegradable Carton', 'Recyclable Plastic'][Math.floor(Math.random() * 3)],
      recyclable: Math.random() > 0.3,
      category: 'beverages',
      image: item.image,
      reviews: sampleReviews.slice(0, Math.floor(Math.random() * 3) + 1),
      rating: Math.floor(Math.random() * 2) + 4,
      reviewCount: Math.floor(Math.random() * 500) + 50,
      description: `Authentic Indian ${item.name.toLowerCase()} made with traditional methods and premium ingredients.`,
      waterUsage: `${(Math.random() * 50 + 10).toFixed(0)}L`,
      sustainabilityFeatures: ['Organic Certified', 'Fair Trade', 'Locally Sourced'].slice(0, Math.floor(Math.random() * 3) + 1)
    };
  }),

  // Indian Food Products (55 products)
  ...Array.from({ length: 55 }, (_, i) => {
    const foods = [
      { name: 'Organic Basmati Rice', brand: 'India Gate', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300' },
      { name: 'Whole Wheat Atta', brand: 'Aashirvaad', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300' },
      { name: 'Toor Dal', brand: 'Everest', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300' },
      { name: 'Turmeric Powder', brand: 'MDH', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300' },
      { name: 'Garam Masala', brand: 'Badshah', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300' },
      { name: 'Ghee Pure', brand: 'Nandini', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300' },
      { name: 'Pickle Mixed', brand: 'Priya', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300' },
      { name: 'Papad Urad', brand: 'Lijjat', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300' },
      { name: 'Coconut Oil', brand: 'Parachute', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300' },
      { name: 'Jaggery Gud', brand: 'Patanjali', image: 'https://images.unsplash.com/photo-1609501676725-7186f0a97a64?w=300' }
    ];
    const item = foods[i % foods.length];
    return {
      id: `food-${i + 1}`,
      name: `${item.name} ${i > 9 ? 'Premium' : 'Regular'}`,
      brand: item.brand,
      price: Math.floor(Math.random() * 300) + 80,
      ecoScore: ['A', 'B', 'C'][Math.floor(Math.random() * 3)] as 'A' | 'B' | 'C',
      co2Impact: `${(Math.random() * 3 + 1).toFixed(1)}kg`,
      packaging: ['Jute Bag', 'Paper Packaging', 'Recyclable Container'][Math.floor(Math.random() * 3)],
      recyclable: Math.random() > 0.2,
      category: 'food',
      image: item.image,
      reviews: sampleReviews.slice(0, Math.floor(Math.random() * 3) + 1),
      rating: Math.floor(Math.random() * 2) + 4,
      reviewCount: Math.floor(Math.random() * 800) + 100,
      description: `Premium quality ${item.name.toLowerCase()} sourced directly from Indian farmers using traditional methods.`,
      waterUsage: `${(Math.random() * 100 + 20).toFixed(0)}L`,
      sustainabilityFeatures: ['Non-GMO', 'Pesticide Free', 'Traditional Farming'].slice(0, Math.floor(Math.random() * 3) + 1)
    };
  }),

  // Personal Care (55 products)
  ...Array.from({ length: 55 }, (_, i) => {
    const personalCare = [
      { name: 'Neem Face Wash', brand: 'Himalaya', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300' },
      { name: 'Ayurvedic Shampoo', brand: 'Patanjali', image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300' },
      { name: 'Turmeric Soap', brand: 'Medimix', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300' },
      { name: 'Coconut Hair Oil', brand: 'Parachute', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300' },
      { name: 'Aloe Vera Gel', brand: 'Patanjali', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300' },
      { name: 'Sandalwood Cream', brand: 'Mysore Sandal', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300' },
      { name: 'Herbal Toothpaste', brand: 'Dabur', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300' },
      { name: 'Rose Water Toner', brand: 'Kama Ayurveda', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300' },
      { name: 'Ayurvedic Scrub', brand: 'Forest Essentials', image: 'https://images.unsplash.com/photo-1571019613454-1cbd2df1213e?w=300' },
      { name: 'Herbal Deodorant', brand: 'Biotique', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300' }
    ];
    const item = personalCare[i % personalCare.length];
    return {
      id: `care-${i + 1}`,
      name: `${item.name} ${i > 9 ? 'Premium' : 'Natural'}`,
      brand: item.brand,
      price: Math.floor(Math.random() * 400) + 100,
      ecoScore: ['A', 'B'][Math.floor(Math.random() * 2)] as 'A' | 'B',
      co2Impact: `${(Math.random() * 1.5 + 0.5).toFixed(1)}kg`,
      packaging: ['Biodegradable Tube', 'Recyclable Bottle', 'Eco-friendly Container'][Math.floor(Math.random() * 3)],
      recyclable: Math.random() > 0.1,
      category: 'personal-care',
      image: item.image,
      reviews: sampleReviews.slice(0, Math.floor(Math.random() * 3) + 1),
      rating: Math.floor(Math.random() * 2) + 4,
      reviewCount: Math.floor(Math.random() * 600) + 75,
      description: `Natural and ayurvedic ${item.name.toLowerCase()} made with traditional Indian herbs and ingredients.`,
      waterUsage: `${(Math.random() * 30 + 5).toFixed(0)}L`,
      sustainabilityFeatures: ['Natural Ingredients', 'Cruelty Free', 'Ayurvedic Formula'].slice(0, Math.floor(Math.random() * 3) + 1)
    };
  }),

  // Household Items (52 products)
  ...Array.from({ length: 52 }, (_, i) => {
    const household = [
      { name: 'Bamboo Toothbrush', brand: 'EcoDent', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300' },
      { name: 'Jute Shopping Bag', brand: 'Eco Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' },
      { name: 'Steel Water Bottle', brand: 'Milton', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300' },
      { name: 'Copper Water Pot', brand: 'Traditional', image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300' },
      { name: 'Clay Dinner Set', brand: 'Khurja Pottery', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300' },
      { name: 'Bamboo Kitchen Set', brand: 'Green Home', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300' },
      { name: 'Natural Loofah', brand: 'Organic Bath', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300' },
      { name: 'Cotton Towel Set', brand: 'Bombay Dyeing', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' },
      { name: 'Brass Lamp', brand: 'Traditional Arts', image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300' },
      { name: 'Jute Floor Mat', brand: 'Handicraft', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300' }
    ];
    const item = household[i % household.length];
    return {
      id: `house-${i + 1}`,
      name: `${item.name} ${i > 9 ? 'Premium' : 'Traditional'}`,
      brand: item.brand,
      price: Math.floor(Math.random() * 500) + 150,
      ecoScore: ['A', 'B'][Math.floor(Math.random() * 2)] as 'A' | 'B',
      co2Impact: `${(Math.random() * 2 + 0.8).toFixed(1)}kg`,
      packaging: ['Minimal Packaging', 'Recyclable Box', 'Paper Wrap'][Math.floor(Math.random() * 3)],
      recyclable: true,
      category: 'household',
      image: item.image,
      reviews: sampleReviews.slice(0, Math.floor(Math.random() * 3) + 1),
      rating: Math.floor(Math.random() * 2) + 4,
      reviewCount: Math.floor(Math.random() * 400) + 30,
      description: `Eco-friendly ${item.name.toLowerCase()} crafted by Indian artisans using sustainable materials.`,
      waterUsage: `${(Math.random() * 40 + 10).toFixed(0)}L`,
      sustainabilityFeatures: ['Handcrafted', 'Sustainable Materials', 'Zero Waste'].slice(0, Math.floor(Math.random() * 3) + 1)
    };
  })
];

export const alternativesMap: Record<string, Alternative[]> = {
  'bev-1': [
    {
      id: 'bev-2',
      name: 'Organic Green Tea',
      brand: 'Organic India',
      price: 120,
      ecoScore: 'A',
      reason: 'Lower carbon footprint',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300'
    }
  ]
};

export const ecoTips: Record<string, string> = {
  'bev-1': 'Choose organic teas to support sustainable farming practices and reduce pesticide use.',
  'food-1': 'Organic rice uses 30% less water and produces 40% fewer greenhouse gases than conventional rice.',
  'care-1': 'Natural face washes with neem are biodegradable and don\'t harm aquatic ecosystems.',
  'house-1': 'Bamboo toothbrushes are 100% biodegradable and help reduce plastic waste in oceans.'
};

export const searchSuggestions = [
  'Masala Chai', 'Basmati Rice', 'Turmeric Powder', 'Coconut Oil', 'Neem Face Wash',
  'Ghee', 'Ayurvedic Shampoo', 'Jaggery', 'Bamboo Products', 'Herbal Toothpaste',
  'Organic Spices', 'Traditional Soap', 'Clay Pottery', 'Copper Utensils', 'Cotton Towels'
];
