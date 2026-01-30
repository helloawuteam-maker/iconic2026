"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      {
        label: "Programs",
        children: [
          { label: "Tracks", href: "/programs#tracks" },
        ],
      },
      {
        label: "Author Information",
        children: [
          { label: "Call For Paper", href: "/author-information#callforpaper" },
          { label: "Important Dates", href: "/author-information#important-dates" },
          { label: "Registration Fee", href: "/author-information#registrationfee" },
          { label: "Author Guidelines", href: "/author-information#authorguidelines" },
          { label: "Submission", href: "/author-information#submission" },
        ],
      },
      {
        label: "Organization",
        children: [
          { label: "Committee", href: "/organization#committee" },
        ],
      },
      { label: "Sponsorship", href: "/sponsorship" },
      { label: "Contact Us", href: "/contact" },
    ],
    [],
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#f36e33] text-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 font-black tracking-wide">
            IQ
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-wide">2026 ICONIQ</span>
            <span className="block text-xs font-semibold text-white/85">IEEE International Conference</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-sm font-extrabold uppercase tracking-wide md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>
      </div>

      <div
        id="site-nav"
        className={
          open
            ? "mx-auto w-full max-w-6xl px-5 pb-4 md:hidden"
            : "hidden md:hidden"
        }
      >
        <div className="grid gap-2 rounded-2xl bg-white p-3 text-zinc-900 shadow-lg">
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = mobileOpenKey === item.label;

            if (!hasChildren) {
              return (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-black uppercase tracking-wide hover:bg-black/5"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <div key={item.label} className="rounded-xl border border-black/5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-black uppercase tracking-wide hover:bg-black/5"
                  onClick={() => setMobileOpenKey(isExpanded ? null : item.label)}
                  aria-expanded={isExpanded}
                >
                  <span>{item.label}</span>
                  <span className="text-base">▾</span>
                </button>
                {isExpanded ? (
                  <div className="grid gap-1 px-2 pb-2">
                    {item.children!.map((c) => (
                      <a
                        key={c.href + c.label}
                        href={c.href}
                        onClick={() => {
                          setOpen(false);
                          setMobileOpenKey(null);
                        }}
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-black/5"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <a
        href={item.href ?? "#"}
        className="rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wide text-white/95 hover:bg-white/10"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wide text-white/95 hover:bg-white/10"
        aria-haspopup="menu"
      >
        <span>{item.label}</span>
        <span aria-hidden="true" className="text-sm">▾</span>
      </button>

      <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 translate-y-1 rounded-2xl bg-white p-2 text-zinc-900 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children!.map((c) => (
          <a
            key={c.href + c.label}
            href={c.href}
            className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-black/5"
          >
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}
