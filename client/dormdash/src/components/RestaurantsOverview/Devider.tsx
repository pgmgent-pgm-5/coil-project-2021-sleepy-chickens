import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 1rem 0;
  border-radius: ${(props) => props.theme.borderRadius.small};
  background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
`;

const Devider = () => {
  return <Line></Line>;
};

export default Devider;
