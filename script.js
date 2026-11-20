/* ══════════════════════════════════════
   script.js — Portfolio Interactions
   i18n via data-i18n attributes (robust)
══════════════════════════════════════ */

// ─────────────────────────────────────────
//  TRANSLATIONS DICTIONARY
// ─────────────────────────────────────────
const TRANSLATIONS = {
  vi: {
    // NAV
    'nav.about':      'Về tôi',
    'nav.skills':     'Kỹ năng',
    'nav.projects':   'Dự án',
    'nav.experience': 'Kinh nghiệm',
    'nav.contact':    'Liên hệ',
    // HERO
    'hero.badge':        'Sẵn sàng cộng tác',
    'hero.iam':          'Tôi là ',
    'hero.desc':         'Chuyên gia phân tích dữ liệu với niềm đam mê biến những con số phức tạp thành insight giá trị, hỗ trợ ra quyết định chiến lược thông qua trực quan hóa dữ liệu và mô hình phân tích nâng cao.',
    'hero.btn.projects': 'Xem Dự Án',
    'hero.btn.contact':  'Liên Hệ Ngay',
    'hero.scroll':       'Khám phá',
    // ABOUT
    'about.tag':   '01 — Về tôi',
    'about.title': 'Câu chuyện của tôi',
    'about.p1':    'Xin chào! Tôi là <strong>Đặng Đức Tĩnh</strong>, một Data Analyst đam mê khám phá giá trị ẩn trong dữ liệu. Với nền tảng vững chắc về thống kê và lập trình, tôi chuyển đổi dữ liệu thô thành những câu chuyện có ý nghĩa.',
    'about.p2':    'Tôi có kinh nghiệm làm việc với các tập dữ liệu lớn, xây dựng dashboard tương tác và phát triển mô hình dự đoán giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu.',
    'about.p3':    'Ngoài công việc, tôi yêu thích học hỏi các xu hướng công nghệ mới trong lĩnh vực AI/ML và chia sẻ kiến thức với cộng đồng.',
    'about.location':   'Hồ Chí Minh, Việt Nam',
    'about.university': 'ĐH Giao Thông Vận Tải TP.HCM',
    'about.status':     'Sẵn sàng làm việc',
    'about.lang':       'Tiếng Việt, Tiếng Anh',
    'about.cv':         'Tải CV',
    'about.card1.title': 'Phân tích dữ liệu',
    'about.card1.desc':  'Khám phá và trình bày insight từ dữ liệu phức tạp',
    'about.card2.title': 'Trực quan hóa',
    'about.card2.desc':  'Xây dựng dashboard và biểu đồ trực quan, dễ hiểu',
    'about.card3.title': 'Machine Learning',
    'about.card3.desc':  'Xây dựng mô hình dự đoán và phân loại dữ liệu',
    'about.card4.title': 'Quản lý dữ liệu',
    'about.card4.desc':  'Thiết kế và tối ưu hóa cơ sở dữ liệu quan hệ',
    // SKILLS
    'skills.tag':   '02 — Kỹ năng',
    'skills.title': 'Công cụ & Công nghệ',
    'skills.cat1':  'Ngôn ngữ lập trình',
    'skills.cat2':  'Phân tích & Trực quan',
    'skills.cat3':  'Machine Learning',
    'skills.cat4':  'Công cụ khác',
    // PROJECTS
    'projects.tag':              '03 — Dự án',
    'projects.title':            'Dự án nổi bật',
    'projects.filter.all':       'Tất cả',
    'projects.filter.dashboard': 'Dashboard',
    'projects.filter.ml':        'Machine Learning',
    'projects.filter.sql':       'SQL / ETL',
    'projects.detail':           'Xem chi tiết →',
    'proj1.title': 'Ho Chi Minh City Housing Market Analysis 2021 – 2025',
    'proj1.desc': `
      <li>Xây dựng hệ thống tự động cào dữ liệu bằng Python (Selenium, BeautifulSoup) thu thập 163.000+ tin đăng từ 4 nền tảng lớn, giảm ~90% công sức thủ công.</li>
      <li>Cải thiện chất lượng dữ liệu thông qua quy trình làm sạch và EDA trên tập dữ liệu lớn nhằm xác định phân khúc thị trường và phân bố giá theo khu vực.</li>
      <li>Phát triển Dashboard Power BI hiệu năng cao với các bộ lọc động và thước đo DAX trực quan hóa xu hướng thị trường bất động sản.</li>
    `,
    'proj2.title': 'Customer Shopping Behavior Analysis',
    'proj2.desc': `
      <li>Xây dựng pipeline xử lý dữ liệu với Python (Pandas) làm sạch 3.900 bản ghi giao dịch (doanh thu $233.081), xử lý giá trị thiếu theo median danh mục và chuẩn hóa schema.</li>
      <li>Thực hiện Feature Engineering (phân nhóm độ tuổi, tính chu kỳ mua sắm) và nạp dữ liệu tự động vào PostgreSQL qua SQLAlchemy.</li>
      <li>Phân tích chuyên sâu với 10 truy vấn SQL về hành vi tiêu dùng: phát hiện nhóm khách dùng discount có chi tiêu cao ($62–$97), tỷ lệ doanh thu theo giới tính và sản phẩm phụ thuộc khuyến mãi.</li>
      <li>Thiết kế Dashboard trực quan hóa hiệu năng cao trên Power BI, cung cấp các insight chiến lược giúp tối ưu hóa chuyển đổi nhóm khách hàng đăng ký và giữ chân khách hàng.</li>
    `,
    'proj3.title': 'E-Commerce End-to-End Data Pipeline & Analytics',
    'proj3.desc': `
      <li>Xây dựng pipeline ELT tự động hóa xử lý 100.000+ giao dịch từ bộ dữ liệu Olist E-Commerce với Python (Pandas, SQLAlchemy).</li>
      <li>Thiết kế kiến trúc Data Warehouse trên PostgreSQL với 3 tầng (Raw, Staging, Marts) theo mô hình Star Schema (fact_sales, dim_customer, dim_product, dim_date).</li>
      <li>Tối ưu hóa chất lượng dữ liệu: kiểm soát toàn vẹn khóa, chuẩn hóa kiểu dữ liệu, làm sạch giá trị khuyết thiếu và nạp theo lô (batch chunksize).</li>
      <li>Phân tích chuyên sâu các chỉ số kinh doanh cốt lõi (GMV, Lead Time, Top SKUs, VIP Customers) và trực quan hóa Dashboard tương tác trên Power BI.</li>
    `,
    'proj4.title': 'Business Intelligence Sales & Financial Dashboard',
    'proj4.desc': `
      <li>Xây dựng mô hình dữ liệu đa chiều (Star Schema) kết nối nhiều nguồn dữ liệu bán hàng và tài chính.</li>
      <li>Thiết kế báo cáo tương tác trực quan với các chỉ số KPI doanh thu, chi phí và lợi nhuận theo thời gian thực.</li>
      <li>Tích hợp các tính năng drill-through và lọc động hỗ trợ ban giám đốc đưa ra quyết định nhanh chóng.</li>
    `,
    // EXPERIENCE
    'exp.tag':   '04 — Kinh nghiệm',
    'exp.title': 'Hành trình nghề nghiệp',
    'exp.job1.role':    'Mobile Developer Intern',
    'exp.job1.company': 'TheApp4U — TP. Hồ Chí Minh',
    'exp.job1.li1': 'Tham gia phát triển ứng dụng thương mại điện tử Android sử dụng Flutter và Dart.',
    'exp.job1.li2': 'Xây dựng tính năng theo kiến trúc MVC và quản lý trạng thái ứng dụng bằng GetX.',
    'exp.job1.li3': 'Thiết kế các thành phần UI responsive và tích hợp hệ thống RESTful APIs thông qua Repository Pattern.',
    'exp.job1.li4': 'Hỗ trợ kiểm thử, debug và tối ưu hóa hiệu năng ứng dụng trên đa dạng thiết bị Android.',
    'exp.job1.li5': 'Thực hiện quy trình Git workflow nhóm: feature branching, viết commit rõ ràng, tạo pull request, tham gia code review và xử lý merge conflicts.',
    'exp.edu.degree': 'Cử nhân Công nghệ Thông tin',
    'exp.edu.school': 'Trường ĐH Giao Thông Vận Tải TP. Hồ Chí Minh',
    'exp.edu.gpa':    'GPA: 3.2/4.0 — Tốt nghiệp Khá/Giỏi',
    'exp.edu.major':  'Chuyên ngành: Công nghệ Thông tin (Dự kiến 2026)',
    // CONTACT
    'contact.tag':   '05 — Liên hệ',
    'contact.title': 'Hãy kết nối với tôi',
    'contact.desc':  'Bạn có dự án thú vị? Hãy liên hệ, tôi luôn sẵn sàng hợp tác!',
    'contact.phone':   'Điện thoại',
    'contact.address': 'Địa chỉ',
    // FORM
    'form.name':       'Họ và tên',
    'form.name.ph':    'Nguyễn Văn A',
    'form.subject':    'Chủ đề',
    'form.subject.ph': 'Tôi muốn hợp tác với bạn...',
    'form.message':    'Tin nhắn',
    'form.message.ph': 'Mô tả dự án hoặc nhu cầu của bạn...',
    'form.submit':     'Gửi tin nhắn',
    'form.success':    'Tin nhắn đã gửi thành công! Tôi sẽ phản hồi sớm nhất.',
    'form.sending':    'Đang gửi...',
  },

  en: {
    // NAV
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.projects':   'Projects',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',
    // HERO
    'hero.badge':        'Available for collaboration',
    'hero.iam':          'I am ',
    'hero.desc':         'A data analyst passionate about transforming complex numbers into valuable insights, supporting strategic decision-making through data visualization and advanced analytical models.',
    'hero.btn.projects': 'View Projects',
    'hero.btn.contact':  'Contact Me',
    'hero.scroll':       'Explore',
    // ABOUT
    'about.tag':   '01 — About Me',
    'about.title': 'My Story',
    'about.p1':    'Hello! I\'m <strong>Đặng Đức Tĩnh</strong>, a Data Analyst passionate about uncovering hidden value in data. With a solid foundation in statistics and programming, I turn raw data into meaningful stories.',
    'about.p2':    'I have experience working with large datasets, building interactive dashboards, and developing predictive models that help businesses make data-driven decisions.',
    'about.p3':    'Outside of work, I enjoy learning about new technology trends in AI/ML and sharing knowledge with the community.',
    'about.location':   'Ho Chi Minh City, Vietnam',
    'about.university': 'University of Transport Ho Chi Minh City',
    'about.status':     'Available for work',
    'about.lang':       'Vietnamese, English',
    'about.cv':         'Download CV',
    'about.card1.title': 'Data Analysis',
    'about.card1.desc':  'Discover and present insights from complex datasets',
    'about.card2.title': 'Data Visualization',
    'about.card2.desc':  'Build clear and intuitive dashboards and charts',
    'about.card3.title': 'Machine Learning',
    'about.card3.desc':  'Build predictive and classification models',
    'about.card4.title': 'Data Management',
    'about.card4.desc':  'Design and optimize relational databases',
    // SKILLS
    'skills.tag':   '02 — Skills',
    'skills.title': 'Tools & Technologies',
    'skills.cat1':  'Programming Languages',
    'skills.cat2':  'Analytics & Visualization',
    'skills.cat3':  'Machine Learning',
    'skills.cat4':  'Other Tools',
    // PROJECTS
    'projects.tag':              '03 — Projects',
    'projects.title':            'Featured Projects',
    'projects.filter.all':       'All',
    'projects.filter.dashboard': 'Dashboard',
    'projects.filter.ml':        'Machine Learning',
    'projects.filter.sql':       'SQL / ETL',
    'projects.detail':           'View details →',
    'proj1.title': 'Ho Chi Minh City Housing Market Analysis 2021 – 2025',
    'proj1.desc': `
      <li>Built an automated Python web-crawling system collecting 163,000+ listings from 4 major platforms, cutting manual effort by ~90%.</li>
      <li>Improved data quality through rigorous cleaning and EDA on a large dataset to identify market segments and regional price distribution.</li>
      <li>Developed a high-performance Power BI dashboard with dynamic filters and DAX measures to visualize property trends for stakeholders.</li>
    `,
    'proj2.title': 'Customer Shopping Behavior Analysis',
    'proj2.desc': `
      <li>Built an end-to-end data pipeline in Python (pandas) processing 3,900 e-commerce purchases ($233K total revenue), imputing missing values via category medians, and engineering features (age groups, purchase intervals).</li>
      <li>Integrated with PostgreSQL via SQLAlchemy and authored 10 advanced analytical SQL queries investigating demographic spending patterns, shipping urgency premiums, and discount dependency.</li>
      <li>Identified high-value discount shoppers ($62–$97 spend range) and evaluated revenue skew between male (67.7%) and female (32.3%) cohorts to uncover untapped growth opportunities.</li>
      <li>Developed an interactive Power BI dashboard and strategic business presentation to guide executive decision-making on subscription conversions and pricing strategy.</li>
    `,
    'proj3.title': 'E-Commerce End-to-End Data Pipeline & Analytics',
    'proj3.desc': `
      <li>Architected an automated end-to-end ELT pipeline ingesting 100,000+ orders from the Olist E-commerce dataset using Python (Pandas, SQLAlchemy).</li>
      <li>Designed a 3-tier PostgreSQL Data Warehouse (Raw, Staging, Marts) with an OLAP-optimized Star Schema (fact_sales, dim_customer, dim_product, dim_date).</li>
      <li>Ensured data quality and performance via data validation, schema standardization, missing-value imputation, and chunked batch loading.</li>
      <li>Conducted advanced SQL analytics on core business KPIs (GMV, order fulfillment, delivery lead time, customer LTV) and built interactive Power BI dashboards.</li>
    `,
    'proj4.title': 'Business Intelligence Sales & Financial Dashboard',
    'proj4.desc': `
      <li>Designed a robust dimensional data model (Star Schema) integrating sales and financial records.</li>
      <li>Crafted interactive dashboards tracking revenue, expenses, and strategic KPIs in real time.</li>
      <li>Implemented dynamic drill-through filters enabling executives to make fast, informed decisions.</li>
    `,
    // EXPERIENCE
    'exp.tag':   '04 — Experience',
    'exp.title': 'Career Journey',
    'exp.job1.role':    'Mobile Developer Intern',
    'exp.job1.company': 'TheApp4U — Ho Chi Minh City, Vietnam',
    'exp.job1.li1': 'Collaborated in developing an Android e-commerce application using Flutter and Dart.',
    'exp.job1.li2': 'Developed features following MVC architecture and managed application state with GetX.',
    'exp.job1.li3': 'Built responsive UI components and integrated RESTful APIs using the Repository Pattern.',
    'exp.job1.li4': 'Assisted in debugging, testing, and performance optimization across Android devices.',
    'exp.job1.li5': 'Followed Git workflow in a team environment: feature branching, writing meaningful commit messages, creating pull requests, participating in code reviews, and resolving merge conflicts.',
    'exp.edu.degree': 'Bachelor of Information Technology',
    'exp.edu.school': 'University of Transport Ho Chi Minh City',
    'exp.edu.gpa':    'GPA: 3.2/4.0 — Honors: Good',
    'exp.edu.major':  'Major: Information Technology (Expected 2026)',
    // CONTACT
    'contact.tag':   '05 — Contact',
    'contact.title': "Let's Connect",
    'contact.desc':  'Have an interesting project? Get in touch — I\'m always ready to collaborate!',
    'contact.phone':   'Phone',
    'contact.address': 'Location',
    // FORM
    'form.name':       'Full Name',
    'form.name.ph':    'John Doe',
    'form.subject':    'Subject',
    'form.subject.ph': 'I would like to collaborate with you...',
    'form.message':    'Message',
    'form.message.ph': 'Describe your project or requirements...',
    'form.submit':     'Send Message',
    'form.success':    'Message sent successfully! I will get back to you soon.',
    'form.sending':    'Sending...',
  }
};

