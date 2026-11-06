const make = ({ id, n, term, intro, quick, explanation, callout, scenario, mistakes, arabicAnswer, englishAnswer, followups, code }) => ({
  question: {
    id, number: n, category: 'NestJS Architecture', importance: 'Senior NestJS',
    readingTime: '11 دقيقة قراءة', level: 'Senior', tag: term,
    titleParts: ['اشرح ', term, '', '', '', '', '', '', ''],
    intro, quick, explanation, callout, scenario, mistakes, arabicAnswer, englishAnswer,
    followups: followups.map(([title, answer]) => ({ title, answer })),
  },
  code,
})

const rows = [
  make({
    id: 'Q050', n: '50', term: 'NestJS Modules & Application Architecture',
    intro: 'الـModule في NestJS هي boundary للتجميع والـdependency graph، وليست مجرد folder. تصميمها يحدد coupling وإمكانية الاختبار والتوسع.',
    quick: [
      { title: 'Encapsulation', text: 'providers تظل خاصة ما لم تُصدّر صراحة.' },
      { title: 'Composition', text: 'imports تجلب public API لوحدة أخرى، وexports تحددها.' },
      { title: 'Boundaries', text: 'قسّم حسب capability/domain بدل طبقة تقنية عالمية ضخمة.' },
    ],
    explanation: [
      'كل Module تصف providers وcontrollers وimports وexports. الـroot module هي composition root، بينما feature modules تجمع use cases وadapters الخاصة بقدرة مثل Orders. مشاركة provider تتم عبر export/import، لا عبر إنشاء نسخة يدويًا.',
      'Global modules تقلل boilerplate لكنها تخفي dependencies وتزيد coupling؛ استخدمها فقط للبنية التحتية المحدودة. Dynamic modules مناسبة للتهيئة القابلة لإعادة الاستخدام، مع forRoot للconfiguration وforFeature للتسجيل المحلي.',
    ],
    callout: 'وجود Module لكل entity ليس هدفًا. الـboundary الجيدة تتبع ownership والتغيير والمعاملات، وتكشف API صغيرة لباقي النظام.',
    scenario: 'منصة تجارة تفصل Catalog وOrders وPayments. Orders تعتمد على PaymentPort لا على SDK الدفع مباشرة، والـcomposition root تربط adapter الإنتاجي.',
    mistakes: ['SharedModule تصدّر كل شيء.', 'circular imports تُعالج دائمًا بـforwardRef بدل إصلاح الحدود.', 'business logic داخل root module.'],
    arabicAnswer: 'الـModule بتحدد dependency boundary وpublic API من خلال imports وexports. بنظمها حسب feature أوdomain، وأخلي providers الداخلية غير مصدّرة. الـroot module تجمع الـadapters، وبتجنب global modules والـforwardRef إلا لسبب واضح.',
    englishAnswer: 'A Nest module is an encapsulation and dependency-graph boundary. I organize modules around capabilities, export a small public surface, and compose infrastructure at the application root. Global modules and forward references are exceptions because they hide coupling rather than remove it.',
    followups: [
      ['متى تستخدم Dynamic Module؟', 'عندما تحتاج package قابلة للتهيئة أوتسجيل providers حسب options، مع token واضح وforRoot/forFeature semantics.'],
      ['كيف تكسر circular dependency؟', 'أعد توزيع ownership أوأدخل port/event boundary؛ forwardRef حل مؤقت عندما تكون الدورة حقيقية ومبررة.'],
    ],
    code: `@Module({
  imports: [PaymentsModule],
  controllers: [OrdersController],
  providers: [PlaceOrder, OrdersRepository],
  exports: [PlaceOrder],
})
export class OrdersModule {}`,
  }),
  make({
    id: 'Q051', n: '51', term: 'Dependency Injection in NestJS',
    intro: 'Nest تبني graph منtokens إلىproviders ثم تحل constructor dependencies. فهم tokens وregistration أهم من مجرد وضع @Injectable.',
    quick: [
      { title: 'Token', text: 'class أوstring أوsymbol يعرّف dependency داخل container.' },
      { title: 'Provider', text: 'useClass/useValue/useFactory/useExisting تحدد طريقة الإنشاء.' },
      { title: 'Resolution', text: 'الـModule context والexports يحددان ما يمكن حقنه.' },
    ],
    explanation: [
      'التصميم الشائع هو constructor injection لأنه يجعل dependencies صريحة وقابلة للاختبار. interface TypeScript تختفي runtime، لذلك تحتاج Symbol token مع @Inject عند فصل domain port عن adapter.',
      'useFactory تدعم async configuration وحقن dependencies، وuseExisting تنشئ alias لنفس instance. لا تستخدم service locator عبر ModuleRef في business code إلا لحالات framework/dynamic resolution محدودة.',
    ],
    callout: 'DI لا تعني architecture تلقائيًا؛ لوكل services تعتمد على بعضها، فالcontainer نجحت لكن الحدود فشلت.',
    scenario: 'Payment use case يعتمد على PAYMENT_GATEWAY symbol؛ production تربطه بـStripeGateway والاختبار بـin-memory fake دون تغيير use case.',
    mistakes: ['استخدام interface كtoken runtime.', 'new Service يدويًا داخلcontroller.', 'ModuleRef كبديل للconstructor dependencies.'],
    arabicAnswer: 'Nest بتحل dependencies من provider tokens داخل module graph. بفضل constructor injection وSymbol tokens للports، وأختار useClass أوuseFactory أوuseExisting حسب lifecycle. لازم الوحدة الموردة تعمل export والوحدة المستهلكة تعمل import.',
    englishAnswer: 'Nest resolves constructor dependencies from provider tokens within the module graph. I use explicit constructor injection and symbol tokens for domain ports, selecting class, factory, value, or alias providers deliberately. Imports and exports define visibility, while manual construction bypasses lifecycle and interception.',
    followups: [
      ['useClass وuseExisting؟', 'useClass ينشئ provider حسبclass؛ useExisting alias لنفس instance المسجلة تحتtoken آخر.'],
      ['كيف تختبر provider؟', 'TestingModule تستبدل token بـfake مضبوط، مع إبقاء unit test بعيدًا عنcontainer عندما لا تحتاج framework behavior.'],
    ],
    code: `export const PAYMENT_GATEWAY = Symbol('PAYMENT_GATEWAY');

@Module({
  providers: [
    PlaceOrder,
    { provide: PAYMENT_GATEWAY, useClass: StripeGateway },
  ],
})
export class PaymentsModule {}`,
  }),
  make({
    id: 'Q052', n: '52', term: 'Provider Scopes & Performance',
    intro: 'Default providers singleton داخل application context. request وtransient scopes تغيّر عدد instances وتكلفة resolution وقد تنشر scope لأعلى graph.',
    quick: [
      { title: 'Default', text: 'instance واحدة غالبًا؛ الأفضل للخدمات stateless.' },
      { title: 'Request', text: 'instance لكلrequest وسلسلة تعتمد عليها؛ لها تكلفة واضحة.' },
      { title: 'Transient', text: 'instance لكلconsumer؛ مفيدة نادرًا لحالة محلية.' },
    ],
    explanation: [
      'request-scoped provider تجعل consumers المعتمدة عليها request-scoped أيضًا، ما يزيد allocations وDI resolution ويمنع بعض optimizations. لا تستخدمها فقط لحمل requestId؛ AsyncLocalStorage أخف غالبًا للسياق.',
      'singleton يجب ألا تحمل mutable request state. transient مناسبة لكائنات خفيفة مستقلة لكلconsumer، لكن lifecycle المعقدة وتسريب الموارد يظلان خطرًا. قِس throughput وmemory قبل اختيار scope غيرافتراضية.',
    ],
    callout: 'Scope قرار lifecycle وownership، وليس حلًا تلقائيًا لمشكلة concurrency. stateless singleton آمنة عادة في event-loop model.',
    scenario: 'Logging service كانت request-scoped لتمرير tenantId فنشرت scope لعشرات providers. استبدلت بـALS context وعادت الخدمات singleton.',
    mistakes: ['حفظ req علىsingleton.', 'جعل كلprovider request-scoped احتياطيًا.', 'افتراض transient تُدمّر تلقائيًا معresources.'],
    arabicAnswer: 'الافتراضي singleton وهو الأنسب للخدمات stateless. request scope تنشئ graph لكلطلب وقد تنتشر للـconsumers، لذلك أستخدمها فقط عندownership حقيقي، لا لمجرد request ID. transient تنشئ instance لكلconsumer. بقيس latency والallocations قبل التغيير.',
    englishAnswer: 'Singleton scope is the default and best fit for stateless services. Request scope creates a graph per request and can bubble through consumers, so I reserve it for genuine request-owned state. Transient creates per-consumer instances. For correlation context, AsyncLocalStorage is often cheaper than scope propagation.',
    followups: [
      ['ماذا يعني scope bubbling؟', 'provider singleton تعتمد علىrequest-scoped dependency لايمكن أن تظل singleton عمليًا، فتنتقل request lifecycle عبرgraph.'],
      ['هل singleton آمنة؟', 'نعم عندما تكون stateless أوتحمي shared state؛ الخطر هوmutable request-specific fields لاعدد الطلبات نفسه.'],
    ],
    code: `@Injectable({ scope: Scope.REQUEST })
export class RequestPolicy {
  constructor(@Inject(REQUEST) private readonly req: Request) {}
}

// Prefer singleton + AsyncLocalStorage for correlation metadata.`,
  }),
  make({
    id: 'Q053', n: '53', term: 'Controllers vs Providers',
    intro: 'Controller هي HTTP adapter رفيعة، بينما provider تنفذ use case أوdomain/infrastructure concern. الفصل يحمي المنطق من framework وtransport.',
    quick: [
      { title: 'Controller', text: 'تستقبل DTO وتستدعي use case وتحوّل النتيجة إلىHTTP.' },
      { title: 'Provider', text: 'تملك application logic أوadapter قابلًا لإعادة الاستخدام.' },
      { title: 'Boundary', text: 'لا تمرر Request/Response إلىdomain services.' },
    ],
    explanation: [
      'Controller تختار route/status/header وتقرأ identity الموثقة، لكنها لا تدير transaction أوتبني query معقدة. use-case provider تنسق domain وports وتعيد result/error مستقلًا عنHTTP.',
      'Repository وHTTP client وclock providers هي adapters خلفtokens. هذا يتيح transport آخر مثلqueue consumer أوGraphQL دون نسخ business rules.',
    ],
    callout: 'Thin controller لا تعني نقل controller كاملة إلىService ضخمة؛ قسّم providers حسبuse case وboundary لا حسب اسم عام.',
    scenario: 'إنشاء invoice يعمل منREST ومنscheduled job؛ كلاهما يستدعي CreateInvoice نفسه، بينما كلadapter تختار input mapping وresponse خاصًا بها.',
    mistakes: ['ORM query داخلcontroller.', 'إرجاع Response منdomain service.', 'Service واحدة تحمل كلعملياتmodule.'],
    arabicAnswer: 'الـController HTTP adapter: validation/auth context واستدعاء use case وmapping للresponse. الـproviders تحمل application/domain logic أوinfrastructure adapters. ما بمررش req/res للمنطق، وبقسم الخدمات حسبuse case علشان أقدر أعيد استخدامها وأختبرها.',
    englishAnswer: 'Controllers are thin transport adapters: they map validated input and identity to a use case, then map the result to HTTP. Providers own application behavior or infrastructure adapters. I keep Request and Response objects out of domain logic and favor focused use-case services over one oversized service.',
    followups: [
      ['أين تحدد status code؟', 'فيHTTP adapter/controller أوresponse mapper؛ domain تعيد outcome لاHTTP semantics.'],
      ['أين تبدأ transaction؟', 'عادة فيapplication use-case boundary عبرUnit of Work، لاداخلcontroller أوrepository منفردة.'],
    ],
    code: `@Post()
async create(@Body() dto: CreateOrderDto, @CurrentUser() user: Principal) {
  const order = await this.placeOrder.execute({ ...dto, actorId: user.id });
  return OrderResponse.from(order);
}`,
  }),
  make({
    id: 'Q054', n: '54', term: 'Guards vs Middleware',
    intro: 'Middleware تعمل فيHTTP pipeline قبلroute context، بينما Guard تعرف ExecutionContext والhandler metadata وتتخذ قرار السماح.',
    quick: [
      { title: 'Middleware', text: 'logging، parsing، correlation أوتهيئة عامة للrequest.' },
      { title: 'Guard', text: 'authentication/authorization مرتبطة بالroute والmetadata.' },
      { title: 'Context', text: 'Guard تعمل عبرHTTP/GraphQL/RPC حسبadapter المكتوب.' },
    ],
    explanation: [
      'Middleware تشبه Express وتنفذ حسبmodule/path، ولا تعرف تلقائيًا decorator metadata للhandler التالي. Guard تنفذ بعدmiddleware وقبلinterceptors/pipes ويمكنها قراءة Reflector وprincipal.',
      'يمكن middleware استخراج token أوcontext منخفض المستوى، لكن قرار access الأفضل فيGuard أوpolicy داخلuse case. Guard لا تغني عن object-level authorization فيdata boundary.',
    ],
    callout: 'Route guard تمنع الوصول للمسار، لكنها لا تمنع IDOR وحدها؛ تحقق منtenant/resource داخلuse case أوquery scoped.',
    scenario: 'Correlation middleware تولد requestId. AuthGuard تتحقق JWT، RolesGuard تقرأ metadata، ثمuse case تفحص ownership للinvoice.',
    mistakes: ['authorization داخلlogging middleware.', 'role guard فقط دونresource policy.', 'ربطGuard بـHTTP request مباشرة دون abstraction عندmulti-transport.'],
    arabicAnswer: 'بستخدم middleware للشغل العام المبكر زيcorrelation وlogging، وGuard لقرار الوصول لأنها تعرف handler metadata وExecutionContext. لكن authorization علىresource تظل داخلuse case أوquery scoped، مش role check فقط.',
    englishAnswer: 'Middleware is appropriate for early transport-wide concerns such as correlation and logging. Guards are authorization gates because they understand execution context and handler metadata. A guard can establish route access, but object and tenant authorization must still be enforced at the use-case or data boundary.',
    followups: [
      ['ما ترتيب التنفيذ؟', 'Middleware ثمGuards ثمinterceptors before ثمpipes ثمhandler ثمinterceptors after ثمfilters عندالخطأ، معتفاصيل حسبtransport.'],
      ['هل authentication Guard أمMiddleware؟', 'غالبًا Guard فيNest لربطها بالroute/context؛ middleware قد تستخرج metadata فقط عندحاجة عامة.'],
    ],
    code: `@Injectable()
export class PoliciesGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const handler = context.getHandler();
    const policy = this.reflector.get(POLICY_KEY, handler);
    return policy ? policy(context.switchToHttp().getRequest().user) : true;
  }
}`,
  }),
  make({
    id: 'Q055', n: '55', term: 'Pipes & Validation Architecture',
    intro: 'Pipe تحول أوتتحقق منargument قبلhandler. validation boundary تمنع بيانات غيرموثوقة من دخولuse case وتفصل transport DTO عنdomain.',
    quick: [
      { title: 'Transform', text: 'تحويل param string إلىnumber أوDTO مضبوط.' },
      { title: 'Validate', text: 'رفض الشكل والقيم غيرالمسموحة برسالة ثابتة.' },
      { title: 'Boundary', text: 'whitelist وforbid تمنع mass assignment.' },
    ],
    explanation: [
      'ValidationPipe يمكنها transform وwhitelist وforbidNonWhitelisted، لكن التحويل الضمني قد يخفي أخطاء؛ اضبطه واختبر edge cases. validation الشكلية لا تتحقق منbusiness invariants مثلرصيد أوuniqueness.',
      'DTO classes تخص transport contract. map منها إلىcommand صريح بدل تمريرobject كامل للORM. custom pipe مناسبة لقيمة محلية، بينما checks تحتاج I/O تنتمي غالبًا للuse case لتجنب hidden queries.',
    ],
    callout: 'Schema validation تثبت أنinput well-formed، لا أنها authorized أوصالحة business-wise. هذه حدود منفصلة.',
    scenario: 'UpdateUserDto كان يسمح role إضافية فحدث mass assignment. whitelist+forbid معmapping صريح جعلا الحقول المسموحة واضحة.',
    mistakes: ['enableImplicitConversion بلااختبارات.', 'DTO نفسها ORM entity.', 'database query داخلكلvalidation pipe.'],
    arabicAnswer: 'الـPipes بتحول وتتحقق منarguments قبلcontroller. بفعل whitelist وforbid للحقول الزائدة، وأعمل mapping صريح منDTO إلىcommand. التحقق البنيوي فيboundary، أما business rules والauthorization ففيuse case.',
    englishAnswer: 'Pipes transform and validate handler arguments at the transport boundary. I use strict DTOs, whitelist and reject unknown fields, and map explicitly into application commands. Structural validation does not replace authorization or business invariants, which remain in the use case.',
    followups: [
      ['هل تستخدم transform دائمًا؟', 'فقط بconfiguration صريحة؛ ParseIntPipe وأشباهها أوضح للparams، والتحويل الضمني يحتاج اختبارات.'],
      ['أين تتحقق uniqueness؟', 'داخلuse case/repository معdatabase constraint كضمان نهائي، وليس decorator validation وحدها.'],
    ],
    code: `app.useGlobalPipes(new ValidationPipe({
  transform: true,
  whitelist: true,
  forbidNonWhitelisted: true,
  transformOptions: { enableImplicitConversion: false },
}));`,
  }),
  make({
    id: 'Q056', n: '56', term: 'Interceptors & Practical Use Cases',
    intro: 'Interceptor تلف execution قبل وبعدhandler عبرObservable، فتناسب cross-cutting behavior الذي يحتاج النتيجة أوالزمن، لاكل business logic.',
    quick: [
      { title: 'Before/After', text: 'تقيس أوتضيف context ثمtransform النتيجة أوالخطأ.' },
      { title: 'Use cases', text: 'logging، metrics، caching مضبوط، serialization وtimeouts.' },
      { title: 'Caution', text: 'ترتيبها والcold Observable والstreaming تؤثر علىالسلوك.' },
    ],
    explanation: [
      'intercept يستقبل ExecutionContext وCallHandler، وnext.handle يعيدObservable. operators مثلtap/map/catchError/finalize يجب اختيارها حسبهل تريد success فقط أمcleanup دائمًا.',
      'Response mapping العام قد يكسر streams/files أويضاعف envelopes. caching يجب أن يراعيidentity وtenant وheaders وinvalidation. timeout interceptor لايلغي dependency تلقائيًا دونAbortSignal.',
    ],
    callout: 'Interceptor مكان جيد للقياس، لكنها لا تمنح cancellation أوtransaction semantics تلقائيًا؛ انشر السياق للطبقات التي تنفذ العمل.',
    scenario: 'Metrics interceptor تسجلroute template وstatus والمدة فيfinalize، وتتجنبraw URL لتقليل cardinality، وتقرأtrace context.',
    mistakes: ['map لكلresponse بما فيهاstreams.', 'cache key بلاtenant/user.', 'tap فقط للمدة فيفقد error/cancel paths.'],
    arabicAnswer: 'الـInterceptor بتلف handler قبل وبعد التنفيذ، فمناسبة للmetrics والlogging والserialization أوcaching المدروس. بستخدم finalize للقياس الكامل، وأستثني streams، وأعرف إنtimeout وحدها لا تلغي I/O إلا لو مررت cancellation.',
    englishAnswer: 'Interceptors wrap handler execution and are useful for metrics, logging, serialization, carefully keyed caching, and deadline policies. I account for ordering, errors, cancellation, and streaming responses. A timeout operator stops waiting but does not automatically cancel downstream work.',
    followups: [
      ['tap أمfinalize للmetrics؟', 'finalize تعمل عندcomplete/error/unsubscribe؛ tap يحتاجhandlers متعددة وقد يفوّت مسارًا إن كُتب بشكل ناقص.'],
      ['متى لا تستخدمInterceptor؟', 'business rule أوresource authorization أوlogic خاصة بحالة واحدة؛ ضعها فيuse case واضح.'],
    ],
    code: `intercept(ctx: ExecutionContext, next: CallHandler) {
  const started = performance.now();
  return next.handle().pipe(finalize(() => {
    this.metrics.observe(routeTemplate(ctx), performance.now() - started);
  }));
}`,
  }),
]

export const nestBatch1 = Object.fromEntries(rows.map((row) => [row.question.id, row]))
