import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SocialIcon from "./SocialIcon";

describe("SocialIcon", () => {
  it("renders link with accessible attributes and child icon", () => {
    render(
      <SocialIcon href="https://example.com" label="Twitter">
        <svg data-testid="social-svg" />
      </SocialIcon>
    );

    const anchor = screen.getByRole("link", { name: "Twitter" });
    expect(anchor).toBeDefined();
    expect(anchor.getAttribute("href")).toBe("https://example.com");
    expect(anchor.getAttribute("target")).toBe("_blank");
    expect(anchor.getAttribute("rel")).toBe("noopener noreferrer");
    expect(screen.getByTestId("social-svg")).toBeDefined();
  });
});
