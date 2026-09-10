import { ArrowDownRight, MapPin, Star } from "lucide-react";
import { site, whatsappLink } from "../../lib/site";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pt-24 pb-10 md:pt-28 md:pb-16">
      <div className="container-r grid items-center gap-x-10 gap-y-6 lg:grid-cols-2">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="eyebrow text-muted-ink">{site.city} · {site.state}</p>
          <h1 className="mt-5 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight">
            Do primeiro<br /><span className="italic">rabisco</span> à obra<br />
            <span className="text-brand">entregue.</span>
          </h1>
        </div>

        <figure className="m-0 min-w-0 overflow-hidden rounded-[24px] bg-ink lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <img
            src={`${import.meta.env.BASE_URL}images/fachada-rabisco-v2.png`}
            alt="Fachada da Rabisco Arquitetura & Interiores, com a entrada e as placas do escritório"
            className="block h-auto w-full"
            width={1082}
            height={490}
            loading="eager"
            fetchPriority="high"
          />
          <figcaption className="px-5 py-5 text-white md:px-6">
            <p className="text-sm text-white/70">Nosso escritório</p>
            <p className="font-display mt-1 text-xl">Rabisco Arquitetura &amp; Interiores</p>
            <a href="#contato" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">
              <MapPin className="h-4 w-4 shrink-0" />
              {site.address}
            </a>
          </figcaption>
        </figure>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <p className="max-w-xl text-base text-muted-ink">
            Arquitetura e design de interiores para residências, comércio e espaços
            institucionais. Projeto autoral, detalhamento executivo e acompanhamento de obra,
            com atendimento próximo em São Luís de Montes Belos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="font-display inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base text-white transition-colors hover:bg-brand-deep">
              Quero meu projeto <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="#projetos" className="font-display inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-base hover:bg-ink hover:text-white">
              Ver projetos
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span aria-label="5 estrelas" className="flex gap-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => <Star aria-hidden="true" key={i} className="h-4 w-4 fill-current" strokeWidth={0} />)}
            </span>
            <p className="text-sm text-muted-ink">{site.rating} no Google · {site.reviewCount} avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
}
