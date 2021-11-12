import React from "react";
import styled from "styled-components";

interface Props {
  activeStep?: number;
  step?: string;
  index: number;
}

const Container = styled.div<Props>`
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    transition: ${(props) => props.theme.transition.normal};
    margin-bottom: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: ${(props) => props.theme.borderRadius.circle};
    background-color: ${({ activeStep, index }) =>
      activeStep === index ? "#313244" : "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.secondaryAccentColor};

    span {
      color: ${(props) => props.theme.colors.primaryAccentColor};
      font-size: ${(props) => props.theme.fontSizes.normal};
    }
  }
`;

const StepDescription = styled.span`
  display: none;

  @media (min-width: ${(props) => props.theme.width.small}) {
    display: block;
  }
`;

const Step = ({ activeStep, step, index }: Props) => {
  console.log(activeStep, index);
  return (
    <Container activeStep={activeStep} index={index}>
      <div>
        <span>{index + 1}</span>
      </div>
      <StepDescription>{step}</StepDescription>
    </Container>
  );
};

export default Step;
