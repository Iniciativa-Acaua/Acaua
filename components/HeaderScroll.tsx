"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

// Páginas que começam com um hero grande por baixo do header.
// Nas demais, o header já nasce com fundo e ganha um espaçador.
const PAGINAS_COM_HERO = ["/"];

export function HeaderScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const atualizar = () => setRolou(window.scrollY > 20);
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    return () => window.removeEventListener("scroll", atualizar);
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
            ? "bg-paper/95 text-ink shadow-sm backdrop-blur"
            : "bg-transparent text-paper"
        }`}
      >
        {children}
      </header>

      {/* Como o header agora é fixed, reserva o espaço nas páginas sem hero */}
      {!comHero && <div aria-hidden="true" className="h-[4.5rem]" />}
    </>
  );
}