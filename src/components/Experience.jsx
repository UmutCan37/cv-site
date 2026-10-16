import SectionHeading from "./SectionHeading";
import { experiences } from "../data/profile";

// "2026-04" → "2026.04"
const formatMonth = (value) => value.replace("-", ".");

function Period({ start, end }) {
  return (
    <p className="font-mono text-sm text-fg-muted">
      <time dateTime={start}>{formatMonth(start)}</time>
      {" → "}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : "şimdi"}
    </p>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20"
    >
      <SectionHeading id="experience-heading" index="02" label="deneyim" title="Deneyim" />

      <ol className="ml-1.5 space-y-9 border-l border-line-strong">
        {experiences.map((job) => {
          const isCurrent = job.end === null;

          return (
            <li key={job.id} className="relative pl-8">
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[7px] size-3.5 rounded-full ${
                  isCurrent ? "bg-accent" : "border-2 border-line-strong bg-canvas"
                }`}
              />
              <Period start={job.start} end={job.end} />
              <h3 className="mt-1 text-xl font-semibold">
                {job.role} <span className="font-normal text-fg-muted">@ {job.company}</span>
              </h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-fg-soft">{job.summary}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}