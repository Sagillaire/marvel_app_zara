import { useNavigate, useSearchParams } from "react-router-dom";
import { CharacterThumbnail } from "./interface";

export const useCharacterCard = (thumbnail: CharacterThumbnail, id: string) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const thumbnail_url = thumbnail?.path + "." + thumbnail?.extension;

  const handleNavigate = () => {
    setSearchParams({ query });
    navigate(`/character/${id}`);
  };

  return { thumbnail_url, handleNavigate };
};
