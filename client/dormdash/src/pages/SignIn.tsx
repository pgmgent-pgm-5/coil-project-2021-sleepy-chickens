import React from "react";
import styled from "styled-components";
import { BaseLayout } from "../layouts";
import { Formik, Field } from "formik";

import backgroundImage from "../assets/SignInBg.png";
import TextField from "../components/form/TextField";
import PrimaryButton from "../components/form/PrimaryButton";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  z-index: 1;
  position: relative;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme.colors.primaryAccentColor};
  }
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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);

              // async call naar api
              console.log(data);

              setSubmitting(false);
            }}
          >
            {({
              values,
              handleSubmit,
              isSubmitting,
              handleChange,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  type="input"
                  as={TextField}
                  name="email"
                  placeholder="E-mail"
                />
                <Field
                  type="input"
                  as={TextField}
                  name="password"
                  placeholder="Password"
                />
                <PrimaryButton disabled={isSubmitting} type="submit">
                  Submit
                </PrimaryButton>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </form>
            )}
          </Formik>
        </FormWrapper>

        <Image src={backgroundImage} />
      </Container>
    </BaseLayout>
  );
};

export default SignIn;
