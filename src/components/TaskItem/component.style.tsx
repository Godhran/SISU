import styled from "@emotion/styled";
import { Colours } from "../../styles/colours";
import { ReactNode } from "react";

const button = ({
  title,
  className,
  type,
}: {
  title: string;
  type: string;
  className?: any;
}) => {
  return (
    <>
      <div
        className={`col flex flex-col justify-content-center p-4 md:rounded ${className}`}
      >
        {title}
      </div>
    </>
  );
};

export const Button = styled(button)`
  background-color: ${(props: any) =>
    Colours[props.type as keyof typeof Colours]};
  color: white;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }
`;

const task = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  type: string;
  className?: any;
}) => {
  return (
    <div
      className={`w-100 px-3 cursor-pointer py-4 w-100 rounded text-base justify-between break-words select-none font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export const Task = styled(task)`
  background-color: ${(props: any) =>
    Colours[props.type as keyof typeof Colours]};
  color: ${(props: any) =>
    props.type === Colours.dark};

  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0);
  transition-duration: 250ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }
`;
