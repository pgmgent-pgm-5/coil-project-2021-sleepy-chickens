import React from "react";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import ProgressBar from "../components/Checkout/ProgressBar/ProgressBar";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";

const Container = styled.div``;

const steps = ["Delivery address", "Payment method", "Overview", "Confirm"];

interface Props {}

const Checkout = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const ActiveComponent = () => {
    if (activeStep === 0) {
      return (
        <>
          <DeliveryAddressForm nextStep={nextStep} />
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <div>Payment method</div>
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <div>Overview</div>
        </>
      );
    } else if (activeStep === 3) {
      return null;
    } else {
      return <div>Error</div>;
    }
  };

  return (
    <BaseLayout>
      <Container>
        <ProgressBar activeStep={activeStep} steps={steps} />
        <ActiveComponent />
        {activeStep === 3 && <div>Confirm</div>}
      </Container>
    </BaseLayout>
  );
};

export default Checkout;
