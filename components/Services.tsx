import Link from "next/link";
import { Section } from "./Section";
import { FRENTES, type Frente } from "@/lib/site";

function Icon({ name }: { name: Frente["icon"] }) {
  const shape = {
    triangle: <polygon points="22,2 22,30 2,16" />,
    circle: <circle cx="16" cy="16" r="14" />,
    square: <rect x="2" y="2" width="28" height="28" />,
  }[name];

  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="currentColor"
      aria-hidden="true"
    >
      {shape}
    </svg>
  );
}

export function Services() {
  return (
    <Section id="projetos" tone="dark" aria-labelledby="frentes-titulo">
      <header className="text-center">
        <h2
          id="frentes-titulo"
          className="text-[clamp(1.75rem,4vw,2.5rem)]"
        >
          Frentes de atuação
        </h2>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-mute-dark">
          Nossos pilares fundamentais
        </p>
      </header>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {FRENTES.map(({ icon, titulo, descricao, projeto }) => (
          <li key={titulo} className="flex">
            <article className="flex w-full flex-col rounded-card bg-soft p-6 text-ink">
              <Icon name={icon} />

              <h3 className="mt-6 text-base tracking-wide">{titulo}</h3>

              <p className="mt-3 text-base text-mute-light">{descricao}</p>

              <div className="mt-auto border-t border-ink/15 pt-4">
                <p className="mt-6 text-xs uppercase tracking-widest text-mute-light">
                  Projeto destaque
                </p>
                <p className="mt-1 font-semibold">
                  {projeto.href ? (
                    <Link
                      href={projeto.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {projeto.nome}
                    </Link>
                  ) : (
                    projeto.nome
                  )}
                </p>
                <p className="text-sm text-mute-light">{projeto.detalhe}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}