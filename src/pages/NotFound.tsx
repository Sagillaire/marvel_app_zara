import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/mediaQueries";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 150px;
  height: calc(100vh - 90px);

  @media ${device.laptop} {
    padding: 80px;
  }

  @media ${device.tablet} {
    padding: 24px;
  }
`;

const Content = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: black;
`;

const Subtitle = styled.h3`
  color: black;
`;

const List = styled.ul`
  color: gray;
  font-size: 14px;
`;

const Image = styled.img`
  width: 35%;

  @media ${device.tablet} {
    display: none;
  }
`;

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  return (
    <Container>
      <div>
        <Content>
          <Title>ERROR 404 - ¡PÁGINA DESAPARECIDA!</Title>
          <Subtitle>
            ¡Loki ha usado un hechizo para ocultar esta página en el multiverso!
            🌀🔮 Quizás esté en otra línea temporal... o simplemente escribiste
            mal la dirección.
          </Subtitle>
          <List>
            <li>Prueba regresando atrás.</li>
            <li>Usa la búsqueda para encontrar lo que necesitas.</li>
            <li>O llama a Doctor Strange (si lo conoces).</li>
          </List>
        </Content>
        <Button onClick={handleBack} title="Go Home!" />
      </div>
      <Image src="/assets/captain_marvel.png" alt="Not found image" />
    </Container>
  );
};
