import { Container } from "./Container";
import Reveal from "./Reveal";

type Frente = {
  id: string;
  titulo: string;
  descricao: string;
  itens: string[];
  icone: "triangulo" | "circulo" | "quadrado";
};

const frentes: Frente[] = [
  {
    id: "tecnologia",
    titulo: "Tecnologia & Engenharia",
    descricao:
      "Desenvolvimento de software sob medida, arquitetura de sistemas escaláveis e engenharia de dados orientada a performance.",
    itens: [
      "Sites e sistemas sob medida",
      "Lojas e cardápios online com pagamento",
      "Painéis administrativos",
      "Integrações e automações",
    ],
    icone: "triangulo",
  },
  {
    id: "marketing",
    titulo: "Marketing & Social Media",
    descricao:
      "Estratégias de posicionamento digital, branding com propósito e gestão de tráfego baseado em inteligência de dados.",
    itens: [
      "Identidade visual e branding",
      "Gestão de redes sociais",
      "Tráfego pago e campanhas",
      "Posicionamento digital",
    ],
    icone: "circulo",
  },
  {
    id: "seguranca",
    titulo: "Cibersegurança & Infra",
    descricao:
      "Auditoria corporativa, testes de intrusão (pentest) e implementação de infraestrutura em nuvem segura.",
    itens: [
      "Auditoria de segurança",
      "Testes de intrusão (pentest)",
      "Infraestrutura em nuvem segura",
      "Adequação à LGPD",
    ],
    icone: "quadrado",
  },
];

function Icone({ tipo }: { tipo: Frente["icone"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9 fill-current text-ink transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
      aria-hidden="true"
    >
      {tipo === "triangulo" && <polygon points="20,3 4,12 20,21" />}
      {tipo === "circulo" && <circle cx="12" cy="12" r="9" />}
      {tipo === "quadrado" && <rect x="4" y="4" width="16" height="16" />}
    </svg>
  );
}

export function FrentesAtuacao() {
  return (
    <section
      id="frentes"
      aria-labelledby="titulo-frentes"
      className="bg-ink py-20 text-paper"
    >
      <Container>
        <Reveal className="text-center">
          <h2
            id="titulo-frentes"
            className="font-heading text-3xl font-semibold uppercase tracking-wide md:text-5xl"
          >
            Frentes de atuação
          </h2>
          <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-mute-dark">
            Nossos pilares fundamentais
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {frentes.map((f, i) => (
            <Reveal key={f.id} delay={i * 150} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl bg-paper p-8 text-ink transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/10">
                <div className="flex items-start justify-between">
                  <Icone tipo={f.icone} />
                  <span
                    aria-hidden="true"
                    className="font-heading text-sm font-semibold tracking-widest text-neutral-400"
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wider">
                  {f.titulo}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {f.descricao}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-neutral-300 pt-6 text-sm">
                  {f.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-ink transition-transform duration-300 group-hover:rotate-45"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}