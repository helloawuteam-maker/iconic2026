export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#111124] to-[#0b0b12] py-12 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <div className="text-base font-black">2026 ICONIQ</div>
          <p className="mt-2 text-sm text-white/85">
            2026 International Conference on Innovation and Quality in Engineering and Technology
          </p>
          <p className="mt-3 text-xs text-white/80">Bali · August 28, 2026</p>
        </div>
        <div>
          <div className="text-sm font-black">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="/programs">Programs</a>
            <a className="hover:underline" href="/author-information">Author Information</a>
            <a className="hover:underline" href="/contact">Contact</a>
          </div>
        </div>
        <div>
          <div className="text-sm font-black">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            <a className="hover:underline" href="mailto:iconiq@apskin.org">iconiq@apskin.org</a>
            <a className="hover:underline" href="tel:+6289524180486">Chusna Maulida +62 895-2418-0486</a>
            <a className="hover:underline" href="tel:+62895335857578">Aviolla +62 895-3358-57578</a>
            <a className="hover:underline" href="https://maps.app.goo.gl/mvXvE4crh5fQSEgRA" target="_blank" rel="noopener">
              Venue / Map
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-5 pt-6">
        <p className="text-xs text-white/70">© {new Date().getFullYear()} 2026 ICONIQ. All rights reserved.</p>
      </div>
    </footer>
  );
}
