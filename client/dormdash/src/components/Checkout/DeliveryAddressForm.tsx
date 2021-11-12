import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PrimaryButton from "../form/PrimaryButton";
import InputField from "../form/InputField";
import TotalOverview from "./TotalOverview";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import { useHistory } from "react-router";
import GoBackButton from "./GoBackButton";

const Container = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1rem;

    fieldset {
      border: none;
      width: 100%;
      margin-bottom: 2rem;

      @media (min-width: ${(props) => props.theme.width.small}) {
        width: calc(60% - 0.5rem);
        max-width: 30rem;
        margin-bottom: 0;
        margin-right: 0.5rem;
      }
    }
  }
`;

const TotalOverviewContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.small}) {
    width: calc(40% - 0.5rem);
    margin-left: 0.5rem;
  }
`;

const validationSchema = yup.object({
  streetNumber: yup.string().required("Street number is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  zipCode: yup.string().required("Zip code is required"),
  state: yup.string().required("State is required"),
});

interface Props {
  nextStep: () => void;
}

const DeliveryAddressForm = ({ nextStep }: Props) => {
  let history = useHistory();

  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    history.goBack();
  };

  return (
    <Container>
      <Formik
        initialValues={{
          streetNumber: "",
          street: "",
          city: "",
          zipCode: "",
          state: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          // async call naar api
          console.log(data);

          setSubmitting(false);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, isSubmitting, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h2>Delivery address</h2>
              <Field
                type="input"
                as={InputField}
                name="streetNumber"
                placeholder="Street number"
              />
              <Field
                type="input"
                as={InputField}
                name="street"
                placeholder="Street"
              />
              <Field
                type="input"
                as={InputField}
                name="city"
                placeholder="City"
              />
              <Field
                type="input"
                as={InputField}
                name="zipCode"
                placeholder="Zip code"
              />
              <Field
                type="input"
                as={InputField}
                name="state"
                placeholder="State"
              />
            </fieldset>
            <TotalOverviewContainer>
              <TotalOverview />
              <PrimaryButton disabled={isSubmitting} type="submit">
                Next
              </PrimaryButton>
            </TotalOverviewContainer>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
      <GoBackButton onClick={handleGoBack} />
    </Container>
  );
};

export default DeliveryAddressForm;
