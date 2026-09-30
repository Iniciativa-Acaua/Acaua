import Image from "next/image";

export function About() {
  return (
    <section
      id="sobre"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="inline-block border-b-2 border-black pb-2 text-3xl font-medium uppercase tracking-tight">
            Quem somos
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-relaxed text-neutral-700">
            <p>
              Inspirada pela visão aguçada e adaptabilidade do pássaro Acuã,
              nossa iniciativa nasceu para prover problemas complexos do
              ecossistema digital.
            </p>

            <p>
              Acreditamos no minimalismo funcional: remover o excesso para
              focar na performance. Nossa equipe multidisciplinar atua na
              interseção entre o desenvolvimento técnico, comunicação
              estratégica e proteção de dados corporativos.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/quem-somos.svg"
            alt="Equipe Acuã"
            
            className="object-cover"
            width={500}
            height={50}
            priority
          />
        </div>
      </div>
    </section>
  );
}