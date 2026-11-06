import Icon from "../ui/Icon";

function Arrow({ direction }) {
  return (
    <span className="nav-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d={direction === "next" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </span>
  );
}

function NavigationButton({ direction, item, onNavigate }) {
  if (!item) return null;
  const isNext = direction === "next";
  return (
    <button
      className={`question-nav ${direction}`}
      onClick={() => onNavigate(item.id)}
      aria-label={`${isNext ? "السؤال التالي" : "السؤال السابق"}: ${item.title}`}
    >
      {!isNext && <Arrow direction="previous" />}
      <span className="nav-copy">
        <small>
          <span>{isNext ? "السؤال التالي" : "السؤال السابق"}</span>
          <b>{item.id}</b>
        </small>
        <strong dir="ltr">{item.title}</strong>
        <em>{item.status === "planned" ? "افتح السؤال" : "متاح الآن"}</em>
      </span>
      {isNext && <Arrow direction="next" />}
    </button>
  );
}

export default function ArticleFooter({
  done,
  onDone,
  previous,
  next,
  onNavigate,
}) {
  return (
    <footer className="article-footer">
      <div className="completion-row">
        <div>
          <b>تقدّم المذاكرة</b>
          <span>
            {done
              ? "السؤال محسوب ضمن الأسئلة المكتملة."
              : "لما تخلص مراجعة السؤال، علّمه كمكتمل."}
          </span>
        </div>
        <button className={`completion ${done ? "done" : ""}`} onClick={onDone}>
          <span className="completion-check">
            <Icon name="check" />
          </span>
          {done ? "تمّ إكمال السؤال" : "علّم كمكتمل"}
        </button>
      </div>
      <nav
        className={`question-navigation ${!previous || !next ? "single-sided" : ""}`}
        aria-label="التنقل بين الأسئلة"
      >
        <NavigationButton
          direction="previous"
          item={previous}
          onNavigate={onNavigate}
        />
        <NavigationButton
          direction="next"
          item={next}
          onNavigate={onNavigate}
        />
      </nav>
    </footer>
  );
}
