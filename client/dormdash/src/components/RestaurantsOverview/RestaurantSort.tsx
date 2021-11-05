import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import PrimaryButton from "../form/PrimaryButton";

interface Props {
  open: boolean;
}

const Container = styled.div``;

const TitleContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    transform: ${({ open }) => (open ? "rotate(180deg)" : "0")};
    transition: all 0.2s ease;
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerChips = styled.div<Props>`
  height: ${({ open }) => (open ? "auto" : "0")};
  margin-top: ${({ open }) => (open ? "1rem" : "0")};
  transition: all 0.4s ease;

  label {
    opacity: ${({ open }) => (open ? "1" : "0")};
    margin: ${({ open }) => (open ? "0.5rem 0" : "0")};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;

    input {
      margin-right: 1rem;
    }
  }
`;

const RestaurantSort = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Container>
      <TitleContainer onClick={handleToggle} open={open}>
        <h3>Sort</h3>
        <span>
          <MdExpandMore />
        </span>
      </TitleContainer>
      <ContainerChips open={open}>
        <Formik
          initialValues={{
            sort: "alphabetical",
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);

            // async call naar api
            console.log(data);

            setSubmitting(false);
          }}
        >
          {({
            values,
            handleSubmit,
            isSubmitting,
            handleChange,
            handleBlur,
            submitForm,
          }) => (
            <form
              onChange={(e) => {
                handleChange(e);
                setTimeout(() => {
                  submitForm();
                });
              }}
            >
              <label>
                <Field type="radio" name="sort" value="alphabetical" />
                <span>Alphabetical</span>
              </label>
              <label>
                <Field type="radio" name="sort" value="rating" />
                <span>Rating</span>
              </label>
              <label>
                <Field type="radio" name="sort" value="delivery_time" />
                <span>Delivery time</span>
              </label>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        </Formik>
      </ContainerChips>
    </Container>
  );
};

export default RestaurantSort;
