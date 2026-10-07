import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ProjetoCard } from "@/components/ProjetoCard";
import { PROJETOS } from "@/lib/projetos";

export const metadata: Metadata = {
  title: "Portfólio | Acuã Iniciativa",
  description:
    "Projetos de tecnologia, marketing e segurança desenvolvidos pela Acuã Iniciativa.",
};

export default function PortfolioPage() {
  return (
    <main id="conteudo">
      <Section tone="dark" aria-labelledby="portfolio-titulo">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-mute-dark">
          Portfólio
        </p>
        <h1
          id="portfolio-titulo"
          className="max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]"
        >
          Projetos que saem do papel.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg text-mute-dark">
          Sites, marcas e estruturas seguras criados por uma equipe que une
          engenharia, estratégia e proteção de dados.
        </p>
      </Section>

      <Section tone="light" aria-label="Lista de projetos">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJETOS.map((projeto) => (
            <li key={projeto.slug}>
              <ProjetoCard projeto={projeto} />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}