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
import { useUser } from "../context/AuthenticationContext";
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
  const history = useHistory();

  const handleUserContext = useUser();

  const handleLoginContext = ({ email, id }: { email: string; id: number }) => {
    handleUserContext!.dispatch({
      type: "setUser",
      payload: { email: email, id: id },
    });
    return history.push("/");
  };

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
            onSubmit={async (data, { setSubmitting }) => {
              setSubmitting(true);

              // TODO: change to path defined in .env or config file
              const request = await fetch("http://localhost:3000/login", {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              const response = await request.json();
              console.log(response);
              if (response.statusCode === 401) {
                // TODO: Handle error code (unauthorized request == wrong password/username combination);
                return;
              }
              // Correct login assumed
              handleLoginContext(response);

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
