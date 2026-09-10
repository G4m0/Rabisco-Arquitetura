import { useState } from "react";
import { Plus } from "lucide-react";

const perguntas = [
  {
    q: "Vocês atendem fora de São Luís de Montes Belos?",
    a: "Sim. O escritório fica em São Luís de Montes Belos - GO e atendemos as cidades da região. Projetos à distância também são possíveis, com reuniões online e visitas combinadas.",
  },
  {
    q: "Quanto custa um projeto de arquitetura?",
    a: "Depende da metragem, do tipo de imóvel e do escopo (só arquitetônico, só interiores ou completo). Depois de uma conversa rápida sobre o que você precisa, enviamos uma proposta com valores e prazos.",
  },
  {
    q: "Dá para fazer só o projeto de interiores?",
    a: "Dá. Muitos clientes chegam com a casa pronta ou em obra e contratam apenas layout, marcenaria, iluminação e acabamentos.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "O estudo preliminar costuma sair em poucas semanas; o projeto executivo completo depende do porte da obra e da velocidade das aprovações. Definimos o cronograma antes de começar.",
  },
  {
    q: "Vocês acompanham a obra?",
    a: "Sim. Fazemos visitas técnicas para conferir a execução, apoiar na escolha de materiais e resolver ajustes com o construtor.",
  },
];

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section className="bg-paper-2/60 py-20 md:py-32">
      <div className="container-r grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="reveal md:col-span-4">
          <span className="eyebrow text-brand">Dúvidas frequentes</span>
          <h2 className="h-section mt-4">Antes de mandar mensagem.</h2>
        </div>

        <div className="md:col-span-8">
          {perguntas.map((item, i) => {
            const open = aberta === i;
            return (
              <div
                key={item.q}
                className="reveal border-b border-line first:border-t"
                style={{ "--reveal-delay": `${i * 60}ms` } as never}
              >
                <button
                  type="button"
                  onClick={() => setAberta(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-normal tracking-tight md:text-xl">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-10 text-sm leading-relaxed text-muted-ink">
                    <span className="block pb-6">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
