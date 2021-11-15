import React from "react";
import styled from "styled-components";
import RestaurantInfo from "./RestaurantInfo";
import ShareReview from "./ShareReview";

const Container = styled.div<ContainerOpen>`
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

interface Props {
  id?: string;
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
  street: string;
  streetnumber: number;
  postalcode: number | string;
  city: string;
  province: string;
}

interface ContainerOpen {
  open: boolean;
}

const Modal = ({
  onClick,
  open,
  id,
  name,
  street,
  streetnumber,
  postalcode,
  city,
  province,
}: Props) => {
  return (
    <Container open={open}>
      <BlurContainer></BlurContainer>
      <ModalContent>
        {id && id === "info" && (
          <RestaurantInfo
            onClick={onClick}
            name={name}
            street={street}
            streetnumber={streetnumber}
            postalcode={postalcode}
            city={city}
            province={province}
          />
        )}
        {id && id === "review" && <ShareReview onClick={onClick} />}
      </ModalContent>
    </Container>
  );
};

export default Modal;
