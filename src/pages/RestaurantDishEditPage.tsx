import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../components/form/PrimaryButton";
import InputField from "../components/form/InputField";
import Textarea from "../components/form/Textarea";
import PrimaryLink from "../components/Admin/Restaurant/PrimaryLink";
import * as Routes from "../routes";
import { DISH_BY_ID, UPDATE_DISH } from "../graphql/dishes";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RESTAURANT_DISHES } from "../graphql/restaurants";


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
});

interface Props {}

const RestaurantDishEditPage = (props: Props) => {
  let { dishId } = useParams<{ dishId: string }>();
  
  const { error, loading, data } = useQuery(
    DISH_BY_ID,
    {
      fetchPolicy: "cache-first",
      variables: { id: Number(dishId) }
    }
  );

  let restaurantId:number;
  let dishPicture:string = "default_dish.jpeg";
  if (data) {
    restaurantId = data.getDish.restaurantId;
    dishPicture = data.getDish.picture;
  }

  const [updateDish, {data:updateData, loading: updateLoading, error:updateError}] = useMutation(UPDATE_DISH);

  return (
    <Container>
      {
        data && (
          <>
            <Helmet>
              <title>Dormdashboard | Edit Dish</title>
              <meta name="description" content="edit your dishes" />
            </Helmet>
            <h1>Edit dish</h1>
            <Image>
              <img src={`https://dormdash-server.herokuapp.com/dish-image/${dishPicture}`} alt="dish" />
            </Image>
            <Formik
              initialValues={{
                dishTitle: data.getDish.name,
                price: data.getDish.price,
                quantity: data.getDish.quantity,
                description: data.getDish.description,
                image: '',
              }}
              onSubmit={async (formData, { setSubmitting }) => {
                setSubmitting(true);

                const imgData = new FormData();
                if(formData.image !== null && formData.image !== '') {
                  imgData.append('file', formData.image)

                  const uploadRequest = await fetch(
                    "https://dormdash-server.herokuapp.com/uploadDishPicture",
                    {
                      method: "POST",
                      headers: new Headers({Accept: "application/json"}),
                      body: imgData,
                    }
                  );
                  const uploadResponse = await uploadRequest.json();
                  dishPicture = uploadResponse.imagePath;
                }
                updateDish({
                  variables: {
                    id: Number(dishId),
                    restaurantId: Number(restaurantId), 
                    name: formData.dishTitle,
                    description: formData.description,
                    price: formData.price,
                    quantity: formData.quantity,
                    picture: dishPicture
                  },
                  refetchQueries: [
                    {
                      query: RESTAURANT_DISHES,
                      variables: { id: Number(restaurantId)}
                    },
                    {
                      query: DISH_BY_ID,
                      variables: { id: Number(dishId)}
                    },
                  ]
                })

                setSubmitting(false);
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
                    <p>Dish Image</p>
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
                    Update
                  </PrimaryButton>
                  {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </form>
              )}
            </Formik>
            <PrimaryLink link={Routes.DISHES.replace(':restaurantId', "1")}>Go back</PrimaryLink>
          </>
        )
      }
    </Container>
  );
};

export default RestaurantDishEditPage;
