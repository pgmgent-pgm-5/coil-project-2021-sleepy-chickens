import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const Button = styled.button<Props>`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalCloseButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <GrClose />
    </Button>
  );
};

export default ModalCloseButton;
