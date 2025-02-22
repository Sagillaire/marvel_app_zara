// test/Counter.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../ui/atoms/Counter";

describe("Counter", () => {
  it("increments the count when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByText("Increment");
    fireEvent.click(button);

    const countText = screen.getByText("1");
    expect(countText).toBeInTheDocument();
  });
});
