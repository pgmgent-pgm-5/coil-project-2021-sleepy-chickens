import React from "react";

import styled from "styled-components";

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.secondaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryAccentColor};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  transition: ${(props) => props.theme.transition.normal};

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ShoppingBasketActionButton = ({ children, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ShoppingBasketActionButton;
