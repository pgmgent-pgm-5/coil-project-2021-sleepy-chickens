import React from "react";
import styled from "styled-components";
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

interface Props {
  backStep: () => void;
  nextStep: () => void;
}

const Overview = ({ backStep, nextStep }: Props) => {
  return (
    <Container>
      <FlexContainer>
        <h2>Overview</h2>
        <h3>Order</h3>
        <OrderOverview>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </OrderOverview>

        <DeliveryInfo>
          <div>
            <h3>Expected delivery time</h3>
            <p>20 - 30 min</p>
          </div>
          <div>
            <h3>Delivery address</h3>
            <p>1531 Essendene Avenue V2S 2H7 Abbotsford British Columbia</p>
          </div>
        </DeliveryInfo>
      </FlexContainer>

      <TotalOverviewContainer>
        <TotalOverview />
        <PrimaryButton onClick={nextStep} type="button">
          Next
        </PrimaryButton>
      </TotalOverviewContainer>

      <GoBackButtonContainer>
        <GoBackButton onClick={backStep} />
      </GoBackButtonContainer>
    </Container>
  );
};

export default Overview;
