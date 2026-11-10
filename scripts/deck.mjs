#!/usr/bin/env node
// Uso: npm run <cmd> -- <deck> [args extras do slidev]
//   list | new <slug> ["Título"] | dev <slug> | build <slug> | pdf <slug> | pptx <slug> | png <slug>
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const decksDir = join(root, 'decks')
const slidevBin = join(root, 'node_modules', '@slidev', 'cli', 'bin', 'slidev.mjs')
const [cmd, name, ...extra] = process.argv.slice(2)

function decks() {
  return readdirSync(decksDir).filter(f => f.endsWith('.md') && !f.startsWith('_')).map(f => f.slice(0, -3))
}

function resolveDeck(n) {
  if (!n)
    fail(`Informe o deck. Disponíveis: ${decks().join(', ') || '(nenhum)'}`)
  const slug = n.replace(/\.md$/, '').replace(/^decks[\\/]/, '')
  if (existsSync(join(decksDir, `${slug}.md`)))
    return slug
  const matches = decks().filter(d => d.includes(slug))
  if (matches.length === 1)
    return matches[0]
  fail(matches.length ? `Ambíguo: ${matches.join(', ')}` : `Deck "${slug}" não encontrado.`)
}

function fail(msg) {
  console.error(`✖ ${msg}`)
  process.exit(1)
}

function slidev(args) {
  const child = spawn(process.execPath, [slidevBin, ...args, ...extra], { cwd: root, stdio: 'inherit' })
  child.on('exit', code => process.exit(code ?? 0))
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

switch (cmd) {
  case 'list':
    console.log(decks().join('\n') || '(nenhum deck ainda)')
    break

  case 'new': {
    if (!name || !/^[a-z0-9][a-z0-9-]*$/.test(name))
      fail('Use um slug em kebab-case: npm run new -- 2026-11-resultados-q3 "Resultados Q3"')
    const file = join(decksDir, `${name}.md`)
    if (existsSync(file))
      fail(`decks/${name}.md já existe.`)
    const title = extra.join(' ') || name
    const tpl = readFileSync(join(decksDir, '_modelo.md'), 'utf8')
      .replaceAll('{{TITLE}}', title)
      .replaceAll('{{SLUG}}', name)
      .replaceAll('{{DATE}}', today())
    writeFileSync(file, tpl)
    mkdirSync(join(decksDir, 'public', name), { recursive: true })
    console.log(`✔ decks/${name}.md criado (imagens em decks/public/${name}/)`)
    break
  }

  case 'dev':
    slidev([`decks/${resolveDeck(name)}.md`, '--open'])
    break

  case 'build': {
    const slug = resolveDeck(name)
    slidev(['build', `decks/${slug}.md`, '--out', join(root, 'dist', slug)])
    break
  }

  case 'pdf':
  case 'pptx': {
    const slug = resolveDeck(name)
    mkdirSync(join(root, 'exports'), { recursive: true })
    slidev(['export', `decks/${slug}.md`, '--format', cmd, '--output', join(root, 'exports', `${slug}.${cmd}`), '--timeout', '60000'])
    break
  }

  case 'png': {
    const slug = resolveDeck(name)
    slidev(['export', `decks/${slug}.md`, '--format', 'png', '--output', join(root, 'exports', `${slug}-png`), '--timeout', '60000'])
    break
  }

  default:
    fail('Comandos: list | new | dev | build | pdf | pptx | png')
}
