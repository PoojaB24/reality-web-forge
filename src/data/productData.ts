
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
    id: '7',
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
      id: '7',
      name: 'Canvas Tote Bag',
      brand: 'EcoBags',
      ecoScore: 'A',
      reason: 'One tote bag can replace hundreds of plastic bags over its lifetime',
      price: '$12.99',
      savings: '0.9kg'
    }
  ]
};

export const ecoTips: Record<string, string> = {
  '1': 'Single-use plastic bottles take 450+ years to decompose. Switch to reusable options!',
  '2': 'Glass is infinitely recyclable without losing quality. Great sustainable choice!',
  '3': 'Stainless steel bottles can last decades. The ultimate sustainable investment!',
  '4': 'Most coffee cups have plastic linings that make them non-recyclable. Bring your own!',
  '5': 'Bamboo grows 35x faster than trees and produces 35% more oxygen. Perfect eco-material!',
  '6': 'Plastic bags are used for 12 minutes on average but persist in environment for 1000+ years.',
  '7': 'One canvas bag can eliminate the need for 1000+ plastic bags over its lifetime!'
};
