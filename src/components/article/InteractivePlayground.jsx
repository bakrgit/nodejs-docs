import SectionTitle from '../ui/SectionTitle'
import PlaygroundEngine from '../interactive/PlaygroundEngine'

export default function InteractivePlayground({ config }) {
  return <section id="playground"><SectionTitle number="03">المحاكاة التفاعلية</SectionTitle><PlaygroundEngine config={config}>{({ running }) => <div className="flow"><div className="pills">{config.labels.map(label=><span key={label}>{label}</span>)}</div><i>↓</i><div className="loop"><strong className={running?'spin':''}>◌</strong><div><b dir="ltr">{config.engineLabel}</b><small>{config.engineHint}</small></div></div><div className="branches">{config.branches.map(([title,hint])=><div key={title}><b>{title}</b><small>{hint}</small></div>)}</div></div>}</PlaygroundEngine></section>
}
