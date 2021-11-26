import React from "react";
import styled from "styled-components";

interface Props {
  open: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const AddReviewButton = ({ onClick }: Props) => {
  return (
    <Button id="review" onClick={onClick}>
      Add review
    </Button>
  );
};

export default AddReviewButton;
