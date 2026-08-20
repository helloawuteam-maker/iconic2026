import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function ContactPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">Reach us via email, CP, or venue information below.</p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Email</h2>
            <a className="mt-3 inline-block text-sm font-semibold text-[#2b327e] hover:underline" href="mailto:iconiq@apskin.org">
              iconiq@apskin.org
            </a>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">CP</h2>
            <div className="mt-3 grid gap-2 text-sm text-zinc-700">
              <a className="font-semibold text-[#2b327e] hover:underline" href="https://wa.me/6289524180486" target="_blank" rel="noopener">
                Chusna Maulida +62 895-2418-0486
              </a>
              <a className="font-semibold text-[#2b327e] hover:underline" href="https://wa.me/62895335857578" target="_blank" rel="noopener">
                Sasa +62 895-3358-57578
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Venue</h2>
          <a
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2b327e] hover:underline"
            href="https://maps.google.com/?q=Four+Star+by+Trans+Hotel+Bali+Indonesia"
            target="_blank"
            rel="noopener"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Four Star by Trans Hotel, Bali Indonesia
          </a>
          <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
            <iframe
              title="Four Star by Trans Hotel Bali"
              src="https://maps.google.com/maps?q=Four+Star+by+Trans+Hotel+Bali+Indonesia&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
