import Image from "next/image";
import { Container } from "./Container";
import { WHATSAPP_URL } from "@/lib/site";
import Link from "next/link";

const btn =
  "inline-block px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-ink text-paper md:items-center"
    >
      <Image
        src="/teste2.jpg"
        alt="Acauã, ave de máscara preta e plumagem clara, em perfil"
        fill
        priority  
        sizes="100vw"
        className="-z-20 object-cover object-[72%_center] md:object-center"
      />

      {/* escurece para garantir a leitura do texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/70 to-ink/10 md:bg-linear-to-r md:from-ink md:via-ink/65 md:to-transparent"
      />

      <Container className="py-[clamp(3rem,8vw,6rem)]">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-mute-dark">
            Acauã Iniciativa
          </p>

          <h1
            id="hero-titulo"
            className="text-[clamp(2.25rem,6vw,4.5rem)]"
          >
            Tecnologia, marketing &amp; segurança.
          </h1>

          <p className="mt-6 max-w-[46ch] border-l-2 border-paper pl-4 text-lg text-paper/80">
            Soluções integradas e orientadas a dados. Unimos engenharia
            robusta, estratégias digitais de impacto e infraestrutura
            resiliente.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className={`${btn} bg-paper text-ink hover:bg-mute-dark rounded-2xl`}
            >
              Conheça nossos projetos
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border border-paper hover:bg-paper hover:text-ink rounded-2xl`}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
