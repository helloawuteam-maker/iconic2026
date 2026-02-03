import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function PreviousPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Previous Events
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Previous ICONIQ</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">
            Add links to previous years here.
          </p>
        </div>

        <section id="iconiq-2025" className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">ICONIQ 2025</h2>
          <p className="mt-3 text-sm text-zinc-700">Replace with URL to 2025 site.</p>
        </section>

        <section id="iconiq-2024" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">ICONIQ 2024</h2>
          <p className="mt-3 text-sm text-zinc-700">Replace with URL to 2024 site.</p>
        </section>

        <section id="iconiq-2023" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">ICONIQ 2023</h2>
          <p className="mt-3 text-sm text-zinc-700">Replace with URL to 2023 site.</p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
