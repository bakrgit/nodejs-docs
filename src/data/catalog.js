export const catalogCategories = [
  {
    "id": "01",
    "title": "Node.js Runtime & Internals",
    "subtitle": "الـ Runtime والـ Internals",
    "start": "Q001",
    "end": "Q020",
    "count": 20
  },
  {
    "id": "02",
    "title": "Advanced Async Programming",
    "subtitle": "البرمجة غير المتزامنة",
    "start": "Q021",
    "end": "Q034",
    "count": 14
  },
  {
    "id": "03",
    "title": "Express.js Architecture",
    "subtitle": "معمارية Express.js",
    "start": "Q035",
    "end": "Q049",
    "count": 15
  },
  {
    "id": "04",
    "title": "NestJS Architecture",
    "subtitle": "معمارية NestJS",
    "start": "Q050",
    "end": "Q063",
    "count": 14
  },
  {
    "id": "05",
    "title": "REST API Design",
    "subtitle": "تصميم REST APIs",
    "start": "Q064",
    "end": "Q078",
    "count": 15
  },
  {
    "id": "06",
    "title": "Security & Authentication",
    "subtitle": "الأمان والـ Authentication",
    "start": "Q079",
    "end": "Q096",
    "count": 18
  },
  {
    "id": "07",
    "title": "MongoDB Data Modeling",
    "subtitle": "تصميم البيانات في MongoDB",
    "start": "Q097",
    "end": "Q116",
    "count": 20
  },
  {
    "id": "08",
    "title": "MongoDB Performance & Operations",
    "subtitle": "الأداء والعمليات في MongoDB",
    "start": "Q117",
    "end": "Q134",
    "count": 18
  },
  {
    "id": "09",
    "title": "SQL & PostgreSQL Engineering",
    "subtitle": "هندسة SQL وPostgreSQL",
    "start": "Q135",
    "end": "Q152",
    "count": 18
  },
  {
    "id": "10",
    "title": "Redis & Caching",
    "subtitle": "Redis والـ Caching",
    "start": "Q153",
    "end": "Q162",
    "count": 10
  },
  {
    "id": "11",
    "title": "Queues & Event-Driven Systems",
    "subtitle": "الـ Queues والأنظمة الحدثية",
    "start": "Q163",
    "end": "Q174",
    "count": 12
  },
  {
    "id": "12",
    "title": "Real-Time Systems",
    "subtitle": "أنظمة Real-Time",
    "start": "Q175",
    "end": "Q184",
    "count": 10
  },
  {
    "id": "13",
    "title": "Testing & Code Quality",
    "subtitle": "الاختبارات وجودة الكود",
    "start": "Q185",
    "end": "Q196",
    "count": 12
  },
  {
    "id": "14",
    "title": "Observability & Reliability",
    "subtitle": "المراقبة والاعتمادية",
    "start": "Q197",
    "end": "Q208",
    "count": 12
  },
  {
    "id": "15",
    "title": "DevOps & Deployment",
    "subtitle": "DevOps والنشر",
    "start": "Q209",
    "end": "Q218",
    "count": 10
  },
  {
    "id": "16",
    "title": "System Design & Distributed Systems",
    "subtitle": "System Design والأنظمة الموزعة",
    "start": "Q219",
    "end": "Q250",
    "count": 32
  }
]

