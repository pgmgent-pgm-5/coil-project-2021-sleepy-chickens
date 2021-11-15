import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import * as Routes from "../../../routes";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

const FooterStyle = styled.footer`
  padding-top: 3rem;
  max-width: ${(props) => props.theme.width.elarge};
  margin: 0 auto;
`;

const Footer = () => {
  const location = useRouteMatch();
  return (
    <>
      {location.path !== Routes.CHECKOUT && (
        <FooterStyle>
          <FooterTop />
          <FooterBottom />
        </FooterStyle>
      )}
    </>
  );
};

export default Footer;
