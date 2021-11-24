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

export const REMOVE_DISH = gql`
  mutation ($id: Int!){
    removeDish(id: $id, ) {
      name
    }
  }
`;

export const UPDATE_DISH = gql`
  mutation ($id: Int!, $restaurantId: Int!, $name: String!, $description: String!, $picture: String!, $price: Float!, $quantity: Int!){
    updateDish(
      updateDishInput: {
        id: $id, 
        restaurantId: $restaurantId,
        name: $name,
        description: $description,
        picture: $picture,
        price: $price,
        quantity: $quantity,
      }
    ){
    name
    }
  }
`;

export const DISH_BY_ID = gql`
  query ($id: Int!) {
    getDish(id: $id) {
      id
      description
      restaurantId
      picture
      price
      name
      quantity
    }
  }
`;
