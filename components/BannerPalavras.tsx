"use client";

import { useEffect, useState } from "react";

const palavras = [
  "Tecnologia",
  "Marketing",
  "Segurança",
  "Sites",
  "Sistemas",
  "Identidade visual",
  "Automação",
];

// Quantas palavras aparecem acima e abaixo da ativa
const VISIVEIS = 3;
const ALTURA = 64; // px por linha (deve bater com h-16 abaixo)

export default function BannerPalavras() {
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;
    const id = setInterval(
      () => setAtivo((a) => (a + 1) % palavras.length),
      2200
    );
    return () => clearInterval(id);
  }, [pausado]);

  return (
    <section
      className="bg-neutral-950 py-24 text-white"
      aria-labelledby="titulo-palavras"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            O que fazemos
          </p>
          <h2
            id="titulo-palavras"
            className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl"
          >
            Soluções completas para <span className="text-orange-500">a sua iniciativa</span>
          </h2>
          <p className="mt-5 max-w-md text-neutral-400">
            Da ideia ao site no ar: unimos tecnologia, marketing e segurança
            para o seu negócio crescer com tranquilidade.
          </p>
        </div>

        {/* Lista girando */}
        <div
          className="relative mx-auto h-[448px] w-full max-w-md overflow-hidden"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          aria-hidden="true"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)",
          }}
        >
          {palavras.map((palavra, i) => {
            // distância circular até o item ativo (negativo = acima)
            let d = i - ativo;
            const metade = palavras.length / 2;
            if (d > metade) d -= palavras.length;
            if (d < -metade) d += palavras.length;

            const distancia = Math.abs(d);
            const dentro = distancia <= VISIVEIS;

            return (
              <div
                key={palavra}
                className="absolute left-0 flex h-16 w-full items-center text-4xl font-extrabold tracking-tight transition-all duration-700 ease-out md:text-5xl"
                style={{
                  top: "50%",
                  transform: `translateY(${d * ALTURA - ALTURA / 2}px) scale(${
                    d === 0 ? 1 : 0.9
                  })`,
                  transformOrigin: "left center",
                  opacity: !dentro ? 0 : d === 0 ? 1 : 0.35 - distancia * 0.06,
                  filter: d === 0 ? "none" : `blur(${distancia * 1.5}px)`,
                  color: d === 0 ? "#f97316" : "#ffffff",
                }}
              >
                {palavra}
              </div>
            );
          })}
        </div>

        {/* Versão acessível (leitores de tela) */}
        <ul className="sr-only">
          {palavras.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}