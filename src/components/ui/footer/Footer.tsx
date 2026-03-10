import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import XIcon from "@/components/icons/XIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Ventajas", href: "#ventajas" },
];

const resourceLinks = [
  { label: "Contacto", href: "#contacto" },
  { label: "Descargar Geko", href: "#descargar" },
  { label: "Sobre nosotros", href: "#nosotros" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "Twitter (X)", href: "https://x.com", icon: <XIcon /> },
  { label: "TikTok", href: "https://tiktok.com", icon: <TikTokIcon /> },
  { label: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
];

const bottomSocialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
  { label: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedInIcon /> },
  { label: "X (Twitter)", href: "https://x.com", icon: <XIcon /> },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black px-4 pb-6 pt-2">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-8 py-10 md:px-12 md:py-14">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Logo */}
            <span className="text-2xl font-bold text-white tracking-tight">Geko</span>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            {/* Email */}
            <a
              href="mailto:example@gmail.com"
              className="text-white/60 text-sm transition-colors duration-200 hover:text-white"
            >
              example@gmail.com
            </a>
          </div>

          {/* Links column */}
          <FooterColumn title="Links" links={navLinks} />

          {/* Resources column */}
          <FooterColumn title="Recursos" links={resourceLinks} />

          {/* Socials column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-wide">Socials</h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/50 text-sm transition-colors duration-200 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/40 text-sm">
            2025 ©️ Geko App - Todos los derechos reservados
          </p>

          <div className="flex items-center gap-2">
            {bottomSocialLinks.map((social) => (
              <SocialIcon key={social.label} href={social.href} label={social.label}>
                {social.icon}
              </SocialIcon>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
