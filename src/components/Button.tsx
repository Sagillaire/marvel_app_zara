import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #ec1d24;
  outline: none;
  border: none;
  padding: 10px 50px;
  border-radius: 3px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
`;

interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;
};

export default Button;
