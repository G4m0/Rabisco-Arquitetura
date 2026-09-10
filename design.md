# Rabisco Arquitetura & Interiores — Design

Landing page one-page (web, mobile-first) para o escritório Rabisco Arquitetura & Interiores,
em São Luís de Montes Belos - GO. Objetivo único: gerar contato via WhatsApp / telefone.
Direção visual: editorial e arquitetônica — papel off-white, blocos escuros grafite, vermelho
da marca como acento cirúrgico, muito espaço em branco, hairlines finas, fotos grandes.

## Brand & Colors

Tokens em `packages/web/src/web/styles.css` (CSS variables + `@theme`).

| Token | Valor | Uso |
|-------|-------|-----|
| ink | #0B0B0C | Blocos escuros, texto principal |
| ink-soft | #17171B | Cards dentro de blocos escuros |
| paper | #F5F3F1 | Fundo da página (off-white quente) |
| paper-2 | #EAE5E1 | Superfícies alternadas, hover |
| red | #B3121A | Acento da marca (CTA, números, detalhes) |
| red-deep | #7E0B12 | Hover do acento, gradientes |
| muted | #6E6A66 | Texto secundário |
| line | rgba(11,11,12,0.12) | Hairlines |

Regra: vermelho só em CTA, números de etapa, sublinhados e ícones-chave. Nunca em blocos grandes.

## Typography

- **Display / títulos:** Jost (geométrica, ecoa o logotipo da marca) — pesos 200–500, tracking negativo em títulos grandes, caixa alta com tracking largo em labels.
- **Corpo:** Manrope 400/500, line-height generoso (1.7).
- Escala mobile-first: h1 `clamp(2.4rem, 9vw, 5.5rem)`, h2 `clamp(1.9rem, 5vw, 3.25rem)`, corpo 16–18px.

## Layout

- Container `max-w-[1200px]`, padding lateral 20px (mobile) / 40px (desktop).
- Seções com respiro alto: `py-20` mobile, `py-32` desktop.
- Cartões grandes com raio 24–32px; grids assimétricos (hero 7/5, projetos 2 colunas com um item alto).
- Bloco escuro único no meio da página (processo) para quebrar o ritmo claro.

## Componentes

`src/web/components/site/`: `brand.tsx` (lockup SVG do globo + wordmark), `header.tsx` (fixo, nav
+ menu mobile), `hero.tsx`, `servicos.tsx`, `projetos.tsx`, `processo.tsx` (bloco escuro),
`depoimentos.tsx` (avaliações reais do Google), `faq.tsx` (acordeão), `contato.tsx` (form que abre
o WhatsApp + mapa), `footer.tsx`, `mobile-cta.tsx` (barra fixa Ligar/WhatsApp no mobile).
Hook `hooks/use-reveal.ts`: IntersectionObserver adiciona `.is-in` para revelar em cascata.

## Motion

Uma orquestração no load do hero (stagger de 60ms) + reveal fade-up de 16px ao entrar na viewport.
CSS-only, `prefers-reduced-motion` respeitado.

## Conteúdo / contatos

- Endereço: R. Jabaquara, 204 - St. Central, São Luís de Montes Belos - GO, 76100-000
- Telefone fixo: (64) 3601-2022 · WhatsApp: (62) 99615-7278
- Horário: seg–sex a partir das 08:30
- Google: 5,0 com 6 avaliações (depoimentos usam somente texto real das avaliações)
- Projetos: fotos reais fornecidas pelo cliente em `public/images/`
