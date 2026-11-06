import SectionTitle from '../ui/SectionTitle'
import BilingualText from '../ui/BilingualText'

export default function FollowUpQuestions({ items }) {
  return <section id="followups"><SectionTitle number="08">Follow-up Questions</SectionTitle><div className="followup-list">{items.map((item,index)=><details className="follow" key={item.title}><summary><span className="follow-number">{String(index+1).padStart(2,'0')}</span><b><BilingualText>{item.title}</BilingualText></b><span className="follow-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span></summary><div className="follow-answer"><span>الإجابة</span><p><BilingualText>{item.answer}</BilingualText></p></div></details>)}</div></section>
}
