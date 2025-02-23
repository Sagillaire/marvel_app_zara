import { useNavigate } from "react-router-dom";
import Button from "../ui/atoms/Button";
import {
  Container,
  Content,
  Image,
  List,
  Subtitle,
  Title,
} from "../ui/styles/NotFoundStyles";

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
