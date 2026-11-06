export const q002 = {
  id:'Q002', number:'02', category:'Node.js Runtime & Internals', importance:'Core runtime', readingTime:'12 دقيقة قراءة', level:'Senior', tag:'Event Loop',
  titleParts:['اشرح مراحل ','Node.js Event Loop','','','','','','',' وإزاي بيتم ترتيب التنفيذ؟'],
  intro:'الـ Event Loop هي آلية التنسيق التي تسمح لـ Node.js بتنفيذ callbacks الخاصة بالـ I/O والـ timers من غير Thread لكل Request، لكن ترتيب التنفيذ يعتمد على phase ونوع الـ microtask.',
  quick:[
    {title:'إيه الفكرة؟',text:'كل دورة تمر على phases محددة: timers ثم pending callbacks ثم poll ثم check ثم close callbacks، مع تفاصيل داخلية قد تتغير حسب إصدار libuv.'},
    {title:'ليه ده مهم؟',text:'لأن توقع ترتيب callbacks بشكل خاطئ يسبب bugs صعبة، starvation أو latency غير متوقعة تحت الضغط.'},
    {title:'إمتى تقابلها؟',text:'وقت تشخيص setImmediate وsetTimeout وI/O callbacks وPromise microtasks أو قياس Event Loop delay.'},
  ],
  explanation:[
    'في كل iteration، libuv تنقل التنفيذ بين phases، ولكل phase queue من callbacks. timers تشغّل callbacks التي وصل threshold الخاص بها، وpoll تستقبل أحداث I/O وقد تنتظر أحداثًا جديدة، وcheck هي المكان الذي يعمل فيه setImmediate، ثم close callbacks لمعالجة إغلاق handles مثل sockets.',
    'بعد callback من JavaScript، Node.js تفرغ process.nextTick queue ثم Promise microtask queue قبل الرجوع للـ Event Loop. لذلك تكرار nextTick بلا حدود قد يمنع I/O من التقدم. ومن Node.js 20، تغيير libuv جعل timers تعمل بعد poll بدل قبلها وبعدها، وبالتالي لا تعتمد على ترتيب هش بين timers وsetImmediate خارج سياق واضح.',
    'الـ Event Loop لا يجعل العمل المتزامن non-blocking. callback تحسب تقريرًا كبيرًا ستحتل Main Thread مهما كانت المرحلة التي شغّلتها؛ الحل هو تقليل العمل أو نقله إلى Worker Thread أو process منفصلة.',
  ],
  callout:'لا تحفظ phases كقائمة فقط. اشرح queue ownership، توقيت microtasks، ولماذا setImmediate داخل I/O callback غالبًا يسبق setTimeout(0)، مع تجنب تقديم هذا الترتيب كضمان عالمي.',
  endpoints:['timers','poll','check'],
  scenario:'خدمة Notifications تستخدم recursive process.nextTick لمعالجة queue كاملة. تحت الحمل، CPU يظل مرتفعًا والـ sockets لا تحصل على وقت كافٍ. الحل تقسيم العمل إلى batches واستخدام setImmediate أو Queue خارجية لإعادة التحكم للـ loop.',
  mistakes:['اعتبار setTimeout(fn, 0) تنفيذًا فوريًا.','الخلط بين Event Loop phases وlibuv Worker Pool.','إنشاء سلسلة process.nextTick غير محدودة تسبب I/O starvation.'],
  arabicAnswer:'الـ Event Loop بتنظم تشغيل callbacks على مراحل مرتبطة بالـ timers والـ I/O والـ check والـ close. بعد كل callback، Node.js بتعالج nextTick ثم Promise microtasks قبل ما تكمل، وده ممكن يعمل starvation لو الاستخدام غير محدود. ترتيب setTimeout وsetImmediate بيعتمد على السياق وإصدار runtime، لذلك ما بعتمدش على timing هش في business logic.',
  englishAnswer:'The Node.js event loop advances through libuv phases such as timers, poll, check, and close callbacks. Node drains the nextTick and Promise microtask queues at defined boundaries, so excessive microtasks can starve I/O. I avoid relying on incidental timer ordering and measure event-loop delay when diagnosing latency.',
  followups:[
    {title:'ليه setImmediate غالبًا يسبق setTimeout(0) داخل I/O callback؟',answer:'بعد انتهاء I/O callback في poll phase، الدورة يمكن أن تنتقل مباشرة إلى check phase حيث setImmediate. أما timer فينتظر timers processing في دورة لاحقة؛ خارج I/O context لا يوجد ترتيب ثابت يجب الاعتماد عليه.'},
    {title:'إزاي process.nextTick يعمل starvation؟',answer:'Node تفرغ nextTick queue قبل السماح للـ loop بالانتقال إلى phase أخرى. لو كل callback يضيف nextTick جديدًا باستمرار، تظل queue غير فارغة وتتأخر timers وI/O.'},
  ],
}

export const q002Code = `import { readFile } from 'node:fs';

console.log('sync');

readFile(import.meta.filename, () => {
  setTimeout(() => console.log('timer'), 0);
  setImmediate(() => console.log('immediate'));
  Promise.resolve().then(() => console.log('promise'));
  process.nextTick(() => console.log('nextTick'));
});

// داخل I/O callback: nextTick ثم promise، وبعدها غالبًا immediate قبل timer`

