import Image from "next/image";
import { Container } from "./Container";
import { WHATSAPP_URL } from "@/lib/site";

const btn =
  "inline-block px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors";

export function Hero() {
  return (
    <section className="bg-ink text-paper" aria-labelledby="hero-titulo">
      <Container className="grid items-center gap-10 py-[clamp(3rem,8vw,6rem)] md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-mute-dark">
            Acuã Iniciativa
          </p>

          <h1
            id="hero-titulo"
            className="text-[clamp(2.25rem,6vw,4.5rem)]"
          >
            Tecnologia, marketing &amp; segurança.
          </h1>

          <p className="mt-6 max-w-[46ch] border-l-2 border-paper pl-4 text-lg text-mute-dark">
            Soluções integradas e orientadas a dados. Unimos engenharia
            robusta, estratégias digitais de impacto e infraestrutura
            resiliente.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className={`${btn} bg-paper text-ink hover:bg-mute-dark`}
            >
              Conheça nossos projetos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border border-paper hover:bg-paper hover:text-ink`}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-paper">
          <Image
            src="/bird-hero.svg"
            alt="Acuã, ave de plumagem preta e branca, em perfil"
            width={800}
            height={1000}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/5] max-h-[70svh] w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}