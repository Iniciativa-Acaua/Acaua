import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Faq />
      </main>
    </>
  );
}