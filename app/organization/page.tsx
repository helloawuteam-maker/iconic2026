import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function OrganizationPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Organization
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Committee</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">
            Organizing committee for 2026 ICONIQ.
          </p>
        </div>

        <section id="committee" className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Committee</h2>
          <dl className="mt-4 grid gap-4 text-sm text-zinc-800">
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">General Chair</dt>
              <dd className="text-zinc-700">Dr.Eng. Muhammad Zulhaj Aliansyah, S.T., M.Eng.</dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Treasurer</dt>
              <dd className="text-zinc-700">Aviolla Terza Damaliana, S.Si., M.Stat. (Chair) and Dr. Mega Rizkya Afiana (Co-chair)</dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Technical Program</dt>
              <dd className="text-zinc-700">
                Dr. Eng, Ir. Irfan Mujahidin, S.T., M.T., M.,Sc., IPP (Chair) and Alfan Rizaldy Pratama, S.Tr.T. M.Tr.Kom.(Co-chair)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Secretary</dt>
              <dd className="text-zinc-700">
                Dr.Eng. Adelhard Beni Rehiara, S.T., M.Eng. (Chair) and Shindi Shella May Wara, M. Stat. (Co-chair)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Secretariat</dt>
              <dd className="text-zinc-700">
                Dr. Eng., Nurlaili Humaidah, S.T., M.T. (Chair) and Andri Fauzan Adziima, M. Si. (Co-chair)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Event</dt>
              <dd className="text-zinc-700">
                Dr. Agustami Sitorus, M.Sc (Chair), Muhammad Nasrudin, M. Stat. (Co-chair) and Lintang Inggrihaning Putri, S.Ak. (Member)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Publication</dt>
              <dd className="text-zinc-700">
                Dr.Eng. Puput Dani Prasetyo Adi, S.Kom., M.T. (Chair), Amri Muhaimin, S.Stat., M.Stat., M.S. (Co-chair) and Yoga
                Samudra, S.Kom., M.Kom. (Member)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">International Program</dt>
              <dd className="text-zinc-700">
                Dr. Eng. Ir. Anggraini Puspita Sari, S.T., M.T. (Chair) and Dr. Iwan Pramesti Anwar, S.Si.,M.Si (Co-chair)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">Sponsorship and Promotion</dt>
              <dd className="text-zinc-700">
                Dr.Eng. Ir. Muhammad Abdillah, S.T., M.T., IPM (Chair) and Dr. Eng. Ir. Dwi Arman Prasetya ST., MT., IPU (Co-chair)
              </dd>
            </div>
            <div className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-black">General</dt>
              <dd className="text-zinc-700">Nurul Awaliyah Mukhlis, M.Pd. (Chair) and Uswatun Khasana, S.Tr.T. (Co-chair)</dd>
            </div>
          </dl>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
