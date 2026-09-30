"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "SOBRE", href: "#sobre" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTATO", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
            <Image
            src="/logo.svg"
            alt="Logo"
            className="mr-2 h-12 w-12 text-white"
            width={50}
            height={50}
            priority
            />
            <a href="#" className="text-xl font-black tracking-tight text-white">
            ACUÃ
            <span className="block text-[7px] font-medium tracking-[0.25em]">
                INICIATIVA
            </span>
            </a>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium text-white transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Abrir menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xs text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}