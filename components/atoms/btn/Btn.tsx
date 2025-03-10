import { Button, ButtonProps } from "antd";

const ButtonField = ({
  id,
  name,
  type,
  size,
  onClick,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      id={id}
      name={name}
      type={type}
      size={size}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default ButtonField;