const rawQuestionCatalog = [
  {
    "id": "Q001",
    "title": "How can Node.js handle thousands of concurrent requests?",
    "slug": "how-can-node-js-handle-thousands-of-concurrent-requests",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q002",
    "title": "Explain the Node.js Event Loop and its phases.",
    "slug": "explain-the-node-js-event-loop-and-its-phases",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q003",
    "title": "What is libuv, and what does its Worker Pool handle?",
    "slug": "what-is-libuv-and-what-does-its-worker-pool-handle",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q004",
    "title": "Explain process.nextTick, Promise Microtasks, and execution ordering.",
    "slug": "explain-process-nexttick-promise-microtasks-and-execution-ordering",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q005",
    "title": "Explain setTimeout, setImmediate, and their ordering differences.",
    "slug": "explain-settimeout-setimmediate-and-their-ordering-differences",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q006",
    "title": "Explain Blocking vs Non-Blocking execution in Node.js.",
    "slug": "explain-blocking-vs-non-blocking-execution-in-node-js",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q007",
    "title": "When should you use Worker Threads?",
    "slug": "when-should-you-use-worker-threads",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q008",
    "title": "Compare Worker Threads, Cluster, and Child Processes.",
    "slug": "compare-worker-threads-cluster-and-child-processes",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q009",
    "title": "How does Node.js manage processes and inter-process communication?",
    "slug": "how-does-node-js-manage-processes-and-inter-process-communication",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q010",
    "title": "Explain Node.js Streams and the pipeline API.",
    "slug": "explain-node-js-streams-and-the-pipeline-api",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q011",
    "title": "What is Backpressure, and how should it be handled?",
    "slug": "what-is-backpressure-and-how-should-it-be-handled",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q012",
    "title": "Explain Buffers, binary data, and memory considerations.",
    "slug": "explain-buffers-binary-data-and-memory-considerations",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q013",
    "title": "Explain V8 memory management and Garbage Collection.",
    "slug": "explain-v8-memory-management-and-garbage-collection",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q014",
    "title": "How do you identify and fix memory leaks in Node.js?",
    "slug": "how-do-you-identify-and-fix-memory-leaks-in-node-js",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q015",
    "title": "How do you profile CPU-intensive operations?",
    "slug": "how-do-you-profile-cpu-intensive-operations",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q016",
    "title": "Explain AsyncLocalStorage and request-scoped context.",
    "slug": "explain-asynclocalstorage-and-request-scoped-context",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q017",
    "title": "Explain CommonJS vs ES Modules and module loading.",
    "slug": "explain-commonjs-vs-es-modules-and-module-loading",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q018",
    "title": "How does EventEmitter work, and what problems can it cause?",
    "slug": "how-does-eventemitter-work-and-what-problems-can-it-cause",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q019",
    "title": "How should a production application handle unhandled errors and process failures?",
    "slug": "how-should-a-production-application-handle-unhandled-errors-and-process-failures",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q020",
    "title": "Explain Graceful Shutdown in a Node.js production server.",
    "slug": "explain-graceful-shutdown-in-a-node-js-production-server",
    "categoryId": "01",
    "status": "draft"
  },
  {
    "id": "Q021",
    "title": "Callbacks vs Promises vs async/await.",
    "slug": "callbacks-vs-promises-vs-async-await",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q022",
    "title": "How does async/await transform asynchronous control flow and error propagation?",
    "slug": "how-does-async-await-transform-asynchronous-control-flow-and-error-propagation",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q023",
    "title": "Compare Promise.all, allSettled, race, and any.",
    "slug": "compare-promise-all-allsettled-race-and-any",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q024",
    "title": "How do you limit concurrency when processing thousands of asynchronous tasks?",
    "slug": "how-do-you-limit-concurrency-when-processing-thousands-of-asynchronous-tasks",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q025",
    "title": "Explain Race Conditions in asynchronous JavaScript.",
    "slug": "explain-race-conditions-in-asynchronous-javascript",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q026",
    "title": "When are Mutexes, Semaphores, or concurrency limits useful?",
    "slug": "when-are-mutexes-semaphores-or-concurrency-limits-useful",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q027",
    "title": "How does AbortController work, and what can cancellation actually guarantee?",
    "slug": "how-does-abortcontroller-work-and-what-can-cancellation-actually-guarantee",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q028",
    "title": "How should you implement timeouts and deadlines for external APIs?",
    "slug": "how-should-you-implement-timeouts-and-deadlines-for-external-apis",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q029",
    "title": "Explain retry policies, exponential backoff, and jitter.",
    "slug": "explain-retry-policies-exponential-backoff-and-jitter",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q030",
    "title": "Explain Async Iterators and for-await-of.",
    "slug": "explain-async-iterators-and-for-await-of",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q031",
    "title": "How can unresolved Promises and uncontrolled async tasks cause resource issues?",
    "slug": "how-can-unresolved-promises-and-uncontrolled-async-tasks-cause-resource-issues",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q032",
    "title": "How should errors propagate across asynchronous layers?",
    "slug": "how-should-errors-propagate-across-asynchronous-layers",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q033",
    "title": "Why must retryable asynchronous operations be idempotent?",
    "slug": "why-must-retryable-asynchronous-operations-be-idempotent",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q034",
    "title": "How do you diagnose Event Loop starvation and asynchronous scheduling problems?",
    "slug": "how-do-you-diagnose-event-loop-starvation-and-asynchronous-scheduling-problems",
    "categoryId": "02",
    "status": "draft"
  },
  {
    "id": "Q035",
    "title": "Explain the Express.js request lifecycle.",
    "slug": "explain-the-express-js-request-lifecycle",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q036",
    "title": "How does Middleware execution work?",
    "slug": "how-does-middleware-execution-work",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q037",
    "title": "Explain next(), next(err), and error propagation.",
    "slug": "explain-next-next-err-and-error-propagation",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q038",
    "title": "How should you handle synchronous and asynchronous errors, including Express version differences?",
    "slug": "how-should-you-handle-synchronous-and-asynchronous-errors-including-express-version-differences",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q039",
    "title": "Design Controllers, Services, Repositories, and domain boundaries.",
    "slug": "design-controllers-services-repositories-and-domain-boundaries",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q040",
    "title": "How should request validation and DTO-like schemas be implemented?",
    "slug": "how-should-request-validation-and-dto-like-schemas-be-implemented",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q041",
    "title": "How do you design standardized API responses and error handling?",
    "slug": "how-do-you-design-standardized-api-responses-and-error-handling",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q042",
    "title": "How do you handle file uploads and streaming responses safely?",
    "slug": "how-do-you-handle-file-uploads-and-streaming-responses-safely",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q043",
    "title": "How do compression, streaming, and payload sizes affect Express performance?",
    "slug": "how-do-compression-streaming-and-payload-sizes-affect-express-performance",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q044",
    "title": "What are the security implications of proxies and trust proxy configuration?",
    "slug": "what-are-the-security-implications-of-proxies-and-trust-proxy-configuration",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q045",
    "title": "How do you implement rate limiting in Express?",
    "slug": "how-do-you-implement-rate-limiting-in-express",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q046",
    "title": "How do you propagate request IDs and context across Middleware?",
    "slug": "how-do-you-propagate-request-ids-and-context-across-middleware",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q047",
    "title": "How should authentication and authorization Middleware be organized?",
    "slug": "how-should-authentication-and-authorization-middleware-be-organized",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q048",
    "title": "What happens when an HTTP client disconnects, and how should the server react?",
    "slug": "what-happens-when-an-http-client-disconnects-and-how-should-the-server-react",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q049",
    "title": "How do you structure and test a large Express application?",
    "slug": "how-do-you-structure-and-test-a-large-express-application",
    "categoryId": "03",
    "status": "draft"
  },
  {
    "id": "Q050",
    "title": "Explain NestJS Modules and application architecture.",
    "slug": "explain-nestjs-modules-and-application-architecture",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q051",
    "title": "How does Dependency Injection work in NestJS?",
    "slug": "how-does-dependency-injection-work-in-nestjs",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q052",
    "title": "Explain Provider Scopes and their performance implications.",
    "slug": "explain-provider-scopes-and-their-performance-implications",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q053",
    "title": "Explain Controllers and Providers responsibilities.",
    "slug": "explain-controllers-and-providers-responsibilities",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q054",
    "title": "Guards vs Middleware: when should each be used?",
    "slug": "guards-vs-middleware-when-should-each-be-used",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q055",
    "title": "Pipes and validation architecture.",
    "slug": "pipes-and-validation-architecture",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q056",
    "title": "Interceptors and their practical use cases.",
    "slug": "interceptors-and-their-practical-use-cases",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q057",
    "title": "Exception Filters and centralized error handling.",
    "slug": "exception-filters-and-centralized-error-handling",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q058",
    "title": "DTOs, transformation, and validation boundaries.",
    "slug": "dtos-transformation-and-validation-boundaries",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q059",
    "title": "Configuration management and environment validation.",
    "slug": "configuration-management-and-environment-validation",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q060",
    "title": "Custom Decorators and request context.",
    "slug": "custom-decorators-and-request-context",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q061",
    "title": "NestJS lifecycle hooks and application shutdown.",
    "slug": "nestjs-lifecycle-hooks-and-application-shutdown",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q062",
    "title": "Integrating NestJS with Mongoose, Prisma, or TypeORM.",
    "slug": "integrating-nestjs-with-mongoose-prisma-or-typeorm",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q063",
    "title": "When should you introduce CQRS or complex architectural patterns in NestJS?",
    "slug": "when-should-you-introduce-cqrs-or-complex-architectural-patterns-in-nestjs",
    "categoryId": "04",
    "status": "draft"
  },
  {
    "id": "Q064",
    "title": "What makes an API RESTful?",
    "slug": "what-makes-an-api-restful",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q065",
    "title": "Explain HTTP methods, safety, and idempotency.",
    "slug": "explain-http-methods-safety-and-idempotency",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q066",
    "title": "How do you choose correct HTTP status codes?",
    "slug": "how-do-you-choose-correct-http-status-codes",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q067",
    "title": "Offset vs Cursor Pagination.",
    "slug": "offset-vs-cursor-pagination",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q068",
    "title": "How should filtering, sorting, and searching APIs be designed?",
    "slug": "how-should-filtering-sorting-and-searching-apis-be-designed",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q069",
    "title": "How do you design bulk-operation endpoints?",
    "slug": "how-do-you-design-bulk-operation-endpoints",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q070",
    "title": "PUT vs PATCH and partial update semantics.",
    "slug": "put-vs-patch-and-partial-update-semantics",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q071",
    "title": "Explain ETags and Optimistic Concurrency Control.",
    "slug": "explain-etags-and-optimistic-concurrency-control",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q072",
    "title": "When and how should APIs be versioned?",
    "slug": "when-and-how-should-apis-be-versioned",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q073",
    "title": "Design consistent API errors, including Problem Details.",
    "slug": "design-consistent-api-errors-including-problem-details",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q074",
    "title": "How should OpenAPI contracts and generated API documentation be maintained?",
    "slug": "how-should-openapi-contracts-and-generated-api-documentation-be-maintained",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q075",
    "title": "Request validation vs business-domain invariants.",
    "slug": "request-validation-vs-business-domain-invariants",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q076",
    "title": "How should large file uploads and downloads be designed?",
    "slug": "how-should-large-file-uploads-and-downloads-be-designed",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q077",
    "title": "How do you design reliable webhook APIs?",
    "slug": "how-do-you-design-reliable-webhook-apis",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q078",
    "title": "REST vs GraphQL vs BFF: architectural trade-offs.",
    "slug": "rest-vs-graphql-vs-bff-architectural-trade-offs",
    "categoryId": "05",
    "status": "draft"
  },
  {
    "id": "Q079",
    "title": "Authentication vs Authorization.",
    "slug": "authentication-vs-authorization",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q080",
    "title": "Sessions vs JWT authentication.",
    "slug": "sessions-vs-jwt-authentication",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q081",
    "title": "Explain HttpOnly, Secure, and SameSite Cookies.",
    "slug": "explain-httponly-secure-and-samesite-cookies",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q082",
    "title": "Design Access Token and Refresh Token rotation.",
    "slug": "design-access-token-and-refresh-token-rotation",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q083",
    "title": "OAuth 2.0 vs OpenID Connect.",
    "slug": "oauth-2-0-vs-openid-connect",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q084",
    "title": "Password hashing: bcrypt, scrypt, and Argon2 considerations.",
    "slug": "password-hashing-bcrypt-scrypt-and-argon2-considerations",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q085",
    "title": "Multi-Factor Authentication and secure recovery flows.",
    "slug": "multi-factor-authentication-and-secure-recovery-flows",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q086",
    "title": "How do you prevent account enumeration and credential-stuffing attacks?",
    "slug": "how-do-you-prevent-account-enumeration-and-credential-stuffing-attacks",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q087",
    "title": "RBAC vs ABAC and permission modeling.",
    "slug": "rbac-vs-abac-and-permission-modeling",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q088",
    "title": "How do you enforce authorization in a multi-tenant SaaS application?",
    "slug": "how-do-you-enforce-authorization-in-a-multi-tenant-saas-application",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q089",
    "title": "Explain Broken Object Level Authorization and IDOR vulnerabilities.",
    "slug": "explain-broken-object-level-authorization-and-idor-vulnerabilities",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q090",
    "title": "CSRF vs XSS: differences and mitigations.",
    "slug": "csrf-vs-xss-differences-and-mitigations",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q091",
    "title": "SQL Injection, NoSQL Injection, and safe database access.",
    "slug": "sql-injection-nosql-injection-and-safe-database-access",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q092",
    "title": "Explain CORS and browser preflight requests.",
    "slug": "explain-cors-and-browser-preflight-requests",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q093",
    "title": "What is SSRF, and how can backend systems defend against it?",
    "slug": "what-is-ssrf-and-how-can-backend-systems-defend-against-it",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q094",
    "title": "Secure secrets management and environment configuration.",
    "slug": "secure-secrets-management-and-environment-configuration",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q095",
    "title": "Brute-force protection, throttling, and login rate limiting.",
    "slug": "brute-force-protection-throttling-and-login-rate-limiting",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q096",
    "title": "Secure logout, session revocation, and audit trails.",
    "slug": "secure-logout-session-revocation-and-audit-trails",
    "categoryId": "06",
    "status": "draft"
  },
  {
    "id": "Q097",
    "title": "How does MongoDB organize Documents, Collections, and Databases?",
    "slug": "how-does-mongodb-organize-documents-collections-and-databases",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q098",
    "title": "Embedded Documents vs References.",
    "slug": "embedded-documents-vs-references",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q099",
    "title": "How do you evolve MongoDB schemas safely?",
    "slug": "how-do-you-evolve-mongodb-schemas-safely",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q100",
    "title": "How do access patterns influence document design?",
    "slug": "how-do-access-patterns-influence-document-design",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q101",
    "title": "Design Products, Orders, and Order Items for an ERP/POS system.",
    "slug": "design-products-orders-and-order-items-for-an-erp-pos-system",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q102",
    "title": "Design secure Multi-Tenant data isolation in MongoDB.",
    "slug": "design-secure-multi-tenant-data-isolation-in-mongodb",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q103",
    "title": "How should identifiers and compound business keys be modeled?",
    "slug": "how-should-identifiers-and-compound-business-keys-be-modeled",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q104",
    "title": "Explain Single-Field Indexes.",
    "slug": "explain-single-field-indexes",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q105",
    "title": "Explain Compound Indexes and field ordering.",
    "slug": "explain-compound-indexes-and-field-ordering",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q106",
    "title": "Unique, Partial, and Sparse Indexes.",
    "slug": "unique-partial-and-sparse-indexes",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q107",
    "title": "How do Multikey Indexes work?",
    "slug": "how-do-multikey-indexes-work",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q108",
    "title": "Text Search vs dedicated search solutions.",
    "slug": "text-search-vs-dedicated-search-solutions",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q109",
    "title": "Explain MongoDB Aggregation Pipeline.",
    "slug": "explain-mongodb-aggregation-pipeline",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q110",
    "title": "Explain $lookup and when document joins are appropriate.",
    "slug": "explain-lookup-and-when-document-joins-are-appropriate",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q111",
    "title": "Explain $group, window operations, and reporting aggregations.",
    "slug": "explain-group-window-operations-and-reporting-aggregations",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q112",
    "title": "How do projections affect query behavior and efficiency?",
    "slug": "how-do-projections-affect-query-behavior-and-efficiency",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q113",
    "title": "Mongoose Populate vs Aggregation.",
    "slug": "mongoose-populate-vs-aggregation",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q114",
    "title": "Mongoose Lean Queries and document hydration.",
    "slug": "mongoose-lean-queries-and-document-hydration",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q115",
    "title": "Explain MongoDB Change Streams.",
    "slug": "explain-mongodb-change-streams",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q116",
    "title": "TTL Indexes, lifecycle management, and data expiration.",
    "slug": "ttl-indexes-lifecycle-management-and-data-expiration",
    "categoryId": "07",
    "status": "draft"
  },
  {
    "id": "Q117",
    "title": "How do you analyze queries using explain()?",
    "slug": "how-do-you-analyze-queries-using-explain",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q118",
    "title": "What is a Covered Query?",
    "slug": "what-is-a-covered-query",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q119",
    "title": "How do Indexes affect writes, storage, and memory?",
    "slug": "how-do-indexes-affect-writes-storage-and-memory",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q120",
    "title": "Explain MongoDB Transactions and Sessions.",
    "slug": "explain-mongodb-transactions-and-sessions",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q121",
    "title": "How should transient transaction errors and retries be handled?",
    "slug": "how-should-transient-transaction-errors-and-retries-be-handled",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q122",
    "title": "Atomic Updates vs Multi-Document Transactions.",
    "slug": "atomic-updates-vs-multi-document-transactions",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q123",
    "title": "Explain Optimistic Concurrency in MongoDB.",
    "slug": "explain-optimistic-concurrency-in-mongodb",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q124",
    "title": "How do you prevent overselling inventory under concurrent requests?",
    "slug": "how-do-you-prevent-overselling-inventory-under-concurrent-requests",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q125",
    "title": "Explain Read Concern and Write Concern.",
    "slug": "explain-read-concern-and-write-concern",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q126",
    "title": "Replica Sets and Read Preference.",
    "slug": "replica-sets-and-read-preference",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q127",
    "title": "What consistency guarantees does MongoDB provide?",
    "slug": "what-consistency-guarantees-does-mongodb-provide",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q128",
    "title": "Explain MongoDB Sharding.",
    "slug": "explain-mongodb-sharding",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q129",
    "title": "How do you select a Shard Key?",
    "slug": "how-do-you-select-a-shard-key",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q130",
    "title": "What causes hotspots in sharded databases?",
    "slug": "what-causes-hotspots-in-sharded-databases",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q131",
    "title": "MongoDB Connection Pooling and resource limits.",
    "slug": "mongodb-connection-pooling-and-resource-limits",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q132",
    "title": "Bulk Writes and efficient batch processing.",
    "slug": "bulk-writes-and-efficient-batch-processing",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q133",
    "title": "How do you identify and troubleshoot slow MongoDB queries?",
    "slug": "how-do-you-identify-and-troubleshoot-slow-mongodb-queries",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q134",
    "title": "Backup, Restore, and disaster recovery for MongoDB.",
    "slug": "backup-restore-and-disaster-recovery-for-mongodb",
    "categoryId": "08",
    "status": "draft"
  },
  {
    "id": "Q135",
    "title": "Relational data modeling and normalization.",
    "slug": "relational-data-modeling-and-normalization",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q136",
    "title": "Foreign Keys, Constraints, and referential integrity.",
    "slug": "foreign-keys-constraints-and-referential-integrity",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q137",
    "title": "INNER JOIN, LEFT JOIN, and join performance.",
    "slug": "inner-join-left-join-and-join-performance",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q138",
    "title": "B-tree Indexes and common PostgreSQL index types.",
    "slug": "b-tree-indexes-and-common-postgresql-index-types",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q139",
    "title": "Composite Indexes and query patterns.",
    "slug": "composite-indexes-and-query-patterns",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q140",
    "title": "How do you read EXPLAIN ANALYZE?",
    "slug": "how-do-you-read-explain-analyze",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q141",
    "title": "What is the N+1 Query problem?",
    "slug": "what-is-the-n-1-query-problem",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q142",
    "title": "Explain ACID Transactions.",
    "slug": "explain-acid-transactions",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q143",
    "title": "Explain Transaction Isolation Levels.",
    "slug": "explain-transaction-isolation-levels",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q144",
    "title": "What is MVCC in PostgreSQL?",
    "slug": "what-is-mvcc-in-postgresql",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q145",
    "title": "Row Locks, Deadlocks, and lock contention.",
    "slug": "row-locks-deadlocks-and-lock-contention",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q146",
    "title": "UPSERT and ON CONFLICT.",
    "slug": "upsert-and-on-conflict",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q147",
    "title": "Cursor vs Offset Pagination in SQL.",
    "slug": "cursor-vs-offset-pagination-in-sql",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q148",
    "title": "Safe database migrations with minimal downtime.",
    "slug": "safe-database-migrations-with-minimal-downtime",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q149",
    "title": "Connection Pooling and PostgreSQL resource management.",
    "slug": "connection-pooling-and-postgresql-resource-management",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q150",
    "title": "Query Planner decisions and statistics.",
    "slug": "query-planner-decisions-and-statistics",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q151",
    "title": "How do you optimize complex analytical and reporting queries?",
    "slug": "how-do-you-optimize-complex-analytical-and-reporting-queries",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q152",
    "title": "PostgreSQL vs MongoDB: when should each be selected?",
    "slug": "postgresql-vs-mongodb-when-should-each-be-selected",
    "categoryId": "09",
    "status": "draft"
  },
  {
    "id": "Q153",
    "title": "What is Redis, and when should it be used?",
    "slug": "what-is-redis-and-when-should-it-be-used",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q154",
    "title": "Explain Cache-Aside.",
    "slug": "explain-cache-aside",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q155",
    "title": "TTL and Cache Invalidation strategies.",
    "slug": "ttl-and-cache-invalidation-strategies",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q156",
    "title": "Cache Stampede and protection strategies.",
    "slug": "cache-stampede-and-protection-strategies",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q157",
    "title": "Distributed Rate Limiting using Redis.",
    "slug": "distributed-rate-limiting-using-redis",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q158",
    "title": "Distributed Locks and their correctness limitations.",
    "slug": "distributed-locks-and-their-correctness-limitations",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q159",
    "title": "Redis Pub/Sub vs Redis Streams.",
    "slug": "redis-pub-sub-vs-redis-streams",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q160",
    "title": "Eviction Policies and memory management.",
    "slug": "eviction-policies-and-memory-management",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q161",
    "title": "Choosing Redis data structures for backend workloads.",
    "slug": "choosing-redis-data-structures-for-backend-workloads",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q162",
    "title": "Redis availability, persistence, and consistency trade-offs.",
    "slug": "redis-availability-persistence-and-consistency-trade-offs",
    "categoryId": "10",
    "status": "draft"
  },
  {
    "id": "Q163",
    "title": "Background Jobs vs synchronous request processing.",
    "slug": "background-jobs-vs-synchronous-request-processing",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q164",
    "title": "How does BullMQ work?",
    "slug": "how-does-bullmq-work",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q165",
    "title": "Message acknowledgment, redelivery, and processing guarantees.",
    "slug": "message-acknowledgment-redelivery-and-processing-guarantees",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q166",
    "title": "Retry Policies, Backoff, and Dead-Letter Queues.",
    "slug": "retry-policies-backoff-and-dead-letter-queues",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q167",
    "title": "Designing idempotent workers.",
    "slug": "designing-idempotent-workers",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q168",
    "title": "Explain the Transactional Outbox Pattern.",
    "slug": "explain-the-transactional-outbox-pattern",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q169",
    "title": "Inbox Pattern and consumer deduplication.",
    "slug": "inbox-pattern-and-consumer-deduplication",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q170",
    "title": "Message ordering and partitioning.",
    "slug": "message-ordering-and-partitioning",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q171",
    "title": "Saga Pattern: Choreography vs Orchestration.",
    "slug": "saga-pattern-choreography-vs-orchestration",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q172",
    "title": "RabbitMQ vs Kafka vs Redis Streams.",
    "slug": "rabbitmq-vs-kafka-vs-redis-streams",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q173",
    "title": "Eventual Consistency and business workflows.",
    "slug": "eventual-consistency-and-business-workflows",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q174",
    "title": "Queue monitoring, worker scaling, and Backpressure.",
    "slug": "queue-monitoring-worker-scaling-and-backpressure",
    "categoryId": "11",
    "status": "draft"
  },
  {
    "id": "Q175",
    "title": "WebSockets vs SSE vs HTTP Polling.",
    "slug": "websockets-vs-sse-vs-http-polling",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q176",
    "title": "WebSocket connection lifecycle and authentication.",
    "slug": "websocket-connection-lifecycle-and-authentication",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q177",
    "title": "Reconnection, missed messages, and resynchronization.",
    "slug": "reconnection-missed-messages-and-resynchronization",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q178",
    "title": "Rooms, channels, and tenant isolation.",
    "slug": "rooms-channels-and-tenant-isolation",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q179",
    "title": "Delivery guarantees and duplicate real-time messages.",
    "slug": "delivery-guarantees-and-duplicate-real-time-messages",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q180",
    "title": "Presence tracking and connection state.",
    "slug": "presence-tracking-and-connection-state",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q181",
    "title": "Redis Adapters and scaling Socket.IO.",
    "slug": "redis-adapters-and-scaling-socket-io",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q182",
    "title": "Heartbeats, timeouts, and stale connections.",
    "slug": "heartbeats-timeouts-and-stale-connections",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q183",
    "title": "Backpressure in real-time event delivery.",
    "slug": "backpressure-in-real-time-event-delivery",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q184",
    "title": "Securing real-time APIs and preventing cross-tenant data leakage.",
    "slug": "securing-real-time-apis-and-preventing-cross-tenant-data-leakage",
    "categoryId": "12",
    "status": "draft"
  },
  {
    "id": "Q185",
    "title": "Unit Tests vs Integration Tests vs E2E Tests.",
    "slug": "unit-tests-vs-integration-tests-vs-e2e-tests",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q186",
    "title": "Test Pyramid and testing strategy trade-offs.",
    "slug": "test-pyramid-and-testing-strategy-trade-offs",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q187",
    "title": "Testing Express APIs using Supertest.",
    "slug": "testing-express-apis-using-supertest",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q188",
    "title": "Testing MongoDB repositories and transactions.",
    "slug": "testing-mongodb-repositories-and-transactions",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q189",
    "title": "Contract Testing between frontend and backend.",
    "slug": "contract-testing-between-frontend-and-backend",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q190",
    "title": "Mocking external services correctly.",
    "slug": "mocking-external-services-correctly",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q191",
    "title": "Testing Race Conditions and concurrent requests.",
    "slug": "testing-race-conditions-and-concurrent-requests",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q192",
    "title": "Property-Based Testing and invariant testing.",
    "slug": "property-based-testing-and-invariant-testing",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q193",
    "title": "Load Testing using k6 or equivalent tools.",
    "slug": "load-testing-using-k6-or-equivalent-tools",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q194",
    "title": "Fault Injection and failure-path testing.",
    "slug": "fault-injection-and-failure-path-testing",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q195",
    "title": "CI quality gates and release confidence.",
    "slug": "ci-quality-gates-and-release-confidence",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q196",
    "title": "Test coverage vs meaningful test quality.",
    "slug": "test-coverage-vs-meaningful-test-quality",
    "categoryId": "13",
    "status": "draft"
  },
  {
    "id": "Q197",
    "title": "Structured Logging in Node.js.",
    "slug": "structured-logging-in-node-js",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q198",
    "title": "Correlation IDs and request tracing.",
    "slug": "correlation-ids-and-request-tracing",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q199",
    "title": "Distributed Tracing and OpenTelemetry.",
    "slug": "distributed-tracing-and-opentelemetry",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q200",
    "title": "Metrics, Latency, Throughput, and Error Rate.",
    "slug": "metrics-latency-throughput-and-error-rate",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q201",
    "title": "Monitoring Event Loop Lag.",
    "slug": "monitoring-event-loop-lag",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q202",
    "title": "Monitoring heap memory, CPU, and Garbage Collection.",
    "slug": "monitoring-heap-memory-cpu-and-garbage-collection",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q203",
    "title": "SLIs, SLOs, and Error Budgets.",
    "slug": "slis-slos-and-error-budgets",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q204",
    "title": "Alerting strategies and alert fatigue.",
    "slug": "alerting-strategies-and-alert-fatigue",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q205",
    "title": "How do you investigate a production incident?",
    "slug": "how-do-you-investigate-a-production-incident",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q206",
    "title": "Profiling performance regressions.",
    "slug": "profiling-performance-regressions",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q207",
    "title": "Health Checks: Liveness vs Readiness.",
    "slug": "health-checks-liveness-vs-readiness",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q208",
    "title": "Application Logs vs Audit Logs.",
    "slug": "application-logs-vs-audit-logs",
    "categoryId": "14",
    "status": "draft"
  },
  {
    "id": "Q209",
    "title": "Dockerizing a Node.js application safely.",
    "slug": "dockerizing-a-node-js-application-safely",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q210",
    "title": "Environment configuration and secrets management.",
    "slug": "environment-configuration-and-secrets-management",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q211",
    "title": "Designing CI/CD pipelines for backend applications.",
    "slug": "designing-ci-cd-pipelines-for-backend-applications",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q212",
    "title": "Zero-Downtime Deployment strategies.",
    "slug": "zero-downtime-deployment-strategies",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q213",
    "title": "Graceful Shutdown and container termination.",
    "slug": "graceful-shutdown-and-container-termination",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q214",
    "title": "Kubernetes readiness, liveness, and resource limits.",
    "slug": "kubernetes-readiness-liveness-and-resource-limits",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q215",
    "title": "Horizontal Scaling and stateless backend instances.",
    "slug": "horizontal-scaling-and-stateless-backend-instances",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q216",
    "title": "Safe production database migrations.",
    "slug": "safe-production-database-migrations",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q217",
    "title": "Deployment differences between Vercel frontend apps and long-running Node.js API services.",
    "slug": "deployment-differences-between-vercel-frontend-apps-and-long-running-node-js-api-services",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q218",
    "title": "Rollbacks, release strategies, and production recovery.",
    "slug": "rollbacks-release-strategies-and-production-recovery",
    "categoryId": "15",
    "status": "planned"
  },
  {
    "id": "Q219",
    "title": "How do you approach a Senior System Design interview?",
    "slug": "how-do-you-approach-a-senior-system-design-interview",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q220",
    "title": "How do you gather functional and non-functional requirements?",
    "slug": "how-do-you-gather-functional-and-non-functional-requirements",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q221",
    "title": "How do you estimate traffic, storage, throughput, and capacity?",
    "slug": "how-do-you-estimate-traffic-storage-throughput-and-capacity",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q222",
    "title": "Monolith vs Modular Monolith vs Microservices.",
    "slug": "monolith-vs-modular-monolith-vs-microservices",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q223",
    "title": "Design a Multi-Tenant SaaS ERP Backend.",
    "slug": "design-a-multi-tenant-saas-erp-backend",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q224",
    "title": "Design a POS Order Management System.",
    "slug": "design-a-pos-order-management-system",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q225",
    "title": "Design an Inventory Management System that prevents overselling.",
    "slug": "design-an-inventory-management-system-that-prevents-overselling",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q226",
    "title": "Design a reliable Checkout and Payment Processing System.",
    "slug": "design-a-reliable-checkout-and-payment-processing-system",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q227",
    "title": "Design an idempotent Payment Webhook Processing System.",
    "slug": "design-an-idempotent-payment-webhook-processing-system",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q228",
    "title": "Strong Consistency vs Eventual Consistency in business systems.",
    "slug": "strong-consistency-vs-eventual-consistency-in-business-systems",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q229",
    "title": "Design a scalable ERP Reporting and Analytics System.",
    "slug": "design-a-scalable-erp-reporting-and-analytics-system",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q230",
    "title": "Design a Product Search and Filtering Service.",
    "slug": "design-a-product-search-and-filtering-service",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q231",
    "title": "Design a secure File and Image Storage Service.",
    "slug": "design-a-secure-file-and-image-storage-service",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q232",
    "title": "Design centralized Authentication and Authorization for SaaS.",
    "slug": "design-centralized-authentication-and-authorization-for-saas",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q233",
    "title": "Design a Notification System with Email, Push, and In-App notifications.",
    "slug": "design-a-notification-system-with-email-push-and-in-app-notifications",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q234",
    "title": "Design large PDF and Excel report generation.",
    "slug": "design-large-pdf-and-excel-report-generation",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q235",
    "title": "Design a reliable Background Job Processing Architecture.",
    "slug": "design-a-reliable-background-job-processing-architecture",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q236",
    "title": "Design Observability for a distributed backend.",
    "slug": "design-observability-for-a-distributed-backend",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q237",
    "title": "Design a Distributed Rate Limiting System.",
    "slug": "design-a-distributed-rate-limiting-system",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q238",
    "title": "Design large CSV imports with validation and recovery.",
    "slug": "design-large-csv-imports-with-validation-and-recovery",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q239",
    "title": "How do you migrate a legacy backend without interrupting users?",
    "slug": "how-do-you-migrate-a-legacy-backend-without-interrupting-users",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q240",
    "title": "Design a high-traffic REST API Architecture.",
    "slug": "design-a-high-traffic-rest-api-architecture",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q241",
    "title": "Design real-time Inventory Updates across multiple branches.",
    "slug": "design-real-time-inventory-updates-across-multiple-branches",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q242",
    "title": "Load Balancing, Horizontal Scaling, and stateless services.",
    "slug": "load-balancing-horizontal-scaling-and-stateless-services",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q243",
    "title": "Designing reliable workflows using the Outbox Pattern.",
    "slug": "designing-reliable-workflows-using-the-outbox-pattern",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q244",
    "title": "Designing Distributed Transactions using Sagas.",
    "slug": "designing-distributed-transactions-using-sagas",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q245",
    "title": "Database per Service vs Shared Database.",
    "slug": "database-per-service-vs-shared-database",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q246",
    "title": "Read Replicas, CQRS, and read/write separation.",
    "slug": "read-replicas-cqrs-and-read-write-separation",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q247",
    "title": "Sharding and Partitioning strategies at scale.",
    "slug": "sharding-and-partitioning-strategies-at-scale",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q248",
    "title": "Disaster Recovery, RPO, RTO, and backup architecture.",
    "slug": "disaster-recovery-rpo-rto-and-backup-architecture",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q249",
    "title": "Multi-Region Deployment and consistency trade-offs.",
    "slug": "multi-region-deployment-and-consistency-trade-offs",
    "categoryId": "16",
    "status": "planned"
  },
  {
    "id": "Q250",
    "title": "How do you identify Microservice boundaries and prevent a Distributed Monolith?",
    "slug": "how-do-you-identify-microservice-boundaries-and-prevent-a-distributed-monolith",
    "categoryId": "16",
    "status": "planned"
  }
]

export const questionCatalog = rawQuestionCatalog.map((question) => ({
  ...question,
  status: 'published',
}))

