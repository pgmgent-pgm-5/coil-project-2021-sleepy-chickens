import styled from "styled-components";
import * as Routes from "../../../routes";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import MenuButton from "./MenuButton";

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    height: 6rem;
  }

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index: 16;
  position: relative;

  img {
    width: 4rem;

    @media (min-width: ${(props) => props.theme.width.small}) {
      width: 6rem;
    }
  }

  h1 {
    display: none;

    @media (min-width: ${(props) => props.theme.width.small}) {
      display: block;
      font-style: italic;
      color: ${(props) => props.theme.colors.secondaryAccentColor};
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <FlexContainer>
          <Link to={Routes.LANDING}>
            <Logo>
              <img src={logo} alt="logo" />
              <h1>Dormdash</h1>
            </Logo>
          </Link>

          <MenuButton onClick={handleMenuButton} open={open} />

          <Navigation open={open} />
        </FlexContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
