import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, education } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20"
    >
      <SectionHeading
        id="about-heading"
        index="01"
        label="hakkımda"
        title="Kurumsal ERP’den modern mimarilere"
      />

      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-fg-soft">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-12 mb-4 font-mono text-sm text-fg-muted">eğitim</h3>
      <ul className="grid gap-4 md:grid-cols-3">
        {education.map((item) => (
          <li key={item.id} className="rounded-xl border border-line p-5">
            <GraduationCap size={20} aria-hidden="true" className="text-accent" />
            <p className="mt-3 font-semibold text-fg">{item.school}</p>
            <p className="mt-1 text-fg-soft">{item.program}</p>
            <p className="mt-3 font-mono text-xs text-fg-muted">
              {item.period}
              {item.note && ` · ${item.note}`}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}