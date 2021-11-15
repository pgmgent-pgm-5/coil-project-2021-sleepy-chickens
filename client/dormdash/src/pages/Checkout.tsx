import React from "react";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import ProgressBar from "../components/Checkout/ProgressBar/ProgressBar";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";
import PayementForm from "../components/Checkout/PayementForm";
import Overview from "../components/Checkout/Overview";
import Confirm from "../components/Checkout/Confirm";
import Error from "../components/Checkout/Error";
import { Helmet } from "react-helmet";

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
          <Overview backStep={backStep} nextStep={nextStep} />
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
