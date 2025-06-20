
export interface Product {
  id: string;
  name: string;
  brand: string;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  category: string;
  co2Impact: string;
  waterUsage: string;
  packaging: string;
  recyclable: boolean;
  sustainabilityFeatures: string[];
  price?: string;
  barcode?: string;
}

export interface Alternative {
  id: string;
  name: string;
  brand: string;
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  reason: string;
  price?: string;
  savings?: string;
}

export const products: Product[] = [
  // Beverages
  {
    id: '1',
    name: 'Plastic Water Bottle',
    brand: 'AquaGeneric',
    ecoScore: 'D',
    category: 'beverages',
    co2Impact: '0.5kg CO2',
    waterUsage: '3L',
    packaging: 'Single-use plastic',
    recyclable: true,
    sustainabilityFeatures: ['Recyclable', 'BPA-free'],
    price: '$1.29',
    barcode: '1234567890123'
  },
  {
    id: '2',
    name: 'Glass Water Bottle',
    brand: 'EcoFriendly Co.',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.2kg CO2',
    waterUsage: '1L',
    packaging: 'Reusable glass',
    recyclable: true,
    sustainabilityFeatures: ['100% Recyclable', 'Reusable', 'Zero Plastic'],
    price: '$8.99',
    barcode: '2345678901234'
  },
  {
    id: '3',
    name: 'Stainless Steel Bottle',
    brand: 'EcoSteel',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.1kg CO2',
    waterUsage: '0.5L',
    packaging: 'Durable metal',
    recyclable: true,
    sustainabilityFeatures: ['Lifetime Durability', '100% Recyclable', 'Insulated'],
    price: '$24.99',
    barcode: '3456789012345'
  },
  {
    id: '4',
    name: 'Disposable Coffee Cup',
    brand: 'CafeGeneric',
    ecoScore: 'E',
    category: 'beverages',
    co2Impact: '0.8kg CO2',
    waterUsage: '5L',
    packaging: 'Paper/plastic composite',
    recyclable: false,
    sustainabilityFeatures: ['Biodegradable (partially)'],
    price: '$0.99',
    barcode: '4567890123456'
  },
  {
    id: '5',
    name: 'Bamboo Coffee Cup',
    brand: 'GreenCup',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.1kg CO2',
    waterUsage: '0.3L',
    packaging: 'Renewable bamboo',
    recyclable: true,
    sustainabilityFeatures: ['Biodegradable', 'Renewable Material', 'Reusable'],
    price: '$15.99',
    barcode: '5678901234567'
  },
  {
    id: '6',
    name: 'Coca-Cola Plastic Bottle',
    brand: 'Coca-Cola',
    ecoScore: 'D',
    category: 'beverages',
    co2Impact: '0.7kg CO2',
    waterUsage: '4L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['100% Recyclable Bottle'],
    price: '$1.89',
    barcode: '0049000042566'
  },
  {
    id: '7',
    name: 'Evian Natural Spring Water',
    brand: 'Evian',
    ecoScore: 'C',
    category: 'beverages',
    co2Impact: '0.4kg CO2',
    waterUsage: '2.5L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['Carbon Neutral', 'Recyclable'],
    price: '$2.49',
    barcode: '3068320055008'
  },
  
  // Food Items
  {
    id: '8',
    name: 'Organic Banana',
    brand: 'Fresh & Green',
    ecoScore: 'A',
    category: 'food',
    co2Impact: '0.1kg CO2',
    waterUsage: '0.2L',
    packaging: 'No packaging',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Compostable', 'Zero Packaging'],
    price: '$0.79',
    barcode: '4011'
  },
  {
    id: '9',
    name: 'Instant Noodles Cup',
    brand: 'QuickMeal',
    ecoScore: 'E',
    category: 'food',
    co2Impact: '2.1kg CO2',
    waterUsage: '12L',
    packaging: 'Styrofoam cup',
    recyclable: false,
    sustainabilityFeatures: [],
    price: '$1.99',
    barcode: '8901030895012'
  },
  {
    id: '10',
    name: 'Organic Pasta',
    brand: 'EarthHarvest',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '0.8kg CO2',
    waterUsage: '3L',
    packaging: 'Cardboard box',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Recyclable Packaging'],
    price: '$3.49',
    barcode: '8712566301584'
  },
  
  // Bags & Packaging
  {
    id: '11',
    name: 'Plastic Shopping Bag',
    brand: 'ShopGeneric',
    ecoScore: 'E',
    category: 'bags',
    co2Impact: '1.2kg CO2',
    waterUsage: '8L',
    packaging: 'Single-use plastic',
    recyclable: false,
    sustainabilityFeatures: [],
    price: '$0.10',
    barcode: '6789012345678'
  },
  {
    id: '12',
    name: 'Canvas Tote Bag',
    brand: 'EcoBags',
    ecoScore: 'A',
    category: 'bags',
    co2Impact: '0.3kg CO2',
    waterUsage: '2L',
    packaging: 'Organic cotton',
    recyclable: true,
    sustainabilityFeatures: ['Reusable', 'Organic Cotton', 'Durable'],
    price: '$12.99',
    barcode: '7890123456789'
  },
  {
    id: '13',
    name: 'Paper Shopping Bag',
    brand: 'EcoMart',
    ecoScore: 'B',
    category: 'bags',
    co2Impact: '0.5kg CO2',
    waterUsage: '3L',
    packaging: 'Recycled paper',
    recyclable: true,
    sustainabilityFeatures: ['Recyclable', 'Biodegradable'],
    price: '$0.25',
    barcode: '9012345678901'
  },
  
  // Personal Care
  {
    id: '14',
    name: 'Plastic Toothbrush',
    brand: 'OralCare',
    ecoScore: 'D',
    category: 'personal-care',
    co2Impact: '0.3kg CO2',
    waterUsage: '1.5L',
    packaging: 'Plastic packaging',
    recyclable: false,
    sustainabilityFeatures: ['BPA-free'],
    price: '$2.99',
    barcode: '1357924680135'
  },
  {
    id: '15',
    name: 'Bamboo Toothbrush',
    brand: 'EcoBrush',
    ecoScore: 'A',
    category: 'personal-care',
    co2Impact: '0.05kg CO2',
    waterUsage: '0.3L',
    packaging: 'Cardboard',
    recyclable: true,
    sustainabilityFeatures: ['Biodegradable', 'Compostable Handle', 'Minimal Packaging'],
    price: '$4.99',
    barcode: '2468013579246'
  },
  {
    id: '16',
    name: 'Shampoo Bottle',
    brand: 'HairCare Pro',
    ecoScore: 'C',
    category: 'personal-care',
    co2Impact: '1.2kg CO2',
    waterUsage: '6L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['Recyclable Bottle', 'Sulfate-free'],
    price: '$8.99',
    barcode: '3691470258014'
  },
  {
    id: '17',
    name: 'Solid Shampoo Bar',
    brand: 'ZeroWaste Beauty',
    ecoScore: 'A',
    category: 'personal-care',
    co2Impact: '0.2kg CO2',
    waterUsage: '1L',
    packaging: 'Cardboard wrapper',
    recyclable: true,
    sustainabilityFeatures: ['Zero Plastic', 'Long-lasting', 'Natural Ingredients'],
    price: '$12.99',
    barcode: '8025691470258'
  },
  
  // Electronics
  {
    id: '18',
    name: 'Smartphone Charger',
    brand: 'TechCorp',
    ecoScore: 'C',
    category: 'electronics',
    co2Impact: '5.2kg CO2',
    waterUsage: '25L',
    packaging: 'Plastic blister pack',
    recyclable: false,
    sustainabilityFeatures: ['Energy Efficient'],
    price: '$19.99',
    barcode: '4702581470369'
  },
  {
    id: '19',
    name: 'Solar Power Bank',
    brand: 'GreenTech',
    ecoScore: 'B',
    category: 'electronics',
    co2Impact: '3.1kg CO2',
    waterUsage: '15L',
    packaging: 'Recycled cardboard',
    recyclable: true,
    sustainabilityFeatures: ['Solar Powered', 'Recyclable Packaging'],
    price: '$45.99',
    barcode: '1472583691470'
  },
  
  // Household Items
  {
    id: '20',
    name: 'Plastic Dish Soap',
    brand: 'CleanMax',
    ecoScore: 'D',
    category: 'household',
    co2Impact: '0.9kg CO2',
    waterUsage: '4L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['Phosphate-free'],
    price: '$3.49',
    barcode: '5814703692580'
  },
  {
    id: '21',
    name: 'Eco Dish Soap Refill',
    brand: 'PlanetClean',
    ecoScore: 'A',
    category: 'household',
    co2Impact: '0.2kg CO2',
    waterUsage: '1L',
    packaging: 'Compostable pouch',
    recyclable: true,
    sustainabilityFeatures: ['Concentrated Formula', 'Compostable Packaging', 'Plant-based'],
    price: '$6.99',
    barcode: '2580147036925'
  },
  
  // Snacks
  {
    id: '22',
    name: 'Potato Chips Bag',
    brand: 'CrunchyCorp',
    ecoScore: 'E',
    category: 'snacks',
    co2Impact: '1.8kg CO2',
    waterUsage: '9L',
    packaging: 'Multi-layer foil',
    recyclable: false,
    sustainabilityFeatures: [],
    price: '$2.99',
    barcode: '3692581470369'
  },
  {
    id: '23',
    name: 'Organic Trail Mix',
    brand: 'Nature\'s Best',
    ecoScore: 'B',
    category: 'snacks',
    co2Impact: '0.6kg CO2',
    waterUsage: '2.5L',
    packaging: 'Recyclable plastic',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Fair Trade', 'Recyclable Packaging'],
    price: '$5.99',
    barcode: '1470369258147'
  },
  
  // Cleaning Products
  {
    id: '24',
    name: 'All-Purpose Cleaner Spray',
    brand: 'SparkleClean',
    ecoScore: 'D',
    category: 'cleaning',
    co2Impact: '1.1kg CO2',
    waterUsage: '5L',
    packaging: 'Plastic spray bottle',
    recyclable: true,
    sustainabilityFeatures: ['Ammonia-free'],
    price: '$4.99',
    barcode: '9630741852963'
  },
  {
    id: '25',
    name: 'Vinegar-Based Cleaner',
    brand: 'GreenClean',
    ecoScore: 'A',
    category: 'cleaning',
    co2Impact: '0.3kg CO2',
    waterUsage: '1.2L',
    packaging: 'Glass bottle',
    recyclable: true,
    sustainabilityFeatures: ['Non-toxic', 'Biodegradable', 'Refillable Glass Bottle'],
    price: '$7.99',
    barcode: '7418529630741'
  }
];