// Typed words per language
const TYPED_WORDS = {
  vi: ['Data Analyst', 'BI Developer', 'SQL Expert', 'Problem Solver', 'Dashboard Builder'],
  en: ['Data Analyst', 'BI Developer', 'SQL Expert', 'Problem Solver', 'Dashboard Builder']
};

// ─────────────────────────────────────────
//  LANGUAGE ENGINE
// ─────────────────────────────────────────
let currentLang = localStorage.getItem('portfolio-lang') || 'vi';

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      // Use innerHTML for entries that may contain <strong> etc.
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update toggle button label
  const btn = document.getElementById('language-toggle');
  if (btn) {
    btn.textContent  = lang === 'en' ? 'VI' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English');
  }

  // Update typed words
  updateTypedWords(lang);
}

function switchLanguage() {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  localStorage.setItem('portfolio-lang', currentLang);
  applyTranslations(currentLang);
}

const langToggleBtn = document.getElementById('language-toggle');
if (langToggleBtn) langToggleBtn.addEventListener('click', switchLanguage);

// Apply saved language on load
if (currentLang === 'en') applyTranslations('en');

// ─────────────────────────────────────────
//  TYPED EFFECT
// ─────────────────────────────────────────
const typedEl = document.getElementById('typed');
let words     = [...TYPED_WORDS[currentLang]];
let wordIndex = 0, charIndex = 0, isDeleting = false;
let typingTimeout;

