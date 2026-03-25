# Copilot Instructions — Zaap Telas

## Sobre o Projeto

Site institucional single-page para a **Zaap Telas** (Razão Social: Zaaptelas · CNPJ: 20.885.812/0001-79), empresa de telas mosquiteiras em alumínio sob medida na Grande Florianópolis, SC. O objetivo principal é converter visitantes em contatos via WhatsApp.

## Stack

- **Next.js 14+** (App Router) com **TypeScript**
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Storybook** para desenvolvimento e documentação de componentes
- **Vitest** + **Playwright** para testes (via Storybook addon)
- **Vercel** para deploy

## Comandos

```bash
npm run dev            # Dev server (http://localhost:3000)
npm run build          # Build + gera sitemap
npm run lint           # ESLint
npm run storybook      # Storybook (http://localhost:6006)
npm run build-storybook # Build estático do Storybook
npx vitest             # Testes via Vitest
```

## Arquitetura

Single Page Application com navegação por âncoras (`/#secao`). A página é composta por 6 seções sequenciais:

1. **Hero** — headline de impacto + CTA WhatsApp
2. **Diferenciais** — 4 cards argumentando alumínio vs madeira
3. **Produtos** — grid de tipos de tela (janelas, portas, basculantes)
4. **Como Funciona** — 3 etapas: medição → fabricação → instalação
5. **Galeria** — grid masonry com lightbox
6. **Contato** — CTA final + WhatsApp + formulário de orçamento por e-mail

### Estrutura de Arquivos

```
/src/app
  layout.tsx          → fontes, metadata, JSON-LD, GTM
  page.tsx            → importa e ordena todas as seções
  globals.css         → design tokens Tailwind (cores, fontes)
/src/components
  Navbar.tsx          → sticky, links âncora, CTA "Orçamento"
  SectionIndicator.tsx → breadcrumb flutuante (IntersectionObserver)
  Hero.tsx
  Diferenciais.tsx
  Produtos.tsx
  ComoFunciona.tsx
  Galeria.tsx
  Contato.tsx
/src/data
  produtos.ts         → array de produtos (nome, desc, imagem)
  galeria.ts          → array de fotos com legenda
  depoimentos.ts      → array de depoimentos de clientes
/public/images        → fotos dos serviços
/.storybook           → configuração do Storybook
```

### Componente-chave: SectionIndicator

Breadcrumb flutuante fixo no bottom-center da viewport. Usa `IntersectionObserver` (threshold 0.4) para detectar a seção visível e exibe setas de navegação para seções adjacentes. Animado com Framer Motion (fade + slide-up).

### Dados estáticos

Conteúdo gerenciado via arrays TypeScript em `/data/*.ts` — sem CMS. Produtos, galeria e depoimentos são objetos tipados nesses arquivos.

## Convenções de Design

| Token | Valor | Uso |
|---|---|---|
| Escuro | `#1C1C18` | Backgrounds, texto principal |
| Creme | `#F5F2EC` | Background claro, corpo da página |
| Oliva | `#4A5240` | Acentos secundários |
| Dourado-musgo | `#B8A070` | Números, ícones, bordas de destaque |
| WhatsApp green | `#25D366` | Botões de CTA WhatsApp |

- **Fonte display:** Cormorant Garamond (headlines)
- **Fonte corpo:** DM Sans (textos e UI)
- **Bordas:** `0.5px solid` com opacidade 0.18 — nunca pesadas
- **Border-radius:** `2px` para botões/pills, `0px` para cards (estética angular)
- **Logo:** "Zaap" em escuro + "Telas" em oliva, fonte Cormorant Garamond
- **Tema:** apenas claro/creme na v1

## SEO

SEO é parte da fundação, não uma otimização posterior:

- H1 único na Hero, H2 por seção, H3 nos cards
- Alt text descritivo com localização em todas as imagens (ex: `tela mosquiteira alumínio janela correr Florianópolis`)
- Schema.org **LocalBusiness** + **Product** em JSON-LD
- `next-sitemap` para sitemap.xml e robots.txt
- Open Graph e Twitter Card configurados (imagem 1200×630)
- Termos-alvo: "tela mosquiteira Florianópolis", "tela mosquiteira alumínio SC"

## Analytics

Google Analytics 4 via Google Tag Manager. Eventos de conversão obrigatórios:

1. Clique no botão WhatsApp (conversão principal)
2. Clique no link do Facebook
3. Scroll até seção Contato
4. Envio do formulário de orçamento
5. Clique em número de telefone (mobile)

## Performance

Metas de Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms, Lighthouse mobile > 90.

- Imagens em WebP via `next/image` com width/height explícitos
- Preload das fontes críticas com `font-display: swap`
- Nenhum recurso de terceiros bloqueante no critical path

## Idioma

Todo o conteúdo voltado ao usuário é em **português brasileiro (pt-BR)**. Código (variáveis, funções, tipos) pode usar inglês ou português, mas os nomes dos componentes seguem o padrão do PRD: `Hero`, `Diferenciais`, `Produtos`, `ComoFunciona`, `Galeria`, `Contato`.

## Dados do Negócio

- **WhatsApp:** (48) 99133-0508
- **CNPJ:** 20.885.812/0001-79
- **Razão Social:** Zaaptelas
- **Pagamento:** Visa / Master / Elo

### Produto

Telas mosquiteiras fixas ou de correr para janelas, portas e basculantes em geral. Aro de alumínio e tecido de fibra de vidro revestida com PVC. Todas as telas são removíveis.

### Áreas de Atendimento

Campeche, Rio Tavares, Canto da Lagoa, Porto da Lagoa, Lagoa da Conceição, Morro das Pedras, Armação, Pantano do Sul, Açores e Ribeirão da Ilha.

### Depoimentos de Clientes

Usar em `/data/depoimentos.ts`:

1. "O Maurício foi super atencioso e rápido! As telas ficaram perfeitas, com certeza vou fazer mais!"
2. "Excelente trabalho. Rápido e eficiente. Atendimento perfeito. Recomendo muito."
3. "Serviço excelente, orçamento rápido, material de qualidade e ótimo atendimento"
4. "Excelente profissional, produto de muita qualidade, acabamento perfeito, limpeza total! Super simpático e atencioso no atendimento, cuidou de todos os mínimos detalhes na instalação de telas, estávamos tendo muitas visitas de aranhas e ele solucionou isso rápido demais, consultamos valores em uma semana e logo na outra ele veio fazer a instalação. Gostamos muito do serviço, atendimento, do profissional, e da funcionalidade dos produtos, gratidão pelo trabalho perfeito! 🙏🏽"
