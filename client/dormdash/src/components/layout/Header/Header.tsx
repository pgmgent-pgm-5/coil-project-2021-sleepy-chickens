import React from "react";
import styled from "styled-components";
import * as Routes from "../../../routes";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    height: 6rem;
  }
`;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

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

const MenuButton = styled.button`
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
    display: block;

    @media (min-width: ${(props) => props.theme.width.small}) {
      height: 0.2rem;
    }
  }
`;

const Header = () => {
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

          <MenuButton>
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        </FlexContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
