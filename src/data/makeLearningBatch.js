export function makeLearningBatch(category, rows) {
  return Object.fromEntries(rows.map((row) => {
    const number = Number(row.id.slice(1))
    const question = {
      id: row.id,
      number: String(number),
      category,
      importance: row.importance ?? 'Senior Interview',
      readingTime: row.readingTime ?? '10 دقايق قراءة',
      level: 'Senior',
      tag: row.term,
      titleParts: [row.title],
      intro: row.intro,
      simple: {
        idea: row.idea,
        analogy: row.analogy,
        example: row.example,
        steps: row.steps,
      },
      quick: [
        { title: 'الفكرة ببساطة', text: row.idea },
        { title: 'مثال عملي', text: row.example },
        { title: 'خد بالك', text: row.warning },
      ],
      explanation: row.details,
      callout: row.senior,
      scenario: row.scenario,
      mistakes: row.mistakes,
      arabicAnswer: row.arabicAnswer,
      englishAnswer: row.englishAnswer,
      followups: row.followups.map(([title, answer]) => ({ title, answer })),
      references: row.references,
    }
    return [row.id, { question, code: row.code }]
  }))
}
