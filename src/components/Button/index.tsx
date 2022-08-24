import { ButtonStyled } from "./style";

interface ButtonPros {
  type?: "button" | "submit" | "reset" | undefined;
  title?: string;
}
const Button = (props: ButtonPros) => {
  const { type, title } = props;
  return (
    <>
      <ButtonStyled type={type}>{title}</ButtonStyled>
    </>
  );
};

export default Button;
