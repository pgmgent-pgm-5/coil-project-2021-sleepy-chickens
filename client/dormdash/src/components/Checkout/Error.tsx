import React from "react";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import styled from "styled-components";
import ErrorImage from "../../assets/Error.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: ${(props) => props.theme.colors.primaryAccentColor};
  }

  img {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 35rem;
    border-radius: ${(props) => props.theme.borderRadius.normal};
  }
`;

interface Props {}

const Error = (props: Props) => {
  return (
    <Container>
      <img src={ErrorImage} alt="Error picture" />
      <h3>
        Something went wrong! Click <Link to={Routes.LANDING}>Here</Link> to
        return to home.
      </h3>
    </Container>
  );
};

export default Error;
