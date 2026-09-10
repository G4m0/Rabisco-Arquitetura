import {
  Armchair,
  Building2,
  ClipboardCheck,
  Hammer,
  Landmark,
  Ruler,
} from "lucide-react";

const servicos = [
  {
    icon: Ruler,
    title: "Projeto arquitetônico",
    text: "Estudo preliminar, planta humanizada, fachada e projeto executivo completo para construir sem surpresas.",
  },
  {
    icon: Armchair,
    title: "Design de interiores",
    text: "Layout, marcenaria sob medida, iluminação, revestimentos e paleta — ambiente por ambiente.",
  },
  {
    icon: Hammer,
    title: "Reforma e retrofit",
    text: "Reorganização de espaços e renovação de fachadas, com soluções que valorizam o imóvel existente.",
  },
  {
    icon: Building2,
    title: "Arquitetura comercial",
    text: "Lojas, showrooms e escritórios pensados para a operação, o fluxo de clientes e a identidade da marca.",
  },
  {
    icon: Landmark,
    title: "Projetos institucionais",
    text: "Templos, salões e espaços de uso coletivo, com atenção a acessibilidade, acústica e conforto.",
  },
  {
    icon: ClipboardCheck,
    title: "Aprovação e obra",
    text: "Documentação para prefeitura, orçamento, escolha de fornecedores e acompanhamento técnico da execução.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-20 md:py-32">
      <div className="container-r">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <span className="eyebrow text-brand">O que fazemos</span>
            <h2 className="h-section mt-4">
              Projeto completo,
              <br />
              do desenho ao detalhe.
            </h2>
          </div>
          <p className="reveal text-muted-ink md:col-span-5" style={{ "--reveal-delay": "120ms" } as never}>
            Cada projeto começo por entender rotina, orçamento e terreno. O resultado é um
            desenho que cabe na sua vida — e na sua obra.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => (
            <article
              key={servico.title}
              className="reveal group relative bg-paper p-7 transition-colors duration-300 hover:bg-white md:p-9"
              style={{ "--reveal-delay": `${i * 70}ms` } as never}
            >
              <span className="font-body text-[0.65rem] tracking-[0.25em] text-muted-ink">
                0{i + 1}
              </span>
              <servico.icon
                className="mt-6 h-7 w-7 text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.2}
              />
              <h3 className="font-display mt-5 text-xl font-normal tracking-tight md:text-[1.35rem]">
                {servico.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{servico.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
