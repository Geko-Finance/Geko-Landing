"use client";

import { useState, useCallback } from "react";

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={`inline-block shrink-0 transition-transform duration-300 ease-out ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden
    >
      <svg
        className="h-5 w-5 text-white/80"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>
  );
}

export function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <div
      className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.07]"
      data-accordion-item
    >
      <button
        id={`accordion-trigger-${id}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black sm:px-6 sm:py-5"
      >
        <span className="text-base font-medium text-white sm:text-lg">
          {question}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${id}`}
        aria-hidden={!isOpen}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/10 px-5 pb-5 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  items: Array<{ id: string; question: string; answer: string }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="flex flex-col gap-3 sm:gap-4" role="list">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
