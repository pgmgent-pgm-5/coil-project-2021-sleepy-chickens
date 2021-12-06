import { gql } from "@apollo/client";

export const PROFILE_DETAIL = gql`
query ($id: Int!) {
  findOneUser(id: $id) {
    firstName
    lastName
    picture
    email
    phone
  }
}
`;

export const UPDATE_PROFILE = gql`
  mutation ($id: Int!, $firstName: String!, $lastName: String!, $email: String!, $phone: String, $picture: String, $role: String!){
    updateUser(
      updateUserInput: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        picture: $picture
        role: $role
      }
    ){
    id
    }
  }
`;
