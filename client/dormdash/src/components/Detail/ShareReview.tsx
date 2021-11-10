import React from "react";
import styled from "styled-components";
import ModalCloseButton from "./ModalCloseButton";

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ShareReview = ({ onClick }: Props) => {
  return (
    <>
      <FlexTitle>
        <h2>Restaurant name</h2>
        <ModalCloseButton onClick={onClick} />
      </FlexTitle>
    </>
  );
};

export default ShareReview;
