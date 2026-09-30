import { faq } from "@/src/data/faq";
import { FAQItem } from "./FAQItem";

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-medium uppercase tracking-wide">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10">
          {faq.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}