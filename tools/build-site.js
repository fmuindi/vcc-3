// Static site generator for the Valor Christian College site.
// Run with: node tools/build-site.js  (from repo root)
// Produces plain .html files at the repo root — no runtime build step, no server templating.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FONT_FACE_CSS = fs.readFileSync(path.join(__dirname, 'fontface.html'), 'utf8');

// ---------- Content sources ----------
const LOGO = 'assets/images/valor-logo-white.png'; // downloaded + downscaled from the S3 original for performance
// Lower width + quality than the client's original link (tr=w-1200) so the
// hero video downloads and starts playing faster — ImageKit transforms this
// on the fly server-side, so the browser fetches a smaller file directly.
const HERO_VIDEO = 'https://ik.imagekit.io/vddpcxj7e/valor/valor_hero_video_background.mp4?tr=w-960,q-50';
const IK = (name) => `https://ik.imagekit.io/vddpcxj7e/valor/${name}?tr=f-auto,q-auto,w-1200`;
const IMG = {
  heroPoster: IK('DSC01795.jpg'),
  onCampus: IK('DSC01815.jpg'),
  // Client-supplied Unsplash image, used as-is (not an ImageKit asset).
  online: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  cohort: IK('DSC03220.jpg'),
  whyValorMain: IK('VCC.Graduation.2026-383.jpg'),
  whyValor2: IK('DSC01068.jpg'),
  whyValor3: IK('DSC00941.jpg'),
  testimonial: IK('DSC03901.jpg'),
  prog1: IK('DSC00837.jpg'),
  prog2: IK('A7301807.jpg'),
  prog3: IK('DSC09572.jpg'),
  prog4: IK('DSC05427.jpg'),
  prog5: IK('DSC08674.jpg'),
  social: IK('WEB.png'),
  gallery: [
    IK('DSC03837.jpg'),
    IK('DSC03895.jpg'),
    IK('DSC02739.jpg'),
    IK('DSC03220.jpg'),
    IK('DSC03821.jpg'),
    IK('DSC03832.jpg'),
    IK('DSC03880.jpg'),
    IK('A7301737pl.jpg'),
  ],
};

// ---------- Navigation (from docs/BUILD_BRIEF.md, section 2) ----------
const NAV = [
  {
    label: 'About', href: 'about-our-legacy.html',
    children: [
      { label: 'Our Legacy', href: 'about-our-legacy.html' },
      { label: 'Meet Our Team', href: 'about-meet-our-team.html' },
      { label: 'Why Valor', href: 'about-why-valor.html' },
      { label: 'Contact', href: 'about-contact.html' },
    ],
  },
  {
    label: 'Academics', href: 'academics-degree-programs.html',
    children: [
      { label: 'Degree Programs', href: 'academics-degree-programs.html' },
      { label: 'Academic Catalog', href: 'academics-academic-catalog.html' },
      { label: 'Class Schedules', href: 'academics-class-schedules.html' },
      { label: 'Credit for Prior Learning', href: 'academics-credit-for-prior-learning.html' },
    ],
  },
  {
    label: 'Admissions', href: 'admissions.html',
    children: [
      { label: 'Admissions Overview', href: 'admissions.html' },
      { label: 'Speak with a Counselor', href: 'admissions-speak-with-a-counselor.html' },
      { label: 'Apply Now', href: 'admissions-apply-now.html' },
      { label: 'Complete Your Enrollment', href: 'admissions-complete-your-enrollment.html' },
      { label: 'Admissions & Enrollment Forms', href: 'admissions-forms.html' },
    ],
  },
  {
    label: 'Tuition & Aid', href: 'tuition-aid.html',
    children: [
      { label: 'Financial Overview', href: 'tuition-aid.html' },
      { label: 'Tuition & Fees', href: 'tuition-aid-tuition-fees.html' },
      { label: 'International Student Tuition & Fees', href: 'tuition-aid-international.html' },
      { label: 'Financial Aid', href: 'tuition-aid-financial-aid.html' },
      { label: 'Scholarships', href: 'tuition-aid-scholarships.html' },
      { label: 'Veterans Benefits', href: 'tuition-aid-veterans-benefits.html' },
      { label: 'Speak with the Finance Office', href: 'tuition-aid-speak-with-finance.html' },
      { label: 'Speak with a Financial Aid Counselor', href: 'tuition-aid-speak-with-financial-aid-counselor.html' },
    ],
  },
  {
    label: 'Student Life', href: 'student-life.html',
    children: [
      { label: 'Student Life Overview', href: 'student-life.html' },
      { label: 'Get Involved', href: 'student-life-get-involved.html' },
      { label: 'Student Events & Calendar', href: 'student-life-events-calendar.html' },
      { label: 'Student Support', href: 'student-life-support.html' },
      { label: 'Academic Support & Accessibility', href: 'student-life-accessibility.html' },
      { label: 'Work-Study Program', href: 'student-life-work-study.html' },
      { label: 'Student Handbook', href: 'student-life-handbook.html' },
      { label: 'Student Portal', href: 'student-life-portal.html', highlight: true },
    ],
  },
  {
    label: 'Alumni', href: 'alumni.html',
    children: [
      { label: 'Alumni Overview', href: 'alumni.html' },
      { label: 'Alumni Stories', href: 'alumni-stories.html' },
      { label: 'Stay Connected', href: 'alumni-stay-connected.html' },
      { label: 'City Harvest Network', href: 'alumni-city-harvest-network.html' },
      { label: 'Continue Your Calling', href: 'alumni-continue-your-calling.html' },
      { label: 'Career & Ministry Opportunities', href: 'alumni-career-ministry.html' },
      { label: 'Share Your Story', href: 'alumni-share-your-story.html' },
    ],
  },
];

