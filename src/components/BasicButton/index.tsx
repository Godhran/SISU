import { Button } from "./component.style";

const BasicButton = ({
  onClick,
  title,
  type,
  className,
}: {
  onClick: () => void;
  title: string;
  type: string;
  className: string;
}) => (
  <Button
    title={title}
    type={type}
    className={className}
    onClick={onClick}
  />
);

export default BasicButton;
