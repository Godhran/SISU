import styled from "@emotion/styled";
import { Colours } from "../../styles/colours";
import { MouseEventHandler } from "react";

const segment = ({
  className,
  count,
  length,
  type,
  onClick,
  filtered,
}: {
  count: number;
  length: number;
  type: string;
  className?: any;
  onClick: MouseEventHandler<HTMLDivElement>;
  filtered: boolean;
}) => (
  <div
    className={`flex flex-col justify-center overflow-hidden ${className}`}
    role="progressbar"
    style={{ width: `${(100 / length) * count}%` }}
    aria-valuenow={count}
    aria-valuemin={0}
    aria-valuemax={length}
    onClick={onClick}
  />
);

export const Segment = styled(segment)`
  background-color: ${(props: any) =>
    !props.filtered
      ? Colours[props.type as keyof typeof Colours]
      : Colours.dark};

  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0);
  transition-duration: 250ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }
`;
