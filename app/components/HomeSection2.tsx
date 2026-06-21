'use client';

import React from 'react';
import Image from 'next/image';

export default function HomeSection2() {
  return (
    <section
      className="et_pb_section et_pb_section_1 et_section_regular relative overflow-hidden bg-white"
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 py-10 md:py-14">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="mx-auto">
            <Image
              src="/logo/iconiq.png"
              alt="ICONIQ 2027"
              width={1011}
              height={502}
              priority
              unoptimized
              className="mx-auto h-auto w-full max-w-[675px] object-contain"
              sizes="(min-width: 768px) 675px, 92vw"
            />
          </div>

          <div className="mx-auto mt-6 max-w-[860px] space-y-7 text-sm leading-7 text-zinc-700 md:mt-8 md:text-[15px] md:leading-8">
            <p>
              As engineering and technology reshape industries—enabling smart infrastructure, connected manufacturing, and
              intelligent services—innovation must be paired with quality, safety, and trust to deliver real impact.
            </p>
            <p>
              2027 ICONIQ invites researchers, practitioners, and interdisciplinary scholars to explore how human behavior and
              social dynamics influence the design, adoption, and governance of technology—from requirements and verification,
              to human-centered evaluation, responsible engineering, and continuous improvement.
            </p>
            <p>
              We welcome contributions that advance methods, systems, and applications; report evidence from real deployments;
              and propose frameworks that strengthen reliability, usability, fairness, and societal value. Together, let us
              build technologies that are not only novel, but also dependable and meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
