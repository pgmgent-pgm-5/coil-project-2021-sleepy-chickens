import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { useUser } from "../../context/AuthenticationContext";
import {
  ALL_ORDERS_BY_RESTAURANT_ID,
  CREATE_ORDER,
  CREATE_ORDER_HAS_DISH,
} from "../../graphql/orders";
import { CREATE_PAYMENT } from "../../graphql/payments";
import { DishesTotal } from "../../interfaces/interfaces";
import { useStore } from "../../store/cartStore";
import PrimaryButton from "../form/PrimaryButton";
import GoBackButton from "./GoBackButton";
import OrderItem from "./OrderItem";
import TotalOverview from "./TotalOverview";

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }

  h3 {
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    width: calc(60% - 0.5rem);
    margin-right: 0.5rem;
    max-width: 30rem;
  }
`;

const OrderOverview = styled.div`
  width: 100%;
`;

const DeliveryInfo = styled.div`
  margin-top: 2rem;
`;

const TotalOverviewContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: calc(40% - 0.5rem);
    margin-left: 0.5rem;
  }
`;

const GoBackButtonContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.small}) {
    margin-top: 2rem;
  }
`;

interface step1 {
  houseNumber: string;
  street: string;
  city: string;
  zipCode: string;
  state: string;
}

interface Props {
  backStep: () => void;
  nextStep: () => void;
  deliveryAddressData: step1;
}

const Overview = ({ backStep, nextStep, deliveryAddressData }: Props) => {
  const { dishes } = useStore();

  const userContext = useUser();
  const userId = userContext?.state.id;
  let restaurantId: number;

  const get_total = (dishes: DishesTotal) => {
    let sum = 0;
    Object.entries(dishes).map((dish) => {
      restaurantId = dish[1].restaurantId;
      const price = dish[1].price;
      const quantity = dish[1].quantity;
      sum += price * quantity;
      sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    });
    return sum;
  };

  const [createOrder, { data, loading, error }] = useMutation(CREATE_ORDER);
  const [
    createPayment,
    { data: paymentData, loading: paymentLoading, error: paymentError },
  ] = useMutation(CREATE_PAYMENT);
  const [
    createOrderHasDish,
    {
      data: orderHasDishData,
      loading: orderHasDishLoading,
      error: orderHasDishError,
    },
  ] = useMutation(CREATE_ORDER_HAS_DISH);

  if (error) return <p>{error.message}</p>;
  if (paymentError) return <p>{paymentError.message}</p>;
  if (orderHasDishError) return <p>{orderHasDishError.message}</p>;
  let orderId: number;

  if (data) {
    orderId = data.createOrder.id;
  }

  const finishStep = () => {
    createOrder({
      variables: {
        userId: userId,
        driverId: 1,
        restaurantId: restaurantId,
        orderNumber: 200,
        orderState: "Preparing",
        deliveryState: "Waiting for pickup",
        deliveryFee: 4.0,
        totalPrice: get_total(dishes),
        street: deliveryAddressData.street,
        streetnumber: Number(deliveryAddressData.houseNumber),
        postalcode: deliveryAddressData.zipCode,
        city: deliveryAddressData.city,
        province: deliveryAddressData.state,
      },
      refetchQueries: [
        {
          query: ALL_ORDERS_BY_RESTAURANT_ID,
          variables: { restaurantId: Number(restaurantId) },
        },
      ],
    });
    if (data) {
      createPayment({
        variables: {
          userId: userId,
          orderId: orderId,
          paymentType: "Visa",
          price: get_total(dishes),
          paidDate: Date.now(),
        },
      });

      Object.entries(dishes).map((dish) => {
        createOrderHasDish({
          variables: {
            orderId: orderId,
            dishId: dish[1].id,
            quantity: dish[1].quantity,
          },
        });
      });

      nextStep();
    }
  };
  return (
    <Container>
      <FlexContainer>
        <h2>Overview</h2>
        <h3>Order</h3>
        <OrderOverview>
          {Object.entries(dishes).map((dish) => {
            return (
              <OrderItem
                id={dish[1].id}
                name={dish[1].name}
                picture={dish[1].picture}
                price={dish[1].price}
                quantity={dish[1].quantity}
              />
            );
          })}
        </OrderOverview>

        <DeliveryInfo>
          <div>
            <h3>Expected delivery time</h3>
            <p>20 - 30 min</p>
          </div>
          <div>
            <h3>Delivery address</h3>
            <p>
              {deliveryAddressData.houseNumber} {deliveryAddressData.street},{" "}
              {deliveryAddressData.zipCode} {deliveryAddressData.city},{" "}
              {deliveryAddressData.state}
            </p>
          </div>
        </DeliveryInfo>
      </FlexContainer>

      <TotalOverviewContainer>
        <TotalOverview total={get_total(dishes)} />
        <PrimaryButton onClick={finishStep} type="button">
          Finish
        </PrimaryButton>
      </TotalOverviewContainer>

      <GoBackButtonContainer>
        <GoBackButton onClick={backStep} />
      </GoBackButtonContainer>
    </Container>
  );
};

export default Overview;
