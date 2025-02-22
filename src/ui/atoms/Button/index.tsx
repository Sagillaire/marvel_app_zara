import { ButtonStyled } from "./styled";

interface Props {
  title: string;
  width?: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;
};

export default Button;
