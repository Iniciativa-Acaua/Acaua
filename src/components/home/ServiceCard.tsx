import { Service } from "@/src/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex min-h-[300px] flex-col bg-white p-6 text-black rounded-lg shadow-md transition-transform hover:-translate-y-1">

      <h3 className="text-sm font-bold uppercase leading-tight align-center tracking-wide text-black/80">
        {service.title}
      </h3>

      <p className="mt-4 text-[11px] leading-relaxed text-neutral-600">
        {service.description}
      </p>

      <ul className="mt-auto space-y-1 pt-6">
        {service.items.map((item) => (
          <li
            key={item}
            className="text-[10px] text-neutral-700"
          >
            • {item}
          </li>
        ))}
      </ul>
    </article>
  );
}