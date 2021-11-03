import React from "react";
import styled from "styled-components";
import { BaseLayout } from "../layouts";
import backgroundImage from "../assets/SignInBg.png";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const FormWrapper = styled.div`
  z-index: 1;
  position: relative;
  margin-top: 5rem;
`;

const Image = styled.img`
  display: none;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    left: 20%;
  }
`;

const SignIn = () => {
  return (
    <BaseLayout>
      <Container>
        <FormWrapper>
          <h1>Welcome back</h1>
          <p>Coming soon</p>
        </FormWrapper>

        <Image src={backgroundImage} />
      </Container>
    </BaseLayout>
  );
};

export default SignIn;
