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
  price: number;
  barcode?: string;
  image: string;
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
  // Beverages (30 items) - Fixed images to match products
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
    price: 1.29,
    barcode: '1234567890123',
    image: 'https://images.unsplash.com/photo-1550062387-3662c7ba6541?w=400'
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
    price: 8.99,
    barcode: '2345678901234',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
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
    price: 24.99,
    barcode: '3456789012345',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400'
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
    price: 0.99,
    barcode: '4567890123456',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
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
    price: 15.99,
    barcode: '5678901234567',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
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
    price: 1.89,
    barcode: '0049000042566',
    image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400'
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
    price: 2.49,
    barcode: '3068320055008',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400'
  },
  {
    id: '26',
    name: 'Organic Green Tea',
    brand: 'Pure Leaf',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.3kg CO2',
    waterUsage: '1.5L',
    packaging: 'Recyclable glass bottle',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Fair Trade', 'Recyclable Glass'],
    price: 3.99,
    barcode: '1470258369147',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400'
  },
  {
    id: '27',
    name: 'Kombucha Original',
    brand: 'HealthyGut',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '0.4kg CO2',
    waterUsage: '2L',
    packaging: 'Glass bottle',
    recyclable: true,
    sustainabilityFeatures: ['Probiotic', 'Organic', 'Glass Bottle'],
    price: 4.99,
    barcode: '2580369147025',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
  },
  {
    id: '28',
    name: 'Coconut Water',
    brand: 'Tropical Pure',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '0.6kg CO2',
    waterUsage: '3L',
    packaging: 'Tetra pack',
    recyclable: true,
    sustainabilityFeatures: ['Natural', 'No Added Sugar', 'Recyclable'],
    price: 2.79,
    barcode: '3691472580147',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400'
  },
  {
    id: '29',
    name: 'Fresh Orange Juice',
    brand: 'Simply Orange',
    ecoScore: 'C',
    category: 'beverages',
    co2Impact: '1.2kg CO2',
    waterUsage: '8L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['No Preservatives', 'Recyclable Bottle'],
    price: 3.49,
    barcode: '4702581470369',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400'
  },
  {
    id: '30',
    name: 'Craft Beer IPA',
    brand: 'Green Brewery',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '1.8kg CO2',
    waterUsage: '12L',
    packaging: 'Aluminum can',
    recyclable: true,
    sustainabilityFeatures: ['Local Brewing', 'Aluminum Can', 'Organic Hops'],
    price: 2.99,
    barcode: '5814703692580',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400'
  },
  {
    id: '31',
    name: 'Energy Drink',
    brand: 'PowerUp',
    ecoScore: 'D',
    category: 'beverages',
    co2Impact: '2.1kg CO2',
    waterUsage: '15L',
    packaging: 'Aluminum can',
    recyclable: true,
    sustainabilityFeatures: ['Recyclable Can'],
    price: 2.49,
    barcode: '2580147036925',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
  },
  {
    id: '32',
    name: 'Almond Milk',
    brand: 'Nutty Goodness',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '0.8kg CO2',
    waterUsage: '4L',
    packaging: 'Tetra pack',
    recyclable: true,
    sustainabilityFeatures: ['Plant-based', 'No Dairy', 'Recyclable'],
    price: 3.99,
    barcode: '3692581470369',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400'
  },
  {
    id: '33',
    name: 'Sparkling Water',
    brand: 'Bubble Fresh',
    ecoScore: 'C',
    category: 'beverages',
    co2Impact: '0.6kg CO2',
    waterUsage: '3L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['Natural Flavors', 'Recyclable'],
    price: 1.99,
    barcode: '1470369258147',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400'
  },
  {
    id: '34',
    name: 'Cold Brew Coffee',
    brand: 'Artisan Roasters',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '0.9kg CO2',
    waterUsage: '5L',
    packaging: 'Glass bottle',
    recyclable: true,
    sustainabilityFeatures: ['Fair Trade', 'Organic', 'Glass Bottle'],
    price: 4.49,
    barcode: '9630741852963',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400'
  },
  {
    id: '35',
    name: 'Protein Shake',
    brand: 'FitLife',
    ecoScore: 'C',
    category: 'beverages',
    co2Impact: '1.5kg CO2',
    waterUsage: '8L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['High Protein', 'Recyclable'],
    price: 3.79,
    barcode: '7418529630741',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400'
  },
  {
    id: '36',
    name: 'Herbal Tea Blend',
    brand: 'Nature\'s Cup',
    ecoScore: 'A',
    category: 'beverages',
    co2Impact: '0.2kg CO2',
    waterUsage: '1L',
    packaging: 'Compostable bags',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Compostable Packaging', 'Locally Sourced'],
    price: 5.99,
    barcode: '8529630741852',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400'
  },
  {
    id: '37',
    name: 'Wine Bottle',
    brand: 'Vineyard Select',
    ecoScore: 'C',
    category: 'beverages',
    co2Impact: '2.8kg CO2',
    waterUsage: '18L',
    packaging: 'Glass bottle',
    recyclable: true,
    sustainabilityFeatures: ['Organic Grapes', 'Glass Bottle'],
    price: 12.99,
    barcode: '1470258369147',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400'
  },
  {
    id: '38',
    name: 'Smoothie Bowl Mix',
    brand: 'Blend It',
    ecoScore: 'B',
    category: 'beverages',
    co2Impact: '0.7kg CO2',
    waterUsage: '3.5L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['Superfood Blend', 'No Added Sugar'],
    price: 6.49,
    barcode: '2580369147025',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400'
  },
  {
    id: '39',
    name: 'Isotonic Sports Drink',
    brand: 'Hydrate Pro',
    ecoScore: 'D',
    category: 'beverages',
    co2Impact: '1.6kg CO2',
    waterUsage: '10L',
    packaging: 'Plastic bottle',
    recyclable: true,
    sustainabilityFeatures: ['Electrolytes', 'Recyclable'],
    price: 2.29,
    barcode: '3691472580147',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400'
  },

  // Food Items (30 items)
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
    price: 0.79,
    barcode: '4011',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400'
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
    price: 1.99,
    barcode: '8901030895012',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400'
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
    price: 3.49,
    barcode: '8712566301584',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400'
  },
  {
    id: '40',
    name: 'Avocado Toast Bread',
    brand: 'Artisan Bakery',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '0.6kg CO2',
    waterUsage: '2.5L',
    packaging: 'Paper bag',
    recyclable: true,
    sustainabilityFeatures: ['Whole Grain', 'No Preservatives'],
    price: 4.99,
    barcode: '4702581470369',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
  },
  {
    id: '41',
    name: 'Organic Quinoa',
    brand: 'SuperGrains',
    ecoScore: 'A',
    category: 'food',
    co2Impact: '0.4kg CO2',
    waterUsage: '1.8L',
    packaging: 'Recyclable plastic bag',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Protein Rich', 'Fair Trade'],
    price: 6.99,
    barcode: '5814703692580',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
  },
  {
    id: '42',
    name: 'Greek Yogurt',
    brand: 'Mediterranean Fresh',
    ecoScore: 'C',
    category: 'food',
    co2Impact: '1.2kg CO2',
    waterUsage: '6L',
    packaging: 'Plastic container',
    recyclable: true,
    sustainabilityFeatures: ['High Protein', 'Probiotic'],
    price: 4.49,
    barcode: '2580147036925',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400'
  },
  {
    id: '43',
    name: 'Fresh Salmon Fillet',
    brand: 'Ocean Fresh',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '2.8kg CO2',
    waterUsage: '15L',
    packaging: 'Biodegradable tray',
    recyclable: true,
    sustainabilityFeatures: ['Wild Caught', 'Sustainable Fishing', 'Omega-3 Rich'],
    price: 12.99,
    barcode: '3692581470369',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'
  },
  {
    id: '44',
    name: 'Organic Honey',
    brand: 'Bee Natural',
    ecoScore: 'A',
    category: 'food',
    co2Impact: '0.3kg CO2',
    waterUsage: '1L',
    packaging: 'Glass jar',
    recyclable: true,
    sustainabilityFeatures: ['Raw Honey', 'Support Bee Population', 'Glass Jar'],
    price: 8.99,
    barcode: '1470369258147',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400'
  },
  {
    id: '45',
    name: 'Whole Grain Cereal',
    brand: 'Morning Boost',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '0.9kg CO2',
    waterUsage: '4L',
    packaging: 'Cardboard box',
    recyclable: true,
    sustainabilityFeatures: ['Whole Grains', 'High Fiber', 'Recyclable Box'],
    price: 5.49,
    barcode: '9630741852963',
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=400'
  },
  {
    id: '46',
    name: 'Free Range Eggs',
    brand: 'Happy Hens',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '1.1kg CO2',
    waterUsage: '5L',
    packaging: 'Recyclable cardboard',
    recyclable: true,
    sustainabilityFeatures: ['Free Range', 'Cage Free', 'High Protein'],
    price: 4.99,
    barcode: '7418529630741',
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400'
  },
  {
    id: '47',
    name: 'Organic Spinach',
    brand: 'Green Leafy',
    ecoScore: 'A',
    category: 'food',
    co2Impact: '0.2kg CO2',
    waterUsage: '0.8L',
    packaging: 'Compostable bag',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Iron Rich', 'Compostable Packaging'],
    price: 3.99,
    barcode: '8529630741852',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400'
  },
  {
    id: '48',
    name: 'Artisan Cheese',
    brand: 'Dairy Delights',
    ecoScore: 'C',
    category: 'food',
    co2Impact: '3.2kg CO2',
    waterUsage: '20L',
    packaging: 'Wax paper',
    recyclable: true,
    sustainabilityFeatures: ['Grass Fed', 'Local Dairy', 'Traditional Methods'],
    price: 9.99,
    barcode: '1470258369147',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400'
  },
  {
    id: '49',
    name: 'Dark Chocolate Bar',
    brand: 'Cacao Dreams',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '0.8kg CO2',
    waterUsage: '3.5L',
    packaging: 'Compostable wrapper',
    recyclable: true,
    sustainabilityFeatures: ['Fair Trade', 'Organic Cacao', 'Antioxidant Rich'],
    price: 4.99,
    barcode: '2580369147025',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400'
  },
  {
    id: '50',
    name: 'Sourdough Bread',
    brand: 'Traditional Bakers',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '0.7kg CO2',
    waterUsage: '3L',
    packaging: 'Paper bag',
    recyclable: true,
    sustainabilityFeatures: ['Natural Fermentation', 'No Additives', 'Local Grain'],
    price: 5.99,
    barcode: '3691472580147',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
  },

  // Daily Essentials - Breakfast Items
  {
    id: '52',
    name: 'Organic Milk',
    brand: 'Farm Fresh',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '1.1kg CO2',
    waterUsage: '5L',
    packaging: 'Recyclable carton',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Grass Fed', 'Recyclable Packaging'],
    price: 4.49,
    barcode: '4521478963214',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400'
  },
  {
    id: '53',
    name: 'Whole Wheat Bread',
    brand: 'Daily Baker',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '0.7kg CO2',
    waterUsage: '3L',
    packaging: 'Paper bag',
    recyclable: true,
    sustainabilityFeatures: ['Whole Grain', 'No Preservatives', 'Local Grain'],
    price: 3.99,
    barcode: '7896321450147',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
  },
  {
    id: '54',
    name: 'Organic Butter',
    brand: 'Cream & Co',
    ecoScore: 'C',
    category: 'food',
    co2Impact: '2.3kg CO2',
    waterUsage: '12L',
    packaging: 'Paper wrapper',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Grass Fed', 'Traditional Churning'],
    price: 5.99,
    barcode: '3214569870125',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400'
  },

  // Kitchen Essentials
  {
    id: '58',
    name: 'Organic Rice - 2kg',
    brand: 'Grain Harvest',
    ecoScore: 'A',
    category: 'food',
    co2Impact: '0.9kg CO2',
    waterUsage: '4L',
    packaging: 'Paper bag',
    recyclable: true,
    sustainabilityFeatures: ['Organic', 'Locally Sourced', 'Fair Trade'],
    price: 7.99,
    barcode: '1470258369741',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
  },
  {
    id: '59',
    name: 'Cooking Oil - Olive',
    brand: 'Mediterranean Gold',
    ecoScore: 'B',
    category: 'food',
    co2Impact: '1.4kg CO2',
    waterUsage: '6L',
    packaging: 'Glass bottle',
    recyclable: true,
    sustainabilityFeatures: ['Cold Pressed', 'Glass Bottle', 'Organic'],
    price: 12.99,
    barcode: '2580369147852',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400'
  },
  {
    id: '60',
    name: 'Sea Salt',
    brand: 'Ocean Pure',
    ecoScore: 'A',
    category: 'food',
    co2Impact: '0.1kg CO2',
    waterUsage: '0.3L',
    packaging: 'Paper container',
    recyclable: true,
    sustainabilityFeatures: ['Natural', 'Unrefined', 'Minimal Processing'],
    price: 2.99,
    barcode: '3691472580369',
    image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400'
  },

  // Personal Care (25 items)
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
    price: 2.99,
    barcode: '1357924680135',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400'
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
    price: 4.99,
    barcode: '2468013579246',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
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
    price: 8.99,
    barcode: '3691470258014',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400'
  },
  {
    id: '51',
    name: 'Organic Face Cream',
    brand: 'Pure Skin',
    ecoScore: 'B',
    category: 'personal-care',
    co2Impact: '0.8kg CO2',
    waterUsage: '3L',
    packaging: 'Glass jar',
    recyclable: true,
    sustainabilityFeatures: ['Organic Ingredients', 'Cruelty Free', 'Glass Packaging'],
    price: 24.99,
    barcode: '4702581470369',
    image: 'https://images.uns plash.com/photo-1556228578-8c89e6adf883?w=400'
  },
  {
    id: '55',
    name: 'Natural Soap Bar',
    brand: 'Pure Clean',
    ecoScore: 'A',
    category: 'personal-care',
    co2Impact: '0.2kg CO2',
    waterUsage: '0.8L',
    packaging: 'Paper wrapper',
    recyclable: true,
    sustainabilityFeatures: ['Biodegradable', 'No Chemicals', 'Zero Plastic'],
    price: 3.99,
    barcode: '9630852741963',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400'
  },
  {
    id: '56',
    name: 'Organic Toothpaste',
    brand: 'Smile Natural',
    ecoScore: 'B',
    category: 'personal-care',
    co2Impact: '0.4kg CO2',
    waterUsage: '1.5L',
    packaging: 'Recyclable tube',
    recyclable: true,
    sustainabilityFeatures: ['Fluoride Free', 'Natural Ingredients', 'Recyclable Tube'],
    price: 6.99,
    barcode: '7418529630852',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400'
  },

  // Household (25 items) 
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
    price: 3.49,
    barcode: '5814703692580',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
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
    price: 6.99,
    barcode: '2580147036925',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
  },
  {
    id: '57',
    name: 'Toilet Paper - Recycled',
    brand: 'Soft & Green',
    ecoScore: 'A',
    category: 'household',
    co2Impact: '0.3kg CO2',
    waterUsage: '1L',
    packaging: 'Paper packaging',
    recyclable: true,
    sustainabilityFeatures: ['100% Recycled', 'Plastic Free', 'Biodegradable'],
    price: 8.99,
    barcode: '8529630741852',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
  },

  // Electronics (25 items)
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
    price: 19.99,
    barcode: '4702581470369',
    image: 'https://images.unsplash.com/photo-1588058365548-ab57bee6db7e?w=400'
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
    price: 45.99,
    barcode: '1472583691470',
    image: 'https://images.unsplash.com/photo-1609592837222-70ce4865ba90?w=400'
  },

  // Bags (25 items)
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
    price: 0.10,
    barcode: '6789012345678',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
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
    price: 12.99,
    barcode: '7890123456789',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
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
    price: 0.25,
    barcode: '9012345678901',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
  },

  // Snacks (25 items)
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
    price: 2.99,
    barcode: '3692581470369',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400'
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
    price: 5.99,
    barcode: '1470369258147',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400'
  },

  // Cleaning (25 items)
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
    price: 4.99,
    barcode: '9630741852963',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400'
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
    price: 7.99,
    barcode: '7418529630741',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
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
