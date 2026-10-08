import { Section } from "./Section";

type Props = {
  titulo: string;
  atualizado: string;
  children: React.ReactNode;
};

export function LegalPage({ titulo, atualizado, children }: Props) {
  return (
    <main id="conteudo">
      <Section tone="dark" aria-labelledby="legal-titulo">
        <h1 id="legal-titulo" className="text-[clamp(2rem,5vw,3.5rem)]">
          {titulo}
        </h1>
        <p className="mt-4 text-sm text-mute-dark">
          Última atualização: {atualizado}
        </p>
      </Section>

      <Section tone="light">
        <div className="max-w-3xl text-lg text-mute-light [&_a]:text-ink [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </Section>
    </main>
  );
}