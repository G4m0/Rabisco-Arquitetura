import { Clock, MapPin, Star } from "lucide-react";
import { site } from "../../lib/site";

const numeros = [
  { valor: site.rating, label: "Nota no Google" },
  { valor: `${site.reviewCount}`, label: "Avaliações de clientes" },
  { valor: "100%", label: "Projetos autorais" },
];

const avaliacoes = [
  {
    nome: "Assis Pereira",
    meta: "Guia local · 13 avaliações",
    texto: "Excelente atendimento",
    quando: "Avaliação no Google",
  },
  {
    nome: "Murilo Souza Guimarães",
    meta: "2 avaliações",
    texto: null,
    quando: "Avaliou com 5 estrelas",
  },
  {
    nome: "Luis Guilherme Lima",
    meta: "Guia local · 35 avaliações",
    texto: null,
    quando: "Avaliou com 5 estrelas",
  },
];

export function Escritorio() {
  return (
    <section id="escritorio" className="py-20 md:py-32">
      <div className="container-r">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <div className="relative">
              <img
                src="/images/arquiteta.jpg"
                alt="Responsável técnica do escritório Rabisco Arquitetura & Interiores"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[24px] object-cover md:rounded-[32px]"
              />
              <div className="absolute -right-3 bottom-5 rounded-2xl bg-paper px-5 py-4 shadow-[0_20px_50px_-25px_rgba(11,11,12,0.45)] md:-right-6">
                <div className="flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display mt-1 text-sm tracking-wide">
                  {site.rating} no Google
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="reveal eyebrow block text-brand">O escritório</span>
            <h2 className="reveal h-section mt-4" style={{ "--reveal-delay": "80ms" } as never}>
              Arquitetura feita perto
              <br />
              de quem vai morar nela.
            </h2>
            <div
              className="reveal mt-6 space-y-4 text-muted-ink md:text-lg"
              style={{ "--reveal-delay": "150ms" } as never}
            >
              <p>
                A Rabisco Arquitetura &amp; Interiores atende {site.city} e região com projetos
                residenciais, comerciais e institucionais. O nome vem do começo de todo projeto: o
                rabisco no papel, a conversa solta, a ideia que ainda não tem forma.
              </p>
              <p>
                Do estudo preliminar ao acompanhamento da obra, o cliente fala sempre com quem
                desenha — sem intermediários e sem projeto de catálogo. É esse atendimento direto
                que rendeu nota {site.rating} nas avaliações do Google.
              </p>
            </div>

            <div
              className="reveal mt-10 grid grid-cols-3 gap-4 border-y border-line py-7"
              style={{ "--reveal-delay": "220ms" } as never}
            >
              {numeros.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-3xl font-extralight md:text-4xl">
                    {item.valor}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-tight tracking-wide text-muted-ink uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="reveal mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-ink"
              style={{ "--reveal-delay": "280ms" } as never}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" strokeWidth={1.5} />
                {site.address} — {site.city} - {site.state}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" strokeWidth={1.5} />
                {site.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Avaliações reais do Google */}
        <div className="mt-16 md:mt-24">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />
            <span className="eyebrow text-muted-ink">O que dizem os clientes</span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {avaliacoes.map((avaliacao, i) => (
              <figure
                key={avaliacao.nome}
                className="reveal flex flex-col justify-between rounded-[22px] border border-line bg-white/70 p-6 md:p-7"
                style={{ "--reveal-delay": `${i * 90}ms` } as never}
              >
                <div>
                  <div className="flex items-center gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display mt-4 text-lg leading-snug font-light">
                    {avaliacao.texto ? `“${avaliacao.texto}”` : avaliacao.quando}
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-sm tracking-wide">{avaliacao.nome}</p>
                  <p className="text-xs text-muted-ink">{avaliacao.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
