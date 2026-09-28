import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders main container with heading and footer", () => {
    const { container } = render(<Home />);

    const mainElement = container.querySelector("main");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.className).toContain("min-h-screen");
    expect(mainElement?.className).toContain("bg-black");

    expect(screen.getByRole("heading", { level: 1, name: "Geko Landing" })).toBeDefined();
    expect(screen.getByText("Geko")).toBeDefined();
  });
});
