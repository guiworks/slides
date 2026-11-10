# slides

Kit para gerar apresentações bonitas com [Slidev](https://sli.dev) + ícones [Iconify](https://icones.js.org), inspirado em [BaizeAI/talks](https://github.com/BaizeAI/talks): fundo escuro com glow animado, cards de vidro, revelação por clique.

## Gerar um deck com o Claude Code

Abra o Claude Code nesta pasta e peça:

```
/novo-deck apresentação de 10 min para a diretoria sobre <tema>. Contexto: <cole notas, dados, card do Jira...>
```

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run list` | lista os decks |
| `npm run new -- <slug> "Título"` | cria `decks/<slug>.md` a partir do modelo |
| `npm run dev -- <slug>` | abre no navegador para apresentar (modo apresentador em `/presenter`) |
| `npm run pdf -- <slug>` | exporta `exports/<slug>.pdf` |
| `npm run pptx -- <slug>` | exporta `exports/<slug>.pptx` (slides como imagem) |
| `npm run png -- <slug>` | exporta um PNG por slide em `exports/<slug>-png/` |
| `npm run build -- <slug>` | gera site estático em `dist/<slug>/` |
| `npm run icons -- <termo> [coleção]` | busca ícones instalados |
| `npm run check -- <slug>` | valida se todos os ícones do deck existem |

Argumentos extras são repassados ao Slidev, por exemplo: `npm run pdf -- <slug> --with-clicks`.

## Estrutura

```
decks/
  *.md               apresentações (uma por arquivo)
  _modelo.md         esqueleto usado por `npm run new`
  guia-do-kit.md     catálogo de todos os padrões visuais
  components/        Card, Stat, Timeline, Pill
  global-bottom.vue  fundo glow (frontmatter: glow, glowHue, glowSeed, glowOpacity, glowColors)
  style.css          transições e estilos globais
  uno.config.ts      atalhos glass/muted e ícones
  public/<slug>/     imagens de cada deck
scripts/             CLI dos comandos acima
```

## Primeira vez

```bash
npm install
npm run setup   # baixa o Chromium usado na exportação
```
