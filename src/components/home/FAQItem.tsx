"use client";

import { useState } from "react";
import { FAQ } from "@/src/types";

interface FAQItemProps {
  item: FAQ;
}

export function FAQItem({ item }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-6 text-[11px] font-medium uppercase tracking-wide">
          {item.question}
        </span>

        <span className="text-lg font-light">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="pb-5 pr-8 text-xs leading-relaxed text-neutral-600">
          {item.answer}
        </div>
      )}
    </div>
  );
}