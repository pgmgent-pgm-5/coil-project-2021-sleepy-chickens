import { Formik, useField } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { BiErrorCircle } from "react-icons/bi";
import { valueFromAST } from "graphql";

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

  input {
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

interface InputFileFieldProps {
  type: string;
  name: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const InputFileField = ({
  type,
  name,
  value,
  onChange,
  onBlur,
}: InputFileFieldProps) => {
  // const [currentValue, setCurrentValue] = useState(value);
  const [field, meta] = useField({
    type,
    name,
    value,
    onChange,
    onBlur,
  });
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <Label error={errorText}>
      <input
        {...field}
        type={type}
        name={name}
        // value={currentValue}
        onChange={(e) => {
          if (e.target.files !== null) {
            value.setFieldValue('logo', e.target.files[0])
            // setCurrentValue(e.target.files[0])
          }
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

export default InputFileField;


