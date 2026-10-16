import { Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "../data/profile";

const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { id: "github", label: "GitHub", href: profile.links.github, Icon: Github },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24"
    >
      <div className="flex flex-col gap-10 rounded-2xl border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="min-w-0">
          <p className="font-mono text-sm text-fg-muted">
            <span className="text-accent">$</span> ./iletisim --yeni-firsat
          </p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Bir sonraki projede birlikte çalışalım.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block font-mono text-lg break-all text-accent hover:underline md:text-xl"
          >
            {profile.email}
          </a>
        </div>

                <ul className="flex shrink-0 flex-col gap-3 font-mono text-sm">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-accent"
              >
                <link.Icon size={18} aria-hidden="true" />
                {link.label} ↗
              </a>
            </li>
          ))}
          <li className="inline-flex min-h-11 items-center gap-3 text-fg-muted">
            <MapPin size={18} aria-hidden="true" />
            {profile.location}, TR
          </li>
        </ul>
      </div>
    </section>
  );
}