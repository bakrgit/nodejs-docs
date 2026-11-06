const make = ({ id, n, term, intro, quick, explanation, callout, scenario, mistakes, arabicAnswer, englishAnswer, followups, code }) => ({
  question: {
    id, number: n, category: 'NestJS Architecture', importance: 'Senior NestJS',
    readingTime: '11 دقيقة قراءة', level: 'Senior', tag: term,
    titleParts: ['اشرح ', term, '', '', '', '', '', '', ''],
    intro, quick, explanation, callout, scenario, mistakes, arabicAnswer, englishAnswer,
    followups: followups.map(([title, answer]) => ({ title, answer })),
  }, code,
})

const rows = [
  make({
    id:'Q057', n:'57', term:'Exception Filters & Centralized Error Handling',
    intro:'Exception Filter هي آخر boundary تحول exception إلىtransport response. التصميم الناضج يحافظ علىdomain semantics ويمنع تسريب التفاصيل ويربط الخطأ بالـtrace.',
    quick:[
      {title:'Mapping',text:'حوّل أخطاء domain المعروفة إلىstatus وcode ثابتين.'},
      {title:'Safety',text:'لا ترسل stack أوdriver message للعميل.'},
      {title:'Observability',text:'سجل unknown errors مرة واحدة معrequest/trace ID.'},
    ],
    explanation:[
      'HttpException مناسبة عندحدHTTP، لكن رميها داخلdomain يربط المنطق بالframework. الأفضل domain errors واضحة وfilter أوmapper مركزي يترجمها إلىProblem Details أوcontract ثابت.',
      'Filters يمكن ربطها global/controller/method. global filter المسجل عبر APP_FILTER يحصل علىDI أفضل منnew يدوي. افصل operational errors المتوقعة عنprogrammer errors، ولا تحول كلشيء إلى200 أو500 مبهم.',
    ],
    callout:'المركزة لا تعني catch عام يخفي السبب؛ حافظ علىcause chain وerror code، وحدد ownership للتسجيل حتى لا تتكرر log عدة مرات.',
    scenario:'Unique constraint فيإنشاءuser تتحول إلى409 USER_EMAIL_EXISTS، بينما connection failure تصبح503 داخليًا ولا تكشف اسم الجدول أوSQL.',
    mistakes:['إرجاع exception.message دائمًا.','رمي HttpException منdomain entity.','تسجيل نفسالخطأ فيكلطبقة.'],
    arabicAnswer:'بخلي domain ترجع أخطاء typed مستقلة عنHTTP، وException Filter مركزي يحولها لعقد ثابت فيهstatus وcode وtraceId. الأخطاء غيرالمعروفة تتسجل server-side معcause ولايتسرب stack أوبيانات infrastructure.',
    englishAnswer:'I keep domain errors transport-agnostic and map them centrally in an exception filter to a stable error contract with status, code, and trace ID. Unknown failures are logged once with their cause chain and return a safe generic response; infrastructure details never leak to clients.',
    followups:[
      ['APP_FILTER أمuseGlobalFilters؟','APP_FILTER يشارك فيDI/module lifecycle؛ useGlobalFilters معinstance خارجcontainer قد لا تحصل علىdependencies بالطريقة نفسها.'],
      ['كيف تتعامل معvalidation errors؟','وحّد شكلissues والمسارات والcodes بدون echo لبيانات حساسة، وأبق contract قابلة للversioning.'],
    ],
    code:`@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(error: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const mapped = this.errorMapper.toHttp(error);
    response.status(mapped.status).json({ ...mapped.body, traceId: currentTraceId() });
  }
}`,
  }),
  make({
    id:'Q058', n:'58', term:'DTO Transformation & Validation Boundaries',
    intro:'DTO تصف transport contract، والتحويل ينشئ command داخليًا صريحًا. خلط DTO معentity أوautomatic mapping يفتح mass assignment ويشوّش ownership.',
    quick:[
      {title:'Input DTO',text:'الشكل المسموح منclient معvalidation بنيوية.'},
      {title:'Command',text:'قيم موثقة ومشتقة يحتاجهاuse case فقط.'},
      {title:'Output DTO',text:'public projection لا تكشفentity أوحقولًا داخلية.'},
    ],
    explanation:[
      'class-transformer ينشئ instances ويعرض/excludes fields، لكنه ليس security boundary وحده. استخدم ValidationPipe strict، ثمmapper صريح يضيفactor/tenant منtrusted context لا منbody.',
      'Output serialization يجب أن تكون ثابتة وتتعامل معdates/bigints والعلاقات دونlazy-load مفاجئ. لا تجعل API contract تتبعORM schema تلقائيًا؛ كل منهما يتغير لأسباب مختلفة.',
    ],
    callout:'الـtype فيTypeScript لا يتحقق runtime. البيانات لا تصبح trusted لمجرد أنparameter مكتوب CreateUserDto.',
    scenario:'Client أرسل tenantId وisAdmin فيbody. DTO تمنعهما، mapper يأخذtenantId منprincipal، والresponse لا يعيدpasswordHash.',
    mistakes:['Object.assign(entity, dto).','استخدامentity كinput/output DTO.','الثقة فيTypeScript type وقتruntime.'],
    arabicAnswer:'بفصل input DTO عنapplication command وعنoutput DTO. ValidationPipe تتحقق runtime وتمنعunknown fields، وبعدها mapping صريح يضيفtenant والهوية منcontext موثوق. ما بعملش spread للDTO داخلentity أوORM.',
    englishAnswer:'I separate transport DTOs, application commands, domain entities, and response projections. Runtime validation rejects unknown fields, and explicit mapping injects trusted identity and tenant context. I never spread arbitrary DTOs into persistence models or expose entities as API responses.',
    followups:[
      ['هل class-transformer كافية للأمان؟','لا؛ هيconversion/serialization tool. تحتاجvalidation strict وmapping وauthorization مستقلة.'],
      ['كيف تتعامل معpartial update؟','DTO محددة للحقول القابلة للتعديل، distinguish missing from null، وapply patch داخلuse case معoptimistic concurrency.'],
    ],
    code:`const command: CreateUserCommand = {
  email: dto.email.trim().toLowerCase(),
  displayName: dto.displayName,
  tenantId: principal.tenantId,
  actorId: principal.id,
};`,
  }),
  make({
    id:'Q059', n:'59', term:'Configuration & Environment Validation',
    intro:'Configuration جزء منstartup contract. يجب قراءتها وتحويلها والتحقق منها مرة واحدة، ثمحقن typed config دون نشر process.env فيكلالتطبيق.',
    quick:[
      {title:'Validate',text:'افشل مبكرًا عندmissing أوinvalid values.'},
      {title:'Type',text:'حوّلport وboolean وduration صراحة.'},
      {title:'Secrets',text:'لا تسجلها أوتخزنها فيclient bundle أوrepository.'},
    ],
    explanation:[
      'ConfigModule.forRoot يمكنهاvalidation schema/load factories وcache. اجعل feature config namespaced، وحدد precedence بينenv وsecret manager وdefaults. لا تضعdefault آمنًا ظاهريًا لsecret مطلوبة.',
      'process.env strings وmutable global. wrapper typed يسهل الاختبار ويمنعقراءات مختلفة. secret rotation قد تحتاجprovider lifecycle منفصلة، لاافتراض أنكلconfiguration ثابتة للأبد.',
    ],
    callout:'تشغيل التطبيق بإعداد ناقص ثمفشله عندأولrequest أسوأ منرفض startup برسالة واضحة غيرحساسة.',
    scenario:'JWT_SECRET كانت undefined فيproduction وfallback إلىdev-secret. schema أزالتfallback خارجtest وأوقفتdeployment قبلاستقبالtraffic.',
    mistakes:['Boolean(process.env.FLAG).','طباعةconfig كاملة فيlogs.','قراءةprocess.env داخلdomain services.'],
    arabicAnswer:'بعتبرconfig startup contract: schema تتحقق وتحول القيم قبلlisten، وحقن config typed وnamespaced بدلprocess.env المنتشرة. الأسرار بلاdefaults إنتاجية ولا logs، والاختبار يمررconfiguration صريحة.',
    englishAnswer:'I treat configuration as a startup contract: parse and validate it before listening, expose typed namespaced configuration through DI, and keep process.env at the composition boundary. Required secrets have no production fallback and are never logged. Tests inject explicit configuration.',
    followups:[
      ['لماذا Boolean("false") خطأ؟','كلstring غيرفارغة truthy؛ استخدمparser يقبلقيمًا محددة ويرفض غيرها.'],
      ['كيف تديرrotation؟','استخدمsecret provider/cache بTTL أوpush refresh، واعرف أيclients تحتاج recreation دونقطع الطلبات.'],
    ],
    code:`const EnvSchema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});
const env = EnvSchema.parse(process.env);`,
  }),
  make({
    id:'Q060', n:'60', term:'Custom Decorators & Request Context',
    intro:'Decorators تقللtransport boilerplate وتضع metadata، لكنها قد تخفي dependencies. استخدمها لقراءة context أوإعلانpolicy، لا لتنفيذ business logic.',
    quick:[
      {title:'Parameter',text:'createParamDecorator تستخرجقيمة موثقة منExecutionContext.'},
      {title:'Metadata',text:'SetMetadata أوdecorator مركب يعلنpolicy/roles.'},
      {title:'Composition',text:'applyDecorators تجمعcontract متكرر بوضوح.'},
    ],
    explanation:[
      'CurrentUser decorator يجب أن تقرأprincipal أنشأتهاGuard، لا تعيدفكJWT أوتعملdatabase query. metadata decorator تعلن requirement ثمGuard تفسرها باستخدامReflector.',
      'Decorators تنفذ ضمنframework boundary؛ لا تستخدمها كبديل لarguments صريحة داخلservices. عنددعمGraphQL/RPC اكتبadapter للسياق أوابقdecorator transport-specific بوضوح.',
    ],
    callout:'Decorator تبدو كسطر صغير لكنها API. وثّق مصدرالقيمة، nullable semantics، ومن يضمنauthentication قبلها.',
    scenario:'@CurrentTenant تستخرجtenant الموثق و@RequirePermission تعلنpolicy. Guard تتحقق، ثمcontroller تمررIDs صريحة للuse case.',
    mistakes:['database call داخلparam decorator.','الاعتماد علىdecorator دونGuard.', 'إخفاءtenant كglobal mutable state.'],
    arabicAnswer:'بستخدم custom decorators لاستخراجcontext جهزتهاGuard أوإعلانmetadata للpolicy. ما بحطش فيهاI/O أوbusiness logic، وبمررالقيم بعدذلك صراحة للuse case. Reflector يقرأmetadata داخلGuard.',
    englishAnswer:'I use custom decorators to expose already-established request context or declare handler metadata. Guards interpret policy metadata, while parameter decorators only extract trusted values. They do not perform I/O or business logic, and application services still receive explicit arguments.',
    followups:[
      ['كيف تختبرparam decorator؟','اختبرfactory معExecutionContext مضبوطة، واختبرintegration أنGuard تسبقها وتبنيprincipal.'],
      ['هلroles metadata كافية؟','للroute coarse-grained فقط؛ resource/tenant policy تحتاجattributes داخلuse case.'],
    ],
    code:`export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().user,
);
export const RequirePermission = (permission: string) =>
  SetMetadata(PERMISSION_KEY, permission);`,
  }),
  make({
    id:'Q061', n:'61', term:'Lifecycle Hooks & Graceful Shutdown',
    intro:'Nest lifecycle hooks تنظمتهيئة providers وإيقافها. graceful shutdown يحتاجsignals مفعلة، readiness، منععمل جديد، drain بdeadline، ثمإغلاقresources.',
    quick:[
      {title:'Startup',text:'OnModuleInit ثمOnApplicationBootstrap بعدبناءgraph.'},
      {title:'Signals',text:'enableShutdownHooks لتشغيلdestroy/shutdown hooks.'},
      {title:'Drain',text:'readiness off، أوقفconsumers، انتظرin-flight ثمأغلقpools.'},
    ],
    explanation:[
      'لا تضعstartup I/O غيرمحدودة بلاtimeout. hook order يتبعmodule graph وقد لا يكونcontract مناسبًا لاعتماد ضمني؛ dependencies الصريحة أفضل. initialization failure يجب أن تمنعreadiness.',
      'OnModuleDestroy/BeforeApplicationShutdown/OnApplicationShutdown مراحل مختلفة. orchestrator قد يرسلSIGTERM ثمSIGKILL بعدمهلة، لذلك اجعلshutdown bounded وidempotent، وتعامل معHTTP keep-alive وqueues.',
    ],
    callout:'Graceful shutdown ليست process.on(SIGTERM) ثمprocess.exit. الخروج القسري قد يقطعtransactions وack messages قبلإغلاقها.',
    scenario:'Kubernetes يزيلpod منreadiness، التطبيق يوقفqueue polling، يسمح لطلبات قائمة حتى20s، يغلقDB/telemetry ثمينهيprocess.',
    mistakes:['process.exit داخلأولsignal handler.','إغلاقDB قبلإكمالin-flight.', 'عدم تفعيلshutdown hooks.'],
    arabicAnswer:'بفعلshutdown hooks، وعندSIGTERM أقفلreadiness وأوقف قبولjobs، أعملdrain للـin-flight بdeadline، ثمأغلقHTTP وDB وtelemetry. الـhooks تكونidempotent ومحدودة بزمن لأنorchestrator لديهtermination grace.',
    englishAnswer:'I enable Nest shutdown hooks and implement a bounded, idempotent drain: fail readiness, stop new queue and HTTP work, await in-flight operations within a deadline, then close database, telemetry, and other resources. Startup dependencies also have timeouts and gate readiness.',
    followups:[
      ['هل liveness تفشل وقتshutdown؟','عادةreadiness تفشل لإزالةtraffic، بينماliveness لايجب أن تقتلprocess قبلإكمالdrain.'],
      ['ماذا تفعل معqueue consumer؟','أوقفpolling أولًا، انتظرhandlers، ثمack/nack حسبsemantics وأغلقconnection.'],
    ],
    code:`const app = await NestFactory.create(AppModule);
app.enableShutdownHooks();
await app.listen(config.port);

@Injectable()
class WorkerLifecycle implements BeforeApplicationShutdown {
  async beforeApplicationShutdown() {
    await this.worker.close({ timeout: 20_000 });
  }
}`,
  }),
  make({
    id:'Q062', n:'62', term:'NestJS with Mongoose, Prisma, or TypeORM',
    intro:'اختيارdata library لا يغيرضرورة وجودpersistence boundary. integration الجيدة تديرlifecycle والمعاملات وmapping والاختبارات دونتسريبORM فيكلuse case.',
    quick:[
      {title:'Registration',text:'سجلclient/models فيinfrastructure module وأغلقها معapp.'},
      {title:'Boundary',text:'repository أوquery service تعزلpersistence semantics عندالحاجة.'},
      {title:'Transactions',text:'مررtransaction context صراحة عبرuse case كاملة.'},
    ],
    explanation:[
      'Mongoose models وTypeORM repositories وPrisma client كلهاproviders قابلة للحقن، لكنentities/documents generated types ليستdomain model بالضرورة. استخدمmapping حين توجدinvariants أوتحتاج تبديلstorage/testing.',
      'تجنب N+1 وunbounded queries، واضبطpool/timeouts. transactions يجب أن تستخدمنفسsession/manager/client؛ repository تنشئtransaction داخلكلmethod تكسرatomicity عبرعدةعمليات.',
    ],
    callout:'Repository abstraction بلاهدف قد تكونwrapper رفيعة عديمةالقيمة، لكن تمريرORM لكلطبقة يجعلcontract وtransactions والاختبارات مرتبطة بالبنية.',
    scenario:'PlaceOrder يحجزinventory ويكتبorder وoutbox فيtransaction واحدة. UnitOfWork يمررtransaction client لكلrepositories ثمpublisher يعالجoutbox لاحقًا.',
    mistakes:['PrismaClient جديد لكلrequest.','lazy relations تسببN+1.', 'transaction منفصلة فيكلrepository method.'],
    arabicAnswer:'بسجلORM client كprovider واحدة مناسبة وأديرpool والshutdown. use case تعتمد علىrepositories أوquery services عندوجودboundary مفيدة، والtransaction context تمرصراحة لكلالعمليات. بقيسN+1 وpool saturation وباختبرqueries علىdatabase حقيقية.',
    englishAnswer:'I register the database client with the correct application lifecycle, keep transaction context explicit across the whole use case, and isolate persistence behind repositories or query services where that boundary adds value. I monitor pool saturation and query counts and test important queries against a real database.',
    followups:[
      ['هلrepository ضرورية معPrisma؟','ليست دائمًا؛ استخدمها لحمايةdomain/transactions أوcontract قابلة للاختبار، وتجنبwrapper CRUD بلاsemantics.'],
      ['كيف تختبرintegration؟','database حقيقية مؤقتة أوcontainer معmigrations، fixtures مستقلة وrollback/reset مضبوط.'],
    ],
    code:`await this.prisma.$transaction(async (tx) => {
  await this.inventory.reserve(command.items, tx);
  const order = await this.orders.insert(command, tx);
  await this.outbox.append(OrderPlaced.from(order), tx);
});`,
  }),
  make({
    id:'Q063', n:'63', term:'CQRS & Advanced Patterns in NestJS',
    intro:'CQRS يفصلwrite model عنread model عندما تختلف متطلباتهما فعليًا. إدخاله مبكرًا يضاعفmodels وconsistency والعمليات دونقيمة.',
    quick:[
      {title:'Trigger',text:'تعقيدdomain أوread/write workloads مختلفة بوضوح.'},
      {title:'Cost',text:'eventual consistency وduplicate handling وoperational surface.'},
      {title:'Start',text:'ابدأ modular use cases، ثمأدخلpattern فيbounded context المحتاج.'},
    ],
    explanation:[
      'Nest CQRS توفرCommandBus/QueryBus/EventBus وsagas، لكنها لاتصنعdurability. in-process events تضيع معcrash؛ التكامل الخارجي يحتاجoutbox/broker/idempotent consumers.',
      'Event sourcing قرار أكبر منCQRS: event log مصدرالحقيقة، معschema evolution وreplay وsnapshots. لا تستخدمه فقط للحصول علىaudit log. قِسألمالنظام الحالي قبلإضافةlayers.',
    ],
    callout:'Pattern ناجحة عندما تحلconstraint موثقة. عددhandlers ليسدليلarchitecture؛ وضوحconsistency وownership هوالدليل.',
    scenario:'Marketplace يفصلcatalog search projection عاليةالقراءة عنwrite model للأسعار، ويحدثها عبرoutbox events معlag metric وrebuild path.',
    mistakes:['CQRS لكلCRUD.', 'اعتبارEventBus الداخلي durable.', 'عدم تصميمidempotency وevent versioning.'],
    arabicAnswer:'بدخلCQRS لماwrite domain معقد أوread model وscale مختلفين بشكل واضح. بفصلcommands عنqueries تدريجيًا داخلbounded context، وأحددconsistency. للأحداث الخارجية أستخدمoutbox وbroker وconsumers idempotent؛ Nest EventBus وحدها مشdurable.',
    englishAnswer:'I introduce CQRS only when write-domain complexity or read/write scaling and models genuinely diverge. I adopt it within a bounded context, define consistency expectations, and use an outbox plus durable messaging for external events. Nest command and event buses are orchestration tools, not durability guarantees.',
    followups:[
      ['CQRS بدونEvent Sourcing؟','نعم، وهوالأشهر: write database عادية معread projections؛ event sourcing اختيار مستقل.'],
      ['كيف تعرف أنprojection سليمة؟','event offsets/lag، idempotent handlers، reconciliation وrebuild procedure منsource موثوق.'],
    ],
    code:`@CommandHandler(PlaceOrder)
export class PlaceOrderHandler {
  async execute(command: PlaceOrder) {
    return this.unitOfWork.run(tx => this.orders.place(command, tx));
  }
}
// Publish durable integration events through a transactional outbox.`,
  }),
]

export const nestBatch2 = Object.fromEntries(rows.map((row) => [row.question.id, row]))
