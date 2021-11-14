import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../components/form/PrimaryButton";
import InputField from "../components/form/InputField";
import Textarea from "../components/form/Textarea";
import * as Routes from "../routes";
import PrimaryLink from "../components/Admin/Restaurant/PrimaryLink";

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
  description: yup.string().required("Required"),
  image: yup.string().required("Required"),
});

interface Props {}

const RestaurantDishAddPage = (props: Props) => {
  return (
    <Container>
      <h1>Add dish</h1>
      <Formik
        // Veranderen naar values van current user
        initialValues={{
          dishTitle: "",
          price: 0,
          description: "",
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
      <PrimaryLink link={Routes.DISHES}>Go back</PrimaryLink>
    </Container>
  );
};

export default RestaurantDishAddPage;
