import React, { Children } from "react";

interface PrimaryButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PrimaryButton = ({
  type,
  children,
  disabled = false,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
