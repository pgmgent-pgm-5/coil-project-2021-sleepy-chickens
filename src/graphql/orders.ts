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

export const CREATE_ORDER_HAS_DISH = gql`

mutation ( $orderId: Int!, $dishId: Int!, $quantity: Int!) {
  createOrdersHasDish(createOrdersHasDishInput: {
    orderId: $orderId,
    dishId: $dishId,
    quantity: $quantity,
  }) {
    id
  }
}
`;

export const CREATE_ORDER = gql`

mutation ( $userId: Int!, $driverId: Int!, $restaurantId: Int!, $orderNumber: Int!, $orderState: String!, $deliveryState: String!, $deliveryFee: Float!, $totalPrice: Float! $street: String!, $streetnumber: Int!, $postalcode: String!, $city: String!, $province: String!) {
  createOrder(createOrderInput: {
    userId: $userId,
    driverId: $driverId,
    restaurantId: $restaurantId,
    orderNumber: $orderNumber,
    orderState: $orderState,
    deliveryState: $deliveryState,
    deliveryFee: $deliveryFee,
    totalPrice: $totalPrice,
    street: $street,
    streetnumber: $streetnumber,
    postalcode: $postalcode,
    city: $city,
    province: $province,
  }) {
    id
  }
}
`;
