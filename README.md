# PONTO DE VISTA — Intensivo Vestibulares 2026

Portal de estudos do **Prof. Luis**, com o **Professor Paco** como co-guia.
Geografia Essencial · Geopolítica & Atualidades · Política & Cidadania.

> “Entender o mundo para conquistar a prova e participar da realidade.”

Next.js (App Router) · TypeScript · Tailwind CSS · Lucide Icons · pronto para a Vercel.

---

## 1. Rodar o projeto no seu computador

Pré-requisito: **Node.js 18.18 ou superior** (recomendado: Node 20 ou 22).
Confira com `node -v`.

```bash
# 1. instalar as dependências (só na primeira vez)
npm install

# 2. iniciar o servidor de desenvolvimento
npm run dev
```

Abra **http://localhost:3000**.
O site recarrega sozinho a cada arquivo salvo.

Outros comandos:

```bash
npm run lint       # verifica problemas de código
npm run typecheck  # verifica erros de TypeScript
npm run build      # gera a versão de produção
npm start          # roda a versão de produção localmente
```

---

## 2. Arquitetura em cinco minutos

A regra central do projeto: **componentes não guardam texto pedagógico**.
Todo o conteúdo mora em `src/data/`. Para mudar o curso, você edita dados —
nunca componentes.

| Camada | Onde fica | Para quê |
|---|---|---|
| Conteúdo | `src/data/` | semanas, aulas, pilares, método, FAQ, raio-x |
| Tipos | `src/lib/types.ts` | o formato de cada dado |
| Progresso | `src/lib/progress.ts` + `src/hooks/useProgress.ts` | localStorage e cálculos |
| Componentes | `src/components/` | como cada bloco aparece |
| Páginas | `src/app/` | rotas do site |
| Imagens e PDFs | `public/assets/` | arquivos que você envia |

### Preparado para o futuro (mas ainda não implementado)

`src/lib/progress.ts` é a **única** parte do sistema que fala com o
localStorage. Quando quiser sincronizar o progresso entre dispositivos com
Supabase, autenticação individual, banco de dados ou pagamentos, basta trocar
as funções `readProgress` / `writeProgress` por chamadas ao servidor — o resto
do site continua igual.

A barreira de acesso por código (`src/middleware.ts`) foi feita para ser
removida em um minuto quando existir login individual.

---

## 3. Árvore principal de arquivos

```
ponto-de-vista/
├── public/
│   ├── robots.txt
│   └── assets/
│       ├── paco/        ← artes do Professor Paco (LEIA-ME.txt dentro)
│       ├── aulas/       ← imagens das aulas
│       ├── equipe/      ← foto do Prof. Luis
│       ├── mapas/       ← PDFs dos Mapas da Semana
│       ├── materiais/   ← PDFs e listas de apoio
│       └── og/          ← imagem de compartilhamento
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← estrutura, fontes, SEO
│   │   ├── page.tsx                   ← INÍCIO
│   │   ├── globals.css                ← estilos base e texturas
│   │   ├── icon.svg                   ← favicon
│   │   ├── not-found.tsx              ← página 404
│   │   ├── comece-aqui/page.tsx
│   │   ├── trilha/page.tsx
│   │   ├── central/
│   │   │   ├── page.tsx
│   │   │   ├── mapas-da-semana/page.tsx
│   │   │   ├── checkpoints/page.tsx
│   │   │   ├── raio-x/page.tsx
│   │   │   └── materiais/page.tsx
│   │   ├── comunidade/page.tsx
│   │   ├── ajuda/page.tsx
│   │   ├── aulas/[semana]/[aula]/page.tsx   ← template de TODAS as aulas
│   │   ├── acesso/                    ← tela do código da turma
│   │   └── api/acesso/route.ts        ← validação do código (servidor)
│   ├── components/
│   │   ├── brand/Logo.tsx
│   │   ├── layout/    Header · Footer · PageHeader · ContinuarEstudando
│   │   ├── home/      Hero · PillarCards · MetodoPonto
│   │   ├── trilha/    WeeklyTrail · WeekCard · LessonCard · CheckpointCard
│   │   ├── aula/      LessonHeader · MissionBlock · PacoInsight · ConceptLens
│   │   │              LookAgain · VideoLesson · ConceptAccordion
│   │   │              VestibularQuestion · LessonCompletion · PreviousNextLesson
│   │   ├── central/   StudyResourceCard · CheckpointsList
│   │   ├── progress/  CourseProgress · RedefinirProgresso
│   │   └── ui/        Container · SectionHeading · ProgressBar · QuoteBlock
│   │                  Accordion · Badge · AssetImage · PacoImage
│   │                  EmPreparacao · Reveal · ActionLink
│   ├── data/
│   │   ├── course.ts                  ← ★ SEMANAS E AULAS (edite aqui)
│   │   ├── lessons/semana-01-aula-01.ts  ← ★ CONTEÚDO DA AULA 01
│   │   ├── site.ts                    ← nome, frases, menu, imagens
│   │   ├── pillars.ts                 ← os três pilares
│   │   ├── metodo.ts                  ← método P.O.N.T.O.
│   │   ├── comece-aqui.ts             ← textos da página Comece Aqui
│   │   ├── faq.ts                     ← perguntas da página Ajuda
│   │   └── raio-x.ts                  ← metodologia e provas
│   ├── hooks/useProgress.ts
│   ├── lib/    types.ts · progress.ts · youtube.ts · acesso.ts
│   └── middleware.ts                  ← barreira de acesso (opcional)
├── .env.example
├── tailwind.config.ts
└── package.json
```

