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
  testId,
}: {
  count: number;
  length: number;
  type: string;
  className?: any;
  onClick: MouseEventHandler<HTMLDivElement>;
  filtered: boolean;
  testId: string;
}) => (
  <div
    className={`flex flex-col justify-center overflow-hidden ${className}`}
    role="progressbar"
    onClick={onClick}
    aria-hidden="true"
    data-testid={testId}
  />
);

export const Segment = styled(segment)`
  background-color: ${({
    filtered,
    type,
  }: {
    filtered: boolean;
    type: string;
  }) => (!filtered ? Colours[type as keyof typeof Colours] : Colours.dark)};
  width: ${({ length, count }: { length: number; count: number }) =>
    `${(100 / length) * count}%`};
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0);
  transition-duration: 250ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
  }
`;
