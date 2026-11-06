import { useEffect, useState } from 'react'
import { categories, FONT_SIZES, tableOfContents } from './data/navigation'
import { authoredQuestions } from './data/question'
import { questionCatalog } from './data/catalog'
import { playgrounds } from './data/playgrounds'
import { failureLabs } from './data/failureLabs'
import MobileHeader from './components/layout/MobileHeader'
import Sidebar from './components/layout/Sidebar'
import TopBar from './components/layout/TopBar'
import TableOfContents from './components/layout/TableOfContents'
import QuestionArticle from './components/article/QuestionArticle'
import CatalogQuestionPage from './components/article/CatalogQuestionPage'
import SearchDialog from './components/search/SearchDialog'
import './App.css'
import './contrast.css'
import './footer.css'
import './readability.css'

const readStoredIds = (key, legacyKey) => {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || '[]')
    if (Array.isArray(stored)) return stored
  } catch { /* Ignore invalid legacy storage. */ }
  return localStorage.getItem(legacyKey) === '1' ? ['Q001'] : []
}

export default function App() {
  const [font, setFont] = useState(() => Number(localStorage.font) || 2)
  const [light, setLight] = useState(() => localStorage.theme === 'light')
  const [drawer, setDrawer] = useState(false)
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [active, setActive] = useState(() => localStorage.activeQuestion || 'Q001')
  const [bookmarkedIds, setBookmarkedIds] = useState(() => readStoredIds('bookmarkedQuestions', 'book'))
  const [completedIds, setCompletedIds] = useState(() => readStoredIds('completedQuestions', 'done'))

  useEffect(() => {
    document.documentElement.lang = 'ar'
    document.documentElement.dir = 'rtl'
    document.documentElement.style.setProperty('--scale', FONT_SIZES[font] / 100)
    localStorage.font = font
  }, [font])
  useEffect(() => {
    document.body.classList.toggle('light', light)
    localStorage.theme = light ? 'light' : 'dark'
  }, [light])
  useEffect(() => {
    const handleShortcut = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true) }
      if (event.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  const toggleId = (setter, storageKey, id) => setter(values => { const next=values.includes(id)?values.filter(value=>value!==id):[...values,id]; localStorage.setItem(storageKey,JSON.stringify(next)); return next })
  const toggleBookmark = () => toggleId(setBookmarkedIds, 'bookmarkedQuestions', active)
  const toggleDone = () => toggleId(setCompletedIds, 'completedQuestions', active)
  const selectQuestion = id => { if (!questionCatalog.some(item=>item.id===id)) return; setActive(id); localStorage.activeQuestion=id; setDrawer(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const activeContent = authoredQuestions[active]
  const activeIndex = questionCatalog.findIndex(item => item.id === active)
  const previous = activeIndex > 0 ? questionCatalog[activeIndex - 1] : null
  const next = activeIndex < questionCatalog.length - 1 ? questionCatalog[activeIndex + 1] : null
  const activeItem = questionCatalog[activeIndex] || questionCatalog[0]
  const activeCategory = categories.find(category => category.id === activeItem.categoryId)
  const done = completedIds.includes(active)
  const bookmarked = bookmarkedIds.includes(active)
  const currentToc = activeContent ? tableOfContents : [{ id: 'catalog-question', label: 'السؤال' }]

  return <div className="shell">
    <MobileHeader onOpen={() => setDrawer(true)} />
    <Sidebar open={drawer} onClose={() => setDrawer(false)} categories={categories} onOpenSearch={()=>setSearchOpen(true)} active={active} onSelect={selectQuestion} bookmarkedCount={bookmarkedIds.length} completedIds={completedIds} />
    <main>
      <TopBar sizes={FONT_SIZES} font={font} setFont={setFont} light={light} setLight={setLight} item={activeItem} category={activeCategory} />
      {activeContent ? <QuestionArticle question={activeContent.question} code={activeContent.code} playground={playgrounds[active]} failureLab={failureLabs[active]} bookmarked={bookmarked} onBookmark={toggleBookmark} done={done} onDone={toggleDone} previous={previous} next={next} onNavigate={selectQuestion} /> : <CatalogQuestionPage item={activeItem} category={activeCategory} done={done} onDone={toggleDone} previous={previous} next={next} onNavigate={selectQuestion}/>} 
    </main>
    <TableOfContents items={currentToc} />
    <SearchDialog open={searchOpen} onClose={()=>setSearchOpen(false)} query={search} setQuery={setSearch} catalog={questionCatalog} categories={categories} onSelect={selectQuestion} />
  </div>
}
