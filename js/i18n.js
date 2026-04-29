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
      'nav.about': 'About us',
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
      'about.title': 'About us',
      'about.intro':
        'Peshraft was built to help people and companies ship websites faster and keep them performant. We handle the technical side — you focus on your customers and experience.',
      'about.hasib.name': 'Hasibullah Sahibzada',
      'about.hasib.role': 'Co-founder',
      'about.hasib.linkedinAria': 'Hasibullah Sahibzada on LinkedIn',
      'about.hasib.twitterAria': 'Hasibullah Sahibzada on X (Twitter)',
      'about.hasib.githubAria': 'Hasibullah Sahibzada on GitHub',
      'about.mateen.name': 'Mateen Sediqi',
      'about.mateen.role': 'Co-founder',
      'about.mateen.linkedinAria': 'Mateen Sediqi on LinkedIn',
      'about.mateen.twitterAria': 'Mateen Sediqi on X (Twitter)',
      'about.mateen.githubAria': 'Mateen Sediqi on GitHub',
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
      'contact.addrLine2': 'Darulaman Rd',
      'contact.addrLine3': 'Kabul 100708, Afghanistan',
      'contact.detailPhone': 'Phone',
      'contact.phoneDisplay': '+93 70 001 2400',
      'contact.detailEmail': 'Email',
      'contact.formName': 'Name',
      'contact.phName': 'Your name',
      'contact.formEmail': 'Email',
      'contact.phEmail': 'you@company.com',
      'contact.formPhone': 'Phone',
      'contact.phPhone': '+93 70 001 2400',
      'contact.formKind': 'Contact type',
      'contact.kindPersonal': 'Personal',
      'contact.kindOrganization': 'Organization',
      'contact.formOrgName': 'Organization name',
      'contact.phOrgName': 'Company or organization name',
      'contact.formInterest': 'Interest',
      'contact.optDev': 'Website development',
      'contact.optHost': 'Hosting & care',
      'contact.optBoth': 'Both',
      'contact.optEnterprise': 'Enterprise',
      'contact.optFree': 'Free website (10 spots)',
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
      'pricing.promo.title': '10 websites — completely free',
      'pricing.promo.price': '$0',
      'pricing.promo.domainNote': 'Domain not included',
      'pricing.promo.priceLabel': 'Limited launch',
      'pricing.promo.renewal': '$9.99/mo after one year',
      'pricing.promo.lead':
        'We’re giving away the first 10 sites at no charge: design, build, first year of hosting on our stack, SSL, and a contact form. You register and pay for your domain separately.',
      'pricing.promo.spots': '10 spots total',
      'pricing.promo.claim': 'Email contact@peshraft.tech with subject “Free website” to claim a spot.',
      'pricing.promo.li1': 'Website — up to 5 pages',
      'pricing.promo.li2': 'Mobile-responsive layout',
      'pricing.promo.li3': '1 GB storage',
      'pricing.promo.li4': 'SSL certificate included',
      'pricing.promo.li5': 'Contact form integration',
      'pricing.promo.li6': '2 revision rounds · 7–10 business-day delivery',
      'pricing.promo.li8': '',
      'pricing.oneTime': 'One-time build',
      'pricing.starter.name': 'Starter',
      'pricing.starter.tag': 'Personal sites & small businesses',
      'pricing.starter.price': 'from $99',
      'pricing.starter.hosting': 'Hosting/month — from $4.99',
      'pricing.starter.f1': '',
      'pricing.starter.f2': 'Mobile-responsive layout',
      'pricing.starter.f3': 'Contact form integration',
      'pricing.starter.f4': 'Template-based custom design',
      'pricing.starter.f6': 'SSL certificate included',
      'pricing.starter.f7': '1 free domain (1st year)',
      'pricing.starter.f8': 'Email support — 48h response',
      'pricing.starter.f9': '2 revision rounds · 7–10 day delivery',
      'pricing.business.popular': 'Best value',
      'pricing.business.name': 'Business',
      'pricing.business.tag': 'Growing businesses & service brands',
      'pricing.business.price': 'from $299',
      'pricing.business.hosting': 'from $9.99/mo hosting',
      'pricing.business.f1': 'With a database.',
      'pricing.business.f2': 'Mobile-responsive layout',
      'pricing.business.f3': 'Contact form integration',
      'pricing.business.f5': 'Custom design from scratch',
      'pricing.business.f6': 'Fully responsive · cross-browser',
      'pricing.business.f8': 'SSL certificate included',
      'pricing.business.f9': '1 free domain + 1 subdomain',
      'pricing.business.f10': 'Basic on-page SEO setup',
      'pricing.business.f11': 'Chat & email support — 24h',
      'pricing.business.f12': '4 revision rounds',
      'pricing.enterprise.name': 'Enterprise',
      'pricing.enterprise.tag': 'Large programmes, regulated teams, and complex roadmaps',
      'pricing.enterprise.priceLabel': 'Custom engagement',
      'pricing.enterprise.price': 'Upon request',
      'pricing.enterprise.hosting': 'Build, hosting, SLAs & support tailored to your needs',
      'pricing.enterprise.f1': 'Business-grade baseline — extended to your roadmap',
      'pricing.enterprise.f2': 'Multi-site, multi-brand, or phased rollouts',
      'pricing.enterprise.f3': 'Custom integrations, APIs, and data workflows',
      'pricing.enterprise.f4': 'Dedicated or isolated infrastructure options',
      'pricing.enterprise.f5': 'Security hardening, monitoring & backups (as agreed)',
      'pricing.enterprise.f6': 'Named contacts & clear escalation paths',
      'pricing.enterprise.f7': 'SLA windows & uptime targets — upon request',
      'pricing.enterprise.f8': 'Compliance-aware delivery aligned to your requirements',
      'pricing.enterprise.cta': 'Request a proposal',
      'pricing.cta': 'Request this plan',
      'infra.title': '',
      'infra.intro': '',
      'infra.stat.region': '',
      'infra.stat.regionVal': '',
      'infra.stat.compute': '',
      'infra.stat.computeVal': '',
      'infra.stat.ram': '',
      'infra.stat.ramVal': '',
      'infra.stat.storage': '',
      'infra.stat.storageVal': '',
      'infra.p1': '',
      'infra.p2': '',
      'infra.p3': '',
      'infra.p4': ''
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
      'nav.about': 'زموږ په اړه',
      'nav.pricing': 'نرخونه',
      'nav.cta': 'پروژه پیل کړئ',
      'pricing.business.popular': 'غوره ارزښت',
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
      'about.title': 'زموږ په اړه',
      'about.intro':
        'موږ پشرفت د دې لپاره جوړ کړ چې خلکو او شرکتونو ته د مسلکي ویب پاڼو ژر او چټکې، اوږدمهالې پاتې کېدونکې لارې برابرې کړو. تخنیکي برخه زموږ دنده ده — ستاسو تمرکز باید د پیرودونکو تجربه پر وي.',
      'about.hasib.name': 'Hasibullah Sahibzada',
      'about.hasib.role': 'هم‌بنسټ اېښودونکی',
      'about.hasib.linkedinAria': 'Hasibullah Sahibzada په LinkedIn',
      'about.hasib.twitterAria': 'Hasibullah Sahibzada په X (Twitter)',
      'about.hasib.githubAria': 'Hasibullah Sahibzada په GitHub',
      'about.mateen.name': 'Mateen Sediqi',
      'about.mateen.role': 'هم‌بنسټ اېښودونکی',
      'about.mateen.linkedinAria': 'Mateen Sediqi په LinkedIn',
      'about.mateen.twitterAria': 'Mateen Sediqi په X (Twitter)',
      'about.mateen.githubAria': 'Mateen Sediqi په GitHub',
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
      'contact.addrLine2': 'Darulaman Rd',
      'contact.addrLine3': 'Kabul 100708, Afghanistan',
      'contact.detailPhone': 'تلیفون',
      'contact.phoneDisplay': '+93 70 001 2400',
      'contact.detailEmail': 'بریښنالیک',
      'contact.formName': 'نوم',
      'contact.phName': 'ستاسو نوم',
      'contact.formEmail': 'بریښنالیک',
      'contact.phEmail': 'تاسو@شرکت.com',
      'contact.formPhone': 'تلیفون',
      'contact.phPhone': '+۹۳ ۷۰ ۰۰۱ ۲۴۰۰',
      'contact.formKind': 'د اړیکې ډول',
      'contact.kindPersonal': 'شخصي',
      'contact.kindOrganization': 'موسسه / شرکت',
      'contact.formOrgName': 'د موسسې یا شرکت نوم',
      'contact.phOrgName': 'د شرکت یا موسسې نوم',
      'contact.formInterest': 'علاقه',
      'contact.optDev': 'د ویب پاڼې پراختیا',
      'contact.optHost': 'هسټینګ او پاملرنه',
      'contact.optBoth': 'دواړه',
      'contact.optEnterprise': 'انټرپرایز',
      'contact.optFree': 'وړیا ویب پاڼه (۱۰ ځایونه)',
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
      'pricing.promo.title': '۱۰ ویب پاڼې — په بشپړه توګه وړیا',
      'pricing.promo.price': '$0',
      'pricing.promo.domainNote': 'ډومین شامل نه دی',
      'pricing.promo.priceLabel': 'محدود پیل',
      'pricing.promo.renewal': 'د یو کال وروسته $9.99/میاشت',
      'pricing.promo.lead':
        'لومړی ۱۰ ثابت ویب پاڼې موږ په بې‌بخښنې سره درکوو: ډیزاین، جوړښت، لومړی کال هسټینګ زموږ پر سیسټم، SSL او د اړیکو فورمه. ډومین تاسو جلا ثبت او ورکوئ.',
      'pricing.promo.spots': 'ټول ۱۰ ځایونه',
      'pricing.promo.claim':
        'د ځای لپاره contact@peshraft.tech ته بریښنالیک واستوئ او په موضوع کې «Free website» ولیکئ.',
      'pricing.promo.li1': 'ثابت پاڼه — تر ۵ پاڼو پورې',
      'pricing.promo.li2': 'د موبایل لپاره غبرګونکی بڼه',
      'pricing.promo.li3': '۱ GB زېرمه',
      'pricing.promo.li4': 'SSL سند شامل دی',
      'pricing.promo.li5': 'د اړیکو فورمه',
      'pricing.promo.li6': '۲ دورې بیاکتنې · ۷–۱۰ کاري ورځې تحویل',
      'pricing.promo.li8': '',
      'pricing.oneTime': 'یو ځل جوړښت',
      'pricing.starter.name': 'سټارټر',
      'pricing.starter.tag': 'شخصي پاڼې او وړې سوداګرۍ',
      'pricing.starter.price': 'from $99',
      'pricing.starter.hosting': 'Hosting/month — from $4.99',
      'pricing.starter.f1': '',
      'pricing.starter.f2': 'د موبایل لپاره غبرګونکی بڼه',
      'pricing.starter.f3': 'د اړیکو فورمه',
      'pricing.starter.f4': 'د قالپ له مخې ځانګړی ډیزاین',
      'pricing.starter.f6': 'SSL سند شامل دی',
      'pricing.starter.f7': '۱ وړیا ډومین (لومړی کال)',
      'pricing.starter.f8': 'د بریښنالیک ملاتړ — ۴۸ ساعته ځواب',
      'pricing.starter.f9': '۲ بیاکتنې · ۷–۱۰ ورځې تحویل',
      'pricing.business.name': 'بیزنس',
      'pricing.business.tag': 'ودېدونکې سوداګرۍ او خدماتي برانډونه',
      'pricing.business.price': 'from $299',
      'pricing.business.hosting': 'from $9.99/میاشت هسټینګ',
      'pricing.business.f1': 'With a database.',
      'pricing.business.f2': 'د موبایل لپاره غبرګونکی بڼه',
      'pricing.business.f3': 'د اړیکو فورمه',
      'pricing.business.f5': 'له پیل څخه ځانګړی ډیزاین',
      'pricing.business.f6': 'بشپړ غبرګونکی · ټول براوزرونه',
      'pricing.business.f8': 'SSL سند شامل دی',
      'pricing.business.f9': '۱ وړیا ډومین + ۱ سب ډومین',
      'pricing.business.f10': 'د پاڼې اساسي SEO تنظیم',
      'pricing.business.f11': 'چټ او بریښنالیک ملاتړ — ۲۴ ساعته',
      'pricing.business.f12': '۴ دورې بیاکتنې',
      'pricing.enterprise.name': 'انټرپرایز',
      'pricing.enterprise.tag': 'لوی پروګرامونه، مقرراتي ټیمونه او پرمختللې لارې',
      'pricing.enterprise.priceLabel': 'ځانګړه همکارۍ',
      'pricing.enterprise.price': 'د غوښتنې پر اساس',
      'pricing.enterprise.hosting': 'جوړښت، هسټینګ، SLA او ملاتړ ستاسو اړتیاو سره سم',
      'pricing.enterprise.f1': 'د بیزنس کچې بنسټ — ستاسو نقشه لار ته غځول',
      'pricing.enterprise.f2': 'څو پاڼې، څو برانډونه یا پړاوونه سره پیل',
      'pricing.enterprise.f3': 'ځانګړي ادغامونه، API او د معلوماتو بهیرونه',
      'pricing.enterprise.f4': 'ځانګړی یا جلا زیربنا اختیارونه',
      'pricing.enterprise.f5': 'د امنیت پیاوړتیا، څارنه او بیک اپونه (د هوکړې سره سم)',
      'pricing.enterprise.f6': 'نومېدلې اړیکې او روښانه لوړول لارې',
      'pricing.enterprise.f7': 'د SLA او شتون اهداف — د غوښتنې پر اساس',
      'pricing.enterprise.f8': 'د مقرراتو سره سم تحویل — ستاسو اړتیاو سره سم',
      'pricing.enterprise.cta': 'وړاندیز غواړئ',
      'pricing.cta': 'دا پلان غواړئ',
      'infra.title': '',
      'infra.intro': '',
      'infra.stat.region': '',
      'infra.stat.regionVal': '',
      'infra.stat.compute': '',
      'infra.stat.computeVal': '',
      'infra.stat.ram': '',
      'infra.stat.ramVal': '',
      'infra.stat.storage': '',
      'infra.stat.storageVal': '',
      'infra.p1': '',
      'infra.p2': '',
      'infra.p3': '',
      'infra.p4': ''
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
      'nav.about': 'دربارهٔ ما',
      'nav.pricing': 'قیمت‌ها',
      'nav.cta': 'شروع یک پروژه',
      'pricing.business.popular': 'بهترین ارزش',
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
      'about.title': 'دربارهٔ ما',
      'about.intro':
        'پشرفت برای این ساخته شد که به افراد و شرکت‌ها کمک کند وب‌سایت‌ها را سریع‌تر راه‌اندازی کنند و کارایی آن‌ها حفظ شود. جزئیات فنی با ماست — تمرکز شما بر تجربهٔ مشتری.',
      'about.hasib.name': 'Hasibullah Sahibzada',
      'about.hasib.role': 'هم‌بنیان‌گذار',
      'about.hasib.linkedinAria': 'Hasibullah Sahibzada در LinkedIn',
      'about.hasib.twitterAria': 'Hasibullah Sahibzada در X (توییتر)',
      'about.hasib.githubAria': 'Hasibullah Sahibzada در GitHub',
      'about.mateen.name': 'Mateen Sediqi',
      'about.mateen.role': 'هم‌بنیان‌گذار',
      'about.mateen.linkedinAria': 'Mateen Sediqi در LinkedIn',
      'about.mateen.twitterAria': 'Mateen Sediqi در X (توییتر)',
      'about.mateen.githubAria': 'Mateen Sediqi در GitHub',
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
      'contact.addrLine2': 'Darulaman Rd',
      'contact.addrLine3': 'Kabul 100708, Afghanistan',
      'contact.detailPhone': 'تلفن',
      'contact.phoneDisplay': '+93 70 001 2400',
      'contact.detailEmail': 'ایمیل',
      'contact.formName': 'نام',
      'contact.phName': 'نام شما',
      'contact.formEmail': 'ایمیل',
      'contact.phEmail': 'you@company.com',
      'contact.formPhone': 'تلفن',
      'contact.phPhone': '+۹۳ ۷۰ ۰۰۱ ۲۴۰۰',
      'contact.formKind': 'نوع تماس',
      'contact.kindPersonal': 'شخصی',
      'contact.kindOrganization': 'سازمان',
      'contact.formOrgName': 'نام سازمان',
      'contact.phOrgName': 'نام شرکت یا سازمان',
      'contact.formInterest': 'علاقه',
      'contact.optDev': 'توسعه وب‌سایت',
      'contact.optHost': 'میزبانی و نگهداری',
      'contact.optBoth': 'هر دو',
      'contact.optEnterprise': 'سازمانی (انترپرایز)',
      'contact.optFree': 'وب‌سایت رایگان (۱۰ جا)',
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
      'pricing.promo.price': '$0',
      'pricing.promo.domainNote': 'دامنه شامل نیست',
      'pricing.promo.priceLabel': 'عرضه محدود',
      'pricing.promo.renewal': 'بعد از یک سال $9.99 در ماه',
      'pricing.promo.lead':
        'ده وب‌سایت استاتیک نخست را بدون هزینه می‌دهیم: طراحی، ساخت، سال نخست میزبانی روی زیرساخت ما، SSL و فرم تماس. دامنه را جداگانه ثبت و پرداخت می‌کنید.',
      'pricing.promo.spots': '۱۰ جایگاه در مجموع',
      'pricing.promo.claim':
        'برای رزرو جایگاه به contact@peshraft.tech ایمیل بزنید و در موضوع «Free website» بنویسید.',
      'pricing.promo.li1': 'وب‌سایت — تا ۵ صفحه',
      'pricing.promo.li2': 'طراحی واکنش‌گرا برای موبایل',
      'pricing.promo.li3': '۱ گیگابایت ذخیره‌سازی',
      'pricing.promo.li4': 'گواهی SSL شامل است',
      'pricing.promo.li5': 'یکپارچه‌سازی فرم تماس',
      'pricing.promo.li6': '۲ دور بازبینی · تحویل ۷–۱۰ روز کاری',
      'pricing.promo.li8': '',
      'pricing.oneTime': 'هزینه یک‌بار ساخت',
      'pricing.starter.name': 'استارتر',
      'pricing.starter.tag': 'سایت‌های شخصی و کسب‌وکارهای کوچک',
      'pricing.starter.price': 'from $99',
      'pricing.starter.hosting': 'Hosting/month — from $4.99',
      'pricing.starter.f1': '',
      'pricing.starter.f2': 'طراحی واکنش‌گرا برای موبایل',
      'pricing.starter.f3': 'یکپارچه‌سازی فرم تماس',
      'pricing.starter.f4': 'طراحی سفارشی مبتنی بر قالب',
      'pricing.starter.f6': 'گواهی SSL شامل است',
      'pricing.starter.f7': '۱ دامنه رایگان (سال نخست)',
      'pricing.starter.f8': 'پشتیبانی ایمیل — پاسخ تا ۴۸ ساعت',
      'pricing.starter.f9': '۲ دور بازبینی · تحویل ۷–۱۰ روز',
      'pricing.business.name': 'بیزنس',
      'pricing.business.tag': 'کسب‌وکارهای در حال رشد و برندهای خدماتی',
      'pricing.business.price': 'from $299',
      'pricing.business.hosting': 'from $9.99 در ماه میزبانی',
      'pricing.business.f1': 'With a database.',
      'pricing.business.f2': 'طراحی واکنش‌گرا برای موبایل',
      'pricing.business.f3': 'یکپارچه‌سازی فرم تماس',
      'pricing.business.f5': 'طراحی سفارشی از صفر',
      'pricing.business.f6': 'کاملاً واکنش‌گرا · همه مرورگرها',
      'pricing.business.f8': 'گواهی SSL شامل است',
      'pricing.business.f9': '۱ دامنه رایگان + ۱ زیردامنه',
      'pricing.business.f10': 'تنظیم پایه سئو در صفحه',
      'pricing.business.f11': 'چت و ایمیل — پاسخ تا ۲۴ ساعت',
      'pricing.business.f12': '۴ دور بازبینی',
      'pricing.enterprise.name': 'انترپرایز',
      'pricing.enterprise.tag': 'برنامه‌های بزرگ، تیم‌های مقررات‌محور و نقشه راه پیچیده',
      'pricing.enterprise.priceLabel': 'همکاری سفارشی',
      'pricing.enterprise.price': 'بر اساس درخواست',
      'pricing.enterprise.hosting': 'ساخت، میزبانی، SLA و پشتیبانی متناسب با نیاز شما',
      'pricing.enterprise.f1': 'پایه سطح بیزنس — گسترش‌پذیر بر اساس نقشه راه شما',
      'pricing.enterprise.f2': 'چند سایت، چند برند یا رول‌اوت مرحله‌ای',
      'pricing.enterprise.f3': 'یکپارچه‌سازی سفارشی، API و گردش کار داده',
      'pricing.enterprise.f4': 'گزینه‌های زیرساخت اختصاصی یا ایزوله',
      'pricing.enterprise.f5': 'سخت‌سازی امنیتی، پایش و پشتیبان‌گیری (طبق توافق)',
      'pricing.enterprise.f6': 'تماس‌های نام‌گذاری‌شده و مسیرهای روشن تشدید',
      'pricing.enterprise.f7': 'پنجره‌های SLA و اهداف دسترس‌پذیری — بر اساس درخواست',
      'pricing.enterprise.f8': 'تحویل آگاه از انطباق، هم‌راستا با الزامات شما',
      'pricing.enterprise.cta': 'درخواست پیشنهاد',
      'pricing.cta': 'درخواست این پلان',
      'infra.title': '',
      'infra.intro': '',
      'infra.stat.region': '',
      'infra.stat.regionVal': '',
      'infra.stat.compute': '',
      'infra.stat.computeVal': '',
      'infra.stat.ram': '',
      'infra.stat.ramVal': '',
      'infra.stat.storage': '',
      'infra.stat.storageVal': '',
      'infra.p1': '',
      'infra.p2': '',
      'infra.p3': '',
      'infra.p4': ''
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
