import { useField } from "formik";
import React, { useState } from "react";

export interface TextFieldProps {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const TextField = ({
  type,
  name,
  value = "",
  placeholder,
  onChange,
  onBlur,
}: TextFieldProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [field, meta] = useField({
    type,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
  });
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <label>
      <span>{placeholder}</span>
      <input
        {...field}
        type={type}
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
        <div style={{ backgroundColor: "red", color: "white" }}>
          {errorText}
        </div>
      )}
    </label>
  );
};

export default TextField;
