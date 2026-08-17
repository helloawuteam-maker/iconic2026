import Countdown from "./components/Countdown";
import Header from "./components/Header";
import HomeSection2 from "./components/HomeSection2";
import SiteFooter from "./components/SiteFooter";
import TrackSlider from "./components/TrackSlider";

type DateRow = {
  label: string;
  value: string;
};

type Speaker = {
  name: string;
  role: string;
  expertise?: string;
  note?: string;
  imageSrc?: string;
};

const importantDates: DateRow[] = [
  { label: "Registration and Abstract", value: "August 20, 2026" },
  { label: "Notification of Acceptance", value: "August 21, 2026" },
  { label: "Deadline of Payment", value: "August 24, 2026" },
  { label: "Full Paper (Camera Ready)", value: "September 16, 2026" },
  { label: "Main Conference", value: "August 28, 2026" },
];

const keynoteSpeakers: Speaker[] = [
  {
    name: "Prof. Nobuo Funabiki",
    role: "Okayama University - Japan",
    expertise: "Expert in Signal Processing, Machine Intelligence, and Advanced Communication Systems",
    imageSrc: "/speakers/nobuo-funabiki.jpg",
  },
  {
    name: "Prof. Jing-Ming Guo",
    role: "National Taiwan University of Science and Technology",
    expertise: "Expert in Robotics, AI, and Intelligent System Applications",
    imageSrc: "/speakers/jing-ming.jpg",
  },
];

