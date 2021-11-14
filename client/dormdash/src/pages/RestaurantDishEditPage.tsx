import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../components/form/PrimaryButton";
import InputField from "../components/form/InputField";
import Textarea from "../components/form/Textarea";

const Container = styled.main`
  max-width: ${(props) => props.theme.width.small};
  margin: 4rem auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 0 3rem;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  img {
    border-radius: ${(props) => props.theme.borderRadius.normal};
    width: 50%;
    max-height: 10rem;
    margin-top: 1rem;
  }
`;

const validationSchema = yup.object({
  dishTitle: yup.string().required("Required"),
  price: yup.number().required("Required"),
  description: yup.string().required("Required"),
  image: yup.string().required("Required"),
});

interface Props {}

const RestaurantDishEditPage = (props: Props) => {
  return (
    <Container>
      <h1>Edit dish</h1>
      <Image>
        <img src="https://source.unsplash.com/1600x900/?food" alt="" />
      </Image>
      <Formik
        // Veranderen naar values van current user
        initialValues={{
          dishTitle: "Spicy Chicken",
          price: 10,
          description:
            "Juicy grilled Farm chicken with healthy avocado, corn, jalapeños, feta cheese & sweet potato. Dressed with homemade chili mayo and topped off with chili flakes, spring onions & nachos",
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
              Update
            </PrimaryButton>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default RestaurantDishEditPage;
