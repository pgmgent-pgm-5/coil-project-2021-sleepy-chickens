import styled from "styled-components";

const ChipStyle = styled.input<ChipProps>`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.2s ease;
  background-color: ${(props) => props.theme.colors.secondaryAccentColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border: none;
  padding: 0.25rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.large};
  margin-bottom: ${({ open }) => (open ? "0.5rem" : "0")};
  margin-right: 0.5rem;
  cursor: pointer;
`;

interface ChipProps {
  type: "button" | undefined;
  open: boolean;
  value: string;
  name: string;
}

export const Chip = ({ type, open, value, name }: ChipProps) => {
  return <ChipStyle type={type} open={open} value={value} name={name} />;
};
