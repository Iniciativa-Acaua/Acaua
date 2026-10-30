type Cliente = {
  nome: string;
  logo?: string; // caminho em /public, ex: "/clientes/tp.svg"
  href?: string;
};

// Coloque aqui apenas empresas reais com as quais a Acuã já trabalhou.
const clientes: Cliente[] = [
  { nome: "TP Streetwear" },
  { nome: "+Sabor", href: "https://cardapio-do-dia-xi.vercel.app" },
  // { nome: "Empresa X", logo: "/clientes/empresa-x.svg" },
];

function Item({ cliente }: { cliente: Cliente }) {
  const conteudo = cliente.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cliente.logo}
      alt={cliente.nome}
      loading="lazy"
      className="h-9 w-auto max-w-[8rem] object-contain"
    />
  ) : (
    <span className="text-lg font-bold tracking-tight text-neutral-800">
      {cliente.nome}
    </span>
  );

  const classes =
    "flex h-20 w-52 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 " +
    "opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0";

  return cliente.href ? (
    <a href={cliente.href} target="_blank" rel="noopener noreferrer" className={classes}>
      {conteudo}
    </a>
  ) : (
    <div className={classes}>{conteudo}</div>
  );
}

export default function ClientesCarrossel() {
  // Repete a lista até ter itens suficientes para preencher a tela
  const repeticoes = Math.max(1, Math.ceil(8 / clientes.length));
  const base = Array.from({ length: repeticoes }, () => clientes).flat();

  return (
    <section className="py-20" aria-labelledby="titulo-clientes">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Quem confia na gente
        </p>
        <h2
          id="titulo-clientes"
          className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Empresas com as quais <span className="text-orange-500">já trabalhamos</span>
        </h2>
      </div>

      <div className="marquee mt-12" style={{ ["--duracao" as string]: "40s" }}>
        <ul className="marquee-faixa">
          {/* duas cópias: ao chegar em -50% o loop recomeça sem "pulo" */}
          {[0, 1].map((copia) =>
            base.map((c, i) => (
              <li
                key={`${copia}-${i}`}
                aria-hidden={copia === 1}
                className="px-3"
              >
                <Item cliente={c} />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}