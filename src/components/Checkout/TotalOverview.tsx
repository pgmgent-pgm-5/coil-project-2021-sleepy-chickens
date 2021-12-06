import React from "react";
import styled from "styled-components";
import ShoppingBasketTotal from "../ShoppingBasket/ShoppingBasketTotal";

const Container = styled.div`
  h2 {
    margin-bottom: 2rem;
  }
`;

interface Props {
  total: number
}

const TotalOverview = ({total}: Props) => {
  return (
    <Container>
      <h2>Total price</h2>
      <ShoppingBasketTotal total={total} />
    </Container>
  );
};

export default TotalOverview;
