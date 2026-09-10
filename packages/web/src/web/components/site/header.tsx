import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Brand } from "./brand";
import { nav, site, whatsappLink } from "../../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-paper/85 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="container-r flex items-center justify-between gap-4">
        <a href="#top" aria-label={site.fullName}>
          <Brand />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display group relative text-sm font-normal tracking-wide text-ink/75 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="font-display hidden items-center gap-2 text-sm tracking-wide text-ink/75 transition-colors hover:text-ink md:flex"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            {site.phoneLabel}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="font-display hidden rounded-full bg-ink px-5 py-2.5 text-sm tracking-wide text-white transition-colors hover:bg-brand md:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-x-0 top-[64px] bottom-0 z-40 bg-paper transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-r flex h-full flex-col justify-between py-10">
          <nav className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display flex items-baseline gap-4 border-b border-line py-4 text-3xl font-light tracking-tight"
              >
                <span className="font-body text-[0.65rem] tracking-[0.2em] text-brand">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="font-display rounded-full bg-brand px-6 py-4 text-center text-base tracking-wide text-white"
            >
              Falar no WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="font-display rounded-full border border-line px-6 py-4 text-center text-base tracking-wide text-ink"
            >
              Ligar {site.phoneLabel}
            </a>
            <p className="text-center text-xs text-muted-ink">
              {site.address} · {site.city} - {site.state}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
