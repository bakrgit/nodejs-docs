import { makeLearningBatch } from './makeLearningBatch.js'

export function makeCompactBatch(category, rows, baseReferences) {
  return makeLearningBatch(category, rows.map((row) => ({
    ...row,
    intro: row.intro ?? `${row.idea} المهم مش حفظ المصطلح؛ المهم تعرف إمتى تستخدمه، وإزاي تقيس نتيجته، وإيه المخاطر لو اتطبق غلط.`,
    steps: row.steps ?? [
      'ابدأ من المتطلب والـ access pattern الحقيقي.',
      `حدد دور ${row.term} وحدوده قبل كتابة الكود.`,
      'نفّذ أصغر تصميم يحقق الضمان المطلوب.',
      'اختبر المسار الطبيعي والفشل والتزامن ببيانات واقعية.',
      'راقب الأداء والصحة، وعدّل القرار بناءً على القياس.',
    ],
    warning: row.warning ?? `استخدام ${row.term} من غير فهم التكلفة والحدود ممكن ينقل المشكلة بدل ما يحلها.`,
    details: row.details,
    senior: row.senior,
    scenario: row.scenario ?? row.example,
    mistakes: row.mistakes ?? ['استخدام التقنية بدون قياس.', 'تجاهل حالات الفشل والتزامن.', 'الاعتماد على الإعداد الافتراضي بدون فهمه.'],
    arabicAnswer: row.arabicAnswer ?? `${row.idea} في الإنتاج بربط القرار بالـ workload الحقيقي، وباختبره بالقياس، وبحط حدود واضحة للفشل والتكلفة.`,
    followups: row.followups ?? [
      ['إزاي تعرف إن القرار صح؟', 'من خطة التنفيذ والـ metrics وصحة النتيجة تحت بيانات وحمل يشبهوا الإنتاج.'],
      ['إيه أهم خطر؟', row.warning ?? 'الاعتماد على افتراض غير مقاس وتحويله إلى نقطة فشل في الإنتاج.'],
    ],
    references: row.references ?? baseReferences,
  })))
}
