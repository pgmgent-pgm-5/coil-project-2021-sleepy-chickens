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

interface Props {
  backStep: () => void;
  nextStep: () => void;
  deliveryAddressData: {};
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
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <form
            onSubmit={(e) => handleSubmit({ e, elements, stripe, nextStep })}
          >
            <CardElement />
            <div>
              <GoBackButton onClick={backStep} />
              <button type="submit" disabled={!stripe}>
                Pay
              </button>
            </div>
          </form>
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default PayementForm;
