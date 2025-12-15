import { useEffect, useState } from "react";
import "./App.css";
import logoIlg from "./assets/ilg-logo.svg";
import logoInstagram from "./assets/ig-logo.png";
import logoLinkedIn from "./assets/linkedin-logo.png";
import logoX from "./assets/X-logo.png";
import relyLogo1 from "./assets/relylogo1.png";
import relyLogo2 from "./assets/relylogo2.png";
import relyLogo3 from "./assets/relylogo3.png";
import relyLogo4 from "./assets/relylogo4.png";

const HERO_LOCATION_IMAGE =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=640&q=80";
const HERO_MISSION_IMAGE =
  "https://images.unsplash.com/photo-1529429602931-65ed87dc80d6?auto=format&fit=crop&w=640&q=80";
const HERO_ORBIT_DOTS = Array.from({ length: 9 });

const COPY = {
  en: {
    nav: { menu: "Menu" },
    social: { instagram: "Instagram", linkedin: "LinkedIn", x: "X (Twitter)" },
    hero: {
      title: "A Multidisciplinary Law Firm With Over Three Decades Of Experience",
      subheading: "General Corporate | Advisory | Dispute Resolution",
      cta: "Start with us",
      locationChip: "Our location",
      locationTitle: "Tijaria Tower — 12 floor, Kuwait City",
      missionChip: "Our mission",
      missionTitle: "Comprehensive legal guidance",
      stats: {
        employees: { value: "20 +", label: "Experienced Employees" },
        clients: { value: "400 +", label: "Clients Every Year" },
        explore: "Explore more",
      },
    },
    reliability: [
      {
        title: "Professional expertise and experience",
        description: "Diverse experience that ensures competent execution of varied legal matters.",
        icon: relyLogo1,
      },
      {
        title: "A wide range of services",
        description: "Civil, criminal, corporate, tax, labor, and more.",
        icon: relyLogo2,
      },
      {
        title: "Ensuring legality and minimizing risks",
        description: "Compliance support, strong legal documents, and risk-minded advice.",
        icon: relyLogo3,
      },
      {
        title: "Saving time and resources",
        description: "Faster, efficient handling so clients keep their focus on business.",
        icon: relyLogo4,
      },
    ],
    multisector: {
      titleLines: ["Kuwait-based", "multisector law firm"],
      missionLead:
        "Our mission - provide comprehensive legal guidance to our clients to achieve their strategic goals and secure their interests.",
      body: "International Legal Group (ILG) is a Kuwait-based multisector law firm with over three decades of experience. Our firm is known for its unwavering commitment to achieving exceptional results for our clients, underpinned by a deep understanding of the regional regulatory environment.",
      cta: "Learn more",
      quoteIntro: "Welcome to International Legal Group",
      quoteText:
        "Partnership with us is a guarantee of quality, reliability and individual approach to your business. We are always ready to offer innovative solutions and ensure your peace of mind in any legal situation.",
      quoteHighlight: "to offer innovative solutions",
      quoteAuthor: "Prof. Adel Al-Tahatobaei, Founder of International Legal Group",
    },
    practice: {
      title: "Practice Areas",
      description:
        "From preliminary legal advice to litigation, we are a full-service law firm serving individuals, businesses, and governments.",
      cta: "Learn more",
      cards: [
        { title: "General Corporate & Advisory", subtitle: "Strategic governance, mergers, acquisitions, and restructurings." },
        { title: "Dispute Resolution", subtitle: "Representation before Kuwaiti courts, arbitral tribunals, and regulators." },
      ],
    },
    team: {
      title: "Our Team",
      description:
        "Our Dynamic, Multidisciplinary Team Brings A Wealth Of Experience From Their Various Backgrounds And Is Well-Versed In Dealing With Legal Issues In A Variety Of Industries And Countries.",
      cta: "Learn more",
      members: [
        { name: "Noor Al-Sabah", role: "Managing Partner" },
        { name: "Hassan Al-Khaled", role: "Head of Corporate" },
        { name: "Layla Al-Salem", role: "Banking & Finance Partner" },
        { name: "Faris Al-Mutairi", role: "Litigation Counsel" },
      ],
      highlightCopy: [
        "Constitutional expert Noor Al-Sabah is the Chairman of ILG with over 44 years of experience, specialising in administrative and constitutional matters. He currently serves as a consultant to the Amiri Diwan and the office of H.H. the Amir of Kuwait.",
        "Noor Al-Sabah previously served as the Minister of Education and Higher Education, the Dean of the Faculty of Law at Kuwait University, and the Head of the Technical Office at the Ministry of Justice.",
      ],
      controls: {
        prevAria: "Previous team members",
        nextAria: "Next team members",
      },
    },
    insights: {
      title: "Insights",
      description:
        "We provide a wide range of legal insights and perspectives on new legislation, landmark cases, papers, publications, and case studies below.",
      cta: "Learn more",
      categories: ["Books", "Research articles", "Publications", "Case studies"],
    },
    news: {
      title: "Last News",
      description:
        "Our newsroom is designed to provide clients with the latest news and insights from the legal and business developments, client alerts and more below.",
      cta: "View more news",
      readMore: "Read more",
      items: [
        {
          date: "15 January 2024",
          title: "ILG ranked among top-tier firms in the GCC",
          description:
            "The Chairman & Board of Directors are sorry to announce the death of Prof Rashid Alnaei (Founder & Partner at ILG). Deepest condolences to his family from all members at ILG.",
        },
        {
          date: "16 January 2024",
          title: "Regional conference keynote on ESG regulation",
          description:
            "The Chairman & Board of Directors are sorry to announce the death of Prof Rashid Alnaei (Founder & Partner at ILG). Deepest condolences to his family from all members at ILG.",
        },
        {
          date: "17 January 2024",
          title: "Announcing our new Riyadh liaison office",
          description:
            "The Chairman & Board of Directors are sorry to announce the death of Prof Rashid Alnaei (Founder & Partner at ILG). Deepest condolences to his family from all members at ILG.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "We will answer all the questions",
      defaultOpenIndex: 2,
      items: [
        {
          question: "What services do you provide?",
          answer: "We advise on corporate, commercial, dispute resolution, banking, finance, labour matters, and regulatory compliance.",
        },
        {
          question: "How do I make an appointment for a consultation?",
          answer: "Submit an inquiry and our team will schedule the earliest available consultation slot.",
        },
        {
          question: "How much does a consultation cost?",
          answer: "The first consultation is free; ongoing work is scoped to the complexity of your matter.",
        },
        {
          question: "How long does my case last?",
          answer: "Timelines vary; we share a roadmap and milestones tailored to your case.",
        },
        {
          question: "What documents do I need to provide to get started?",
          answer: "We send a tailored checklist once we understand your needs, so you can prepare quickly.",
        },
        {
          question: "Is it possible to get a consultation online?",
          answer: "Yes. We routinely host secure virtual meetings for clients across the GCC and internationally.",
        },
      ],
    },
    careers: {
      title: "Careers",
      subtitle: "We are always looking for new and seasoned talent to join us. Explore our opportunities and programs below.",
      cta: "Learn more",
      fields: {
        name: "Enter your name",
        phone: "Enter your phone number",
        email: "Enter your email address",
        cvUrl: "Your CV URL (Optional)",
      },
      uploadLabel: "Upload CV / Resume",
      uploadHint: "File size PDF max. 10 MB",
      consent: "By submitting this form I accept the Privacy Policy of this site.",
      submit: "Submit your application",
      note: "Your CV and the personal data it contains will not be used; it is used solely by Alkamel to help recruit the best candidate for a specific role. This data is stored safely and shared only with relevant managers and retained for no longer than the time required after you apply for a position, at which point it is deleted, whichever is earlier. If you wish to update any details about this item, please see our privacy policy or contact us.",
    },
    footer: {
      infoTitle: "Information",
      links: [
        ["About", "Practise Areas", "Our Team", "Insights"],
        ["Last News", "Faq", "Careers", "Contact"],
      ],
      addressTitle: "Address And Contacts",
      addressLines: [
        "Address: Tijaria Tower - 12 floor, Kuwait City",
        "Tel: +965 2249 1841/0",
        "+965 2245 2157/8",
        "Email: info@ilg.com.kw",
      ],
      bottomLinks: ["Privacy Policy", "Terms & Conditions"],
    },
  },
  ar: {
    nav: { menu: "القائمة" },
    social: { instagram: "إنستغرام", linkedin: "لينكدإن", x: "إكس (تويتر)" },
    hero: {
      title: "شركة محاماة متعددة التخصصات بخبرة تتجاوز ثلاثة عقود",
      subheading: "الشركات | الاستشارات | تسوية المنازعات",
      cta: "ابدأ معنا",
      locationChip: "موقعنا",
      locationTitle: "برج التيجارية – الطابق 12، مدينة الكويت",
      missionChip: "مهمتنا",
      missionTitle: "إرشاد قانوني شامل",
      stats: {
        employees: { value: "20 +", label: "موظف ذو خبرة" },
        clients: { value: "400 +", label: "عميل سنوياً" },
        explore: "استكشف المزيد",
      },
    },
    reliability: [
      {
        title: "خبرة مهنية واسعة",
        description: "تجارب متنوعة تضمن تنفيذ القضايا القانونية بكفاءة.",
        icon: relyLogo1,
      },
      {
        title: "مجالات خدمات متعددة",
        description: "مدني، جنائي، شركات، ضرائب، عمل، وغيرها.",
        icon: relyLogo2,
      },
      {
        title: "ضمان الامتثال وتقليل المخاطر",
        description: "دعم الالتزام بالأنظمة وصياغة مستندات قانونية متينة.",
        icon: relyLogo3,
      },
      {
        title: "توفير الوقت والموارد",
        description: "إنجاز أسرع وأكثر كفاءة حتى يركز العميل على أعماله.",
        icon: relyLogo4,
      },
    ],
    multisector: {
      titleLines: ["شركة محاماة متعددة القطاعات", "من الكويت"],
      missionLead:
        "مهمتنا – تقديم إرشاد قانوني شامل لعملائنا لتحقيق أهدافهم الاستراتيجية وحماية مصالحهم.",
      body: "مجموعة الخدمات القانونية الدولية (ILG) هي شركة محاماة كويتية متعددة القطاعات بخبرة تتجاوز ثلاثة عقود. يشتهر فريقنا بالتزامه بتحقيق نتائج متميزة لعملائنا، مع فهم عميق للبيئة التنظيمية في المنطقة.",
      cta: "اعرف المزيد",
      quoteIntro: "مرحباً بكم في مجموعة الخدمات القانونية الدولية",
      quoteText:
        "شراكتك معنا تعني الجودة والموثوقية ونهجاً شخصياً لعملك. نحن دائماً جاهزون لتقديم حلول مبتكرة وضمان راحة بالك في أي موقف قانوني.",
      quoteHighlight: "لتقديم حلول مبتكرة",
      quoteAuthor: "الأستاذ عادل الطحطباوي، مؤسس مجموعة الخدمات القانونية الدولية",
    },
    practice: {
      title: "مجالات الممارسة",
      description:
        "من الاستشارات الأولية إلى التقاضي، نحن شركة محاماة شاملة نخدم الأفراد والشركات والجهات الحكومية.",
      cta: "اعرف المزيد",
      cards: [
        { title: "الشركات والاستشارات العامة", subtitle: "الحوكمة الاستراتيجية والاندماجات والاستحواذات وإعادة الهيكلة." },
        { title: "تسوية المنازعات", subtitle: "تمثيل أمام المحاكم الكويتية وهيئات التحكيم والجهات التنظيمية." },
      ],
    },
    team: {
      title: "فريقنا",
      description:
        "فريقنا الديناميكي متعدد التخصصات يمتلك خبرات واسعة وخلفيات متنوعة وقادر على التعامل مع القضايا القانونية في مختلف القطاعات والدول.",
      cta: "اعرف المزيد",
      members: [
        { name: "نور الصباح", role: "الشريك المدير" },
        { name: "حسن الخالد", role: "رئيس قسم الشركات" },
        { name: "ليلى السالم", role: "شريك البنوك والتمويل" },
        { name: "فارس المطيري", role: "مستشار التقاضي" },
      ],
      highlightCopy: [
        "الخبير الدستوري نور الصباح يشغل منصب رئيس مجلس إدارة ILG ولديه أكثر من 44 عاماً من الخبرة في الشؤون الإدارية والدستورية. يعمل حالياً مستشاراً للديوان الأميري ومكتب سمو أمير الكويت.",
        "سبق أن شغل نور الصباح منصب وزير التربية والتعليم العالي وعميد كلية الحقوق بجامعة الكويت ورئيس المكتب الفني في وزارة العدل.",
      ],
      controls: {
        prevAria: "أعضاء الفريق السابقون",
        nextAria: "أعضاء الفريق التاليون",
      },
    },
    insights: {
      title: "رؤى قانونية",
      description:
        "نقدّم مجموعة واسعة من الآراء القانونية حول التشريعات الجديدة والقضايا البارزة والأوراق العلمية والمنشورات ودراسات الحالات.",
      cta: "اعرف المزيد",
      categories: ["كتب", "مقالات بحثية", "منشورات", "دراسات حالة"],
    },
    news: {
      title: "آخر الأخبار",
      description:
        "صممنا غرفة الأخبار لتزويد العملاء بآخر التطورات القانونية والاقتصادية والتنبيهات الخاصة بالعملاء والمزيد أدناه.",
      cta: "عرض المزيد من الأخبار",
      readMore: "اقرأ المزيد",
      items: [
        {
          date: "15 يناير 2024",
          title: "تصنيف ILG بين أفضل الشركات في الخليج",
          description:
            "يؤسف رئيس وأعضاء مجلس الإدارة أن يعلنوا وفاة الأستاذ رشيد النعيمي (المؤسس والشريك في ILG). أحر التعازي لأسرته من جميع أعضاء ILG.",
        },
        {
          date: "16 يناير 2024",
          title: "كلمة رئيسية عن تشريعات الاستدامة في مؤتمر إقليمي",
          description:
            "يؤسف رئيس وأعضاء مجلس الإدارة أن يعلنوا وفاة الأستاذ رشيد النعيمي (المؤسس والشريك في ILG). أحر التعازي لأسرته من جميع أعضاء ILG.",
        },
        {
          date: "17 يناير 2024",
          title: "الإعلان عن مكتبنا التمثيلي الجديد في الرياض",
          description:
            "يؤسف رئيس وأعضاء مجلس الإدارة أن يعلنوا وفاة الأستاذ رشيد النعيمي (المؤسس والشريك في ILG). أحر التعازي لأسرته من جميع أعضاء ILG.",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "نجيب على جميع استفساراتكم",
      defaultOpenIndex: 2,
      items: [
        {
          question: "ما الخدمات التي تقدمونها؟",
          answer: "نقدم الاستشارات في الشركات والتجاري والمنازعات والبنوك والتمويل والعمل والامتثال التنظيمي.",
        },
        {
          question: "كيف أحجز موعد استشارة؟",
          answer: "أرسل طلباً وسيتواصل فريقنا لتحديد أقرب موعد متاح.",
        },
        {
          question: "كم تكلفة الاستشارة؟",
          answer: "الاستشارة الأولى مجانية؛ يتم تسعير العمل اللاحق حسب تعقيد المسألة.",
        },
        {
          question: "كم يستغرق إنجاز قضيتي؟",
          answer: "تختلف المدد؛ نشارك خطة عمل وجدولاً زمنياً خاصاً بقضيتك.",
        },
        {
          question: "ما المستندات المطلوبة للبدء؟",
          answer: "نرسل قائمة تحقق مخصصة بعد فهم احتياجاتك لتجهيزها سريعاً.",
        },
        {
          question: "هل يمكن الحصول على استشارة إلكترونية؟",
          answer: "نعم، نعقد اجتماعات افتراضية آمنة للعملاء في الخليج وخارجه.",
        },
      ],
    },
    careers: {
      title: "الوظائف",
      subtitle: "دائماً نبحث عن المواهب الجديدة والمتمرسة للانضمام إلينا. اكتشف الفرص والبرامج أدناه.",
      cta: "اعرف المزيد",
      fields: {
        name: "أدخل اسمك",
        phone: "أدخل رقم هاتفك",
        email: "أدخل بريدك الإلكتروني",
        cvUrl: "رابط السيرة الذاتية (اختياري)",
      },
      uploadLabel: "رفع السيرة الذاتية",
      uploadHint: "حجم ملف PDF بحد أقصى 10 ميغابايت",
      consent: "بتقديم هذا النموذج أوافق على سياسة الخصوصية للموقع.",
      submit: "أرسل طلبك",
      note: "لن تُستخدم سيرتك الذاتية إلا لمساعدتنا في اختيار أفضل المرشحين لدور محدد. تُحفظ البيانات بأمان وتُشارك فقط مع المعنيين ثم تُحذف عند انتهاء الغرض. للتحديث يرجى مراجعة سياسة الخصوصية أو التواصل معنا.",
    },
    footer: {
      infoTitle: "المعلومات",
      links: [
        ["من نحن", "مجالات الممارسة", "فريقنا", "الرؤى"],
        ["آخر الأخبار", "الأسئلة الشائعة", "الوظائف", "اتصل بنا"],
      ],
      addressTitle: "العنوان وبيانات الاتصال",
      addressLines: [
        "العنوان: برج التيجارية - الطابق 12، مدينة الكويت",
        "هاتف: ‎+965 2249 1841/0",
        "‎+965 2245 2157/8",
        "البريد: info@ilg.com.kw",
      ],
      bottomLinks: ["سياسة الخصوصية", "الشروط والأحكام"],
    },
  },
};

function App() {
  const [locale, setLocale] = useState("en");
  const direction = locale === "ar" ? "rtl" : "ltr";
  const copy = COPY[locale];

  return (
    <div className="app" dir={direction}>
      <Header locale={locale} onLocaleChange={setLocale} navCopy={copy.nav} socialCopy={copy.social} />
      <main>
        <Hero copy={copy.hero} />
        <ReliabilitySection copy={copy.reliability} locale={locale} />
        <MultisectorSection copy={copy.multisector} />
        <PracticeSection copy={copy.practice} />
        <TeamSection copy={copy.team} />
        <InsightsSection copy={copy.insights} />
        <NewsSection copy={copy.news} />
        <FaqSection copy={copy.faq} />
        <CareersSection copy={copy.careers} />
      </main>
      <Footer copy={copy.footer} socialCopy={copy.social} />
    </div>
  );
}

function Header({ locale, onLocaleChange, navCopy, socialCopy }) {
  const isRtl = locale === "ar";

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" aria-label="ILG Home">
          <img src={logoIlg} alt="International Legal Group" />
        </a>
        <div className="navbar-menu">
          <button type="button" className="menu-button">
            {navCopy.menu}
          </button>
        </div>
        <div className="navbar-actions">
          <div className="nav-social" aria-label="Social media links">
            <a href="#0" className="nav-icon-button" aria-label={socialCopy.instagram}>
              <IconInstagram />
            </a>
            <a href="#0" className="nav-icon-button" aria-label={socialCopy.linkedin}>
              <IconLinkedIn />
            </a>
            <a href="#0" className="nav-icon-button" aria-label={socialCopy.x}>
              <IconX />
            </a>
          </div>
          <div className="nav-locale" aria-label="Language toggle">
            <button
              type="button"
              className={`icon-button${!isRtl ? " icon-button-active" : ""}`}
              onClick={() => onLocaleChange("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`icon-button${isRtl ? " icon-button-active" : ""}`}
              onClick={() => onLocaleChange("ar")}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ copy }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-copy">
          <h1>{copy.title}</h1>
          <p className="hero-subheading">{copy.subheading}</p>
          <button type="button" className="btn btn-primary">
            {copy.cta}
          </button>
        </div>
        <div className="hero-row">
          <article
            className="hero-media hero-media-location"
            style={{ backgroundImage: `url(${HERO_LOCATION_IMAGE})` }}
          >
            <span className="hero-media-chip">{copy.locationChip}</span>
            <div className="hero-media-footer">
              <IconLocation />
              <p className="hero-media-title">{copy.locationTitle}</p>
              <button type="button" className="hero-media-button" aria-label="See office location">
                <IconArrowRight />
              </button>
            </div>
          </article>

          <article className="hero-stats">
            <div className="hero-stat-card">
              <div>
                <span className="hero-stat-value">{copy.stats.employees.value}</span>
                <span className="hero-stat-label">{copy.stats.employees.label}</span>
              </div>
              <div className="hero-explore">
                <button type="button" className="hero-text-link">
                  {copy.stats.explore}
                </button>
              </div>
            </div>
            <div className="hero-stat-card hero-stat-card-clients">
              <div>
                <span className="hero-stat-value">{copy.stats.clients.value}</span>
                <span className="hero-stat-label">{copy.stats.clients.label}</span>
              </div>
              <div className="hero-avatar-group">
                <div className="hero-avatars" aria-hidden="true">
                  <span className="hero-avatar" />
                  <span className="hero-avatar" />
                  <span className="hero-avatar" />
                </div>
                <button type="button" className="hero-avatar-plus" aria-label="More clients">
                  +
                </button>
              </div>
            </div>
          </article>

          <div className="hero-orbit" aria-hidden="true">
            {HERO_ORBIT_DOTS.map((_, index) => (
              <span key={index} className="hero-orbit-dot" />
            ))}
          </div>

          <article
            className="hero-media hero-media-mission"
            style={{ backgroundImage: `url(${HERO_MISSION_IMAGE})` }}
          >
            <span className="hero-media-chip">{copy.missionChip}</span>
            <div className="hero-media-footer">
              <p className="hero-media-title">{copy.missionTitle}</p>
              <button type="button" className="hero-media-button" aria-label="Discover our mission">
                <IconArrowRight />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ReliabilitySection({ copy, locale }) {
  const heading = locale === "ar" ? "يمكنك الاعتماد علينا" : "You can rely on us";
  return (
    <section className="section section-reliability">
      <div className="container">
        <h2 className="section-title">{heading}</h2>
        <div className="reliability-grid">
          {copy.map((item) => (
            <article key={item.title} className="reliability-card">
              <div className="reliability-icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MultisectorSection({ copy }) {
  return (
    <section className="section section-multisector">
      <div className="container">
        <div className="multisector-grid">
          <div className="multisector-content">
            <h2 className="section-title">
              {copy.titleLines.map((line, idx) => (
                <span key={line}>
                  {line}
                  {idx === 0 && <br />}
                </span>
              ))}
            </h2>
            <div className="multisector-text">
              <p className="multisector-mission">{copy.missionLead}</p>
              <p>{copy.body}</p>
            </div>
            <button type="button" className="btn btn-primary">
              {copy.cta}
            </button>
          </div>
          <div className="multisector-images">
            <div className="multisector-image multisector-image-1" />
            <div className="multisector-image multisector-image-2" />
          </div>
        </div>
        <aside className="partnership-quote">
          <div className="partnership-row">
            <span className="partnership-intro">{copy.quoteIntro}</span>
            <p className="partnership-text">
              "{copy.quoteText.replace(copy.quoteHighlight, "")}
              <a className="quote-highlight" href="#" aria-label={copy.quoteHighlight}>
                <span className="quote-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" fill="#58C472" />
                    <path d="M19.4 12a7.4 7.4 0 0 0-.1-1.2l2.1-1.6-2-3.5-2.6 1a7.6 7.6 0 0 0-2-.9l-.4-2.7h-4l-.4 2.7c-.7.2-1.4.5-2 .9l-2.6-1-2 3.5 2.1 1.6c-.1.8-.1 1.6 0 2.4l-2.1 1.6 2 3.5 2.6-1c.6.4 1.3.7 2 .9l.4 2.7h4l.4-2.7c.7-.2 1.4-.5 2-.9l2.6 1 2-3.5-2.1-1.6c.1-.4.1-.8.1-1.2Z" stroke="#58C472" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {copy.quoteHighlight}
              </a>
              {copy.quoteText.endsWith(".") ? "" : "."}"
            </p>
            <span className="partnership-author">{copy.quoteAuthor}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function PracticeSection({ copy }) {
  return (
    <section id="practice-areas" className="section section-practice">
      <div className="container">
        <div className="section-header-with-button">
          <div>
            <h2 className="section-title">{copy.title}</h2>
            <p className="section-description section-description-practice">{copy.description}</p>
          </div>
          <button type="button" className="btn btn-primary">
            {copy.cta}
          </button>
        </div>
        <div className="practice-grid">
          {copy.cards.map((card) => (
            <article key={card.title} className="practice-card">
              <div className="practice-image">
                <span className="practice-chip">{card.title}</span>
              </div>
              <button type="button" className="practice-arrow" aria-label={`Learn more about ${card.title}`}>
                <IconArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection({ copy }) {
  return (
    <section id="team" className="section section-team">
      <div className="container">
        <div className="team-header">
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-description team-description">{copy.description}</p>
          <div className="team-header-actions">
            <button type="button" className="btn btn-primary team-header-btn">
              {copy.cta}
            </button>
            <div className="team-controls">
              <button type="button" className="team-nav-btn team-nav-prev" aria-label={copy.controls.prevAria}>
                <IconArrowLeft />
              </button>
              <button type="button" className="team-nav-btn team-nav-next" aria-label={copy.controls.nextAria}>
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="team-overview-row">
          <div className="team-members-list">
            {copy.members.slice(0, 3).map((member) => (
              <article key={member.name} className="team-member-card">
                <div className="team-avatar" aria-hidden="true" />
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="team-highlight">
          <div className="team-highlight-photo" aria-hidden="true" />
          <div className="team-highlight-copy">
            {copy.highlightCopy.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightsSection({ copy }) {
  const [activeCategory, setActiveCategory] = useState(copy.categories[0]);

  useEffect(() => {
    setActiveCategory(copy.categories[0]);
  }, [copy]);

  return (
    <section id="insights" className="section section-insights">
      <div className="container">
        <div className="section-header-with-button section-header-insights">
          <div>
            <h2 className="section-title">{copy.title}</h2>
            <p className="section-description">{copy.description}</p>
          </div>
          <button type="button" className="btn btn-primary">
            {copy.cta}
          </button>
        </div>
        <nav className="insight-tabs" role="tablist" aria-label="Insight categories">
          {copy.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`insight-tab${isActive ? " insight-tab-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </nav>
        <div className="insight-grid">
          {Array.from({ length: 3 }).map((_, index) => (
            <article key={index} className="insight-card" aria-label={`${activeCategory} highlight ${index + 1}`}>
              <div className="insight-placeholder" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection({ copy }) {
  return (
    <section id="news" className="section section-news">
      <div className="container">
        <div className="section-header-with-button news-header">
          <div>
            <h2 className="section-title">{copy.title}</h2>
            <p className="section-description">{copy.description}</p>
          </div>
          <div className="news-header-actions">
            <button type="button" className="btn btn-primary">
              {copy.cta}
            </button>
            <div className="news-nav-inline">
              <button type="button" className="news-nav-btn" aria-label="Previous">
                <IconArrowLeft />
              </button>
              <button type="button" className="news-nav-btn" aria-label="Next">
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="news-carousel">
          <div className="news-grid">
            {copy.items.map((item) => (
              <article key={item.title} className="news-card">
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
                <button type="button" className="news-read-more">
                  {copy.readMore}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ copy }) {
  const [openIndex, setOpenIndex] = useState(copy.defaultOpenIndex);

  useEffect(() => {
    setOpenIndex(copy.defaultOpenIndex);
  }, [copy]);

  return (
    <section className="section section-faq" id="faq">
      <div className="container">
        <header className="section-header-center section-header-left">
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-subtitle section-subtitle-strong">{copy.subtitle}</p>
        </header>
        <div className="faq-items faq-grid">
          {copy.items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <article key={item.question} className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`} aria-hidden="true">
                    {isOpen ? <IconClose /> : <IconPlus />}
                  </span>
                </button>
                {isOpen && item.answer && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CareersSection({ copy }) {
  return (
    <section id="careers" className="section section-careers">
      <div className="container">
        <header className="careers-header">
          <div>
            <h2 className="section-title">{copy.title}</h2>
            <p className="section-subtitle-left careers-lede">{copy.subtitle}</p>
          </div>
          <button type="button" className="btn btn-primary careers-cta">
            {copy.cta}
          </button>
        </header>

        <div className="careers-layout">
          <form className="careers-form">
            <div className="careers-row">
              <input type="text" name="name" placeholder={copy.fields.name} />
              <input type="tel" name="phone" placeholder={copy.fields.phone} />
            </div>
            <div className="careers-row">
              <input type="email" name="email" placeholder={copy.fields.email} />
              <input type="url" name="cvUrl" placeholder={copy.fields.cvUrl} />
            </div>
            <div className="careers-upload">
              <label className="upload-field">
                <input type="file" name="cv" />
                <span>{copy.uploadLabel}</span>
              </label>
              <span className="upload-hint">{copy.uploadHint}</span>
            </div>
            <p className="careers-consent">{copy.consent}</p>
            <button type="submit" className="btn btn-primary careers-submit">
              {copy.submit}
            </button>
            <p className="careers-note">{copy.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ copy, socialCopy }) {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoIlg} alt="International Legal Group" className="footer-logo" />
          </div>

          <div className="footer-info">
            <h3 className="footer-column-title">{copy.infoTitle}</h3>
            <div className="footer-links-grid">
              {copy.links.map((col, idx) => (
                <ul key={idx} className="footer-links">
                  {col.map((label) => (
                    <li key={label}>
                      <a href="#0">{label}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="footer-address">
            <h3 className="footer-column-title">{copy.addressTitle}</h3>
            <ul className="footer-links footer-address-lines">
              {copy.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider-line" />

        <div className="footer-social-row">
          <a href="#0" className="footer-social-chip" aria-label={socialCopy.instagram}>
            <img src={logoInstagram} alt={socialCopy.instagram} />
            <span>{socialCopy.instagram}</span>
          </a>
          <a href="#0" className="footer-social-chip" aria-label={socialCopy.linkedin}>
            <img src={logoLinkedIn} alt={socialCopy.linkedin} />
            <span>{socialCopy.linkedin}</span>
          </a>
          <a href="#0" className="footer-social-chip" aria-label={socialCopy.x}>
            <img src={logoX} alt={socialCopy.x} />
            <span>{socialCopy.x}</span>
          </a>
        </div>

        <div className="footer-bottom-simple">
          {copy.bottomLinks.map((item) => (
            <a key={item} href="#0">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* Icons */

function IconLocation() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9 1.5c3.105 0 5.625 2.52 5.625 5.625 0 3.637-3.84 7.77-5.054 8.97a.81.81 0 0 1-1.142 0C7.216 14.895 3.375 10.762 3.375 7.125 3.375 4.02 5.895 1.5 9 1.5Zm0 3c-1.45 0-2.625 1.175-2.625 2.625S7.55 9.75 9 9.75s2.625-1.175 2.625-2.625S10.45 4.5 9 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 6h8m0 0L7 3m3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowLeft() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 6H2m0 0 3-3M2 6l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.2 8.1a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Zm1 1.7H7.3V18h1.9Zm3.05 0h-1.87V18h1.88v-4.43c0-1.02.2-2 1.45-2 1.24 0 1.43 1.08 1.43 2.06V18h1.9v-4.74c0-2.3-1.23-3.4-2.87-3.4-1.33 0-1.9.73-2.21 1.24h-.03Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="m7 6 10 12M17 6 7 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default App;
