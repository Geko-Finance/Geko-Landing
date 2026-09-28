import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import TikTokIcon from "./TikTokIcon";
import XIcon from "./XIcon";

describe("Social Icon Components", () => {
  describe("FacebookIcon", () => {
    it("renders with default classes and svg attributes", () => {
      const { container } = render(<FacebookIcon />);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeNull();
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
      expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
      expect(svg?.getAttribute("fill")).toBe("currentColor");
      expect(svg?.getAttribute("class")).toBe("w-5 h-5");
      expect(svg?.querySelector("path")).not.toBeNull();
    });

    it("applies custom className", () => {
      const { container } = render(<FacebookIcon className="w-8 h-8 text-blue-500" />);
      const svg = container.querySelector("svg");

      expect(svg?.getAttribute("class")).toBe("w-8 h-8 text-blue-500");
    });
  });

  describe("InstagramIcon", () => {
    it("renders with default classes and svg attributes", () => {
      const { container } = render(<InstagramIcon />);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeNull();
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
      expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
      expect(svg?.getAttribute("fill")).toBe("currentColor");
      expect(svg?.getAttribute("class")).toBe("w-5 h-5");
      expect(svg?.querySelector("path")).not.toBeNull();
    });

    it("applies custom className", () => {
      const { container } = render(<InstagramIcon className="w-6 h-6 text-pink-500" />);
      const svg = container.querySelector("svg");

      expect(svg?.getAttribute("class")).toBe("w-6 h-6 text-pink-500");
    });
  });

  describe("LinkedInIcon", () => {
    it("renders with default classes and svg attributes", () => {
      const { container } = render(<LinkedInIcon />);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeNull();
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
      expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
      expect(svg?.getAttribute("fill")).toBe("currentColor");
      expect(svg?.getAttribute("class")).toBe("w-5 h-5");
      expect(svg?.querySelector("path")).not.toBeNull();
    });

    it("applies custom className", () => {
      const { container } = render(<LinkedInIcon className="w-7 h-7 text-sky-600" />);
      const svg = container.querySelector("svg");

      expect(svg?.getAttribute("class")).toBe("w-7 h-7 text-sky-600");
    });
  });

  describe("TikTokIcon", () => {
    it("renders with default classes and svg attributes", () => {
      const { container } = render(<TikTokIcon />);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeNull();
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
      expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
      expect(svg?.getAttribute("fill")).toBe("currentColor");
      expect(svg?.getAttribute("class")).toBe("w-5 h-5");
      expect(svg?.querySelector("path")).not.toBeNull();
    });

    it("applies custom className", () => {
      const { container } = render(<TikTokIcon className="w-10 h-10 text-white" />);
      const svg = container.querySelector("svg");

      expect(svg?.getAttribute("class")).toBe("w-10 h-10 text-white");
    });
  });

  describe("XIcon", () => {
    it("renders with default classes and svg attributes", () => {
      const { container } = render(<XIcon />);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeNull();
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
      expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
      expect(svg?.getAttribute("fill")).toBe("currentColor");
      expect(svg?.getAttribute("class")).toBe("w-5 h-5");
      expect(svg?.querySelector("path")).not.toBeNull();
    });

    it("applies custom className", () => {
      const { container } = render(<XIcon className="w-4 h-4 text-gray-400" />);
      const svg = container.querySelector("svg");

      expect(svg?.getAttribute("class")).toBe("w-4 h-4 text-gray-400");
    });
  });
});
