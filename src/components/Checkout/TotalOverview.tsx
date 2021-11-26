import React from "react";
import styled from "styled-components";
import ShoppingBasketTotal from "../ShoppingBasket/ShoppingBasketTotal";

const Container = styled.div`
  h2 {
    margin-bottom: 2rem;
  }
`;

interface Props {}

const TotalOverview = (props: Props) => {
  return (
    <Container>
      <h2>Total price</h2>
      <ShoppingBasketTotal />
    </Container>
  );
};

export default TotalOverview;
