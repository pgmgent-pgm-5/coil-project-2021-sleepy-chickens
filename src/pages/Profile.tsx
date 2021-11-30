import React from "react";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../components/form/PrimaryButton";
import InputField from "../components/form/InputField";
import { Helmet } from "react-helmet";
import { useUser } from "../context/AuthenticationContext";
import { useMutation, useQuery } from "@apollo/client";
import { PROFILE_DETAIL, UPDATE_PROFILE } from "../graphql/users";

import defaultImg from '../assets/default_profile.png';
import { useHistory } from "react-router-dom";

const Container = styled.div`
  margin-top: 2rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    margin-top: 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 20%;
    margin-right: 1rem;
    margin-bottom: 0rem;
  }

  img {
    border-radius: ${(props) => props.theme.borderRadius.circle};
    width: 10rem;
    height: 10rem;
    margin-bottom: 2rem;
  }

  button {
    border-radius: ${(props) => props.theme.borderRadius.small};
    padding: 0.25rem 0.75rem;
    background-color: ${(props) => props.theme.colors.secondaryAccentColor};
    color: ${(props) => props.theme.colors.primaryAccentColor};
    border: 2px solid ${(props) => props.theme.colors.secondaryAccentColor};
    cursor: pointer;
    transition: ${(props) => props.theme.transition.normal};

    &:hover {
      background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
      color: ${(props) => props.theme.colors.secondaryAccentColor};
    }
  }
`;
const FormContainer = styled.div`
  @media (min-width: ${(props) => props.theme.width.small}) {
    width: 60%;
    max-width: 40rem;
    margin-left: 1rem;
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
});

interface Props {}

const Profile = (props: Props) => {
  const userContext = useUser();
  const history = useHistory();
  console.log('userId', userContext?.state.id)
  
  const { error, loading, data, refetch } = useQuery(PROFILE_DETAIL, {
    variables: { id: Number(userContext?.state.id) },
  });

  const [updateProfile, {data:updateData, loading: updateLoading, error:updateError}] = useMutation(UPDATE_PROFILE);

  const handleLogout = async () => {
    const request = await fetch('http://localhost:3000/logout', {
      method: 'GET',
      credentials: 'include',
    });

    if (request.status === 200) {
      userContext!.dispatch({
        type: 'setUser',
        payload: {
          id: undefined,
          email: undefined,
        },
      });
      history.push('/');
    }
  };



  if (error ) return <p>{error.message}</p>
  if (updateError ) return <p>{updateError.message}</p>

  if (loading || updateLoading) return <div>Loading ...</div>;


  return (
    <BaseLayout>
      { data && (
        <>
          <Helmet>
            <title>Dormdash | Profile</title>
            <meta name="description" content="See your profile" />
          </Helmet>

          <Container>
            <Image>
              <img src={data.findOneUser.picture ? `./assets/${data.findOneUser.picture}` : defaultImg} alt={data.findOneUser.firstName} />
              <button onClick={() => handleLogout()}>Logout</button>
            </Image>
            <FormContainer>
              <Formik
                // Veranderen naar values van current user
                initialValues={{
                  firstName: data.findOneUser.firstName,
                  lastName: data.findOneUser.lastName,
                  email: data.findOneUser.email,
                  phone: data.findOneUser.phone,
                }}
                onSubmit={(formData, { setSubmitting }) => {
                  setSubmitting(true);

                  updateProfile({
                    variables: {
                      id: Number(userContext?.state.id),
                      firstName: formData.firstName, 
                      lastName: formData.lastName,
                      email: formData.email,
                      phone: formData.phone,
                      role: 'student',
                    },
                    refetchQueries: [
                      {
                        query: PROFILE_DETAIL,
                        variables: { id: Number(userContext?.state.id)}
                      }
                    ]
                  })

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
                      placeholder={"Firstname"}
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
                    <PrimaryButton disabled={isSubmitting} type="submit">
                      Update
                    </PrimaryButton>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                  </form>
                )}
              </Formik>
            </FormContainer>
          </Container>
        </>
      )}
    </BaseLayout>
  );
};

export default Profile;
