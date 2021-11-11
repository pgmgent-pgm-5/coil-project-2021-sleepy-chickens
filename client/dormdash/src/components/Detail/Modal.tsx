import React from "react";
import styled from "styled-components";
import RestaurantInfo from "./RestaurantInfo";
import ShareReview from "./ShareReview";

interface Props {
  id?: string;
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Container = styled.div<Props>`
  display: ${({ open }) => (open ? "block" : "none")};
`;

const BlurContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(23, 106, 164, 0.48);
  z-index: 100;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.normal};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: calc(100% - 2rem);
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    min-width: 25rem;
    max-width: 35rem;
    width: 50%;
  }
`;

const Modal = ({ onClick, open, id }: Props) => {
  console.log(id);

  return (
    <Container open={open}>
      <BlurContainer></BlurContainer>
      <ModalContent>
        {id && id === "info" && <RestaurantInfo onClick={onClick} />}
        {id && id === "review" && <ShareReview onClick={onClick} />}
      </ModalContent>
    </Container>
  );
};

export default Modal;
