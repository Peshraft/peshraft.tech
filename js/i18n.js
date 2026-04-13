(function () {
  'use strict';

  var STORAGE_KEY = 'peshraft.lang';

  var STRINGS = {
    en: {
      'meta.title': 'Peshraft Technologies | Web Development & Hosting',
      'meta.description':
        'Peshraft Technologies — Website development and hosting services. We build fast, secure digital experiences.',
      'logo.ariaHome': 'Peshraft Technologies home',
      'nav.openMenu': 'Open menu',
      'lang.label': 'Language',
      'nav.services': 'Services',
      'nav.howWeWork': 'How we work',
      'nav.work': 'Work',
      'nav.pricing': 'Pricing',
      'nav.cta': 'Start a project',
      'hero.eyebrow': 'Digital craftsmanship',
      'hero.titleLead': 'Websites that ',
      'hero.titleAccent': 'move your business forward',
      'hero.lede':
        'Peshraft Technologies designs and builds high-performance sites, then keeps them fast, secure, and online with dependable hosting.',
      'hero.getInTouch': 'Get in touch',
      'hero.exploreServices': 'Explore services',
      'hero.statDelivery': 'Delivery',
      'hero.statDeliveryVal': 'Agile sprints',
      'hero.statStack': 'Stack',
      'hero.statStackVal': 'Modern & lean',
      'hero.statHosting': 'Hosting',
      'hero.statHostingVal': 'Uptime focused',
      'hero.livePreview': 'Live preview',
      'hero.cardCaption': 'From concept to deploy — one partner.',
      'services.title': 'What we do',
      'services.intro':
        'Two focused offerings — engineered for clarity, speed, and long-term reliability.',
      'services.devTitle': 'Website development',
      'services.devText':
        'Custom builds, redesigns, and performance tuning. Semantic markup, accessible UI, and code you can grow with.',
      'services.devLi1': 'Responsive layouts & design systems',
      'services.devLi2': 'SEO-ready structure & analytics hooks',
      'services.devLi3': 'Integrations & content workflows',
      'services.infraBadge': 'Infrastructure',
      'services.hostTitle': 'Hosting & care',
      'services.hostText':
        'Managed hosting with monitoring, SSL, backups, and updates — so your site stays fast and trustworthy.',
      'services.hostLi1': 'CDN-ready delivery & caching',
      'services.hostLi2': 'Security hardening & patching',
      'services.hostLi3': 'Support when you need it',
      'approach.title': 'Our approach',
      'approach.p1':
        'We treat every project as a product: clear goals, tight feedback loops, and measurable outcomes. You get transparent timelines, no jargon, and a site that reflects how seriously you take your brand.',
      'approach.p2':
        'Whether you need a sharp marketing site or ongoing hosting peace of mind, we align engineering decisions with your business reality.',
      'approach.s1Title': 'Discover',
      'approach.s1Desc': 'Goals, audience, and success metrics — locked early.',
      'approach.s2Title': 'Design & build',
      'approach.s2Desc': 'Iterative UI, performance budgets, and clean handoff.',
      'approach.s3Title': 'Launch & host',
      'approach.s3Desc': 'Go-live, monitoring, and continuous care.',
      'work.title': 'Built for real-world performance',
      'work.intro':
        'Principles we apply to every engagement — static or dynamic, small or scaling.',
      'work.speed': 'Speed',
      'work.speedText':
        'Lean assets, smart caching, and layouts that feel instant on every device.',
      'work.clarity': 'Clarity',
      'work.clarityText':
        'Copy and structure that guide visitors — fewer bounces, clearer conversions.',
      'work.trust': 'Trust',
      'work.trustText':
        'Security-first hosting, HTTPS everywhere, and operational visibility you can rely on.',
      'work.ownership': 'Ownership',
      'work.ownershipText':
        'Documented setups and sensible defaults — no black-box lock-in.',
      'portfolio.title': 'Selected work',
      'portfolio.intro':
        'Recent engagements where we delivered the full stack — public sites, learning platforms, and integrations.',
      'portfolio.ao.tag': 'Higher education · Afghanistan',
      'portfolio.ao.client': 'Afghanistan Open University',
      'portfolio.ao.lead':
        'We host their public website and built a dedicated Moodle-based learning management system with student information system (SIS) alignment for enrolment, grading, and records.',
      'portfolio.ao.li1': 'Hosted public site at afgou.org',
      'portfolio.ao.li2': 'Moodle LMS tailored to their academic programs',
      'portfolio.ao.li3': 'SIS-connected workflows for learners and administrators',
      'portfolio.ao.link': 'Visit afgou.org',
      'portfolio.ao.linkAria': 'Visit Afghanistan Open University website (opens in a new tab)',
      'testimonials.title': 'Client feedback',
      'testimonials.intro':
        'Sample quotes illustrating the outcomes and partnership style we bring to client work.',
      'testimonials.rating5': '5 out of 5 stars',
      'testimonials.rating4': '4 out of 5 stars',
      'testimonials.1.quote':
        'They nailed requirements early, hit the agreed timeline, and our site has stayed fast and stable on their hosting since launch.',
      'testimonials.1.name': 'Samira H.',
      'testimonials.1.role': 'Program director, nonprofit sector',
      'testimonials.2.quote':
        'Clear communication, a tidy technical handoff, and measurable performance gains — enterprise discipline without the bloat.',
      'testimonials.2.name': 'James C.',
      'testimonials.2.role': 'Head of IT, professional services firm',
      'testimonials.3.quote':
        'From staging to go-live everything was transparent. They treat infrastructure as a product, not an afterthought.',
      'testimonials.3.name': 'Elena V.',
      'testimonials.3.role': 'Operations lead, education platform',
      'contact.title': 'Let’s build something sharp',
      'contact.intro':
        'Tell us about your project, timeline, and what “done” looks like. We’ll respond with next steps.',
      'contact.detailAddress': 'Address',
      'contact.addrLine1': 'Peshraft Technologies',
      'contact.addrLine2': 'Friedrichstraße 123',
      'contact.addrLine3': '10117 Berlin, Germany',
      'contact.detailPhone': 'Phone',
      'contact.phoneDisplay': '+49 30 123 45678',
      'contact.detailEmail': 'Email',
      'contact.formName': 'Name',
      'contact.phName': 'Your name',
      'contact.formEmail': 'Email',
      'contact.phEmail': 'you@company.com',
      'contact.formPhone': 'Phone',
      'contact.phPhone': '+1 234 567 8900',
      'contact.formKind': 'Contact type',
      'contact.kindPersonal': 'Personal',
      'contact.kindOrganization': 'Organization',
      'contact.formOrgName': 'Organization name',
      'contact.phOrgName': 'Company or organization name',
      'contact.formInterest': 'Interest',
      'contact.optDev': 'Website development',
      'contact.optHost': 'Hosting & care',
      'contact.optBoth': 'Both',
      'contact.optFree': 'Free static site (10 spots)',
      'contact.formMessage': 'Message',
      'contact.phMessage': 'Project goals, links, deadlines…',
      'contact.submit': 'Send message',
      'contact.sending': 'Sending…',
      'footer.brand': 'Peshraft Technologies',
      'footer.rights': 'All rights reserved.',
      'footer.top': 'Back to top',
      'form.errorRequired': 'Please fill in name, email, phone, and message.',
      'form.errorOrgName': 'Please enter your organization name.',
      'form.success': 'Thank you — your message was sent. We will get back to you soon.',
      'form.mailtoFallback':
        'The online form could not send your message (for example if the monthly limit was reached). Your email app should open with the same details — send that email to reach us. If nothing opens, write to contact@peshraft.tech.',
      'form.mailtoDirect':
        'Your email app should open with this message pre-filled. Send the email to reach us. If nothing opens, email contact@peshraft.tech directly.',
      'pricing.title': 'Plans & pricing',
      'pricing.intro':
        'Transparent packages for static and marketing sites. The first ten static builds are on us — you only cover the domain.',
      'pricing.promo.badge': 'Limited offer',
      'pricing.promo.title': '10 static websites — completely free',
      'pricing.promo.lead':
        'We’re giving away the first 10 static sites at no charge: design, build, first year of hosting on our stack, SSL, and a contact form. You register and pay for your domain separately.',
      'pricing.promo.spots': '10 spots total · domain not included',
      'pricing.promo.claim': 'Email contact@peshraft.tech with subject “Free static site” to claim a spot.',
      'pricing.promo.li1': 'Static site — up to 5 pages',
      'pricing.promo.li2': 'Mobile-responsive layout',
      'pricing.promo.li3': '1 GB hosting space',
      'pricing.promo.li4': 'SSL certificate included',
      'pricing.promo.li5': 'Contact form integration',
      'pricing.promo.li6': '2 revision rounds · 7–10 business-day delivery',
      'pricing.promo.li7': 'Domain name not included',
      'pricing.starter.name': 'Starter',
      'pricing.starter.tag': 'Personal sites & small businesses',
      'pricing.starter.price': '$199',
      'pricing.starter.hosting': '+ $9.99/mo hosting',
      'pricing.starter.f1': 'Up to 5 pages',
      'pricing.starter.f2': 'Template-based custom design',
      'pricing.starter.f3': 'Mobile responsive',
      'pricing.starter.f4': '5 GB SSD · 50 GB/mo bandwidth',
      'pricing.starter.f5': '1 free domain (1st year)',
      'pricing.starter.f6': 'SSL + 1 email account',
      'pricing.starter.f7': 'Email support — 48h response',
      'pricing.starter.f8': '2 revision rounds · 7–10 day delivery',
      'pricing.business.popular': 'Popular',
      'pricing.business.name': 'Business',
      'pricing.business.tag': 'Growing businesses & service brands',
      'pricing.business.price': '$499',
      'pricing.business.hosting': '+ $20/mo hosting',
      'pricing.business.f1': 'Up to 15 pages',
      'pricing.business.f2': 'Custom design from scratch',
      'pricing.business.f3': 'Fully responsive · cross-browser',
      'pricing.business.f4': '20 GB SSD · 200 GB/mo bandwidth',
      'pricing.business.f5': '1 free domain + 1 subdomain',
      'pricing.business.f6': 'SSL + 5 email accounts',
      'pricing.business.f7': 'Basic on-page SEO setup',
      'pricing.business.f8': 'Chat & email support — 24h',
      'pricing.business.f9': '4 revision rounds',
      'pricing.premium.name': 'Premium',
      'pricing.premium.tag': 'Established brands & higher traffic',
      'pricing.premium.price': '$999',
      'pricing.premium.hosting': '+ $30/mo hosting',
      'pricing.premium.f1': 'Unlimited pages',
      'pricing.premium.f2': 'Custom UI/UX design',
      'pricing.premium.f3': 'Advanced motion & interactions',
      'pricing.premium.f4': '50 GB SSD · unlimited bandwidth*',
      'pricing.premium.f5': 'Free domain + 3 subdomains',
      'pricing.premium.f6': 'SSL + 20 email accounts',
      'pricing.premium.f7': 'Full SEO audit & setup',
      'pricing.premium.f8': 'Priority support — 4h response',
      'pricing.premium.f9': 'Unlimited revisions',
      'pricing.cta': 'Request this plan',
      'pricing.footnote': '* Unlimited bandwidth on Premium is subject to fair-use policy.',
      'infra.title': 'Hosting built for stability',
      'infra.intro':
        'Your site runs on infrastructure we operate in Germany — engineered for security, speed, and room to grow.',
      'infra.stat.region': 'Region',
      'infra.stat.regionVal': 'Germany (EU)',
      'infra.stat.compute': 'Compute class',
      'infra.stat.computeVal': '8 vCPU',
      'infra.stat.ram': 'Memory',
      'infra.stat.ramVal': '16 GB RAM',
      'infra.stat.storage': 'NVMe storage',
      'infra.stat.storageVal': '480 GB',
      'infra.p1':
        'We host many lightweight static sites on a single high-spec virtual server: NVMe storage, plenty of RAM, and connectivity suited to steady traffic — so pages stay quick even as the fleet grows.',
      'infra.p2':
        'Every site is served over TLS. The host layer uses firewalls, access controls, and a disciplined patch cycle. Facilities follow industry-accepted security and availability practices.',
      'infra.p3':
        'We monitor resources and plan capacity so ~100 static properties can coexist without turning into noisy neighbors for your visitors.',
      'infra.p4':
        'If you outgrow a shared static slot, we can move you to a dedicated footprint — same operational standards, more isolation.'
    },
    ps: {
      'meta.title': 'پشرفت ټکنالوژي | د ویب پراختیا او هسټینګ',
      'meta.description':
        'پشرفت ټکنالوژي — د ویب پاڼو جوړول، هسټینګ او پلانونه. لومړی ۱۰ ثابت پاڼې وړیا؛ چټک او خوندي ډیجیټل تجربه.',
      'logo.ariaHome': 'پشرفت ټکنالوژي کورپاڼه',
      'nav.openMenu': 'مینو پرانیزئ',
      'lang.label': 'ژبه',
      'nav.services': 'خدمتونه',
      'nav.howWeWork': 'څنګه کار کوو',
      'nav.work': 'کارونه',
      'nav.pricing': 'نرخونه',
      'nav.cta': 'پروژه پیل کړئ',
      'pricing.business.popular': 'مشهور',
      'hero.eyebrow': 'ډیجیټل مهارت',
      'hero.titleLead': 'ویب پاڼې چې ',
      'hero.titleAccent': 'ستاسو سوداګرۍ پرمختګ کوي',
      'hero.lede':
        'پشرفت ټکنالوژي لوړ کارکوونکې ویب پاڼې طراحي او جوړوي، بیا یې چټکې، خوندي او پر لیکه د باور وړ هسټینګ سره ساتي.',
      'hero.getInTouch': 'اړیکه ونیسئ',
      'hero.exploreServices': 'خدمتونه وګورئ',
      'hero.statDelivery': 'سپارلو',
      'hero.statDeliveryVal': 'چټک پړاوونه',
      'hero.statStack': 'ټیکنالوژي',
      'hero.statStackVal': 'عصري او ساده',
      'hero.statHosting': 'هسټینګ',
      'hero.statHostingVal': 'د پاتې اوسېدو تمرکز',
      'hero.livePreview': 'ژوندی مخکتنه',
      'hero.cardCaption': ' له ایدې څخه تر خپرېدو پورې — یو شریک.',
      'services.title': 'موږ څه کوو',
      'services.intro':
        'دوه ځانګړي خدمتونه — د روښانتیا، چټکتیا او اوږدمهالې باور لپاره.',
      'services.devTitle': 'د ویب پاڼې پراختیا',
      'services.devText':
        'ځانګړي جوړښت، بیاډیزاین او کارایی تنظیم. معناپوره کود، لاسرسي وړ انټرفیس او کوډ چې ستاسو سره وده کوي.',
      'services.devLi1': 'غبرګونکي بڼې او ډیزاین سیسټمونه',
      'services.devLi2': 'د SEO لپاره چمتو جوړښت او تحلیل',
      'services.devLi3': 'ادغامونه او مینځپانګې بهیرونه',
      'services.infraBadge': 'زیربنا',
      'services.hostTitle': 'هسټینګ او پاملرنه',
      'services.hostText':
        'د څارنې، SSL، بیک اپونو او تازه کولو سره مدیریت شوی هسټینګ — ترڅو ستاسو پاڼه چټکه او باوري پاتې شي.',
      'services.hostLi1': 'د CDN لپاره چمتو لېږد او کش',
      'services.hostLi2': 'د امنیت پیاوړتیا او پچ',
      'services.hostLi3': 'کله چې اړتیا ولرئ ملاتړ',
      'approach.title': 'زموږ لارښود',
      'approach.p1':
        'موږ هر پروژه محصول ګڼو: روښانه اهداف، چټک فیدبیک او د اندازې وړ پایلې. تاسو شفاف مهالویشونه، پرته له تخنیکي ژړا څخه او ویب پاڼه ترلاسه کوئ چې ستاسو برانډ ته درناوی ښیي.',
      'approach.p2':
        'که تاسو تیز بازارموندنې پاڼه یا د هسټینګ اطمینان ته اړتیا ولرئ، موږ انجینري پریکړې ستاسو سوداګرۍ سره سم کوو.',
      'approach.s1Title': 'موندنه',
      'approach.s1Desc': 'اهداف، لیدونکي او د بریالیتوب معیارونه — پخوا ټاکل شوي.',
      'approach.s2Title': 'ډیزاین او جوړول',
      'approach.s2Desc': 'تکراري UI، د کارایی بودیجه او پاک لاسونه ورکول.',
      'approach.s3Title': 'خپریدل او هسټینګ',
      'approach.s3Desc': 'پیل، څارنه او دوامداره پاملرنه.',
      'work.title': 'د رښتینې کارایی لپاره جوړ شوی',
      'work.intro':
        'هغه اصول چې موږ په هر کار کې پلي کوو — ثابت یا متحرک، کوچنی یا پراخېدونکی.',
      'work.speed': 'چټکتیا',
      'work.speedText':
        'سپکې سرچینې، هوښیار کش او بڼې چې په هر وسیله کې فوري احساس کوي.',
      'work.clarity': 'روښانتیا',
      'work.clarityText':
        'متن او جوړښت چې لیدونکي لارښود کوي — لږ پریښودل، روښانه اقدامات.',
      'work.trust': 'باور',
      'work.trustText':
        'لومړی امنیت هسټینګ، HTTPS هرچیرې او عملیاتي لید چې تاسو یې باور کولی شئ.',
      'work.ownership': 'ملکیت',
      'work.ownershipText':
        'ثبت شوي تنظیماتو او معقول ډیفالټونه — پرته له تیاره بکس تړاو څخه.',
      'portfolio.title': 'ټاکل شوي کارونه',
      'portfolio.intro':
        'تازه پروژې چې موږ پکې بشپړ سټیک ورکړ — عامې پاڼې، د زده‌کړې پلیټفارمونه او یوځای کول.',
      'portfolio.ao.tag': 'لوړې زده‌کړې · افغانستان',
      'portfolio.ao.client': 'Afghanistan Open University',
      'portfolio.ao.lead':
        'موږ د دوی عامه ویب پاڼه هسټ کوو او د Moodle پر بنسټ ځانګړی LMS جوړ کړی چې د محصل معلوماتو سیسټم (SIS) سره د نوم لیکنې، نمرې او ثبتونو لپاره سمون لري.',
      'portfolio.ao.li1': 'د afgou.org په پته عامه پاڼه هسټینګ',
      'portfolio.ao.li2': 'د دوی اکادمیکو برنامو لپاره تنظیم شوی Moodle LMS',
      'portfolio.ao.li3': 'د زده‌کونکو او ادمینونو لپاره د SIS سره تړلي بهیرونه',
      'portfolio.ao.link': 'afgou.org وګورئ',
      'portfolio.ao.linkAria': 'د Afghanistan Open University ویب پاڼه (په نوې کړکۍ کې پرانیستل کېږي)',
      'testimonials.title': 'د پیرودونکو نظرونه',
      'testimonials.intro':
        'د هغه پایلو او ملګرتیا ډول نمونې چې موږ یې په پیرودونکو کارونو کې راوړو.',
      'testimonials.rating5': 'د ۵ څخه ۵ ستوري',
      'testimonials.rating4': 'د ۵ څخه ۴ ستوري',
      'testimonials.1.quote':
        'هغوی لومړی اړتیاوې روښانه کړې، په ټاکل شوي مهال کې سپارل او زموږ پاڼه له پیل راهیسې په دوی هسټینګ کې چټکه او ثابته ده.',
      'testimonials.1.name': 'سمیره ح.',
      'testimonials.1.role': 'د برنامې مشره، غیرانتفاعي برخه',
      'testimonials.2.quote':
        'روښانه اړیکه، تړلی تخنیکي تحویل او د اندازې وړ کارایی — د سوداګرۍ انضباط پرته له اضافي بار څخه.',
      'testimonials.2.name': 'جیمز ک.',
      'testimonials.2.role': 'د IT مشر، مسلکي خدماتو شرکت',
      'testimonials.3.quote':
        'له ازمایښت څخه تر پیل پورې هر څه روښان و. هغوی زیربنا د محصول په څیر ګڼي، نه د وروستي فکر په څیر.',
      'testimonials.3.name': 'الینا و.',
      'testimonials.3.role': 'د عملیاتو مشره، د زده‌کړې پلیټفارم',
      'contact.title': 'راځئ یو څه تیز جوړ کړو',
      'contact.intro':
        'د خپلې پروژې، مهالویش او د «بشپړېدلو» په اړه موږ ته ووایاست. موږ به راتلونکي ګامونه درته ووایو.',
      'contact.detailAddress': 'پته',
      'contact.addrLine1': 'Peshraft Technologies',
      'contact.addrLine2': 'Friedrichstraße 123',
      'contact.addrLine3': '۱۰۱۱۷ برلین، آلمان',
      'contact.detailPhone': 'تلیفون',
      'contact.phoneDisplay': '+49 30 123 45678',
      'contact.detailEmail': 'بریښنالیک',
      'contact.formName': 'نوم',
      'contact.phName': 'ستاسو نوم',
      'contact.formEmail': 'بریښنالیک',
      'contact.phEmail': 'تاسو@شرکت.com',
      'contact.formPhone': 'تلیفون',
      'contact.phPhone': '+۹۳ ۷۰ ۱۲۳ ۴۵۶۷',
      'contact.formKind': 'د اړیکې ډول',
      'contact.kindPersonal': 'شخصي',
      'contact.kindOrganization': 'موسسه / شرکت',
      'contact.formOrgName': 'د موسسې یا شرکت نوم',
      'contact.phOrgName': 'د شرکت یا موسسې نوم',
      'contact.formInterest': 'علاقه',
      'contact.optDev': 'د ویب پاڼې پراختیا',
      'contact.optHost': 'هسټینګ او پاملرنه',
      'contact.optBoth': 'دواړه',
      'contact.optFree': 'وړیا سټاټیک (۱۰ ځایونه)',
      'contact.formMessage': 'پیغام',
      'contact.phMessage': 'د پروژې اهداف، لینکونه، نیټې…',
      'contact.submit': 'پیغام ولېږئ',
      'contact.sending': 'لیږد روان دی…',
      'footer.brand': 'پشرفت ټکنالوژي',
      'footer.rights': 'ټول حقونه خوندي دي.',
      'footer.top': 'بیرته پورته',
      'form.errorRequired': 'مهرباني وکړئ نوم، بریښنالیک، تلیفون او پیغام ډک کړئ.',
      'form.errorOrgName': 'مهرباني وکړئ د موسسې یا شرکت نوم ولیکئ.',
      'form.success': 'مننه — ستاسو پیغام واستول شو. موږ به ژر اړیکه ونیسو.',
      'form.mailtoFallback':
        'آنلاین فورمه ستاسو پیغام ونه لېږلی شو (د میاشتې حد ډک شوی وي). ستاسو بریښنالیک باید ورته پرانیستل شي — هغه بریښنالیک ولېږئ. که نه پرانیستل کیږي، contact@peshraft.tech ولیکئ.',
      'form.mailtoDirect':
        'ستاسو بریښنالیک باید دمخه ډک شوی پیغام سره پرانیستل شي. هغه بریښنالیک ولېږئ. که نه، مستقیم contact@peshraft.tech ولیکئ.',
      'pricing.title': 'پلانونه او نرخونه',
      'pricing.intro':
        'د ثابت او بازارموندنې ویب پاڼو روښانه بستې. لومړی لس ثابت ویب پاڼې موږ وړیا جوړوو — یواځې تاسو د ډومین لګښت کوئ.',
      'pricing.promo.badge': 'محدود وړاندیز',
      'pricing.promo.title': '۱۰ ثابت ویب پاڼې — په بشپړه توګه وړیا',
      'pricing.promo.lead':
        'لومړی ۱۰ ثابت ویب پاڼې موږ په بې‌بخښنې سره درکوو: ډیزاین، جوړښت، لومړی کال هسټینګ زموږ پر سیسټم، SSL او د اړیکو فورمه. ډومین تاسو جلا ثبت او ورکوئ.',
      'pricing.promo.spots': 'ټول ۱۰ ځایونه · ډومین شامل نه دی',
      'pricing.promo.claim':
        'د ځای لپاره contact@peshraft.tech ته بریښنالیک واستوئ او په موضوع کې «Free static site» ولیکئ.',
      'pricing.promo.li1': 'ثابت پاڼه — تر ۵ پاڼو پورې',
      'pricing.promo.li2': 'د موبایل لپاره غبرګونکی بڼه',
      'pricing.promo.li3': '۱ GB د هسټینګ ځای',
      'pricing.promo.li4': 'SSL سند شامل دی',
      'pricing.promo.li5': 'د اړیکو فورمه',
      'pricing.promo.li6': '۲ دورې بیاکتنې · ۷–۱۰ کاري ورځې تحویل',
      'pricing.promo.li7': 'د ډومین نوم شامل نه دی',
      'pricing.starter.name': 'سټارټر',
      'pricing.starter.tag': 'شخصي پاڼې او وړې سوداګرۍ',
      'pricing.starter.price': '$199',
      'pricing.starter.hosting': '+ $9.99/میاشت هسټینګ',
      'pricing.starter.f1': 'تر ۵ پاڼو پورې',
      'pricing.starter.f2': 'د قالپ له مخې ځانګړی ډیزاین',
      'pricing.starter.f3': 'د موبایل لپاره غبرګونکی',
      'pricing.starter.f4': '۵ GB SSD · ۵۰ GB/mo بانډویډت',
      'pricing.starter.f5': '۱ وړیا ډومین (لومړی کال)',
      'pricing.starter.f6': 'SSL + ۱ بریښنالیک حساب',
      'pricing.starter.f7': 'د بریښنالیک ملاتړ — ۴۸ ساعته ځواب',
      'pricing.starter.f8': '۲ بیاکتنې · ۷–۱۰ ورځې تحویل',
      'pricing.business.name': 'بیزنس',
      'pricing.business.tag': 'ودېدونکې سوداګرۍ او خدماتي برانډونه',
      'pricing.business.price': '$499',
      'pricing.business.hosting': '+ $20/میاشت هسټینګ',
      'pricing.business.f1': 'تر ۱۵ پاڼو پورې',
      'pricing.business.f2': 'له پیل څخه ځانګړی ډیزاین',
      'pricing.business.f3': 'بشپړ غبرګونکی · ټول براوزرونه',
      'pricing.business.f4': '۲۰ GB SSD · ۲۰۰ GB/mo بانډویډت',
      'pricing.business.f5': '۱ وړیا ډومین + ۱ سب ډومین',
      'pricing.business.f6': 'SSL + ۵ بریښنالیک حسابونه',
      'pricing.business.f7': 'د پاڼې اساسي SEO تنظیم',
      'pricing.business.f8': 'چټ او بریښنالیک ملاتړ — ۲۴ ساعته',
      'pricing.business.f9': '۴ دورې بیاکتنې',
      'pricing.premium.name': 'پریمیم',
      'pricing.premium.tag': 'پراخ برانډونه او لوړ ټرافیک',
      'pricing.premium.price': '$999',
      'pricing.premium.hosting': '+ $30/میاشت هسټینګ',
      'pricing.premium.f1': 'نامحدود پاڼې',
      'pricing.premium.f2': 'ځانګړی UI/UX ډیزاین',
      'pricing.premium.f3': 'پرمختللې حرکت او تعامل',
      'pricing.premium.f4': '۵۰ GB SSD · نامحدود بانډویډت*',
      'pricing.premium.f5': 'وړیا ډومین + ۳ سب ډومینونه',
      'pricing.premium.f6': 'SSL + ۲۰ بریښنالیک حسابونه',
      'pricing.premium.f7': 'بشپړ SEO ارزونه او تنظیم',
      'pricing.premium.f8': 'لومړیتوب ملاتړ — ۴ ساعته ځواب',
      'pricing.premium.f9': 'نامحدود بیاکتنې',
      'pricing.cta': 'دا پلان غواړئ',
      'pricing.footnote': '* د پریمیم په نامحدود بانډویډت باندې د مناسب کارونې تګلاره پلي کېږي.',
      'infra.title': 'د باور وړ هسټینګ',
      'infra.intro':
        'ستاسو پاڼه په هغه زیربنو باندې چلېږي چې موږ یې په آلمان کې سمو — د امنیت، چټکتیا او ودې لپاره.',
      'infra.stat.region': 'سیمه',
      'infra.stat.regionVal': 'آلمان (EU)',
      'infra.stat.compute': 'د پروسس کچه',
      'infra.stat.computeVal': '۸ vCPU',
      'infra.stat.ram': 'مېموري',
      'infra.stat.ramVal': '۱۶ GB RAM',
      'infra.stat.storage': 'NVMe زېرمه',
      'infra.stat.storageVal': '۴۸۰ GB',
      'infra.p1':
        'موږ ډېرې سپکې ثابت پاڼې په یوه لوړ مشخصاتو مجازی سرور کې هسټ کوو: NVMe، ډېره RAM او د ثابت ټرافیک لپاره مناسب اړیکه — پاڼې چټکې پاتې کېږي.',
      'infra.p2':
        'هره پاڼه د TLS له لارې خدمت کېږي. د هسټ په کچه فایروال، لاسرسي کنټرول او منظم پچ سایکل شته. مرکزونه د صنعت د امنیت او شتون د معیارونو سره سم دي.',
      'infra.p3':
        'موږ سرچینې څارو او ظرفیت پلانوو چې ~۱۰۰ ثابت پاڼې یو له بل سره په ګډه پاتې شي پرته له دې چې ستاسو لیدونکو ته زیان ورسوي.',
      'infra.p4':
        'که تاسو د ګډ ثابت ځای څخه وتړئ، موږ تاسو ځانګړي چاپیریال ته لیږدولی شو — ورته معیارونه، ډېره جلا کول.'
    },
    prs: {
      'meta.title': 'پشرفت تکنالوژی | توسعه وب و میزبانی',
      'meta.description':
        'پشرفت تکنالوژی — توسعه، میزبانی و پلان‌های وب. ده سایت استاتیک نخست رایگان؛ تجربه دیجیتال سریع و امن.',
      'logo.ariaHome': 'صفحه اصلی پشرفت تکنالوژی',
      'nav.openMenu': 'باز کردن منو',
      'lang.label': 'زبان',
      'nav.services': 'خدمات',
      'nav.howWeWork': 'شیوه کار',
      'nav.work': 'نمونه‌کارها',
      'nav.pricing': 'قیمت‌ها',
      'nav.cta': 'شروع یک پروژه',
      'pricing.business.popular': 'محبوب',
      'hero.eyebrow': 'مهارت دیجیتال',
      'hero.titleLead': 'وب‌سایت‌هایی که ',
      'hero.titleAccent': 'کسب‌وکار شما را جلو می‌برند',
      'hero.lede':
        'پشرفت تکنالوژی وب‌سایت‌های پرکارا طراحی و می‌سازد، سپس با میزبانی قابل اعتماد آن‌ها را سریع، امن و آنلاین نگه می‌دارد.',
      'hero.getInTouch': 'تماس بگیرید',
      'hero.exploreServices': 'خدمات را ببینید',
      'hero.statDelivery': 'تحویل',
      'hero.statDeliveryVal': 'اسپرینت چابک',
      'hero.statStack': 'فناوری',
      'hero.statStackVal': 'مدرن و ساده',
      'hero.statHosting': 'میزبانی',
      'hero.statHostingVal': 'تمرکز بر دسترس‌پذیری',
      'hero.livePreview': 'پیش‌نمایش زنده',
      'hero.cardCaption': 'از ایده تا انتشار — یک شریک.',
      'services.title': 'کار ما',
      'services.intro':
        'دو خدمت متمرکز — برای وضوح، سرعت و اعتماد درازمدت طراحی شده‌اند.',
      'services.devTitle': 'توسعه وب‌سایت',
      'services.devText':
        'ساخت سفارشی، بازطراحی و بهینه‌سازی کارایی. نشانه‌گذاری معنادار، رابط قابل دسترس و کدی که با شما رشد می‌کند.',
      'services.devLi1': 'چیدمان واکنش‌گرا و سیستم‌های طراحی',
      'services.devLi2': 'ساختار آماده سئو و اتصال تحلیل',
      'services.devLi3': 'یکپارچه‌سازی و گردش محتوا',
      'services.infraBadge': 'زیرساخت',
      'services.hostTitle': 'میزبانی و نگهداری',
      'services.hostText':
        'میزبانی مدیریت‌شده با پایش، SSL، پشتیبان‌گیری و به‌روزرسانی — تا سایت شما سریع و قابل اعتماد بماند.',
      'services.hostLi1': 'تحویل و کش آماده CDN',
      'services.hostLi2': 'سخت‌سازی امنیتی و وصله‌ها',
      'services.hostLi3': 'پشتیبانی هنگام نیاز',
      'approach.title': 'رویکرد ما',
      'approach.p1':
        'هر پروژه را مانند یک محصول می‌بینیم: اهداف روشن، بازخورد تنگ و نتایج قابل اندازه‌گیری. زمان‌بندی شفاف، بدون اصطلاحات فنی اضافی و سایتی که جدیت برند شما را نشان می‌دهد.',
      'approach.p2':
        'چه به یک سایت بازاریابی تیز نیاز داشته باشید چه آرامش میزبانی، تصمیم‌های فنی را با واقعیت کسب‌وکار شما هم‌راستا می‌کنیم.',
      'approach.s1Title': 'کشف',
      'approach.s1Desc': 'اهداف، مخاطب و معیار موفقیت — از ابتدا روشن.',
      'approach.s2Title': 'طراحی و ساخت',
      'approach.s2Desc': 'رابط تکراری، بودجه کارایی و تحویل تمیز.',
      'approach.s3Title': 'انتشار و میزبانی',
      'approach.s3Desc': 'راه‌اندازی، پایش و مراقبت مداوم.',
      'work.title': 'ساخته‌شده برای کارایی واقعی',
      'work.intro':
        'اصولی که در هر همکاری به کار می‌بریم — ایستا یا پویا، کوچک یا در حال رشد.',
      'work.speed': 'سرعت',
      'work.speedText':
        'دارایی‌های سبک، کش هوشمند و چیدمان‌هایی که روی هر دستگاه فوری به نظر می‌رسند.',
      'work.clarity': 'وضوح',
      'work.clarityText':
        'متن و ساختاری که بازدیدکننده را هدایت می‌کند — پرش کمتر، اقدام روشن‌تر.',
      'work.trust': 'اعتماد',
      'work.trustText':
        'میزبانی امنیت‌محور، HTTPS همه‌جا و دید عملیاتی که بتوان به آن تکیه کرد.',
      'work.ownership': 'مالکیت',
      'work.ownershipText':
        'پیکربندی مستند و پیش‌فرض‌های معقول — بدون قفل جعبه سیاه.',
      'portfolio.title': 'کارهای منتخب',
      'portfolio.intro':
        'همکاری‌های اخیر با تحویل کامل — سایت‌های عمومی، سامانه‌های یادگیری و یکپارچه‌سازی.',
      'portfolio.ao.tag': 'آموزش عالی · افغانستان',
      'portfolio.ao.client': 'Afghanistan Open University',
      'portfolio.ao.lead':
        'میزبانی وب‌سایت عمومی آن‌ها را انجام می‌دهیم و یک سامانه مدیریت یادگیری اختصاصی مبتنی بر Moodle با هم‌راستایی سامانه اطلاعات دانشجو (SIS) برای نام‌نویسی، نمره‌دهی و سوابق ساخته‌ایم.',
      'portfolio.ao.li1': 'میزبانی سایت عمومی در afgou.org',
      'portfolio.ao.li2': 'LMS مودل متناسب با برنامه‌های آموزشی آن‌ها',
      'portfolio.ao.li3': 'گردش کار متصل به SIS برای فراگیران و مدیران',
      'portfolio.ao.link': 'بازدید از afgou.org',
      'portfolio.ao.linkAria': 'وب‌سایت Afghanistan Open University (در تب جدید باز می‌شود)',
      'testimonials.title': 'بازخورد مشتریان',
      'testimonials.intro':
        'نمونه جملاتی که دستاوردها و سبک همکاری ما را نشان می‌دهد.',
      'testimonials.rating5': '۵ از ۵ ستاره',
      'testimonials.rating4': '۴ از ۵ ستاره',
      'testimonials.1.quote':
        'نیازها را زود روشن کردند، به زمان توافق‌شده رسیدند و سایت ما از روز اول روی میزبانی آن‌ها سریع و پایدار مانده است.',
      'testimonials.1.name': 'سمیرا ح.',
      'testimonials.1.role': 'مدیر برنامه، بخش غیرانتفاعی',
      'testimonials.2.quote':
        'ارتباط شفاف، تحویل فنی مرتب و بهبود کارایی قابل اندازه‌گیری — انضباط سازمانی بدون حجم اضافی.',
      'testimonials.2.name': 'جیمز ک.',
      'testimonials.2.role': 'سرپرست فناوری اطلاعات، شرکت خدمات حرفه‌ای',
      'testimonials.3.quote':
        'از استیجینگ تا راه‌اندازی همه‌چیز شفاف بود. زیرساخت را مانند یک محصول جدی می‌گیرند، نه یک فکر آخر.',
      'testimonials.3.name': 'النا و.',
      'testimonials.3.role': 'مسئول عملیات، سامانه آموزشی',
      'contact.title': 'بیایید چیزی تیز بسازیم',
      'contact.intro':
        'درباره پروژه، زمان‌بندی و اینکه «تمام‌شدن» برای شما چگونه است بگویید. ما با گام‌های بعدی پاسخ می‌دهیم.',
      'contact.detailAddress': 'آدرس',
      'contact.addrLine1': 'Peshraft Technologies',
      'contact.addrLine2': 'Friedrichstraße 123',
      'contact.addrLine3': '۱۰۱۱۷ برلین، آلمان',
      'contact.detailPhone': 'تلفن',
      'contact.phoneDisplay': '+49 30 123 45678',
      'contact.detailEmail': 'ایمیل',
      'contact.formName': 'نام',
      'contact.phName': 'نام شما',
      'contact.formEmail': 'ایمیل',
      'contact.phEmail': 'you@company.com',
      'contact.formPhone': 'تلفن',
      'contact.phPhone': '+۹۳ ۷۰ ۱۲۳ ۴۵۶۷',
      'contact.formKind': 'نوع تماس',
      'contact.kindPersonal': 'شخصی',
      'contact.kindOrganization': 'سازمان',
      'contact.formOrgName': 'نام سازمان',
      'contact.phOrgName': 'نام شرکت یا سازمان',
      'contact.formInterest': 'علاقه',
      'contact.optDev': 'توسعه وب‌سایت',
      'contact.optHost': 'میزبانی و نگهداری',
      'contact.optBoth': 'هر دو',
      'contact.optFree': 'سایت استاتیک رایگان (۱۰ جا)',
      'contact.formMessage': 'پیام',
      'contact.phMessage': 'اهداف پروژه، لینک‌ها، مهلت‌ها…',
      'contact.submit': 'ارسال پیام',
      'contact.sending': 'در حال ارسال…',
      'footer.brand': 'پشرفت تکنالوژی',
      'footer.rights': 'تمام حقوق محفوظ است.',
      'footer.top': 'بازگشت به بالا',
      'form.errorRequired': 'لطفاً نام، ایمیل، تلفن و پیام را پر کنید.',
      'form.errorOrgName': 'لطفاً نام سازمان را وارد کنید.',
      'form.success': 'متشکریم — پیام شما ارسال شد. به زودی پاسخ می‌دهیم.',
      'form.mailtoFallback':
        'فرم آنلاین نتوانست پیام را بفرستد (مثلاً اگر سقف ماهانه پر شده باشد). برنامه ایمیل باید با همان جزئیات باز شود — آن را بفرستید. اگر باز نشد، به contact@peshraft.tech بنویسید.',
      'form.mailtoDirect':
        'برنامه ایمیل باید با این پیام از پیش پرشده باز شود. ایمیل را بفرستید. در غیر این صورت مستقیم به contact@peshraft.tech بنویسید.',
      'pricing.title': 'پلان‌ها و قیمت‌ها',
      'pricing.intro':
        'بسته‌های روشن برای سایت‌های استاتیک و بازاریابی. ده وب‌سایت استاتیک نخست را ما می‌سازیم — شما فقط دامنه را پرداخت می‌کنید.',
      'pricing.promo.badge': 'پیشنهاد محدود',
      'pricing.promo.title': '۱۰ وب‌سایت استاتیک — کاملاً رایگان',
      'pricing.promo.lead':
        'ده وب‌سایت استاتیک نخست را بدون هزینه می‌دهیم: طراحی، ساخت، سال نخست میزبانی روی زیرساخت ما، SSL و فرم تماس. دامنه را جداگانه ثبت و پرداخت می‌کنید.',
      'pricing.promo.spots': '۱۰ جایگاه در مجموع · دامنه شامل نیست',
      'pricing.promo.claim':
        'برای رزرو جایگاه به contact@peshraft.tech ایمیل بزنید و در موضوع «Free static site» بنویسید.',
      'pricing.promo.li1': 'سایت استاتیک — تا ۵ صفحه',
      'pricing.promo.li2': 'طراحی واکنش‌گرا برای موبایل',
      'pricing.promo.li3': '۱ گیگابایت فضای میزبانی',
      'pricing.promo.li4': 'گواهی SSL شامل است',
      'pricing.promo.li5': 'یکپارچه‌سازی فرم تماس',
      'pricing.promo.li6': '۲ دور بازبینی · تحویل ۷–۱۰ روز کاری',
      'pricing.promo.li7': 'نام دامنه شامل نیست',
      'pricing.starter.name': 'استارتر',
      'pricing.starter.tag': 'سایت‌های شخصی و کسب‌وکارهای کوچک',
      'pricing.starter.price': '$199',
      'pricing.starter.hosting': '+ $9.99 در ماه میزبانی',
      'pricing.starter.f1': 'تا ۵ صفحه',
      'pricing.starter.f2': 'طراحی سفارشی مبتنی بر قالب',
      'pricing.starter.f3': 'واکنش‌گرا برای موبایل',
      'pricing.starter.f4': '۵ GB SSD · پهنای باند ۵۰ GB در ماه',
      'pricing.starter.f5': '۱ دامنه رایگان (سال نخست)',
      'pricing.starter.f6': 'SSL + ۱ حساب ایمیل',
      'pricing.starter.f7': 'پشتیبانی ایمیل — پاسخ تا ۴۸ ساعت',
      'pricing.starter.f8': '۲ دور بازبینی · تحویل ۷–۱۰ روز',
      'pricing.business.name': 'بیزنس',
      'pricing.business.tag': 'کسب‌وکارهای در حال رشد و برندهای خدماتی',
      'pricing.business.price': '$499',
      'pricing.business.hosting': '+ $20 در ماه میزبانی',
      'pricing.business.f1': 'تا ۱۵ صفحه',
      'pricing.business.f2': 'طراحی سفارشی از صفر',
      'pricing.business.f3': 'کاملاً واکنش‌گرا · همه مرورگرها',
      'pricing.business.f4': '۲۰ GB SSD · پهنای باند ۲۰۰ GB در ماه',
      'pricing.business.f5': '۱ دامنه رایگان + ۱ زیردامنه',
      'pricing.business.f6': 'SSL + ۵ حساب ایمیل',
      'pricing.business.f7': 'تنظیم پایه سئو در صفحه',
      'pricing.business.f8': 'چت و ایمیل — پاسخ تا ۲۴ ساعت',
      'pricing.business.f9': '۴ دور بازبینی',
      'pricing.premium.name': 'پریمیوم',
      'pricing.premium.tag': 'برندهای تثبیت‌شده و ترافیک بالاتر',
      'pricing.premium.price': '$999',
      'pricing.premium.hosting': '+ $30 در ماه میزبانی',
      'pricing.premium.f1': 'صفحات نامحدود',
      'pricing.premium.f2': 'طراحی سفارشی UI/UX',
      'pricing.premium.f3': 'انیمیشن و تعامل پیشرفته',
      'pricing.premium.f4': '۵۰ GB SSD · پهنای باند نامحدود*',
      'pricing.premium.f5': 'دامنه رایگان + ۳ زیردامنه',
      'pricing.premium.f6': 'SSL + ۲۰ حساب ایمیل',
      'pricing.premium.f7': 'ممیزی و راه‌اندازی کامل سئو',
      'pricing.premium.f8': 'پشتیبانی اولویت‌دار — پاسخ تا ۴ ساعت',
      'pricing.premium.f9': 'بازبینی نامحدود',
      'pricing.cta': 'درخواست این پلان',
      'pricing.footnote': '* پهنای باند نامحدود پریمیوم تابع سیاست استفاده منصفانه است.',
      'infra.title': 'میزبانی پایدار و مطمئن',
      'infra.intro':
        'سایت شما روی زیرساختی اجرا می‌شود که ما در آلمان اداره می‌کنیم — برای امنیت، سرعت و جای رشد.',
      'infra.stat.region': 'منطقه',
      'infra.stat.regionVal': 'آلمان (EU)',
      'infra.stat.compute': 'کلاس پردازش',
      'infra.stat.computeVal': '۸ vCPU',
      'infra.stat.ram': 'حافظه',
      'infra.stat.ramVal': '۱۶ GB RAM',
      'infra.stat.storage': 'ذخیره NVMe',
      'infra.stat.storageVal': '۴۸۰ GB',
      'infra.p1':
        'بسیاری از سایت‌های استاتیک سبک را روی یک سرور مجازی پرقدرت میزبانی می‌کنیم: ذخیره NVMe، RAM کافی و اتصال مناسب ترافیک پایدار — صفحات سریع می‌مانند.',
      'infra.p2':
        'هر سایت با TLS ارائه می‌شود. لایه میزبان فایروال، کنترل دسترسی و چرخه منظم وصله امنیتی دارد. مراکز داده مطابق شیوه‌های پذیرفته‌شده صنعت برای امنیت و دسترس‌پذیری‌اند.',
      'infra.p3':
        'منابع را پایش و ظرفیت را برنامه‌ریزی می‌کنیم تا حدود ۱۰۰ ملک استاتیک بدون آزار متقابل برای بازدیدکنندگان شما کنار هم بمانند.',
      'infra.p4':
        'اگر از فضای اشتراکی استاتیک فراتر رفتید، می‌توانیم شما را به محیط اختصاصی‌تر منتقل کنیم — همان استانداردها، جداسازی بیشتر.'
    }
  };

  var currentLang = 'en';

  function get(key) {
    var table = STRINGS[currentLang];
    if (table && Object.prototype.hasOwnProperty.call(table, key)) {
      return table[key];
    }
    return STRINGS.en[key] || '';
  }

  function setDocumentLang(lang) {
    var html = document.documentElement;
    if (lang === 'ps') {
      html.setAttribute('lang', 'ps');
      html.setAttribute('dir', 'rtl');
    } else if (lang === 'prs') {
      html.setAttribute('lang', 'fa-AF');
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
    }
  }

  function applyMeta() {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', get('meta.description'));
    }
    document.title = get('meta.title');
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = get(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', get(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      el.setAttribute('aria-label', get(el.getAttribute('data-i18n-aria-label')));
    });
    applyMeta();
  }

  function setLang(lang) {
    if (!STRINGS[lang]) {
      lang = 'en';
    }
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* ignore */
    }
    setDocumentLang(lang);
    apply();
    var sel = document.getElementById('lang-select');
    if (sel) {
      sel.value = lang;
    }
    document.dispatchEvent(new CustomEvent('peshraft:lang', { detail: { lang: lang } }));
  }

  function init() {
    var saved = 'en';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (err) {
      /* ignore */
    }
    if (!STRINGS[saved]) {
      saved = 'en';
    }
    var sel = document.getElementById('lang-select');
    if (sel) {
      sel.addEventListener('change', function () {
        setLang(sel.value);
      });
    }
    setLang(saved);
  }

  window.peshraftI18n = {
    get: get,
    setLang: setLang,
    apply: apply,
    init: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
