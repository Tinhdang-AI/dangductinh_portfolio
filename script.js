/* ══════════════════════════════════════
   script.js — Portfolio Interactions
══════════════════════════════════════ */

// ── LANGUAGE SWITCHER ──
const languageToggle = document.getElementById('language-toggle');
const languageRoot = document.documentElement;
const languageTranslations = {
  'Sẵn sàng cộng tác': 'Available for collaboration',
  'Tôi là': 'I am',
  'Khám phá': 'Explore',
  'Về tôi': 'About me',
  'Kỹ năng': 'Skills',
  'Dự án': 'Projects',
  'Kinh nghiệm': 'Experience',
  'Liên hệ': 'Contact',
  'Xem Dự Án': 'View Projects',
  'Liên Hệ Ngay': 'Contact Me',
  'Dự án hoàn thành': 'Completed projects',
  'Năm kinh nghiệm': 'Years of experience',
  'Công cụ thành thạo': 'Tools mastered',
  '01 — Về tôi': '01 — About me',
  'Câu chuyện của tôi': 'My story',
  'Xin chào! Tôi là Đặng Đức Tĩnh, một Data Analyst đam mê khám phá giá trị ẩn trong dữ liệu. Với nền tảng vững chắc về thống kê và lập trình, tôi chuyển đổi dữ liệu thô thành những câu chuyện có ý nghĩa.': 'Hello! I am Đặng Đức Tĩnh, a Data Analyst passionate about uncovering hidden value in data. With a strong foundation in statistics and programming, I turn raw data into meaningful stories.',
  'Tôi có kinh nghiệm làm việc với các tập dữ liệu lớn, xây dựng dashboard tương tác và phát triển mô hình dự đoán giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu (data-driven decisions).': 'I have experience working with large datasets, building interactive dashboards, and developing predictive models that help businesses make data-driven decisions.',
  'Ngoài công việc, tôi yêu thích học hỏi các xu hướng công nghệ mới trong lĩnh vực AI/ML và chia sẻ kiến thức với cộng đồng.': 'Outside of work, I enjoy learning about new technology trends in AI/ML and sharing knowledge with the community.',
  'Đại học Kinh tế / CNTT': 'University of Economics / IT',
  'Sẵn sàng làm việc': 'Available for work',
  'Tiếng Việt, Tiếng Anh': 'Vietnamese, English',
  'Tải CV': 'Download CV',
  'Phân tích dữ liệu': 'Data analysis',
  'Khám phá và trình bày insight từ dữ liệu phức tạp': 'Discover and present insights from complex data',
  'Trực quan hóa': 'Data visualization',
  'Xây dựng dashboard và biểu đồ trực quan, dễ hiểu': 'Build clear and intuitive dashboards and charts',
  'Xây dựng mô hình dự đoán và phân loại dữ liệu': 'Build predictive and classification models',
  'Quản lý dữ liệu': 'Data management',
  'Thiết kế và tối ưu hóa cơ sở dữ liệu quan hệ': 'Design and optimize relational databases',
  '02 — Kỹ năng': '02 — Skills',
  'Công cụ & Công nghệ': 'Tools & Technology',
  'Ngôn ngữ lập trình': 'Programming languages',
  'Công cụ khác': 'Other tools',
  '03 — Dự án': '03 — Projects',
  'Dự án nổi bật': 'Featured projects',
  'Tất cả': 'All',
  'Dashboard phân tích doanh thu toàn diện cho doanh nghiệp bán lẻ với 50+ KPI, drill-through report và phân tích xu hướng theo thời gian thực.': 'Comprehensive revenue analytics dashboard for a retail business with 50+ KPIs, drill-through reports, and real-time trend analysis.',
  'Xem chi tiết →': 'View details →',
  'Mô hình dự đoán khách hàng rời bỏ dịch vụ sử dụng Random Forest & XGBoost. Đạt accuracy 94% trên tập test, giúp giảm 30% tỷ lệ churn.': 'A customer churn prediction model using Random Forest & XGBoost. Achieved 94% test accuracy and helped reduce churn by 30%.',
  'Xây dựng pipeline ETL tự động từ nhiều nguồn dữ liệu vào Google BigQuery, xử lý 10M+ bản ghi/ngày với Apache Airflow.': 'Built an automated ETL pipeline from multiple data sources into Google BigQuery, processing 10M+ records per day with Apache Airflow.',
  'Phân tích dữ liệu bệnh viện, trực quan hóa chỉ số bệnh nhân và tỷ lệ điều trị thành công qua Tableau Story Points.': 'Analyzed hospital data and visualized patient metrics and treatment success rates through Tableau Story Points.',
  'Phân tích cảm xúc đánh giá sản phẩm tiếng Việt sử dụng mô hình PhoBERT, đạt F1-score 0.91 trên dataset 100K reviews.': 'Analyzed sentiment in Vietnamese product reviews using PhoBERT, achieving an F1-score of 0.91 on a 100K-review dataset.',
  'Phân khúc khách hàng theo mô hình RFM (Recency, Frequency, Monetary) sử dụng SQL thuần, giúp team marketing tối ưu chiến dịch.': 'Segmented customers using the RFM (Recency, Frequency, Monetary) model with pure SQL to help marketing optimize campaigns.',
  '04 — Kinh nghiệm': '04 — Experience',
  'Hành trình nghề nghiệp': 'Career journey',
  '05 — Liên hệ': '05 — Contact',
  'Hãy kết nối với tôi': 'Let’s connect',
  'Bạn có dự án thú vị? Hãy liên hệ, tôi luôn sẵn sàng hợp tác!': 'Have an interesting project? Get in touch — I am always ready to collaborate!',
  'Điện thoại': 'Phone',
  'Địa chỉ': 'Location',
  'Họ và tên': 'Full name',
  'Chủ đề': 'Subject',
  'Tin nhắn': 'Message',
  'Tôi muốn hợp tác với bạn...': 'I would like to collaborate with you...',
  'Mô tả dự án hoặc nhu cầu của bạn...': 'Describe your project or needs...',
  'Gửi tin nhắn': 'Send message',
  'Tin nhắn đã gửi thành công! Tôi sẽ phản hồi sớm nhất.': 'Message sent successfully! I will get back to you soon.',
  'Chứng chỉ': 'Certifications',
  'Turning data into decisions.': 'Turning data into decisions.',
  'Thiết kế với': 'Designed with',
  'tại Việt Nam.': 'in Vietnam.'
};
const englishToVietnamese = Object.fromEntries(
  Object.entries(languageTranslations).map(([vietnamese, english]) => [english, vietnamese])
);
let currentLanguage = localStorage.getItem('portfolio-language') || 'vi';

