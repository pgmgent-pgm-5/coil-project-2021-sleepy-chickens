import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";

interface Props {
  open: boolean;
}

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerChips = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ open }) => (open ? "0" : "auto")};
  margin-top: ${({ open }) => (open ? "0" : "1rem")};
  transition: all 0.4s ease;
`;

const Chip = styled.button<Props>`
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: all 0.2s ease;
  background-color: ${(props) => props.theme.colors.secondaryAccentColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border: none;
  padding: 0.25rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.large};
  margin-bottom: ${({ open }) => (open ? "0" : "0.5rem")};
  margin-right: 0.5rem;
  cursor: pointer;
`;

const RestaurantFilterCategories = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Container>
      <TitleContainer onClick={handleToggle}>
        <h3>Categories</h3>
        <span>
          <MdExpandMore />
        </span>
      </TitleContainer>
      <ContainerChips open={open}>
        <Chip open={open}>Pizza</Chip>
        <Chip open={open}>Pizza</Chip>
        <Chip open={open}>Pizza</Chip>
      </ContainerChips>
    </Container>
  );
};

export default RestaurantFilterCategories;
