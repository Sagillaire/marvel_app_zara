import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "../ui/atoms/Button";

describe("Button component", () => {
  it("should render with the correct title", () => {
    render(<Button title="Click me" onClick={() => {}} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const onClickMock = vi.fn();
    render(<Button title="Click me" onClick={onClickMock} />);

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
