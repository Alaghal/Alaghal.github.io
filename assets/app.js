'use strict';

const english = {
  skip:'Skip to content',brandSub:'engineer · product builder',navWork:'Selected work',navExpertise:'Expertise',navAbout:'About',navContact:'Let’s talk',
  location:'SAINT PETERSBURG · REMOTE',intro:'Hi, I’m Andrey.',heroTitle:'Complex within.<br><span>Clear<br class="desktop-break"> by design.</span>',
  heroDescription:'I turn business challenges into working APIs, services and products. From the first architecture decision to deployment and metrics.',seeWork:'Explore my work',discussIdea:'Discuss an idea',coreStack:'CORE STACK',
  nodeGatewayTitle:'One entry point. Traffic under control.',nodeGatewayDescription:'Routing, rate limiting and circuit breakers in front of your services.',
  nodeAuthTitle:'Identity. Sessions. Clear boundaries.',nodeAuthDescription:'JWT authentication, refresh token rotation and session revocation.',
  nodeDataTitle:'Data with a dependable foundation.',nodeDataDescription:'PostgreSQL, reproducible migrations and integration tests.',
  diagramHint:'SELECT A NODE TO EXPLORE',diagramCaption:'ARCHITECTURE CONCEPT',heroFooter:'ARCHITECTURE → CODE → WORKING PRODUCT',scroll:'Scroll to explore',
  workEyebrow:'SELECTED WORK',workTitle:'Code with<br>a purpose.',workIntro:'Three open-source projects, from authentication<br>to AI integrations. Engineering decisions<br>you can explore in the code.',
  authSubtitle:'Authentication as a system of its own.',authDescription:'Registration, JWT and refresh token rotation. Session revocation, database migrations and integration tests in one Kotlin service.',
  explore:'Inside the project',metricLabel:'P95 / LOGIN',errorLabel:'ERRORS IN TEST',benchmarkNote:'Local k6 test · 20 VUs · 30 sec · M1 Pro.<br>Results and scenario in the README.',details:'Explore project',
  gatewayDescription:'An entry point for microservices: routing, overload protection and observability.',walletDescription:'Wallet activity and AI-written summaries through interchangeable data and LLM providers.',walletVisualCaption:'PROCESS ILLUSTRATION · NOT A REAL REPORT',
  workFootnote:'OPEN SOURCE CODE & DOCUMENTATION',allGithub:'All repositories on GitHub',expertiseEyebrow:'HOW I CAN HELP',expertiseTitle:'From “an idea”<br>to “it works”.',
  expertiseIntro:'I help turn technical uncertainty<br>into a clear, practical<br>next step.',service1Title:'Backend & API',service1Description:'A new service or an integration with an existing system.',service1Item1:'REST API and data modelling',service1Item2:'Authentication and integrations',service1Item3:'Tests, documentation and deployment',
  service2Title:'Product MVP',service2Description:'A business hypothesis that needs a working product to test it.',service2Item1:'A focused first release',service2Item2:'Backend and core user journey',service2Item3:'An incremental development plan',
  service3Title:'Technical review',service3Description:'A system is already running. What should you improve first?',service3Item1:'Architecture and bottlenecks',service3Item2:'Observability and reliability',service3Item3:'A prioritised improvement plan',
  approachEyebrow:'HOW I WORK',approachTitle:'Purpose first.<br>Then the system.',approachIntro:'I keep the business problem in focus and break the work into verifiable steps, so progress is visible throughout development.',
  step1Title:'Understand the problem',step1Text:'Who will use it, what needs to change and how we will know the problem is solved.',step2Title:'Choose a fitting solution',step2Text:'Define scope, data models and architecture for the product’s current stage.',
  step3Title:'Build and verify',step3Text:'Implement the core journey, verify it with tests and demonstrate a working version.',step4Title:'Deploy and observe',step4Text:'Prepare deployment, logs, metrics and clear documentation for the next steps.',
  aboutEyebrow:'THE PERSON BEHIND THE CODE',aboutTitle:'An engineer by approach.<br>A builder by curiosity.',aboutP1:'I’m Andrey Seryakov, a backend and platform engineer. I work with Go, Kotlin and Java: designing services, connecting systems and understanding how they behave under load.',
  aboutP2:'I’m interested in the whole product journey, from a real problem to a useful tool. That brings AI integrations, my own SaaS projects and infrastructure work alongside backend engineering.',toolboxBackend:'BACKEND',toolboxData:'DATA & EVENTS',toolboxPlatform:'PLATFORM',
  contactEyebrow:'LET’S BUILD SOMETHING USEFUL',contactTitle:'A good system<br>starts with<br><span>a conversation.</span>',contactDescription:'Tell me what you want to build,<br>where the project stands<br>and where you need help.',prepareBrief:'Discuss a project',copyEmail:'Copy email address',directContact:'Prefer a direct message?',footerNote:'Andrey Seryakov · Backend & Product Engineering',backTop:'Back to top ↑',
  viewSource:'Explore the source code',briefEyebrow:'FIRST STEP / A SHORT BRIEF',briefTitle:'What are we building?',briefIntro:'A few details help start a useful conversation.',briefService:'What do you need help with?',briefMvp:'Product MVP',briefReview:'Technical review',briefOther:'Another idea',briefTask:'Tell me about the task',briefPlaceholder:'What should be built? What already exists? What outcome do you need?',briefName:'Your name',briefTiming:'Timeline, if you have one',namePlaceholder:'Name',timingPlaceholder:'For example, within a month',briefReady:'Your email draft',openEmail:'Open email app',copyText:'Copy draft',buildBrief:'Prepare email',briefNote:'Your brief stays in your browser. Send it through your email app to 757Grok@mail.ru.'
};

