import { Brand } from "./brand";
import { nav, site, whatsappLink } from "../../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-28 md:pb-14">
      <div className="container-r">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Brand />
            <p className="mt-5 max-w-sm text-sm text-muted-ink">
              Escritório de arquitetura e design de interiores em {site.city} - {site.state}.
              Projetos residenciais, comerciais e institucionais.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow text-muted-ink">Navegação</span>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-display text-sm tracking-wide text-ink/75 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="eyebrow text-muted-ink">Contato</span>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-ink">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-brand">
                  {site.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  WhatsApp {site.whatsappLabel}
                </a>
              </li>
              <li>
                {site.address} — {site.city} - {site.state}, {site.zip}
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted-ink md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.
          </p>
          <p>
            {site.rating} / 5 no Google · {site.reviewCount} avaliações
          </p>
        </div>
      </div>
    </footer>
  );
}
