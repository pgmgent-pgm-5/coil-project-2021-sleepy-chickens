import styled from "styled-components";
import * as Routes from "../../../routes";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import ShoppingBasketButton from "./ShoppingBasketButton";
import ShoppingBasket from "../../ShoppingBasket/ShoppingBasket";

interface Props {
  open: boolean;
}

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
  max-width: ${(props) => props.theme.width.large};
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div<Props>`
  display: flex;
  align-items: center;
  z-index: 30;
  position: relative;

  img {
    width: 4rem;

    @media (min-width: ${(props) => props.theme.width.small}) {
      width: 6rem;
    }
  }

  h1 {
    display: none;
    color: ${(props) => props.theme.colors.secondaryAccentColor};
    color: ${({ open }) => (open ? "white" : "")};

    @media (min-width: ${(props) => props.theme.width.small}) {
      display: block;
      font-style: italic;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
`;

const Header = () => {
  const location = useRouteMatch();
  const [open, setOpen] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);

  const handleMenuButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenBasket(!openBasket);
  };

  useEffect(() => {
    if (open || openBasket) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else if (!open) {
      document.body.style.overflow = "auto";
    }
  }, [open, openBasket]);

  return (
    <HeaderContainer>
      <Wrapper>
        <FlexContainer>
          <Link to={Routes.LANDING}>
            <Logo open={open}>
              <img src={logo} alt="logo" />
              <h1>Dormdash</h1>
            </Logo>
          </Link>

          {location.path !== Routes.CHECKOUT && (
            <FlexContainer>
              {location.path === Routes.DETAIL_PAGE && (
                <>
                  <ShoppingBasketButton onClick={handleBasket} />
                  <ShoppingBasket open={openBasket} onClick={handleBasket} />
                </>
              )}
              <MenuButton onClick={handleMenuButton} open={open} />
            </FlexContainer>
          )}

          <Navigation open={open} />
        </FlexContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
