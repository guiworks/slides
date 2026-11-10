# Kit de slides (Slidev)

Apresentações em `decks/*.md`. Componentes, glow (`global-bottom.vue`), estilos e config do UnoCSS em `decks/` valem para todos os decks.

- Para criar ou alterar uma apresentação a partir de contexto, use a skill `/novo-deck` (`.claude/skills/novo-deck/SKILL.md`).
- `decks/guia-do-kit.md` é o catálogo de padrões; mantenha-o atualizado ao criar um componente novo.
- `decks/_modelo.md` é o esqueleto usado por `npm run new`.
- Slidev está fixado em 52.x porque a máquina usa Node 20 (o 53 exige Node 22.18+).
- Valide sempre com `npm run check -- <slug>` e `npm run png -- <slug>`, olhando as imagens geradas.
