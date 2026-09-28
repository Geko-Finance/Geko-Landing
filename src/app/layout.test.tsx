import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("exports correct metadata", () => {
    expect(metadata.title).toBe("Geko Landing");
    expect(metadata.description).toBe("");
  });

  it("renders children content inside body element", () => {
    render(
      <RootLayout>
        <div data-testid="child-content">Child element</div>
      </RootLayout>,
      { container: document }
    );

    expect(screen.getByTestId("child-content")).toBeDefined();
    expect(screen.getByText("Child element")).toBeDefined();
  });
});
