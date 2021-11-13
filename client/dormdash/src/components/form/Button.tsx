import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 0.25rem 1rem;
  height: 2rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondaryAccentColor};
  border: none;
  outline: none;
  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.small};
  border: 3px solid ${(props) => props.theme.colors.secondaryAccentColor};
  transition: ${(props) => props.theme.transition.normal};
  cursor: pointer;
  line-height: 50%;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryAccentColor};
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.colors.secondaryAccentColor};
  }
`;

interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ type, children, disabled, onClick }: ButtonProps) => {
  return (
    <ButtonStyle type={type} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};
