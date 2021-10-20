import styled from "styled-components";

import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";


const FooterStyle = styled.footer`
  padding-top: 3rem;
  max-width: ${props => props.theme.width.elarge};
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <FooterTop />
      <FooterBottom />
    </FooterStyle>
  )
}

export default Footer;
