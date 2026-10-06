import { Section } from "./Section";
import { FAQ } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ pergunta, resposta }) => ({
    "@type": "Question",
    name: pergunta,
    acceptedAnswer: { "@type": "Answer", text: resposta },
  })),
};

export function Faq() {
  return (
    <Section id="faq" tone="light" aria-labelledby="faq-titulo">
      <h2
        id="faq-titulo"
        className="text-center text-[clamp(1.75rem,4vw,2.5rem)]"
      >
        Perguntas frequentes
      </h2>

      <div className="mx-auto mt-12 max-w-3xl border-t border-ink/20">
        {FAQ.map(({ pergunta, resposta }) => (
          <details key={pergunta} className="group border-b border-ink/20">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium uppercase tracking-wide transition-colors hover:text-mute-light [&::-webkit-details-marker]:hidden">
              {pergunta}
              <span
                aria-hidden="true"
                className="text-3xl font-light leading-none transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <p className="max-w-[60ch] pb-6 pr-10 text-lg text-mute-light">
              {resposta}
            </p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Section>
  );
} 