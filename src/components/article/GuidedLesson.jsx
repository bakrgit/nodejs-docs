import BilingualText from '../ui/BilingualText'
import SectionTitle from '../ui/SectionTitle'

function LessonBlock({ title, children, className = '' }) {
  return (
    <article className={`lesson-block ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </article>
  )
}

export default function GuidedLesson({ question }) {
  const simple = question.simple
  if (!simple) return null

  return (
    <section id="guided-lesson" className="guided-lesson">
      <SectionTitle number="01">نفهم الموضوع من البداية</SectionTitle>

      <LessonBlock title="أول حاجة: يعني إيه؟">
        <p><BilingualText>{simple.idea}</BilingualText></p>
      </LessonBlock>

      <LessonBlock title="ليه المفهوم ده مهم؟">
        <p><BilingualText>{question.intro}</BilingualText></p>
      </LessonBlock>

      <LessonBlock title="مثال من الحياة العادية" className="lesson-analogy">
        <p><BilingualText>{simple.analogy}</BilingualText></p>
      </LessonBlock>

      <LessonBlock title="مثال عملي في الـ Backend" className="lesson-example">
        <p><BilingualText>{simple.example}</BilingualText></p>
      </LessonBlock>

      <LessonBlock title="إيه اللي بيحصل خطوة بخطوة؟">
        <ol>
          {simple.steps.map((step) => (
            <li key={step}><BilingualText>{step}</BilingualText></li>
          ))}
        </ol>
      </LessonBlock>

      <LessonBlock title="ندخل في التفاصيل التقنية">
        <div className="lesson-details">
          {question.explanation.map((paragraph) => (
            <p key={paragraph}><BilingualText>{paragraph}</BilingualText></p>
          ))}
        </div>
      </LessonBlock>

      <aside className="lesson-senior-note">
        <strong>النقطة المهمة في إجابة الـ Senior</strong>
        <p><BilingualText>{question.callout}</BilingualText></p>
      </aside>

      <LessonBlock title="اختبر نفسك بسرعة" className="lesson-check">
        <p><BilingualText>{question.followups[0].title}</BilingualText></p>
        <details>
          <summary>شوف الإجابة</summary>
          <p><BilingualText>{question.followups[0].answer}</BilingualText></p>
        </details>
      </LessonBlock>
    </section>
  )
}
