import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import * as Routes from "../routes";
import ErrorImage from "../assets/Error.jpg";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;

  a {
    color: ${(props) => props.theme.colors.primaryAccentColor};
  }

  img {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 35rem;
    border-radius: ${(props) => props.theme.borderRadius.normal};
  }

  h3 {
    padding-bottom: 3rem;
  }
`;

interface Props {
}

const Error = (props: Props) => {

  let { errorMessage } = useParams<{ errorMessage: string }>();
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <meta
          name="description"
          content="Error page"
        />
      </Helmet>
      <Container>
        <img src={ErrorImage} alt="Error" />
        <h3>
          Something went wrong! Click <Link to={Routes.LANDING}>Here</Link> to
          return to home.
        </h3>
        <h4>Error:</h4>
        <p>{errorMessage ? errorMessage : "Something went wrong"}</p>
      </Container>

    </>
     
  );
};

export default Error;
