"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className={`surface-panel overflow-hidden rounded-[1.6rem] px-6 py-5 transition-[background-color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "border-[rgba(201,164,122,0.34)] bg-[rgba(255,255,255,0.05)]"
                : ""
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex((currentIndex) =>
                  currentIndex === index ? null : index,
                )
              }
              className="flex w-full items-center justify-between gap-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-white">
                {item.question}
              </span>

              <span className="flex shrink-0 items-center gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold-soft)]">
                  0{index + 1}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[var(--gold-soft)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity,padding-top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen
                  ? "grid-rows-[1fr] pt-4 opacity-100"
                  : "grid-rows-[0fr] pt-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-7 text-white/68">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
