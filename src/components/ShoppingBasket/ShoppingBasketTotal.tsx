import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.secondaryAccentColor};
  color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius.normal};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface Props {
  total?: number
}

const ShoppingBasketTotal = ({total= 0.00}: Props) => {
  return (
    <Container>
      <div>
        <p>Subtotal</p>
        <p>$ {total}
        </p>
      </div>
      <div>
        <p>Delivery fee</p>
        <p>$ 4.00</p>
      </div>
      <div>
        <p>Total</p>
        <p>$ {total + 4}</p>
      </div>
    </Container>
  );
};

export default ShoppingBasketTotal;
