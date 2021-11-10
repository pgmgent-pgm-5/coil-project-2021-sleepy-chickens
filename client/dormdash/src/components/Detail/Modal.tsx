import React from "react";
import styled from "styled-components";
import RestaurantInfo from "./RestaurantInfo";

interface Props {
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Container = styled.div<Props>`
  display: ${({ open }) => (open ? "block" : "none")};
`;

const BlurContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(23, 106, 164, 0.48);
  z-index: 100;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.normal};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: calc(100% - 2rem);
  padding: 1rem;
`;

const Modal = ({ onClick, open }: Props) => {
  return (
    <Container open={open}>
      <BlurContainer></BlurContainer>
      <ModalContent>
        <RestaurantInfo open={open} onClick={onClick} />
      </ModalContent>
    </Container>
  );
};

export default Modal;
