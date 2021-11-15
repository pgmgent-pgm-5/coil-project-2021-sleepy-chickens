import React from "react";
import styled from "styled-components";
import { BaseLayout } from "../layouts";
import { Formik, Field } from "formik";
import * as yup from "yup";
import * as Routes from "../routes";

import backgroundImage from "../assets/SignInBg.png";
import InputField from "../components/form/InputField";
import PrimaryButton from "../components/form/PrimaryButton";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  margin-top: -3rem;
`;

const FormWrapper = styled.div`
  z-index: 1;
  position: relative;
  margin-top: 8rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.small}) {
    max-width: 25rem;
  }

  h1 {
    color: ${(props) => props.theme.colors.primaryAccentColor};
    margin-bottom: 5rem;
  }
`;

const Image = styled.img`
  display: none;

  @media (min-width: ${(props) => props.theme.width.small}) {
    display: block;
    width: 100%;
    position: absolute;
    top: 53.5%;
    transform: translateY(-55%);
    left: 20%;
  }
`;

const SignUpLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  //const history = useHistory();
  return (
    <BaseLayout>
      <Helmet>
        <title>Dormdash | Sign In</title>
        <meta name="description" content="Sign in to your DormDash account" />
      </Helmet>
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
              //history.push(Routes.LANDING);

              setSubmitting(false);
            }}
            validationSchema={validationSchema}
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
                  as={InputField}
                  name="email"
                  placeholder="E-mail"
                />
                <Field
                  type="input"
                  as={InputField}
                  name="password"
                  placeholder="Password"
                />
                <PrimaryButton disabled={isSubmitting} type="submit">
                  Submit
                </PrimaryButton>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </form>
            )}
          </Formik>
          <SignUpLink>
            <p>Don't have an account?</p>
            <Link to={Routes.SIGN_UP}>Sign up here</Link>
          </SignUpLink>
        </FormWrapper>

        <Image src={backgroundImage} alt="Woman with sushi rolls" />
      </Container>
    </BaseLayout>
  );
};

export default SignIn;