function translateTextNodes(dictionary) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    const normalized = node.textContent.trim().replace(/\s+/g, ' ');
    if (!normalized || !dictionary[normalized]) return;
    node.textContent = node.textContent.replace(normalized, dictionary[normalized]);
  });
}

function updateLanguage(language) {
  const dictionary = language === 'en' ? languageTranslations : englishToVietnamese;
  translateTextNodes(dictionary);
  languageRoot.lang = language;
  document.title = language === 'en'
    ? 'Đặng Đức Tĩnh – Data Analyst Portfolio'
    : 'Đặng Đức Tĩnh – Portfolio Data Analyst';
  languageToggle.textContent = language === 'en' ? 'VI' : 'EN';
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English');
  localStorage.setItem('portfolio-language', language);
  currentLanguage = language;
  updateTypedWords();
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => updateLanguage(currentLanguage === 'vi' ? 'en' : 'vi'));
}

// ── TYPED EFFECT ──
const typedEl = document.getElementById('typed');
const typedWords = {
  vi: [
  'Data Analyst',
  'BI Developer',
  'SQL Expert',
  'Problem Solver',
  'Dashboard Builder'
  ],
  en: [
    'Data Analyst',
    'BI Developer',
    'SQL Expert',
    'Problem Solver',
    'Dashboard Builder'
  ]
};
let words = typedWords[currentLanguage];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function updateTypedWords() {
  words = typedWords[currentLanguage];
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
}

function typeLoop() {
  const word = words[wordIndex];
  if (isDeleting) {
    typedEl.textContent = word.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = word.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === word.length) {
    setTimeout(() => { isDeleting = true; typeLoop(); }, 1800);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  setTimeout(typeLoop, isDeleting ? 60 : 100);
}
typeLoop();

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

// ── SCROLL TOP ──
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => animateCounter(el));
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

// ── SKILL BAR ANIMATION ──
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillFills.forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
const skillsSection = document.querySelector('.skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ── PROJECT FILTER ──
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInCard 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── FADE IN SCROLL ──
const fadeEls = document.querySelectorAll(
  '.about-card, .skill-category, .project-card, .timeline-item, .cert-card, .contact-card, .contact-form'
);
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

// ── CONTACT FORM ──
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${currentLanguage === 'en' ? 'Sending...' : 'Đang gửi...'}`;
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> ${currentLanguage === 'en' ? 'Send message' : 'Gửi tin nhắn'}`;
      successMsg.classList.add('show');
      form.reset();
      setTimeout(() => successMsg.classList.remove('show'), 5000);
    }, 1500);
  });
}

// ── SMOOTH SCROLL OFFSET for fixed nav ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

// ── PARALLAX ORBS (subtle) ──
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  if (orb1) orb1.style.transform = `translateY(${y * 0.08}px)`;
  if (orb2) orb2.style.transform = `translateY(${-y * 0.05}px)`;
}, { passive: true });

console.log('%c👋 Xin chào! Đây là portfolio của Đặng Đức Tĩnh', 'color:#00e5ff;font-size:16px;font-weight:bold');
console.log('%c📊 Data Analyst | Power BI | Python | SQL', 'color:#a855f7;font-size:12px');
