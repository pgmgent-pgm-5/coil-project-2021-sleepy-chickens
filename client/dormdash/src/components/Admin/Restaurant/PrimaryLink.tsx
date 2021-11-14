import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  a {
    transition: ${(props) => props.theme.transition.normal};
    border-bottom: 2px solid
      ${(props) => props.theme.colors.secondaryAccentColor};
    color: ${(props) => props.theme.colors.secondaryAccentColor};

    &:hover {
      padding-bottom: 0.5rem;
    }
  }
`;

interface LinkProps {
  children: React.ReactNode;
  link: string;
}

const PrimaryLink = ({ children, link }: LinkProps) => {
  return (
    <Container>
      <Link to={link}>{children}</Link>
    </Container>
  );
};

export default PrimaryLink;
