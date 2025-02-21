import { useParams } from "react-router-dom";
import GeneralLoadingScreen from "../components/GeneralLoadingScreen";
import { HeartIcon } from "../components/HeartIcon";
import Loading from "../components/Loading";
import { LoadingComicsContainer } from "../GlobalStyles";
import { useFetchCharacterById } from "../hooks/useFetchCharacterById";
import { useFetchComics } from "../hooks/useFetchComics";
import { useMarvelStore } from "../store/marvel_store";
import { getFavoriteColor } from "../utils/isfavorite";
import {
  CharacterDetails,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  ComicCard,
  ComicImage,
  ComicsContainer,
  ComicsSection,
  ComicTitle,
  ComicYear,
  Container,
  Description,
  FavoriteButton,
  Header,
  SectionTitle,
} from "./CharacterIdStyled";

const CharacterId = () => {
  const { id } = useParams();

  const { toggleFavorite, favorites } = useMarvelStore();

  const { data, isLoading } = useFetchCharacterById(Number(id));
  const { data: comics, isLoading: isComicsLoading } = useFetchComics(
    Number(id)
  );

  if (isLoading && isComicsLoading && !data) {
    return <GeneralLoadingScreen />;
  }

  const thumbnail_url =
    data?.thumbnail?.path + "." + data?.thumbnail?.extension;

  return (
    <Container>
      <CharacterInfo>
        <CharacterImage
          src={data ? thumbnail_url : "../../public/loading.gif"}
          alt={data?.name}
        />
        <CharacterDetails>
          <Header>
            <CharacterName>{data?.name}</CharacterName>
            <FavoriteButton
              onClick={() =>
                toggleFavorite(data?.id, data?.name, data?.thumbnail?.path)
              }
            >
              <HeartIcon
                color={getFavoriteColor(favorites, Number(id))}
                width={24}
              />
            </FavoriteButton>
          </Header>
          <Description>
            {data?.description ||
              "Este personaje es tan misterioso que su historia aún está en construcción... ¡quién sabe qué secretos guarda!"}
          </Description>
        </CharacterDetails>
      </CharacterInfo>

      <ComicsSection>
        <SectionTitle>
          {isLoading || isComicsLoading || !comics
            ? "Cargando comics..."
            : "COMICS"}
        </SectionTitle>
        {isLoading || isComicsLoading || !comics ? (
          <LoadingComicsContainer>
            <Loading size={200} />
          </LoadingComicsContainer>
        ) : !comics ? (
          <ComicYear>
            Parece que este personaje no ha tenido tiempo de protagonizar
            cómics. ¡Quizás está demasiado ocupado salvando el día!
          </ComicYear>
        ) : (
          <ComicsContainer>
            {comics?.map((comic) => {
              const IMAGES = comic?.images?.[0];
              return (
                <ComicCard key={comic?.id}>
                  <ComicImage
                    src={
                      IMAGES?.path + "." + IMAGES?.extension ||
                      "/assets/loading.gif"
                    }
                    alt={comic?.title}
                  />
                  <ComicTitle>{comic?.title}</ComicTitle>
                  <ComicYear>{comic?.dates[1]?.date?.slice(0, 4)}</ComicYear>
                </ComicCard>
              );
            })}
          </ComicsContainer>
        )}
      </ComicsSection>
    </Container>
  );
};

export default CharacterId;
