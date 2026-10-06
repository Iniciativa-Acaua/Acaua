import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { CONTATO, SOCIAL, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-paper">
      <Container className="py-[clamp(3rem,7vw,5rem)]">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <h2 className="text-2xl">Fale conosco</h2>
            <p className="mt-3 max-w-[40ch] text-base text-mute-dark">
              Pronto para elevar a estrutura digital do seu negócio? Entre em
              contato e agende uma consultoria técnica.
            </p>

            <address className="mt-6 space-y-1 not-italic">
              <p>
                <a
                  href={`mailto:${CONTATO.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {CONTATO.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {CONTATO.whatsapp}
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <Image
              src="/img/logo.svg"
              alt="Acuã Iniciativa"
              width={120}
              height={32}
              className="h-8 w-auto"
            />

            <ul className="flex gap-3">
              {SOCIAL.map(({ sigla, nome, href }) => (
                <li key={sigla}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={nome}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-paper text-xs font-semibold transition-colors hover:bg-paper hover:text-ink"
                  >
                    {sigla}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/15 pt-6 text-sm text-mute-dark sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Acuã Iniciativa. Todos os direitos reservados.</p>
          <p className="flex gap-6">
            <Link href="/privacidade" className="hover:text-paper">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-paper">
              Termos de Uso
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}