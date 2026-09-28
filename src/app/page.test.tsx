import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders main container with title and footer", () => {
    const { container } = render(<Home />);

    const mainElement = container.querySelector("main");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.className).toContain("min-h-screen");

    expect(screen.getByRole("heading", { level: 1, name: "Geko Landing" })).toBeDefined();
    expect(screen.getByText("Geko")).toBeDefined();
  });
});
