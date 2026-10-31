import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import ClientesCarrossel from "@/components/ClientesCarrossel";
import BannerPalavras from "@/components/BannerPalavras";
import Reveal from "@/components/Reveal";
import { SolucaoDestaque } from "@/components/SolucaoDestaque";
import { CtaBanner } from "@/components/CtaBanner";
import { FrentesAtuacao } from "@/components/FrentesAtuacao";

export default function Home() {
  return (
    <>
      <main id="conteudo">
        <Hero />
        <Reveal>
          <BannerPalavras />
        </Reveal>
        <CtaBanner />
        <About />
        <Reveal>
          <ClientesCarrossel />
        </Reveal>
        <SolucaoDestaque
          titulo="Solução destaque"
          descricao="E-commerce da +Sabor"
          imagem="/+sabor.jpg"
          alt="Tela inicial da loja TP"
          href="https://cardapio-do-dia-xi.vercel.app"
        />
        <FrentesAtuacao/>
        <Faq />
      </main>
    </>
  );
}