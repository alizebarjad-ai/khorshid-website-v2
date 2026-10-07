"use client";

import { useState } from "react";
import { SiteIcon, type SiteIconName } from "./ui-icons";

type InteractiveImageCard = {
  title: string;
  text: string;
  icon: SiteIconName;
  image: string;
  href?: string
};

export function InteractiveImageCards({
  cards,
}: {
  cards: InteractiveImageCard[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {cards.map((card, index) => {
        const isActive = active === index;

        return (
          <button
            key={card.title}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActive(isActive ? null : index)}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className="group relative h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#FFFFFF] text-right shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A78B0]/70 sm:h-[290px]"
          >
            <div
              className={[
                "absolute inset-0 transition-all duration-300",
                isActive ? "scale-105 opacity-0" : "scale-100 opacity-100",
              ].join(" ")}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-[14px] font-bold leading-7 text-white sm:text-[16px]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[10px] leading-5 text-white/65 sm:text-[11px]">
                  برای مشاهده توضیحات، کارت را انتخاب کنید
                </p>
              </div>
            </div>

            <div
              className={[
                "absolute inset-0 flex flex-col justify-center bg-[#FFFFFF] p-5 transition-all duration-300 sm:p-6",
                isActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              ].join(" ")}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-[#4A78B0]/25 bg-[#4A78B0]/10 text-[#4A78B0]">
                <SiteIcon name={card.icon} size={27} />
              </div>
              <h3 className="text-[16px] font-extrabold leading-7 text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-[12px] leading-7 text-[#4D5B77] sm:text-[13px]">
                {card.text}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
