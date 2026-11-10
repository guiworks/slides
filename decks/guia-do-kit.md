---
theme: default
title: Guia do kit de slides
exportFilename: guia-do-kit
colorSchema: dark
transition: fade-out
mdc: true
routerMode: hash
lineNumbers: false
drawings:
  persist: false
fonts:
  sans: Inter
  mono: JetBrains Mono
glowSeed: guia
layout: cover
---

# Apresentações que <span class="gradient-text">contam história</span>

Catálogo de padrões do kit: Slidev + Iconify + glow

<div abs-bl m-10 text-sm opacity-60 flex items-center gap-4>
  <span flex items-center gap-2><div i-carbon:user-avatar /> Seu nome · Área</span>
  <span flex items-center gap-2><div i-carbon:calendar /> 2026-11-10</span>
</div>

<!--
Notas do apresentador ficam em comentários HTML no fim de cada slide.
-->

---
layout: center
glow: left
---

# Agenda

<div mt-8 />

<Timeline :items="[
  { icon: 'i-carbon:search', title: 'Contexto', desc: 'Onde estamos hoje' },
  { icon: 'i-carbon:warning-alt', title: 'Problema', desc: 'O que trava o time', color: 'text-amber-300' },
  { icon: 'i-carbon:idea', title: 'Proposta', desc: 'O que vamos fazer', color: 'text-violet-300' },
  { icon: 'i-carbon:chart-line', title: 'Impacto', desc: 'Números esperados', color: 'text-emerald-300' },
  { icon: 'i-carbon:task', title: 'Próximos passos', desc: 'Donos e prazos' },
]" />

---
layout: section
glow: center
glowHue: 40
---

<div flex justify-center mb-6><div i-carbon:search text-6xl text-sky-300 /></div>

# Contexto

Slides de seção separam os blocos da narrativa

---
class: py-10
glow: top
---

# Três desafios do trimestre

<span muted>Cards em grade, revelados um a um com clique</span>

<div grid grid-cols-3 gap-4 mt-8 h-64>
<v-clicks>

<Card icon="i-carbon:warning-alt" color="text-amber-300" title="Retrabalho">

- 30% dos tickets reabertos
- Critérios de aceite vagos

</Card>

<Card icon="i-carbon:time" color="text-sky-300" title="Lead time">

- 18 dias da ideia ao deploy
- Fila longa de code review

</Card>

<Card icon="i-carbon:user-multiple" color="text-violet-300" title="Onboarding">

- 6 semanas até o 1º PR
- Documentação desatualizada

</Card>

</v-clicks>
</div>

---
class: py-10
glow: bottom
---

# Indicadores

<span muted>KPIs com variação; use <code>:good="true"</code> quando queda é boa</span>

<div grid grid-cols-4 gap-4 mt-10>
  <Stat value="R$ 1,2 mi" label="Receita" icon="i-carbon:currency-dollar" color="text-emerald-300" trend="+18% vs Q2" />
  <Stat value="94%" label="SLA atendido" icon="i-carbon:checkmark-outline" trend="+3 p.p." />
  <Stat value="R$ 210 mil" label="Custo cloud" icon="i-carbon:cloud" color="text-sky-300" trend="-12%" :good="true" />
  <Stat value="4,1" label="NPS interno" icon="i-carbon:face-satisfied" color="text-amber-300" trend="-0,3" />
</div>

<div mt-8 text-sm muted flex items-center gap-2>
  <div i-carbon:information /> Os números deste slide são ilustrativos.
</div>

---
layout: two-cols
layoutClass: gap-10 py-10
glow: right
---

# Antes

<div v-click flex flex-col gap-3 mt-6>
  <div flex items-center gap-3><div i-carbon:close-outline text-rose-400 text-xl /> Deploy manual às sextas</div>
  <div flex items-center gap-3><div i-carbon:close-outline text-rose-400 text-xl /> Planilhas soltas por time</div>
  <div flex items-center gap-3><div i-carbon:close-outline text-rose-400 text-xl /> Incidentes descobertos pelo cliente</div>
</div>

::right::

# Depois

<div v-click flex flex-col gap-3 mt-6>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Pipeline com deploy diário</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Painel único de métricas</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Alertas antes do impacto</div>
</div>

---
layout: center
class: text-center
glow: full
---

<div flex items-center justify-center gap-10>
  <div flex flex-col items-center gap-2><div i-logos:jira text-6xl /><span text-sm muted>Jira</span></div>
  <div i-carbon:arrow-right text-3xl opacity-50 />
  <div flex flex-col items-center gap-2><div i-simple-icons:github text-6xl text-white /><span text-sm muted>GitHub</span></div>
  <div i-carbon:arrow-right text-3xl opacity-50 />
  <div flex flex-col items-center gap-2><div i-logos:kubernetes text-6xl /><span text-sm muted>Kubernetes</span></div>
  <div i-carbon:arrow-right text-3xl opacity-50 />
  <div flex flex-col items-center gap-2><div i-logos:grafana text-6xl /><span text-sm muted>Grafana</span></div>
</div>

<div mt-10 text-xl>Logos de produtos vêm da coleção <code>logos</code></div>

---
layout: statement
glow: center
glowHue: 40
---

# "Menos slides, <span class="gradient-text">mais decisões</span>."

<span muted>Use statement para a mensagem-chave</span>

---
class: py-10
---

# Próximos passos

<div mt-8 flex flex-col gap-3>
<v-clicks>

<div glass px-5 py-3 flex items-center gap-4>
  <div i-carbon:task text-sky-300 text-2xl />
  <div flex-1><b>Padronizar critérios de aceite</b><div text-sm muted>Template no Jira para todas as squads</div></div>
  <Pill icon="i-carbon:user">PO</Pill><Pill icon="i-carbon:calendar">Dez/26</Pill>
</div>

<div glass px-5 py-3 flex items-center gap-4>
  <div i-carbon:deploy text-violet-300 text-2xl />
  <div flex-1><b>Deploy contínuo no front</b><div text-sm muted>Pipeline com aprovação automática</div></div>
  <Pill icon="i-carbon:user">Tech lead</Pill><Pill icon="i-carbon:calendar">Jan/27</Pill>
</div>

<div glass px-5 py-3 flex items-center gap-4>
  <div i-carbon:education text-emerald-300 text-2xl />
  <div flex-1><b>Trilha de onboarding</b><div text-sm muted>Primeiro PR na semana 1</div></div>
  <Pill icon="i-carbon:user">Gestão</Pill><Pill icon="i-carbon:calendar">Fev/27</Pill>
</div>

</v-clicks>
</div>

---
layout: end
glow: center
---

# Obrigado <div i-fluent-emoji-flat:waving-hand inline-block />

<div text-base muted mt-4>Perguntas?</div>
