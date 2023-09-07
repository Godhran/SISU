import styled from "@emotion/styled";
import { Colours } from "../../styles/colours";

const button = ({
  title,
  className,
  onClick,
  type,
}: {
  title: string;
  type: string;
  className?: any;
  onClick: () => void;
}) => {
  return (
    <div
      className={`col flex flex-col justify-content-center p-4 md:rounded ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
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
