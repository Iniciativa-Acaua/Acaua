import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Faq } from "@/components/Faq";
import ClientesCarrossel from "@/components/ClientesCarrossel";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <main id="conteudo">
        <Hero />
        <About />
        <Reveal>
          <ClientesCarrossel />
        </Reveal>
        <Services />
        <Faq />
      </main>
    </>
  );
}