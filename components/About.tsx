import Image from "next/image";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre" tone="light" aria-labelledby="sobre-titulo">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2
            id="sobre-titulo"
            className="inline-block border-b-2 border-ink pb-1 text-[clamp(1.75rem,4vw,2.5rem)]"
          >
            Quem somos
          </h2>

          <div className="mt-8 max-w-[52ch] space-y-6 text-lg text-mute-light">
            <p>
              Inspirada pela visão aguçada e adaptabilidade do pássaro Acuã, a
              Acuã Iniciativa nasce para resolver problemas complexos do
              ecossistema digital.
            </p>
            <p>
              Acreditamos no minimalismo funcional: remover o excesso para
              focar na performance. Nossa equipe multidisciplinar atua na
              intersecção entre o desenvolvimento técnico, a comunicação
              estratégica e a proteção de dados corporativos.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/quem-somos.svg"
            alt="Ilustração de uma pessoa com um laptop, cercada por elementos de tecnologia e comunicação"
            className="object-cover"
            width={500}
            height={50}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </Section>
  );
}