const russianExtras = {nodeAuthTitle:'Идентичность. Сессии. Границы доступа.',nodeAuthDescription:'JWT-аутентификация, ротация refresh-токенов и отзыв сессий.',nodeDataTitle:'Данные с надёжным основанием.',nodeDataDescription:'PostgreSQL, воспроизводимые миграции и интеграционные тесты.'};
const russian = {...russianExtras};
document.querySelectorAll('[data-i18n]').forEach(el => {russian[el.dataset.i18n] ??= el.innerHTML;});
document.querySelectorAll('[data-placeholder]').forEach(el => {russian[el.dataset.placeholder] = el.placeholder;});
let language = 'ru';
try {if (localStorage.getItem('alaghal-language') === 'en') language = 'en';} catch {}
const t = key => (language === 'en' ? english[key] : russian[key]) ?? key;
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');

function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');updateLabels();}
function updateLabels(){
  const en = language === 'en';
  document.querySelector('.brand').setAttribute('aria-label',en?'Alaghal — home':'Alaghal — на главную');
  document.querySelector('.architecture').setAttribute('aria-label',en?'Interactive backend architecture diagram':'Интерактивная схема backend-системы');
  navigation.setAttribute('aria-label',en?'Main navigation':'Основная навигация');
  document.querySelector('.contact-socials').setAttribute('aria-label',en?'Social contact channels':'Социальные сети');
  menu.setAttribute('aria-label',menu.getAttribute('aria-expanded')==='true'?(en?'Close menu':'Закрыть меню'):(en?'Open menu':'Открыть меню'));
  document.querySelectorAll('[data-close-dialog]').forEach(el=>el.setAttribute('aria-label',en?'Close':'Закрыть'));
  document.querySelectorAll('.service-button').forEach((el,i)=>el.setAttribute('aria-label',(en?'Discuss ':'Обсудить ')+t(`service${i+1}Title`).replaceAll('&amp;','&')));
}
function applyLanguage(){
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {el.innerHTML = t(el.dataset.i18n);});
  document.querySelectorAll('[data-placeholder]').forEach(el => {el.placeholder = t(el.dataset.placeholder);});
  document.getElementById('language').innerHTML = language==='ru'?'RU <span>/ EN</span>':'<span>RU /</span> EN';
  document.getElementById('language').setAttribute('aria-label',language==='ru'?'Switch to English':'Переключить на русский');
  document.title = language==='ru'?'Андрей / Alaghal — Backend & Product Engineering':'Andrey / Alaghal — Backend & Product Engineering';
  document.querySelector('meta[name="description"]').content = language==='ru'?'Андрей Серяков — Backend & Platform Engineer. Go, Kotlin, Java. Разработка API, MVP, интеграций и наблюдаемых систем. Проекты, подход и сотрудничество.':'Andrey Seryakov — Backend & Platform Engineer. Go, Kotlin, Java. APIs, product MVPs, integrations and observable systems. Selected work and collaboration.';
  updateLabels();
  if (!document.getElementById('brief-preview').hidden) buildBrief();
}
document.getElementById('language').addEventListener('click',()=>{language = language==='ru'?'en':'ru';try{localStorage.setItem('alaghal-language',language);}catch{}applyLanguage();});
menu.addEventListener('click',()=>{const open = menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);updateLabels();});
navigation.addEventListener('click',e=>{if(e.target.closest('a')) closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header')) closeMenu();});

const nodeInfo = {gateway:{number:'01',title:'nodeGatewayTitle',description:'nodeGatewayDescription'},auth:{number:'02',title:'nodeAuthTitle',description:'nodeAuthDescription'},data:{number:'03',title:'nodeDataTitle',description:'nodeDataDescription'}};
document.querySelectorAll('[data-node]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-node]').forEach(node=>{const active=node===button;node.classList.toggle('active',active);node.setAttribute('aria-pressed',String(active));});
  const info=nodeInfo[button.dataset.node];document.getElementById('node-number').textContent=info.number;
  for(const [id,key] of [['node-title',info.title],['node-description',info.description]]){const el=document.getElementById(id);el.dataset.i18n=key;el.textContent=t(key);}
}));

