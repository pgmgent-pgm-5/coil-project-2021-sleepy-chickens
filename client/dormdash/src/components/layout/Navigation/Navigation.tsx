import styled from "styled-components";
import * as Routes from "../../../routes";
import { Link } from "react-router-dom";
import Headquarters from "../Partial/Headquarters";
import Contact from "../Partial/Contact";

interface Props {
  open: boolean;
}

const Container = styled.div<Props>`
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-150%)")};
  transition: all 0.2s ease;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${(props) => props.theme.colors.primaryAccentColor};
  padding: 0 2rem;
  padding-top: 8rem;
  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 6rem;
    padding-top: 10rem;
  }
`;

const NavContainer = styled.div<Props>`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 2s ease;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 70rem;
    margin: 0 auto;
  }
`;
const Nav = styled.nav`
  margin-bottom: 3rem;
  @media (min-width: ${(props) => props.theme.width.medium}) {
  }

  li {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: ${(props) => props.theme.fontWeights.bold};

    @media (min-width: ${(props) => props.theme.width.small}) {
      font-size: ${(props) => props.theme.fontSizes.elarge};
    }

    a {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const InfoContainer = styled.div`
  @media (min-width: ${(props) => props.theme.width.medium}) {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.width.large}) {
    left: 70%;
  }
`;

const CallToAction = styled.div<Props>`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 2s ease;
  margin-top: 5rem;
  margin-bottom: 3rem;
  @media (min-width: ${(props) => props.theme.width.medium}) {
    max-width: 70rem;
    margin: 0 auto;
    margin-top: 3rem;
  }

  ul {
    @media (min-width: ${(props) => props.theme.width.medium}) {
      display: flex;
    }

    li {
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.medium};
      @media (min-width: ${(props) => props.theme.width.medium}) {
        margin-right: 3rem;
      }

      a {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;

const Navigation = ({ open }: Props) => {
  return (
    <Container open={open}>
      <NavContainer open={open}>
        <Nav>
          <ul>
            <li>
              <Link to={Routes.LANDING}>Home</Link>
            </li>
            <li>
              <Link to="">Profile</Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
          </ul>
        </Nav>

        <InfoContainer>
          <Headquarters />
          <Contact />
        </InfoContainer>
      </NavContainer>
      <CallToAction open={open}>
        <ul>
          <li>
            <Link to={Routes.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            <Link to="">Become a partner</Link>
          </li>
          <li>
            <Link to="">Become a driver</Link>
          </li>
        </ul>
      </CallToAction>
    </Container>
  );
};

export default Navigation;