function typeLoop() {
  if (!typedEl) return;
  const word = words[wordIndex];
  if (isDeleting) {
    typedEl.textContent = word.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = word.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === word.length) {
    typingTimeout = setTimeout(() => { isDeleting = true; typeLoop(); }, 1800);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex  = (wordIndex + 1) % words.length;
  }
  typingTimeout = setTimeout(typeLoop, isDeleting ? 55 : 95);
}

function updateTypedWords(lang) {
  clearTimeout(typingTimeout);
  words     = [...TYPED_WORDS[lang]];
  wordIndex = 0; charIndex = 0; isDeleting = false;
  if (typedEl) typedEl.textContent = '';
  typeLoop();
}

typeLoop();

// ─────────────────────────────────────────
//  NAVBAR SCROLL
// ─────────────────────────────────────────
const navbar    = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ─────────────────────────────────────────
//  HAMBURGER MENU
// ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ─────────────────────────────────────────
//  ACTIVE NAV HIGHLIGHT
// ─────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => navObserver.observe(s));

// ─────────────────────────────────────────
//  SKILL BAR ANIMATION
// ─────────────────────────────────────────
const skillFills   = document.querySelectorAll('.skill-fill');
const skillSection = document.querySelector('.skills');

function triggerSkillBars() {
  skillFills.forEach(fill => {
    const w = fill.dataset.width || fill.getAttribute('data-width');
    if (w) fill.style.width = w + '%';
  });
}