const projectContent = {
  auth:{title:'Highload-Auth',kicker:'01 / SECURITY & BACKEND',url:'https://github.com/Alaghal/Highload-Auth',tech:'Kotlin · Spring Boot · Spring Security · PostgreSQL · Flyway · Testcontainers · k6',
    ru:{lead:'От регистрации до отзыва всех сессий — отдельный сервис аутентификации с наблюдаемостью и тестами.',sections:[['Задача','Выделить управление пользователями и жизненным циклом токенов в понятный сервис с REST API.'],['Ключевые решения',['JWT access-токены и ротация refresh-токенов.','Хеши refresh-токенов в PostgreSQL, отзыв текущей сессии и всех сессий пользователя.','Flyway для схемы данных, Testcontainers для интеграционных тестов.','Структурированные JSON-логи и Request ID для связи событий.']],['Что проверено','В README опубликован локальный k6-тест login: 20 VUs, 30 секунд, M1 Pro, Java 21, PostgreSQL в Docker. p95 — 182 мс, доля ошибок — 0%. Это результаты конкретного локального сценария; тесты сайта их повторно не запускали.']]},
    en:{lead:'From registration to revoking every session: a dedicated authentication service with observability and tests.',sections:[['The problem','Separate user management and token lifecycle into a clear service with a REST API.'],['Engineering decisions',['JWT access tokens and refresh token rotation.','Hashed refresh tokens in PostgreSQL; revoke one session or all user sessions.','Flyway schema migrations and Testcontainers integration tests.','Structured JSON logs and Request IDs for event correlation.']],['Validation context','The README reports a local k6 login test: 20 VUs, 30 seconds, M1 Pro, Java 21 and PostgreSQL in Docker. p95: 182 ms; error rate: 0%. These figures describe that local scenario and were not re-run while building this website.']]}},
  gateway:{title:'Go API Gateway',kicker:'02 / PLATFORM',url:'https://github.com/Alaghal/go-api-gateway',tech:'Go · chi · Prometheus · Grafana · OpenAPI · Docker Compose',
    ru:{lead:'Общий вход в сервисы с контролем трафика, обработкой отказов и метриками.',sections:[['Задача','Собрать инфраструктурные функции перед backend-сервисами: маршрутизацию, ограничение запросов и наблюдаемость.'],['Ключевые решения',['HTTP-маршрутизация и reverse proxy на Go / chi.','Token bucket rate limiting по IP с ответом 429 и Retry-After.','Retry и circuit breaker для обращений к upstream-сервису.','Метрики Prometheus, структурированные логи и распространение Request ID.']],['Как изучить','Docker Compose поднимает gateway, auth-сервис, Prometheus, Grafana и Swagger UI. В репозитории есть OpenAPI и описание конфигурации через переменные окружения.']]},
    en:{lead:'A shared entry point for services with traffic control, resilience and metrics.',sections:[['The problem','Centralise routing, request limits and observability in front of backend services.'],['Engineering decisions',['HTTP routing and reverse proxy with Go / chi.','Per-IP token bucket rate limiting with 429 responses and Retry-After.','Retries and a circuit breaker for upstream service calls.','Prometheus metrics, structured logs and Request ID propagation.']],['Explore it','Docker Compose runs the gateway, auth service, Prometheus, Grafana and Swagger UI. The repository includes OpenAPI documentation and environment-based configuration.']]}},
  wallet:{title:'AI Wallet Analyzer',kicker:'03 / AI & WEB3',url:'https://github.com/Alaghal/ai-wallet-analyzer',tech:'Go · Etherscan API · LLM API · Prometheus · Grafana · Docker',
    ru:{lead:'Backend для анализа активности Web3-кошелька и подготовки текстового резюме с помощью LLM.',sections:[['Задача','Объединить получение данных о кошельке, обработку показателей активности и генерацию резюме за одним REST API.'],['Ключевые решения',['Сменные провайдеры данных: Etherscan и mock.','Сменный LLM-клиент: OpenAI-совместимый API и mock.','Метрики внешних провайдеров и LLM, логи с Request ID.','Graceful shutdown и контейнерный запуск с мониторингом.']],['Границы проекта','По умолчанию сервис работает с mock-провайдерами. Для реальных запросов нужны ключи Etherscan и LLM. Это инженерный проект анализа активности; оценка риска не является финансовой рекомендацией или AML-сертификацией.']]},
    en:{lead:'A backend for analysing Web3 wallet activity and generating a readable summary with an LLM.',sections:[['The problem','Combine wallet data, activity indicators and summary generation behind one REST API.'],['Engineering decisions',['Interchangeable data providers: Etherscan and mock.','Interchangeable LLM clients: an OpenAI-compatible API and mock.','Provider and LLM metrics, plus logs with Request IDs.','Graceful shutdown and a containerised monitoring stack.']],['Project boundaries','The service uses mock providers by default. Real requests require Etherscan and LLM API keys. This is an activity analysis engineering project; the risk score is not financial advice or AML certification.']]}}
};
const projectDialog=document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const project=projectContent[button.dataset.project],copy=project[language];
  document.getElementById('project-dialog-kicker').textContent=project.kicker;
  document.getElementById('project-dialog-title').textContent=project.title;
  document.getElementById('project-dialog-lead').textContent=copy.lead;
  const content=document.getElementById('project-dialog-content');content.replaceChildren();
  copy.sections.forEach(([title,body])=>{const section=document.createElement('section');section.className='modal-section';const h=document.createElement('h3');h.textContent=title;section.append(h);
    if(Array.isArray(body)){const list=document.createElement('ul');body.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});section.append(list);}else{const p=document.createElement('p');p.textContent=body;section.append(p);}content.append(section);
  });
  const tech=document.createElement('p');tech.className='modal-tech';tech.textContent=project.tech;content.append(tech);
  document.getElementById('project-dialog-link').href=project.url;projectDialog.showModal();
}));

