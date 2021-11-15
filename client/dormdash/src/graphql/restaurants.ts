import { gql } from "@apollo/client";

export const RESTAURANTS_SUMMARY = gql`
{
  restaurants {
    id
    name
    picture
    deliveryTime
    category {
      name
    }
    reviews {
      rating
    }
  }
}
`;

export const RESTAURANTS_DETAIL = gql`
query ($id: Int!) {
  getRestaurantById(id: $id) {
    id
    name
    picture
    logo
    street
    streetnumber
    city
    postalcode
    province
    deliveryTime
    deliveryTimes
    reviews {
      rating
      title
      date
      description
    }
    category {
      name
    }
  }
}
`;