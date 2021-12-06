import React from "react";
import styled from "styled-components";
import ModalCloseButton from "./ModalCloseButton";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import InputField from "../form/InputField";
import PrimaryButton from "../form/PrimaryButton";
import Textarea from "../form/Textarea";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/reviews";
import { useParams } from "react-router-dom";
import { RESTAURANTS_DETAIL } from "../../graphql/restaurants";


const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  rating: yup
    .number()
    .required("Required")
    .min(1, "Must be at least 1")
    .max(5, "Must be at most 5"),
  review: yup.string().required("Required"),
});

const ShareReview = ({ onClick }: Props) => {
  let newDate = new Date();
  let { id } = useParams<{ id:string }>();
  const [createReview, {data, loading, error}] = useMutation(CREATE_REVIEW);

  return (
    <>
      <FlexTitle>
        <h2>Restaurant name</h2>
        <ModalCloseButton onClick={onClick} />
      </FlexTitle>

      <Formik
        initialValues={{
          name: "",
          rating: 1,
          review: "",
        }}
        onSubmit={(formData, { setSubmitting }) => {
          setSubmitting(true);

          createReview({ 
            variables: {
              rating: formData.rating, 
              title: formData.name, 
              description: formData.review,  
              date: newDate,
              restaurantId: Number(id),
            },
            refetchQueries: [
              {
                query: RESTAURANTS_DETAIL,
              }
            ]
          });

          setSubmitting(false);
          window.location.reload();
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <Field
              type="input"
              as={InputField}
              name="name"
              placeholder="Name"
            />
            <Field
              type="number"
              as={InputField}
              name="rating"
              placeholder="Rating 1-5"
              min={1}
              max={5}
            />
            <Field
              as={Textarea}
              name="review"
              placeholder="Share your review"
            />

            <PrimaryButton disabled={isSubmitting} type="submit">
              Share
            </PrimaryButton>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ShareReview;
