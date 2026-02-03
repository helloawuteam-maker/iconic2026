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
          <h3 className="mt-5 text-sm font-black text-zinc-900">Guidelines</h3>
          <p className="mt-2 text-sm text-zinc-700">
            All papers must be submitted electronically through the EDAS Conference papers submission system. To ensure high
            standards, all contributed papers will be reviewed by three independent reviewers. Reviews are double blind. Based on
            the reviewers’ comments, the Coordinating Scientist will take a decision on the acceptance of the papers. Upon
            acceptance of the Full Paper, the author will be notified via email, and the author shall incorporate the reviewers’
            suggested corrections to the manuscript and submit the revised manuscript as Camera Ready Submission to the EDAS
            Conference papers submission system.
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

          <h3 className="mt-5 text-sm font-black text-zinc-900">First Paper Submission</h3>
          <p className="mt-2 text-sm text-zinc-700">
            All papers submitted to the ICONIQ 2026 must be written in English and formatted in the standard IEEE Xplore
            double-column format (A4 size). Please use the Microsoft Word template only.
          </p>
          <ul className="mt-4 grid gap-2 pl-5 text-sm text-zinc-700">
            <li className="list-disc">
              All papers must be submitted electronically through the EDAS Conference papers submission system at{" "}
              <a className="font-semibold text-[#2b327e] underline" href="https://iconiq2026.edas.info/" target="_blank" rel="noopener">
                https://iconiq2026.edas.info/
              </a>
              . It is suggested that you use Firefox or Chrome instead of Internet Explorer.
            </li>
            <li className="list-disc">All regular and invited papers are limited to six (6) pages.</li>
            <li className="list-disc">Additional pages will be charged IDR 250,000 (or US$ 15) per page.</li>
            <li className="list-disc">
              The decision regarding the acceptance of the papers is at the discretion of the Technical Program Committee. Note
              that short manuscripts are not considered.
            </li>
            <li className="list-disc">
              To facilitate the paper’s double-blind peer-review process, authors should ensure that information about the authors’
              identities does not appear anywhere in the text body of the paper (for the first submission).
            </li>
            <li className="list-disc">
              Upon acceptance, at least one of the authors listed in the paper must attend the conference and present the paper
              according to the conference schedule. In the event that the presenter is unable to attend the conference for any
              reason, the accepted paper will not be considered for submission of the proceeding to the IEEE Xplore.
            </li>
            <li className="list-disc">
              At least one of the authors listed on the paper must register for ICONIQ 2026 to upload the final manuscript.
            </li>
            <li className="list-disc">
              An official Acceptance Letter or Official Invitation Letter will be given after the registrant pays the registration
              fee.
            </li>
            <li className="list-disc">
              <strong className="font-black text-zinc-900">NOTE:</strong> Accepted papers will be submitted to IEEE Xplore for
              inclusion, subject to its scope and quality requirements. Inclusion in Xplore® and indexing in Scopus are not
              guaranteed.
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
              href="https://edas.info/N34945"
              target="_blank"
              rel="noopener"
            >
              Submit Your Paper
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl border border-[#633193]/25 bg-white px-6 py-3 text-sm font-black text-[#633193] hover:bg-[#633193]/10"
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx"
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
