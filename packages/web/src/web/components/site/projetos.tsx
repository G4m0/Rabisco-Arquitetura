import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "../../lib/site";

const projetos = [
  {
    img: "/images/projeto-residencial.jpg",
    tag: "Residencial",
    title: "Residência térrea contemporânea",
    text: "Volumes brancos, ripado de madeira e iluminação embutida na fachada.",
    span: "md:col-span-7",
    ratio: "aspect-[16/11] md:aspect-auto md:h-[460px]",
  },
  {
    img: "/images/projeto-retrofit.jpg",
    tag: "Retrofit",
    title: "Retrofit de fachada",
    text: "Pedra natural, cobogó metálico e grandes panos de vidro em imóvel existente.",
    span: "md:col-span-5",
    ratio: "aspect-[16/11] md:aspect-auto md:h-[460px]",
  },
  {
    img: "/images/projeto-nova-visao.jpg",
    tag: "Institucional",
    title: "Igreja Nova Visão",
    text: "Acesso coberto, acessibilidade e projeto de iluminação cênica da fachada.",
    span: "md:col-span-5",
    ratio: "aspect-[16/11] md:aspect-auto md:h-[460px]",
  },
  {
    img: "/images/projeto-impacto.jpg",
    tag: "Comercial",
    title: "Impacto Auto Peças",
    text: "Fachada comercial com marquise, mármore e comunicação visual integrada.",
    span: "md:col-span-7",
    ratio: "aspect-[16/11] md:aspect-auto md:h-[460px]",
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="bg-paper-2/60 py-20 md:py-32">
      <div className="container-r">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-brand">Portfólio</span>
            <h2 className="h-section mt-4">Projetos que já saíram do papel.</h2>
          </div>
          <a
            href={whatsappLink("Olá! Vi o portfólio no site e quero um projeto parecido.")}
            target="_blank"
            rel="noreferrer"
            className="font-display group inline-flex items-center gap-2 text-sm tracking-wide text-ink"
          >
            Quero algo assim
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-12 md:gap-6">
          {projetos.map((projeto, i) => (
            <article
              key={projeto.title}
              className={`reveal group relative overflow-hidden rounded-[22px] bg-ink md:rounded-[28px] ${projeto.span}`}
              style={{ "--reveal-delay": `${i * 90}ms` } as never}
            >
              <img
                src={projeto.img}
                alt={projeto.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${projeto.ratio}`}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <span className="font-display inline-block rounded-full bg-white/14 px-3 py-1 text-[0.62rem] tracking-[0.2em] text-white uppercase backdrop-blur-md">
                  {projeto.tag}
                </span>
                <h3 className="font-display mt-3 text-xl font-light text-white md:text-2xl">
                  {projeto.title}
                </h3>
                <p className="mt-1.5 max-w-sm text-sm text-white/70">{projeto.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
