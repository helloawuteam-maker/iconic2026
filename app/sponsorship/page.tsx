import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function SponsorshipPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Sponsorship
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Become a Sponsor</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">
            Add sponsorship packages, benefits, and contact information here.
          </p>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[240px_1fr]">
          <div className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-zinc-900">Sponsorship Packages</h2>
            <p className="mt-2 text-base font-black text-zinc-900">Contact Us!</p>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <div className="bg-[#1f2a74] px-6 py-4">
                <h3 className="text-lg font-black uppercase tracking-[0.12em] text-white">
                  Special Request Sponsorship
                </h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-base font-black text-zinc-900">Contact Us!</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="bg-[#d2a100] px-6 py-4">
                  <h3 className="text-xl font-black tracking-[0.18em] text-white">GOLD</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm font-black text-zinc-900">IDR 25,000,000</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                    <li>Invitation to deliver talk and share innovative ideas on Workshop session</li>
                    <li>A booth for exhibition</li>
                    <li>
                      Explicit mentioning of Gold sponsor in all conference communications (opening speech, social
                      functions, closing speech)
                    </li>
                    <li>Two complementary full registrations for all conference programs</li>
                    <li>Sponsor logo on the website</li>
                    <li>Sponsor logo on all promotional materials</li>
                    <li>Recognition in meeting opening and closing remarks</li>
                    <li>All logos, mentions and spaces will be under Gold level</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="bg-[#bdbdbd] px-6 py-4">
                  <h3 className="text-xl font-black tracking-[0.18em] text-white">SILVER</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm font-black text-zinc-900">IDR 15,000,000</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                    <li>A booth for exhibition</li>
                    <li>Explicit mentioning by name during the event (opening speech, social functions, closing speech.</li>
                    <li>One complementary full registration for all conference programs</li>
                    <li>Sponsor logo on the website</li>
                    <li>Sponsor logo on all promotional materials</li>
                    <li>All logos and mentions will be under Silver level</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="bg-[#a66b3f] px-6 py-4">
                  <h3 className="text-xl font-black tracking-[0.18em] text-white">BRONZE</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm font-black text-zinc-900">IDR 5,000,000</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                    <li>One complimentary Gala Dinner of the conference</li>
                    <li>Sponsor logo on the website</li>
                    <li>Sponsor logo on all promotional materials</li>
                    <li>All logos will be under Bronze level</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="bg-white px-6 py-4">
                  <h3 className="text-lg font-black uppercase tracking-[0.12em] text-[#1f2a74]">
                    In-Kind Sponsoring options
                  </h3>
                </div>
                <div className="px-6 py-5">
                  <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
                    <li>Contributions of technology to support the conference</li>
                    <li>Contributions of equipment, material, or assets (software, content, dataset, etc)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
