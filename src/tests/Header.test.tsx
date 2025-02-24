import { render, renderHook, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useMarvelStore } from "../application/store/marvel_store";
import Header from "../ui/organisms/Header";

describe("Header", () => {
  it("should render the marvel logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByAltText("Marvel logo");
    expect(logo).toBeInTheDocument();
  });

  it("should show the number of favorites", () => {
    const { result } = renderHook(() => useMarvelStore());
    result.current.favorites = [{ id: 1, name: "Juan", url: "url" }];

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const numberFavorites = screen.getByText(
      result.current.favorites.length.toString()
    );
    expect(numberFavorites).toBeInTheDocument();
  });
});
