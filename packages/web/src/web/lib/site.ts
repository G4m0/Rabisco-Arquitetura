export const site = {
  name: "Rabisco",
  fullName: "Rabisco Arquitetura & Interiores",
  city: "São Luís de Montes Belos",
  state: "GO",
  address: "R. Jabaquara, 204 - St. Central",
  zip: "76100-000",
  phoneLabel: "(64) 3601-2022",
  phoneHref: "tel:+556436012022",
  whatsappLabel: "(62) 99615-7278",
  whatsappNumber: "5562996157278",
  hours: "Consulte os horários pelo telefone",
  rating: "5,0",
  reviewCount: 6,
  mapsQuery:
    "R. Jabaquara, 204 - St. Central, São Luís de Montes Belos - GO, 76100-000",
} as const;

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Olá! Vim pelo site da Rabisco Arquitetura & Interiores e gostaria de falar sobre um projeto.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.mapsQuery,
)}`;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Contato", href: "#contato" },
] as const;
