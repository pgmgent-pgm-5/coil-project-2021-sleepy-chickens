import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { Formik, Field } from "formik";
import { Chip } from "../form/Chip";
import { CATEGORIES } from "../../graphql/categories";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

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

  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const RestaurantFilterCategories = ({onCategoryChange}: any) => {
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState('');
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  useEffect(() => {
    if(typeof onCategoryChange === 'function') {
      onCategoryChange(cat);
    }
  }, [cat]);

  const { error, loading, data, refetch } = useQuery(
    CATEGORIES,
    {
      fetchPolicy: "cache-first",
    }
  );

  return (
    <Container>
      <TitleContainer onClick={handleToggle} open={open}>
        <h3>Categories</h3>
        <span>
          <MdExpandMore />
        </span>
      </TitleContainer>
      {data && (
        <ContainerChips open={open}>
          <Formik
            initialValues={{
              category: "",
            }}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              
              setCat(data.category);

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
                onClick={(e) => {
                  handleChange(e);
                  setTimeout(() => {
                    submitForm();
                  });
                }}
              >
                {data?.categories.map((category: {name: string, id: number}) => {
                  return (
                    <Field
                      type="button"
                      name="category"
                      open={open}
                      value={category.name}
                      as={Chip}
                    />
                  )
                })}
                {/* <Field
                  type="button"
                  name="category"
                  open={open}
                  value="pizza"
                  as={Chip}
                /> */}
                {/* <Field
                  type="button"
                  name="category"
                  open={open}
                  value="sushi"
                  as={Chip}
                />
                <Field
                  type="button"
                  name="category"
                  open={open}
                  value="mexican"
                  as={Chip}
                /> */}
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </form>
            )}
          </Formik>
        </ContainerChips>
      )}
    </Container>
  );
};

export default RestaurantFilterCategories;
