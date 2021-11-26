import React from "react";
import styled from "styled-components";

const GoBackButtonStyled = styled.button`
  background: none;
  border: none;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-decoration: underline;
  cursor: pointer;
`;

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const GoBackButton = ({ onClick }: Props) => {
  return <GoBackButtonStyled onClick={onClick}>Go back</GoBackButtonStyled>;
};

export default GoBackButton;
