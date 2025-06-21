
import { Star, User, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Review } from '@/data/productData';

interface ProductReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

const ProductReviews = ({ reviews, rating, reviewCount }: ProductReviewsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
          
          {/* Overall Rating */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-4xl font-bold text-green-600">{rating}.0</div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {renderStars(rating)}
              </div>
              <p className="text-gray-600">{reviewCount.toLocaleString()} reviews</p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2 mb-6">
            {[5, 4, 3, 2, 1].map((stars) => {
              const percentage = stars >= rating ? Math.floor(Math.random() * 40) + 30 : Math.floor(Math.random() * 20) + 5;
              return (
                <div key={stars} className="flex items-center space-x-2">
                  <span className="text-sm w-8">{stars}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Recent Reviews</h4>
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <User className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-800">{review.userName}</span>
                    {review.verified && (
                      <Badge variant="outline" className="text-xs flex items-center space-x-1">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Verified Purchase</span>
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-600">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductReviews;
