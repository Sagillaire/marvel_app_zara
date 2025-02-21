import { useNavigate } from "react-router-dom";
import { useMarvelStore } from "../store/marvel_store";
import {
  FavoritesContainer,
  HeaderNav,
  HeaderStyled,
  NumberFavorites,
} from "./HeaderStyled";
import { HeartIcon } from "./HeartIcon";

const Header = () => {
  const { favorites } = useMarvelStore();
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <HeaderNav>
        <img src="/marvel_logo.png" alt="Marvel logo" />
        <FavoritesContainer onClick={() => navigate("/favorites")}>
          <HeartIcon width={20} />
          <NumberFavorites>{favorites.length}</NumberFavorites>
        </FavoritesContainer>
      </HeaderNav>
    </HeaderStyled>
  );
};

export default Header;
