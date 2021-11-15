// interfaces

export interface ProcessItemProps {
  id: number;
  name: string;
  title: string;
  lottie: string;
  text: string;
}

export interface StudentFAQProps {
  id: number;
  Q: string;
  A: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  logo: string;
  picture: string;
  street: string;
  streetnumber: number;
  postalcode: string; 
  city: string;
  deliveryTime: number;
  deliveryTimes: string;
  category: Category;
  reviews: Review[]
}

export interface RestaurantSummaries {
  restaurantsByProvince: RestaurantSummary[]
}

export interface RestaurantSummary {
  id: number;
  name: string;
  picture: string;
  deliveryTime: string;
  category: Category;
  reviews: ReviewRating[]
}

export interface Category {
  name: string;
}
export interface ReviewRating {
  rating: number;
}

export interface Review {
  rating: number;
  title: string;
  date: Date;
  description: string ;

}