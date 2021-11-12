import React from "react";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import ProgressBar from "../components/Checkout/ProgressBar/ProgressBar";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";
import TotalOverview from "../components/Checkout/TotalOverview";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const steps = ["Delivery address", "Payment method", "Overview", "Confirm"];

interface Props {}

const Checkout = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const ActiveComponent = () => {
    if (activeStep === 0) {
      return (
        <>
          <DeliveryAddressForm />
          <TotalOverview />
        </>
      );
    } else if (activeStep === 1) {
      return (
        <>
          <div>Payment method</div>
          <TotalOverview />
        </>
      );
    } else if (activeStep === 2) {
      return (
        <>
          <div>Overview</div>
          <TotalOverview />
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
