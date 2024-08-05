import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Overview from "@/app/overview/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Overview />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
