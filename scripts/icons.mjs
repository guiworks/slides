#!/usr/bin/env node
// Busca e valida ícones nas coleções @iconify-json instaladas.
//   npm run icons -- <termo> [coleção]   → lista ícones que contêm o termo
//   npm run check -- <deck>              → confere se todos os i-col:nome do deck existem
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const iconsDir = join(root, 'node_modules', '@iconify-json')
const [cmd, arg, filter] = process.argv.slice(2)

function load() {
  const sets = {}
  for (const col of readdirSync(iconsDir)) {
    const file = join(iconsDir, col, 'icons.json')
    if (!existsSync(file))
      continue
    const data = JSON.parse(readFileSync(file, 'utf8'))
    sets[col] = new Set([...Object.keys(data.icons ?? {}), ...Object.keys(data.aliases ?? {})])
  }
  return sets
}

const sets = load()

if (cmd === 'search') {
  if (!arg) {
    console.log(`Coleções: ${Object.keys(sets).join(', ')}`)
    process.exit(0)
  }
  const term = arg.toLowerCase()
  let total = 0
  for (const [col, names] of Object.entries(sets)) {
    if (filter && col !== filter)
      continue
    const hits = [...names].filter(n => n.includes(term)).slice(0, 25)
    if (hits.length) {
      console.log(`\n${col}: ${hits.map(h => `i-${col}:${h}`).join('  ')}`)
      total += hits.length
    }
  }
  if (!total)
    console.log('Nenhum ícone encontrado.')
}
else if (cmd === 'check') {
  const slug = (arg ?? '').replace(/\.md$/, '')
  const file = join(root, 'decks', `${slug}.md`)
  if (!existsSync(file)) {
    console.error(`✖ decks/${slug}.md não existe`)
    process.exit(1)
  }
  const used = new Set(readFileSync(file, 'utf8').match(/\bi-[a-z0-9-]+:[a-z0-9-]+/g) ?? [])
  const missing = [...used].filter((u) => {
    const [col, name] = u.slice(2).split(':')
    return !sets[col]?.has(name)
  })
  if (missing.length) {
    console.error(`✖ ${missing.length} ícone(s) inexistente(s):\n  ${missing.join('\n  ')}`)
    process.exit(1)
  }
  console.log(`✔ ${used.size} ícones verificados em decks/${slug}.md`)
}
else {
  console.log('Uso: npm run icons -- <termo> [coleção] | npm run check -- <deck>')
}
