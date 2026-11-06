import { catalogCategories, questionCatalog } from './catalog'

export const FONT_SIZES = [80, 90, 100, 110, 120, 130, 140, 150]

export const categories = catalogCategories.map(category => ({
  ...category,
  questions: questionCatalog
    .filter(question => question.categoryId === category.id)
    .map(question => ({ id: question.id, title: question.title, status: question.status })),
}))

export const tableOfContents = [
  { id: 'overview', label: 'الفكرة بسرعة' },
  { id: 'explanation', label: 'الشرح بالتفصيل' },
  { id: 'playground', label: 'المحاكاة التفاعلية' },
  { id: 'code-example', label: 'مثال عملي' },
  { id: 'production', label: 'سيناريو Production' },
  { id: 'failure-lab', label: 'Production Failure Lab' },
  { id: 'answers', label: 'إجابة الإنترفيو' },
  { id: 'followups', label: 'Follow-up Questions' },
]
