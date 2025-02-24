import { useMarvelStore } from "../../../application/store/marvel_store";
import { getFavoriteColor } from "../../../utils/isfavorite";
import HeartIcon from "../../atoms/HeartIcon";
import { CharacterCardProps } from "./interface";
import {
  Card,
  CardBottom,
  CardRectangle,
  CharacterImage,
  FavoriteContainer,
  Title,
} from "./styled";
import { useCharacterCard } from "./useCharacterCard";

const CharacterCard = ({ id, name, thumbnail }: CharacterCardProps) => {
  const { toggleFavorite, favorites } = useMarvelStore();
  const { thumbnail_url, handleNavigate } = useCharacterCard(
    thumbnail,
    String(id)
  );

  return (
    <Card data-testid="character-card">
      <CharacterImage src={thumbnail_url} onClick={handleNavigate} alt={name} />
      <CardRectangle />
      <CardBottom>
        <Title>{name?.toUpperCase() || "NAME"}</Title>
        <FavoriteContainer
          onClick={() => toggleFavorite(id, name, thumbnail?.path)}
        >
          <HeartIcon color={getFavoriteColor(favorites, id)} width={14} />
        </FavoriteContainer>
      </CardBottom>
    </Card>
  );
};

export default CharacterCard;