const homeTracks = [
  {
    id: "track-1",
    label: "T1",
    title: "Signal Processing and Machine Intelligence",
    topics: [
      "Image and speech processing",
      "Pattern recognition",
      "Machine learning",
      "Deep learning",
      "Artificial intelligence",
      "Data analytics",
      "Biomedical signal processing",
      "Intelligent sensing systems",
      "Natural language processing",
    ],
    gradientClassName: "bg-gradient-to-br from-[#6a3aa0] via-[#633193] to-[#3b1f58]",
  },
  {
    id: "track-2",
    label: "T2",
    title: "Robotics and Internet of Things",
    topics: [
      "Autonomous systems",
      "Human–machine interaction",
      "Cyber-physical systems",
      "Sensors",
      "Embedded Systems Design",
      "Hardware Implementation",
      "Simulation and Hardware Implementation Techniques",
      "Robotics and Mechatronics",
      "Control Systems",
    ],
    gradientClassName: "bg-gradient-to-br from-[#2b327e] via-[#1f2460] to-[#111124]",
  },
  {
    id: "track-3",
    label: "T3",
    title: "Communication, Networking, and Broadcasting",
    topics: [
      "Communication Systems and Communication Standards",
      "Acoustic and Underwater Communication",
      "Security and Authentication",
      "Adhoc Networks and Wireless Networks",
      "RFIDs and Applications",
      "Vehicular Technology and Networks",
      "Information Security and Network Security",
      "Parallel and Distributed Systems",
      "Remote Sensing and Geographic Information System",
      "Multimedia Information Processing and Retrieval",
      "Telecommunication and Mobile Communication",
    ],
    gradientClassName: "bg-gradient-to-br from-[#0f766e] via-[#0ea5a4] to-[#0b3b3b]",
  },
  {
    id: "track-4",
    label: "T4",
    title: "Information System",
    topics: [
      "Big Data Analytics",
      "Graph Analytics",
      "Real-time Big Data Analysis",
      "Data Models for Big and Smart Data",
      "Semantic Web Applications",
      "Data and Information Quality",
      "Information Extraction",
      "Conceptualization, Notation, and Ontologies",
      "Enterprise Modelling on Data and Information",
      "Web Analytics",
      "Data Modelling and Visualization",
      "Social Web Search and Mining",
      "Big Data as a Service",
      "Geographic Information System (GIS)",
    ],
    gradientClassName: "bg-gradient-to-br from-[#0ea5a4] via-[#2b327e] to-[#3b1f58]",
  },
  {
    id: "track-5",
    label: "T5",
    title: "Power, Energy, and Industry Applications",
    topics: [
      "Smart grid technologies",
      "Renewable energy systems",
      "Power electronics",
      "Energy storage",
      "Electric machines",
      "Industrial automation",
      "Sustainable energy solutions",
    ],
    gradientClassName: "bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#1e3a8a]",
  },
  {
    id: "track-6",
    label: "T6",
    title: "Multidisciplinary Sciences",
    topics: [
      "Applied Chemistry and Chemical Engineering",
      "Physics and Applied Physics",
      "Mathematics, Statistics, and Modeling",
      "Biological Sciences and Biotechnology",
      "Environmental and Sustainability Science",
      "Materials Science and Nanotechnology",
      "Earth and Atmospheric Sciences",
      "Biomedical Engineering and Health Sciences",
      "Interdisciplinary Systems and Innovation",
    ],
    gradientClassName: "bg-gradient-to-br from-[#78350f] via-[#92400e] to-[#3b1205]",
  },
] as const;

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <section className="relative isolate overflow-hidden pt-12 md:pt-14">
          <div
            className="absolute inset-0 -z-10 bg-[url('/logo/bali.png')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />

          <div className="mx-auto w-full max-w-6xl px-5 pb-10 text-white">
            <div className="grid">
              <div className="text-center">
                <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white/95 md:text-base">
                  August 28, 2026 | Four Star by Trans Hotel, Bali Indonesia
                </h2>

                <h1 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-wide drop-shadow md:text-6xl">
                  2026
                  <br />
                  International Conference
                  <br />
                  on Innovation and Quality
                  <br />
                  in Engineering and Technology
                  <br />
                  (2026 ICONIQ)
                </h1>

                <h2 className="mt-4">
                  <span className="inline-block bg-[#fff6ab] px-3 py-2 text-lg font-black text-[#633193] md:text-2xl">
                    Innovation and Quality in Engineering and Technology:
                  </span>
                </h2>

                <h2 className="mt-3 text-sm font-semibold italic text-white/90 md:text-lg">
                  Bridging Human Behavior and Social Dynamics for Trustworthy, High-Quality Technology
                </h2>

                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-[#633193] px-10 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(99,49,147,0.35)] hover:bg-[#5a2c86]"
                    href="https://seminar.apskin.org/index.php/ICONIQ"
                  >
                    Register Now
                  </a>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-sm backdrop-blur">
                  <dl className="grid gap-px bg-white/10 sm:grid-cols-2 md:grid-cols-4">
                    <div className="px-5 py-4">
                      <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/90">Venue</dt>
                      <dd className="mt-2 text-sm font-semibold text-white">
                        Four Star by Trans Hotel, Bali Indonesia
                      </dd>
                    </div>
                    <div className="px-5 py-4">
                      <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/90">Event Format</dt>
                      <dd className="mt-2 text-sm font-semibold text-white">Virtual</dd>
                    </div>
                    <div className="px-5 py-4">
                      <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/90">Call / Whatsapp</dt>
                      <dd className="mt-2 text-sm font-semibold">
                        <a className="text-white hover:underline" href="tel:+6289524180486">
                          +62 895-2418-0486
                        </a>
                        <span className="text-white/80"> / </span>
                        <a className="text-white hover:underline" href="tel:+62895335857578">
                          +62 895-3358-57578
                        </a>
                      </dd>
                    </div>
                    <div className="px-5 py-4">
                      <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/90">Email us</dt>
                      <dd className="mt-2 text-sm font-semibold">
                        <a className="text-white hover:underline" href="mailto:iconiq@apskin.org">
                          iconiq@apskin.org
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                <div className="col-span-2 flex items-center rounded-xl border border-black/10 bg-white px-4 py-4 md:col-span-1">
                  <h3 className="text-sm font-black text-zinc-900">Supported by</h3>
                </div>
                {["/logo/akb.jpeg", "/logo/awu.png", "/logo/nozomi.jpeg"].map((src) => (
                  <div
                    key={src}
                    className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-5"
                    aria-label="Supporter"
                  >
                    <img src={src} alt="Supporter logo" className="h-16 w-auto max-w-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HomeSection2 />

        <TrackSlider heading="ICONIQ 2026 Tracks" tracks={[...homeTracks]} />

        <section className="relative overflow-hidden py-16 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,50,126,0.86)_0%,rgba(14,165,164,0.76)_100%),radial-gradient(1000px_600px_at_60%_50%,rgba(17,17,36,0.55)_0%,rgba(17,17,36,0)_70%),linear-gradient(135deg,#3b1f58_0%,#2b327e_45%,#111124_100%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-5">
            <p className="text-sm font-black opacity-95">2026 International Conference (2026 ICONIQ)</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Innovation and Quality in Engineering and Technology:</h2>
            <p className="mt-3 max-w-4xl text-lg font-semibold text-white/95 md:text-xl">
              Bringing Human Behavior and Social Dynamics into the Technological Ecosystem
            </p>
            <p className="mt-4 text-sm font-black opacity-95">
              Four Star by Trans Hotel, Bali Indonesia
              <br />
              August 28, 2026
            </p>
          </div>
        </section>

        <section id="important-dates" className="py-16">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h2 className="text-3xl font-black tracking-tight">Important Dates</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <table className="w-full border-separate border-spacing-0" aria-label="Important dates">
                  <tbody>
                    {importantDates.map((row, idx) => (
                      <tr key={row.label} className={idx === 0 ? "" : "border-t"}>
                        <td className="border-t border-black/5 px-4 py-3 text-sm font-semibold text-zinc-800 md:text-base">
                          {row.label}
                        </td>
                        <td className="border-t border-black/5 px-4 py-3 text-right text-sm font-black text-zinc-950 md:text-base">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Countdown
                targetISO="2026-08-28T00:00:00+07:00"
                title="2026 ICONIQ"
                note="Target: Aug 28, 2026 (WIB)"
              />
            </div>
          </div>
        </section>

        <section id="keynote" className="bg-[linear-gradient(180deg,rgba(245,245,247,0.70)_0%,rgba(245,245,247,0.35)_100%)] py-16">
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight">Keynote Speakers</h2>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {keynoteSpeakers.map((s) => (
                <div key={s.name} className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                  <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-[radial-gradient(400px_260px_at_30%_20%,rgba(99,49,147,0.25)_0%,rgba(99,49,147,0)_60%),radial-gradient(380px_240px_at_80%_20%,rgba(14,165,164,0.22)_0%,rgba(14,165,164,0)_60%),linear-gradient(135deg,rgba(17,17,36,0.10)_0%,rgba(17,17,36,0.04)_100%)] sm:h-72">
                    {s.imageSrc ? (
                      <img src={s.imageSrc} alt={s.name} className="max-h-full w-auto max-w-full object-contain" loading="lazy" />
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-sm font-black leading-snug">{s.name}</h3>
                  <p className="mt-2 text-xs font-semibold text-zinc-700">{s.role}</p>
                  {s.expertise ? (
                    <p className="mt-3 rounded-xl bg-[#633193]/8 px-3 py-2 text-xs font-semibold text-[#633193]">{s.expertise}</p>
                  ) : null}
                  {s.note ? <p className="mt-3 text-xs text-zinc-600">{s.note}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="registrationfee" className="py-16">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h2 className="text-3xl font-black tracking-tight">Registration Fee</h2>

            <div className="mt-5 overflow-auto rounded-2xl border border-black/5 bg-white shadow-sm" tabIndex={0}>
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="bg-[#2b327e] px-4 py-3 text-left text-sm font-black text-white">Category</th>
                    <th className="bg-[#2b327e] px-4 py-3 text-center text-sm font-black text-white">Online</th>
                    <th className="bg-[#2b327e] px-4 py-3 text-center text-sm font-black text-white">Offline</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-semibold text-zinc-800">
                  <tr>
                    <td className="border-b border-black/5 px-4 py-3 font-black text-zinc-900">International Presenter</td>
                    <td className="border-b border-black/5 px-4 py-3 text-center">35 USD</td>
                    <td className="border-b border-black/5 px-4 py-3 text-center">70 USD</td>
                  </tr>
                  <tr className="bg-black/[0.015]">
                    <td className="border-b border-black/5 px-4 py-3 font-black text-zinc-900">Indonesian Presenter</td>
                    <td className="border-b border-black/5 px-4 py-3 text-center">IDR 500,000</td>
                    <td className="border-b border-black/5 px-4 py-3 text-center">IDR 1,000,000</td>
                  </tr>
                  <tr>
                    <td className="border-b border-black/5 px-4 py-3 font-black text-zinc-900">International Participant</td>
                    <td className="border-b border-black/5 px-4 py-3 text-center">10 USD</td>
                    <td className="border-b border-black/5 px-4 py-3 text-center">35 USD</td>
                  </tr>
                  <tr className="bg-black/[0.015]">
                    <td className="px-4 py-3 font-black text-zinc-900">Indonesian Participant</td>
                    <td className="px-4 py-3 text-center">IDR 100,000</td>
                    <td className="px-4 py-3 text-center">IDR 600,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-black">Registration Payment</h3>
                <p className="mt-3 text-sm text-zinc-700">
                  The registration fee includes conference kits, certificate, lunch, and coffee breaks (for onsite registration
                  only). Online registration only includes certificate.
                </p>

                <div className="mt-4 rounded-2xl border border-black/5 bg-black/[0.02] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-bold text-zinc-600">Bank Name</span>
                    <strong className="font-black">BANK BCA</strong>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-bold text-zinc-600">Account Name</span>
                    <strong className="font-black">ASOSIASI PENELITI SAINS</strong>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-bold text-zinc-600">Account Number</span>
                    <strong className="font-black">8223653888</strong>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-700">
                  Address of Bank:
                  <br />
                  Jl. Kendangsari Industri 2, Kendangsari, Kec. Tenggilis Mejoyo, Kota Surabaya, Jawa Timur
                  <br />
                  Surabaya, Jawa Timur, Indonesia 60292
                </p>

                <p className="mt-3 text-sm text-zinc-700">
                  After registration via bank transfer, please scan
                  <br />
                  – The payment receipt
                  <br />
                  – Proof of APSKIN membership (optional)
                  <br />
                  – Student ID card (optional)
                </p>

                <a
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#633193] via-[#2b327e] to-[#0ea5a4] px-5 py-3 text-sm font-black text-white shadow-sm"
                  href="https://intip.in/PaymentICONIQ2026"
                  target="_blank"
                  rel="noopener"
                >
                  Confirmation of Payment &amp; Registration
                </a>

                <p className="mt-3 text-xs text-zinc-500">
                  Replace this button link with your actual confirmation form URL.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffbe6] py-14">
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-black text-[#633193]">ICONIQ 2026 Paper Template (Ms. Word Only)</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-600">Please refer to the paper template Manuscripts</p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <a
                    className="inline-flex items-center justify-center rounded-2xl bg-[#633193] px-8 py-3 text-sm font-black text-white shadow-sm hover:bg-[#5a2c86]"
                    href="https://docs.google.com/document/d/1teY5RQxZFEVtLHmTnxPCQroBIbnhEpDT/edit?usp=sharing&ouid=102284237185700741961&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener"
                  >
                    Download Template
                  </a>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl font-black text-[#2b327e]">Paper Submission</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-600">
                  Please follow the Author Guidelines! <a className="font-black text-[#2b327e] hover:underline" href="/author-information#authorguidelines">Click Here</a>
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-[#2b327e] px-8 py-3 text-sm font-black text-white shadow-sm hover:bg-[#1f2460]"
                    href="https://erscience.com/index.php/iconiq"
                  >
                    Submit Your Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="text-center">
              <h3 className="text-xl font-black text-[#2b327e]">Organized by</h3>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
                <div className="flex items-center justify-center rounded-2xl border border-black/5 bg-white px-10 py-8 shadow-sm">
                  <img
                    src="/logo/apskin.png"
                    alt="APSKIN"
                    className="h-16 w-auto object-contain sm:h-20"
                    loading="lazy"
                  />
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

type TrackCardProps = {
  badge: string;
  title: string;
  description: string;
  href: string;
};

function TrackCard({ badge, title, description, href }: TrackCardProps) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#633193]/12 to-[#2b327e]/12 text-sm font-black tracking-widest text-[#633193]">
        {badge}
      </div>
      <h3 className="mt-4 text-xl font-black leading-snug tracking-tight">{title}</h3>
      <div className="mt-4 h-px w-full bg-black/10" />
      <p className="mt-4 text-sm font-semibold text-zinc-700">{description}</p>
      <a
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#111124] to-[#1b1c36] px-5 py-3 text-sm font-black text-white shadow-sm"
        href={href}
      >
        See Topic
      </a>
    </article>
  );
}

