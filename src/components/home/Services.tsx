import { services } from "@/src/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section
      id="projetos"
      className="bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-medium uppercase tracking-wide">
            Frentes de atuação
          </h2>

          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
            Nossos pilares fundamentais
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}