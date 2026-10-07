import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { NAV } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header id="topo" className="sticky top-0 z-40 bg-ink text-paper">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Acuã Iniciativa, voltar ao topo">
          <Image
            src="/logo.svg"
            alt=""
            width={120}
            height={50}
            className="h-12 w-auto"
          />
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