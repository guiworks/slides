---
name: novo-deck
description: Gera uma apresentação Slidev completa (decks/<slug>.md) a partir de um tema, contexto, tópicos, documento, card do Jira ou anotações, no visual escuro com glow e ícones Iconify deste kit, e valida exportando para PNG. Use quando o usuário disser "/novo-deck", "cria uma apresentação/slides/deck sobre X", "monta uns slides pra reunião de Y" ou pedir para revisar ou estender um deck existente em decks/.
---

# Gerar deck a partir de contexto

O kit fica neste repositório. Leia `decks/guia-do-kit.md` antes de escrever: ele é o catálogo vivo dos padrões (capa, agenda com Timeline, seção, grade de Cards, KPIs com Stat, antes/depois, logos, statement, próximos passos com Pill, encerramento).

## 1. Entender o pedido (perguntar só o que falta)

Extraia do pedido: **objetivo** (informar, convencer, pedir decisão), **público** (diretoria, time técnico, cliente), **duração ou nº de slides**, **tópicos/dados** e **cor da marca**. Se faltar objetivo ou público e isso mudar o deck, faça no máximo 3 perguntas objetivas em uma única mensagem. O resto decida sozinho:
- Padrão: 8 a 12 slides, PT-BR, tom corporativo direto.
- Uma ideia por slide; título afirmativo ("Lead time caiu 40%"), não genérico ("Resultados").
- Nunca invente números como se fossem reais. Sem dados, use placeholders evidentes (`R$ X`, `NN%`) e avise o usuário no fim.

## 2. Roteiro

Monte a narrativa antes do markdown. Padrão para apresentação corporativa:
capa → agenda → contexto → problema/oportunidade → proposta → impacto (KPIs) → plano/próximos passos → encerramento.
Para decks maiores, use `layout: section` entre os blocos.

## 3. Criar e escrever

```bash
npm run new -- <slug> "<Título>"
```
O slug segue `AAAA-MM-tema-curto` (ex.: `2026-11-resultados-q3`). Depois substitua o conteúdo de `decks/<slug>.md`.

Regras de escrita:
- **Cabeçalho**: mantenha o do modelo.
- **Identidade visual / marca**: preencha no cabeçalho
  ```yaml
  glowColors: ['#primaria', '#secundaria', '#destaque']   # fundo glow
  brand:
    accent: '#hex'                       # cor de text-brand (ícones padrão de Card/Stat/Timeline)
    gradient: ['#claro', '#medio', '#primaria']   # .gradient-text dos títulos
  ```
  Use `text-brand` para acentos da marca e troque acentos frios (sky/violet/cyan) por tons da paleta. Mantenha verde, vermelho e âmbar para bom, ruim e risco. Referência pronta: a paleta inspirada no Itaú em `decks/2026-11-migracao-seguro-auto.md`.
- **Glow por slide**: varie `glow:` (`full`, `top`, `bottom`, `left`, `right`, `center`, `top-left`...) entre slides vizinhos para dar movimento. `glowHue:` gira o matiz de todo o glow: com o azul padrão, valores entre 20 e 60 dão roxo; com paleta de marca, não use (desvirtua as cores).
- **Ícones**: só use coleções instaladas (`carbon`, `ph`, `tabler`, `ri`, `logos`, `simple-icons`, `devicon`, `fluent-emoji-flat`, `svg-spinners`). Prefira `carbon` para ícones de interface e `logos` para marcas coloridas. Ache nomes com `npm run icons -- <termo> [coleção]`. Nunca chute nomes.
- **Logos monocromáticos** (GitHub, Apple, Vercel, Notion...) ficam pretos em `logos`: use `i-simple-icons:<marca> text-white`.
- **Atributos utilitários (attributify)** como `<div flex gap-2>` são bem-vindos, mas utilitários com `/` ou `[...]` (`bg-white/10`, `border-rose-400/50`) quebram o compilador Vue com "Illegal '/' in tags". Esses vão em `class="..."`.
- **Classes completas e literais** (`text-emerald-300`, `i-carbon:chart-line`). O UnoCSS só gera a classe que aparece escrita no arquivo, então nada de montar classes com interpolação.
- **Componentes** (em `decks/components/`):
  - `<Card icon color title>` + conteúdo markdown (deixe linha em branco entre a tag e a lista)
  - `<Stat value label icon color trend :good="true">`: `trend` começando com `-` fica vermelho, a menos que `:good="true"`
  - `<Timeline :items="[{ icon, title, desc, color }]">` com 3 a 6 itens
  - `<Pill icon color>texto</Pill>`
  - `<RangeBars unit="h" :items="[{ label, min, max, text, color: 'bg-sky-400' }]">` para estimativas em faixa (mínimo–máximo)
  - classes `glass`, `glass-header`, `muted`, `gradient-text`
- **Revelação**: envolva grades de cards e listas em `<v-clicks>` ou use `v-click`, no máximo 4 cliques por slide.
- **Densidade**: no máximo 6 bullets curtos por slide; texto longo vai em notas do apresentador (`<!-- ... -->` no fim do slide).
- **Layouts do tema default**: `cover`, `center`, `section`, `two-cols` (com `::right::` e `layoutClass: gap-10`), `statement`, `fact`, `quote`, `image-right` (`image: /<slug>/foto.png`), `end`.
- **Imagens** do usuário vão em `decks/public/<slug>/` e são referenciadas como `/<slug>/arquivo.png`.

## 4. Validar (obrigatório)

```bash
npm run check -- <slug>
npm run png -- <slug>
```
Abra **todas** as imagens de `exports/<slug>-png/` com Read e procure texto cortado ou quebrado, elementos sobrepostos, ícones faltando ou ilegíveis no fundo escuro e slides vazios demais ou lotados. Corrija e reexporte só os slides afetados (`npm run png -- <slug> --range 3,5`) até ficar limpo.

## 5. Entregar

Diga ao usuário:
- caminho do deck e quantos slides tem;
- os comandos que ele vai usar: `npm run dev -- <slug>` (apresentar com notas e atalhos), `npm run pdf -- <slug>`, `npm run pptx -- <slug>`;
- quais números ou trechos são placeholders a preencher.

O PPTX exportado pelo Slidev é feito de imagens. Ele serve para enviar ou apresentar, mas não para editar no PowerPoint.
