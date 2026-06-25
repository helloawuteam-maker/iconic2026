import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

export default function ProgramsPage() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff6ab]/60 via-white to-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-800/80">
            Programs
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">2026 ICONIQ Programs</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-zinc-700">
            This page contains the technical tracks and topics for 2026 ICONIQ.
          </p>
        </div>

        <section id="tracks" className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Tracks</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Explore the technical tracks and topics for 2026 International Conference on Innovation and Quality in
            Engineering and Technology (2026 ICONIQ).
          </p>

          <section id="track-1" className="mt-6 rounded-2xl border border-black/5 bg-white p-5">
            <h3 className="text-lg font-black">Track 1: Signal Processing and Machine Intelligence</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <li>Image and speech processing</li>
              <li>Pattern recognition</li>
              <li>Machine learning</li>
              <li>Deep learning</li>
              <li>Artificial intelligence</li>
              <li>Data analytics</li>
              <li>Biomedical signal processing</li>
              <li>Intelligent sensing systems</li>
              <li>Natural language processing</li>
            </ul>
          </section>

          <section id="track-2" className="mt-4 rounded-2xl border border-black/5 bg-white p-5">
            <h3 className="text-lg font-black">Track 2: Robotics and Internet of Things</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <li>Autonomous systems</li>
              <li>Human–machine interaction</li>
              <li>Cyber-physical systems</li>
              <li>Sensors</li>
              <li>Embedded Systems Design</li>
              <li>Hardware Implementation</li>
              <li>Simulation and Hardware Implementation Techniques</li>
              <li>Robotics and Mechatronics</li>
              <li>Control Systems</li>
            </ul>
          </section>

          <section id="track-3" className="mt-4 rounded-2xl border border-black/5 bg-white p-5">
            <h3 className="text-lg font-black">Track 3: Communication, Networking, and Broadcasting</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <li>Communication Systems and Communication Standards</li>
              <li>Acoustic and Underwater Communication</li>
              <li>Security and Authentication</li>
              <li>Adhoc Networks and Wireless Networks</li>
              <li>RFIDs and Applications</li>
              <li>Vehicular Technology and Networks</li>
              <li>Information Security and Network Security</li>
              <li>Parallel and Distributed Systems</li>
              <li>Remote Sensing and Geographic Information System</li>
              <li>Multimedia Information Processing and Retrieval</li>
              <li>Telecommunication and Mobile Communication</li>
            </ul>
          </section>

          <section id="track-4" className="mt-4 rounded-2xl border border-black/5 bg-white p-5">
            <h3 className="text-lg font-black">Track 4: Information System</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <li>Big Data Analytics</li>
              <li>Graph Analytics</li>
              <li>Real-time Big Data Analysis</li>
              <li>Data Models for Big and Smart Data</li>
              <li>Semantic Web Applications</li>
              <li>Data and Information Quality</li>
              <li>Information Extraction</li>
              <li>Conceptualization, Notation, and Ontologies</li>
              <li>Enterprise Modelling on Data and Information</li>
              <li>Web Analytics</li>
              <li>Data Modelling and Visualization</li>
              <li>Social Web Search and Mining</li>
              <li>Big Data as a Service</li>
              <li>Geographic Information System (GIS)</li>
            </ul>
          </section>

          <section id="track-5" className="mt-4 rounded-2xl border border-black/5 bg-white p-5">
            <h3 className="text-lg font-black">Track 5: Power, Energy, and Industry Applications</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <li>Smart grid technologies</li>
              <li>Renewable energy systems</li>
              <li>Power electronics</li>
              <li>Energy storage</li>
              <li>Electric machines</li>
              <li>Industrial automation</li>
              <li>Sustainable energy solutions</li>
            </ul>
          </section>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
