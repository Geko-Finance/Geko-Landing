import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FooterColumn from "./FooterColumn";

describe("FooterColumn", () => {
  it("renders column title and all provided links", () => {
    const mockLinks = [
      { label: "Features", href: "#features" },
      { label: "Docs", href: "#docs" },
    ];

    render(<FooterColumn title="Navigation" links={mockLinks} />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveProperty("textContent", "Navigation");
    
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0].getAttribute("href")).toBe("#features");
    expect(links[0].textContent).toBe("Features");
    expect(links[1].getAttribute("href")).toBe("#docs");
    expect(links[1].textContent).toBe("Docs");
  });

  it("renders empty list when links array is empty", () => {
    render(<FooterColumn title="Empty Section" links={[]} />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveProperty("textContent", "Empty Section");
    expect(screen.queryByRole("link")).toBeNull();
  });
});
