import styled from "styled-components";
import { BaseLayout } from "../layouts";
import * as yup from "yup";

import backgroundImage from "../assets/BecomePartnerBg.png";
import { Field, Formik } from "formik";
import TextField from "../components/form/TextField";
import PrimaryButton from "../components/form/PrimaryButton";
import SignInLink from "../components/form/SignInLink";

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
    left: 13%;
  }
`;

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object({
  restaurantName: yup.string().required("Required"),
  typeOfCuisine: yup.string().required("Required"),
  logo: yup.string().required("Required"),
  streetAndNumber: yup.string().required("Required"),
  city: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
  province: yup.string().required("Required"),
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
});

const BecomePartner = () => {
  return (
    <BaseLayout>
      <Container>
        <FormWrapper>
          <h1>Become a partner</h1>
          <Formik
            initialValues={{
              restaurantName: "",
              typeOfCuisine: "",
              logo: "",
              streetAndNumber: "",
              city: "",
              postalCode: "",
              province: "",
              firstName: "",
              lastName: "",
              email: "",
              tel: "",
              password: "",
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
                  name="restaurantName"
                  placeholder="Restaurant name"
                />
                {/* Nog te veranderen in andere component */}
                <Field
                  type="text"
                  as={TextField}
                  name="typeOfCuisine"
                  placeholder="Type of cuisine"
                />
                {/* Nog te veranderen in andere component */}
                <Field
                  type="file"
                  as={TextField}
                  name="logo"
                  placeholder="Logo"
                />
                <Field
                  type="text"
                  as={TextField}
                  name="streetAndNumber"
                  placeholder="Street + nr."
                />
                <Field
                  type="text"
                  as={TextField}
                  name="city"
                  placeholder="City"
                />
                <Field
                  type="text"
                  as={TextField}
                  name="postalCode"
                  placeholder="Postal-code"
                />
                <Field
                  type="text"
                  as={TextField}
                  name="province"
                  placeholder="Province"
                />
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
                <PrimaryButton disabled={isSubmitting} type="submit">
                  Submit
                </PrimaryButton>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </form>
            )}
          </Formik>
        </FormWrapper>

        <Image src={backgroundImage} />
      </Container>
    </BaseLayout>
  );
};

export default BecomePartner;
