import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";

const ipcMembers = [
  {
    title: "Dr.",
    name: "Muhammad Abdillah",
    affiliation: "Universitas Pertamina, Indonesia",
  },
  {
    title: "Dr.",
    name: "Angger Abdul Razak",
    affiliation: "Universitas Brawijaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Zainul Abidin",
    affiliation: "Universitas Brawijaya, Indonesia",
  },
  {
    title: "Mrs.",
    name: "Afiyati Afiyati",
    affiliation: "Universitas Mercu Buana, Indonesia",
  },
  {
    title: "Dr.",
    name: "Wiwit Agus Triyanto",
    affiliation: "Universitas Muria Kudus, Indonesia",
  },
  {
    title: "Dr.",
    name: "Wahyudi Agustiono",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Qurrotul Aini",
    affiliation: "UIN Syarif Hidayatullah Jakarta, Indonesia",
  },
  {
    title: "Dr.",
    name: "Ahmad Abdul Chamid",
    affiliation: "Universitas Muria Kudus, Indonesia",
  },
  {
    title: "Dr.",
    name: "Puput Dani Prasetyo Adi",
    affiliation: "BRIN, Indonesia",
  },
  {
    title: "Mr.",
    name: "Mahendra Data",
    affiliation: "Universitas Brawijaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Luca Davoli",
    affiliation: "University of Parma, Italy",
  },
  {
    title: "Mrs.",
    name: "Tirana Noor Fatyanosa",
    affiliation: "Universitas Brawijaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Hermawan Bin Fauzan, Jr",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Weny Findiastuti",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Muhammad Fuad",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Mr.",
    name: "Hamdan Gani",
    affiliation: "Kyushu University, Japan",
  },
  {
    title: "Dr.",
    name: "Vasileios Gkioulos",
    affiliation: "Norwegian University of Science and Technology, Norway",
  },
  {
    title: "Mr.",
    name: "Lukman Hakim",
    affiliation: "Universitas Yudharta Pasuruan, Indonesia",
  },
  {
    title: "Mrs.",
    name: "Dian Puspita Hapsari",
    affiliation: "Institut Teknologi Adhi Tama Surabaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Ahmad Hariri, Capt.",
    affiliation: "Departemen Perhubungan Udara Indonesia, Indonesia",
  },
  {
    title: "Dr.",
    name: "Hazriani Hazriani",
    affiliation: "Handayani University, Indonesia",
  },
  {
    title: "Prof.",
    name: "Henderi Henderi",
    affiliation: "Universitas Raharja, Indonesia",
  },
  {
    title: "Dr.",
    name: "Fajar Astuti Hermawati",
    affiliation: "Universitas 17 Agustus 1945 Surabaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Tutuk Indriyani",
    affiliation: "Institut Teknologi Adhi Tama Surabaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Ismahafezi Ismail",
    affiliation: "Universiti Sultan Zainal Abidin, Malaysia",
  },
  {
    title: "Mrs.",
    name: "Devi Karolita",
    affiliation: "Palangka Raya University, Indonesia",
  },
  {
    title: "Mrs.",
    name: "Kartini Kartini",
    affiliation: "Universitas Pembangunan Nasional Veteran Jawa Timur, Indonesia",
  },
  {
    title: "Dr.",
    name: "Irwan Alnarus Kautsar",
    affiliation: "Universitas Muhammadiyah Sidoarjo, Indonesia",
  },
  {
    title: "Mrs.",
    name: "Bain Khusnul Khotimah",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Takahiro Kitajima",
    affiliation: "Tokushima University, Japan",
  },
  {
    title: "Dr.",
    name: "Meidya Koeshardianto",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Yosi Kristian",
    affiliation: "Institut Sains dan Teknologi Terpadu Surabaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Yeni Kustiyahningsih",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Sang-Heon Lee",
    affiliation: "University of South Australia, Australia",
  },
  {
    title: "Prof.",
    name: "Avina Matalata",
    affiliation: "Ciputra University, Indonesia",
  },
  {
    title: "Mr.",
    name: "Muhsin Muhsin",
    affiliation: "Telkom University, Indonesia",
  },
  {
    title: "Dr.",
    name: "Irfan Mujahidin",
    affiliation: "Politeknik Negeri Semarang, Indonesia",
  },
  {
    title: "Dr.",
    name: "Munawir Munawir",
    affiliation: "Universitas Pendidikan Indonesia, Indonesia",
  },
  {
    title: "Dr.",
    name: "Arif Muntasa",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Murinto Murinto",
    affiliation: "Universitas Ahmad Dahlan, Indonesia",
  },
  {
    title: "Dr.",
    name: "Hindayati Mustafidah",
    affiliation: "Universitas Muhammadiyah Purwokerto, Indonesia",
  },
  {
    title: "Dr.",
    name: "Mohamad Imron Mustajib",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Faisal Muttaqin",
    affiliation: "Universitas Pembangunan Nasional Veteran Jawa Timur, Indonesia",
  },
  {
    title: "Dr.",
    name: "Ari Muzakir",
    affiliation: "Universitas Bina Darma, Indonesia",
  },
  {
    title: "Prof.",
    name: "Nasaruddin Nasaruddin",
    affiliation: "Syiah Kuala University, Indonesia",
  },
  {
    title: "Ms.",
    name: "Tran Thi Thao Nguyen",
    affiliation: "University of Science, VNU-HCM, Vietnam",
  },
  {
    title: "Dr.",
    name: "Andi Kurniawan Nugroho",
    affiliation: "Universitas Negeri Semarang, Indonesia",
  },
  {
    title: "Mr.",
    name: "Akim Pardede",
    affiliation: "STMIK Kaputama, Indonesia",
  },
  {
    title: "Mr.",
    name: "Jumadi Mabe Parenreng",
    affiliation: "Universitas Negeri Makassar-Indonesia, Indonesia",
  },
  {
    title: "Dr.",
    name: "Dinda Pramanta",
    affiliation: "Kyushu Institute of Information Sciences, Japan",
  },
  {
    title: "Mr.",
    name: "Dwi Pras",
    affiliation: "Universitas Merdeka Ponorogo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Alex Prasetya",
    affiliation: "Universitas Merdeka Malang, Indonesia",
  },
  {
    title: "Dr.",
    name: "Andy Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Dr.",
    name: "Dimas Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Dr.",
    name: "Rheyno Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Prof.",
    name: "Rina Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Dr.",
    name: "Ryan Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Dr.",
    name: "Suma Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Prof.",
    name: "Timun Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Prof.",
    name: "Vira Prasetya",
    affiliation: "Apple Academy, Indonesia",
  },
  {
    title: "Dr.",
    name: "Putri Taqwa Prasetyaningrum",
    affiliation: "Universitas Mercu Buana Yogyakarta, Indonesia",
  },
  {
    title: "Mr.",
    name: "Puput Dani Prasetyo",
    affiliation: "BRIN, Indonesia",
  },
  {
    title: "Mrs.",
    name: "Rahmi Rizkiana Putri",
    affiliation: "Institut Teknologi Adhi Tama Surabaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Aeri Rachmad, AR.",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Reza Fuad Rachmadi",
    affiliation: "Institut Teknologi Sepuluh Nopember, Indonesia",
  },
  {
    title: "Mrs.",
    name: "Fika Hastarita Rachman",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Budi Rahmani",
    affiliation: "STMIK Banjarbaru, Indonesia",
  },
  {
    title: "Mr.",
    name: "Adelhard Beni Rehiara",
    affiliation: "Universitas Negeri Papua, Indonesia",
  },
  {
    title: "Dr.",
    name: "Bagus Jati Santoso",
    affiliation: "Institut Teknologi Sepuluh Nopember, Indonesia",
  },
  {
    title: "Mr.",
    name: "Hadi Santoso",
    affiliation: "Universitas Mercu Buana, Indonesia",
  },
  {
    title: "Dr.",
    name: "Erwan Adi Saputro",
    affiliation: "Universitas Pembangunan Nasional Veteran Jawa Timur, Indonesia",
  },
  {
    title: "Mr.",
    name: "Budi Dwi Satoto",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Dr.",
    name: "Agung Setia Budi",
    affiliation: "Universitas Brawijaya, Indonesia",
  },
  {
    title: "Mr.",
    name: "Aji Setiawan",
    affiliation: "Universitas Diponegoro, Indonesia",
  },
  {
    title: "Dr.",
    name: "Ariyono Setiawan",
    affiliation: "Politeknik Pelayaran Surabaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Eko Setiawan",
    affiliation: "Universitas Brawijaya, Indonesia",
  },
  {
    title: "Dr.",
    name: "Endang Setyati",
    affiliation: "Sekolah Tinggi Teknik Surabaya, Indonesia",
  },
  {
    title: "Mr.",
    name: "Gagak Sinaga",
    affiliation: "Universitas Diponegoro, Indonesia",
  },
  {
    title: "Dr.",
    name: "Erwin Sitompul",
    affiliation: "President University, Indonesia",
  },
  {
    title: "Mr.",
    name: "Agustami Sitorus",
    affiliation: "BRIN, Indonesia",
  },
  {
    title: "Dr.",
    name: "Firdaus Solihin",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
  {
    title: "Mr.",
    name: "Aji Supriyanto",
    affiliation: "Universitas Stikubank (UNISBANK), Indonesia",
  },
  {
    title: "Dr.",
    name: "Agus Susanto",
    affiliation: "Politeknik Negeri Madiun, Indonesia",
  },
  {
    title: "Mr.",
    name: "Hiroshi Suzuki",
    affiliation: "Graduate School of Tokushima University, Japan",
  },
  {
    title: "Dr.",
    name: "Yuyun Wabula",
    affiliation: "BRIN, Indonesia",
  },
  {
    title: "Mr.",
    name: "Ananta Adhi Wardana",
    affiliation: "Universitas Airlangga, Indonesia",
  },
  {
    title: "Dr.",
    name: "Helmy Widyantara",
    affiliation: "Institut Teknologi Telkom Surabaya, Indonesia",
  },
  {
    title: "Prof.",
    name: "Takashi Yasuno",
    affiliation: "Tokushima University, Japan",
  },
  {
    title: "Dr.",
    name: "Muhammad Yusuf",
    affiliation: "Universitas Trunojoyo, Indonesia",
  },
];

const excludedIpcNames = new Set([
  "Afiyati Afiyati",
  "Qurrotul Aini",
  "Henderi Henderi",
  "Fajar Astuti Hermawati",
  "Devi Karolita",
  "Irwan Alnarus Kautsar",
  "Yosi Kristian",
  "Avina Matalata",
  "Munawir Munawir",
  "Murinto Murinto",
  "Hindayati Mustafidah",
  "Nasaruddin Nasaruddin",
  "Andi Kurniawan Nugroho",
  "Akim Pardede",
  "Jumadi Mabe Parenreng",
  "Dwi Pras",
  "Alex Prasetya",
  "Andy Prasetya",
  "Dimas Prasetya",
  "Rheyno Prasetya",
  "Rina Prasetya",
  "Ryan Prasetya",
  "Suma Prasetya",
  "Timun Prasetya",
  "Vira Prasetya",
  "Reza Fuad Rachmadi",
  "Hadi Santoso",
  "Endang Setyati",
  "Erwin Sitompul",
]);

const visibleIpcMembers = ipcMembers.filter((member) => !excludedIpcNames.has(member.name));

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
            Organizing committee for 2027 ICONIQ.
          </p>
        </div>

        <section id="committee" className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Committee</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
            <div className="overflow-x-auto">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="w-[240px] px-4 py-3 font-black text-zinc-900">
                      Role
                    </th>
                    <th scope="col" className="px-4 py-3 font-black text-zinc-900">
                      Name(s)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 bg-white">
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Advisor</td>
                    <td className="px-4 py-3 text-zinc-700">Dr. Eng. Ir. Anggraini Puspita Sari, S.T., M.T.</td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">General Chair</td>
                    <td className="px-4 py-3 text-zinc-700">Dr.Eng. Muhammad Zulhaj Aliansyah, S.T., M.Eng.</td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Treasurer</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Aviolla Terza Damaliana, S.Si., M.Stat. (Chair)
                      <br />
                      Dr. Mega Rizkya Afiana (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Technical Program</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Dr. Eng. Ir. Dwi Arman Prasetya, ST., MT., IPU (Chair)
                      <br />
                      Dr. Eng, Ir. Irfan Mujahidin, S.T., M.T., M.Sc., IPP (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Secretary</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Dr.Eng. Adelhard Beni Rehiara, S.T., M.Eng. (Chair)
                      <br />
                      Shindi Shella May Wara, M. Stat. (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Secretariat</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Dr. Eng., Nurlaili Humaidah, S.T., M.T. (Chair)
                      <br />
                      Andri Fauzan Adziima, M. Si. (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Event Division</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Dr. Agustami Sitorus, M.Sc. (Chair)
                      <br />
                      Muhammad Nasrudin, M. Stat. (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Publication</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Alfan Rizaldy Pratama, S.Tr.T., M.Tr.Kom. (Chair)
                      <br />
                      Dr.Eng. Puput Dani Prasetyo Adi, S.Kom., M.T. (Co-chair)
                      <br />
                      Lintang Inggrihaning Putri, S.Ak. (Member)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">International Program</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Dr. Iwan Pramesti Anwar, S.Si., M.Si. (Chair)
                      <br />
                      Amri Muhaimin, S.Stat., M.Stat., M.S. (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">Sponsorship and Promotion</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Dr.Eng. Ir. Muhammad Abdillah, S.T., M.T., IPM (Chair)
                      <br />
                      Yoga Samudra, S.Kom., M.Kom. (Co-chair)
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="px-4 py-3 font-semibold text-zinc-800">General Affairs</td>
                    <td className="px-4 py-3 text-zinc-700">
                      Nurul Awaliyah Mukhlis, M.Pd. (Chair)
                      <br />
                      Uswatun Khasana, S.Tr.T. (Co-chair)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="ipc-reviewers" className="mt-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">International Program Committee (IPC) and Reviewers</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
            <div className="overflow-x-auto">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th scope="col" className="w-[110px] px-4 py-3 font-black text-zinc-900">
                      Title
                    </th>
                    <th scope="col" className="px-4 py-3 font-black text-zinc-900">
                      Name, affiliation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 bg-white">
                  {visibleIpcMembers.map((member, index) => (
                    <tr key={`${member.title}-${member.name}-${index}`} className="align-top">
                      <td className="px-4 py-3 font-semibold text-zinc-800">{member.title}</td>
                      <td className="px-4 py-3 text-zinc-700">
                        <span className="font-semibold text-zinc-900">{member.name}</span>, {member.affiliation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
