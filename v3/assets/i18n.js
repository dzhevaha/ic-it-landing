/* ic-it — languages: dictionary + footer dropdown. Shared by every page.
   Mark-up: data-i18n="key" (text), data-i18n-ph="key" (placeholder), data-i18n-aria="key" (aria-label).
   Language order: ?lang= in the URL → saved choice → browser language → English.
   Legal pages (AGB, Datenschutz, Impressum) exist only in German (as on ic-it.eu); there the language
   switches the page chrome and shows a "German only" note. */
(() => {
  const LANGS = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'uk', label: 'UA', name: 'Українська' },
    { code: 'ru', label: 'RU', name: 'Русский' },
  ];
  const T = {
    en: {
      'meta.title': 'ic-it — IT. Simply. Works.',
      'meta.desc': 'Intercomputer Global Services GmbH delivers end-to-end IT solutions for complex business needs.',
      'hero.title': 'IT. Simply. Works.',
      'hero.text': 'Intercomputer Global Services GmbH delivers end-to-end IT solutions for complex business needs across Enterprise Information Management, Business Process Management, FinTech, integrations, and e-commerce.',
      'aria.cube': 'ic-it 3D cube', 'aria.clients': 'Clients', 'aria.lang': 'Language', 'aria.home': 'ic-it — home page',
      tags: ['EIM', 'BPM', 'FinTech', 'Payments', 'Banking', 'Investment', 'Integration', 'E-Commerce', 'Analytics', 'Enterprise Platforms', 'Security'],
      // topic cloud: the tags of each topic, in the order of "tags"
      topics: [
        ['ECM', 'DMS', 'Document Management', 'Digital Archive', 'Records Management', 'E-Signature', 'Content Management', 'Knowledge Management', 'Information Governance', 'Document Workflow'],
        ['Business Processes', 'Workflows', 'Process Management', 'Process Automation', 'Approval Flows', 'Case Management', 'Business Rules', 'Task Management', 'Orchestration', 'Process Monitoring'],
        ['Digital Banking', 'Open Banking', 'Banking Platforms', 'Financial Services', 'Investment Platforms', 'Account Management', 'Financial Data', 'Banking APIs', 'FinTech Integration'],
        ['Payment Processing', 'Payment Gateways', 'Card Payments', 'SEPA', 'Instant Payments', 'Online Payments', 'Payment APIs', 'Transaction Processing', 'Payment Security', 'Reconciliation'],
        ['Core Banking', 'Online Banking', 'Mobile Banking', 'Account Services', 'Customer Onboarding', 'KYC', 'AML', 'Transaction Management', 'Banking APIs', 'Banking Integration'],
        ['Investment Platforms', 'Portfolio Management', 'Asset Management', 'Trading', 'Securities', 'Wealth Management', 'Fund Management', 'Investment Analytics', 'Market Data', 'Investor Portals'],
        ['System Integration', 'APIs', 'API Management', 'Microservices', 'Middleware', 'ETL', 'ESB', 'Data Exchange', 'Third-Party Integration', 'Legacy Integration'],
        ['B2B', 'B2C', 'Online Stores', 'Marketplaces', 'Product Catalogs', 'Order Management', 'Payments', 'Customer Accounts', 'Pricing', 'E-Commerce Integration'],
        ['BI', 'Dashboards', 'Reporting', 'Data Visualization', 'Financial Analytics', 'Customer Analytics', 'Operational Analytics', 'KPIs', 'Predictive Analytics', 'Real-Time Analytics'],
        ['Customer Portals', 'B2B Portals', 'Self-Service', 'Intranets', 'Enterprise Applications', 'Web Applications', 'Mobile Applications', 'SaaS', 'Cloud Platforms', 'Digital Platforms'],
        ['IAM', 'KYC', 'AML', 'Authentication', 'SSO', 'MFA', 'Access Control', 'Encryption', 'Fraud Detection', 'Compliance'],
      ],
      'topics.skip': 'Skip',
      'sol.title': 'Solutions We Build',
      'sol.text': 'We combine deep technical expertise with a strong understanding of business to make complex systems simple, reliable, and effective.',
      'sol.1.t': 'Enterprise Information Management',
      'sol.1.p': 'One reliable place for business documents and corporate knowledge, with archiving, fast search, access control, and digital signatures.',
      'sol.2.t': 'FinTech',
      'sol.2.p': 'Digital financial solutions for investment platforms, online banking, and payments, with secure verification and automated processing.',
      'sol.3.t': 'BPM & Integrations',
      'sol.3.p': 'End-to-end business processes and connected enterprise systems, with orchestration, data exchange, and workflow monitoring.',
      'sol.4.t': 'E-Commerce',
      'sol.4.p': 'E-commerce solutions for the full operational flow, from incoming goods to fulfilment and sales analysis, for B2B and B2C.',
      'cta.title': 'IT. Built Deep. Made Simple.',
      'cta.text': 'Let’s discuss your next project.',
      'cta.ph': 'Enter your email', 'cta.email': 'Email',
      'cta.btn': 'Get in Touch', 'cta.thanks': 'Thank you',
      'f.city': '44388 Dortmund, Germany',
      'legal.back': '← Back to home',
      'legal.deOnly': 'This page is available in German only.',
      'arcade.hint': 'Click or tap to launch the ball', 'arcade.label': 'Mini game: break the pixels',
    },
    de: {
      'meta.title': 'ic-it — IT. Einfach. Funktioniert.',
      'meta.desc': 'Die Intercomputer Global Services GmbH realisiert ganzheitliche IT-Lösungen für komplexe Geschäftsanforderungen.',
      'hero.title': 'IT. Einfach. Funktioniert.',
      'hero.text': 'Die Intercomputer Global Services GmbH realisiert ganzheitliche IT-Lösungen für komplexe Geschäftsanforderungen in den Bereichen Enterprise Information Management, Business Process Management, FinTech, Integrationen und E-Commerce.',
      'aria.cube': 'ic-it 3D-Würfel', 'aria.clients': 'Kunden', 'aria.lang': 'Sprache', 'aria.home': 'ic-it — Startseite',
      tags: ['EIM', 'BPM', 'FinTech', 'Zahlungsverkehr', 'Banking', 'Investment', 'Integration', 'E-Commerce', 'Analytics', 'Unternehmensplattformen', 'Sicherheit'],
      topics: [
        ['ECM', 'DMS', 'Dokumentenmanagement', 'Digitales Archiv', 'Records Management', 'E-Signatur', 'Content Management', 'Wissensmanagement', 'Information Governance', 'Dokumenten-Workflow'],
        ['Geschäftsprozesse', 'Workflows', 'Prozessmanagement', 'Prozessautomatisierung', 'Freigabeprozesse', 'Case Management', 'Geschäftsregeln', 'Aufgabenmanagement', 'Orchestrierung', 'Prozessmonitoring'],
        ['Digital Banking', 'Open Banking', 'Banking-Plattformen', 'Finanzdienstleistungen', 'Investmentplattformen', 'Kontoverwaltung', 'Finanzdaten', 'Banking-APIs', 'FinTech-Integration'],
        ['Zahlungsabwicklung', 'Payment-Gateways', 'Kartenzahlungen', 'SEPA', 'Echtzeitzahlungen', 'Online-Zahlungen', 'Payment-APIs', 'Transaktionsverarbeitung', 'Zahlungssicherheit', 'Zahlungsabgleich'],
        ['Core Banking', 'Online-Banking', 'Mobile Banking', 'Kontoservices', 'Kunden-Onboarding', 'KYC', 'AML', 'Transaktionsmanagement', 'Banking-APIs', 'Banking-Integration'],
        ['Investmentplattformen', 'Portfoliomanagement', 'Asset Management', 'Trading', 'Wertpapiere', 'Vermögensverwaltung', 'Fondsmanagement', 'Investment-Analytics', 'Marktdaten', 'Investorenportale'],
        ['Systemintegration', 'APIs', 'API-Management', 'Microservices', 'Middleware', 'ETL', 'ESB', 'Datenaustausch', 'Drittanbieter-Integration', 'Legacy-Integration'],
        ['B2B', 'B2C', 'Onlineshops', 'Marktplätze', 'Produktkataloge', 'Auftragsmanagement', 'Zahlungen', 'Kundenkonten', 'Preisgestaltung', 'E-Commerce-Integration'],
        ['BI', 'Dashboards', 'Reporting', 'Datenvisualisierung', 'Finanzanalysen', 'Kundenanalysen', 'Operative Analysen', 'KPIs', 'Predictive Analytics', 'Echtzeit-Analysen'],
        ['Kundenportale', 'B2B-Portale', 'Self-Service', 'Intranets', 'Unternehmensanwendungen', 'Webanwendungen', 'Mobile Apps', 'SaaS', 'Cloud-Plattformen', 'Digitale Plattformen'],
        ['IAM', 'KYC', 'AML', 'Authentifizierung', 'SSO', 'MFA', 'Zugriffskontrolle', 'Verschlüsselung', 'Betrugserkennung', 'Compliance'],
      ],
      'topics.skip': 'Überspringen',
      'sol.title': 'Lösungen, die wir entwickeln',
      'sol.text': 'Wir verbinden tiefes technisches Know-how mit fundiertem Geschäftsverständnis, damit komplexe Systeme einfach, zuverlässig und effektiv werden.',
      'sol.1.t': 'Enterprise Information Management',
      'sol.1.p': 'Ein verlässlicher Ort für Geschäftsdokumente und Unternehmenswissen – mit Archivierung, schneller Suche, Zugriffskontrolle und digitalen Signaturen.',
      'sol.2.t': 'FinTech',
      'sol.2.p': 'Digitale Finanzlösungen für Investmentplattformen, Online-Banking und Zahlungsverkehr – mit sicherer Verifizierung und automatisierter Verarbeitung.',
      'sol.3.t': 'BPM & Integrationen',
      'sol.3.p': 'Durchgängige Geschäftsprozesse und vernetzte Unternehmenssysteme – mit Orchestrierung, Datenaustausch und Workflow-Monitoring.',
      'sol.4.t': 'E-Commerce',
      'sol.4.p': 'E-Commerce-Lösungen für den gesamten operativen Ablauf – vom Wareneingang über das Fulfillment bis zur Verkaufsanalyse, für B2B und B2C.',
      'cta.title': 'IT. Tief durchdacht. Einfach gemacht.',
      'cta.text': 'Lassen Sie uns über Ihr nächstes Projekt sprechen.',
      'cta.ph': 'Ihre E-Mail-Adresse', 'cta.email': 'E-Mail',
      'cta.btn': 'Kontakt aufnehmen', 'cta.thanks': 'Vielen Dank',
      'f.city': '44388 Dortmund, Deutschland',
      'legal.back': '← Zur Startseite',
      'legal.deOnly': '',
      'arcade.hint': 'Klicken oder tippen, um den Ball zu starten', 'arcade.label': 'Minispiel: Pixel abräumen',
    },
    uk: {
      'meta.title': 'ic-it — IT. Просто. Працює.',
      'meta.desc': 'Intercomputer Global Services GmbH створює комплексні IT-рішення для складних бізнес-завдань.',
      'hero.title': 'IT. Просто. Працює.',
      'hero.text': 'Intercomputer Global Services GmbH створює комплексні IT-рішення для складних бізнес-завдань у сферах управління корпоративною інформацією (EIM), управління бізнес-процесами (BPM), фінтеху, інтеграцій та електронної комерції.',
      'aria.cube': '3D-куб ic-it', 'aria.clients': 'Клієнти', 'aria.lang': 'Мова', 'aria.home': 'ic-it — головна сторінка',
      tags: ['EIM', 'BPM', 'Фінтех', 'Платежі', 'Банкінг', 'Інвестиції', 'Інтеграція', 'Електронна комерція', 'Аналітика', 'Корпоративні платформи', 'Безпека'],
      topics: [
        ['ECM', 'DMS', 'Управління документами', 'Електронний архів', 'Управління записами', 'Електронний підпис', 'Управління контентом', 'Управління знаннями', 'Інформаційне врядування', 'Документообіг'],
        ['Бізнес-процеси', 'Робочі процеси', 'Управління процесами', 'Автоматизація процесів', 'Процеси погодження', 'Управління кейсами', 'Бізнес-правила', 'Управління завданнями', 'Оркестрація', 'Моніторинг процесів'],
        ['Цифровий банкінг', 'Відкритий банкінг', 'Банківські платформи', 'Фінансові послуги', 'Інвестиційні платформи', 'Управління рахунками', 'Фінансові дані', 'Банківські API', 'Інтеграція фінтех-сервісів'],
        ['Обробка платежів', 'Платіжні шлюзи', 'Карткові платежі', 'SEPA', 'Миттєві платежі', 'Онлайн-платежі', 'Платіжні API', 'Обробка транзакцій', 'Безпека платежів', 'Звірка розрахунків'],
        ['АБС (Core Banking)', 'Онлайн-банкінг', 'Мобільний банкінг', 'Обслуговування рахунків', 'Онбординг клієнтів', 'KYC', 'AML', 'Управління транзакціями', 'Банківські API', 'Банківська інтеграція'],
        ['Інвестиційні платформи', 'Управління портфелем', 'Управління активами', 'Трейдинг', 'Цінні папери', 'Управління капіталом', 'Управління фондами', 'Інвестиційна аналітика', 'Ринкові дані', 'Портали для інвесторів'],
        ['Системна інтеграція', 'API', 'Управління API', 'Мікросервіси', 'Проміжне ПЗ', 'ETL', 'ESB', 'Обмін даними', 'Інтеграція зі сторонніми системами', 'Інтеграція застарілих систем'],
        ['B2B', 'B2C', 'Інтернет-магазини', 'Маркетплейси', 'Каталоги товарів', 'Управління замовленнями', 'Платежі', 'Особисті кабінети клієнтів', 'Ціноутворення', 'Інтеграція e-commerce'],
        ['BI', 'Дашборди', 'Звітність', 'Візуалізація даних', 'Фінансова аналітика', 'Клієнтська аналітика', 'Операційна аналітика', 'KPI', 'Предиктивна аналітика', 'Аналітика в реальному часі'],
        ['Клієнтські портали', 'B2B-портали', 'Самообслуговування', 'Інтранет', 'Корпоративні застосунки', 'Вебзастосунки', 'Мобільні застосунки', 'SaaS', 'Хмарні платформи', 'Цифрові платформи'],
        ['IAM', 'KYC', 'AML', 'Автентифікація', 'SSO', 'MFA', 'Контроль доступу', 'Шифрування', 'Виявлення шахрайства', 'Відповідність вимогам (Compliance)'],
      ],
      'topics.skip': 'Пропустити',
      'sol.title': 'Що ми створюємо',
      'sol.text': 'Ми поєднуємо глибоку технічну експертизу з добрим розумінням бізнесу, щоб складні системи ставали простими, надійними й ефективними.',
      'sol.1.t': 'Управління корпоративною інформацією',
      'sol.1.p': 'Єдине надійне джерело для ділових документів і корпоративних знань: архівування, швидкий пошук, контроль доступу та електронний підпис.',
      'sol.2.t': 'Фінтех',
      'sol.2.p': 'Цифрові фінансові рішення для інвестиційних платформ, онлайн-банкінгу та платежів із безпечною верифікацією та автоматичною обробкою.',
      'sol.3.t': 'BPM та інтеграції',
      'sol.3.p': 'Наскрізні бізнес-процеси та пов’язані корпоративні системи: оркестрація, обмін даними та моніторинг робочих процесів.',
      'sol.4.t': 'Електронна комерція',
      'sol.4.p': 'Рішення для електронної комерції на весь операційний цикл — від надходження товарів до доставки й аналізу продажів, для B2B і B2C.',
      'cta.title': 'IT. Глибоко всередині. Просто зовні.',
      'cta.text': 'Обговорімо ваш наступний проєкт.',
      'cta.ph': 'Введіть ваш email', 'cta.email': 'Email',
      'cta.btn': 'Зв’язатися з нами', 'cta.thanks': 'Дякуємо',
      'f.city': '44388 Дортмунд, Німеччина',
      'legal.back': '← На головну',
      'legal.deOnly': 'Ця сторінка доступна лише німецькою мовою.',
      'arcade.hint': 'Клікніть або торкніться, щоб запустити м’яч', 'arcade.label': 'Мінігра: розбийте пікселі',
    },
    ru: {
      'meta.title': 'ic-it — IT. Просто. Работает.',
      'meta.desc': 'Intercomputer Global Services GmbH создаёт комплексные IT-решения для сложных бизнес-задач.',
      'hero.title': 'IT. Просто. Работает.',
      'hero.text': 'Intercomputer Global Services GmbH создаёт комплексные IT-решения для сложных бизнес-задач в области управления корпоративной информацией (EIM), управления бизнес-процессами (BPM), финтеха, интеграций и электронной коммерции.',
      'aria.cube': '3D-куб ic-it', 'aria.clients': 'Клиенты', 'aria.lang': 'Язык', 'aria.home': 'ic-it — главная страница',
      tags: ['EIM', 'BPM', 'Финтех', 'Платежи', 'Банкинг', 'Инвестиции', 'Интеграция', 'Электронная коммерция', 'Аналитика', 'Корпоративные платформы', 'Безопасность'],
      // from ic-it_site_content_RU.docx
      topics: [
        ['ECM', 'DMS', 'Управление документами', 'Электронный архив', 'Управление записями', 'Электронная подпись', 'Управление контентом', 'Управление знаниями', 'Информационное управление', 'Документооборот'],
        ['Бизнес-процессы', 'Рабочие процессы', 'Управление процессами', 'Автоматизация процессов', 'Процессы согласования', 'Управление кейсами', 'Бизнес-правила', 'Управление задачами', 'Оркестрация', 'Мониторинг процессов'],
        ['Цифровой банкинг', 'Открытый банкинг', 'Банковские платформы', 'Финансовые услуги', 'Инвестиционные платформы', 'Управление счетами', 'Финансовые данные', 'Банковские API', 'Интеграция финтех-сервисов'],
        ['Обработка платежей', 'Платёжные шлюзы', 'Карточные платежи', 'SEPA', 'Мгновенные платежи', 'Онлайн-платежи', 'Платёжные API', 'Обработка транзакций', 'Безопасность платежей', 'Сверка расчётов'],
        ['АБС (Core Banking)', 'Онлайн-банкинг', 'Мобильный банкинг', 'Обслуживание счетов', 'Онбординг клиентов', 'KYC', 'AML', 'Управление транзакциями', 'Банковские API', 'Банковская интеграция'],
        ['Инвестиционные платформы', 'Управление портфелем', 'Управление активами', 'Трейдинг', 'Ценные бумаги', 'Управление капиталом', 'Управление фондами', 'Инвестиционная аналитика', 'Рыночные данные', 'Порталы для инвесторов'],
        ['Системная интеграция', 'API', 'Управление API', 'Микросервисы', 'Промежуточное ПО', 'ETL', 'ESB', 'Обмен данными', 'Интеграция со сторонними системами', 'Интеграция унаследованных систем'],
        ['B2B', 'B2C', 'Интернет-магазины', 'Маркетплейсы', 'Каталоги товаров', 'Управление заказами', 'Платежи', 'Личные кабинеты клиентов', 'Ценообразование', 'Интеграция e-commerce'],
        ['BI', 'Дашборды', 'Отчётность', 'Визуализация данных', 'Финансовая аналитика', 'Клиентская аналитика', 'Операционная аналитика', 'KPI', 'Предиктивная аналитика', 'Аналитика в реальном времени'],
        ['Клиентские порталы', 'B2B-порталы', 'Самообслуживание', 'Интранет', 'Корпоративные приложения', 'Веб-приложения', 'Мобильные приложения', 'SaaS', 'Облачные платформы', 'Цифровые платформы'],
        ['IAM', 'KYC', 'AML', 'Аутентификация', 'SSO', 'MFA', 'Контроль доступа', 'Шифрование', 'Выявление мошенничества', 'Соответствие требованиям (Compliance)'],
      ],
      'topics.skip': 'Пропустить',
      'sol.title': 'Что мы создаём',
      'sol.text': 'Мы сочетаем глубокую техническую экспертизу с хорошим пониманием бизнеса, чтобы сложные системы становились простыми, надёжными и эффективными.',
      'sol.1.t': 'Управление корпоративной информацией',
      'sol.1.p': 'Единый надёжный источник для деловых документов и корпоративных знаний: архивирование, быстрый поиск, контроль доступа и электронная подпись.',
      'sol.2.t': 'Финтех',
      'sol.2.p': 'Цифровые финансовые решения для инвестиционных платформ, онлайн-банкинга и платежей с безопасной верификацией и автоматической обработкой.',
      'sol.3.t': 'BPM и интеграции',
      'sol.3.p': 'Сквозные бизнес-процессы и связанные корпоративные системы: оркестрация, обмен данными и мониторинг рабочих процессов.',
      'sol.4.t': 'Электронная коммерция',
      'sol.4.p': 'Решения для электронной коммерции на весь операционный цикл — от поступления товаров до доставки и анализа продаж, для B2B и B2C.',
      'cta.title': 'IT. Глубоко внутри. Просто снаружи.',
      'cta.text': 'Давайте обсудим ваш следующий проект.',
      'cta.ph': 'Введите ваш email', 'cta.email': 'Email',
      'cta.btn': 'Связаться с нами', 'cta.thanks': 'Спасибо',
      'f.city': '44388 Дортмунд, Германия',
      'legal.back': '← На главную',
      'legal.deOnly': 'Эта страница доступна только на немецком языке.',
      'arcade.hint': 'Кликните или коснитесь, чтобы запустить мяч', 'arcade.label': 'Мини-игра: разбейте пиксели',
    },
  };

  const KEY = 'ic-lang';
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} },
  };
  const known = c => c && T[c] ? c : null;
  function initial() {
    const q = new URLSearchParams(location.search).get('lang');
    if (known(q)) { store.set(q); return q; }
    const saved = known(store.get());
    if (saved) return saved;
    for (const l of navigator.languages || [navigator.language || '']) {
      const c = String(l).toLowerCase().slice(0, 2);
      if (known(c)) return c;
    }
    return 'en';
  }

  let lang = initial();
  const t = (k, l = lang) => (T[l] && T[l][k] != null ? T[l][k] : T.en[k]);

  function apply() {
    const root = document.documentElement;
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    const page = root.dataset.page;                       // legal pages keep their German title
    if (!page) {
      document.title = t('meta.title');
      const d = document.querySelector('meta[name="description"]'); if (d) d.content = t('meta.desc');
    }
    const note = document.querySelector('.legal-note');
    if (note) { const s = t('legal.deOnly'); note.textContent = s; note.hidden = !s; }
    // carry the language over to the other pages (also works when localStorage is blocked, e.g. file://)
    document.querySelectorAll('a[data-keep-lang]').forEach(a => {
      const u = a.getAttribute('href').split('?')[0];
      a.setAttribute('href', `${u}?lang=${lang}`);
    });
    // dropdown state
    const cur = LANGS.find(x => x.code === lang);
    document.querySelectorAll('.lang').forEach(box => {
      box.querySelector('.lang-cur').textContent = cur.label;
      // the current language sits in the button; the list shows only the others (Figma node 2050:1027)
      box.querySelectorAll('[data-lang]').forEach(b => { b.parentElement.hidden = b.dataset.lang === lang; });
    });
  }

  function set(l) {
    if (!known(l) || l === lang) return;
    lang = l; store.set(l);
    const url = new URL(location.href); url.searchParams.set('lang', l);
    try { history.replaceState(null, '', url); } catch (e) {}
    apply();
    dispatchEvent(new CustomEvent('ic-lang', { detail: { lang } }));
  }

  // footer dropdown: <div class="lang"> with .lang-btn and an empty .lang-menu, filled here
  function initDropdowns() {
    document.querySelectorAll('.lang').forEach(box => {
      const btn = box.querySelector('.lang-btn'), menu = box.querySelector('.lang-menu');
      menu.replaceChildren();
      LANGS.forEach(x => {
        const li = document.createElement('li');
        const b = document.createElement('button');
        b.type = 'button'; b.dataset.lang = x.code; b.setAttribute('role', 'menuitem'); b.lang = x.code;
        b.textContent = x.label; b.title = x.name; b.setAttribute('aria-label', x.name);
        li.appendChild(b); menu.appendChild(li);
      });
      const items = () => [...menu.querySelectorAll('li:not([hidden]) button')];
      const open = (focus) => {
        box.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
        if (focus) items()[0].focus();
      };
      const close = (refocus) => { box.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); if (refocus) btn.focus(); };
      btn.addEventListener('click', () => box.classList.contains('open') ? close() : open(false));
      btn.addEventListener('keydown', e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(true); } });
      menu.addEventListener('click', e => { const b = e.target.closest('[data-lang]'); if (b) { set(b.dataset.lang); close(true); } });
      menu.addEventListener('keydown', e => {
        const list = items(), i = list.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); list[(i + 1) % list.length].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
        else if (e.key === 'Escape') { e.preventDefault(); close(true); }
        else if (e.key === 'Tab') close(false);
      });
      document.addEventListener('pointerdown', e => { if (!box.contains(e.target)) close(false); });
    });
  }

  window.icI18n = { t, set, get lang() { return lang; }, langs: LANGS };
  initDropdowns();
  apply();
})();
