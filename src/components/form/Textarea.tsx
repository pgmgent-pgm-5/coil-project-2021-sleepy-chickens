import { useField } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { BiErrorCircle } from "react-icons/bi";

interface StylingProps {
  error: string;
}

const Label = styled.label<StylingProps>`
  display: block;
  margin-bottom: 1rem;
  span {
    display: block;
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.normal};
  }

  textarea {
    min-height: 5rem;
    //max-height: 20rem;
    max-width: 100%;
    width: 100%;
    padding: 0.25rem 0;
    padding-left: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.normal};
    border-radius: ${(props) => props.theme.borderRadius.small};
    border: 1px solid ${(props) => props.theme.colors.tertiaryAccentColor};
    border: ${({ error }) => (error ? "1px solid red" : "")};
    transition: all 0.2s ease;

    &:focus,
    &:active,
    &focus-within {
      border: 1px solid ${(props) => props.theme.colors.secondaryAccentColor};
      background-color: ${(props) => props.theme.colors.tertiaryAccentColor};
      outline: none;
      border: ${({ error }) => (error ? "1px solid red" : "")};
    }
  }
`;

const ErrorMessageStyling = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryAccentColor};

  span {
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 0.25rem;
    }
  }
`;

interface TextareaProps {
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
}

const Textarea = ({
  name,
  value = "",
  placeholder,
  onChange,
  onBlur,
}: TextareaProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [field, meta] = useField({
    name,
    value,
    placeholder,
    onChange,
    onBlur,
  });
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <Label error={errorText}>
      <span>{placeholder}</span>
      <textarea
        {...field}
        name={name}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => {
          if (onChange) onChange(e);
          setCurrentValue(e.currentTarget.value);
        }}
        onBlur={onBlur}
      />
      {errorText && (
        <ErrorMessageStyling>
          <span>
            <BiErrorCircle />
          </span>
          <span>{errorText}</span>
        </ErrorMessageStyling>
      )}
    </Label>
  );
};

export default Textarea;
