import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { NAV } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { HeaderScroll } from "./HeaderScroll";

export function Header() {
  return (
    <HeaderScroll>
      <Container className="flex h-18 items-center justify-between transition-[height] duration-300 group-data-[solido=true]:h-16">
      <Link
        href="/"
        aria-label="Acauã Iniciativa, voltar ao topo"
        className="flex items-center"
      >
        <Image
          src="/logo-acaua-claro.png"
          alt="Acauã Iniciativa"
          width={1593}
          height={435}
          priority
          className="logo-header-claro h-12 w-auto sm:h-14"
        />
        <Image
          src="/logo-acaua-escuro.png"
          alt=""
          width={1593}
          height={435}
          priority
          className="logo-header-escuro h-11 w-auto sm:h-12"
        />
      </Link>

        <nav aria-label="Principal" className="hidden sm:block">
          <ul className="flex gap-8 text-sm font-medium uppercase tracking-wider">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="underline-offset-8 transition-colors hover:text-mute-dark hover:underline group-data-[solido=true]:hover:text-mute"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </Container>
    </HeaderScroll>
  );
}