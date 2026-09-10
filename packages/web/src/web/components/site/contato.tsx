import { useState } from "react";
import { Clock, MapPin, Navigation, Phone, Send } from "lucide-react";
import { mapsDirectionsUrl, mapsEmbedUrl, site, whatsappLink } from "../../lib/site";

const tipos = [
  "Projeto residencial",
  "Interiores / marcenaria",
  "Reforma ou retrofit",
  "Comercial / institucional",
  "Outro assunto",
];

export function Contato() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(tipos[0]);
  const [detalhes, setDetalhes] = useState("");

  const mensagem = [
    `Olá! Meu nome é ${nome || "(nome)"}.`,
    `Assunto: ${tipo}.`,
    detalhes ? `Detalhes: ${detalhes}` : "Gostaria de conversar sobre um projeto.",
    "Vim pelo site da Rabisco Arquitetura & Interiores.",
  ].join(" ");

  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container-r">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-brand">Contato</span>
          <h2 className="h-section mt-4">Conta pra gente sua ideia.</h2>
          <p className="mt-5 text-muted-ink md:text-lg">
            Preencha os campos e o WhatsApp abre com a mensagem pronta — ou ligue direto para o
            escritório.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12">
          {/* Formulário → WhatsApp */}
          <form
            className="reveal self-start rounded-[26px] border border-line bg-white/70 p-6 md:col-span-7 md:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink(mensagem), "_blank", "noreferrer");
            }}
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="eyebrow text-muted-ink">Seu nome</span>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  aria-label="Seu nome"
                  required
                  placeholder="Como podemos te chamar?"
                  className="mt-2.5 w-full border-b border-line bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-ink/60 focus:border-brand"
                />
              </label>

              <div>
                <span className="eyebrow text-muted-ink">O que você precisa</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tipos.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTipo(item)}
                      className={`font-display rounded-full border px-4 py-2 text-xs tracking-wide transition-colors ${
                        tipo === item
                          ? "border-ink bg-ink text-white"
                          : "border-line text-muted-ink hover:border-ink/40"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="eyebrow text-muted-ink">Detalhes (opcional)</span>
                <textarea
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  aria-label="Detalhes do projeto"
                  rows={3}
                  placeholder="Metragem, cidade, prazo, referências..."
                  className="mt-2.5 w-full resize-none border-b border-line bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-ink/60 focus:border-brand"
                />
              </label>

              <button
                type="submit"
                className="font-display group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm tracking-wide text-white transition-colors hover:bg-brand-deep"
              >
                Enviar pelo WhatsApp
                <Send
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              </button>
              <p className="text-xs text-muted-ink">
                Ao enviar, abrimos o WhatsApp {site.whatsappLabel} com a mensagem preenchida.
              </p>
            </div>
          </form>

          {/* Dados + mapa */}
          <div className="reveal md:col-span-5" style={{ "--reveal-delay": "120ms" } as never}>
            <div className="rounded-[26px] bg-ink p-6 text-white md:p-8">
              <div className="space-y-6">
                <a href={site.phoneHref} className="group flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.4} />
                  <span>
                    <span className="eyebrow block text-white/45">Telefone</span>
                    <span className="font-display mt-1 block text-lg tracking-wide transition-colors group-hover:text-brand">
                      {site.phoneLabel}
                    </span>
                  </span>
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <Send className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.4} />
                  <span>
                    <span className="eyebrow block text-white/45">WhatsApp</span>
                    <span className="font-display mt-1 block text-lg tracking-wide transition-colors group-hover:text-brand">
                      {site.whatsappLabel}
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.4} />
                  <span>
                    <span className="eyebrow block text-white/45">Endereço</span>
                    <span className="mt-1 block text-sm text-white/80">
                      {site.address}
                      <br />
                      {site.city} - {site.state}, {site.zip}
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.4} />
                  <span>
                    <span className="eyebrow block text-white/45">Atendimento</span>
                    <span className="mt-1 block text-sm text-white/80">{site.hours}</span>
                  </span>
                </div>
              </div>

              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm tracking-wide transition-colors hover:bg-white hover:text-ink"
              >
                <Navigation className="h-4 w-4" strokeWidth={1.5} />
                Traçar rota
              </a>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-[26px] border border-line bg-paper-2">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display absolute inset-0 z-0 flex items-center justify-center gap-2 text-sm tracking-wide text-muted-ink"
              >
                <MapPin className="h-4 w-4 text-brand" strokeWidth={1.5} />
                Ver no Google Maps
              </a>
              <iframe
                title="Mapa do escritório Rabisco Arquitetura & Interiores"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10 h-[240px] w-full border-0 md:h-[260px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
