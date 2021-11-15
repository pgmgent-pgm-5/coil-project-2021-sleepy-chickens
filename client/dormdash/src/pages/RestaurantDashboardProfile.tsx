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
  image: yup.string().required("Required"),
});

interface Props {}

const RestaurantDashboardProfile = (props: Props) => {
  return (
    <AdminLayout>
      <Helmet>
        <title>Dormdashboard | Profile</title>
        <meta name="description" content="edit profile" />
      </Helmet>

      <Container>
        <Image>
          <h1>Profile</h1>
          <img src="https://source.unsplash.com/1600x900/?restaurant" alt="" />
        </Image>
        <FormikWrapper>
          <Formik
            // Veranderen naar values van current user
            initialValues={{
              restaurantName: "Hawaiian Poké Bowl",
              description:
                "Hawaiian Poké Bowl is thé revolution in healthy food. Bowls packed with flavour combining the freshest ingredients, homemade dressings and a wide array of toppings. The true taste of vacation in a bowl!",
              image: "",
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
    </AdminLayout>
  );
};

export default RestaurantDashboardProfile;
