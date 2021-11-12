import React from "react";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import ProgressBar from "../components/Checkout/ProgressBar/ProgressBar";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";
import PayementForm from "../components/Checkout/PayementForm";

const Container = styled.div``;

const steps = ["Delivery address", "Payment method", "Overview", "Confirm"];

interface Props {}

const Checkout = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [deliveryAddressData, setDeliveryAddressData] = React.useState({});

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data: React.SetStateAction<{}>) => {
    setDeliveryAddressData(data);
    nextStep();
  };

  const ActiveComponent = () => {
    if (activeStep === 0) {
      return (
        <>
          <DeliveryAddressForm next={next} />
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <PayementForm
            deliveryAddressData={deliveryAddressData}
            nextStep={nextStep}
            backStep={backStep}
          />
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
