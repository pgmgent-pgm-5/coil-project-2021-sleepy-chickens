import styled from 'styled-components';

import FooterNavigation from './FooterNavigation';
import Contact from './Contact';
import Headquarters from './Headquarters';

import logo from "../../../assets/logo.svg";

const Container = styled.div`
  background-color: ${props => props.theme.colors.primaryAccentColor };
  padding: 1.5rem 1.5rem 6rem 1.5rem;

  @media (min-width: ${props => props.theme.width.small}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: ${props => props.theme.width.medium}) {
    padding: 1.5rem 3rem 6rem 3rem;
  }
`;

const Logo = styled.img`
  margin-right: auto;
  height: 8rem;

  @media (min-width: ${props => props.theme.width.medium}) {
    margin-right: 0;
  }
`;

export const FooterTop = () => {
  return (
    <Container>
      <FooterNavigation />
      <Contact />
      <Headquarters />
      <Logo src={logo} alt="logo"/>
    </Container>
  )
}

