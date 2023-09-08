import styled from "@emotion/styled";
import { Colours } from "../../styles/colours";
import { ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const container = ({
  children,
  className,
  expanded,
}: {
  children: any;
  className?: string;
  expanded: boolean;
}) => (
  <div className={`${expanded ? "h-[100%]" : "h-0"} ${className}`}>
    {children}
  </div>
);

const collapse = ({
  children,
  className,
  expanded,
  maxHeight,
}: {
  children: any;
  className?: string;
  expanded: boolean;
  maxHeight: number;
}) => (
  <div className={`transition-all duration-300 ${className}`}>
    {children}
  </div>
);

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
  onClick,
}: {
  placeholder: string;
  label: string;
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
}) => (
  <div className={`flex items-center border-b py-2 mb-2 ${className}`}>
    <input
      className={`appearance-none bg-transparent border-none w-full mr-3 py-1 leading-tight focus:outline-none`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={label}
      maxLength={120}
    />
    <FontAwesomeIcon icon={faSquareCheck} size="2x" onClick={onClick} />
  </div>
);

export const Collapse = styled(collapse)`
  max-height: ${(props: any) => (props.expanded ? `${props.maxHeight}px` : "0px")};
  opacity: ${(props: any) => (props.expanded ? 1 : 0)};
`;

export const Container = styled(container)`
  // height: ${(props: any) => (props.expanded ? "100%" : 0)};
  // overflow: hidden;
  transition-duration: 250ms;
  transition-property: height;
  transition-timing-function: ease-in-out;
`;

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
  font-family: 'Montserrat';
  border-color: ${(props: any) => Colours.dark};
`;
