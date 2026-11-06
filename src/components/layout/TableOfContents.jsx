import { useEffect, useState } from 'react'

export default function TableOfContents({ items }) {
  const [active, setActive] = useState(items[0]?.id)
  useEffect(() => {
    const sections = items.map(item => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0,.1,.35] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [items])
  return <aside className="toc"><b>في الصفحة دي</b>{items.map((item,i)=><a className={active===item.id?'active':''} href={`#${item.id}`} key={item.id}><span>{String(i+1).padStart(2,'0')}</span>{item.label}</a>)}<div><b>جاهز للسؤال؟</b><p>حاول تجاوب بصوت عالي قبل ما تراجع الإجابة.</p></div></aside>
}
