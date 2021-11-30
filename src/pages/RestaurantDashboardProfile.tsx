import AdminLayout from "../layouts/AdminLayout";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../components/form/PrimaryButton";
import InputField from "../components/form/InputField";
import Textarea from "../components/form/Textarea";
import PrimaryLink from "../components/Admin/Restaurant/PrimaryLink";
import * as Routes from "../routes";
import { Helmet } from "react-helmet";
import { useUser } from "../context/AuthenticationContext";
import {
  GET_RESTAURANTDETAIL_BY_USERID,
  RESTAURANTS_DETAIL,
  UPDATE_RESTAURANT,
} from "../graphql/restaurants";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Container = styled.main`
  margin: 4rem auto;
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 3rem;
  }
`;

const Image = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    width: 40%;
  }

  img {
    border-radius: ${(props) => props.theme.borderRadius.normal};
    width: 100%;
    max-height: 20rem;
    margin-top: 1rem;

    @media (min-width: ${(props) => props.theme.width.medium}) {
      max-height: 15rem;
    }
  }
`;

const FormikWrapper = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    margin-left: 2rem;
    width: calc(60% - 2rem);
  }
`;

const LinkContainer = styled.div`
  width: 100%;
`;

const validationSchema = yup.object({
  restaurantName: yup.string().required("Required"),
  description: yup.string().required("Required"),
  image: yup.string(),
});

interface Props {}

const RestaurantDashboardProfile = (props: Props) => {
  const userContext = useUser();
  console.log("userId", userContext?.state.id);
  const userId: number | undefined = userContext?.state.id;

  const [restaurantDetailByUserId, { error, loading, data }] = useLazyQuery(
    GET_RESTAURANTDETAIL_BY_USERID
  );

  const [
    updateRestaurant,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_RESTAURANT);

  useEffect(() => {
    if (userId !== undefined) {
      console.log("useeffectuserid", userId);
      restaurantDetailByUserId({
        variables: {
          userId: userId,
        },
      });
    }
  }, [userId, updateData]);

  if (data) {
    console.log("data data", data);
    return (
      <AdminLayout>
        <Helmet>
          <title>Dormdashboard | Profile</title>
          <meta name="description" content="edit profile" />
        </Helmet>

        {data && (
          <Container>
            <Image>
              <h1>Profile</h1>
              <img
                src={`./assets/${data.getRestaurantByUserId.picture}`}
                alt=""
              />
            </Image>
            <FormikWrapper>
              <Formik
                // Veranderen naar values van current user
                initialValues={{
                  restaurantName: data.getRestaurantByUserId.name,
                  description: data.getRestaurantByUserId.description,
                  image: "",
                }}
                onSubmit={(formData, { setSubmitting }) => {
                  setSubmitting(true);
                  console.log("restaurantIDDD", data.getRestaurantByUserId.id);

                  updateRestaurant({
                    variables: {
                      id: data.getRestaurantByUserId.id,
                      name: formData.restaurantName,
                      description: formData.description,
                      picture: "default_menu.jpeg",
                    },
                    refetchQueries: [
                      {
                        query: RESTAURANTS_DETAIL,
                        variables: {
                          id: Number(data.getRestaurantByUserId.id),
                        },
                      },
                    ],
                  });

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
                      name="restaurantName"
                      placeholder={"Restaurant name"}
                    />
                    <Field
                      as={Textarea}
                      name="description"
                      placeholder="Description"
                    />
                    <Field
                      type="file"
                      as={InputField}
                      name="image"
                      placeholder="Restaurant banner image"
                    />
                    <PrimaryButton disabled={isSubmitting} type="submit">
                      Update
                    </PrimaryButton>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                  </form>
                )}
              </Formik>
            </FormikWrapper>
            <LinkContainer>
              <PrimaryLink link={Routes.DISHES}>Go back</PrimaryLink>
            </LinkContainer>
          </Container>
        )}
      </AdminLayout>
    );
  }
  //   else {
  //     return (
  //       <Redirect to={Routes.ERROR.replace(':errorMessage', 'You are not authenticated!')} />
  //     )
  //   }
};

export default RestaurantDashboardProfile;
