export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-black px-6 py-14 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold uppercase">
            Fale conosco
          </h2>

          <p className="mt-2 max-w-md text-xs leading-relaxed text-white/60">
            Pronto para elevar sua estratégia digital ou solucionar
            desafios complexos? Entre em contato.
          </p>

          <div className="mt-6 space-y-2 text-xs">
            <p>contato@acauainiciativa.com.br</p>
            <p>WhatsApp: (84) 00000-0000</p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="text-right">
            <p className="text-lg font-bold">ACUÃ</p>
            <p className="text-[7px] tracking-[0.3em]">
              INICIATIVA
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-xs transition hover:bg-white hover:text-black"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-xs transition hover:bg-white hover:text-black"
            >
              IN
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-xs transition hover:bg-white hover:text-black"
            >
              WA
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-5 text-[9px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 Acuã Iniciativa. Todos os direitos reservados.
        </p>

        <div className="flex gap-5">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}