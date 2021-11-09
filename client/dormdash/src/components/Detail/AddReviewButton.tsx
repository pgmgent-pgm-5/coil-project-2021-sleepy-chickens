import React from "react";
import styled from "styled-components";

interface Props {}

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const AddReviewButton = (props: Props) => {
  return <Button>Add review</Button>;
};

export default AddReviewButton;
