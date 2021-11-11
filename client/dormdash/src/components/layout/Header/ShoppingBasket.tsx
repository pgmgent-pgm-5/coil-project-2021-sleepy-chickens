import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import styled from "styled-components";

const Button = styled.button`
  margin-right: 1rem;
  margin-top: 0.65rem;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: ${(props) => props.theme.borderRadius.circle};
  cursor: pointer;
  background: ${(props) => props.theme.colors.secondaryAccentColor};
  color: ${(props) => props.theme.colors.white};
  border: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 3rem;
    height: 3rem;
    font-size: ${(props) => props.theme.fontSizes.emedium};
  }
`;

interface Props {}

const ShoppingBasket = (props: Props) => {
  return (
    <Button>
      <FiShoppingBag />
    </Button>
  );
};

export default ShoppingBasket;