export const alternativesMap: Record<string, Alternative[]> = {
  '1': [
    {
      id: '2',
      name: 'Glass Water Bottle',
      brand: 'EcoFriendly Co.',
      ecoScore: 'A',
      reason: 'Infinitely recyclable and eliminates single-use plastic waste',
      price: '$8.99',
      savings: '0.3kg'
    },
    {
      id: '3',
      name: 'Stainless Steel Bottle',
      brand: 'EcoSteel',
      ecoScore: 'A',
      reason: 'Lifetime durability means one bottle replaces thousands of plastic ones',
      price: '$24.99',
      savings: '0.4kg'
    }
  ],
  '4': [
    {
      id: '5',
      name: 'Bamboo Coffee Cup',
      brand: 'GreenCup',
      ecoScore: 'A',
      reason: 'Made from fast-growing renewable bamboo, completely biodegradable',
      price: '$15.99',
      savings: '0.7kg'
    }
  ],
  '6': [
    {
      id: '2',
      name: 'Glass Water Bottle',
      brand: 'EcoFriendly Co.',
      ecoScore: 'A',
      reason: 'Reusable glass eliminates single-use plastic bottles',
      price: '$8.99',
      savings: '0.5kg'
    }
  ],
  '9': [
    {
      id: '10',
      name: 'Organic Pasta',
      brand: 'EarthHarvest',
      ecoScore: 'B',
      reason: 'Healthier option with recyclable packaging and organic ingredients',
      price: '$3.49',
      savings: '1.3kg'
    }
  ],
  '11': [
    {
      id: '12',
      name: 'Canvas Tote Bag',
      brand: 'EcoBags',
      ecoScore: 'A',
      reason: 'One tote bag can replace hundreds of plastic bags over its lifetime',
      price: '$12.99',
      savings: '0.9kg'
    },
    {
      id: '13',
      name: 'Paper Shopping Bag',
      brand: 'EcoMart',
      ecoScore: 'B',
      reason: 'Biodegradable and recyclable alternative to plastic bags',
      price: '$0.25',
      savings: '0.7kg'
    }
  ],
  '14': [
    {
      id: '15',
      name: 'Bamboo Toothbrush',
      brand: 'EcoBrush',
      ecoScore: 'A',
      reason: 'Biodegradable handle reduces plastic waste in landfills',
      price: '$4.99',
      savings: '0.25kg'
    }
  ],
  '16': [
    {
      id: '17',
      name: 'Solid Shampoo Bar',
      brand: 'ZeroWaste Beauty',
      ecoScore: 'A',
      reason: 'Zero plastic packaging and lasts 2-3x longer than liquid shampoo',
      price: '$12.99',
      savings: '1.0kg'
    }
  ],
  '20': [
    {
      id: '21',
      name: 'Eco Dish Soap Refill',
      brand: 'PlanetClean',
      ecoScore: 'A',
      reason: 'Concentrated formula with compostable packaging reduces waste',
      price: '$6.99',
      savings: '0.7kg'
    }
  ],
  '22': [
    {
      id: '23',
      name: 'Organic Trail Mix',
      brand: 'Nature\'s Best',
      ecoScore: 'B',
      reason: 'Healthier snack with recyclable packaging and sustainable sourcing',
      price: '$5.99',
      savings: '1.2kg'
    }
  ],
  '24': [
    {
      id: '25',
      name: 'Vinegar-Based Cleaner',
      brand: 'GreenClean',
      ecoScore: 'A',
      reason: 'Non-toxic ingredients in reusable glass bottle',
      price: '$7.99',
      savings: '0.8kg'
    }
  ]
};

