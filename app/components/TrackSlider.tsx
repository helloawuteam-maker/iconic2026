'use client';

import React, { useMemo, useRef } from 'react';

type Track = {
  id: string;
  label: string;
  title: string;
  topics: readonly string[];
  gradientClassName: string;
};

type TrackSliderProps = {
  heading: string;
  tracks: readonly Track[];
};

export default function TrackSlider({ heading, tracks }: TrackSliderProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const canScrollBy = useMemo(() => {
    return (direction: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;

      const first = el.querySelector<HTMLElement>('[data-slide]');
      const slideWidth = first?.offsetWidth ?? Math.min(520, el.clientWidth);
      const gap = 16;
      el.scrollBy({ left: direction * (slideWidth + gap), behavior: 'smooth' });
    };
  }, []);

  return (
    <section id="programs" className="bg-[linear-gradient(180deg,rgba(245,245,247,0.70)_0%,rgba(245,245,247,0.35)_100%)] py-16">
      <div className="mx-auto w-full px-5">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-center text-3xl font-black tracking-tight text-[#f36e33] md:text-left md:text-4xl">
            {heading}
          </h2>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => canScrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => canScrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
        >
          {tracks.map((t, idx) => (
            <div
              key={t.id}
              data-slide
              className="w-[86%] flex-none snap-start sm:w-[70%] md:w-[56%] lg:w-full lg:snap-none"
            >
              <div className={`rounded-[28px] p-[1px] shadow-[0_26px_70px_rgba(17,17,36,0.18)] ${t.gradientClassName}`}>
                <div className="flex h-[360px] flex-col overflow-hidden rounded-[27px] bg-[radial-gradient(900px_520px_at_30%_20%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_55%),linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_55%)] px-6 py-8 text-center text-white sm:h-[380px] sm:px-8 sm:py-10 lg:h-[300px] lg:px-4 lg:py-6">
                  <div>
                    <div className="text-4xl font-black tracking-[0.18em] md:text-5xl lg:text-3xl">{t.label}</div>
                    <div className="mt-3 text-xl font-semibold leading-tight md:text-2xl lg:mt-2 lg:text-sm">{t.title}</div>

                    <div className="mx-auto mt-4 h-px w-32 bg-white/35 lg:mt-3 lg:w-20" />
                  </div>

                  <div className="mx-auto mt-4 w-full max-w-md min-h-0 flex-1 overflow-hidden text-left lg:mt-3">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-white/85">Topics</div>
                    <ul className="mt-3 space-y-1.5 text-xs leading-5 text-white/90 lg:mt-2 lg:space-y-1 lg:text-[10px] lg:leading-4">
                      {t.topics.slice(0, 4).map((topic) => (
                        <li key={topic} className="flex gap-2">
                          <span className="mt-[2px] inline-block h-2 w-2 flex-none rounded-full bg-white/60" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {t.topics.length > 4 ? (
                      <div className="mt-3 text-xs font-semibold text-white/75 lg:mt-2 lg:text-[10px]">+ {t.topics.length - 4} more</div>
                    ) : null}
                  </div>

                  <div className="mt-6 flex justify-center lg:mt-3">
                    <a
                      className="inline-flex items-center justify-center rounded-2xl bg-[#fff6ab] px-7 py-2.5 text-xs font-black text-[#633193] shadow-sm lg:px-4 lg:py-2 lg:text-[10px]"
                      href={`/programs#${t.id}`}
                      aria-label={`See Topic for ${t.label}`}
                    >
                      See Topic
                    </a>
                  </div>

                  <div className="mt-4 text-[11px] font-semibold text-white/70 lg:mt-2 lg:text-[9px]">Track {idx + 1} of {tracks.length}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
