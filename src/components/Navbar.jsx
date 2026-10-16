import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { href: "#about", label: "hakkımda" },
  { href: "#experience", label: "deneyim" },
  { href: "#projects", label: "projeler" },
  { href: "#skills", label: "yetenekler" },
  { href: "#contact", label: "iletişim" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü açıkken Esc ile kapanabilsin
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav
        aria-label="Ana menü"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8"
      >
        <a href="#top" className="font-mono font-bold text-fg">
          <span className="text-accent">~/</span>umutcanyavru
        </a>

        <ul className="hidden items-center gap-6 font-mono text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-fg-muted transition-colors hover:text-accent"
              >
                ./{item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="rounded-md border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            cv.pdf ↓
          </a>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <ul
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="border-t border-line px-6 py-2 font-mono md:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={closeMenu}
              className="block py-3 text-fg-soft transition-colors hover:text-accent"
            >
              ./{item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}