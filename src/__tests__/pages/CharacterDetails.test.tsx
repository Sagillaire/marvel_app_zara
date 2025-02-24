import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { vi } from "vitest";
import { useMarvelStore } from "../../application/store/marvel_store";
import { useFetchCharacterById } from "../../hooks/useFetchCharacterById";
import { useFetchComics } from "../../hooks/useFetchComics";
import { MarvelState } from "../../models/marvel_store.model";
import CharacterDetails from "../../pages/CharacterDetails";

vi.mock("../../hooks/useFetchCharacterById");
vi.mock("../../hooks/useFetchComics");
vi.mock("../../application/store/marvel_store");

describe("CharacterDetails", () => {
  const mockToggleFavorite = vi.fn();
  const mockFavorites: never[] = [];

  beforeEach(() => {
    (
      useMarvelStore as jest.MockedFunction<typeof useMarvelStore>
    ).mockReturnValue({
      toggleFavorite: mockToggleFavorite,
      favorites: mockFavorites,
    } as unknown as MarvelState);
  });

  it("should render character details correctly when data is fetched", async () => {
    const mockCharacter = {
      id: 1,
      name: "Spider-Man",
      thumbnail: { path: "http://example.com/spiderman", extension: "jpg" },
      description: "The friendly neighborhood Spider-Man",
    };

    const mockComics = [
      {
        id: 1,
        title: "Spider-Man #1",
        images: [{ path: "http://example.com/comic1", extension: "jpg" }],
        dates: [{}, { date: "2025-01-01" }],
      },
    ];

    (useFetchCharacterById as jest.Mock).mockReturnValue({
      data: mockCharacter,
      isLoading: false,
    });
    (useFetchComics as jest.Mock).mockReturnValue({
      data: mockComics,
      isLoading: false,
    });

    render(
      <Router>
        <CharacterDetails />
      </Router>
    );

    await waitFor(() =>
      expect(screen.getByText("Spider-Man")).toBeInTheDocument()
    );
    expect(
      screen.getByText("The friendly neighborhood Spider-Man")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Spider-Man")).toHaveAttribute(
      "src",
      "http://example.com/spiderman.jpg"
    );
    expect(screen.getByText("Spider-Man #1")).toBeInTheDocument();
  });

  it("should handle adding/removing character from favorites", async () => {
    const mockCharacter = {
      id: 1,
      name: "Spider-Man",
      thumbnail: { path: "http://example.com/spiderman", extension: "jpg" },
      description: "The friendly neighborhood Spider-Man",
    };

    (useFetchCharacterById as jest.Mock).mockReturnValue({
      data: mockCharacter,
      isLoading: false,
    });
    (useFetchComics as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
    });

    render(
      <Router>
        <CharacterDetails />
      </Router>
    );

    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(
      mockCharacter.id,
      mockCharacter.name,
      mockCharacter.thumbnail.path
    );

    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(2);
  });
});
