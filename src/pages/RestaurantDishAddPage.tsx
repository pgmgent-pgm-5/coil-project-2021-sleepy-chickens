import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../components/form/PrimaryButton";
import InputField from "../components/form/InputField";
import Textarea from "../components/form/Textarea";
import * as Routes from "../routes";
import PrimaryLink from "../components/Admin/Restaurant/PrimaryLink";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_DISH } from "../graphql/dishes";
import { RESTAURANT_DISHES } from "../graphql/restaurants";
import { Helmet } from "react-helmet";

const Container = styled.main`
  max-width: ${(props) => props.theme.width.small};
  margin: 4rem auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 3rem;
  }

  h1 {
    margin-bottom: 2rem;
  }
`;

const validationSchema = yup.object({
  dishTitle: yup.string().required("Required"),
  price: yup.number().required("Required"),
  quantity: yup.number().required("Required"),
  description: yup.string().required("Required"),
  image: yup.string().required("Required"),
});

interface Props {}

const RestaurantDishAddPage = (props: Props) => {
  let { restaurantId } = useParams<{ restaurantId: string }>();
  const history = useHistory();
  const [createDish, { data, loading, error }] = useMutation(CREATE_DISH);

  return (
    <Container>
      <Helmet>
        <title>Dormdashboard | Edit Dish</title>
        <meta name="description" content="edit your dishes" />
      </Helmet>

      <h1>Add dish</h1>
      <Formik
        // Veranderen naar values van current user
        initialValues={{
          dishTitle: "",
          price: 0,
          quantity: 0,
          description: "",
          image: "",
        }}
        onSubmit={(formData, { setSubmitting }) => {
          setSubmitting(true);

          // async call naar api
          createDish({
            variables: {
              restaurantId: Number(restaurantId),
              name: formData.dishTitle,
              description: formData.description,
              picture: formData.image,
              price: formData.price,
              quantity: formData.quantity,
            },
            refetchQueries: [
              {
                query: RESTAURANT_DISHES,
                variables: { id: Number(restaurantId)}
              }
            ]
          })

          setSubmitting(false);
          history.push({
            pathname: Routes.DISHES.replace(
              ":restaurantId",
              String(restaurantId)
            ),
          });

          // // fix random magic bug
          // window.location.reload();
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, isSubmitting, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="text"
              as={InputField}
              name="dishTitle"
              placeholder={"Title"}
            />
            <Field
              type="number"
              as={InputField}
              name="price"
              placeholder="Price"
            />
            <Field
              type="number"
              as={InputField}
              name="quantity"
              placeholder="Quantity"
            />
            <Field as={Textarea} name="description" placeholder="Description" />
            <Field
              type="file"
              as={InputField}
              name="image"
              placeholder="Dish image"
            />
            <PrimaryButton disabled={isSubmitting} type="submit">
              Add
            </PrimaryButton>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
      <PrimaryLink link={Routes.DISHES.replace('restaurantId', '1')}>Go back</PrimaryLink>
    </Container>
  );
};

export default RestaurantDishAddPage;
