import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CANAIS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato | Acuã Iniciativa",
  description:
    "Fale com a equipe da Acuã Iniciativa por WhatsApp, e-mail ou redes sociais.",
};

export default function ContatoPage() {
  return (
    <main id="conteudo">
      <Section tone="dark" aria-labelledby="contato-titulo">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-mute-dark">
          Contato
        </p>
        <h1
          id="contato-titulo"
          className="max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]"
        >
          Vamos conversar.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg text-mute-dark">
          Escolha o canal que for mais confortável para você. Para orçamentos,
          o WhatsApp costuma ser o caminho mais rápido.
        </p>
      </Section>

      <Section tone="light" aria-label="Canais de contato">
        <ul className="grid gap-6 sm:grid-cols-2">
          {CANAIS.map((canal) => (
            <li key={canal.id}>
              <a
                href={canal.href}
                {...(canal.externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col rounded-card bg-soft p-6 text-ink transition-shadow hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper"
                >
                  {canal.sigla}
                </span>

                <h2 className="mt-6 text-xl">{canal.titulo}</h2>

                {canal.destaque && (
                  <p className="mt-1 break-all font-medium">
                    {canal.destaque}
                  </p>
                )}

                <p className="mt-2 text-base text-mute-light">
                  {canal.descricao}
                </p>

                <span className="mt-auto pt-6 text-sm font-medium uppercase tracking-wider">
                  {canal.acao}{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                  {canal.externo && (
                    <span className="sr-only"> (abre em nova aba)</span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}