---

## 4. Como alterar as aulas

Tudo acontece em **`src/data/course.ts`**.

### 4.1 Mudar o título de uma semana

```ts
const semana02: Week = makeWeek({
  number: 2,
  title: "MAPAS, PODER E DEMOCRACIA",   // ← edite aqui
  description: "Uma frase que resume a semana.",
  ...
});
```

### 4.2 Publicar uma aula que está “em preparação”

Troque a linha `makeLesson({ weekNumber: 1, number: 2, pillar: "geopolitica" })`
por uma versão completa:

```ts
makeLesson({
  weekNumber: 1,
  number: 2,
  pillar: "geopolitica",
  title: "TÍTULO DA AULA",
  subtitle: "Frase curta que resume a aula.",
  description: "Uma segunda frase, opcional.",
  videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  status: "publicada",        // ← sem isto, a aula continua em preparação
  content: aula02Content,     // ← o conteúdo (veja 4.3)
}),
```

> ⚠️ **Nunca mude o `id` de uma aula já publicada.** O `id` é a chave usada
> para guardar o progresso do aluno. Mudar o `id` faz o aluno “perder” a aula
> como concluída.

### 4.3 Criar o conteúdo de uma nova aula

1. Copie `src/data/lessons/semana-01-aula-01.ts` para, por exemplo,
   `src/data/lessons/semana-01-aula-02.ts`.
2. Renomeie a constante exportada (`aula01Content` → `aula02Content`).
3. Reescreva os textos.
4. Importe no topo de `src/data/course.ts` e use no campo `content`.

Cada bloco é **opcional**: se você apagar `observation`, `lenses`, `lookAgain`,
`video`, `concepts` ou `question`, aquela seção simplesmente não aparece — o
layout continua correto. Apenas `mission` e `missionCheck` são obrigatórios.

Campos com valor `null` aparecem no site como **“Conteúdo em preparação”**.

### 4.4 Cadastrar as semanas 04 a 10

Em `src/data/course.ts`, no bloco `semanasFuturas`, substitua a semana desejada
por uma declaração própria:

```ts
const semana04: Week = makeWeek({
  number: 4,
  title: "TÍTULO DA SEMANA 04",
  lessons: makeDefaultLessons(4),   // cria as 3 aulas (seg/qua/sex)
  checkpoint: makeCheckpoint(4),
});
```

…e inclua `semana04` no array `course`, na ordem certa.

### 4.5 Trocar a questão de vestibular

Em `src/data/lessons/semana-01-aula-01.ts`, bloco `question`:
troque `statement`, `options`, `correctOptionId`, `explanation` e
`optionFeedback`, e **apague a linha `isPlaceholder: true`** — ela é o que
mostra o aviso laranja “Questão de demonstração” na página.

---

