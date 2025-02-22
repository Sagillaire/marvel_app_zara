import { useNavigate } from "react-router-dom";
import { useMarvelStore } from "../../../application/store/marvel_store";
import HeartIcon from "../../atoms/HeartIcon";
import {
  FavoritesContainer,
  HeaderNav,
  HeaderStyled,
  NumberFavorites,
} from "./styled";

const Header = () => {
  const { favorites } = useMarvelStore();
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <HeaderNav>
        <img src="/assets/marvel_logo.png" alt="Marvel logo" />
        <FavoritesContainer onClick={() => navigate("/favorites")}>
          <HeartIcon width={20} />
          <NumberFavorites>{favorites.length}</NumberFavorites>
        </FavoritesContainer>
      </HeaderNav>
    </HeaderStyled>
  );
};

export default Header;
