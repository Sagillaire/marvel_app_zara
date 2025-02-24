import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { vi } from "vitest";
import { useMarvelStore } from "../../application/store/marvel_store";
import Favorites from "../../pages/Favorites";

vi.mock("../../application/store/marvel_store");

describe("Favorites", () => {
  it("should render 'No tienes personajes favoritos.' when there are no favorites", () => {
    (useMarvelStore as unknown as jest.Mock).mockReturnValue({ favorites: [] });

    render(
      <Router>
        <Favorites />
      </Router>
    );

    expect(
      screen.getByText("No tienes personajes favoritos.")
    ).toBeInTheDocument();
  });

  it("should render favorite characters when there are favorites", () => {
    const mockFavorites = [
      { id: 1, name: "Iron Man", url: "http://example.com/ironman" },
      { id: 2, name: "Captain America", url: "http://example.com/captain" },
    ];

    (useMarvelStore as unknown as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
    });

    render(
      <Router>
        <Favorites />
      </Router>
    );

    expect(screen.getByText(/iron man/i)).toBeInTheDocument();
    expect(screen.getByText(/captain america/i)).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("src", "http://example.com/ironman.jpg");
    expect(images[1]).toHaveAttribute("src", "http://example.com/captain.jpg");
  });
});
