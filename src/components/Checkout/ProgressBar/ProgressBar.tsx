import React from "react";
import styled from "styled-components";
import Step from "./Step";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

interface Props {
  steps: string[];
  activeStep: number;
}

const ProgressBar = ({ steps, activeStep }: Props) => {
  return (
    <Container>
      {steps.map((step, index) => (
        <Step key={index} index={index} step={step} activeStep={activeStep} />
      ))}
    </Container>
  );
};

export default ProgressBar;