document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('[data-close-dialog]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
});
const briefDialog=document.getElementById('brief-dialog');
document.querySelectorAll('[data-open-brief]').forEach(button=>button.addEventListener('click',()=>{
  if(button.dataset.service){document.querySelector(`input[name="service"][value="${button.dataset.service}"]`).checked=true;invalidateBrief();}
  closeMenu();briefDialog.showModal();
}));
const briefForm=document.getElementById('brief-form');
const serviceNames={ru:{backend:'Backend & API',mvp:'MVP продукта',review:'Технический разбор',other:'Другая идея'},en:{backend:'Backend & API',mvp:'Product MVP',review:'Technical review',other:'Another idea'}};
function buildBrief(){
  const data=new FormData(briefForm),en=language==='en';
  const service=serviceNames[language][data.get('service')];
  const lines=[en?'Hi, Andrey!':'Андрей, здравствуйте!','',`${en?'Topic':'Тема'}: ${service}`,'',String(data.get('description')).trim()];
  if(String(data.get('timing')).trim())lines.push('',`${en?'Timeline':'Сроки'}: ${String(data.get('timing')).trim()}`);
  if(String(data.get('name')).trim())lines.push('',`${en?'Name':'Имя'}: ${String(data.get('name')).trim()}`);
  const body=lines.join('\n');document.getElementById('brief-result').value=body;
  document.getElementById('brief-mail').href=`mailto:757Grok@mail.ru?subject=${encodeURIComponent((en?'Project discussion — ':'Обсуждение проекта — ')+service)}&body=${encodeURIComponent(body)}`;
  document.getElementById('brief-preview').hidden=false;document.querySelector('.prepare-button').hidden=true;
}
function invalidateBrief(){document.getElementById('brief-preview').hidden=true;document.querySelector('.prepare-button').hidden=false;}
briefForm.addEventListener('input',e=>{if(e.target.id!=='brief-result')invalidateBrief();});
briefForm.addEventListener('submit',e=>{e.preventDefault();const description=document.getElementById('brief-description');if(description.value.trim().length<10){description.setCustomValidity(language==='en'?'Please describe your task in at least 10 characters.':'Опишите задачу хотя бы в 10 символах.');description.reportValidity();return;}description.setCustomValidity('');buildBrief();document.getElementById('brief-result').focus();});
document.getElementById('brief-description').addEventListener('input',e=>e.target.setCustomValidity(''));
let toastTimeout;
function toast(message){const element=document.getElementById('toast');element.textContent=message;element.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>element.classList.remove('visible'),4500);}
async function copy(text){
  try{await navigator.clipboard.writeText(text);return true;}catch{
    const field=document.createElement('textarea');field.value=text;field.style.position='fixed';field.style.opacity='0';const host=document.querySelector('dialog[open]')||document.body;host.append(field);field.select();let success=false;try{success=document.execCommand('copy');}catch{}field.remove();return success;
  }
}
document.getElementById('copy-email').addEventListener('click',async()=>toast(await copy('757Grok@mail.ru')?(language==='en'?'Email address copied':'Email скопирован'):(language==='en'?'Copy this address: 757Grok@mail.ru':'Скопируйте адрес: 757Grok@mail.ru')));
document.getElementById('copy-brief').addEventListener('click',async()=>{const copied=await copy(document.getElementById('brief-result').value);if(copied)toast(language==='en'?'Draft copied. Paste it into your email app.':'Текст скопирован. Вставьте его в письмо.');else{document.getElementById('brief-result').select();toast(language==='en'?'Draft selected. Press Ctrl/Cmd+C to copy.':'Текст выделен. Нажмите Ctrl/Cmd+C.');}});
applyLanguage();
