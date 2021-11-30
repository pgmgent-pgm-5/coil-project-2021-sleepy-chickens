import styled from "styled-components";
import { BaseLayout } from "../layouts";
import { Formik, Field } from "formik";
import * as yup from "yup";
import InputField from "../components/form/InputField";
import PrimaryButton from "../components/form/PrimaryButton";
import backgroundImage from "../assets/SignUpBg.png";
import SignInLink from "../components/form/SignInLink";
import { Helmet } from "react-helmet";
import { useUser } from "../context/AuthenticationContext";
import { useHistory } from "react-router-dom";

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
  phone: yup
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
  const handleUserContext = useUser();
  const history = useHistory();

  const handleLoginContext = ({ email, id }: { email: string; id: number }) => {
    handleUserContext!.dispatch({
      type: "setUser",
      payload: { email: email, id: id },
    });
    return history.push("/");
  };
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
              phone: "",
              password: "",
              studentNumber: "",
            }}
            onSubmit={async (data, { setSubmitting }) => {
              setSubmitting(true);
              const newUser = { role: "student", ...data };

              const request = await fetch(
                "https://dormdash.onrender.com/signup",
                {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newUser),
                }
              );
              const response = await request.json();

              if (response.statusCode === 401) {
                // TODO: Handle error code (unauthorized request == wrong password/username combination);
                return;
              }

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
                  name="phone"
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
