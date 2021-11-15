import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`

mutation ($rating: Int!, $title: String!, $description: String!, $date: Timestamp!, $restaurantId: Int!){
  createReview(createReviewInput: {
    rating: $rating,
    title: $title,
    description: $description,
    date: $date,
    restaurantId: $restaurantId,
  }) {
    rating,
    title,
    description,
    date,
    restaurantId
  }
}
`;