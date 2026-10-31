import Image from "next/image";
import { Container } from "./Container";
import Reveal from "./Reveal";

type Props = {
  titulo?: string;
  descricao?: string;
  imagem?: string;
  alt?: string;
  href?: string;
};

export function SolucaoDestaque({
  titulo = "Solução destaque",
  descricao = "Um cardápio digital que abrange as mais sofisticadas funções, incluindo checkout funcional!",
  imagem = "/public/+sabor.jpg",
  alt = "Tela inicial do cardápio digital +Sabor",
  href = "https://cardapio-do-dia-xi.vercel.app",
}: Props) {
  return (
    <section
      aria-labelledby="titulo-destaque"
      className="bg-ink py-20 text-paper"
    >
      <Container className="text-center">
        <Reveal>
          <h2
            id="titulo-destaque"
            className="font-heading text-3xl font-light uppercase tracking-[0.15em] md:text-4xl"
          >
            {titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base underline decoration-white/30 underline-offset-4 md:text-lg">
            {descricao}
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-12 max-w-4xl">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${titulo}: abrir o site no ar (abre em nova aba)`}
            className="group relative block pb-6"
          >
            {/* "Navegador" */}
            <div className="overflow-hidden rounded-xl border border-white/15 bg-neutral-900 shadow-2xl shadow-black/50 transition duration-500 group-hover:-translate-y-1 group-hover:border-white/30">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 hidden flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-left text-xs text-white/50 sm:block">
                  {href.replace(/^https?:\/\//, "")}
                </span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={imagem}
                  alt={alt}
                  fill
                  sizes="(min-width: 896px) 896px, 100vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Botão sobreposto à borda de baixo */}
            <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-red-600 px-7 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-red-950/40 transition group-hover:bg-red-500 group-hover:shadow-xl">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              Ver no ar
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}