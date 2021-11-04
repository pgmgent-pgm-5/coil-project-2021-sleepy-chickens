import React from "react";
import styled from "styled-components";

const Hamburger = styled.button<Props>`
  z-index: 15;
  margin-top: 0.65rem;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primaryAccentColor};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 3rem;
    height: 3rem;
  }

  span {
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    background-color: ${(props) => props.theme.colors.white};
    height: 0.15rem;
    border-radius: 0.5rem;
    width: 60%;
    transition: all 0.2s ease;

    @media (min-width: ${(props) => props.theme.width.small}) {
      height: 0.2rem;
    }

    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translateY(0.85rem)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translateY(-0.85rem)" : "rotate(0)"};
    }
  }
`;

interface Props {
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MenuButton = ({ onClick, open }: Props) => {
  return (
    <Hamburger onClick={onClick} open={open}>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};

export default MenuButton;
