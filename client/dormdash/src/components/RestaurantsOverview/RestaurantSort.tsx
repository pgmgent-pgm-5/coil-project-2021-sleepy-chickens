import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";

interface Props {
  open: boolean;
}

const Container = styled.div``;

const TitleContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    transform: ${({ open }) => (open ? "rotate(180deg)" : "0")};
    transition: all 0.2s ease;
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerChips = styled.div<Props>`
  height: ${({ open }) => (open ? "auto" : "0")};
  margin-top: ${({ open }) => (open ? "1rem" : "0")};
  transition: all 0.4s ease;

  label {
    opacity: ${({ open }) => (open ? "1" : "0")};
    margin: ${({ open }) => (open ? "0.5rem 0" : "0")};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;

    input {
      margin-right: 1rem;
    }
  }
`;

const RestaurantSort = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Container>
      <TitleContainer onClick={handleToggle} open={open}>
        <h3>Sort</h3>
        <span>
          <MdExpandMore />
        </span>
      </TitleContainer>
      <ContainerChips open={open}>
        <label>
          <input type="radio" name="alphabetical" />
          <span>Alphabetical</span>
        </label>
        <label>
          <input type="radio" name="rating" />
          <span>Rating</span>
        </label>
        <label>
          <input type="radio" name="delivery_time" />
          <span>Delivery time</span>
        </label>
      </ContainerChips>
    </Container>
  );
};

export default RestaurantSort;
