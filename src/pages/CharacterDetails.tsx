import { useParams } from "react-router-dom";
import { useMarvelStore } from "../application/store/marvel_store";
import GeneralLoadingScreen from "../ui/layouts/ScreenLoading";
import { useFetchCharacterById } from "../hooks/useFetchCharacterById";
import { useFetchComics } from "../hooks/useFetchComics";
import HeartIcon from "../ui/atoms/HeartIcon";
import Loading from "../ui/molecules/Loading";
import { LoadingComicsContainer } from "../ui/styles/GlobalStyles";
import { getFavoriteColor } from "../utils/isfavorite";
import {
  CharacterDetailsStyled,
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
} from "../ui/styles/CharacterDetailsStyled";

const CharacterDetails = () => {
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
        <CharacterDetailsStyled>
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
        </CharacterDetailsStyled>
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

export default CharacterDetails;
