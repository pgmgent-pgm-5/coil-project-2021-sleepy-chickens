import styled from "styled-components";
import React, { ReactElement } from "react";

const Input = styled.input.attrs(() => ({
  type: "number",
}))`
  background: ${(props) => (props.disabled ? "#000" : "#FFF")};
`;

interface InputFieldProps {
  onClick: () => void;
}

export default function InputField({ onClick }: InputFieldProps): ReactElement {
  return <Input onClick={onClick} />;
}
