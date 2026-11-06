import BilingualText from '../ui/BilingualText'
import SectionTitle from '../ui/SectionTitle'

export default function SimpleLearningPath({ content }) {
  if (!content) return null
  return (
    <section id="simple-explanation" className="simple-learning">
      <SectionTitle number="02">نفهمها ببساطة الأول</SectionTitle>
      <article>
        <h3>الفكرة في سطر واحد</h3>
        <p><BilingualText>{content.idea}</BilingualText></p>
      </article>
      <article>
        <h3>مثال من الحياة العادية</h3>
        <p><BilingualText>{content.analogy}</BilingualText></p>
      </article>
      <article>
        <h3>مثال عملي في الـ Backend</h3>
        <p><BilingualText>{content.example}</BilingualText></p>
      </article>
      <article>
        <h3>ماذا يحدث خطوة بخطوة؟</h3>
        <ol>{content.steps.map((step) => <li key={step}><BilingualText>{step}</BilingualText></li>)}</ol>
      </article>
    </section>
  )
}