## 5. Como substituir as imagens

Nenhuma imagem é obrigatória: enquanto o arquivo não existir, o site mostra um
placeholder elegante no lugar exato, **sem quebrar o layout**.

| Onde aparece | Arquivo a enviar |
|---|---|
| Home, Comece Aqui | `public/assets/paco/paco-explorador.png` |
| “O olhar do Paco”, página 404 | `public/assets/paco/paco-lupa.png` |
| Comunidade | `public/assets/paco/paco-estudando.png` |
| Celebração ao concluir aula, Checkpoints | `public/assets/paco/paco-checkpoint.png` |
| Home (final) e Trilha | `public/assets/paco/paco-trilha.png` |
| Hero da home | `public/assets/equipe/prof-luis.jpg` (proporção 4:5) |
| Aula 01 — observação | `public/assets/aulas/aula01-olhar-paco.jpg` (16:9) |
| Aula 01 — cinco lentes | `public/assets/aulas/cinco-lentes.jpg` (16:9) |
| Compartilhamento (WhatsApp, redes) | `public/assets/og/og-ponto-de-vista.png` (1200×630) |

Basta copiar o arquivo para a pasta com **exatamente esse nome** e recarregar a
página. Não é preciso mexer no código.

Para usar outro nome ou outro caminho:
- imagens do Paco → `src/components/ui/PacoImage.tsx`
- foto do Prof. Luis → `src/data/site.ts` (`brandImages`)
- imagens das aulas → o arquivo da aula em `src/data/lessons/`

Cada pasta em `public/assets/` tem um `LEIA-ME.txt` com essas instruções.

---

## 6. Como inserir os vídeos do YouTube

Em `src/data/course.ts`, preencha o campo `videoUrl` da aula:

```ts
videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
```

São aceitos todos estes formatos:

- `https://www.youtube.com/watch?v=ID`
- `https://youtu.be/ID`
- `https://www.youtube.com/embed/ID`
- `https://www.youtube.com/shorts/ID`
- apenas o `ID` do vídeo

O player já vem com proporção 16:9, sem autoplay, e usa o domínio
`youtube-nocookie.com`. Com `videoUrl: null`, aparece o aviso
“Videoaula em preparação” no mesmo espaço — o layout não muda quando o vídeo
for publicado.

---

## 7. Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha o que for usar.
**Todas são opcionais.**

| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | endereço público do site (metadados / Open Graph) |
| `NEXT_PUBLIC_COMMUNITY_URL` | link do grupo da turma; vazio → “Link disponível em breve” |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | e-mail exibido em Ajuda, Comunidade e rodapé |
| `COURSE_ACCESS_CODE` | código de acesso da turma; vazio → site sem barreira |

### Sobre o código de acesso

Quando `COURSE_ACCESS_CODE` está preenchida, qualquer visitante é enviado para
`/acesso` e precisa digitar o código. A conferência acontece **no servidor**
(`src/app/api/acesso/route.ts`); o navegador recebe apenas um cookie `httpOnly`
com o hash do código — o código em si **nunca** vai para o JavaScript do site.

É uma barreira compartilhada de turma, não uma autenticação individual: quem
tiver o código entra. Para remover a barreira no futuro (quando houver login por
aluno), apague `src/middleware.ts`, a pasta `src/app/acesso/` e
`src/app/api/acesso/`.

---

## 8. Deploy na Vercel

1. Coloque o projeto num repositório no GitHub (ou GitLab/Bitbucket).
2. Acesse **vercel.com** → **Add New… → Project** → importe o repositório.
3. A Vercel detecta Next.js sozinha. **Não altere** Build Command nem Output
   Directory.
4. Em **Environment Variables**, adicione as variáveis da seção 7 que você for
   usar (no mínimo `NEXT_PUBLIC_SITE_URL`). Marque-as para *Production*,
   *Preview* e *Development*.
5. Clique em **Deploy**.
6. Depois, em **Settings → Domains**, ligue o seu domínio próprio, se houver.

A cada `git push` na branch principal a Vercel publica automaticamente.
Se você alterar uma variável de ambiente, é preciso **redeploy** para ela valer.

---

## 9. Placeholders que ainda precisam ser substituídos

