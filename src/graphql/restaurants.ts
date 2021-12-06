import { gql } from "@apollo/client";

export const RESTAURANTS_SUMMARY = gql`
query ($province: String!) {
  restaurantsByProvince(province: $province) {
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

export const RESTAURANTS_SUMMARY_CATEGORY = gql`
query ($province: String!, $categoryId: Int!) {
  restaurantsByCategoryAndProvince(province: $province, categoryId: $categoryId) {
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
    dishes {
      id
      name
      picture
      description
      price
    }
  }
}
`;

export const RESTAURANT_DISHES = gql`
  query ($id: Int!) {
    getRestaurantById(id: $id) {
      id
      dishes {
        description
        price
        id
        name
      }
    }
  }
`;

export const CREATE_RESTAURANT = gql`

mutation ( $userId: Int!, $categoryId: Int!, $name: String!, $description: String!, $logo: String!, $picture: String!, $street: String!, $streetnumber: Int!, $postalcode: String!, $city: String!, $province: String!, $deliveryTime: Int!, $deliveryTimes: String!) {
  createRestaurant(createRestaurantInput: {
    userId: $userId,
    categoryId: $categoryId,
    name: $name,
    description: $description,
    logo: $logo,
    picture: $picture,
    street: $street,
    streetnumber: $streetnumber,
    postalcode: $postalcode,
    city: $city,
    province: $province,
    deliveryTime: $deliveryTime,
    deliveryTimes: $deliveryTimes,
  }) {
    id
  }
}
`;

export const GET_RESTAURANTID_BY_USERID = gql`
query ($userId: Int!) {
  getRestaurantByUserId(userId: $userId) {
    id
  }
}
`;

export const GET_RESTAURANTDETAIL_BY_USERID = gql`
query ($userId: Int!) {
  getRestaurantByUserId(userId: $userId) {
    id
    name 
    description 
    picture
  }
}
`;

export const UPDATE_RESTAURANT = gql`
  mutation ($id: Int!, $name: String!, $description: String!, $picture: String!){
    updateRestaurant(
      updateRestaurantInput: {
        id: $id, 
        name: $name,
        description: $description,
        picture: $picture,
      }
    ){
    name,
    description,
    picture
    }
  }
`;

