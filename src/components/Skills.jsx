import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/profile";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20"
    >
      <SectionHeading id="skills-heading" index="04" label="yetenekler" title="Yetenekler" />

      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id} className="rounded-xl border border-line p-6">
            <h3 className="font-mono text-sm text-accent">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-line px-2.5 py-1 text-sm text-fg-soft"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}