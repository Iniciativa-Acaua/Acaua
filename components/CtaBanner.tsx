import Link from "next/link";
import { Container } from "./Container";
import Reveal from "./Reveal";

export function CtaBanner() {
  return (
    <section aria-labelledby="titulo-cta" className="bg-paper py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink px-6 py-16 text-center text-paper md:px-16 md:py-20">
            {/* Luzes animadas ao fundo */}
            <div
              aria-hidden="true"
              className="blob-a pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="blob-b pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl"
            />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mute-dark">
                Vamos conversar
              </p>

              <h2
                id="titulo-cta"
                className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight md:text-5xl"
              >
                Pronto para tirar a sua ideia{" "}
                <span className="texto-brilho">do papel?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base text-mute-dark md:text-lg">
                Conte o que você precisa e a gente monta o melhor caminho,
                da primeira conversa até o site no ar.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-xl"
                >
                  Fale com a gente
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-full border border-white/25 px-8 py-3.5 font-semibold transition hover:border-white/60 hover:bg-white/5"
                >
                  Ver portfólio
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}