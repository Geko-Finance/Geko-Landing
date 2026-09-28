import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders branding, sections, links, and copyright", () => {
    render(<Footer />);

    expect(screen.getByText("Geko")).toBeDefined();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeDefined();

    const emailLink = screen.getByRole("link", { name: "example@gmail.com" });
    expect(emailLink.getAttribute("href")).toBe("mailto:example@gmail.com");

    expect(screen.getByRole("link", { name: "Features" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Soluciones" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Ventajas" })).toBeDefined();

    expect(screen.getByRole("link", { name: "Contacto" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Descargar Geko" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Sobre nosotros" })).toBeDefined();

    expect(
      screen.getByText(/2025 ©️ Geko App - Todos los derechos reservados/i)
    ).toBeDefined();

    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThanOrEqual(10);
  });
});
