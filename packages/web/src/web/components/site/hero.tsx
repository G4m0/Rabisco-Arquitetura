import { ArrowDownRight, MapPin, Star } from "lucide-react";
import { site, whatsappLink } from "../../lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-16">
      {/* fundo: malha suave + hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, #B3121A 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-line md:block"
      />

      <div className="container-r relative">
        <div className="rise flex items-center gap-3" style={{ "--rise-delay": "60ms" } as never}>
          <span className="h-px w-10 bg-brand" />
          <span className="eyebrow text-muted-ink">
            {site.city} · {site.state}
          </span>
        </div>

        <h1
          className="h-display rise mt-6 max-w-[15ch]"
          style={{ "--rise-delay": "140ms" } as never}
        >
          Do primeiro
          <br />
          <span className="italic">rabisco</span> à obra
          <br />
          <span className="text-brand">entregue.</span>
        </h1>

        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12 md:items-end">
          <p
            className="rise max-w-xl text-base text-muted-ink md:col-span-5 md:text-lg"
            style={{ "--rise-delay": "240ms" } as never}
          >
            Arquitetura e design de interiores para residências, comércio e espaços
            institucionais. Nosso escritório, detalhamento executivo e acompanhamento de obra —
            tudo com quem mora aqui e atende de perto.
          </p>

          <div
            className="rise flex flex-col gap-3 sm:flex-row md:col-span-4"
            style={{ "--rise-delay": "320ms" } as never}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="font-display group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm tracking-wide text-white transition-all hover:bg-brand-deep"
            >
              Quero meu projeto
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#projetos"
              className="font-display inline-flex items-center justify-center rounded-full border border-ink/20 px-7 py-4 text-sm tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              Ver projetos
            </a>
          </div>

          <div
            className="rise md:col-span-3"
            style={{ "--rise-delay": "400ms" } as never}
          >
            <div className="flex items-center gap-1.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="font-display mt-2 text-2xl font-light">
              {site.rating}
              <span className="text-base text-muted-ink"> / 5 no Google</span>
            </p>
            <p className="text-xs text-muted-ink">
              {site.reviewCount} avaliações de clientes
            </p>
          </div>
        </div>

        {/* imagem principal */}
        <div
          className="rise relative mt-12 md:mt-20"
          style={{ "--rise-delay": "480ms" } as never}
        >
          <div className="relative overflow-hidden rounded-[26px] md:rounded-[36px]">
            <img
              src={`${import.meta.env.BASE_URL}images/fachada-rabisco.png`}
              alt="Fachada do escritório Rabisco Arquitetura & Interiores em São Luís de Montes Belos"
              className="block h-auto w-full object-contain"
              loading="eager"
              fetchPriority="high"
              width={1109}
              height={530}
            />
            <div
              aria-hidden
              className="hidden"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 bg-ink p-5 md:p-8">
              <div>
                <p className="eyebrow text-white/60">Projeto autoral</p>
                <p className="font-display mt-1 text-xl font-light text-white md:text-2xl">
                  Rabisco Arquitetura & Interiores
                </p>
              </div>
              <a
                href="#contato"
                className="font-display inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2.5 text-xs tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink"
              >
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
                Conheça nossa localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
