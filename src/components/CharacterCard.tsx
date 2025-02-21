import { useNavigate } from "react-router-dom";
import { useMarvelStore } from "../store/marvel_store";
import { getFavoriteColor } from "../utils/isfavorite";
import {
  Card,
  CardRectangle,
  CharacterImage,
  FavoriteContainer,
} from "./CharacterCardStyled";
import { HeartIcon } from "./HeartIcon";

export interface CharacterCardProps {
  id: number;
  name: string;
  thumbnail: { path: string; extension: string };
}

const CharacterCard = ({ id, name, thumbnail }: CharacterCardProps) => {
  const { toggleFavorite, favorites } = useMarvelStore();
  const navigate = useNavigate();

  const thumbnail_url = thumbnail?.path + "." + thumbnail?.extension;

  return (
    <Card key={id}>
      <CharacterImage
        src={thumbnail_url}
        onClick={() => navigate(`/character/${id}`)}
        alt={name}
      />
      <CardRectangle />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "150px",
            whiteSpace: "nowrap",
          }}
        >
          {name?.toUpperCase() || "NAME"}
        </span>
        <FavoriteContainer
          onClick={() => toggleFavorite(id, name, thumbnail?.path)}
        >
          <HeartIcon color={getFavoriteColor(favorites, id)} width={14} />
        </FavoriteContainer>
      </div>
    </Card>
  );
};

export default CharacterCard;