if (skillSection && 'IntersectionObserver' in window) {
  let animated = false;
  const skillObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        triggerSkillBars();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  skillObserver.observe(skillSection);

  // Fallback: Ensure bars are always filled even if observer doesn't fire
  setTimeout(triggerSkillBars, 500);
} else {
  triggerSkillBars();
}

// ─────────────────────────────────────────
//  PROJECT FILTER
// ─────────────────────────────────────────
const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

// ─────────────────────────────────────────
//  FADE-IN ON SCROLL
// ─────────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.about-card, .skill-category, .project-card, .timeline-item, .contact-card, .contact-form'
);
fadeEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
});

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 70);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ─────────────────────────────────────────
//  CONTACT FORM
// ─────────────────────────────────────────
const form       = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn   = form.querySelector('button[type="submit"]');
    const dict  = TRANSLATIONS[currentLang];
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${dict['form.sending']}`;
    setTimeout(() => {
      btn.disabled  = false;
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> <span data-i18n="form.submit">${dict['form.submit']}</span>`;
      successMsg.classList.add('show');
      form.reset();
      setTimeout(() => successMsg.classList.remove('show'), 5000);
    }, 1500);
  });
}

// ─────────────────────────────────────────
//  SMOOTH SCROLL (offset for fixed nav)
// ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  });
});

// ─────────────────────────────────────────
//  PARALLAX ORBS
// ─────────────────────────────────────────
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (orb1) orb1.style.transform = `translateY(${y * 0.08}px)`;
  if (orb2) orb2.style.transform = `translateY(${-y * 0.05}px)`;
}, { passive: true });

// ─────────────────────────────────────────
//  CONSOLE SIGNATURE
// ─────────────────────────────────────────
console.log('%c👋 Hi! This is Đặng Đức Tĩnh\'s Portfolio', 'color:#00e5ff;font-size:16px;font-weight:bold');
console.log('%c📊 Data Analyst | Power BI | Python | SQL', 'color:#a855f7;font-size:12px');
