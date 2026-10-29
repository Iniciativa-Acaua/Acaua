export type Categoria = "Tecnologia" | "Marketing" | "Segurança";

export type Projeto = {
  slug: string;
  nome: string;
  categoria: Categoria;
  descricao: string;
  url?: string;      // preencha quando o site estiver no ar
  imagem?: string;   // ex.: "/portfolio/mais-sabor.webp" (1200x750)
  tecnologias?: string[];
};

export const PROJETOS: Projeto[] = [
  {

    slug: "mais-sabor",
    nome: "+Sabor",
    categoria: "Tecnologia",
    descricao:
      "Cardápio online com carrinho, checkout, pagamento online pelo Mercado Pago, conta do cliente e painel administrativo para gerenciar pedidos, cardápio e horários da loja.",
    url: "https://cardapio-do-dia-xi.vercel.app",
    imagem: "/portfolio/mais-sabor.png",
    tecnologias: ["Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind", "Mercado Pago"],

  },
];