export const ecoTips: Record<string, string> = {
  '1': 'Single-use plastic bottles take 450+ years to decompose. Switch to reusable options!',
  '2': 'Glass is infinitely recyclable without losing quality. Great sustainable choice!',
  '3': 'Stainless steel bottles can last decades. The ultimate sustainable investment!',
  '4': 'Most coffee cups have plastic linings that make them non-recyclable. Bring your own!',
  '5': 'Bamboo grows 35x faster than trees and produces 35% more oxygen. Perfect eco-material!',
  '6': 'Plastic bottles release microplastics when heated. Consider glass or steel alternatives.',
  '7': 'Natural spring water has a smaller carbon footprint than many processed beverages.',
  '8': 'Organic bananas require 30% less energy to produce and have no pesticide residues.',
  '9': 'Instant noodles generate 10x more CO2 than home-cooked alternatives.',
  '10': 'Organic pasta supports sustainable farming practices that preserve soil health.',
  '11': 'Plastic bags are used for 12 minutes on average but persist in environment for 1000+ years.',
  '12': 'One canvas bag can eliminate the need for 1000+ plastic bags over its lifetime!',
  '13': 'Paper bags decompose in 2-6 weeks, making them a much better choice than plastic.',
  '14': 'Over 1 billion plastic toothbrushes are thrown away annually in the US alone.',
  '15': 'Bamboo toothbrushes are 100% biodegradable except for the bristles.',
  '16': 'Plastic shampoo bottles take 450 years to break down in landfills.',
  '17': 'One shampoo bar can replace 2-3 plastic bottles and lasts much longer.',
  '18': 'E-waste is the fastest growing waste stream globally. Choose durable electronics.',
  '19': 'Solar power banks reduce dependence on grid electricity and lower carbon footprint.',
  '20': 'Chemical cleaners pollute waterways. Natural alternatives are just as effective.',
  '21': 'Concentrated formulas reduce packaging waste by up to 75%.',
  '22': 'Chip bags are often made from mixed materials that can\'t be recycled.',
  '23': 'Organic snacks support biodiversity and reduce chemical pesticide use.',
  '24': 'Aerosol cleaners contribute to air pollution and often contain harmful chemicals.',
  '25': 'Vinegar-based cleaners are non-toxic and safe around children and pets.'
};
