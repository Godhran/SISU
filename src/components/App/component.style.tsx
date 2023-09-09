import styled from "@emotion/styled";
import { Colours } from "../../styles/colours";
import { ReactNode } from "react";

const wrapper = ({
  className,
  testId,
  children,
}: {
  className?: any;
  testId: string;
  children: ReactNode;
}) => (
  <div
    data-testid={testId}
    className={`w-full min-h-screen p-5 pb-10 mx-auto gap-5 columns-1 sm:columns-2 md:columns-2 lg:columns-4 xl:columns-5 space-y-5 ${className}`}
  >
    {children}
  </div>
);

export const Wrapper = styled(wrapper)`
  background-color: ${Colours.dark};
`;
