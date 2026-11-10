---
theme: default
title: Migração da Jornada de Seguro Auto Mobile
exportFilename: 2026-11-migracao-seguro-auto
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
glowSeed: seguro-auto
# Paleta inspirada na identidade Itaú (laranja + azul-marinho + amarelo)
glowColors: ['#EC7000', '#1F3C88', '#FFB000']
brand:
  accent: '#FF9A3C'
  gradient: ['#FFC24D', '#FF9A3C', '#EC7000']
layout: cover
---

<div flex items-center gap-3 mb-6 text-2xl>
  <div i-logos:angular-icon />
  <div i-carbon:arrow-right opacity-50 text-lg />
  <div i-logos:react />
  <div i-simple-icons:nextdotjs text-white />
</div>

# Migração da Jornada de <span class="gradient-text">Seguro Auto Mobile</span>

Angular + iDS v1 → React / Next.js + iDS v2, com acelerador corporativo assistido por IA

<div abs-bl m-10 text-sm opacity-60 flex items-center gap-4>
  <span flex items-center gap-2><div i-carbon:application-mobile /> SuperApp · Jornada de contratação</span>
  <span flex items-center gap-2><div i-carbon:calendar /> Novembro 2026</span>
</div>

---
class: py-10
glow: top
---

# Resumo executivo

<span muted>Mesma jornada, nova tecnologia. O esforço está na validação, não na conversão.</span>

<div grid grid-cols-4 gap-4 mt-8>
  <Stat value="~15 min" label="Conversão via IA" icon="i-carbon:ai-generate" color="text-yellow-300" note="observado no piloto" />
  <Stat value="~40 h" label="Esforço esperado" icon="i-carbon:time" note="faixa de 24 a 70 h" />
  <Stat value="R$ 0" label="Custo direto" icon="i-carbon:currency" color="text-emerald-300" />
  <Stat value="0" label="Mudanças em APIs" icon="i-carbon:api" color="text-amber-300" note="backend e integrações intactos" />
</div>

<div mt-10 grid grid-cols-3 gap-4 text-sm>
  <div flex items-start gap-3><div i-carbon:checkmark-outline text-emerald-400 text-lg shrink-0 mt-0.5 /> Aderência ao mandato tecnológico do SuperApp</div>
  <div flex items-start gap-3><div i-carbon:checkmark-outline text-emerald-400 text-lg shrink-0 mt-0.5 /> Regras de negócio e integrações preservadas</div>
  <div flex items-start gap-3><div i-carbon:checkmark-outline text-emerald-400 text-lg shrink-0 mt-0.5 /> Esforço da squad em testes e homologação</div>
</div>

<!--
O tempo de 15 minutos foi observado no piloto corporativo (análise + iDS + conversão).
-->

---
layout: center
glow: left
---

# Agenda

<div mt-8 />

<Timeline :items="[
  { icon: 'i-carbon:application-mobile', title: 'O quê', desc: 'Escopo e jornada' },
  { icon: 'i-carbon:layers', title: 'AS IS → TO BE', desc: 'Arquitetura e stack', color: 'text-yellow-300' },
  { icon: 'i-carbon:flow', title: 'Estratégia', desc: '3 fases + parametrização' },
  { icon: 'i-carbon:ai-generate', title: 'Uso de IA', desc: 'Fluxo e governança', color: 'text-yellow-300' },
  { icon: 'i-carbon:test-tool', title: 'Validação', desc: 'Paridade funcional', color: 'text-emerald-300' },
  { icon: 'i-carbon:chart-bar', title: 'Estimativa', desc: 'Esforço, riscos e custos', color: 'text-amber-300' },
]" />

---
class: py-10
glow: right
---

# O que vamos migrar

<span muted>Jornada completa de contratação de Seguro Auto no SuperApp Mobile</span>

<div grid grid-cols-3 gap-4 mt-8>
<v-clicks>

<Card icon="i-carbon:application-mobile" title="Jornada completa">
Contratação de Seguro Auto Mobile, de ponta a ponta.
</Card>

<Card icon="i-carbon:migrate" color="text-yellow-300" title="Angular → React/Next.js">
Evolução tecnológica alinhada ao mandato do SuperApp.
</Card>

