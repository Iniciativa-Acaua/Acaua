export type Categoria = "Tecnologia" | "Marketing" | "Segurança";

export type Projeto = {
  slug: string;
  nome: string;
  categoria: Categoria;
  descricao: string;
  url?: string;      // preencha quando o site estiver no ar
  imagem?: string;   // ex.: "/portfolio/mais-sabor.webp" (1200x750)
};

export const PROJETOS: Projeto[] = [
  {

    slug: "mais-sabor",
    titulo: "+Sabor",
    categoria: "Plataforma web",
    descricao:
      "Cardápio online com carrinho, checkout, pagamento online pelo Mercado Pago, conta do cliente e painel administrativo para gerenciar pedidos, cardápio e horários da loja.",
    url: "https://cardapio-do-dia-xi.vercel.app",
    imagem: "/portfolio/mais-sabor.png",
    tecnologias: ["Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind", "Mercado Pago"],

  },
  {
    slug: "apex",
    nome: "Rebranding Apex",
    url: "https://cardapio-do-dia-xi.vercel.app/",
    categoria: "Marketing",
    descricao: "Identidade visual e conversão B2B.",
  },
  {
    slug: "aegis",
    nome: "Operação Aegis",
    url: "https://cardapio-do-dia-xi.vercel.app/",
    categoria: "Segurança",
    descricao: "Pentest e adequação à LGPD.",
  },
];