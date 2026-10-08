export const NAV = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
] as const;

export const CONTATO = {
  // enquanto este e-mail não existir, use: "acua.iniciativa@atendimento.com.br"
  email: "contato@acauainiciativa.com.br",
  whatsapp: "(84) 9 9989-3481",
  whatsappDigits: "5584999893481", // DDI + DDD + número, só dígitos
};

export const WHATSAPP_URL = `https://wa.me/${CONTATO.whatsappDigits}?text=${encodeURIComponent(
  "Olá! Gostaria de um orçamento."
)}`;

// Preencha quando os perfis existirem. Vazio = não aparece no site.
const INSTAGRAM_URL = ""; // ex.: "https://instagram.com/acauainiciativa"
const LINKEDIN_URL = ""; // ex.: "https://linkedin.com/company/acauainiciativa"

export const SOCIAL = [
  { sigla: "IG", nome: "Instagram", href: INSTAGRAM_URL },
  { sigla: "IN", nome: "LinkedIn", href: LINKEDIN_URL },
  { sigla: "WA", nome: "WhatsApp", href: WHATSAPP_URL },
].filter((s) => s.href);

export type Frente = {
  icon: "triangle" | "circle" | "square";
  titulo: string;
  descricao: string;
  projeto: { nome: string; detalhe: string; href?: string };
};

export const FRENTES: Frente[] = [
  {
    icon: "triangle",
    titulo: "Tecnologia & Engenharia",
    descricao:
      "Desenvolvimento de software sob medida, arquitetura de sistemas escaláveis e engenharia de dados orientada a performance.",
    projeto: {
      nome: "Projeto Mais Sabor",
      detalhe: "Cardápio online",
      href: "/portfolio",
    },
  },
  {
    icon: "circle",
    titulo: "Marketing & Social Media",
    descricao:
      "Estratégias de posicionamento digital, branding com propósito e gestão de tráfego baseado em inteligência de dados.",
    projeto: {
      nome: "Rebranding Apex",
      detalhe: "Identidade e conversão B2B",
      href: "/portfolio",
    },
  },
  {
    icon: "square",
    titulo: "Cibersegurança & Infra",
    descricao:
      "Auditoria corporativa, testes de intrusão (pentest) e implementação de infraestrutura em nuvem segura.",
    projeto: {
      nome: "Operação Aegis",
      detalhe: "Pentest e adequação LGPD",
      href: "/portfolio",
    },
  },
];

export const FAQ = [
  {
    pergunta: "Como a Acuã integra suas 3 frentes?",
    resposta:
      "Trabalhamos com uma equipe multidisciplinar que compartilha o mesmo diagnóstico e as mesmas métricas. Um site, por exemplo, nasce com engenharia sólida, estratégia de comunicação e segurança desde o primeiro dia, sem retrabalho entre áreas.",
  },
  {
    pergunta: "Vocês atendem pequenas empresas?",
    resposta:
      "Sim. Adaptamos o escopo ao tamanho e ao momento do negócio, começando pelo que gera mais impacto e crescendo junto com você.",
  },
  {
    pergunta: "Como solicitar um orçamento?",
    resposta:
      "Fale com a gente pelo WhatsApp ou pela página de contato. Entendemos sua necessidade e retornamos com uma proposta clara, com prazos e valores.",
  },
] as const;

export const CANAIS = [
  {
    id: "whatsapp",
    sigla: "WA",
    titulo: "WhatsApp",
    destaque: CONTATO.whatsapp,
    descricao: "O jeito mais rápido de falar com a equipe.",
    acao: "Conversar agora",
    href: WHATSAPP_URL,
    externo: true,
  },
  {
    id: "email",
    sigla: "@",
    titulo: "E-mail",
    destaque: CONTATO.email,
    descricao: "Para propostas, parcerias e mensagens mais detalhadas.",
    acao: "Enviar e-mail",
    href: `mailto:${CONTATO.email}`,
    externo: false,
  },
  ...(INSTAGRAM_URL
    ? [
        {
          id: "instagram",
          sigla: "IG",
          titulo: "Instagram",
          destaque: "",
          descricao: "Acompanhe os projetos e os bastidores da Acuã.",
          acao: "Seguir no Instagram",
          href: INSTAGRAM_URL,
          externo: true,
        },
      ]
    : []),
  ...(LINKEDIN_URL
    ? [
        {
          id: "linkedin",
          sigla: "IN",
          titulo: "LinkedIn",
          destaque: "",
          descricao: "Conexões profissionais e novidades da iniciativa.",
          acao: "Ver no LinkedIn",
          href: LINKEDIN_URL,
          externo: true,
        },
      ]
    : []),
];