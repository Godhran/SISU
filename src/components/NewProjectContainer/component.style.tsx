import styled from "@emotion/styled";
import { Colours } from "../../styles/colours";
import { ChangeEventHandler } from "react";

const button = ({
  label,
  className,
  onClick,
}: {
  label: string;
  className?: string;
  onClick: () => void;
}) => (
  <button
    className={`w-[50%] text-sm border-4 text-white py-1 px-2 rounded ${className}`}
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

const textButton = ({
  label,
  className,
  onClick,
}: {
  label: string;
  className?: string;
  onClick: () => void;
}) => (
  <button
    className={`w-[50%] border-transparent border-4 text-sm py-1 px-2 rounded ${className}`}
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

const input = ({
  placeholder,
  label,
  className,
  value,
  onChange,
}: {
  placeholder: string;
  label: string;
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => (
  <div className={`flex items-center border-b py-2 mb-2 ${className}`}>
    <input
      className={`appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={label}
    />
  </div>
);

export const Button = styled(button)`
  background-color: ${(props: any) => Colours.dark};
  border-color: ${(props: any) => Colours.dark};
  color: white;
  font-weight: 700;

  &:hover {
    background-color: ${(props: any) => Colours.completed};
    border-color: ${(props: any) => Colours.completed};
  }
`;

export const TextButton = styled(textButton)`
  color: ${(props: any) => Colours.dark};
  font-weight: 700;

  &:hover {
    color: ${(props: any) => Colours.completed};
  }
`;

export const Input = styled(input)`
  color: ${(props: any) => Colours.dark};
  font-weight: 700;
  border-color: ${(props: any) => Colours.dark};
`;
