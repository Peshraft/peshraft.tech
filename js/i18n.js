(function () {
  'use strict';

  var STORAGE_KEY = 'peshraft.lang';

  var STRINGS = {
    en: {
      'meta.title': 'The Digital Silk Road | Peshraft Technologies',
      'meta.description':
        'The Digital Silk Road — Peshraft Technologies. From Kabul to the world: fast, secure websites and hosting for Afghanistan. Put your business on the road — use cases and a promise built here.',
      'meta.keywords':
        'web development Afghanistan, website design Kabul, portfolio website Afghanistan, custom website development Kabul, business website Afghanistan, LMS development Afghanistan, Moodle setup Afghanistan, student information system Afghanistan, ERP system Afghanistan, CRM system Kabul, software development Afghanistan, responsive web design Afghanistan, SEO services Kabul, website maintenance Afghanistan, e-commerce website Afghanistan, Herat web design, Kandahar web development, Mazar-e-Sharif website design, Jalalabad web services, Kunduz website development, Bamyan web design, Ghazni web development, Khost web development, Lashkar Gah web design',
      'meta.ogLocale': 'en_US',
      'logo.ariaHome': 'Peshraft Technologies home',
      'nav.openMenu': 'Open menu',
      'lang.label': 'Language',
      'nav.services': 'Services',
      'nav.howWeWork': 'How we work',
      'nav.work': 'Work',
      'nav.about': 'About us',
      'nav.cta': 'Start a project',
      'nav.useCases': 'Use cases',
      'movement.hero.badge': 'The Digital Silk Road · Powered by Peshraft Technologies',
      'movement.hero.line1': 'The Silk Road Ran Through Us.',
      'movement.hero.line2': 'The Digital Road Will Too.',
      'movement.hero.line3': 'From Kabul to the World.',
      'movement.hero.lede': 'Your business. Your country. Visible to the world.',
      'movement.hero.ctaPrimary': 'Put Your Business on the Road →',
      'movement.hero.ctaSecondary': 'See How It Works',
      'movement.hero.scrollHint': 'Scroll',
      'movement.uc.title': 'Built for Every Afghan Business',
      'movement.uc.intro':
        'Whether you run a barbershop in Kandahar or a clinic in Kabul — your business deserves to be found.',
      'movement.uc.photoDisclaimer':
        'Photos are illustrative only and do not show specific Peshraft customers. The supermarket image is credited on the photo (Unsplash); other images are supplied for this page.',
      'movement.uc.barber.tag': 'BARBERSHOP | آرایشگاه | حجامت',
      'movement.uc.barber.title': 'From the Neighborhood Barber to the City\'s Best',
      'movement.uc.barber.body':
        'In a street with five barbershops, the one with a website wins the new customer every time. Your photos are your most powerful tool — show your best work and let customers choose you before they leave home.',
      'movement.uc.barber.imgAlt':
        'Street barbershop: a barber shaving a reclined customer in a leather chair under a blue tarp; another man sits in the foreground.',
      'movement.uc.barber.b1': 'Showcase your best haircut & beard work with photos',
      'movement.uc.barber.b2': 'Appear when people search "barber near me" on Google',
      'movement.uc.barber.b3': 'Stand out from every competitor on your street',
      'movement.uc.barber.b4': 'Build a loyal following that keeps coming back',
      'movement.uc.barber.b5': 'Attract the youth market — they decide online first',
      'movement.uc.pharmacy.tag': 'PHARMACY | دواخانه | درملتون',
      'movement.uc.pharmacy.title': 'Trust Is Everything in Healthcare. A Website Builds It.',
      'movement.uc.pharmacy.body':
        'Customers are putting their health in your hands. A website with your pharmacist\'s name, your license details, and your product range builds the kind of trust a phone number never can.',
      'movement.uc.pharmacy.imgAlt':
        'A pharmacist reaches for a medicine box from densely stocked wooden shelves in a bright pharmacy.',
      'movement.uc.pharmacy.b1': 'Display your license and credentials — instant legitimacy',
      'movement.uc.pharmacy.b2': 'List your medicine range so customers call knowing you have it',
      'movement.uc.pharmacy.b3': 'Be found in health emergencies when people search online',
      'movement.uc.pharmacy.b4': 'Attract NGO and clinic supply partnerships',
      'movement.uc.pharmacy.b5': 'Stand apart from unverified, untrusted competitors',
      'movement.uc.grocery.tag': 'SUPERMARKET | سوپرمارکت | سوپرمارکټ',
      'movement.uc.grocery.title': 'Your Shelves Are Full. Make Sure the World Knows.',
      'movement.uc.grocery.body':
        'Restaurants, hotels, and offices looking for a reliable grocery supplier search online. Your website captures that business before they find someone else.',
      'movement.uc.grocery.imgAlt': 'A vendor seated before stacked goods at a local market.',
      'movement.uc.grocery.photoCreditHtml':
        'Photo by <a href="https://unsplash.com/@mhtaheri19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">mohammad hassan taheri</a> on <a href="https://unsplash.com/photos/a-man-sitting-on-the-ground-in-front-of-a-pile-of-clothing-0EwigJ6vSwY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>',
      'movement.uc.grocery.b1': 'Attract bulk and wholesale buyers who search online',
      'movement.uc.grocery.b2': 'Show your product range to customers before they visit',
      'movement.uc.grocery.b3': 'Be found by Afghans abroad sending packages to family',
      'movement.uc.grocery.b4': 'Announce Ramadan and Eid deals to the whole city',
      'movement.uc.grocery.b5': 'Look as professional as any large supermarket chain',
      'movement.uc.clinic.tag': 'CLINIC | کلینیک | کلینیک',
      'movement.uc.clinic.title': 'Patients Choose the Doctor They Can Trust. Be That Doctor.',
      'movement.uc.clinic.body':
        'Before a patient walks through your door, they have already decided whether to trust you. That decision happens online.',
      'movement.uc.clinic.imgAlt':
        'A healthcare provider measures a seated patient\'s blood pressure with a stethoscope and manual cuff at a clinic desk.',
      'movement.uc.clinic.b1': 'Doctor profiles with qualifications build instant trust',
      'movement.uc.clinic.b2': 'Attract patients from other provinces searching for specialists',
      'movement.uc.clinic.b3': 'Be found by health NGOs and international partners',
      'movement.uc.clinic.b4': 'Publish health content in Dari and Pashto — become the authority',
      'movement.uc.clinic.b5': 'Recruit better qualified doctors to your team',
      'movement.uc.boutique.tag': 'BOUTIQUE | بوتیک | بوتیک',
      'movement.uc.boutique.title': 'Your Designs Deserve to Be Seen Beyond Your Street.',
      'movement.uc.boutique.body':
        'Fashion is visual. The moment a customer sees your collection online, they are already planning their visit.',
      'movement.uc.boutique.imgAlt':
        'A woman in traditional dress and jewelry stands in a bright boutique with stacked wool hats and crafts on display.',
      'movement.uc.boutique.b1': 'Show your collection — photos sell before customers arrive',
      'movement.uc.boutique.b2': 'Reach Afghan women who prefer to browse privately first',
      'movement.uc.boutique.b3': 'Connect with the Afghan diaspora seeking authentic clothing',
      'movement.uc.boutique.b4': 'Publish Eid and Nowruz collections before the season',
      'movement.uc.boutique.b5': 'Build a brand that outlasts any single season',
      'movement.uc.school.tag': 'LEARNING INSTITUTE | موسسه آموزشی | زده‌کړې مرکز',
      'movement.uc.school.title': 'Education Is the Most Respected Investment in Afghanistan.',
      'movement.uc.school.body':
        'Parents researching schools for their children go online first. A website with your teachers\' profiles, curriculum, and results wins enrollment before a single visit.',
      'movement.uc.school.imgAlt':
        'Young students in headscarves sit in rows on a patterned carpet in a classroom, facing the camera in soft natural light.',
      'movement.uc.school.b1': 'Teacher profiles and qualifications build parental trust',
      'movement.uc.school.b2': 'List every course and program — students find you by subject',
      'movement.uc.school.b3': 'Attract NGO partnerships and scholarship program eligibility',
      'movement.uc.school.b4': 'Share alumni success stories — the most powerful proof',
      'movement.uc.school.b5': 'Document your results: pass rates, placements, achievements',
      'movement.promise.title': 'Your Dream Website. Our Promise.',
      'movement.promise.secureTitle': 'Secure',
      'movement.promise.secureBody':
        'Your website is protected 24 hours a day, 7 days a week. Your data. Your customers. Always safe.',
      'movement.promise.fastTitle': 'Fast',
      'movement.promise.fastBody':
        'Lightning fast loading. On any device. Even on slow Afghan internet connections.',
      'movement.promise.strongTitle': 'Strong',
      'movement.promise.strongBody':
        'Built on world-class servers. Never goes down. Always there for your customers.',
      'movement.promise.afghanTitle': 'Afghan-owned',
      'movement.promise.afghanBody':
        'We are Afghan. We speak your language. We understand your business. We are here.',
      'movement.vision.title': 'Every Business That Goes Online Makes Afghanistan Stronger.',
      'movement.vision.body1':
        'When the world searches for Afghan products, services, and businesses — they need to find YOU. Not silence. Not nothing. YOU.',
      'movement.vision.body2': 'This is bigger than a website. This is Afghanistan\'s digital future.',
      'movement.vision.body3': 'And it starts with one decision — yours.',
      'movement.vision.c1Label': 'Businesses already online',
      'movement.vision.c2Label': 'Provinces covered',
      'movement.final.title': 'Your Business Is Ready. Are You?',
      'movement.final.ctaPrimary': 'Build My Website Now',
      'movement.final.ctaSecondary': 'Talk to Us on WhatsApp',
      'movement.whatsapp.aria': 'Chat with Peshraft on WhatsApp',
      'movement.whatsapp.prefill':
        'Hello Peshraft, I want to learn more about getting a website for my business.',
      'movement.footer.movementName': 'The Digital Silk Road',
      'movement.footer.movementTag': 'The Silk Road ran through us. The digital road will too.',
      'movement.footer.badge': 'Proud member of The Digital Silk Road — powered by Peshraft Technologies',
      'movement.footer.linksTitle': 'Quick links',
      'movement.footer.linkHome': 'Home',
      'movement.footer.linkServices': 'Services',
      'movement.footer.linkUseCases': 'Use cases',
      'movement.footer.linkAbout': 'About',
      'movement.footer.linkContact': 'Contact',
      'movement.footer.connectTitle': 'Connect',
      'movement.footer.socialFacebook': 'Facebook',
      'movement.footer.socialTiktok': 'TikTok',
      'movement.footer.socialInstagram': 'Instagram',
      'movement.footer.socialWhatsapp': 'WhatsApp',
      'movement.footer.socialGbp': 'Google Business Profile',
      'movement.footer.copy': '© 2026 Peshraft Technologies. Built in Afghanistan. For Afghanistan.',
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
      'about.mateen.name': 'Mateen Sediqi',
      'about.mateen.role': 'Founder',
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
      'form.errorCaptcha': 'Please complete the verification below.',
      'form.errorCaptchaLoading': 'Please wait for the security check to load, then try again.',
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
      'meta.title': 'ډیجیټل د ابریشم لار | پشرفت ټکنالوژي',
      'meta.description':
        'ډیجیټل د ابریشم لار — د پشرفت ټکنالوژي لخوا. د کابل څخه تر نړۍ پورې: چټکې او خوندي ویب پاڼې او هسټینګ د افغانستان لپاره. خپله سوداګري لار ته کیږئ — کارونو بېلګې او ژمنه په افغانستان کې جوړه شوې.',
      'meta.keywords':
        'د ویب پاڼې جوړول افغانستان, په کابل کې د ویب ډیزاین خدمتونه, د ویب پراختیا شرکت افغانستان, د سوداګرۍ ویب پاڼه جوړول, د پورټفولیو ویب پاڼه جوړول, د ای کامرس ویب پاڼه جوړول افغانستان, د ښوونځي ویب سیستم جوړول, د پوهنتون LMS جوړول افغانستان, د Moodle سیستم جوړول, د محصلینو معلوماتي سیستم جوړول, د ادارې مدیریت سیستم جوړول, د CRM سیستم جوړول کابل, د ERP سیستم جوړول افغانستان, د SEO خدمتونه کابل, د ویب پاڼې ساتنه افغانستان, ارزانه ویب پراختیا کابل, مسلکي ویب ډیزاین افغانستان, هرات ویب ډیزاین, کندهار ویب پراختیا, مزار شریف ویب ډیزاین, جلال اباد ویب خدمتونه, کندز ویب پراختیا, بامیان ویب ډیزاین, غزني ویب پراختیا, خوست ویب پراختیا, لشکرګاه ویب ډیزاین',
      'meta.ogLocale': 'ps_AF',
      'logo.ariaHome': 'پشرفت ټکنالوژي کورپاڼه',
      'nav.openMenu': 'مینو پرانیزئ',
      'lang.label': 'ژبه',
      'nav.services': 'خدمتونه',
      'nav.howWeWork': 'څنګه کار کوو',
      'nav.work': 'کارونه',
      'nav.about': 'زموږ په اړه',
      'nav.cta': 'پروژه پیل کړئ',
      'nav.useCases': 'د کارونو بېلګې',
      'movement.hero.badge': 'ډیجیټل د ابریشم لار · د پشرفت ټکنالوژي لخوا',
      'movement.hero.line1': 'د ابریشم لار زموږ له مینځه تللې.',
      'movement.hero.line2': 'د ډیجیټل لار هم به تیریږي.',
      'movement.hero.line3': 'د کابل څخه تر نړۍ پورې.',
      'movement.hero.lede': 'ستاسو سوداګري. ستاسو هیواد. نړۍ ته ښکاره.',
      'movement.hero.ctaPrimary': 'خپله سوداګري لار ته کیږده ←',
      'movement.hero.ctaSecondary': 'څنګه کار کوي وګورئ',
      'movement.hero.scrollHint': 'سکرول',
      'movement.uc.title': 'د هر افغان سوداګرۍ لپاره جوړ شوی',
      'movement.uc.intro':
        'که د کندهار حجامت وي که د کابل کلینیک — ستاسو سوداګري د موندلو وړ ده.',
      'movement.uc.photoDisclaimer':
        'عکسونه یوازې د بېلګې لپاره دي او د پشرفت ځانګړي پیرودونکي نه ښي. د سوپرمارکت انځور په عکس کې منسوب دی (Unsplash)؛ نور د دې پاڼې لپاره برابر شوي.',
      'movement.uc.barber.tag': 'حجامت | BARBERSHOP | آرایشگاه',
      'movement.uc.barber.title': 'د کوڅې حجامت نه د ښار ترټولو غوره',
      'movement.uc.barber.body':
        'په هغه کوڅه کې چې پنځه حجامتونه وي، هغه چې ویب پاڼه لري هر ځل نوی پیرودونکی وړي. ستاسو عکسونه ستاسو ترټولو قوي وسیله ده — خپل غوره کار وښایاست.',
      'movement.uc.barber.imgAlt':
        'د کوڅې حجامت: حجامت په چرمي څوکۍ کې ناست پیرودونکی ږیریږي؛ شین پلاستیکي پرده؛ بل سړی په مخ کې ناست دی.',
      'movement.uc.barber.b1': 'د وریښتو او ږیرې غوره کار عکسونو سره',
      'movement.uc.barber.b2': 'کله چې خلک په ګوګل کې «نږدې حجامت» لټوي ښکاره اوسئ',
      'movement.uc.barber.b3': 'د خپلې کوڅې له ټولو سیالانو څخه جلا اوسئ',
      'movement.uc.barber.b4': 'وفادار پیرودونکي چې بیرته راځي جوړ کړئ',
      'movement.uc.barber.b5': 'ځوانان لومړی آنلاین پریکړه کوي — هغوی ته ورسیږئ',
      'movement.uc.pharmacy.tag': 'درملتون | PHARMACY | دواخانه',
      'movement.uc.pharmacy.title': 'د روغتیا په برخه کې باور هر څه دی. ویب پاڼه یې جوړوي.',
      'movement.uc.pharmacy.body':
        'پیرودونکي خپله روغتیا ستاسو لاسونو ته سپاري. یوه ویب پاڼه د درملتون د دارو ساز نوم، جواز او محصولاتو سره هغه باور جوړوي چې یو تلیفون شمیره هیڅکله نشي کولای.',
      'movement.uc.pharmacy.imgAlt':
        'په روښانه درملتون کې دارو ساز له ډکو نجورو الماریو څخه د درملو یوه بکسه اخلي.',
      'movement.uc.pharmacy.b1': 'جواز او اسناد وښایاست — فوري مشروعیت',
      'movement.uc.pharmacy.b2': 'د درملو لست — پیرودونکی پوهیږي چې تاسو لرئ',
      'movement.uc.pharmacy.b3': 'په اضطراري روغتیايي لټون کې ومومل شئ',
      'movement.uc.pharmacy.b4': 'NGO او کلینیکونو سره د عرضې ملګرتیا',
      'movement.uc.pharmacy.b5': 'د ناتایید شویو سیالانو څخه جلا اوسئ',
      'movement.uc.grocery.tag': 'سوپرمارکټ | SUPERMARKET | سوپرمارکت',
      'movement.uc.grocery.title': 'ستاسو الماریانې ډکې دي. ډاډ ترلاسه کړئ چې نړۍ پوهیږي.',
      'movement.uc.grocery.body':
        'رستورانونه، هوټلونه او دفترونه چې د معتبر خوراکي توکو عرضه کوونکي لټوي، آنلاین لټون کوي. ستاسو ویب پاڼه هغه سوداګري نیسي مخکې له دې چې بل ومومي.',
      'movement.uc.grocery.imgAlt': 'یوه پلورونکی چې په ځایي بازار کې د جامو له ډېر ګډ په مخ کې ناست دی.',
      'movement.uc.grocery.photoCreditHtml':
        'انځور له <a href="https://unsplash.com/@mhtaheri19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">mohammad hassan taheri</a> څخه په <a href="https://unsplash.com/photos/a-man-sitting-on-the-ground-in-front-of-a-pile-of-clothing-0EwigJ6vSwY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a> کې',
      'movement.uc.grocery.b1': 'عمده او عمده پیرودونکي چې آنلاین لټوي',
      'movement.uc.grocery.b2': 'د لیدنې دمخه محصولات وښایاست',
      'movement.uc.grocery.b3': 'هغه افغانان چې کورنیو ته بستې لیږي تاسو ومومي',
      'movement.uc.grocery.b4': 'د رمضان او اختر وړاندیزونه ټول ښار ته',
      'movement.uc.grocery.b5': 'لکه لوی زنځیرونه مسلکي ښکاره اوسئ',
      'movement.uc.clinic.tag': 'کلینیک | CLINIC | کلینیک',
      'movement.uc.clinic.title': 'ناروغان هغه ډاکتر غوره کوي چې ورباندې باور کوي. هغه ډاکتر اوسئ.',
      'movement.uc.clinic.body':
        'مخکې له دې چې ناروغ ستاسو دروازې ته راشي، دمخه یې پریکړه کړې چې ستاسو باور وکړي که نه. دا پریکړه آنلاین کیږي.',
      'movement.uc.clinic.imgAlt':
        'په کلینیک کې روغتیایي کارکوونکی د ستاتوسکوپ او لاسي فشار اندازونکي سره د ناست ناروغ د وینې فشار اندازوي.',
      'movement.uc.clinic.b1': 'د ډاکټرانو پروفایلونه او اسناد باور جوړوي',
      'movement.uc.clinic.b2': 'د نورو ولایتونو ناروغان چې متخصص لټوي',
      'movement.uc.clinic.b3': 'د روغتیا NGO او نړیوالو ملګرو لټون',
      'movement.uc.clinic.b4': 'په پښتو او دري کې روغتیايي مینځپانګه — مرجع اوسئ',
      'movement.uc.clinic.b5': 'غوره ډاکټران ستاسو ټیم ته راجلب کړئ',
      'movement.uc.boutique.tag': 'بوتیک | BOUTIQUE | بوتیک',
      'movement.uc.boutique.title': 'ستاسو ډیزاینونه د ستاسو کوڅې هاخوا د لیدلو وړ دي.',
      'movement.uc.boutique.body':
        'فیشن لیدني دی. هغه شیبه چې پیرودونکی ستاسو ټولګه آنلاین ویني، دمخه د لیدنې پلان کوي.',
      'movement.uc.boutique.imgAlt':
        'په روښانه بوتیک کې د سنتی جامو او زیور په سر یوه ښځه د ګنډو پاکولو او صنایعو مخې ته ولاړه ده.',
      'movement.uc.boutique.b1': 'ټولګه عکسونو سره — پیرود د لیدنې دمخه',
      'movement.uc.boutique.b2': 'هغه افغانې چې لومړی په ځان کې لټون کوي',
      'movement.uc.boutique.b3': 'مهاجر افغانان اصلي جامې لټوي — تاسو سره وصل کړئ',
      'movement.uc.boutique.b4': 'د اختر او نوروز ټولګې د فصل دمخه',
      'movement.uc.boutique.b5': 'هغه برانډ جوړ کړئ چې فصل له فصل څخه پاتې وي',
      'movement.uc.school.tag': 'زده‌کړې مرکز | LEARNING INSTITUTE | موسسه آموزشی',
      'movement.uc.school.title': 'زده‌کړه د افغانستان کې ترټولو درنه پانګه‌اچونه ده.',
      'movement.uc.school.body':
        'هغه مور او پلار چې د خپلو ماشومانو لپاره ښوونځی لټوي لومړی آنلاین ځي. یوه ویب پاڼه د معلمانو پروفایلونو، نصاب او پایلو سره د یوې لیدنې دمخه ثبت‌نام وړي.',
      'movement.uc.school.imgAlt':
        'د ښوونځي نجونې زده‌کړونکې د سرتنځو په سر په رنګارنګ فرش باندې په قطارونو کې ناستې دي؛ نرم رڼا له کړکۍ څخه.',
      'movement.uc.school.b1': 'د معلمانو پروفایلونه د مور او پلار باور',
      'movement.uc.school.b2': 'ټول کورسونه — د مضمون له مخې موندل کیږئ',
      'movement.uc.school.b3': 'د NGO او بورسونو ملګرتیا',
      'movement.uc.school.b4': 'د فارغانو کیسې — ترټولو قوي ثبوت',
      'movement.uc.school.b5': 'پایلې، نمرې او بریالیتوبونه ثبت کړئ',
      'movement.promise.title': 'ستاسو د خوب ویب پاڼه. زموږ ژمنه.',
      'movement.promise.secureTitle': 'خوندي',
      'movement.promise.secureBody':
        'ستاسو ویب پاڼه ۲۴ ساعته، اوونۍ کې ۷ ورځې خوندي ده. ستاسو معلومات. ستاسو پیرودونکي. تل خوندي.',
      'movement.promise.fastTitle': 'ګړندی',
      'movement.promise.fastBody':
        'خورا ګړندی لوډینګ. د هر وسیلې کې. حتی د افغانستان د ورو انټرنیټ اتصال سره.',
      'movement.promise.strongTitle': 'پیاوړی',
      'movement.promise.strongBody':
        'د نړۍ کلاس سرورونو کې جوړ شوی. هیڅکله نه پریوزي. تل ستاسو پیرودونکو لپاره هلته دی.',
      'movement.promise.afghanTitle': 'افغان مالکیت',
      'movement.promise.afghanBody':
        'موږ افغان یو. ستاسو ژبه پوهیږو. ستاسو سوداګري پیژنو. موږ دلته یو.',
      'movement.vision.title': 'هره سوداګري چې آنلاین کیږي افغانستان قوي‌تر کوي.',
      'movement.vision.body1':
        'کله چې نړۍ د افغاني محصولاتو، خدماتو او سوداګرۍ لټون کوي — اړتیا لري چې تاسو ومومي. نه خاموشي. نه هیڅ. تاسو.',
      'movement.vision.body2': 'دا د یوې ویب پاڼې نه لوی دی. دا د افغانستان ډیجیټل راتلونکی دی.',
      'movement.vision.body3': 'او د یوې پریکړې سره پیل کیږي — ستاسو پریکړه.',
      'movement.vision.c1Label': 'سوداګرۍ دمخه آنلاین',
      'movement.vision.c2Label': 'ولایتونه پوښل شوي',
      'movement.final.title': 'ستاسو سوداګري چمتو ده. ایا تاسو چمتو یاست؟',
      'movement.final.ctaPrimary': 'اوس زما ویب پاڼه جوړه کړئ',
      'movement.final.ctaSecondary': 'زموږ سره واټساپ کې خبرې وکړئ',
      'movement.whatsapp.aria': 'په واټساپ کې له پشرفت سره خبرې وکړئ',
      'movement.whatsapp.prefill':
        'سلام پیشرفت، زه غواړم د خپلې سوداګرۍ لپاره د ویب پاڼې په اړه نور معلومات ترلاسه کړم.',
      'movement.footer.movementName': 'ډیجیټل د ابریشم لار',
      'movement.footer.movementTag': 'د ابریشم لار زموږ له مینځه تللې. د ډیجیټل لار هم به تیریږي.',
      'movement.footer.badge': 'د ډیجیټل د ابریشم لار فخر غړی — د پشرفت ټکنالوژي لخوا',
      'movement.footer.linksTitle': 'چټک لینکونه',
      'movement.footer.linkHome': 'کور',
      'movement.footer.linkServices': 'خدمتونه',
      'movement.footer.linkUseCases': 'د کارونو بېلګې',
      'movement.footer.linkAbout': 'زموږ په اړه',
      'movement.footer.linkContact': 'اړیکه',
      'movement.footer.connectTitle': 'اړیکې',
      'movement.footer.socialFacebook': 'فیسبوک',
      'movement.footer.socialTiktok': 'ټیک ټاک',
      'movement.footer.socialInstagram': 'انستاګرام',
      'movement.footer.socialWhatsapp': 'واټساپ',
      'movement.footer.socialGbp': 'ګوګل بزنس',
      'movement.footer.copy': '© ۱۴۰۵ پیشرفت ټکنالوژي. افغانستان کې جوړ شوی. د افغانستان لپاره.',
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
      'about.mateen.name': 'Mateen Sediqi',
      'about.mateen.role': 'بنسټ ایښودونکی',
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
      'form.errorCaptcha': 'مهرباني وکړئ لاندې تایید بشپړ کړئ.',
      'form.errorCaptchaLoading': 'مهرباني وکړئ د امنیتي چک بارولو ته انتظار وکړئ، بیا هڅه وکړئ.',
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
      'meta.title': 'جاده دیجیتال ابریشم | پشرفت تکنالوژی',
      'meta.description':
        'جاده دیجیتال ابریشم — با پشرفت تکنالوژی. از کابل تا جهان: وب‌سایت‌های سریع و امن و میزبانی برای افغانستان. کسب‌وکار خود را روی جاده بگذارید — نمونه‌های کاربردی و وعده‌ای که در افغانستان ساخته شده است.',
      'meta.keywords':
        'طراحی وب‌سایت در افغانستان, توسعه وب در کابل, شرکت طراحی سایت افغانستان, ساخت وب‌سایت شرکتی در کابل, ساخت سایت پورتفولیو افغانستان, طراحی سایت فروشگاهی افغانستان, توسعه سیستم مدیریتی افغانستان, ساخت سیستم CRM در کابل, توسعه سیستم ERP افغانستان, راه‌اندازی LMS در افغانستان, پیاده‌سازی Moodle افغانستان, سیستم معلومات محصلین افغانستان, طراحی سایت دانشگاهی افغانستان, خدمات سئو در کابل, پشتیبانی و نگهداری سایت افغانستان, طراحی سایت واکنش‌گرا افغانستان, توسعه نرم‌افزار تحت وب افغانستان, هرات طراحی سایت, قندهار توسعه وب, مزار شریف طراحی سایت, جلال‌آباد خدمات وب, کندز توسعه وب, بامیان طراحی سایت, غزنی توسعه وب, خوست توسعه وب, لشکرگاه طراحی سایت',
      'meta.ogLocale': 'fa_AF',
      'logo.ariaHome': 'صفحه اصلی پشرفت تکنالوژی',
      'nav.openMenu': 'باز کردن منو',
      'lang.label': 'زبان',
      'nav.services': 'خدمات',
      'nav.howWeWork': 'شیوه کار',
      'nav.work': 'نمونه‌کارها',
      'nav.about': 'دربارهٔ ما',
      'nav.cta': 'شروع یک پروژه',
      'nav.useCases': 'نمونه‌های کاربردی',
      'movement.hero.badge': 'جاده دیجیتال ابریشم · با پشرفت تکنالوژی',
      'movement.hero.line1': '«جاده ابریشم از ما گذشت.»',
      'movement.hero.line2': '«جاده دیجیتال هم خواهد گذشت.»',
      'movement.hero.line3': '«از کابل تا جهان.»',
      'movement.hero.lede': '«تجارت شما. کشور شما. در برابر جهان دیده می‌شود.»',
      'movement.hero.ctaPrimary': '«تجارت خود را روی جاده بگذار» ←',
      'movement.hero.ctaSecondary': 'ببینید چگونه کار می‌کند',
      'movement.hero.scrollHint': 'اسکرول',
      'movement.uc.title': '«برای هر تجارت افغانی ساخته شده»',
      'movement.uc.intro':
        '«چه آرایشگاه در قندهار داشته باشید چه کلینیک در کابل — تجارت شما لایق دیده شدن است.»',
      'movement.uc.photoDisclaimer':
        'تصاویر صرفاً نمونه‌ای هستند و مشتریان مشخص پشرفت را نشان نمی‌دهند. تصویر سوپرمارکت روی عکس با منبع آمده (Unsplash)؛ سایر تصاویر برای این صفحه تهیه شده‌اند.',
      'movement.uc.barber.tag': 'آرایشگاه | BARBERSHOP | حجامت',
      'movement.uc.barber.title': '«از آرایشگاه محله تا بهترین در شهر»',
      'movement.uc.barber.body':
        '«در خیابانی با پنج آرایشگاه، آن که وبسایت دارد هر بار مشتری جدید را می‌برد. عکس‌های شما قوی‌ترین ابزار شما هستند.»',
      'movement.uc.barber.imgAlt':
        'آرایشگاه خیابانی: آرایشگر در حال اصلاح صورت مشتری لمیده روی صندلی چرمی زیر سایه‌بان آبی؛ مردی دیگر در پیش‌زمینه نشسته است.',
      'movement.uc.barber.b1': 'نمایش بهترین کوتاهی مو، ریش و دقت برش با عکس',
      'movement.uc.barber.b2': 'وقتی مردم «آرایشگر نزدیک من» را جستجو می‌کنند دیده شوید',
      'movement.uc.barber.b3': 'از هر رقیبی در همان خیابان متمایز شوید',
      'movement.uc.barber.b4': 'پایگاه مشتریان وفادار بسازید',
      'movement.uc.barber.b5': 'بازار جوانان — آن‌ها اول آنلاین تصمیم می‌گیرند',
      'movement.uc.pharmacy.tag': 'دواخانه | PHARMACY | درملتون',
      'movement.uc.pharmacy.title': '«اعتماد در صحت همه چیز است. وبسایت آن را می‌سازد.»',
      'movement.uc.pharmacy.body':
        '«مشتریان صحت خود را به دست شما می‌سپارند. یک وبسایت با نام داروساز، مجوز و محصولات شما نوعی اعتماد می‌سازد که یک شماره تلفن هرگز نمی‌تواند.»',
      'movement.uc.pharmacy.imgAlt':
        'داروساز در داروخانه روشن، جعبه دارو را از قفسه‌های چوبی پر از دارو برمی‌دارد.',
      'movement.uc.pharmacy.b1': 'نمایش مجوز و مدارک — اعتبار فوری',
      'movement.uc.pharmacy.b2': 'فهرست داروها تا مشتری بداند شما دارید',
      'movement.uc.pharmacy.b3': 'در شرایط اضطراری سلامت آنلاین پیدا شوید',
      'movement.uc.pharmacy.b4': 'همکاری عرضه با NGO و کلینیک‌ها',
      'movement.uc.pharmacy.b5': 'از رقبای تأییدنشده جدا باشید',
      'movement.uc.grocery.tag': 'سوپرمارکت | SUPERMARKET | سوپرمارکټ',
      'movement.uc.grocery.title': '«قفسه‌های شما پر است. مطمئن شوید جهان می‌داند.»',
      'movement.uc.grocery.body':
        '«رستوران‌ها، هتل‌ها و ادارات که به دنبال تأمین‌کننده مواد غذایی هستند، آنلاین جستجو می‌کنند. وبسایت شما آن تجارت را قبل از اینکه کس دیگری پیدا کند، می‌گیرد.»',
      'movement.uc.grocery.imgAlt': 'فروشنده نشسته مقابل انبوه لباس در یک بازار محلی.',
      'movement.uc.grocery.photoCreditHtml':
        'عکس از <a href="https://unsplash.com/@mhtaheri19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">mohammad hassan taheri</a> در <a href="https://unsplash.com/photos/a-man-sitting-on-the-ground-in-front-of-a-pile-of-clothing-0EwigJ6vSwY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>',
      'movement.uc.grocery.b1': 'جذب خریداران عمده که آنلاین جستجو می‌کنند',
      'movement.uc.grocery.b2': 'نمایش محصولات قبل از حضور',
      'movement.uc.grocery.b3': 'یافتن توسط افغانان خارج از کشور برای بسته‌های خانوادگی',
      'movement.uc.grocery.b4': 'اعلام پیشنهادهای رمضان و عید برای کل شهر',
      'movement.uc.grocery.b5': 'به اندازه زنجیره‌های بزرگ حرفه‌ای به نظر برسید',
      'movement.uc.clinic.tag': 'کلینیک | CLINIC | کلینیک',
      'movement.uc.clinic.title': '«بیماران پزشکی را انتخاب می‌کنند که به او اعتماد دارند. آن پزشک باشید.»',
      'movement.uc.clinic.body':
        '«قبل از اینکه بیمار از در شما وارد شود، قبلاً تصمیم گرفته که به شما اعتماد کند یا نه. این تصمیم آنلاین گرفته می‌شود.»',
      'movement.uc.clinic.imgAlt':
        'ارائه‌دهنده خدمات سلامت فشار خون بیمار نشسته را با گوشی پزشکی و فشارسنج دستی پشت میز مطب اندازه می‌گیرد.',
      'movement.uc.clinic.b1': 'پروفایل پزشکان و مدارک — اعتماد فوری',
      'movement.uc.clinic.b2': 'جذب بیماران استان‌های دیگر برای متخصص',
      'movement.uc.clinic.b3': 'یافتن توسط NGOها و شرکای بین‌المللی',
      'movement.uc.clinic.b4': 'محتوای سلامت به دری و پشتو — مرجع شوید',
      'movement.uc.clinic.b5': 'جذب پزشکان با صلاحیت بالاتر',
      'movement.uc.boutique.tag': 'بوتیک | BOUTIQUE | بوتیک',
      'movement.uc.boutique.title': '«طرح‌های شما لایق دیده شدن فراتر از کوچه شما هستند.»',
      'movement.uc.boutique.body':
        '«مد بصری است. لحظه‌ای که مشتری مجموعه شما را آنلاین می‌بیند، قبلاً برای بازدید برنامه‌ریزی می‌کند.»',
      'movement.uc.boutique.imgAlt':
        'زنی با لباس و زیور سنتی در بوتیک روشن؛ کلاه‌های پشمی چیده‌شده و صنایع دستی در ویترین.',
      'movement.uc.boutique.b1': 'نمایش مجموعه — عکس‌ها قبل از حضور می‌فروشند',
      'movement.uc.boutique.b2': 'دسترسی به زنان افغان که ترجیح می‌دهند نخست خصوصی ببینند',
      'movement.uc.boutique.b3': 'ارتباط با diaspora برای پوشاک اصیل',
      'movement.uc.boutique.b4': 'انتشار مجموعه‌های عید و نوروز پیش از فصل',
      'movement.uc.boutique.b5': 'برندی بسازید که فراتر از یک فصل بماند',
      'movement.uc.school.tag': 'موسسه آموزشی | LEARNING INSTITUTE | زده‌کړې مرکز',
      'movement.uc.school.title': '«آموزش مهم‌ترین سرمایه‌گذاری در افغانستان است.»',
      'movement.uc.school.body':
        '«والدینی که برای فرزندانشان مدرسه جستجو می‌کنند ابتدا آنلاین می‌روند. یک وبسایت با پروفایل معلمان، برنامه درسی و نتایج، ثبت‌نام را قبل از یک بازدید واحد می‌برد.»',
      'movement.uc.school.imgAlt':
        'دانش‌آموزان دختر با روسری در ردیف روی فرش طرح‌دار کلاس، روبه‌روی دوربین در نور ملایم پنجره.',
      'movement.uc.school.b1': 'پروفایل معلمان و صلاحیت‌ها — اعتماد والدین',
      'movement.uc.school.b2': 'فهرست هر دوره و برنامه',
      'movement.uc.school.b3': 'جذب همکاری NGO و واجد شرایط بورسیه',
      'movement.uc.school.b4': 'داستان موفقیت فارغ‌التحصیلان',
      'movement.uc.school.b5': 'ثبت نتایج: نرخ قبولی، جایگاه، دستاوردها',
      'movement.promise.title': '«وبسایت رویایی شما. وعده ما.»',
      'movement.promise.secureTitle': 'امن',
      'movement.promise.secureBody':
        '«وبسایت شما ۲۴ ساعته، ۷ روز هفته محافظت می‌شود. داده‌های شما. مشتریان شما. همیشه امن.»',
      'movement.promise.fastTitle': 'سریع',
      'movement.promise.fastBody':
        '«بارگذاری بسیار سریع. روی هر دستگاهی. حتی با اتصال اینترنت کند افغانستان.»',
      'movement.promise.strongTitle': 'قوی',
      'movement.promise.strongBody':
        '«بر روی سرورهای جهانی ساخته شده. هرگز از کار نمی‌افتد. همیشه برای مشتریان شما آنجاست.»',
      'movement.promise.afghanTitle': 'مالکیت افغان',
      'movement.promise.afghanBody':
        '«ما افغان هستیم. زبان شما را می‌فهمیم. تجارت شما را می‌شناسیم. ما اینجاییم.»',
      'movement.vision.title': '«هر تجارتی که آنلاین می‌شود افغانستان را قوی‌تر می‌کند.»',
      'movement.vision.body1':
        '«وقتی جهان به دنبال محصولات، خدمات و تجارت‌های افغانی می‌گردد — باید شما را پیدا کند. نه سکوت. نه هیچ. شما.»',
      'movement.vision.body2': '«این بزرگتر از یک وبسایت است. این آینده دیجیتال افغانستان است.»',
      'movement.vision.body3': '«و با یک تصمیم شروع می‌شود — تصمیم شما.»',
      'movement.vision.c1Label': 'تجارت در حال حاضر آنلاین',
      'movement.vision.c2Label': 'ولایت پوشش داده شده',
      'movement.final.title': '«تجارت شما آماده است. آیا شما آماده‌اید؟»',
      'movement.final.ctaPrimary': '«همین حالا وبسایتم را بسازید»',
      'movement.final.ctaSecondary': '«از طریق واتساپ با ما صحبت کنید»',
      'movement.whatsapp.aria': 'گفتگو با پشرفت در واتساپ',
      'movement.whatsapp.prefill':
        '«سلام پیشرفت، می‌خواهم درباره وبسایت برای تجارتم بیشتر بدانم.»',
      'movement.footer.movementName': 'جاده دیجیتال ابریشم',
      'movement.footer.movementTag': 'جاده ابریشم از ما گذشت. جاده دیجیتال هم خواهد گذشت.',
      'movement.footer.badge': 'عضو افتخارآمیز جاده دیجیتال ابریشم — با پشرفت تکنالوژی',
      'movement.footer.linksTitle': 'لینک‌های سریع',
      'movement.footer.linkHome': 'خانه',
      'movement.footer.linkServices': 'خدمات',
      'movement.footer.linkUseCases': 'نمونه‌های کاربردی',
      'movement.footer.linkAbout': 'دربارهٔ ما',
      'movement.footer.linkContact': 'تماس',
      'movement.footer.connectTitle': 'ارتباط',
      'movement.footer.socialFacebook': 'فیسبوک',
      'movement.footer.socialTiktok': 'تیک‌تاک',
      'movement.footer.socialInstagram': 'اینستاگرام',
      'movement.footer.socialWhatsapp': 'واتساپ',
      'movement.footer.socialGbp': 'پروفایل کسب‌وکار گوگل',
      'movement.footer.copy': '© ۱۴۰۵ پیشرفت تکنالوژی. ساخته شده در افغانستان. برای افغانستان.',
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
      'about.mateen.name': 'Mateen Sediqi',
      'about.mateen.role': 'بنیان‌گذار',
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
      'form.errorCaptcha': 'لطفاً تأیید امنیتی زیر را تکمیل کنید.',
      'form.errorCaptchaLoading': 'لطفاً تا بارگذاری بررسی امنیتی صبر کنید و دوباره تلاش کنید.',
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
    var title = get('meta.title');
    var description = get('meta.description');
    var keywords = get('meta.keywords');
    var ogLocale = get('meta.ogLocale');
    var metaDescription = document.querySelector('meta[name="description"]');
    var metaKeywords = document.querySelector('meta[name="keywords"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    var ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    var twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    if (ogLocaleMeta && ogLocale) {
      ogLocaleMeta.setAttribute('content', ogLocale);
    }
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    document.title = title;
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
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', get(el.getAttribute('data-i18n-alt')));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = get(el.getAttribute('data-i18n-html'));
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