const FOOTER_COLUMNS = [
  { label: 'About', items: NAV[0].children },
  { label: 'Academics', items: NAV[1].children },
  { label: 'Admissions', items: NAV[2].children.slice(0, 4) },
  { label: 'Tuition & Aid', items: [NAV[3].children[0], NAV[3].children[1], NAV[3].children[3], NAV[3].children[4]] },
  { label: 'Student Life', items: [NAV[4].children[0], NAV[4].children[1], NAV[4].children[6], NAV[4].children[7]] },
  { label: 'Alumni', items: NAV[5].children.slice(0, 4) },
];

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---------- Shared chrome ----------
function renderHeader() {
  const items = NAV.map((sec) => {
    const children = sec.children.map((c) => (
      `<a href="${c.href}"${c.highlight ? ' class="nav-portal-link"' : ''}>${escapeHtml(c.label)}</a>`
    )).join('\n            ');
    return `<div class="nav-item">
            <div class="nav-item-row">
              <a href="${sec.href}" style="color:#FAF5EE" style-hover="color:#E01B2E">${escapeHtml(sec.label)}</a>
              <button class="submenu-toggle" aria-label="Toggle ${escapeHtml(sec.label)} submenu">▾</button>
            </div>
            <div class="dropdown">
            ${children}
            </div>
          </div>`;
  }).join('\n          ');

  return `  <header class="site-header" style="position:fixed;top:0;left:0;right:0;z-index:90;display:flex;align-items:center;gap:28px;padding:18px 32px;background:linear-gradient(180deg,rgba(16,14,13,.72),rgba(16,14,13,0))">
    <a href="index.html" style="flex:none"><img src="${LOGO}" alt="Valor Christian College" style="display:block;height:40px;width:auto"></a>
    <button id="menu-toggle" aria-label="Toggle menu" aria-expanded="false" class="menu-toggle-btn">☰</button>
    <nav id="site-nav" style="display:flex;gap:22px;margin-left:auto;font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase">
          ${items}
    </nav>
    <a href="admissions-apply-now.html" class="header-apply" style="flex:none;background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:13px 24px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.45);transition:transform .18s ease,background .18s ease" style-hover="transform:translateY(-2px) scale(1.03);background:#F02338;color:#fff">Apply Now</a>
  </header>`;
}

