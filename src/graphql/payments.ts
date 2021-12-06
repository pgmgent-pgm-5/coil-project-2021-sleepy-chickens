import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`

mutation ( $userId: Int!, $orderId: Int!, $paymentType: String!, $price: Float!, $paidDate: Timestamp!) {
  createPayment(createPaymentInput: {
    userId: $userId,
    orderId: $orderId,
    paymentType: $paymentType,
    price: $price,
    paidDate: $paidDate,
  }) {
    id
  }
}
`;