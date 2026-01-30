import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function AuthorInformationPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Author Information
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Paper & Author Guidelines</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">
            Everything authors need: call for paper, important dates, registration fee, and submission.
          </p>
        </div>

        <section id="callforpaper" className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Call For Paper</h2>
          <p className="mt-3 text-sm text-zinc-700">
            2026 ICONIQ invites researchers, practitioners, and industry professionals to submit original research papers that
            advance the state of the art in engineering and technology with an emphasis on innovation, quality, reliability, and
            real-world impact. The conference is a forum to share new methods, systems, and applications that improve how
            technologies are designed, implemented, tested, and adopted.
          </p>
          <p className="mt-3 text-sm text-zinc-700">
            We welcome contributions aligned with the conference tracks, including (but not limited to):
          </p>
          <ul className="mt-3 grid gap-2 pl-5 text-sm text-zinc-700 md:grid-cols-2">
            <li className="list-disc">Signal Processing and Machine Intelligence</li>
            <li className="list-disc">Robotics and Internet of Things</li>
            <li className="list-disc">Communication, Networking, and Broadcasting</li>
            <li className="list-disc">Information System</li>
            <li className="list-disc">Power, Energy, and Industry Applications</li>
          </ul>
          <p className="mt-3 text-sm text-zinc-700">
            Submitted papers must be original, not previously published, and not under review elsewhere. All submissions will be
            peer-reviewed.
          </p>
        </section>

        <section id="important-dates" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Important Dates</h2>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="grid gap-1 rounded-xl border border-black/5 bg-white px-4 py-3 md:grid-cols-[1fr_240px] md:items-center md:gap-6">
              <dt className="font-black text-zinc-900">Deadline of Paper Submission</dt>
              <dd className="font-semibold text-zinc-700">April 6, 2026</dd>
            </div>
            <div className="grid gap-1 rounded-xl border border-black/5 bg-white px-4 py-3 md:grid-cols-[1fr_240px] md:items-center md:gap-6">
              <dt className="font-black text-zinc-900">Notification of Paper Acceptance</dt>
              <dd className="font-semibold text-zinc-700">July 3, 2026</dd>
            </div>
            <div className="grid gap-1 rounded-xl border border-black/5 bg-white px-4 py-3 md:grid-cols-[1fr_240px] md:items-center md:gap-6">
              <dt className="font-black text-zinc-900">Early Bird Registration &amp; Payment</dt>
              <dd className="font-semibold text-zinc-700">July 17, 2026</dd>
            </div>
            <div className="grid gap-1 rounded-xl border border-black/5 bg-white px-4 py-3 md:grid-cols-[1fr_240px] md:items-center md:gap-6">
              <dt className="font-black text-zinc-900">Deadline of Registration &amp; Payment</dt>
              <dd className="font-semibold text-zinc-700">July 31, 2026</dd>
            </div>
            <div className="grid gap-1 rounded-xl border border-black/5 bg-white px-4 py-3 md:grid-cols-[1fr_240px] md:items-center md:gap-6">
              <dt className="font-black text-zinc-900">Final Manuscript (Camera Ready)</dt>
              <dd className="font-semibold text-zinc-700">August 7, 2026</dd>
            </div>
            <div className="grid gap-1 rounded-xl border border-black/5 bg-white px-4 py-3 md:grid-cols-[1fr_240px] md:items-center md:gap-6">
              <dt className="font-black text-zinc-900">Main Conference</dt>
              <dd className="font-semibold text-zinc-700">August 28 – 30, 2026</dd>
            </div>
          </dl>
        </section>

        <section id="registrationfee" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Registration Fee</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Registration is required for authors of accepted papers and for participants. Please refer to the official
            registration fee table on the Home page for the most up-to-date categories and rates.
          </p>
          <p className="mt-3 text-sm text-zinc-700">
            The registration fee includes conference kits, certificate, lunch, and coffee breaks (for onsite registration only).
            Online registration includes certificate.
          </p>
          <p className="mt-3 text-sm text-zinc-700">
            For payment details and confirmation, please follow the instructions provided in the Registration Payment section.
          </p>
        </section>

        <section id="authorguidelines" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Author Guidelines</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Authors must prepare manuscripts using the IEEE conference paper template and follow the formatting requirements
            strictly (paper size, margins, fonts, and reference style). Submissions should be written in clear English and present
            sufficient technical detail to support reproducibility.
          </p>
          <ul className="mt-4 grid gap-2 pl-5 text-sm text-zinc-700">
            <li className="list-disc">
              <strong className="font-black text-zinc-900">Originality:</strong> papers must be original and not under review or
              published elsewhere.
            </li>
            <li className="list-disc">
              <strong className="font-black text-zinc-900">Ethics:</strong> plagiarism and excessive self-plagiarism are not
              permitted.
            </li>
            <li className="list-disc">
              <strong className="font-black text-zinc-900">Camera-ready:</strong> accepted papers must address reviewer comments,
              ensure all figures/tables are readable, and verify author metadata before final submission.
            </li>
            <li className="list-disc">
              <strong className="font-black text-zinc-900">Presentation:</strong> at least one author must register and present the
              paper according to the conference schedule.
            </li>
          </ul>
        </section>

        <section id="submission" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Submission</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Add the submission link(s) (e.g., EDAS) and step-by-step instructions.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-[#633193] px-6 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(99,49,147,0.25)] hover:bg-[#5a2c86]"
              href="https://edas.info/N34850"
              target="_blank"
              rel="noopener"
            >
              Submit Your Paper
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl border border-[#633193]/25 bg-white px-6 py-3 text-sm font-black text-[#633193] hover:bg-[#633193]/10"
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener"
            >
              Download IEEE Template
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