function renderFooter() {
  const cols = FOOTER_COLUMNS.map((col) => `      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">${escapeHtml(col.label)}</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:14px">
          ${col.items.map((i) => `<a href="${i.href}" style="color:rgba(250,245,238,.7)" style-hover="color:#fff">${escapeHtml(i.label)}</a>`).join('\n          ')}
        </div>
      </div>`).join('\n');

  return `  <footer style="background:#100E0D;color:#FAF5EE;padding:68px 32px 34px">
    <div class="footer-grid" style="max-width:1320px;margin:0 auto;display:grid;grid-template-columns:1.3fr repeat(6,1fr);gap:28px">
      <div class="footer-brand">
        <div style="margin-bottom:20px"><img src="${LOGO}" alt="Valor Christian College" style="display:block;height:52px;width:auto"></div>
        <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(250,245,238,.55);max-width:38ch">A biblically-based community of higher learning equipping Christian leaders in academic excellence, moral integrity and spiritual intensity.</p>
        <div style="display:flex;gap:10px;margin-top:22px">
          <a href="https://www.instagram.com/valorcollege/" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;font-size:12px;font-weight:700" style-hover="background:#E01B2E;color:#fff">IG</a>
          <a href="https://www.youtube.com/@ValorCollege" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;font-size:12px;font-weight:700" style-hover="background:#E01B2E;color:#fff">YT</a>
          <a href="https://www.tiktok.com/@valorcollege" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;font-size:12px;font-weight:700" style-hover="background:#E01B2E;color:#fff">TT</a>
          <a href="https://www.facebook.com/valorcollege/" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;font-size:12px;font-weight:700" style-hover="background:#E01B2E;color:#fff">FB</a>
        </div>
      </div>
${cols}
    </div>
    <div style="max-width:1320px;margin:44px auto 0;padding-top:22px;border-top:1px solid rgba(250,245,238,.14);display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;font-size:12px;color:rgba(250,245,238,.42)">
      <span>© 2026 Valor Christian College · Accredited by ABHE · Approved by ODHE</span>
      <span style="display:flex;gap:18px"><a href="about-contact.html" style="color:rgba(250,245,238,.42)" style-hover="color:#fff">Privacy</a><a href="about-contact.html" style="color:rgba(250,245,238,.42)" style-hover="color:#fff">Refund Policy</a><a href="#top" style="color:rgba(250,245,238,.42)" style-hover="color:#fff">Back to top ↑</a></span>
    </div>
  </footer>`;
}

const BASE_STYLE = `<style>
  *{box-sizing:border-box}
  body{margin:0;background:#100E0D;color:#100E0D;font-family:Archivo,Helvetica,sans-serif;-webkit-font-smoothing:antialiased}
  a{color:#E01B2E;text-decoration:none}
  a:hover{color:#B3121F}
  @keyframes vfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
  @keyframes vspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
  @keyframes vpulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:0;transform:scale(1.9)}}
  .menu-toggle-btn{display:none;background:none;border:none;color:#FAF5EE;font-size:22px;line-height:1;cursor:pointer;padding:6px;margin-left:auto}
  .site-header{transition:background .25s ease,box-shadow .25s ease}
  .site-header.scrolled{background:#100E0D!important;box-shadow:0 6px 24px rgba(0,0,0,.3)}
  .nav-item{position:relative;display:flex;align-items:center;gap:3px}
  .nav-item-row{display:flex;align-items:center;gap:3px}
  .submenu-toggle{display:none;background:none;border:none;color:inherit;font-size:11px;cursor:pointer;padding:4px}
  .dropdown{position:absolute;top:100%;left:-18px;min-width:250px;background:#100E0D;border:1px solid rgba(250,245,238,.1);border-radius:12px;padding:8px 0;box-shadow:0 20px 44px rgba(0,0,0,.4);display:none;z-index:100}
  .nav-item:hover .dropdown,.nav-item:focus-within .dropdown{display:block}
  .dropdown a{display:block;padding:10px 20px;font-size:12.5px;letter-spacing:.03em;text-transform:none;color:rgba(250,245,238,.85)!important;white-space:nowrap}
  .dropdown a:hover{color:#fff!important;background:rgba(224,27,46,.16)}
  .nav-portal-link{color:#FF8A93!important;font-weight:700!important}
  .floating-apply{position:fixed;bottom:24px;right:24px;z-index:85;width:74px;height:74px;border-radius:50%;background:#E01B2E;color:#fff!important;display:grid;place-items:center;text-align:center;font-size:13px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;box-shadow:0 12px 30px rgba(224,27,46,.5);transition:transform .18s ease}
  .floating-apply:hover{transform:translateY(-2px) scale(1.05);color:#fff!important}
  @media (max-width:860px){
    .floating-apply{width:60px;height:60px;font-size:11px;bottom:16px;right:16px}
    .hero-section{align-items:center!important}
    .hero-inner{text-align:center;padding-bottom:0!important}
    .hero-copy{margin-left:auto!important;margin-right:auto!important}
    .hero-ctas{justify-content:center!important;margin-left:auto!important;margin-right:auto!important}
    .hero-cta-btn{font-size:11px!important;padding:15px 6px!important;letter-spacing:.02em!important}
    .site-header{padding:14px 20px!important;gap:14px!important}
    .menu-toggle-btn{display:block!important;margin-left:auto!important}
    .header-apply{padding:10px 16px!important;font-size:12px!important}
    #site-nav{position:fixed!important;top:64px;left:0;right:0;margin-left:0!important;flex-direction:column!important;align-items:flex-start!important;gap:0!important;background:#100E0D;max-height:0;overflow:auto;transition:max-height .3s ease}
    #site-nav.open{max-height:calc(100vh - 64px)}
    #site-nav>.nav-item{display:flex;flex-direction:column;align-items:stretch;width:100%}
    .nav-item-row{justify-content:space-between;border-bottom:1px solid rgba(250,245,238,.1)}
    .nav-item-row a{padding:14px 24px!important;width:100%}
    .submenu-toggle{display:block!important;font-size:16px;padding:14px 20px;color:#FAF5EE}
    .nav-item.open .submenu-toggle{transform:rotate(180deg)}
    .dropdown{position:static;box-shadow:none;border:none;padding:0;background:rgba(255,255,255,.03);display:none}
    .nav-item.open .dropdown{display:block}
    .dropdown a{padding:10px 20px 10px 36px!important}
    .about-grid{grid-template-columns:1fr!important;gap:40px!important}
    .about-collage{height:400px!important}
    .stats-grid{grid-template-columns:repeat(2,1fr)!important;row-gap:24px!important}
    .stat-num{font-size:36px!important}
    .programs-grid,.pathways-grid{grid-template-columns:repeat(2,1fr)!important}
    .life-grid{grid-template-columns:1fr!important}
    .gallery-grid{grid-template-columns:repeat(2,1fr)!important}
    .gallery-offset{margin-top:0!important}
    .footer-grid{grid-template-columns:repeat(2,1fr)!important;gap:32px 24px!important}
    .footer-brand{grid-column:1/-1!important}
  }
  @media (max-width:560px){
    .programs-grid,.pathways-grid{grid-template-columns:1fr!important}
    .about-collage{height:320px!important}
  }
</style>`;