export const q003 = {
  id:'Q003', number:'03', category:'Node.js Runtime & Internals', importance:'Runtime internals', readingTime:'11 دقيقة قراءة', level:'Senior', tag:'libuv',
  titleParts:['إيه هي ','libuv',' وإيه العمليات اللي بيعالجها ','Worker Pool','','','','','؟'],
  intro:'libuv هي المكتبة التي توفر Event Loop وواجهات async موحدة عبر أنظمة التشغيل. لكنها لا ترسل كل I/O إلى Worker Pool؛ الشبكات عادة تعتمد على OS readiness APIs.',
  quick:[
    {title:'إيه الفكرة؟',text:'libuv توحّد التعامل مع evented I/O وthreads والعمليات والـ timers عبر Linux وmacOS وWindows.'},
    {title:'إيه اللي يدخل الـPool؟',text:'عمليات File System ومعظم dns.lookup وبعض crypto وzlib تستخدم Worker Pool عندما لا تتوفر لها واجهة OS non-blocking مناسبة.'},
    {title:'إيه اللي لا يدخله؟',text:'Network sockets عادة تُراقب عبر epoll أو kqueue أو IOCP، ولا تستهلك Worker من الـpool أثناء الانتظار.'},
  ],
  explanation:[
    'JavaScript تستدعي Node binding، ثم libuv إما تسجل handle مع آلية readiness الخاصة بنظام التشغيل أو ترسل work request إلى Thread Pool. عند اكتمال العملية، يضاف callback المناسب ليشغله Main Thread في phase ملائمة.',
    'الحجم الافتراضي للـ Worker Pool هو 4 threads في معظم الإصدارات الشائعة، ويمكن ضبط UV_THREADPOOL_SIZE قبل بدء العملية. تكبيره ليس تحسينًا مجانيًا: يزيد memory والمنافسة على CPU وقد يخفي تصميمًا سيئًا. يجب القياس وفق workload وعدد cores والعمليات المتزامنة.',
    'لو امتلأ الـpool بعمليات pbkdf2 أو ضغط طويلة، fs وdns.lookup التي تشاركه ستنتظر، حتى لو كان Main Thread غير blocked. هذه queueing latency مختلفة عن Event Loop blocking وتحتاج metrics وتجربة حمل مناسبة.',
  ],
  callout:'التمييز الأهم في المقابلة: libuv ليست هي Worker Pool فقط، والـ network I/O لا يحصل عادة داخل pool. الـpool يعالج APIs محددة، ثم JavaScript callback يعود إلى Main Thread.',
  endpoints:['fs.readFile','crypto.pbkdf2','dns.lookup'],
  scenario:'خدمة Authentication تشغّل عددًا كبيرًا من password hashing operations بالتزامن مع قراءة templates من disk. تشبع Worker Pool رفع latency للملفات وdns.lookup؛ الحل ضبط concurrency، اختيار cost مناسب، وفصل العمل عند الحاجة بدل تكبير pool عشوائيًا.',
  mistakes:['القول إن كل async operation تعمل على Thread منفصلة.','تغيير UV_THREADPOOL_SIZE بعد بدء Node.js وتوقع تأثير مضمون.','تكبير pool من غير قياس queueing وCPU وmemory.'],
  arabicAnswer:'libuv بتوفر Event Loop وطبقة async موحدة لـ Node.js. الـnetwork sockets غالبًا بتعتمد على OS polling، بينما File System وdns.lookup وبعض crypto وzlib بيستخدموا Worker Pool مشتركة. لو الـpool اتشبعت، العمليات دي هتستنى حتى لو الـMain Thread سليمة، لذلك بقيس workload وبحدد concurrency قبل ما أغيّر حجمها.',
  englishAnswer:'libuv provides Node.js with its event loop and cross-platform asynchronous I/O primitives. Network sockets normally use OS readiness mechanisms, while file-system work, dns.lookup, selected crypto operations, and zlib share the worker pool. Pool saturation introduces queueing latency, so I control concurrency and benchmark before changing its size.',
  followups:[
    {title:'إزاي تفرّق بين Worker Pool saturation وEvent Loop blocking؟',answer:'Event Loop blocking يظهر كـ loop delay مرتفع مع callback أو CPU profile على Main Thread. Pool saturation يظهر كتأخر APIs التي تستخدم pool بينما network I/O والـloop قد يظلان مستجيبين؛ قِس زمن queue ونوع العمليات معًا.'},
    {title:'هل زيادة UV_THREADPOOL_SIZE إلى 64 تحل المشكلة؟',answer:'ليس تلقائيًا. قد تحسن throughput لعمليات I/O معينة، لكنها قد تزيد context switching وذاكرة threads وتنافس CPU للـcrypto. الاختيار يحتاج benchmark داخل نفس حدود container والـcores.'},
  ],
}

export const q003Code = `import { pbkdf2 } from 'node:crypto';
import { readFile } from 'node:fs';

const startedAt = performance.now();

for (let index = 0; index < 4; index += 1) {
  pbkdf2('password', 'salt', 200_000, 64, 'sha512', () => {
    console.log('hash finished', index);
  });
}

readFile('./config.json', () => {
  console.log('file waited', Math.round(performance.now() - startedAt), 'ms');
});`
