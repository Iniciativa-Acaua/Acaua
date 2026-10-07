import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { NAV } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header id="topo" className="sticky top-0 z-40 bg-ink text-paper">
      <Container className="flex h-18 items-center justify-between">
        <Link
          href="/"
          aria-label="Acuã Iniciativa, voltar ao topo"
          className="flex items-center gap-3"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-800 ring-2 ring-paper ">
            <Image
              src="/Logo Acauã.svg"
              alt=""
              width={32}
              height={32}
              priority
              className="h-12 w-12 object-contain"
            />
          </span>

          <span className="leading-none">
            <span className="block font-heading text-lg font-semibold tracking-wide">
              ACAUÃ
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-mute-dark">
              Iniciativa
            </span>
          </span>
        </Link>

                <nav aria-label="Principal" className="hidden sm:block">
          <ul className="flex gap-8 text-sm font-medium uppercase tracking-wider">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="underline-offset-8 transition-colors hover:text-mute-dark hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}