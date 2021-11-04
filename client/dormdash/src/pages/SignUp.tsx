import React from "react";
import styled from "styled-components";
import { BaseLayout } from "../layouts";
import * as Routes from "../routes";
import { Formik, Field } from "formik";
import * as yup from "yup";
import TextField from "../components/form/TextField";
import PrimaryButton from "../components/form/PrimaryButton";
import backgroundImage from "../assets/SignUpBg.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  //height: 100vh;
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
    margin-bottom: 2rem;
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

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email("Invalid email address").required("Required"),
  tel: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  studentNumber: yup.string().required("Student Cardnumber is required"),
});

const SignUp = () => {
  return (
    <BaseLayout>
      <Container>
        <FormWrapper>
          <h1>Sign Up</h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              tel: "",
              password: "",
              studentNumber: "",
            }}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);

              // async call naar api
              console.log(data);

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
                  type="text"
                  as={TextField}
                  name="firstName"
                  placeholder="Firstname"
                />
                <Field
                  type="text"
                  as={TextField}
                  name="lastName"
                  placeholder="Lastname"
                />
                <Field
                  type="email"
                  as={TextField}
                  name="email"
                  placeholder="E-mail"
                />
                <Field
                  type="tel"
                  as={TextField}
                  name="tel"
                  placeholder="Telephone number"
                />
                <Field
                  type="password"
                  as={TextField}
                  name="password"
                  placeholder="Password"
                />
                <Field
                  type="text"
                  as={TextField}
                  name="studentNumber"
                  placeholder="Student Cardnumber"
                />
                <PrimaryButton disabled={isSubmitting} type="submit">
                  Submit
                </PrimaryButton>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </form>
            )}
          </Formik>

          <SignUpLink>
            <p>Already have an account?</p>
            <Link to={Routes.SIGN_IN}>Sign in here</Link>
          </SignUpLink>
        </FormWrapper>

        <Image src={backgroundImage} />
      </Container>
    </BaseLayout>
  );
};

export default SignUp;