<Card icon="i-carbon:color-palette" color="text-orange-300" title="iDS v1 → iDS v2">
Design System corporativo atualizado.
</Card>

<Card icon="i-carbon:rule" color="text-emerald-300" title="Regras de negócio">
Preservadas integralmente.
</Card>

<Card icon="i-carbon:api" color="text-amber-300" title="Integrações">
Mesmas APIs e sistemas corporativos.
</Card>

<Card icon="i-carbon:settings-adjust" color="text-blue-300" title="Parametrização">
Portal Manager / CMS mantidos, quando aplicável.
</Card>

</v-clicks>
</div>

---
class: py-10
glow: bottom-left
---

# Uma jornada crítica para o negócio

<span muted>Por isso a prioridade é paridade, não reinvenção</span>

<div mt-8 flex flex-col gap-3>
<v-clicks>

<div glass px-5 py-3 flex items-center gap-4><div i-carbon:growth text-emerald-300 text-2xl /><div><b>Geração de negócios</b> <span muted>· jornada crítica de receita</span></div></div>
<div glass px-5 py-3 flex items-center gap-4><div i-carbon:flow-connection text-amber-300 text-2xl /><div><b>Integrações</b> <span muted>· forte dependência de sistemas de seguros</span></div></div>
<div glass px-5 py-3 flex items-center gap-4><div i-carbon:settings-adjust text-blue-300 text-2xl /><div><b>Parametrizações</b> <span muted>· regras de negócio e ofertas configuráveis</span></div></div>
<div glass px-5 py-3 flex items-center gap-4><div i-carbon:mobile-check text-brand text-2xl /><div><b>Mobile</b> <span muted>· validação obrigatória em iOS e Android</span></div></div>
<div glass px-5 py-3 flex items-center gap-4><div i-carbon:compare text-yellow-300 text-2xl /><div><b>Paridade</b> <span muted>· funcional e visual após a migração</span></div></div>

</v-clicks>
</div>

---
layout: section
glow: center
---

<div flex justify-center mb-6><div i-carbon:flow text-6xl text-brand /></div>

# Como + Estratégia

Arquitetura, fases da migração e parametrização

---
class: py-8
glow: top-right
---

# AS IS → TO BE

<span muted>Só a camada de frontend muda</span>

<div grid grid-cols="[1fr_auto_1fr]" gap-6 mt-6 items-center>

<div flex flex-col items-center gap-1 text-sm>
  <div text-xs uppercase tracking-widest muted mb-1>Hoje</div>
  <div glass w-72 px-4 py-2 text-center flex items-center justify-center gap-2><div i-carbon:application-mobile /> SuperApp Mobile</div>
  <div i-carbon:arrow-down opacity-40 />
  <div class="w-72 px-4 py-2 text-center rounded-xl border-2 border-solid border-rose-400/50 bg-rose-400/10 flex items-center justify-center gap-2"><div i-logos:angular-icon /> Angular + iDS v1</div>
  <div i-carbon:arrow-down opacity-40 />
  <div glass w-72 px-4 py-2 text-center flex items-center justify-center gap-2><div i-carbon:api /> APIs Seguro Auto</div>
  <div i-carbon:arrow-down opacity-40 />
  <div glass w-72 px-4 py-2 text-center flex items-center justify-center gap-2><div i-carbon:data-base /> Sistemas Corporativos</div>
</div>

<div v-click flex flex-col items-center gap-2>
  <div i-carbon:arrow-right text-4xl text-brand />
  <div text-xs muted>migração</div>
</div>

<div v-after flex flex-col items-center gap-1 text-sm>
  <div text-xs uppercase tracking-widest muted mb-1>Futuro</div>
  <div glass w-72 px-4 py-2 text-center flex items-center justify-center gap-2><div i-carbon:application-mobile /> SuperApp Mobile</div>
  <div i-carbon:arrow-down opacity-40 />
  <div class="w-72 px-4 py-2 text-center rounded-xl border-2 border-solid border-emerald-400/60 bg-emerald-400/10 flex items-center justify-center gap-2"><div i-logos:react /> React / Next.js + iDS v2</div>
  <div i-carbon:arrow-down opacity-40 />
  <div glass w-72 px-4 py-2 text-center flex items-center justify-center gap-2><div i-carbon:api /> APIs Seguro Auto</div>
  <div i-carbon:arrow-down opacity-40 />
  <div glass w-72 px-4 py-2 text-center flex items-center justify-center gap-2><div i-carbon:data-base /> Sistemas Corporativos</div>
