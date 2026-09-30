import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bird.jpg"
          alt="Ave representando a identidade visual da Acuã"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pt-20">
        <div className="max-w-xl text-white">
          <p className="mb-5 text-xs font-medium tracking-[0.3em]">
            ACUÃ INICIATIVA
          </p>

          <h1 className="max-w-lg text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Tecnologia,
            <br />
            Marketing &
            <br />
            Segurança.
          </h1>

          <div className="mt-7 max-w-md border-l-2 border-white pl-5">
            <p className="text-sm leading-relaxed text-white/80">
              Soluções integradas e orientadas a dados. Unimos estratégia,
              tecnologia e segurança para construir soluções digitais de
              impacto.
            </p>
          </div>

          <a
            href="#projetos"
            className="mt-8 inline-flex bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-white hover:outline hover:outline-1 hover:outline-white"
          >
            Conheça nossos projetos
          </a>
        </div>
      </div>
    </section>
  );
}