const RUNTIME_SCRIPT = `<script type="text/x-dc" data-dc-script="">
class Component extends DCLogic {
  componentDidMount() {
    this.reveal();
    this.counters();
    this.menu();
    this.stickyHeader();
  }
  stickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 30) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  menu() {
    const btn = document.getElementById('menu-toggle');
    const nav = document.getElementById('site-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.textContent = open ? '✕' : '☰';
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.submenu-toggle').forEach(t => {
      t.addEventListener('click', (e) => {
        e.preventDefault();
        t.closest('.nav-item').classList.toggle('open');
      });
    });
    nav.querySelectorAll('.dropdown a, .nav-item-row a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.textContent = '☰';
      btn.setAttribute('aria-expanded', 'false');
    }));
  }
  reveal() {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) return;
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      el.style.transition = 'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, i * 70);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }
  counters() {
    const els = Array.from(document.querySelectorAll('[data-count]'));
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        io.unobserve(el);
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / 1100);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '');
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    els.forEach(el => io.observe(el));
  }
}
</script>`;

const RESOURCE_MAP_SCRIPT = `<script>window.__resources = {"https://unpkg.com/react@18.3.1/umd/react.production.min.js":"assets/js/b4fcacef-2f6b-444c-8341-6d4e3eb29e09.js","https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js":"assets/js/234e7365-9799-4c80-83bd-25f9d31be6b8.js"};</script>`;

function renderPage({ title, description, socialImage, bodyHtml }) {
  return `<!DOCTYPE html>
<html><head>
${RESOURCE_MAP_SCRIPT}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${socialImage || IMG.social}">
<link rel="preconnect" href="https://ik.imagekit.io" crossorigin>
<link rel="preload" as="image" href="${IMG.heroPoster}" fetchpriority="high">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/fcb01a3d-49b1-4f6f-a634-7c16cd1ea3a9.woff2" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/4f4c1e77-709d-474f-bf96-392753485ee5.woff2" crossorigin="anonymous">
<script defer src="assets/js/de7b7d31-826e-4e82-9b83-eeefcf97e7dc.js"></script>
</head>
<body>
<x-dc>
<helmet data-dc-atomics="">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
${FONT_FACE_CSS}
${BASE_STYLE}
</helmet>

<div id="top" style="background:#FAF5EE;overflow-x:hidden">

${renderHeader()}

<a href="admissions-apply-now.html" class="floating-apply">Apply</a>

${bodyHtml}

${renderFooter()}
</div>

</x-dc>
${RUNTIME_SCRIPT}

</body></html>`;
}

module.exports = { renderPage, NAV, IMG, LOGO, HERO_VIDEO, escapeHtml, ROOT };