### Imagens (o site funciona sem elas, com placeholder no lugar)

- [ ] `public/assets/paco/paco-explorador.png`
- [ ] `public/assets/paco/paco-lupa.png`
- [ ] `public/assets/paco/paco-estudando.png`
- [ ] `public/assets/paco/paco-checkpoint.png`
- [ ] `public/assets/paco/paco-trilha.png`
- [ ] `public/assets/equipe/prof-luis.jpg`
- [ ] `public/assets/aulas/aula01-olhar-paco.jpg`
- [ ] `public/assets/aulas/cinco-lentes.jpg`
- [ ] `public/assets/og/og-ponto-de-vista.png`
- [ ] `src/app/icon.svg` — favicon provisório (marca em SVG); troque se tiver a arte oficial

### Conteúdo pedagógico a escrever

- [ ] **Questão da Aula 01** — `src/data/lessons/semana-01-aula-01.ts`, bloco
      `question`. É uma questão de demonstração, marcada com aviso visível.
- [ ] **“Dê precisão ao seu olhar”** — para cada uma das cinco lentes faltam
      `penseAssim`, `exemplo`, `naoConfunda` e `naProva` (mesmo arquivo).
- [ ] **Aulas 02 e 03 da Semana 01** — só a estrutura existe.
- [ ] **Semanas 02 e 03** — títulos definidos, aulas ainda em preparação.
- [ ] **Semanas 04 a 10** — estrutura pronta, sem título nem aulas.
- [ ] **Checkpoints 01 a 03** — cards prontos; falta o questionário e preencher
      `href` em `makeCheckpoint` (`src/data/course.ts`).
- [ ] **Raio-X: CONCEITO / PISTA / ARMADILHA / TRANSFERÊNCIA** — faltam as
      descrições em `src/data/raio-x.ts`.
- [ ] **Mapas da Semana** — faltam os PDFs e os campos `pdfHref` / `previewSrc`.

### Textos gerados a partir do seu briefing (revise com a sua voz)

- [ ] Parágrafos de abertura de **Comece Aqui** — `src/data/comece-aqui.ts`
- [ ] Respostas do **FAQ** — `src/data/faq.ts` (descrevem o funcionamento real
      do portal; a resposta sobre o prazo de acesso já traz **15 de janeiro de
      2027**)
- [ ] Texto da página **Comunidade** — `src/app/comunidade/page.tsx`

### Configuração

- [ ] `.env.local` com `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_COMMUNITY_URL`,
      `NEXT_PUBLIC_SUPPORT_EMAIL` e (se quiser) `COURSE_ACCESS_CODE`

---

## 10. Decisões técnicas que vale conhecer

- **Imagens com `<img>` e fallback próprio.** O componente `AssetImage` desenha
  o placeholder **atrás** da imagem e reserva o espaço pela proporção. Se o
  arquivo não existir, é o placeholder que aparece; quando existir, a imagem o
  cobre com um fade. Nada “pula” na tela e nada some. Por isso não usamos
  `next/image` — que exige o arquivo presente. Quando todas as imagens
  estiverem no lugar, dá para migrar sem mexer nas páginas.
- **Animações de entrada à prova de falhas.** O componente `Reveal` nasce
  visível no HTML (funciona sem JavaScript) e só esconde blocos abaixo da
  dobra para animá-los na rolagem — com uma trava de 2,5 s que revela tudo caso
  algo falhe.
- **Accordions com `<details>/`<summary>`.** Funcionam sem JavaScript, são
  navegáveis por teclado e anunciados corretamente por leitores de tela.
- **Status nunca depende só de cor.** Concluída, Em andamento e Em preparação
  sempre aparecem escritos, com ícone próprio.
- **`prefers-reduced-motion`** é respeitado: quem pede menos movimento no
  sistema recebe a página sem animações.
- **Progresso resistente a falhas.** Se o `localStorage` estiver bloqueado
  (janela anônima, armazenamento cheio), o site continua funcionando — apenas
  não guarda o progresso.
- **Fontes** Lora (títulos) e Inter (texto), carregadas via `next/font`, que as
  hospeda junto com o site.

---

© 2026 Ponto de Vista. Todos os direitos reservados.
