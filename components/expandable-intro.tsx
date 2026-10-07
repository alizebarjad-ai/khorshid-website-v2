"use client";

import { useState } from "react";

type Props = {
  text: string;
  expanded?: boolean;
};

export function ExpandableIntro({ text, expanded = false }: Props) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  const [isOpen, setIsOpen] = useState(expanded);

  if (paragraphs.length <= 1) {
    return <p className="mt-6 max-w-3xl text-[15px] leading-8 text-[#4D5B77] md:text-[17px]">{text}</p>;
  }

  return (
    <div className="mt-6 max-w-3xl text-[15px] leading-8 text-[#4D5B77] md:text-[17px]">
      <p>
        {paragraphs[0]}{" "}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="font-semibold text-[#4A78B0] underline decoration-[#4A78B0]/50 underline-offset-4 transition hover:text-[#f0b95a]"
          aria-expanded={isOpen}
        >
          {isOpen ? "بستن" : "ادامه"}
        </button>
      </p>
      {isOpen && (
        <div className="mt-5 space-y-5">
          {paragraphs.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
