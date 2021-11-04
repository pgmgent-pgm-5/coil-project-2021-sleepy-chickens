import React, { useState } from "react";

interface TextFieldProps {
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
  return (
    <label>
      <span>{placeholder}</span>
      <input
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
    </label>
  );
};

export default TextField;
