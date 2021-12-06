import React, { useState } from "react";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import ProgressBar from "../components/Checkout/ProgressBar/ProgressBar";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";
import PayementForm from "../components/Checkout/PayementForm";
import Overview from "../components/Checkout/Overview";
import Confirm from "../components/Checkout/Confirm";
import Error from "../components/Checkout/Error";
import { Helmet } from "react-helmet";
import { useStore } from "../store/cartStore";
import { DishesTotal } from "../interfaces/interfaces";

const Container = styled.div``;

const steps = ["Delivery address", "Payment method", "Overview", "Confirm"];

interface Props {}

interface step1 {
  houseNumber: string,
  street: string,
  city: string,
  zipCode: string,
  state: string
}

const Checkout = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [deliveryAddressData, setDeliveryAddressData] = React.useState({} as step1);


  const { dishes } = useStore();

  const get_total = (dishes:DishesTotal) => {
    let sum = 0;
    Object.entries(dishes).map((dish) => {
      const price = dish[1].price;
      const quantity = dish[1]. quantity;
      sum += (price * quantity);
      sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    })
    return sum;
  }

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data: React.SetStateAction<step1>) => {
    setDeliveryAddressData(data);
    nextStep();
  };

  const ActiveComponent = () => {
    if (activeStep === 0) {
      return (
        <>
          <DeliveryAddressForm next={next} total={get_total(dishes)}/>
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <PayementForm
            deliveryAddressData={deliveryAddressData}
            nextStep={nextStep}
            backStep={backStep}
            total={get_total(dishes)}
          />
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <Overview backStep={backStep} nextStep={nextStep} deliveryAddressData={deliveryAddressData} />
        </>
      );
    } else if (activeStep === 3) {
      return null;
    } else {
      return <Error />;
    }
  };

  return (
    <BaseLayout>
      <Helmet>
        <title>Dormdash | Checkout</title>
      </Helmet>
      <Container>
        <ProgressBar activeStep={activeStep} steps={steps} />
        <ActiveComponent />
        {activeStep === 3 && <Confirm />}
      </Container>
    </BaseLayout>
  );
};

export default Checkout;
