import React from "react";
import styled from "styled-components";
import PrimaryButtonLink from "../form/PrimaryButtonLink";
import * as Routes from "../../routes";
import ThanksForOrder from "../../assets/ThanksForOrder.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    z-index: -1;
    width: 100%;
    max-width: 40rem;
    margin-top: 2rem;
    margin-bottom: 4rem;

    @media (min-width: ${(props) => props.theme.width.small}) {
      margin-top: -4rem;
      margin-bottom: 0rem;
    }

    @media (min-width: ${(props) => props.theme.width.medium}) {
      margin-top: -7rem;
      margin-bottom: 0rem;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 30rem;
`;

interface Props {}

const Confirm = (props: Props) => {
  return (
    <Container>
      <Image>
        <img src={ThanksForOrder} alt="Satisfied delivery woman on a bike" />
      </Image>
      <Content>
        <h2>Thansk for your order!</h2>
        <p>Your order will be there within 20 - 30 minutes</p>
        <PrimaryButtonLink link={Routes.LANDING}>
          Back to home
        </PrimaryButtonLink>
      </Content>
    </Container>
  );
};

export default Confirm;
