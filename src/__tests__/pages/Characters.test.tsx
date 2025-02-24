import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import Characters from "../../pages/Characters";

vi.mock("../../hooks/useFetchCharacters", () => ({
  useFetchCharacters: vi.fn(),
}));

describe("Characters component", () => {
  it("should display loading indicator when data is loading", () => {
    (useFetchCharacters as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
    });

    render(
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    );

    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render 50 character cards when data is loaded", () => {
    const mockCharacters = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: `Character ${index + 1}`,
      thumbnail: "",
    }));

    (useFetchCharacters as jest.Mock).mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    );

    const characterCards = screen.getAllByTestId("character-card");
    expect(characterCards).toHaveLength(50);
  });
});
