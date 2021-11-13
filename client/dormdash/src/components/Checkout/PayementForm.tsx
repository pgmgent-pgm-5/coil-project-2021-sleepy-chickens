import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import GoBackButton from "./GoBackButton";
import { appConfig } from "../../config";
import { Stripe, StripeElements } from "@stripe/stripe-js/types/stripe-js";
import styled from "styled-components";
import TotalOverview from "./TotalOverview";
import PrimaryButton from "../form/PrimaryButton";

const Container = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: ${(props) => props.theme.width.small}) {
      flex-wrap: wrap;
      align-items: flex-start;
      flex-direction: row;
    }
  }
`;

const CardInfoContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 50%;
  }

  .CardElement {
    //background-color: ${(props) => props.theme.colors.tertiaryAccentColor};

    .CardField-number {
      border: 2px solid ${(props) => props.theme.colors.primaryAccentColor} !important;
    }
  }
`;

const TotalOverviewContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: calc(40% - 0.5rem);
    margin-left: 0.5rem;
  }
`;

const GoBackButtonContainer = styled.div`
  width: 100%;
`;

interface Props {
  backStep: () => void;
  nextStep: () => void;
  deliveryAddressData: {};
  options?: { appearance: { theme: string } };
}

interface StripeProps {
  stripe: Stripe | null;
  elements: StripeElements | null;
  e: React.FormEvent<HTMLFormElement>;
  nextStep: () => void;
}

const stripePromise = loadStripe(appConfig.stripe_public_key as string);

const PayementForm = ({ backStep, nextStep, deliveryAddressData }: Props) => {
  const handleSubmit = async ({
    e,
    elements,
    stripe,
    nextStep,
  }: StripeProps) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement) as any;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      console.log(deliveryAddressData);

      // data uit current user halen
      //   const orderData = {};

      nextStep();
    }
  };

  return (
    <Container>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              onSubmit={(e) => handleSubmit({ e, elements, stripe, nextStep })}
            >
              <CardInfoContainer>
                <h2>Payement</h2>
                <CardElement className="CardElement"></CardElement>
              </CardInfoContainer>

              <TotalOverviewContainer>
                <TotalOverview />
                <PrimaryButton disabled={!stripe} type="submit">
                  Pay
                </PrimaryButton>
              </TotalOverviewContainer>
              <GoBackButtonContainer>
                <GoBackButton onClick={backStep} />
              </GoBackButtonContainer>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </Container>
  );
};

export default PayementForm;
