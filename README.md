# Template de Site Institucional — Base Comercial Reutilizável

Base de site institucional estático, construída em **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, pensada para ser vendida e adaptada a diferentes clientes (consultorias, clínicas, escritórios, empresas de tecnologia, engenharia, arquitetura, B2B, etc.) trocando **apenas configuração e conteúdo** — sem tocar nos componentes.

Demonstração incluída: **Almeida Solutions**, uma consultoria empresarial fictícia.

---

## 1. Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, Static Export compatível) |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS v4 (tokens via CSS variables) |
| Ícones | lucide-react (+ ícones de marca próprios em `components/shared/SocialIcons.tsx`) |
| Deploy | Vercel, Netlify ou qualquer servidor estático/Node |

Sem backend, sem banco de dados, sem CMS, sem autenticação — por design (ver seção 8).

---

## 2. Instalação

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # servir o build de produção
npm run lint     # checagem de qualidade de código
```

---

## 3. Como criar um novo cliente (o mais importante)

A regra de ouro do template: **conteúdo e identidade visual vivem em `src/config` e `src/data`; componentes nunca têm texto, cor ou dado fixo.**

Para reskinar o site para um novo cliente, edite apenas:

```text
src/config/site.ts        → nome, contato, endereço, WhatsApp, CTAs, textos institucionais
src/config/theme.ts       → cores, radius, tipografia (identidade visual completa)
src/config/navigation.ts  → itens de menu e CTA do header
src/config/seo.ts         → título, descrição, keywords, OG image
src/data/services.ts      → lista de serviços (quantidade livre)
src/data/testimonials.ts  → depoimentos
src/data/faq.ts           → perguntas frequentes
src/data/stats.ts         → números de destaque (anos, clientes, projetos...)
src/data/features.ts      → diferenciais
src/data/process.ts       → etapas do processo comercial
```

Nenhum outro arquivo precisa ser alterado para trocar de empresa. Páginas, seções e componentes leem tudo daqui.

### Trocar a identidade visual (cores)

Edite `src/config/theme.ts`. Exemplos prontos já estão comentados no arquivo:

```ts
// Clínica (verde + branco)
primary: "#0F5C4C", primaryDark: "#0A3F34", accent: "#8FBF9F"

// Escritório de advocacia (preto + dourado)
primary: "#111111", primaryDark: "#000000", accent: "#B8963E"

