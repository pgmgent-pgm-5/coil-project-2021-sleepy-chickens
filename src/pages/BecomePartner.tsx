import styled from "styled-components";
import { BaseLayout } from "../layouts";
import * as yup from "yup";

import backgroundImage from "../assets/BecomePartnerBg.png";
import { Field, Formik } from "formik";
import InputField from "../components/form/InputField";
import PrimaryButton from "../components/form/PrimaryButton";
import SignInLink from "../components/form/SignInLink";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { useUser } from "../context/AuthenticationContext";
import { useLazyQuery, useMutation } from "@apollo/client";
import Textarea from "../components/form/Textarea";
import { CREATE_RESTAURANT } from "../graphql/restaurants";
import InputFileField from "../components/form/InputFileField";

const Container = styled.div`
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


interface e {
  e: React.ChangeEvent<HTMLInputElement>
  onChange: () => void;
}

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object({
  restaurantName: yup.string().required("Required"),
  typeOfCuisine: yup.string().required("Required"),
  description: yup.string().required("Required"),
  logo: yup.string().required("Required"),
  image: yup.string().required("Required"),
  deliveryTime: yup.number().required("Required"),
  street: yup.string().required("Required"),
  streetnumber: yup.number().required("Required"),
  city: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
  province: yup.string().required("Required"),
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
});

const BecomePartner = () => {
  const handleUserContext = useUser();
  const history = useHistory();

  const [createRestaurant, { error, loading, data }] =
    useMutation(CREATE_RESTAURANT);

  const handleLoginContext = ({ email, id }: { email: string; id: number }) => {
    handleUserContext!.dispatch({
      type: "setUser",
      payload: { email: email, id: id },
    });
    return history.push(`/dashboard-restaurant/`);
  };

  let restaurantPicture:string;

  return (
    <BaseLayout>
      <Container>
        <Helmet>
          <title>Dormdash | Partner</title>
          <meta name="description" content="Become a partner" />
        </Helmet>
        <FormWrapper>
          <h1>Become a partner</h1>
          <Formik
            initialValues={{
              restaurantName: "",
              typeOfCuisine: "",
              description: "",
              logo: "",
              image: "",
              deliveryTime: 0,
              street: "",
              streetnumber: 0,
              city: "",
              postalCode: "",
              province: "",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              password: "",
            }}
            onSubmit={async (formData, { setSubmitting }) => {
              setSubmitting(true);

              const newUser = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                role: "restaurant",
                studentNumber: null,
              };

              const request = await fetch(
                "https://dormdash-server.herokuapp.com/signup",
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

                return alert("Wrong email/password combination!");
              }
              const imgData = new FormData();
              if(formData.logo !== null) {
                imgData.append('file', formData.logo)

              }

              const uploadRequest = await fetch(
                "https://dormdash-server.herokuapp.com/uploadLogo",
                {
                  method: "POST",
                  headers: new Headers({Accept: "application/json"}),
                  body: imgData,
                }
              );
              const uploadResponse = await uploadRequest.json();

              const restaurantImgData = new FormData();

              if(formData.image !== null && formData.image !== '') {
                restaurantImgData.append('file', formData.image)

                const uploadRestaurantPictureRequest = await fetch(
                  "https://dormdash-server.herokuapp.com/uploadRestaurantPicture",
                  {
                    method: "POST",
                    headers: new Headers({Accept: "application/json"}),
                    body: restaurantImgData,
                  }
                );
                const uploadRestaurantPictureResponse = await uploadRestaurantPictureRequest.json();

                restaurantPicture = uploadRestaurantPictureResponse.imagePath
              }

              if (response.statusCode === 401) {

                return alert("Something went wrong!");
              }

              let catId;
              switch (formData.typeOfCuisine) {
                case "sushi":
                  catId = 1;
                  break;
                case "hamburgers":
                  catId = 2;
                  break;
                case "pizza":
                  catId = 3;
                  break;
                case "pita":
                  catId = 4;
                  break;
                case "pasta":
                  catId = 5;
                  break;

                default:
                  catId = 5;
                  break;
              }

              createRestaurant({
                variables: {
                  userId: Number(response.id),
                  categoryId: Number(catId),
                  name: formData.restaurantName,
                  description: formData.description,
                  logo: uploadResponse.imagePath,
                  picture: restaurantPicture,
                  street: formData.street,
                  streetnumber: Number(formData.streetnumber),
                  postalcode: formData.postalCode,
                  city: formData.city,
                  province: formData.province,
                  deliveryTime: formData.deliveryTime,
                  deliveryTimes: " monday... ",
                },
              });

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
              setFieldValue,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  type="text"
                  as={InputField}
                  name="restaurantName"
                  placeholder="Restaurant name"
                />
                {/* Nog te veranderen in andere component */}
                <Field
                  type="text"
                  as={InputField}
                  name="typeOfCuisine"
                  placeholder="Type of cuisine"
                />
                <Field
                  type="textarea"
                  as={Textarea}
                  name="description"
                  placeholder="Description"
                />
                {/* Nog te veranderen in andere component */}
                {/* <Field
                  type="file"
                  as={InputFileField}
                  name="logo"
                /> */}
                <label>
                  <p>Logo</p>
                  <input 
                    type="file"
                    name="logo"
                    onChange={(e) => { 
                     if (e.target.files) {
                      setFieldValue('logo',e.target.files[0])
                     } 
                      }
                    }
                  />
                </label>
                <label>
                  <p>Restaurant banner image</p>
                  <input 
                    type="file"
                    name="image"
                    onChange={(e) => { 
                     if (e.target.files) {
                      setFieldValue('image',e.target.files[0])
                     } 
                      }
                    }
                  />
                </label>
                <Field
                  type="number"
                  as={InputField}
                  name="deliveryTime"
                  placeholder="deliveryTime"
                />
                <Field
                  type="text"
                  as={InputField}
                  name="street"
                  placeholder="Street"
                />
                <Field
                  type="number"
                  as={InputField}
                  name="streetnumber"
                  placeholder="nr."
                />
                <Field
                  type="text"
                  as={InputField}
                  name="city"
                  placeholder="City"
                />
                <Field
                  type="text"
                  as={InputField}
                  name="postalCode"
                  placeholder="Postal-code"
                />
                <Field
                  type="text"
                  as={InputField}
                  name="province"
                  placeholder="Province"
                />
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
                <PrimaryButton disabled={isSubmitting} type="submit">
                  Submit
                </PrimaryButton>
              </form>
            )}
          </Formik>

          <SignInLink />
        </FormWrapper>
        <Image
          src={backgroundImage}
          alt="Relaxed customer sitting at home ordering food through Dormdash"
        />
      </Container>
    </BaseLayout>
  );
};

export default BecomePartner;
