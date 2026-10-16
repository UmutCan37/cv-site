import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, projects } from "../data/profile";

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-7 transition-colors hover:border-line-strong">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold">{project.name}</h3>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub reposu (yeni sekmede açılır)`}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-fg-muted transition-colors hover:text-accent"
          >
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        )}
      </div>

      <p className="leading-relaxed text-fg-soft">{project.description}</p>

      <ul aria-label="Kullanılan teknolojiler" className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded bg-chip px-2.5 py-1 font-mono text-xs text-fg-soft">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  const githubHandle = new URL(profile.links.github).pathname.slice(1);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20"
    >
      <SectionHeading
        id="projects-heading"
        index="03"
        label="projeler"
        title="Öne çıkan projeler"
        action={
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent hover:underline"
          >
            github.com/{githubHandle} →
          </a>
        }
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}