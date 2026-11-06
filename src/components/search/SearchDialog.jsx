import { useMemo, useRef, useEffect } from 'react'
import Icon from '../ui/Icon'

export default function SearchDialog({ open, onClose, query, setQuery, catalog, categories, onSelect }) {
  const inputRef = useRef(null)
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 0) }, [open])
  const results = useMemo(() => { const value=query.trim().toLowerCase(); return (value?catalog.filter(item=>`${item.id} ${item.title} ${item.categoryId}`.toLowerCase().includes(value)):catalog).slice(0,40) }, [catalog,query])
  if (!open) return null
  const categoryMap = Object.fromEntries(categories.map(category => [category.id, category.title]))
  return <div className="search-overlay" onMouseDown={event=>{if(event.target===event.currentTarget)onClose()}}><section className="search-dialog" role="dialog" aria-modal="true" aria-label="البحث في الأسئلة"><header><Icon name="search"/><input ref={inputRef} value={query} onChange={event=>setQuery(event.target.value)} placeholder="ابحث بالعنوان، ID أو المصطلح التقني..."/><kbd>ESC</kbd><button onClick={onClose} aria-label="إغلاق"><Icon name="close"/></button></header><div className="search-summary"><b>{results.length} نتيجة ظاهرة</b><span>من أصل 250 سؤالًا</span></div><div className="search-results">{results.map(item=><button key={item.id} onClick={()=>{onSelect(item.id);onClose()}}><span className="search-id">{item.id}</span><span><b dir="ltr">{item.title}</b><small dir="ltr">{categoryMap[item.categoryId]}</small></span><em className={item.status}>{item.status==='planned'?'قيد التأليف':'متاح'}</em></button>)}{!results.length&&<div className="empty-search"><b>مفيش نتائج مطابقة</b><p>جرّب مصطلحًا إنجليزيًا مثل Event Loop أو رقمًا مثل Q025.</p></div>}</div></section></div>
}
