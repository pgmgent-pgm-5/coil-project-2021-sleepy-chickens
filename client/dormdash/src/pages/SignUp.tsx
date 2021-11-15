import styled from "styled-components";
import { BaseLayout } from "../layouts";
import { Formik, Field } from "formik";
import * as yup from "yup";
import InputField from "../components/form/InputField";
import PrimaryButton from "../components/form/PrimaryButton";
import backgroundImage from "../assets/SignUpBg.png";
import SignInLink from "../components/form/SignInLink";
import { Helmet } from "react-helmet";

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

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
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
        <Helmet>
          <title>Dormdash | Sign Up</title>
          <meta name="description" content="Sign up to DormDash" />
        </Helmet>
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
                  as={InputField}
                  name="firstName"
                  placeholder="Firstname"
                />
                <Field
                  type="text"
                  as={InputField}
                  name="lastName"
                  placeholder="Lastname"
                />
                <Field
                  type="email"
                  as={InputField}
                  name="email"
                  placeholder="E-mail"
                />
                <Field
                  type="tel"
                  as={InputField}
                  name="tel"
                  placeholder="Telephone number"
                />
                <Field
                  type="password"
                  as={InputField}
                  name="password"
                  placeholder="Password"
                />
                <Field
                  type="text"
                  as={InputField}
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

          <SignInLink />
        </FormWrapper>

        <Image src={backgroundImage} alt="Woman with takeout container" />
      </Container>
    </BaseLayout>
  );
};

export default SignUp;
