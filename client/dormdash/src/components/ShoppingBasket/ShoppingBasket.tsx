import React from "react";
import styled from "styled-components";
import ModalCloseButton from "../Detail/ModalCloseButton";

const BlurContainer = styled.div<Props>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(23, 106, 164, 0.48);
  z-index: 100;
  backdrop-filter: blur(5px);
`;

const Container = styled.div<Props>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 30rem;
  }
`;

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

interface Props {
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ShoppingBasket = ({ onClick, open }: Props) => {
  return (
    <>
      <BlurContainer open={open}></BlurContainer>
      <Container open={open}>
        <FlexTitle>
          <h2>My basket</h2>
          <ModalCloseButton onClick={onClick} />
        </FlexTitle>
      </Container>
    </>
  );
};

export default ShoppingBasket;
