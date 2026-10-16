export default function SectionHeading({ id, index, label, title, action = null }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="font-mono text-sm text-accent">
          {"// "}
          {index} — {label}
        </p>
        <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}