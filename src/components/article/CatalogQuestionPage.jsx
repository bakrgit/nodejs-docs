import ArticleFooter from "./ArticleFooter";

export default function CatalogQuestionPage({
  item,
  category,
  done,
  onDone,
  previous,
  next,
  onNavigate,
}) {
  return (
    <article id="question" className="catalog-question-page">
      <header id="catalog-question" className="article-head">
        <div className="badges">
          <b>{item.id}</b>
          <span dir="ltr">{category?.title}</span>
          <span>Senior Interview</span>
        </div>
        <h1 dir="ltr">{item.title}</h1>
        <p>
          السؤال متاح للتنقّل والمراجعة. المحتوى التعليمي التفصيلي لهذا السؤال
          ما زال ضمن خطة التأليف، وحالة الإنجاز مستقلة تمامًا عن فتح الأسئلة.
        </p>
        <div className="catalog-status">
          <span>حالة المحتوى</span>
          <b>{item.status === "planned" ? "قيد التأليف" : "مسودة"}</b>
        </div>
      </header>
      <section className="catalog-placeholder">
        <h2>محاور الإجابة المقترحة</h2>
        <p>
          استخدم السؤال للتدريب الذاتي الآن، ويمكنك تعليمه كمكتمل عندما تنتهي من
          مراجعته. إضافة المحتوى الكامل لن تغيّر حالة الإنجاز المحفوظة.
        </p>
      </section>
      <ArticleFooter
        done={done}
        onDone={onDone}
        previous={previous}
        next={next}
        onNavigate={onNavigate}
      />
    </article>
  );
}
