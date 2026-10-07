import { SiteIcon } from "./ui-icons";
type Card = { title: string; text: string; number?: string };
const fa = (n:number) => String(n).padStart(2,"0").replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

type InternalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Card[];
  closingTitle?: string;
  closingText?: string;
};

export function InternalPage({ eyebrow, title, intro, cards, closingTitle, closingText }: InternalPageProps) {
  return <>
    <section className="site-grid relative overflow-hidden border-b border-[#14213D]/10 py-20 md:py-28 reveal">
      <div className="hero-backdrop" />
      <div className="container-site relative z-10 grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
        <div><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-[36px] font-extrabold leading-[1.55] tracking-[-0.015em] sm:text-[44px] lg:text-[52px]">{title}</h1></div>
        <p className="max-w-2xl text-[16px] leading-8 text-[#4D5B77] md:text-[17px]">{intro}</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => <article key={card.title} className="glass group relative min-h-[240px] overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 md:p-8 reveal">
            <div className="absolute left-6 top-5 text-[11px] tracking-[.14em] text-[#4A78B0]/40">{card.number ?? fa(index + 1)}</div>
            <div className="mt-8"><SiteIcon name="art" size={42} /></div>
            <h2 className="mt-6 text-[20px] font-bold leading-8">{card.title}</h2>
            <p className="mt-4 text-[14px] leading-8 text-[#4D5B77]">{card.text}</p>
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#4A78B0]/[.06] blur-2xl" />
          </article>)}
        </div>

        {closingTitle && closingText && <div className="glass relative mt-5 overflow-hidden rounded-3xl p-7 md:p-10 reveal">
          <p className="eyebrow">خورشید</p>
          <h2 className="mt-3 text-[25px] font-bold leading-10">{closingTitle}</h2>
          <p className="mt-4 max-w-3xl text-[14px] leading-8 text-[#4D5B77]">{closingText}</p>
          <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full bg-[#4A78B0]/[.07] blur-3xl" />
        </div>}
      </div>
    </section>
  </>;
}
