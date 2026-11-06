const make=({id,n,term,intro,quick,explanation,callout,scenario,mistakes,arabicAnswer,englishAnswer,followups,code})=>({
  question:{id,number:n,category:'REST API Design',importance:'Senior API Design',readingTime:'10 دقائق قراءة',level:'Senior',tag:term,titleParts:['اشرح ',term,'','','','','','',''],intro,quick,explanation,callout,scenario,mistakes,arabicAnswer,englishAnswer,followups:followups.map(([title,answer])=>({title,answer}))},code,
})

const rows=[
make({
 id:'Q064',n:'64',term:'RESTful API Constraints',
 intro:'REST أسلوب معماري يقوم علىresources وuniform interface وstateless interactions وcacheable representations؛ ليس مجردJSON فوقHTTP.',
 quick:[{title:'Resources',text:'URI تعرّفresource، والrepresentation تصف حالتها.'},{title:'Uniform Interface',text:'methods وstatus codes وheaders لهاsemantics موحدة.'},{title:'Stateless',text:'كلrequest تحملالسياق اللازم؛ السيرفر لا يعتمد علىconversation مخفية.'}],
 explanation:['صمّم nouns مثل /orders/{id} بدلأفعال متفرقة، واستخدمHTTP semantics للقراءة والتغيير. representation يمكن أنتختلف حسبmedia type ولا تساويdatabase row، والlinks قدتصف transitions المتاحة.','Stateless لا تمنعserver-side sessions؛ معناها أنrequest processing لا يعتمد علىحالة محادثة غيرمعلنة. caching وconditional requests تقللالحمل، بينما layered system يسمحgateways/proxies دونتغييرcontract.'],
 callout:'درجة RESTfulness ليست مسابقة أسماء. contract واضحة، idempotency، cache semantics، evolution والأمان أهم منتجميلURL.',
 scenario:'Order API تعرضcollection/item، POST ينشئ، GET cacheable، DELETE idempotent، وactions غيرCRUD مثل /orders/{id}/cancellation كresource للعملية.',
 mistakes:['verbs لكلendpoint بلاسبب.','إرجاع200 لكلoutcome.','ربطrepresentation مباشرةبجدولdatabase.'],
 arabicAnswer:'REST بتصممAPI حولresources وrepresentations وuniform HTTP semantics، معrequests مستقلة وcacheability واضحة. بستخدمmethods/status/headers حسبمعناها، وبفصلpublic contract عنdatabase model. ولوaction لهاlifecycle بعملهاresource بدلendpoint فعل عشوائي.',
 englishAnswer:'REST models resources through representations and a uniform HTTP interface. Requests are self-contained, cache semantics are explicit, and public representations are decoupled from persistence. I use method, status, and conditional-request semantics deliberately rather than treating HTTP as a generic JSON tunnel.',
 followups:[['هلREST لازمHATEOAS كامل؟','Hypermedia جزء منREST القياسية، لكندرجةتبنيها قرارcontract؛ علىالأقل اجعلtransitions والlinks قابلةللاكتشاف حيثتفيد.'],['كيف تمثلcommand غيرCRUD؟','كresource لهاحالة مثلcancellation أوexport job، أوsubresource واضح إذاالفعل domain-specific.']],
 code:`POST /orders
201 Created
Location: /orders/ord_123

GET /orders/ord_123
ETag: "order-v7"
Cache-Control: private, max-age=30`,
}),
make({
 id:'Q065',n:'65',term:'HTTP Methods, Safety & Idempotency',
 intro:'Safe method لا يُقصد بهاتغييرstate، وidempotent method تعطي نفسالأثر المقصود عندتكرارها. هذهsemantics تقودretries وcaching وclients.',
 quick:[{title:'Safe',text:'GET/HEAD/OPTIONS للقراءة ولاينبغي أنتنفذbusiness side effect.'},{title:'Idempotent',text:'PUT/DELETE أثرهما المقصود ثابت معالتكرار، حتىلوresponse اختلفت.'},{title:'POST',text:'ليستidempotent افتراضيًا؛ يمكنإضافةIdempotency-Key.'}],
 explanation:['GET قد يكتبaccess log أوmetric كأثر جانبي غيرمقصود، لكنه لايغيرresource business state. PUT يستبدلrepresentation معروفة؛ PATCH قدتكونidempotent حسبpatch format والعملية.','Network timeout لايخبرالعميل هلنفذالسيرفرالعملية. retry الآمن يحتاجmethod semantics أوidempotency record تربطkey والactor والpayload fingerprint بالنتيجة بشكلatomic.'],
 callout:'Idempotency تخصالأثر، لا أنكلresponses متطابقة. DELETE الثانية قدتعيد404 معأنالحالة النهائية مازالتresource محذوفة.',
 scenario:'Payment POST يقبلIdempotency-Key؛ أولطلب يحجزkey داخلtransaction، والتكرار بنفسpayload يعيدالنتيجة، وبpayload مختلف يرجع409.',
 mistakes:['GET يرسلemail أويلغيorder.','retry لكلPOST تلقائيًا.','تخزينidempotency بعدتنفيذside effect.'],
 arabicAnswer:'Safe تعنيالطلب لايقصد تغييرbusiness state، وidempotent تعنيتكراره له نفسالأثر النهائي. GET safe، وPUT وDELETE idempotent نظريًا، أماPOST فتحتاجidempotency key للعمليات الحساسة. بسجلkey وpayload والنتيجة atomically قبلالأثر.',
 englishAnswer:'Safe methods do not intend to change business state, while idempotent methods have the same intended effect when repeated. GET is safe; PUT and DELETE are idempotent by contract. Sensitive POST operations need an atomic idempotency-key design tied to identity and payload.',
 followups:[['هلPATCH idempotent؟','يعتمد علىoperation؛ set value يمكن، increment ليست كذلك. JSON Merge Patch غالبًا أسهل فيidempotency منappend operation.'],['هليمكنretry بعدtimeout؟','فقط عندماmethod/idempotency contract تضمنعدم تكرارالأثر، معbackoff وdeadline.']],
 code:`const claim = await idempotency.claim({
  key: req.get('Idempotency-Key'),
  actorId: req.user.id,
  fingerprint: hash(req.body),
});
if (claim.replay) return res.status(claim.status).json(claim.body);`,
}),
make({
 id:'Q066',n:'66',term:'Correct HTTP Status Codes',
 intro:'Status code تلخصoutcome بما يسمح للclients والproxies بالمشاركة الصحيحة. اخترالأكثر تحديدًا وثبتerror contract.',
 quick:[{title:'Success',text:'200 نتيجة، 201 إنشاء، 202 قبولasync، 204 نجاح بلابody.'},{title:'Client',text:'400 syntax، 401 authentication، 403 authorization، 404 absence، 409 conflict، 422 semantics.'},{title:'Server',text:'500 unknown، 502 upstream response، 503 unavailable، 504 upstream timeout.'}],
 explanation:['201 معهاLocation للresource الجديدة. 202 لا تعنيانتهاءالعمل؛ أعطstatus URL. 204 لا تحتويbody. 304 تخصconditional GET وليستsuccess body عامة.','فرّق 401 عن403، و409 لتعارضstate/version، و429 معRetry-After. لا تحولكلdomain failure إلى500، ولا تكشفresource existence إنكانanti-enumeration يتطلب404 موحدة.'],
 callout:'Status code ليستerror detail كافية؛ أضفstable machine code وmessage وfield issues وtraceId وفقProblem Details.',
 scenario:'Create export يعيد202 وLocation:/exports/e1؛ polling يعيد200 بالحالة، وعندالجاهزية303 إلىdownload URL.',
 mistakes:['200 معsuccess:false.','204 معJSON body.','500 لأخطاءvalidation أوconflict.'],
 arabicAnswer:'باختارstatus حسبoutcome: 201 للإنشاء معLocation، 202 لشغلasync معstatus resource، 204 بدونbody. أخطاءclient تتفرق بين401/403/404/409/422/429، وأخطاءdependencies بين502/503/504. وبضيفerror code ثابت.',
 englishAnswer:'I choose status codes by outcome: 201 with Location for creation, 202 plus a status resource for asynchronous work, and 204 only without a body. I distinguish authentication, authorization, absence, conflict, semantic validation, throttling, and upstream failures, then provide a stable machine-readable error body.',
 followups:[['400 أم422؟','400 للrequest غيرقابلةللفهم/parse، و422 لبنية مفهومة لكنقيمها تفشلsemantic validation؛ الثبات أهم منالجدل.'],['409 أم412؟','409 لتعارضstate عام؛ 412 عندفشلprecondition header مثلIf-Match.']],
 code:`if (!req.get('If-Match')) throw new PreconditionRequiredError();
const updated = await repo.updateIfVersion(id, req.body, req.get('If-Match'));
if (!updated) return res.status(412).type('application/problem+json').json(problem);`,
}),
make({
 id:'Q067',n:'67',term:'Offset vs Cursor Pagination',
 intro:'Pagination تحدحجمresponse والعمل. offset بسيطة لكنها تبطؤ وتتزعزع معتغيّرالبيانات؛ cursor/keyset أثبت للfeeds والبيانات الكبيرة.',
 quick:[{title:'Offset',text:'page/limit سهلة وتسمحjump، لكنتكلفتها تزيد وقدتكرر/تفقدrows.'},{title:'Cursor',text:'مؤشرopaque علىsort keys ثابتة؛ أداء واستقرارأفضل.'},{title:'Order',text:'يجبsort deterministic معunique tie-breaker.'}],
 explanation:['OFFSET N غالبًا يجعلDB تمسح/تتخطىN rows، وتغييرrows قبلالصفحة يحركالنتائج. cursor يستخدمWHERE (created_at,id) < (?,?) معindex بنفسالترتيب.','cursor يجب أن تكونopaque وموقعة أوvalidated، وتشملfilter/sort context أوترفض عندتغييرها. limit لهحدأقصى، والاستجابة تعيدnextCursor وhasMore بدلtotal دائمًا لأنCOUNT قدتكونغالية.'],
 callout:'استخدامcreatedAt وحدها غيركافٍ عندتعادلtimestamps؛ أضفid unique كtie-breaker وطبّقcomparison مركبة.',
 scenario:'Audit feed بملايينrows تستخدم(created_at DESC,id DESC) index وcursor مشفرة؛ admin table صغيرة تستخدمoffset للjump إلىصفحة.',
 mistakes:['cursor قابلةللتعديل بلاvalidation.','sort غيرثابت.', 'COUNT(*) معكلrequest كبيرة.'],
 arabicAnswer:'Offset مناسبة لبيانات صغيرة وواجهات تحتاجjump، لكنها تتدهور وتتحرك معupdates. للfeeds الكبيرة بستخدمkeyset cursor علىsort keys ثابتة معID كtie-breaker وindex مطابق، والcursor opaque مرتبطة بالfilters.',
 englishAnswer:'Offset pagination is simple and supports page jumps, but deep offsets are expensive and concurrent changes cause skips or duplicates. For large feeds I use opaque keyset cursors over a deterministic indexed order, including a unique tie-breaker and binding the cursor to filter context.',
 followups:[['كيفتنتقلللخلف؟','استخدمbefore cursor واعكسcomparison/order فيquery ثمأعدالنتيجة بترتيبالعرض، أوخزنboth cursors.'],['هلcursor تمنعكلduplicates؟','تثبتالموضع وفقsort key، لكنupdates للsort field قدتحركrecords؛ snapshot semantics تحتاجtransaction/version boundary.']],
 code:`SELECT id, created_at, payload
FROM events
WHERE tenant_id = $1
  AND (created_at, id) < ($2, $3)
ORDER BY created_at DESC, id DESC
LIMIT $4;`,
}),
make({
 id:'Q068',n:'68',term:'Filtering, Sorting & Search APIs',
 intro:'واجهةquery يجب أن تكونallow-listed وقابلةللفهرسة ومحدودةالتكلفة. تمريرfield/operator خام إلىdatabase خطر أمني وتشغيلي.',
 quick:[{title:'Filter',text:'حددfields/operators/types المسموحة صراحة.'},{title:'Sort',text:'allow-list معtie-breaker ثابت.'},{title:'Search',text:'عرّفsemantics: prefix/full-text/fuzzy واللغة والترتيب.'}],
 explanation:['يمكنصياغةfilters كquery params بسيطة أوstructured syntax، لكنparser يحولها إلىAST داخلي بعدlimits للعمق والعدد. لا تبنِSQL أوMongo object مباشرة منclient keys.','كلتركيبةfilter/sort تؤثر علىindexes. search engine قدتكونأفضل للنصوص والfacets، معeventual consistency موثقة. ضعmaximum page size وquery timeout وcost controls.'],
 callout:'مرونةquery غيرمحدودة تجعلendpoint لغةاستعلام عامة يصعبتأمينها وفهرستها. صمّمuse cases شائعة بدلexposing database.',
 scenario:'Products API تسمحcategory,price range,status وsort بـprice/createdAt؛ search text تذهب لمحركبحث، والtenant filter يُضاف server-side دائمًا.',
 mistakes:['req.query إلىORM where مباشرة.','sort بأيfield.', 'regex غيرمقيدة علىبيانات كبيرة.'],
 arabicAnswer:'بعملallow-list للfields والoperators والsort وأحوّلquery إلىAST داخلي typed، معlimits للتعقيد والحجم. tenant والauthorization filters تتضافserver-side. وبصممindexes للأنماط الشائعة وأفصلfull-text search عندالحاجة.',
 englishAnswer:'I expose an allow-listed, typed query language rather than forwarding query parameters to the database. Server-side tenant and authorization predicates are mandatory, sorting is deterministic, and query complexity is bounded. I align supported combinations with indexes and use a search engine when text-search semantics require it.',
 followups:[['كيفتمنعNoSQL injection؟','لا تدمجobject العميل؛ parse primitives/operators منallow-list وابنِquery عبرdriver API معscope ثابت.'],['كيفتوثقsearch ranking؟','عرّفfields/weights واللغة والتعادل، وأعدscore فقط إنكانcontract مستقرة ومفيدة.']],
 code:`const sort = allowedSort.get(req.query.sort ?? '-createdAt');
if (!sort) throw new ValidationError('unsupported sort');
const filter = productFilterSchema.parse(req.query);
return products.search({ ...filter, tenantId: req.user.tenantId, sort });`,
}),
make({
 id:'Q069',n:'69',term:'Bulk-operation Endpoints',
 intro:'Bulk APIs تقللround trips لكنها تحتاجحدودًا وsemantics للنتائج الجزئية وatomicity وidempotency وasync processing.',
 quick:[{title:'Bound',text:'حدأقصى للعناصر والbytes والوقت والتكلفة.'},{title:'Outcome',text:'all-or-nothing أوper-item results بعقدصريح.'},{title:'Async',text:'للأحجام الكبيرة أنشئjob resource معprogress وإلغاء.'}],
 explanation:['لوالعمليةtransaction واحدة صغيرة يمكنatomic rollback، لكنbulk كبيرة قدتقفلresources وتفشل كليًا. بديلهاper-item status معclient item ID وerrors قابلةللمعالجة.','لا تستخدمHTTP 207 بلاوعي؛ يمكن202 job أو200 response فيهاresults حسبcontract. deduplicate items، حدconcurrency للdependencies، واستعملidempotency علىjob أوكلitem حسبالأثر.'],
 callout:'Bulk endpoint ليستloop غيرمحدودة حولsingle endpoint. صمّمها كوحدةresource management ومراقبة.',
 scenario:'Import 50k users يرفعfile إلىobject storage وينشئjob؛ worker يعالجchunks، ينتجerror CSV ويعرضcounts، ويمكنresume بأمان.',
 mistakes:['Promise.all علىآلافالعناصر.','transaction ضخمة دونdeadline.', 'إخفاءpartial failures.'],
 arabicAnswer:'بحددmax items/bytes وبوضحهلbulk atomic أوpartial. الأحجام الكبيرة تتحولjob async لهاstatus وprogress وerror report. التنفيذbounded concurrency، والعناصر لهاclient IDs وidempotency حسبside effect، والنتائج الجزئية واضحة.',
 englishAnswer:'I bound bulk requests by item count, bytes, and cost, and explicitly define atomic versus partial-success semantics. Large operations become asynchronous job resources with progress and error artifacts. Execution uses bounded concurrency, stable item identifiers, and idempotency appropriate to each side effect.',
 followups:[['متىتستخدمtransaction واحدة؟','عندعدد صغير وinvariant تتطلبall-or-nothing وlock/time budget مقبول؛ غيرذلكchunking/compensation.'],['كيفتعيدfailed items؟','أعدper-item stable key وerror code، واسمحretry subset معidempotency دونإعادةالناجح.']],
 code:`const job = await imports.create({
  tenantId: principal.tenantId,
  objectKey,
  idempotencyKey,
});
res.status(202).location(\`/imports/\${job.id}\`).json({ id: job.id, status: job.status });`,
}),
make({
 id:'Q070',n:'70',term:'PUT vs PATCH & Partial Updates',
 intro:'PUT تستبدلrepresentation عندURI معروفة وهيidempotent؛ PATCH تطبقpartial document ويجب تعريفmissing/null والعمليات والتزامن.',
 quick:[{title:'PUT',text:'replacement كامل أوupsert وفقcontract، والحقول الغائبة تعودdefault/تحذف.'},{title:'PATCH',text:'تغيير جزئي بصيغة معروفة مثلMerge Patch أوJSON Patch.'},{title:'Concurrency',text:'If-Match يمنعlost updates لكليهما.'}],
 explanation:['merge عشوائي لـJSON ليسcontract. JSON Merge Patch تجعلnull حذفًا، بينماJSON Patch قائمةoperations ويمكنهاtest. DTO عادية قدلاتميزfield missing عنundefined/null.','بعدpatch أعدvalidation للentity/invariants كاملة، وطبّقauthorization لكلfield حساس. استخدمETag/version فيconditional update؛ read-modify-write بلاprecondition يكتبفوقتغييرات متزامنة.'],
 callout:'PATCH ليست ذريعة لـmass assignment. قائمةالحقول والعمليات المسموحة جزء منauthorization والdomain rules.',
 scenario:'Profile PATCH تسمحdisplayName وtimezone فقط؛ email change عملية منفصلة تتطلبverification، وrole غيرقابلةللتعديل منهذاendpoint.',
 mistakes:['اعتبارPUT partial update.','spread body داخلentity.', 'عدمتمييزnull عنmissing.'],
 arabicAnswer:'PUT تمثلreplacement كامل ومفروضتكونidempotent، أماPATCH فتطبقجزء بصيغة محددة. بعرفsemantics للmissing/null، أعملallow-list وfield authorization، وبعدالتطبيق أتحقق منinvariants كلها. وبستخدمIf-Match/version لمنعlost update.',
 englishAnswer:'PUT represents full replacement at a known URI and is idempotent. PATCH applies a defined patch document, not an arbitrary object merge. I specify missing-versus-null semantics, authorize writable fields, revalidate the resulting entity, and require an ETag or version precondition where lost updates matter.',
 followups:[['JSON Patch أمMerge Patch؟','Merge Patch أبسط للobjects لكنnull تعنيحذف؛ JSON Patch أدق للarrays/operations ويدعمtest، لكنه أعقد.'],['هلPUT تنشئresource؟','يمكنإذاclient يحددURI وcontract تسمح، فتعود201 عندالإنشاء و200/204 عندالاستبدال.']],
 code:`const expectedVersion = parseIfMatch(req.get('If-Match'));
const patch = UpdateProfilePatch.parse(req.body);
const updated = await profiles.patchIfVersion(req.user.id, patch, expectedVersion);
if (!updated) throw new PreconditionFailedError();`,
}),
]

export const restBatch1=Object.fromEntries(rows.map(row=>[row.question.id,row]))