</div>

</div>

<div mt-6 flex justify-center gap-3>
  <Pill icon="i-carbon:api">APIs de cotação e contratação</Pill>
  <Pill icon="i-carbon:user-profile">Serviços cadastrais</Pill>
  <Pill icon="i-carbon:security">Serviços de seguros</Pill>
  <Pill icon="i-carbon:settings-adjust">Portal Manager / CMS</Pill>
</div>

<!--
Stack atual: Angular, TypeScript, iDS v1, Webview Mobile, APIs corporativas de Seguro Auto.
Stack futura: React, Next.js, TypeScript, iDS v2, mesmas integrações.
-->

---
class: py-10
glow: bottom
---

# Benefícios esperados

<div grid grid-cols-5 gap-3 mt-10>
<v-clicks>

<Card icon="i-carbon:policy" title="Mandato">
Aderência ao mandato tecnológico do SuperApp.
</Card>

<Card icon="i-carbon:clean" color="text-emerald-300" title="Dívida">
Redução da dívida técnica do frontend.
</Card>

<Card icon="i-carbon:user-favorite" color="text-orange-300" title="Experiência">
Evolução da experiência digital com iDS v2.
</Card>

<Card icon="i-carbon:ai-generate" color="text-yellow-300" title="IA">
Maior aderência aos aceleradores corporativos baseados em IA.
</Card>

<Card icon="i-carbon:tool-kit" color="text-amber-300" title="Manutenção">
Facilidade de manutenção e evolução futura.
</Card>

</v-clicks>
</div>

---
layout: two-cols
layoutClass: gap-12 py-10
glow: left
---

# O que <span text-emerald-300>se mantém</span>

<div flex flex-col gap-3 mt-6>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Mesma jornada</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Mesmas regras de negócio</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Mesmas integrações e APIs</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl /> Mesmo backend</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 text-xl shrink-0 /> Mesma parametrização</div>
  <div text-sm muted pl-9 -mt-1>Portal Manager, CMS, feature flags e configurações comerciais</div>
</div>

::right::

# O que <span text-brand>muda</span>

<div v-click flex flex-col gap-4 mt-6>
  <div glass px-5 py-4 flex items-center gap-4>
    <div i-logos:angular-icon text-3xl />
    <div i-carbon:arrow-right muted />
    <div i-logos:react text-3xl />
    <div><b>Framework</b><div text-sm muted>Angular → React / Next.js</div></div>
  </div>
  <div glass px-5 py-4 flex items-center gap-4>
    <div i-carbon:color-palette text-3xl text-orange-300 />
    <div><b>Design System</b><div text-sm muted>iDS v1 → iDS v2</div></div>
  </div>
  <div text-sm muted mt-2>O objetivo não é reconstruir a jornada: a modernização acontece na camada de frontend.</div>
</div>

---
class: py-8
glow: top
---

# Estratégia em 3 fases

<span muted>Executada com o acelerador corporativo Angular → React assistido por IA</span>

<div grid grid-cols-3 gap-4 mt-6 h-82>
<v-clicks>

<Card icon="i-carbon:search" title="Fase 1 · Análise">

Mapear a aplicação Angular antes de migrar.

- Inventário de rotas, componentes, serviços e integrações
- Diagnóstico técnico

<div mt-3 />
<Pill icon="i-carbon:document-tasks" color="text-brand">Diagnóstico + inventário versionado</Pill>

</Card>

<Card icon="i-carbon:color-palette" color="text-orange-300" title="Fase 2 · iDS v1 → v2">

Modernizar a camada visual antes de trocar o framework.

- Conversão dos componentes visuais
- Validação visual e técnica
- Remoção das dependências do iDS v1

<div mt-3 />
<Pill icon="i-logos:angular-icon" color="text-orange-300">Angular + iDS v2</Pill>

</Card>

<Card icon="i-carbon:migrate" color="text-yellow-300" title="Fase 3 · Angular → React">

