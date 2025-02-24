import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, it, vi } from "vitest";
import { NotFound } from "../../pages/NotFound";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("NotFound Component", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Limpia los mocks antes de cada test
  });

  it("renders correctly with text and image", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText(/ERROR 404/i)).toBeInTheDocument();
    expect(screen.getByText(/Loki ha usado un hechizo/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Not found image" })
    ).toBeInTheDocument();
  });

  it("navigates back when clicking the button", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Go Home!" });
    await userEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
