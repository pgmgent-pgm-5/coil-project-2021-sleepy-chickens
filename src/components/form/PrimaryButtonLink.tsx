import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 100%;

  margin: 2rem 0;
  padding: 0.25rem 1rem;
  height: 2.5rem;

  background-color: ${(props) => props.theme.colors.primaryAccentColor};
  border-radius: ${(props) => props.theme.borderRadius.normal};
  border: 3px solid ${(props) => props.theme.colors.primaryAccentColor};
  transition: ${(props) => props.theme.transition.normal};
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors.primaryAccentColor};

    a {
      color: ${(props) => props.theme.colors.primaryAccentColor};
    }
  }
`;

interface PrimaryButtonLinkProps {
  children: React.ReactNode;
  link: string;
}

const PrimaryButtonLink = ({ children, link }: PrimaryButtonLinkProps) => {
  return (
    <Button>
      <Link to={link}>{children}</Link>
    </Button>
  );
};

export default PrimaryButtonLink;
