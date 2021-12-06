import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
  height: 2rem;
  padding: 0.5rem;
  width: 100%;
  border: none;
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.small};
`;

interface SearchFieldProps {
  value: string;
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchField = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder = "",
}: SearchFieldProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      value={currentValue}
      onChange={(e) => {
        if (onChange) onChange(e);
        setCurrentValue(e.currentTarget.value);
      }}
      onBlur={onBlur}
    />
  );
};

export default SearchField;
