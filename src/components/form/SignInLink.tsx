import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Routes from "../../routes";

const SignInLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

interface Props {}

const SignInLink = (props: Props) => {
  return (
    <SignInLinkContainer>
      <p>Already have an account?</p>
      <Link to={Routes.SIGN_IN}>Sign in here</Link>
    </SignInLinkContainer>
  );
};

export default SignInLink;
