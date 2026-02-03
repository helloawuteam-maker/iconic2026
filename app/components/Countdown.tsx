"use client";

import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

type Props = {
  targetISO: string;
  title?: string;
  note?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  let diff = target.getTime() - now.getTime();
  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetISO, title = "ICONIQ 2026", note }: Props) {
  const target = useMemo(() => new Date(targetISO), [targetISO]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft(target));

  useEffect(() => {
    if (Number.isNaN(target.getTime())) return;

    const id = window.setInterval(() => {
      setTimeLeft(computeTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(id);
  }, [target]);

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#111124] to-[#1b1c36] p-5 text-white shadow-[0_18px_60px_rgba(17,17,36,0.28)]">
      <div className="mb-3 text-sm font-extrabold tracking-wide">{title}</div>
      <div className="flex items-center justify-between gap-2">
        <TimeBox value={String(timeLeft.days)} label="Day(s)" />
        <Sep />
        <TimeBox value={pad2(timeLeft.hours)} label="Hour(s)" />
        <Sep />
        <TimeBox value={pad2(timeLeft.minutes)} label="Minute(s)" />
        <Sep />
        <TimeBox value={pad2(timeLeft.seconds)} label="Second(s)" />
      </div>
      {note ? <p className="mt-3 text-xs text-white/80">{note}</p> : null}
    </div>
  );
}

function Sep() {
  return <div className="text-lg font-black text-white/70">:</div>;
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[74px] rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-center">
      <div className="text-2xl font-black tracking-wide">{value}</div>
      <div className="text-xs text-white/85">{label}</div>
    </div>
  );
}
