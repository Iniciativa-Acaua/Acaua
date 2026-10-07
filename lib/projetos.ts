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
    nome: "Mais Sabor",
    categoria: "Tecnologia",
    descricao: "Cardápio online com pedidos e carrinho.",
  },
  {
    slug: "apex",
    nome: "Rebranding Apex",
    categoria: "Marketing",
    descricao: "Identidade visual e conversão B2B.",
  },
  {
    slug: "aegis",
    nome: "Operação Aegis",
    categoria: "Segurança",
    descricao: "Pentest e adequação à LGPD.",
  },
];