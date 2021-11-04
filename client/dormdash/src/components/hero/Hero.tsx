import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import SearchField from "../form/SearchField";
import { Button } from "../form/Button";
import heroImg from "../../assets/homeHero.webp";

const ImgContainer = styled.div`
  position: relative;
  //   padding: 1.5rem;

  img {
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
    position: relative;
    right: 50%;
    width: calc(100vw - 9px);
    height: 16rem;
    object-fit: cover;
    object-position: center;

    @media (min-width: ${(props) => props.theme.width.medium}) {
      height: 32rem;
    }
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  width: 80%;
  min-width: 20rem;
  max-width: 44rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.normal};

  @media (min-width: ${(props) => props.theme.width.medium}) {
    padding: 3rem;
  }

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    align-items: center;
    max-width: 30rem;
    margin: 2rem auto 0 auto;
  }
`;

const validationSchema = yup.object({
  Search: yup.string().required().min(10),
});

const Hero = () => {
  return (
    <ImgContainer>
      <img src={heroImg} alt="A variety of food" />
      <SearchContainer>
        <h1>Lorem ipsum dolor sit amet</h1>

        <Formik
          initialValues={{
            search: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            console.log(data);
            setSubmitting(false);
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <Field
                placeholder="Address"
                name="search"
                as={SearchField}
                type="input"
              />
              <Button disabled={isSubmitting} type="submit">
                Search
              </Button>

              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </SearchContainer>
    </ImgContainer>
  );
};

export default Hero;