// Tecnologia (roxo + branco)
primary: "#4B3AA6", primaryDark: "#352878", accent: "#7C6CF0"
```

Essas variáveis viram utilitários Tailwind automaticamente (`bg-primary`, `text-accent`, `border-border`...) via `@theme inline` em `src/app/globals.css` — nenhuma cor está hardcoded em componente algum.

### Adicionar um serviço

Adicione um objeto ao array em `src/data/services.ts`:

```ts
{
  slug: "novo-servico",
  icon: SomeLucideIcon,
  name: "Nome do Serviço",
  shortDescription: "Frase curta para o card.",
  description: "Texto completo para a página de detalhe.",
  benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
}
```

A página `/servicos/[slug]` é gerada automaticamente (`generateStaticParams`) — nenhuma rota precisa ser criada manualmente.

### Configurar o WhatsApp

```ts
// src/config/site.ts
contact: {
  whatsapp: "+5511998887766",
  whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços.",
}
```

O botão flutuante (`components/layout/WhatsAppButton.tsx`) e os CTAs do site inteiro usam esse valor.

### Configurar SEO

Edite `src/config/seo.ts` (título, descrição, keywords, imagem OG) e `siteConfig.url` em `site.ts` (usado em `metadataBase`, sitemap, robots e JSON-LD). `sitemap.xml` e `robots.txt` são gerados automaticamente a partir dos dados de `services.ts` — novos serviços entram no sitemap sem esforço extra.

### Adicionar/remover páginas

Páginas ficam em `src/app/*`. Para remover uma página (ex.: `/sobre`), apague a pasta correspondente e o link em `config/navigation.ts`. Para adicionar uma nova, crie `src/app/nova-pagina/page.tsx` reaproveitando as seções existentes em `components/sections`.

---

## 4. Estrutura de pastas

```text
src/
├── app/                  → rotas (App Router): home, sobre, servicos, servicos/[slug], contato
│   ├── layout.tsx        → layout raiz, metadata global, JSON-LD, ThemeStyleInjector
│   ├── globals.css       → tokens do design system (@theme inline)
│   ├── sitemap.ts        → sitemap.xml dinâmico
│   └── robots.ts         → robots.txt dinâmico
├── components/
│   ├── layout/           → Navbar, Footer, WhatsAppButton
│   ├── sections/         → blocos de página: Hero, Stats, About, ServicesGrid, Features,
│   │                        Process, Testimonials, Faq, Cta, ContactSection
│   ├── shared/            → ServiceCard, FeatureCard, TestimonialCard, FaqAccordionItem,
│   │                        ContactForm, Reveal (animação), SocialIcons, ThemeStyleInjector
│   └── ui/                → Button, Container, SectionHeader, Badge, Card, Input/Textarea
├── config/                → site.ts, theme.ts, navigation.ts, seo.ts  ← CAMADA DE CONFIGURAÇÃO
├── data/                  → services.ts, testimonials.ts, faq.ts, stats.ts,
│                             features.ts, process.ts                 ← CAMADA DE CONTEÚDO
├── lib/                   → utils.ts (cn, links de whatsapp/tel/mailto)
└── types/                 → index.ts (tipos compartilhados)
```

Fluxo de dados: **Conteúdo (`data/`) + Configuração (`config/`) → Componentes → Páginas.** Nada flui na direção contrária.

---

## 5. Arquitetura para múltiplos clientes (multi-tenant leve)

Para uma agência que vai vender este template várias vezes, a forma mais simples e robusta — sem a complexidade de multi-tenant real — é: **um repositório Git por cliente, criado a partir deste como template/branch base.**

```text
Cliente A → fork/branch do repositório base → edita config/ e data/ → deploy próprio
Cliente B → fork/branch do repositório base → edita config/ e data/ → deploy próprio
```

Por quê essa abordagem em vez de uma pasta `clients/empresa-a`, `clients/empresa-b` dentro do mesmo projeto?

- **Simplicidade real de manutenção**: cada cliente tem seu próprio deploy (Vercel/Netlify), domínio e ciclo de atualização, sem risco de um cliente quebrar o build de outro.
- **Sem overengineering**: uma estrutura de multi-tenant dentro de um único projeto (roteamento por domínio, seleção de config em runtime, etc.) adicionaria complexidade desnecessária para um site institucional estático — exatamente o que a seção 22 do briefing pede para evitar.
- **Correções de bug/melhorias no "motor"** (componentes, design system) podem ser propagadas fazendo merge do repositório base para os forks, mantendo cada cliente independente até que a agência decida atualizar.
- Se no futuro fizer sentido consolidar tudo em um monorepo (ex.: dezenas de clientes ativos), a mesma camada `config/` + `data/` já isolada facilmente vira `clients/empresa-a/config.ts` importado dinamicamente — a migração é apenas mover arquivos, não reescrever componentes.

Na prática, use este projeto como **template do GitHub** ("Use this template") e, a cada novo cliente, gere um novo repositório a partir dele.

---

## 6. Design system

Todos os tokens visuais (cor, radius, sombra) vivem como CSS custom properties em `app/globals.css`, expostas ao Tailwind via `@theme inline`, e podem ser sobrescritas em runtime por `config/theme.ts` através do componente `ThemeStyleInjector`. Isso significa:

- Nenhuma cor hexadecimal solta em componentes — sempre `bg-primary`, `text-ink-muted`, `border-border`, etc.
- Trocar a paleta inteira do site é uma edição em um único arquivo.
- Sombras (`shadow-soft`, `shadow-elevated`) e radius (`rounded-sm/md/lg`) seguem o mesmo padrão.

---

## 7. Formulário de contato

O componente `components/shared/ContactForm.tsx` já é funcional na interface (validação nativa, estados de carregando/sucesso/erro), mas o envio está **desacoplado** em uma única função (`submitContactForm`). Como o site é estático, não há backend embutido — conecte o provedor que preferir:

```ts
// Exemplo: Formspree
await fetch("https://formspree.io/f/SEU_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(data),
});
```

Também compatível com Resend, um webhook próprio, uma API serverless (Vercel Functions) ou um CRM — troque apenas o corpo dessa função.

---

## 8. O que foi deliberadamente deixado de fora

Por decisão de arquitetura (evitar overengineering em um site institucional estático):

- Sem Redux/estado global — o site não precisa.
- Sem banco de dados nem CMS — conteúdo vive em arquivos TypeScript tipados, versionados no Git.
- Sem autenticação.
- Sem backend próprio — a camada de envio de formulário é desacoplada e plugável (ver seção 7).

---

## 9. Performance, SEO e acessibilidade

- **100% estático** (`○ Static` / `● SSG` no build) — todas as páginas, incluindo as de serviço via `generateStaticParams`.
- Metadata completa (title/description/OG/Twitter Card/canonical), `sitemap.xml` e `robots.txt` gerados a partir da configuração, e JSON-LD de `Organization` no `<head>`.
- Animações via CSS + `IntersectionObserver` (sem biblioteca externa), respeitando `prefers-reduced-motion`.
- HTML semântico, skip-link para o conteúdo principal, `focus-visible` consistente, labels em todos os campos de formulário, `aria-expanded`/`aria-controls` no menu mobile e no FAQ.
- Fontes usam pilha de sistema por padrão (sem dependência de rede em build). Para tipografia customizada em produção, use `next/font/google` (ex. Manrope + Inter) em `app/layout.tsx` — recomendado ao publicar na Vercel, onde o acesso a fontes do Google funciona normalmente.

---

## 10. Deploy no GitHub Pages com domínio próprio

O projeto já está configurado para exportação 100% estática (`next.config.ts` com `output: "export"`), que é o formato que o GitHub Pages exige (ele só serve HTML/CSS/JS puro, sem servidor Node).

### 10.1 Deploy automático (recomendado)

Já existe um workflow pronto em `.github/workflows/deploy.yml`. Para ativar:

1. Suba o projeto para um repositório no GitHub (`git init`, `git add .`, `git commit`, `git push`).
2. No repositório, vá em **Settings → Pages → Build and deployment → Source** e selecione **"GitHub Actions"**.
3. A cada `push` na branch `main`, o workflow builda o projeto e publica automaticamente a pasta `out/` no GitHub Pages.
4. Acompanhe o progresso na aba **Actions** do repositório.

### 10.2 Conectar um domínio próprio

1. Edite o arquivo **`public/CNAME`** e coloque o domínio real, por exemplo:
   ```
   www.suaempresa.com.br
   ```
   Esse arquivo é copiado automaticamente para `out/CNAME` no build e é o que o GitHub Pages usa para saber qual domínio servir.

2. No seu provedor de DNS, crie os registros:
   - **Domínio raiz** (`suaempresa.com.br`): quatro registros `A` apontando para os IPs do GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **Subdomínio `www`**: um registro `CNAME` apontando para `SEU-USUARIO.github.io`.

3. No GitHub: **Settings → Pages → Custom domain**, digite o domínio e salve. Aguarde a verificação de DNS (pode levar algumas horas) e marque **"Enforce HTTPS"** assim que disponível.

4. Atualize também `siteConfig.url` em `src/config/site.ts` para o domínio final — ele é usado no `sitemap.xml`, `robots.txt`, Open Graph e JSON-LD.

### 10.3 Deploy manual (alternativa sem Actions)

```bash
npm run build          # gera a pasta out/
npx gh-pages -d out    # publica out/ na branch gh-pages (requer: npm i -D gh-pages)
```

Depois, em **Settings → Pages**, selecione a branch `gh-pages` como fonte.

### 10.4 Observações importantes do modo estático

- `trailingSlash: true` já está ativo no `next.config.ts` — necessário para as rotas funcionarem corretamente em hospedagem estática (`/sobre/` em vez de `/sobre`).
- O formulário de contato continua funcional na interface, mas o envio real depende de conectar um provedor externo (Formspree, Resend, etc. — ver seção 7), já que o GitHub Pages não executa backend.
- Se este for um **Project Page** (`usuario.github.io/nome-do-repo`) em vez de domínio próprio, normalmente não é necessário `basePath`/`assetPrefix` quando o `CNAME` aponta para um domínio próprio na raiz; caso publique sem domínio próprio em um Project Page, adicione `basePath: "/nome-do-repo"` no `next.config.ts`.

---

## 11. Checklist rápido para um novo cliente

1. `src/config/site.ts` → nome, contato, endereço, WhatsApp, CTAs.
2. `src/config/theme.ts` → paleta de cores.
3. `src/config/seo.ts` + `siteConfig.url` → metadados e domínio real.
4. `src/data/*.ts` → serviços, depoimentos, FAQ, números, diferenciais, processo.
5. Substituir favicon (`src/app/favicon.ico`) e, se houver, logo em imagem.
6. Conectar o provedor de envio do formulário (seção 7).
7. `npm run build` e revisar visualmente antes do deploy.