A IA gera manifesto, specs e mapa de dependências e converte:

- Componentes, templates e navegação
- Serviços de frontend
- Validação funcional e visual

<div mt-3 />
<Pill icon="i-logos:react" color="text-yellow-300">React / Next.js + iDS v2</Pill>

</Card>

</v-clicks>
</div>

---
class: py-10
glow: right
---

# Uso de IA como acelerador

<span muted>Do código Angular à homologação</span>

<div mt-10 />

<Timeline :items="[
  { icon: 'i-logos:angular-icon', title: 'Código Angular', desc: 'Fonte original preservada' },
  { icon: 'i-carbon:search', title: 'Diagnóstico', desc: 'Automatizado' },
  { icon: 'i-carbon:color-palette', title: 'iDS v1 → v2', desc: 'Migração visual', color: 'text-orange-300' },
  { icon: 'i-carbon:migrate', title: 'Angular → React', desc: 'Conversão pela IA', color: 'text-yellow-300' },
  { icon: 'i-carbon:test-tool', title: 'Validação', desc: 'Técnica e funcional', color: 'text-emerald-300' },
  { icon: 'i-carbon:checkmark-outline', title: 'Homologação', desc: 'Antes de produção', color: 'text-emerald-300' },
]" />

<div mt-10 flex justify-center gap-3 flex-wrap>
  <Pill icon="i-carbon:locked">Código-fonte original preservado</Pill>
  <Pill icon="i-carbon:flow-data">Processo rastreável e auditável</Pill>
  <Pill icon="i-carbon:user-avatar">Revisão humana obrigatória</Pill>
  <Pill icon="i-carbon:checkmark-outline">Homologação obrigatória</Pill>
</div>

---
layout: statement
glow: center
---

# IA propõe. <span class="gradient-text">Engenharia decide.</span> Testes comprovam.

<span muted>Princípio adotado na migração</span>

---
layout: two-cols
layoutClass: gap-12 py-10
glow: bottom-right
---

# Validação pós-migração

<span muted>A migração não termina na transpilação</span>

<div flex flex-col gap-3 mt-6>
<v-clicks>

<div flex items-center gap-3><div i-carbon:repeat text-brand text-xl /> Testes regressivos</div>
<div flex items-center gap-3><div i-carbon:task text-brand text-xl /> Testes funcionais</div>
<div flex items-center gap-3><div i-carbon:flow-connection text-brand text-xl /> Testes integrados</div>
<div flex items-center gap-3><div i-carbon:rule text-brand text-xl /> Regras de negócio</div>
<div flex items-center gap-3><div i-carbon:view text-brand text-xl /> Validação visual da jornada</div>
<div flex items-center gap-3><div i-carbon:mobile-check text-brand text-xl /> Mobile: Android e iOS</div>

</v-clicks>
</div>

::right::

<div v-click glass px-6 py-5 mt-4>
  <div flex items-center gap-2 font-semibold mb-3><div i-carbon:tool-kit text-amber-300 /> Ajustes esperados</div>
  <div text-sm muted mb-3>Fazem parte do processo e são tratados na validação e homologação:</div>
  <div grid grid-cols-2 gap-2 text-sm>
    <div>· Componentes visuais</div>
    <div>· Responsividade</div>
    <div>· Navegação</div>
    <div>· Integrações específicas</div>
    <div>· Regras vistas na homologação</div>
    <div>· Adoção do iDS v2</div>
  </div>
</div>

<div v-click mt-6 flex items-start gap-3 text-sm>
  <div i-carbon:target text-emerald-300 text-xl shrink-0 />
  <div>Objetivo: comportamento <b>equivalente</b> ao da aplicação Angular em produção.</div>
</div>

---
layout: section
glow: center
---

<div flex justify-center mb-6><div i-carbon:chart-bar text-6xl text-amber-300 /></div>

# Estimativa alto nível

Esforço, riscos e custos

---
class: py-10
glow: top-left
---

# Esforço por etapa

<span muted>A conversão pela IA leva minutos; o esforço está em validar e ajustar</span>

<div mt-10 />

