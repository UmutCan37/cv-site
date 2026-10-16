import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <p className="mx-auto max-w-6xl px-6 py-6 font-mono text-xs text-fg-muted md:px-8">
        © {currentYear} {profile.name} · React + Vite ile geliştirildi
      </p>
    </footer>
  );
}