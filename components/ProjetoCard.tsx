import Image from "next/image";
import type { Projeto } from "@/lib/projetos";

export function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const { nome, categoria, descricao, url, imagem } = projeto;

  const conteudo = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        {imagem ? (
          <Image
            src={imagem}
            alt={`Prévia do site ${nome}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center font-heading text-6xl text-paper/20"
          >
            {nome.charAt(0)}
          </div>
        )}

        {!url && (
          <span className="absolute left-3 top-3 bg-paper px-2 py-1 text-[11px] font-medium uppercase tracking-widest text-ink">
            Em breve
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-mute-light">
          {categoria}
        </p>
        <h3 className="mt-2 text-lg">{nome}</h3>
        <p className="mt-2 text-base text-mute-light">{descricao}</p>

        {url && (
          <span className="mt-auto pt-5 text-sm font-medium uppercase tracking-wider">
            Visitar site <span aria-hidden="true">↗</span>
          </span>
        )}
      </div>
    </>
  );

  const base =
    "group flex h-full flex-col overflow-hidden rounded-card bg-soft text-ink";

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} transition-shadow hover:shadow-lg`}
    >
      {conteudo}
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  ) : (
    <div className={base}>{conteudo}</div>
  );
}