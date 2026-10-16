import { Download } from "lucide-react";
import { profile } from "../data/profile";

const HERO_STACK = ["C#", ".NET", "SQL Server", "Angular"];

// Kod kartı için küçük syntax yardımcıları
const Keyword = ({ children }) => <span className="text-code-keyword">{children}</span>;
const TypeName = ({ children }) => <span className="text-code-type">{children}</span>;
const Str = ({ children }) => <span className="text-code-string">"{children}"</span>;
const Literal = ({ children }) => <span className="text-code-literal">{children}</span>;

function CodeCard() {
  return (
    // Karttaki bilgiler sayfada zaten var; ekran okuyucu tekrar okumasın
    <div aria-hidden="true" className="min-w-0 overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-xs text-fg-muted">Developer.cs</span>
      </div>

      <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-fg-soft">
        <code>
          <span className="block">
            <Keyword>public record</Keyword> <TypeName>Developer</TypeName>
          </span>
          <span className="block">{"{"}</span>
          <span className="block pl-4">
            Name = <Str>{profile.name}</Str>,
          </span>
          <span className="block pl-4">
            Role = <Str>{profile.currentRole}</Str>,
          </span>
          <span className="block pl-4">
            Stack = [
            {HERO_STACK.map((item, index) => (
              <span key={item}>
                <Str>{item}</Str>
                {index < HERO_STACK.length - 1 && ", "}
              </span>
            ))}
            ],
          </span>
          <span className="block pl-4">
            Location = <Str>{profile.location}</Str>,
          </span>
          <span className="block pl-4">
            OpenToWork = <Literal>true</Literal>
          </span>
          <span className="block">{"};"}</span>
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pt-20 pb-16 md:px-8 lg:flex-row lg:items-center lg:pt-28"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-4">
          <img
            src={profile.photoUrl}
            alt={profile.name}
            width="72"
            height="72"
            fetchPriority="high"
            className="size-[72px] rounded-full border-2 border-accent object-cover"
          />
          <p className="font-mono text-sm text-fg-muted">
            <span className="text-accent">$</span> whoami
          </p>
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-3 font-mono text-lg text-accent md:text-xl">{profile.title}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-soft">{profile.intro}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            <Download size={18} aria-hidden="true" />
            CV İndir
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center rounded-md border border-line-strong px-6 font-semibold text-fg transition-colors hover:border-accent"
          >
            Projelere Göz At
          </a>
        </div>
      </div>

      <div className="w-full lg:max-w-md">
        <CodeCard />
      </div>
    </section>
  );
}