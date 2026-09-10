import { whatsappLink } from "../../lib/site";

const etapas = [
  {
    n: "01",
    title: "Conversa inicial",
    text: "Entendemos o que você precisa, o terreno ou imóvel, o prazo e o orçamento disponível.",
  },
  {
    n: "02",
    title: "Estudo preliminar",
    text: "Primeiros rabiscos, layout e volumetria. Você vê a ideia em 3D antes de qualquer decisão.",
  },
  {
    n: "03",
    title: "Projeto executivo",
    text: "Detalhamento técnico, marcenaria, elétrica, hidráulica e documentação para aprovação.",
  },
  {
    n: "04",
    title: "Obra acompanhada",
    text: "Visitas técnicas, apoio na escolha de materiais e conferência do que foi projetado.",
  },
];

export function Processo() {
  return (
    <section id="processo" className="py-20 md:py-32">
      <div className="container-r">
        <div className="grain relative overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-white md:rounded-[40px] md:px-14 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-20 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #B3121A 0%, transparent 68%)" }}
          />
          <div className="relative">
            <div className="reveal max-w-2xl">
              <span className="eyebrow text-brand">Como trabalhamos</span>
              <h2 className="h-section mt-4 text-white">
                Quatro etapas claras, sem retrabalho.
              </h2>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {etapas.map((etapa, i) => (
                <div
                  key={etapa.n}
                  className="reveal bg-ink-soft p-6 md:p-8"
                  style={{ "--reveal-delay": `${i * 90}ms` } as never}
                >
                  <span className="font-display text-4xl font-extralight text-brand md:text-5xl">
                    {etapa.n}
                  </span>
                  <h3 className="font-display mt-6 text-lg font-normal text-white md:text-xl">
                    {etapa.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">{etapa.text}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-12 flex flex-col items-start gap-5 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
              <p className="max-w-lg text-white/60">
                Ainda na dúvida sobre onde começar? Manda a planta, a foto do terreno ou só a
                ideia — a gente responde no WhatsApp.
              </p>
              <a
                href={whatsappLink("Olá! Quero entender como funciona o processo de projeto da Rabisco.")}
                target="_blank"
                rel="noreferrer"
                className="font-display shrink-0 rounded-full bg-white px-7 py-4 text-sm tracking-wide text-ink transition-colors hover:bg-brand hover:text-white"
              >
                Começar meu projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
