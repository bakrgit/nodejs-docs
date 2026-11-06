import { q002, q002Code, q003, q003Code } from './nodeRuntimeQuestions.js'
import { runtimeBatch2 } from './nodeRuntimeBatch2.js'
import { runtimeBatch3 } from './nodeRuntimeBatch3.js'
import { asyncBatch1 } from './asyncBatch1.js'
import { asyncBatch2 } from './asyncBatch2.js'
import { expressBatch1 } from './expressBatch1.js'
import { expressBatch2 } from './expressBatch2.js'
import { nestBatch1 } from './nestBatch1.js'
import { nestBatch2 } from './nestBatch2.js'
import { restBatch1 } from './restBatch1.js'
import { restBatch2 } from './restBatch2.js'
import { securityBatch1 } from './securityBatch1.js'
import { securityBatch2 } from './securityBatch2.js'
import { securityBatch3 } from './securityBatch3.js'
import { mongoBatch1 } from './mongoBatch1.js'
import { mongoBatch2 } from './mongoBatch2.js'
import { mongoBatch3 } from './mongoBatch3.js'
import { mongoOperationsBatch } from './mongoOperationsBatch.js'
import { sqlBatch } from './sqlBatch.js'
import { redisBatch, queueBatch, realtimeBatch } from './redisQueuesRealtimeBatch.js'
import { testingBatch, observabilityBatch } from './testingObservabilityBatch.js'
import { devopsBatch } from './devopsBatch.js'
import { systemDesignBatch } from './systemDesignBatch.js'
import { simpleContent1 } from './simpleContent1.js'
import { simpleContent2 } from './simpleContent2.js'
import { simpleContent3 } from './simpleContent3.js'
import { simpleContent4 } from './simpleContent4.js'
import { simpleContent5 } from './simpleContent5.js'
import { simpleContent6 } from './simpleContent6.js'
import { simpleContent7 } from './simpleContent7.js'
import { simpleContent8 } from './simpleContent8.js'
import { simpleContent9 } from './simpleContent9.js'

export const question = {
  id: 'Q001', number: '01', category: 'Node.js Architecture', importance: 'Very important', readingTime: '8 دقايق قراءة', level: 'Senior', tag: 'Event Loop',
  titleParts: ['إزاي ', 'Node.js', ' بيتعامل مع آلاف الـ ', 'Requests', ' رغم إن ', 'JavaScript', ' بتشتغل على ', 'Main Thread', ' واحدة؟'],
  intro: 'الهدف مش تحفظ كلمة Single-Threaded، لكن تفهم مين بينفذ الشغل، وإزاي السيرفر يفضل يستقبل Requests تانية.',
  quick: [
    { title: 'إيه الفكرة؟', text: 'Node.js لا ينشئ Thread لكل Request. هو يدير عددًا كبيرًا من عمليات الـ I/O بشكل غير متزامن.' },
    { title: 'ليه ده مهم؟', text: 'لأن معظم شغل الـ Backend انتظار: Database، Network أو File System، مش حسابات CPU مستمرة.' },
    { title: 'إمتى تقابلها؟', text: 'لما تصمم API عليها ضغط، أو تكتشف إن كود synchronous واحد عطّل كل المستخدمين.' },
  ],
  explanation: [
    'الـ Main Thread بتنّفذ كود JavaScript نفسه. لما توصل عملية I/O، الـ Runtime يسلّمها لنظام التشغيل أو libuv Worker Pool حسب نوعها، وبعد ما تخلص يرجّع الـ callback للـ Event Loop.',
    'الميزة الأساسية إن الـ Thread ما تفضلش واقفة مستنية. تقدر تبدأ Request تانية، وده اسمه Non-Blocking I/O. لكن أي عملية CPU تقيلة على نفس الـ Thread هتوقف باقي الطلبات.',
  ],
  callout: 'Node.js مش “بيعمل كل حاجة في نفس الوقت”. هو بيعمل concurrency ممتاز للـ I/O، والـ parallelism الحقيقي يحصل خارج الـ Main Thread أو باستخدام Worker Threads.',
  endpoints: ['/api/products', '/api/orders', '/api/profile'],
  scenario: 'لو التقرير بيعمل تجميعات CPU ثقيلة داخل السيرفر، كل Requests تسجيل الدخول والمخزون هتستنى. الحل Queue + Worker منفصل أو تحسين الاستعلام، مش مجرد إضافة async.',
  mistakes: ['اعتبار إن async/await يمنع CPU blocking.', 'تنفيذ JSON.parse على payload ضخم داخل مسار الطلب.', 'زيادة Worker Threads من غير قياس CPU وmemory.'],
  arabicAnswer: 'Node.js بتشغّل JavaScript على Main Thread واحدة، لكن عمليات الـ I/O بتتدار بشكل non-blocking عن طريق نظام التشغيل وlibuv. الـ Event Loop بيرجع يشغّل callbacks لما العمليات تخلص. لو عندي شغل CPU-heavy، بفصله في Worker Thread أو خدمة مستقلة.',
  englishAnswer: 'Node.js executes JavaScript on a single main thread, while I/O is delegated to the OS or libuv. The event loop processes callbacks as operations complete. CPU-intensive work must be isolated to avoid blocking all requests.',
  followups: [{ title: 'إيه الفرق بين concurrency و parallelism هنا؟', answer: 'الـ concurrency هي إدارة مهام متداخلة زمنيًا، بينما parallelism يعني تنفيذ فعلي على أكثر من core.' }, { title: 'إزاي تعرف إن الـ Event Loop عندك blocked؟', answer: 'راقب event loop delay وCPU profiles وlatency percentiles، ثم أثبت السبب بالـ profiling.' }],
}

export const serverCode = `import http from 'node:http';
import { readFile } from 'node:fs';

const server = http.createServer((req, res) => {
  // I/O بيتنفذ من غير ما يوقف الـ main thread
  readFile('./product.json', (error, data) => {
    if (error) return res.writeHead(500).end('Server error');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

server.listen(3000);`

const rawAuthoredQuestions = {
  Q001: { question, code: serverCode },
  Q002: { question: q002, code: q002Code },
  Q003: { question: q003, code: q003Code },
  ...runtimeBatch2,
  ...runtimeBatch3,
  ...asyncBatch1,
  ...asyncBatch2,
  ...expressBatch1,
  ...expressBatch2,
  ...nestBatch1,
  ...nestBatch2,
  ...restBatch1,
  ...restBatch2,
  ...securityBatch1,
  ...securityBatch2,
  ...securityBatch3,
  ...mongoBatch1,
  ...mongoBatch2,
  ...mongoBatch3,
  ...mongoOperationsBatch,
  ...sqlBatch,
  ...redisBatch,
  ...queueBatch,
  ...realtimeBatch,
  ...testingBatch,
  ...observabilityBatch,
  ...devopsBatch,
  ...systemDesignBatch,
}

export const authoredQuestions = Object.fromEntries(
  Object.entries(rawAuthoredQuestions).map(([id, entry]) => [
    id,
    { ...entry, question: { ...entry.question, simple: entry.question.simple ?? simpleContent1[id] ?? simpleContent2[id] ?? simpleContent3[id] ?? simpleContent4[id] ?? simpleContent5[id] ?? simpleContent6[id] ?? simpleContent7[id] ?? simpleContent8[id] ?? simpleContent9[id] } },
  ]),
)
