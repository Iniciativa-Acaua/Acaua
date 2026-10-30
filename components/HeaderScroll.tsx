"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const PAGINAS_COM_HERO = ["/"];

export function HeaderScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const atualizar = (e?: Event) => {
      // Funciona mesmo que quem rola seja o body ou um wrapper, e não a janela
      const alvo = e?.target instanceof Element ? e.target : null;
      const topo = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        alvo?.scrollTop ?? 0
      );
      setRolou(topo > 20);
    };

    atualizar();
    // capture: true captura o scroll de qualquer elemento da página
    window.addEventListener("scroll", atualizar, { passive: true, capture: true });
    return () => window.removeEventListener("scroll", atualizar, true);
  }, []);

  const comHero = PAGINAS_COM_HERO.includes(pathname);
  const solido = rolou || !comHero;

  return (
    <>
      <header
        id="topo"
        data-solido={solido}
        className={`group fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-300 ${
          solido
            ? "bg-paper text-ink shadow-md"
            : "bg-transparent text-paper"
        }`}
      >
        {children}
      </header>

      {!comHero && <div aria-hidden="true" className="h-[4.5rem]" />}
    </>
  );
}