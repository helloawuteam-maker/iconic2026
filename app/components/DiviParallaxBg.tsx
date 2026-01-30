'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

type DiviParallaxBgProps = {
  imageUrl: string;
  className?: string;
};

export default function DiviParallaxBg({ imageUrl, className }: DiviParallaxBgProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [bgHeight, setBgHeight] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);

  const bgStyle = useMemo<React.CSSProperties>(
    () => ({
      backgroundImage: `url("${imageUrl}")`,
      height: bgHeight ? `${bgHeight}px` : undefined,
      transform: `translate3d(0px, ${translateY}px, 0px)`,
      willChange: 'transform',
    }),
    [bgHeight, imageUrl, translateY]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;

      // Ensure bg element is tall enough to cover during translate.
      const desiredHeight = Math.ceil(rect.height + viewportH);
      setBgHeight(desiredHeight);

      // Divi-like translate: moves slower than scroll.
      // Positive translate when scrolling down.
      const progress = -rect.top;
      const nextTranslate = Math.round(progress * 0.25);
      setTranslateY(nextTranslate);

      rafRef.current = null;
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef as any} className={className}>
      <span className="et_parallax_bg_wrap absolute inset-0 overflow-hidden" aria-hidden="true">
        <span
          className="et_parallax_bg absolute inset-0 bg-cover bg-center"
          style={bgStyle}
        />
      </span>
    </section>
  );
}
