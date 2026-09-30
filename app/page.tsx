import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { Hero } from "@/src/components/home/Hero";
import { About } from "@/src/components/home/About";
import { Services } from "@/src/components/home/Services";
import { FAQ } from "@/src/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}