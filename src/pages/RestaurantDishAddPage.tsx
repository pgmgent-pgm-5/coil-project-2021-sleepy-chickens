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
        initialValues={{
          dishTitle: "",
          price: 0,
          quantity: 0,
          description: "",
          image: "",
        }}
        onSubmit={async (formData, { setSubmitting }) => {
          setSubmitting(true);

          const imgData = new FormData();
          if(formData.image !== null) {
            imgData.append('file', formData.image)
          }

          const uploadRequest = await fetch(
            "https://dormdash-server.herokuapp.com/uploadDishPicture",
            {
              method: "POST",
              headers: new Headers({Accept: "application/json"}),
              body: imgData,
            }
          );
          const uploadResponse = await uploadRequest.json();

          createDish({
            variables: {
              restaurantId: Number(restaurantId),
              name: formData.dishTitle,
              description: formData.description,
              picture: uploadResponse.imagePath,
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
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, isSubmitting, handleChange, handleBlur, setFieldValue }) => (
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
            <label>
              <p>Dish image</p>
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
