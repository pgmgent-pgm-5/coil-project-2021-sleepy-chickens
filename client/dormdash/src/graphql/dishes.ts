import { gql } from "@apollo/client";

export const CREATE_DISH = gql`

mutation ($restaurantId: Int!, $name: String!, $description: String!, $picture: String!, $price: Float!, $quantity: Int! ) {
  createDish(createDishInput: {
    restaurantId: $restaurantId,
    name: $name,
    description: $description,
    picture: $picture,
    price: $price,
    quantity: $quantity
  }) {
    id,
    restaurantId,
    name,
    description,
    picture,
    price,
    quantity
  }
}
`;


