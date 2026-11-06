import SectionTitle from '../ui/SectionTitle'; import BilingualText from '../ui/BilingualText'
export default function QuickOverview({ items }) { return <section id="overview"><SectionTitle number="01">الفكرة بسرعة</SectionTitle><div className="quick">{items.map(x=><div key={x.title}><b>{x.title}</b><p><BilingualText>{x.text}</BilingualText></p></div>)}</div></section> }
