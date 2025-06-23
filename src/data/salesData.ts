
export interface WeeklySale {
  id: string;
  title: string;
  description: string;
  discountPercentage: number;
  productIds: string[];
  startDate: string;
  endDate: string;
  isActive: boolean;
  image: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  offerType: 'buy-one-get-one' | 'bulk-discount' | 'flat-discount' | 'combo-deal';
  discountValue: number;
  minQuantity?: number;
  productIds: string[];
  validUntil: string;
  isActive: boolean;
  image: string;
  terms: string;
}

export const weeklySales: WeeklySale[] = [
  {
    id: 'sale-1',
    title: 'Organic Food Week',
    description: 'Get up to 25% off on all organic food items',
    discountPercentage: 25,
    productIds: ['food-1', 'food-2', 'food-3', 'food-4', 'food-5', 'health-1', 'health-2'],
    startDate: '2024-06-17',
    endDate: '2024-06-30',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
  },
  {
    id: 'sale-2',
    title: 'Ayurveda Wellness Sale',
    description: '20% off on all Ayurvedic products',
    discountPercentage: 20,
    productIds: ['ayur-1', 'ayur-2', 'ayur-3', 'ayur-4', 'ayur-5', 'care-1', 'care-2'],
    startDate: '2024-06-20',
    endDate: '2024-06-27',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400'
  },
  {
    id: 'sale-3',
    title: 'Eco-Friendly Home Week',
    description: '30% off on sustainable home products',
    discountPercentage: 30,
    productIds: ['house-1', 'house-2', 'house-3', 'house-4', 'house-5', 'decor-1', 'decor-2'],
    startDate: '2024-06-21',
    endDate: '2024-06-28',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'
  }
];

export const specialOffers: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Buy 2 Get 1 Free - Spices',
    description: 'Buy any 2 spice products and get 1 free',
    offerType: 'buy-one-get-one',
    discountValue: 33,
    productIds: ['spice-1', 'spice-2', 'spice-3', 'spice-4', 'spice-5'],
    validUntil: '2024-07-15',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400',
    terms: 'Applicable on selected spice products. Lowest priced item will be free.'
  },
  {
    id: 'offer-2',
    title: 'Bulk Tea Discount',
    description: 'Buy 5 or more tea products and get 15% off',
    offerType: 'bulk-discount',
    discountValue: 15,
    minQuantity: 5,
    productIds: ['bev-1', 'bev-2', 'bev-3', 'bev-4', 'bev-5'],
    validUntil: '2024-07-01',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1571934811752-ee5a8b1b8bfb?w=400',
    terms: 'Minimum 5 tea products required. Discount applies to total cart value.'
  },
  {
    id: 'offer-3',
    title: 'Handloom Textile Combo',
    description: 'Buy any 3 textile items and save ₹500',
    offerType: 'combo-deal',
    discountValue: 500,
    minQuantity: 3,
    productIds: ['textile-1', 'textile-2', 'textile-3', 'textile-4', 'textile-5'],
    validUntil: '2024-06-30',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
    terms: 'Valid on handloom and traditional textile products only.'
  },
  {
    id: 'offer-4',
    title: 'Beauty Bundle Deal',
    description: 'Flat ₹200 off on beauty products above ₹1000',
    offerType: 'flat-discount',
    discountValue: 200,
    productIds: ['beauty-1', 'beauty-2', 'beauty-3', 'beauty-4', 'beauty-5'],
    validUntil: '2024-07-10',
    isActive: true,
    image: 'https://images.unsplash.com/photo-1571019613454-1cbd2df1213e?w=400',
    terms: 'Minimum purchase of ₹1000 required on beauty and cosmetic products.'
  }
];
