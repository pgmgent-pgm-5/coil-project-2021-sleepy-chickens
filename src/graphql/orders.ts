import { gql } from "@apollo/client";

export const ALL_ORDERS_BY_RESTAURANT_ID = gql`
query ($restaurantId: Int!) {
  findAllOrdersByRestaurantId(restaurantId: $restaurantId) {
    id
    orderNumber
    street
    streetnumber
    city
    province
    postalcode
    orderState
    user {
      firstName
      lastName
    }
  }
}
`;
