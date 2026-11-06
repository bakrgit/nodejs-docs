import { catalogCategories, questionCatalog } from '../src/data/catalog.js'
import { authoredQuestions } from '../src/data/question.js'
import { playgrounds } from '../src/data/playgrounds.js'
import { failureLabs } from '../src/data/failureLabs.js'

const expectedIds = Array.from({ length: 250 }, (_, index) => `Q${String(index + 1).padStart(3, '0')}`)
const actualIds = questionCatalog.map(question => question.id)
const errors = []

if (questionCatalog.length !== 250) errors.push(`Expected 250 catalog questions, found ${questionCatalog.length}.`)
if (new Set(actualIds).size !== 250) errors.push('Question IDs must be unique.')
for (const id of expectedIds) if (!actualIds.includes(id)) errors.push(`Missing ${id}.`)
if (catalogCategories.length !== 16) errors.push(`Expected 16 categories, found ${catalogCategories.length}.`)
for (const category of catalogCategories) {
  const actual = questionCatalog.filter(question => question.categoryId === category.id).length
  if (actual !== category.count) errors.push(`${category.id} expected ${category.count} questions, found ${actual}.`)
}
const invalidStatuses = questionCatalog.filter(question => !['planned', 'draft', 'published'].includes(question.status))
if (invalidStatuses.length) errors.push(`Invalid status on: ${invalidStatuses.map(question => question.id).join(', ')}`)
const requiredFields = ['id','number','category','readingTime','level','tag','intro','quick','explanation','callout','scenario','mistakes','arabicAnswer','englishAnswer','followups']
for (const entry of questionCatalog.filter(question => question.status !== 'planned')) {
  const content = authoredQuestions[entry.id]
  if (!content) { errors.push(`${entry.id} is ${entry.status} but has no authored content.`); continue }
  for (const field of requiredFields) if (!content.question[field] || !content.question[field].length) errors.push(`${entry.id} missing ${field}.`)
  if (!content.code?.trim()) errors.push(`${entry.id} missing code example.`)
  if (content.question.quick?.length < 3) errors.push(`${entry.id} needs 3 quick-understanding points.`)
  if (content.question.explanation?.length < 2) errors.push(`${entry.id} explanation is too short.`)
  if (content.question.followups?.length < 2) errors.push(`${entry.id} needs at least 2 follow-ups.`)
  const simple = content.question.simple
  if (!simple?.idea?.trim()) errors.push(`${entry.id} missing simple one-line idea.`)
  if (!simple?.analogy?.trim()) errors.push(`${entry.id} missing real-life analogy.`)
  if (!simple?.example?.trim()) errors.push(`${entry.id} missing practical backend example.`)
  if (simple?.steps?.length < 5) errors.push(`${entry.id} needs at least 5 simple technical steps.`)
  if (!playgrounds[entry.id]) errors.push(`${entry.id} missing playground config.`)
  if (!failureLabs[entry.id]) errors.push(`${entry.id} missing failure lab.`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
const counts = questionCatalog.reduce((result, question) => ({ ...result, [question.status]: (result[question.status] ?? 0) + 1 }), {})
console.log('Catalog valid: 250/250 IDs across 16/16 categories.')
console.log(`Published: ${counts.published ?? 0}; Draft: ${counts.draft ?? 0}; Planned: ${counts.planned ?? 0}.`)
