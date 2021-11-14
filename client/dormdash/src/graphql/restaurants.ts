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