<RangeBars :items="[
  { label: 'Diagnóstico e migração via IA', min: 0, max: 1, text: '< 1 h', color: 'bg-yellow-300' },
  { label: 'Refinamentos iDS v1 → v2', min: 5, max: 15, color: 'bg-orange-300' },
  { label: 'Ajustes pós Angular → React', min: 5, max: 15, color: 'bg-orange-500' },
  { label: 'Testes regressivos', min: 8, max: 16, color: 'bg-amber-400' },
  { label: 'Correções dos testes', min: 4, max: 12, color: 'bg-amber-400' },
  { label: 'Homologação funcional', min: 4, max: 8, color: 'bg-emerald-400' },
  { label: 'Go Live e acompanhamento', min: 2, max: 4, color: 'bg-emerald-400' },
]" />

---
class: py-10
glow: bottom
---

# Cenários de esforço total

<div grid grid-cols-3 gap-6 mt-10>
  <Stat value="~24 h" label="Melhor cenário" icon="i-carbon:flash" color="text-emerald-300" />
  <Stat value="~40 h" label="Cenário esperado" icon="i-carbon:target" color="text-brand" />
  <Stat value="~70 h" label="Cenário mais complexo" icon="i-carbon:warning-alt" color="text-amber-300" />
</div>

<div v-click mt-10 glass px-6 py-4>
  <div flex items-center gap-2 font-semibold mb-3><div i-carbon:warning-alt text-amber-300 /> Onde está o maior risco de esforço</div>
  <div grid grid-cols-2 gap-x-10 gap-y-2 text-sm muted>
    <div>· Componentes específicos iDS v1 → v2</div>
    <div>· Comportamentos customizados da jornada</div>
    <div>· Responsividade mobile</div>
    <div>· Integrações com APIs e serviços externos</div>
    <div>· Diferenças vistas nos regressivos</div>
    <div>· Navegação e estado de tela</div>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-12 py-10
glow: right
---

# Custos

<div text-7xl font-bold mt-6 class="gradient-text">R$ 0</div>
<div muted mt-2>de custo direto para a área de Seguro Auto na fase piloto</div>

<div flex flex-col gap-2 mt-6 text-sm>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 /> Ferramenta de migração Angular → React</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 /> Equipe do programa de migração</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 /> Licenciamento de IA</div>
  <div flex items-center gap-3><div i-carbon:checkmark-outline text-emerald-400 /> Infraestrutura adicional</div>
</div>

::right::

<div v-click glass px-6 py-5 mt-4>
  <div flex items-center gap-2 font-semibold mb-2><div i-carbon:user-multiple text-brand /> Onde fica o esforço da squad</div>
  <div text-sm muted mb-4>A execução da migração é absorvida pelo programa Angular → React. A squad de Seguro Auto foca em:</div>
  <div flex flex-col gap-2 text-sm>
    <div flex items-center gap-3><div i-carbon:view text-brand /> Acompanhamento técnico</div>
    <div flex items-center gap-3><div i-carbon:test-tool text-brand /> Validação e testes regressivos</div>
    <div flex items-center gap-3><div i-carbon:checkmark-outline text-brand /> Homologação funcional</div>
    <div flex items-center gap-3><div i-carbon:rocket text-brand /> Acompanhamento do Go Live</div>
    <div flex items-center gap-3><div i-carbon:tool-kit text-brand /> Correções pós-transpilação</div>
  </div>
</div>

---
layout: center
class: text-center
glow: full
---

<div text-sm uppercase tracking-widest muted mb-6>Em resumo</div>

<div grid grid-cols-3 gap-6 text-left max-w-220 mx-auto>
  <Card icon="i-carbon:migrate" color="text-yellow-300" title="O quê">
    Frontend da jornada de Seguro Auto Mobile para React / Next.js + iDS v2.
  </Card>
  <Card icon="i-carbon:locked" color="text-emerald-300" title="O que não muda">
    Regras de negócio, integrações, backend e parametrização.
  </Card>
  <Card icon="i-carbon:currency" color="text-amber-300" title="Quanto">
    ~40 h da squad, focadas em validação. R$ 0 de custo direto.
  </Card>
</div>

<div mt-12 text-3xl font-bold>Perguntas? <div i-fluent-emoji-flat:raising-hands inline-block /></div>
