// Static site generator for the Valor Christian College site.
// Run with: node tools/build-site.js  (from repo root)
// Produces plain .html files at the repo root — no runtime build step, no server templating.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FONT_FACE_CSS = fs.readFileSync(path.join(__dirname, 'fontface.html'), 'utf8');

// ---------- Content sources ----------
const LOGO = 'assets/images/valor-logo-white.png'; // downloaded + downscaled from the S3 original for performance
const HERO_VIDEO = 'https://directus.valorcollege.edu/assets/73C04156-E3A8-492F-9369-1E2461C3A7DB';
// Client migrated the ImageKit photo library to Directus. Map of the old
// ImageKit filename -> new Directus asset id, built from the client's own
// re-exported HTML (every image below was verified present, consistently,
// across all 38 pages). IK() falls back to the original ImageKit URL for
// anything not in this map.
const DIRECTUS_ASSET = {
  'A7301737pl.jpg': '25FADC64-3582-4861-84EB-9704E2036BC9',
  'A7301807.jpg': 'B4EDE3CC-308F-4379-945E-1A5E97170C9E',
  'A7303011.jpg': 'FEAD2F38-77AE-4EE6-84A2-4732EE79400C',
  'A7309778_1.jpg': '6A3C8B6E-A7EE-4A78-9B31-BD4983DD7886',
  'DHCOWYTE.jpg': '0D12328F-7271-4D8F-BA91-C4B991AE8AFB',
  'DSC00837.jpg': 'B6BC630C-BC9E-4A9F-86E7-1EFBD1A48A52',
  'DSC01795.jpg': 'BDF23190-E5A9-4479-909E-8226AE9102B4',
  'DSC02739.jpg': 'DA9EC617-74E6-4EE0-B089-AA6DF2C4F3F0',
  'DSC03220.jpg': 'D89D4CD6-C9C9-4B0E-8EE3-A8D441E12669',
  'DSC03821.jpg': '3C54B9CF-68BB-4B6E-B7D3-3EC0585284C4',
  'DSC03832.jpg': '0EC30D40-F732-41A0-9B02-2EE04B8E38BC',
  'DSC03837.jpg': 'A44193A5-580C-40B9-B556-09267470620B',
  'DSC03880.jpg': 'D4C9C49B-3E6B-45ED-AC7A-187D24C18943',
  'DSC03895.jpg': '1FB45362-814A-40D5-831B-C4F1892E0B51',
  'DSC03901.jpg': '7BCA1821-CEF3-4D98-A0A3-8ECC312AD6D7',
  'DSC05427.jpg': 'E5F0B7A3-12FA-4070-9F00-6E2894147859',
  'DSC08674.jpg': '0E27E0B1-B1E1-4982-A4E1-4D30C6AA67E1',
  'DSC09572.jpg': '23D17BFE-9E43-4C31-A1E4-8AD99AF59C2C',
  'DSC09620_1.jpg': '92C8D4A3-9778-43A7-A891-253DADA13BBB',
  'VCC.Graduation.2026-383.jpg': 'BBCACFDF-4806-49DB-930E-31FC1287DD0D',
};
const IK = (name) => DIRECTUS_ASSET[name]
  ? `https://directus.valorcollege.edu/assets/${DIRECTUS_ASSET[name]}?width=1200&quality=80`
  : `https://ik.imagekit.io/vddpcxj7e/valor/${name}?tr=f-auto,q-auto,w-1200`;
const IMG = {
  heroPoster: IK('DSC01795.jpg'),
  onCampus: IK('DSC08674.jpg'),
  online: 'https://directus.valorcollege.edu/assets/2CDEF3FE-3DA2-4528-B067-D5C8BF9E7936?width=1200&quality=80',
  cohort: IK('DHCOWYTE.jpg'),
  whyValorMain: IK('VCC.Graduation.2026-383.jpg'),
  whyValor2: IK('A7309778_1.jpg'),
  whyValor3: IK('A7303011.jpg'),
  testimonial: IK('DSC03901.jpg'),
  founderPortrait: 'https://directus.valorcollege.edu/assets/999EC61D-FF17-452B-ADF3-73E58FEDC0E6?width=1200&quality=80',
  presidentPortrait: 'https://directus.valorcollege.edu/assets/52157AC3-63C6-48EF-AEA5-1FB6D7697B6E?width=1200&quality=80',
  whyValorPageHero: 'https://directus.valorcollege.edu/assets/54FC0702-0D6E-486E-B10F-F7477D476E6F?width=1200&quality=80',
  whyValorPageCommunity: 'https://directus.valorcollege.edu/assets/55CFFBEB-81D9-4DF9-A691-776815A2F66B?width=1200&quality=80',
  whyValorPageMinistry: 'https://directus.valorcollege.edu/assets/DD65CFDE-372A-4B5E-A48C-725CFF1E01A4?width=1200&quality=80',
  whyValorPageAcademics: 'https://directus.valorcollege.edu/assets/4027F968-995F-4267-8EAF-C03188A583F5?width=1200&quality=80',
  whyValorPageExperience: 'https://directus.valorcollege.edu/assets/ECBA7319-7829-44BD-8C70-D4E4B97C288E?width=1200&quality=80',
  degreeProgramsHero: 'https://directus.valorcollege.edu/assets/B901B7A9-6161-417E-B1EA-3CA90B4F16F5',
  scholarshipPromoPopup: 'https://directus.valorcollege.edu/assets/2D4A08BB-38FC-4185-AF58-5949D0468EC1',
  creditForPriorLearningHero: 'https://directus.valorcollege.edu/assets/23BA4E15-6D6B-44A5-B3F1-7B2D4430D305?width=1200&quality=80',
  prog1: IK('DSC00837.jpg'),
  prog2: IK('A7301807.jpg'),
  prog3: IK('DSC09572.jpg'),
  prog4: IK('DSC05427.jpg'),
  prog5: IK('DSC08674.jpg'),
  // WEB.png was dead (404) on ImageKit before this site was ever built — not
  // something the client's Directus migration missed. Standing in with the
  // og:image the client's own production site (valorcollege.edu) currently
  // serves, now hosted in Directus.
  social: 'https://directus.valorcollege.edu/assets/D7D66977-A6A9-4B87-ABF9-79B9B5AC28C8?width=1200&quality=80',
  // Student Life gallery: the original 8 + the images swapped in elsewhere on the
  // site today + one new addition, all requested to live on student-life.html.
  studentLifeGallery: [
    IK('DSC03837.jpg'),
    IK('DSC03895.jpg'),
    IK('DSC02739.jpg'),
    IK('DSC03220.jpg'),
    IK('DSC03821.jpg'),
    IK('DSC03832.jpg'),
    IK('DSC03880.jpg'),
    IK('A7301737pl.jpg'),
    IK('DSC08674.jpg'),
    IK('DHCOWYTE.jpg'),
    IK('A7309778_1.jpg'),
    IK('A7303011.jpg'),
    IK('DSC09620_1.jpg'),
  ],
};

// ---------- Navigation (from docs/BUILD_BRIEF.md, section 2) ----------
// Each section is main-navigation content (a mega-menu of real pages).
// Secondary/utility actions (Request Info, Student Portal) live outside
// this structure entirely, as the two persistent header buttons — they
// are tools/actions, not content, so they never appear inside a section's
// own menu. "featured" holds 1-2 real, already-published pages per
// section (reusing each page's own established copy) plus one CTA link,
// for the mega-menu's left panel; "children" is the plain link list for
// the right panel (and, unchanged, the footer).
const NAV = [
  {
    label: 'About', href: 'about-our-legacy.html',
    children: [
      { label: 'Our Legacy', href: 'about-our-legacy.html' },
      { label: 'Meet Our Team', href: 'about-meet-our-team.html' },
      { label: 'Why Valor', href: 'about-why-valor.html' },
      { label: 'Contact', href: 'about-contact.html' },
    ],
    featured: [
      { label: 'Our Legacy', href: 'about-our-legacy.html', blurb: 'The story behind Valor — why it exists, and the founder who started it.' },
      { label: 'Why Valor', href: 'about-why-valor.html', blurb: 'What sets a Valor education apart, in plain terms.' },
    ],
    cta: { label: 'Meet Our Team', href: 'about-meet-our-team.html' },
  },
  {
    label: 'Academics', href: 'academics-degree-programs.html',
    children: [
      { label: 'Degree Programs', href: 'academics-degree-programs.html' },
      { label: 'Academic Catalog', href: 'academics-academic-catalog.html' },
      { label: 'Class Schedules', href: 'academics-class-schedules.html' },
      { label: 'Credit for Prior Learning', href: 'academics-credit-for-prior-learning.html' },
    ],
    featured: [
      { label: 'Degree Programs', href: 'academics-degree-programs.html', blurb: "Bachelor's degrees, associate degrees, and one-year certificates — compare programs and find the one that fits your calling." },
      { label: 'Academic Catalog', href: 'academics-academic-catalog.html', blurb: 'The current academic catalog, policies, and course descriptions.' },
    ],
    cta: { label: 'View Class Schedules', href: 'academics-class-schedules.html' },
  },
  {
    label: 'Admissions', href: 'admissions.html',
    children: [
      { label: 'Admissions Overview', href: 'admissions.html' },
      { label: 'Speak with a Counselor', href: 'admissions-speak-with-a-counselor.html' },
      { label: 'Apply Now', href: 'admissions-apply-now.html' },
      { label: 'International Students', href: 'admissions-international-students.html' },
      { label: 'Admissions & Enrollment Forms', href: 'admissions-forms.html' },
    ],
    featured: [
      { label: 'Apply Now', href: 'admissions-apply-now.html', blurb: 'Start your Valor application.' },
      { label: 'Speak with a Counselor', href: 'admissions-speak-with-a-counselor.html', blurb: 'Book time with an admissions counselor to talk through programs, cost, and next steps.' },
    ],
    cta: { label: 'Admissions Overview', href: 'admissions.html' },
  },
  {
    label: 'Tuition & Aid', href: 'tuition-aid.html',
    children: [
      { label: 'Financial Overview', href: 'tuition-aid.html' },
      { label: 'Tuition & Fees', href: 'tuition-aid-tuition-fees.html', children: [
        { label: 'International Student Tuition & Fees', href: 'tuition-aid-international.html' },
      ] },
      { label: 'Financial Aid', href: 'tuition-aid-financial-aid.html' },
      { label: 'Scholarships', href: 'tuition-aid-scholarships.html' },
    ],
    featured: [
      { label: 'Financial Aid', href: 'tuition-aid-financial-aid.html', blurb: 'Learn about financial aid options and resources available to eligible students.' },
      { label: 'Scholarships', href: 'tuition-aid-scholarships.html', blurb: 'Explore scholarship opportunities that may help make your Valor education more affordable.' },
    ],
    cta: { label: 'View Tuition & Fees', href: 'tuition-aid-tuition-fees.html' },
  },
  {
    label: 'Student Life', href: 'student-life.html',
    children: [
      { label: 'Student Life Overview', href: 'student-life.html' },
      { label: 'Get Involved', href: 'student-life-get-involved.html' },
      { label: 'Student Events & Calendar', href: 'student-life-events-calendar.html' },
      { label: 'Student Support', href: 'student-life-support.html', children: [
        { label: 'Academic Support & Accessibility', href: 'student-life-accessibility.html' },
      ] },
      { label: 'Mac Café & Meal Menu', href: 'student-life-mac-cafe.html' },
      { label: 'Student Handbook', href: 'student-life-handbook.html' },
    ],
    featured: [
      { label: 'Get Involved', href: 'student-life-get-involved.html', blurb: 'Ways to plug into campus and community life.' },
      { label: 'Student Support', href: 'student-life-support.html', blurb: 'Support resources available to every Valor student.' },
    ],
    cta: { label: 'Student Life Overview', href: 'student-life.html' },
  },
  {
    label: 'Alumni', href: 'alumni.html',
    children: [
      { label: 'Alumni Overview', href: 'alumni.html' },
      { label: 'Alumni Stories', href: 'alumni-stories.html' },
      { label: 'Stay Connected', href: 'alumni-stay-connected.html', children: [
        { label: 'City Harvest Network', href: 'alumni-city-harvest-network.html' },
      ] },
      { label: 'Continue Your Calling', href: 'alumni-continue-your-calling.html', children: [
        { label: 'Career & Ministry Opportunities', href: 'alumni-career-ministry.html' },
      ] },
      { label: 'Share Your Story', href: 'alumni-share-your-story.html' },
    ],
    featured: [
      { label: 'Alumni Stories', href: 'alumni-stories.html', blurb: 'Stories of Valor graduates serving in ministry, missions, business, and media.' },
      { label: 'Stay Connected', href: 'alumni-stay-connected.html', blurb: 'Ways to stay connected to Valor after graduation.' },
    ],
    cta: { label: 'Share Your Story', href: 'alumni-share-your-story.html' },
  },
];

// Explicit, hand-picked lists (not derived from NAV by position) so a
// future edit to NAV's item count or nesting can't silently misalign
// or drop a footer link.
const FOOTER_COLUMNS = [
  { label: 'About', items: NAV[0].children },
  { label: 'Academics', items: NAV[1].children },
  { label: 'Admissions', items: [
    { label: 'Admissions Overview', href: 'admissions.html' },
    { label: 'Speak with a Counselor', href: 'admissions-speak-with-a-counselor.html' },
    { label: 'Apply Now', href: 'admissions-apply-now.html' },
    { label: 'International Students', href: 'admissions-international-students.html' },
  ] },
  { label: 'Tuition & Aid', items: NAV[3].children },
  { label: 'Student Life', items: [
    { label: 'Student Life Overview', href: 'student-life.html' },
    { label: 'Get Involved', href: 'student-life-get-involved.html' },
    { label: 'Mac Café & Meal Menu', href: 'student-life-mac-cafe.html' },
    { label: 'Student Handbook', href: 'student-life-handbook.html' },
  ] },
  { label: 'Alumni', items: [
    { label: 'Alumni Overview', href: 'alumni.html' },
    { label: 'Alumni Stories', href: 'alumni-stories.html' },
    { label: 'Stay Connected', href: 'alumni-stay-connected.html' },
    { label: 'Continue Your Calling', href: 'alumni-continue-your-calling.html' },
  ] },
];

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---------- Shared chrome ----------
function renderHeader() {
  const items = NAV.map((sec) => {
    const children = sec.children.map((c) => (
      c.children
        ? `<div class="mega-link-group">
                <a href="${c.href}">${escapeHtml(c.label)}</a>
                ${c.children.map((sc) => `<a href="${sc.href}" class="mega-sublink"><i class="fa-solid fa-chevron-right"></i>${escapeHtml(sc.label)}</a>`).join('\n                ')}
              </div>`
        : `<a href="${c.href}">${escapeHtml(c.label)}</a>`
    )).join('\n              ');
    const featured = sec.featured.map((f) => (
      `<a href="${f.href}" class="mega-feature">
                <div class="mega-feature-title">${escapeHtml(f.label)} <i class="fa-solid fa-chevron-right"></i></div>
                <p class="mega-feature-blurb">${escapeHtml(f.blurb)}</p>
              </a>`
    )).join('\n              ');
    return `<div class="nav-item">
            <button type="button" class="nav-item-row submenu-toggle" aria-expanded="false">
              <span>${escapeHtml(sec.label)}</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="dropdown">
              <div class="mega-inner">
                <div class="mega-featured">
                  <div class="mega-eyebrow">Featured</div>
                  ${featured}
                  <a href="${sec.cta.href}" class="mega-cta">${escapeHtml(sec.cta.label)}</a>
                </div>
                <div class="mega-links">
                  <div class="mega-links-title">${escapeHtml(sec.label)}</div>
                  ${children}
                </div>
              </div>
            </div>
          </div>`;
  }).join('\n          ');

  return `  <header class="site-header" style="position:fixed;top:0;left:0;right:0;z-index:90;display:flex;align-items:center;gap:20px;padding:18px 32px;background:linear-gradient(180deg,rgba(16,14,13,.72),rgba(16,14,13,0))">
    <a href="index.html" style="flex:none"><img src="${LOGO}" alt="Valor Christian College" class="site-logo" style="display:block;height:56px;width:auto"></a>
    <nav id="site-nav" style="display:flex;gap:22px;margin-left:auto;font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase">
          ${items}
    </nav>
    <a href="admissions.html" class="header-request-info" style="flex:none;background:#FAF5EE;color:#100E0D;font-size:13px;font-weight:700;padding:13px 20px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Request Info</a>
    <a href="student-life-portal.html" class="header-student-portal" style="flex:none;background:#E01B2E;color:#fff;font-size:13px;font-weight:700;padding:13px 20px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.45);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Student Portal</a>
    <button id="menu-toggle" aria-label="Toggle menu" aria-expanded="false" class="menu-toggle-btn">☰</button>
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
          <a href="https://www.instagram.com/valorcollege/" aria-label="Instagram" class="social-icon" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;transition:background .18s ease,border-color .18s ease" style-hover="background:#E01B2E;border-color:#E01B2E;color:#fff"><i class="fa-brands fa-instagram" style="font-size:16px"></i></a>
          <a href="https://www.youtube.com/@ValorCollege" aria-label="YouTube" class="social-icon" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;transition:background .18s ease,border-color .18s ease" style-hover="background:#E01B2E;border-color:#E01B2E;color:#fff"><i class="fa-brands fa-youtube" style="font-size:16px"></i></a>
          <a href="https://www.tiktok.com/@valorcollege" aria-label="TikTok" class="social-icon" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;transition:background .18s ease,border-color .18s ease" style-hover="background:#E01B2E;border-color:#E01B2E;color:#fff"><i class="fa-brands fa-tiktok" style="font-size:15px"></i></a>
          <a href="https://www.facebook.com/valorcollege/" aria-label="Facebook" class="social-icon" style="display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid rgba(250,245,238,.28);color:#FAF5EE;transition:background .18s ease,border-color .18s ease" style-hover="background:#E01B2E;border-color:#E01B2E;color:#fff"><i class="fa-brands fa-facebook-f" style="font-size:15px"></i></a>
        </div>
      </div>
${cols}
    </div>
    <div style="max-width:1320px;margin:44px auto 0;padding-top:22px;border-top:1px solid rgba(250,245,238,.14);display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;font-size:12px;color:rgba(250,245,238,.55)">
      <span>© 2026 Valor Christian College · Accredited by ABHE · Approved by ODHE</span>
      <span style="display:flex;gap:18px"><a href="about-contact.html" style="color:rgba(250,245,238,.55)" style-hover="color:#fff">Privacy</a><a href="about-contact.html" style="color:rgba(250,245,238,.55)" style-hover="color:#fff">Refund Policy</a><a href="#page-top" style="color:rgba(250,245,238,.55)" style-hover="color:#fff">Back to top ↑</a></span>
    </div>
  </footer>`;
}

const BASE_STYLE = `<style>
  *{box-sizing:border-box}
  body{margin:0;background:#100E0D;color:#100E0D;font-family:Archivo,Helvetica,sans-serif;-webkit-font-smoothing:antialiased}
  a{color:#E01B2E;text-decoration:none}
  a:hover{color:#B3121F}
  @keyframes vfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
  @media (prefers-reduced-motion:reduce){.collage-bounce{animation:none!important}}
  @keyframes marquee-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .marquee-wrap{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
  .marquee-track{display:flex;width:max-content;animation:marquee-scroll 32s linear infinite}
  @media (prefers-reduced-motion:reduce){.marquee-track{animation:none}}
  .float-tag{animation:vfloat 5.5s ease-in-out infinite}
  @media (prefers-reduced-motion:reduce){.float-tag{animation:none}}
  @media (max-width:1320px){.float-tag{display:none!important}}
  .tilt-tile{transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s ease;will-change:transform}
  .tilt-tile:hover{transform:rotate(0deg) scale(1.06)!important;box-shadow:0 24px 50px rgba(16,14,13,.28);z-index:5}
  @media (max-width:1200px){.tilt-tile{transform:none!important}}
  .reel-wrap{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x proximity;padding:8px 4px 20px;-webkit-overflow-scrolling:touch;scrollbar-width:thin}
  .reel-item{flex:none;scroll-snap-align:start;width:220px;transition:transform .3s ease,box-shadow .3s ease}
  .reel-item:hover{transform:translateY(-6px);box-shadow:0 24px 50px rgba(16,14,13,.3)}
  .menu-toggle-btn{display:none;background:none;border:none;color:#FAF5EE;font-size:22px;line-height:1;cursor:pointer;padding:6px;margin-left:auto}
  .site-header{transition:background .25s ease,box-shadow .25s ease}
  .site-header.scrolled{background:#100E0D!important;box-shadow:0 6px 24px rgba(0,0,0,.3)}
  .nav-item{position:relative;display:flex;align-items:center}
  .nav-item-row{display:flex;align-items:center;gap:7px;padding:8px 10px;margin:0 -10px;border-radius:8px;border:1px solid transparent;background:none;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;text-transform:inherit;line-height:inherit;color:#FAF5EE;transition:border-color .15s ease,background .15s ease,color .15s ease}
  .nav-item-row:hover{color:#FF8A93}
  .nav-item.open .nav-item-row{border-color:rgba(250,245,238,.3);background:rgba(250,245,238,.06);color:#fff}
  .nav-item-row::after{content:'';position:absolute;left:10px;right:10px;bottom:-15px;height:2px;background:#E01B2E;transform:scaleX(0);transition:transform .18s ease}
  .nav-item.open .nav-item-row::after{transform:scaleX(1)}
  .nav-item-row i{font-size:9px;color:inherit;transition:transform .18s ease}
  .nav-item.open .nav-item-row i{transform:rotate(180deg)}
  .dropdown{position:fixed;top:92px;left:0;right:0;z-index:100;opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .18s ease,transform .18s ease;pointer-events:none}
  .nav-item.open .dropdown{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}
  .mega-inner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1.3fr 1fr;background:#100E0D;border-radius:0 0 16px 16px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.45);border:1px solid rgba(250,245,238,.1);border-top:none}
  .mega-featured{background:#FAF5EE;padding:36px 40px}
  .mega-eyebrow{font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#B3121F;margin-bottom:18px}
  .mega-feature{display:block;padding:14px 0;border-bottom:1px solid rgba(16,14,13,.08)}
  .mega-feature:first-of-type{padding-top:0}
  .mega-feature-title{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;color:#100E0D!important;display:flex;align-items:center;justify-content:space-between;gap:10px}
  .mega-feature-title i{font-size:12px;color:#B3121F;transition:transform .18s ease}
  .mega-feature:hover .mega-feature-title i{transform:translateX(4px)}
  .mega-feature-blurb{margin:6px 0 0;font-size:13px;line-height:1.5;color:rgba(16,14,13,.62)!important;text-transform:none!important}
  .mega-cta{display:inline-block;margin-top:22px;background:#100E0D;color:#fff!important;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:13px 24px;border-radius:999px;transition:background .18s ease}
  .mega-cta:hover{background:#000!important}
  .mega-links{background:#100E0D;padding:36px 40px}
  .mega-links-title{font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(250,245,238,.5);margin-bottom:14px}
  .mega-links a{display:block;padding:9px 0;font-size:13.5px;letter-spacing:.02em;text-transform:none;color:rgba(250,245,238,.85)!important;white-space:nowrap;transition:padding-left .15s ease}
  .mega-links a:hover{color:#fff!important;padding-left:6px}
  .mega-link-group{margin-bottom:2px}
  .mega-sublink{display:flex!important;align-items:center;gap:8px;padding:7px 0 7px 4px!important;font-size:12.5px!important;color:rgba(250,245,238,.6)!important}
  .mega-sublink i{font-size:8px;color:rgba(250,245,238,.35)}
  .mega-sublink:hover i{color:#E01B2E}
  .floating-apply{position:fixed;bottom:24px;right:24px;z-index:85;width:74px;height:74px;border-radius:50%;background:#E01B2E;color:#fff!important;display:grid;place-items:center;text-align:center;font-size:13px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;box-shadow:0 12px 30px rgba(224,27,46,.5);transition:transform .18s ease}
  .floating-apply:hover{transform:translateY(-2px) scale(1.05);color:#fff!important}
  .promo-popup-overlay{position:fixed;inset:0;z-index:200;background:rgba(16,14,13,.75);display:none;align-items:center;justify-content:center;padding:24px;opacity:0;transition:opacity .3s ease}
  .promo-popup-overlay.is-open{display:flex}
  .promo-popup-overlay.is-visible{opacity:1}
  .promo-popup{position:relative;max-width:680px;width:100%;border-radius:22px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5);background:#fff;opacity:0;transform:translateX(90px);transition:transform .5s cubic-bezier(.16,1,.3,1),opacity .4s ease}
  .promo-popup-overlay.is-visible .promo-popup{transform:translateX(0);opacity:1}
  .promo-popup-link{display:block;line-height:0}
  .promo-popup-link img{display:block;width:100%;height:auto;aspect-ratio:2.35;object-fit:cover;background:#100E0D}
  .promo-popup-body{padding:22px 30px 28px;text-align:center}
  .promo-popup-text{margin:0 0 18px;font-size:14.5px;line-height:1.55;color:rgba(16,14,13,.62)}
  .promo-popup-cta{display:inline-flex;align-items:center;gap:9px;background:#E01B2E;color:#fff;font-size:13.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 30px;border-radius:999px;box-shadow:0 10px 26px rgba(224,27,46,.4);transition:transform .18s ease,background .18s ease}
  .promo-popup-cta:hover{transform:translateY(-2px);background:#F02338;color:#fff}
  .promo-popup-close{position:absolute;top:12px;right:12px;width:38px;height:38px;border-radius:50%;background:rgba(16,14,13,.72);color:#fff;border:none;display:grid;place-items:center;cursor:pointer;font-size:15px;line-height:1;transition:background .15s ease,transform .15s ease;z-index:2}
  .promo-popup-close:hover{background:#100E0D;transform:scale(1.08)}
  .va-hero{background:#100E0D;padding:150px 32px 60px;text-align:center}
  .va-hero-motto{margin-top:18px;font-size:11px;font-weight:700;letter-spacing:.3em;color:rgba(250,245,238,.5)}
  .va-wrap{max-width:840px;margin:-40px auto 0;padding:0 24px 120px;position:relative}
  .va-tracker{display:flex;align-items:center;justify-content:center;background:#fff;border-radius:20px;box-shadow:0 20px 50px rgba(16,14,13,.12);padding:26px 20px;margin-bottom:36px}
  .va-tracker-step{display:flex;flex-direction:column;align-items:center;gap:8px;flex:1;min-width:0}
  .va-tracker-num{width:34px;height:34px;border-radius:50%;background:rgba(16,14,13,.08);color:rgba(16,14,13,.45);display:grid;place-items:center;font-weight:800;font-size:13px;font-family:'Bricolage Grotesque',sans-serif;transition:background .2s ease,color .2s ease}
  .va-tracker-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(16,14,13,.45);transition:color .2s ease}
  .va-tracker-step.is-active .va-tracker-num{background:#E01B2E;color:#fff}
  .va-tracker-step.is-active .va-tracker-label{color:#100E0D}
  .va-tracker-step.is-done .va-tracker-num{background:#100E0D;color:#fff}
  .va-tracker-step.is-done .va-tracker-label{color:#100E0D}
  .va-tracker-line{flex:none;width:56px;height:2px;background:rgba(16,14,13,.12);margin:0 4px 22px}
  .va-page{background:#fff;border-radius:20px;box-shadow:0 20px 50px rgba(16,14,13,.08);padding:44px 40px;margin-bottom:24px}
  .va-page-intro{margin:0 0 32px;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.6)}
  .va-section{padding-top:32px;margin-top:32px;border-top:1px solid rgba(16,14,13,.08)}
  .va-section:first-child{padding-top:0;margin-top:0;border-top:none}
  .va-section-title{margin:0 0 4px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:19px;color:#100E0D}
  .va-section-sub{margin:0 0 22px;font-size:13.5px;line-height:1.55;color:rgba(16,14,13,.55)}
  .va-section-title+.va-section-sub{margin-top:0}
  .va-row{display:grid;gap:20px;margin-bottom:20px}
  .va-row-2{grid-template-columns:repeat(2,1fr)}
  .va-row-3{grid-template-columns:repeat(3,1fr)}
  .va-row-5{grid-template-columns:1fr 1.3fr 1fr 1.3fr 1fr}
  .va-field{margin-bottom:20px}
  .va-row .va-field{margin-bottom:0}
  .va-label{display:block;font-size:12.5px;font-weight:700;color:#100E0D;margin-bottom:8px}
  .va-label .req{color:#E01B2E}
  .va-input{width:100%;border:1.5px solid rgba(16,14,13,.15);border-radius:10px;padding:12px 14px;font-size:14.5px;font-family:Archivo,sans-serif;color:#100E0D;background:#fff;transition:border-color .15s ease;appearance:none}
  select.va-input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23100E0D' stroke-width='1.6' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:34px}
  .va-input:focus{outline:none;border-color:#E01B2E}
  textarea.va-input{resize:vertical;min-height:88px}
  .va-hint{margin-top:8px;font-size:12.5px;line-height:1.5;color:rgba(16,14,13,.5)}
  .va-msg{margin-top:6px;font-size:12px;font-weight:600;min-height:15px}
  .va-field.is-valid .va-msg{color:#1a7a3c}
  .va-field.is-invalid .va-msg{color:#C4152B}
  .va-field.is-invalid .va-input{border-color:#C4152B}
  .va-field.is-valid .va-input{border-color:#1a7a3c}
  .va-radio-row,.va-checkbox-grid{display:flex;flex-wrap:wrap;gap:10px}
  .va-radio-pill,.va-checkbox-pill{display:inline-flex;align-items:center;gap:8px;border:1.5px solid rgba(16,14,13,.15);border-radius:999px;padding:10px 18px;font-size:13.5px;color:#100E0D;cursor:pointer;transition:border-color .15s ease,background .15s ease}
  .va-radio-pill:has(input:checked),.va-checkbox-pill:has(input:checked){border-color:#E01B2E;background:rgba(224,27,46,.06)}
  .va-radio-pill input,.va-checkbox-pill input{accent-color:#E01B2E}
  .va-field.is-invalid .va-radio-pill,.va-field.is-invalid .va-checkbox-pill{border-color:rgba(196,21,43,.4)}
  .va-checkbox-pill.is-disabled{opacity:.5;cursor:not-allowed;background:rgba(16,14,13,.03)}
  .va-checkbox-pill.is-disabled input{cursor:not-allowed}
  .va-checkbox-single{display:flex;align-items:flex-start;gap:12px;font-size:13.5px;line-height:1.6;color:rgba(16,14,13,.75)}
  .va-checkbox-single input{margin-top:3px;flex:none;accent-color:#E01B2E;width:17px;height:17px}
  .va-checkbox-single a{color:#B3121F;font-weight:700}
  .va-conditional{margin-top:18px;padding:20px;background:rgba(16,14,13,.03);border-radius:14px;border:1px solid rgba(16,14,13,.06)}
  .va-static-copy{font-size:13.5px;line-height:1.7;color:rgba(16,14,13,.65);max-height:220px;overflow-y:auto;padding:18px;background:rgba(16,14,13,.03);border-radius:14px;margin-bottom:22px}
  .va-static-copy p{margin:0 0 12px}
  .va-static-copy p:last-child{margin-bottom:0}
  .va-repeater-item{position:relative;padding:22px;border:1.5px solid rgba(16,14,13,.1);border-radius:14px;margin-bottom:16px}
  .va-repeater-remove{position:absolute;top:14px;right:14px;width:28px;height:28px;border-radius:50%;border:none;background:rgba(16,14,13,.06);color:#100E0D;cursor:pointer;display:grid;place-items:center;font-size:12px}
  .va-repeater-remove:hover{background:rgba(196,21,43,.12);color:#C4152B}
  .va-add-btn{display:inline-flex;align-items:center;gap:8px;border:1.5px dashed rgba(16,14,13,.3);background:none;color:#100E0D;font-size:13px;font-weight:700;padding:12px 20px;border-radius:999px;cursor:pointer}
  .va-add-btn:hover{border-color:#E01B2E;color:#B3121F}
  .va-fee-display{display:flex;align-items:baseline;gap:10px;background:rgba(224,27,46,.06);border-radius:14px;padding:20px 24px;margin-bottom:24px}
  .va-fee-display .amount{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:32px;color:#100E0D}
  .va-nav{display:flex;align-items:center;justify-content:space-between;gap:16px}
  .va-btn-primary{background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:16px 34px;border:none;border-radius:999px;cursor:pointer;transition:transform .18s ease,background .18s ease}
  .va-btn-primary:hover{transform:translateY(-2px);background:#F02338}
  .va-btn-secondary{background:none;border:1.5px solid rgba(16,14,13,.2);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:14px 30px;border-radius:999px;cursor:pointer}
  .va-btn-secondary:hover{background:rgba(16,14,13,.05)}
  .va-confirmation{background:#fff;border-radius:20px;box-shadow:0 20px 50px rgba(16,14,13,.08);padding:64px 44px;text-align:center}
  .va-confirmation i{font-size:44px;color:#1a7a3c;margin-bottom:20px}
  @media (max-width:640px){
    .promo-popup-overlay{padding:16px}
    .promo-popup{max-width:100%;border-radius:16px;transform:translateY(40px);opacity:0}
    .promo-popup-overlay.is-visible .promo-popup{transform:translateY(0)}
    .promo-popup-body{padding:18px 20px 24px}
    .promo-popup-cta{width:100%;text-align:center;justify-content:center;padding:15px 20px}
    .promo-popup-close{width:32px;height:32px;font-size:13px;top:8px;right:8px}
  }
  .quote-stage{position:relative;min-height:200px}
  .quote-slide{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity 1s ease}
  .quote-slide.is-active{position:relative;opacity:1;visibility:visible}
  .quote-dots{display:flex;gap:8px;justify-content:center;margin-top:36px}
  .quote-dots button{width:8px;height:8px;border-radius:50%;border:none;background:rgba(250,245,238,.3);padding:0;cursor:pointer;transition:background .2s ease,transform .2s ease}
  .contact-form input,.contact-form textarea{outline:none;transition:border-color .2s ease}
  .contact-form input:focus,.contact-form textarea:focus{border-bottom-color:#fff}
  .contact-form input::placeholder,.contact-form textarea::placeholder{color:rgba(255,255,255,.4)}
  .quote-dots button.is-active{background:#E01B2E;transform:scale(1.3)}
  .acc-row{position:relative;background:#fff;border-bottom:1px solid rgba(16,14,13,.08);transition:background .2s ease}
  .acc-row:last-child{border-bottom:none}
  .acc-row.is-open{background:#FAF5EE}
  .acc-row.is-open::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:#E01B2E}
  .acc-header{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;background:none;border:none;padding:26px 30px;cursor:pointer;text-align:left;font-family:inherit}
  .acc-title{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;color:#100E0D;transition:color .2s ease}
  .acc-row.is-open .acc-title{color:#B3121F}
  .acc-toggle-btn{flex:none;width:36px;height:36px;border-radius:50%;border:1.5px solid rgba(16,14,13,.2);display:grid;place-items:center;transition:background .2s ease,border-color .2s ease,transform .25s ease;color:#100E0D}
  .acc-row.is-open .acc-toggle-btn{background:#E01B2E;border-color:#E01B2E;color:#fff;transform:rotate(180deg)}
  .acc-panel-inner{padding:0 30px 30px}
  .acc-bullet-list{display:flex;flex-direction:column;gap:12px;margin:0 0 20px}
  .acc-bullet{display:flex;align-items:flex-start;gap:12px;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.7)}
  .acc-bullet-dot{flex:none;width:9px;height:9px;margin-top:6px;border-radius:50%;border:2px solid #E01B2E}
  .acc-row [data-more]{max-height:0;overflow:hidden;opacity:0;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .25s ease}
  .acc-row.is-open [data-more]{opacity:1;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .3s ease .1s}
  @media (max-width:1200px){
    .site-header{padding:12px 16px!important;gap:10px!important;flex-wrap:nowrap!important}
    .site-logo{height:32px!important;flex-shrink:0}
    .header-request-info,.header-student-portal{flex-shrink:0;white-space:nowrap;padding:9px 12px!important;font-size:10px!important;letter-spacing:.02em!important}
    .menu-toggle-btn{display:flex!important;align-items:center;justify-content:center;flex-shrink:0;margin-left:auto!important;width:40px;height:40px;font-size:20px!important;padding:0!important;border-radius:10px;background:rgba(250,245,238,.1)!important}
    #site-nav{position:fixed!important;top:64px;left:0;right:0;margin-left:0!important;flex-direction:column!important;align-items:flex-start!important;gap:0!important;background:#100E0D;max-height:0;overflow:auto;transition:max-height .3s ease}
    #site-nav.open{max-height:calc(100vh - 64px)}
    #site-nav>.nav-item{display:flex;flex-direction:column;align-items:stretch;width:100%}
    .nav-item-row{width:100%;padding:14px 24px!important;margin:0;border-radius:0;border:none;justify-content:space-between;border-bottom:1px solid rgba(250,245,238,.1)}
    .nav-item-row::after{display:none}
    .nav-item.open .nav-item-row{background:none}
    .nav-item-row i{font-size:14px}
    .dropdown{position:static;opacity:1;visibility:visible;transform:none;transition:none;pointer-events:auto;display:none}
    .nav-item.open .dropdown{display:block}
    .mega-inner{display:block;max-width:none;margin:0;background:none;border:none;box-shadow:none;border-radius:0}
    .mega-featured{display:none!important}
    .mega-links{background:rgba(255,255,255,.03);padding:0}
    .mega-links-title{display:none}
    .mega-links a{padding:10px 20px 10px 36px!important}
    .mega-sublink{padding:9px 20px 9px 52px!important}
    .mega-link-group{border-bottom:none;margin-bottom:0;padding-bottom:0}
  }
  @media (max-width:860px){
    .floating-apply{width:60px;height:60px;font-size:11px;bottom:16px;right:16px}
    .hero-section{align-items:center!important}
    .hero-inner{text-align:center;padding-bottom:0!important}
    .hero-ctas{justify-content:center!important;margin-left:auto!important;margin-right:auto!important}
    .hero-cta-btn{font-size:11px!important;padding:15px 6px!important;letter-spacing:.02em!important}
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
    #president-hero{align-items:flex-end!important;padding-bottom:56px!important}
    .president-hero-img{object-position:32% 22%!important}
    .president-hero-scrim{background:linear-gradient(0deg,rgba(16,14,13,.96) 35%,rgba(16,14,13,.55) 65%,rgba(16,14,13,.15) 100%)!important}
    .president-hero-text{justify-content:center!important}
    .president-hero-text>div{max-width:100%!important;text-align:center!important}
    .president-badge-row{justify-content:center!important}
    .scholarship-stat{border-left:none!important;padding-left:0!important;margin-top:36px!important}
    .scholarship-card{padding:36px 24px!important}
    .scholarship-badge{font-size:10px!important;letter-spacing:.06em!important;padding:8px 14px!important;border-radius:12px!important;white-space:normal!important;text-align:left!important}
    .scholarship-cta{display:block!important;width:100%!important;text-align:center!important;padding:16px 20px!important;font-size:12.5px!important}
    .visit-divider{display:none!important}
    .contact-form-grid{grid-template-columns:1fr!important;gap:28px!important}
    .help-cta-buttons{flex-direction:column!important;width:100%!important}
    .help-cta-buttons a{display:block!important;width:100%!important;text-align:center!important;font-size:11.5px!important;letter-spacing:.02em!important;padding:14px 14px!important;white-space:nowrap!important}
    .va-hero{padding:130px 20px 50px!important}
    .va-wrap{padding:0 14px 80px!important}
    .va-page{padding:28px 20px!important}
    .va-tracker{padding:18px 8px!important}
    .va-tracker-label{font-size:9.5px!important}
    .va-tracker-line{width:22px!important;margin:0 2px 22px!important}
    .va-row-2,.va-row-3,.va-row-5{grid-template-columns:1fr!important;gap:16px!important}
    .va-nav{flex-direction:column-reverse!important}
    .va-nav .va-btn-primary,.va-nav .va-btn-secondary{width:100%!important;text-align:center!important}
    .va-confirmation{padding:44px 22px!important}
  }
  @media (max-width:560px){
    .programs-grid,.pathways-grid{grid-template-columns:1fr!important}
    .about-collage{height:320px!important}
    .site-header{padding:10px 14px!important;gap:8px!important}
    .site-logo{height:28px!important}
    .header-request-info{display:none!important}
    .header-student-portal{padding:8px 11px!important;font-size:9.5px!important}
  }
</style>`;

const RUNTIME_SCRIPT = `<script type="text/x-dc" data-dc-script="">
class Component extends DCLogic {
  componentDidMount() {
    this.reveal();
    this.counters();
    this.menu();
    this.stickyHeader();
    this.quoteRotators();
    this.viewAllToggles();
    this.fixAutoplayVideos();
    this.promoPopup();
    this.applicationWizard();
    this.scholarshipApplicationForm();
  }
  scholarshipApplicationForm() {
    // No-op on every page except the Scholarship Application.
    const root = document.getElementById('scholarship-application-form');
    if (!root) return;
    const form = document.getElementById('scholarship-form');
    const submitBtn = document.getElementById('scholarship-submit');
    const confirmation = document.getElementById('scholarship-confirmation');

    // Same runtime bug found on the Contact form and Admissions
    // Application: hidden gets stripped on load, so assert it via JS.
    confirmation.hidden = true;

    const isValid = (el) => {
      if (el.type === 'checkbox') {
        if (el.closest('.va-checkbox-grid')) {
          const wrap = el.closest('.va-field');
          return Array.from(wrap.querySelectorAll('input[type="checkbox"]')).some((c) => c.checked && !c.disabled);
        }
        return el.checked;
      }
      const val = (el.value || '').trim();
      if (!val) return false;
      if (el.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      return true;
    };

    const paint = (el, valid) => {
      const wrap = el.closest('.va-field');
      if (!wrap) return;
      wrap.classList.toggle('is-valid', valid);
      wrap.classList.toggle('is-invalid', !valid);
      const msg = wrap.querySelector('.va-msg');
      if (msg) msg.textContent = valid ? 'Good' : 'This field is required';
    };

    const validateAll = () => {
      let ok = true;
      const seen = new Set();
      Array.from(form.querySelectorAll('[data-required="true"]')).forEach((el) => {
        if (el.disabled) return;
        const key = el.closest('.va-field') || el;
        if (seen.has(key)) return;
        seen.add(key);
        const valid = isValid(el);
        paint(el, valid);
        if (!valid) ok = false;
      });
      return ok;
    };

    root.addEventListener('blur', (e) => {
      if (e.target && e.target.matches && e.target.matches('[data-required="true"]')) paint(e.target, isValid(e.target));
    }, true);
    root.addEventListener('change', (e) => {
      if (e.target && e.target.matches && e.target.matches('[data-required="true"]')) paint(e.target, isValid(e.target));
    });

    // Presidential Scholarship eligibility is a real rule (On-Campus only),
    // not a static checkbox, per the field map's own rebuild note.
    const presidentialCheckbox = form.querySelector('input[name="scholarships"][value="Presidential Scholarship"]');
    const presidentialPill = presidentialCheckbox ? presidentialCheckbox.closest('.va-checkbox-pill') : null;
    const presidentialLabel = presidentialPill ? presidentialPill.querySelector('span') : null;
    const programSelect = form.querySelector('[name="program_of_interest"]');
    const refreshPresidentialEligibility = () => {
      if (!presidentialCheckbox) return;
      const eligible = !!programSelect && programSelect.value === 'On-Campus';
      presidentialCheckbox.disabled = !eligible;
      if (!eligible) presidentialCheckbox.checked = false;
      if (presidentialLabel) presidentialLabel.textContent = eligible ? 'Presidential Scholarship' : 'Presidential Scholarship (Not Eligible — On-Campus Only)';
      if (presidentialPill) presidentialPill.classList.toggle('is-disabled', !eligible);
    };
    if (programSelect) {
      programSelect.addEventListener('change', refreshPresidentialEligibility);
      refreshPresidentialEligibility();
    }

    submitBtn.addEventListener('click', () => {
      if (!validateAll()) {
        const bad = form.querySelector('.is-invalid');
        if (bad) bad.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      if (form.website.value) {
        // Honeypot: bots fill every field, real visitors never see this one.
        form.reset();
        confirmation.hidden = false;
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';
      setTimeout(() => {
        form.hidden = true;
        confirmation.hidden = false;
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 700);
    });
  }
  applicationWizard() {
    // No-op on every page except the Application form, so this can live in
    // the shared runtime script. Every "required" check here is done by
    // hand via a data-required="true" marker rather than the native
    // required attribute or checkValidity()/reportValidity() — this site's
    // runtime strips the required attribute from inputs shortly after load
    // (found while fixing the Contact form), so native validation can't be
    // trusted anywhere on this site.
    const root = document.getElementById('application-wizard');
    if (!root) return;
    const form = document.getElementById('application-form');
    const pages = Array.from(root.querySelectorAll('.va-page'));
    const trackerSteps = Array.from(root.querySelectorAll('.va-tracker-step'));
    const backBtn = document.getElementById('wizard-back');
    const nextBtn = document.getElementById('wizard-next');
    const submitBtn = document.getElementById('wizard-submit');
    const confirmation = document.getElementById('application-confirmation');
    let current = 0;

    // This runtime also strips the hidden attribute on load (same bug class
    // as required/checked/selected) — the confirmation panel would otherwise
    // render visible from page load instead of only after a real submit.
    confirmation.hidden = true;
    submitBtn.hidden = true;
    form.hidden = false;

    // This runtime strips the checked attribute from pre-checked radios the
    // same way it strips required (found while building this page) — restore
    // the intended defaults (e.g. Ohio Resident: No) via JS instead.
    form.querySelectorAll('input[type="radio"][data-default="true"]').forEach((el) => { el.checked = true; });
    form.querySelectorAll('option[data-default="true"]').forEach((opt) => { if (opt.parentElement) opt.parentElement.value = opt.value; });

    const showPage = (i) => {
      pages.forEach((p, idx) => { p.hidden = idx !== i; });
      trackerSteps.forEach((s, idx) => {
        s.classList.toggle('is-active', idx === i);
        s.classList.toggle('is-done', idx < i);
      });
      backBtn.style.visibility = i === 0 ? 'hidden' : 'visible';
      nextBtn.hidden = i === pages.length - 1;
      submitBtn.hidden = i !== pages.length - 1;
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const isValid = (el) => {
      if (el.type === 'radio') {
        return Array.from(form.querySelectorAll('input[type="radio"][name="' + el.name + '"]')).some((r) => r.checked);
      }
      if (el.type === 'checkbox') {
        if (el.closest('.va-checkbox-grid')) {
          const wrap = el.closest('.va-field');
          return Array.from(wrap.querySelectorAll('input[type="checkbox"]')).some((c) => c.checked);
        }
        return el.checked;
      }
      const val = (el.value || '').trim();
      if (!val) return false;
      if (el.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      return true;
    };

    const paint = (el, valid) => {
      const wrap = el.closest('.va-field');
      if (!wrap) return;
      wrap.classList.toggle('is-valid', valid);
      wrap.classList.toggle('is-invalid', !valid);
      const msg = wrap.querySelector('.va-msg');
      if (msg) msg.textContent = valid ? 'Good' : 'This field is required';
    };

    const isVisible = (el) => {
      let node = el;
      while (node && node !== root) {
        if (node.hidden) return false;
        node = node.parentElement;
      }
      return true;
    };

    const validatePage = (page) => {
      let ok = true;
      const seen = new Set();
      Array.from(page.querySelectorAll('[data-required="true"]')).forEach((el) => {
        if (!isVisible(el) || el.disabled) return;
        const key = el.closest('.va-field') || el;
        if (seen.has(key)) return;
        seen.add(key);
        const valid = isValid(el);
        paint(el, valid);
        if (!valid) ok = false;
      });
      return ok;
    };

    root.addEventListener('blur', (e) => {
      if (e.target && e.target.matches && e.target.matches('[data-required="true"]')) paint(e.target, isValid(e.target));
    }, true);
    root.addEventListener('change', (e) => {
      if (e.target && e.target.matches && e.target.matches('[data-required="true"]')) paint(e.target, isValid(e.target));
    });

    const jumpToFirstInvalid = (page) => {
      const bad = page.querySelector('.is-invalid');
      if (bad) bad.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    nextBtn.addEventListener('click', () => {
      if (!validatePage(pages[current])) { jumpToFirstInvalid(pages[current]); return; }
      current = Math.min(current + 1, pages.length - 1);
      showPage(current);
    });
    backBtn.addEventListener('click', () => {
      current = Math.max(current - 1, 0);
      showPage(current);
    });
    submitBtn.addEventListener('click', () => {
      if (!validatePage(pages[current])) { jumpToFirstInvalid(pages[current]); return; }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';
      setTimeout(() => {
        form.hidden = true;
        root.querySelector('.va-tracker').hidden = true;
        confirmation.hidden = false;
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 700);
    });

    // Conditional panels: any named control toggles matching .va-conditional
    // panels whose data-show-if-value matches its current value.
    const evalConditional = (panel) => {
      const name = panel.getAttribute('data-show-if-name');
      const want = panel.getAttribute('data-show-if-value');
      let value = '';
      form.querySelectorAll('[name="' + name + '"]').forEach((c) => {
        if (c.type === 'radio' || c.type === 'checkbox') { if (c.checked) value = c.value; }
        else value = c.value;
      });
      panel.hidden = value !== want;
    };
    Array.from(root.querySelectorAll('.va-conditional')).forEach((panel) => {
      const name = panel.getAttribute('data-show-if-name');
      form.querySelectorAll('[name="' + name + '"]').forEach((c) => c.addEventListener('change', () => evalConditional(panel)));
      evalConditional(panel);
    });

    // Academic Program: options populated from the real degree catalog
    // (embedded as JSON by admissionsApplication.js), filtered by Degree
    // Level + Campus. No confirmed catalog for a combination -> fall back to
    // a free-text field instead of a fabricated program list.
    const catalogEl = document.getElementById('va-program-catalog');
    const catalog = catalogEl ? JSON.parse(catalogEl.textContent || '{}') : {};
    const degreeSelect = form.querySelector('[name="degree_level"]');
    const campusSelect = form.querySelector('[name="campus"]');
    const programSelect = form.querySelector('[name="academic_program"]');
    const programOther = form.querySelector('[name="academic_program_other"]');
    const programHint = programOther ? programOther.parentElement.querySelector('.va-hint') : null;
    const refreshProgramOptions = () => {
      if (!degreeSelect || !campusSelect || !programSelect) return;
      const list = catalog[degreeSelect.value + '|' + campusSelect.value];
      const haveBoth = !!(degreeSelect.value && campusSelect.value);
      programSelect.innerHTML = '';
      const ph = document.createElement('option');
      ph.value = '';
      if (list && list.length) {
        ph.textContent = 'Select a program…';
        programSelect.appendChild(ph);
        list.forEach((name) => {
          const o = document.createElement('option');
          o.value = name; o.textContent = name;
          programSelect.appendChild(o);
        });
        programSelect.disabled = false;
        programSelect.setAttribute('data-required', 'true');
        programOther.hidden = true;
        programOther.removeAttribute('data-required');
        if (programHint) programHint.hidden = true;
      } else {
        ph.textContent = haveBoth ? 'No confirmed catalog for this combination' : 'Select a degree level and campus first…';
        programSelect.appendChild(ph);
        programSelect.disabled = true;
        programSelect.removeAttribute('data-required');
        programOther.hidden = !haveBoth;
        if (haveBoth) programOther.setAttribute('data-required', 'true'); else programOther.removeAttribute('data-required');
        if (programHint) programHint.hidden = !haveBoth;
      }
    };
    if (degreeSelect && campusSelect) {
      degreeSelect.addEventListener('change', refreshProgramOptions);
      campusSelect.addEventListener('change', refreshProgramOptions);
      refreshProgramOptions();
    }

    // "Same as Emergency Contact" -> copies values into Guardian 1 and locks
    // those fields while checked.
    const sameAsBox = document.getElementById('same-as-emergency');
    if (sameAsBox) {
      sameAsBox.addEventListener('change', () => {
        ['salutation', 'first', 'middle', 'last', 'suffix', 'email', 'phone', 'street', 'line2', 'city', 'state', 'zip', 'country', 'relationship'].forEach((f) => {
          const src = form.querySelector('[name="ec_' + f + '"]');
          const dst = form.querySelector('[name="g1_' + f + '"]');
          if (!src || !dst) return;
          if (sameAsBox.checked) {
            dst.value = src.value;
            dst.setAttribute('readonly', 'true');
            if (dst.tagName === 'SELECT') dst.disabled = true;
          } else {
            dst.removeAttribute('readonly');
            dst.disabled = false;
          }
        });
      });
    }

    // College History repeater. Row markup comes from a JSON script tag
    // (admissionsApplication.js), not a <template> element — this runtime
    // empties out <template> content entirely (found while building this
    // page), so rows are built via a plain wrapper + innerHTML instead.
    const repeaterList = document.getElementById('college-repeater-list');
    const rowTemplateEl = document.getElementById('va-college-row-template');
    const rowHtml = rowTemplateEl ? JSON.parse(rowTemplateEl.textContent || '""') : '';
    const repeaterAddBtn = document.getElementById('college-repeater-add');
    const addCollegeRow = () => {
      if (!rowHtml || !repeaterList) return;
      const wrapper = document.createElement('div');
      wrapper.innerHTML = rowHtml;
      const item = wrapper.firstElementChild;
      item.querySelector('.va-repeater-remove').addEventListener('click', () => item.remove());
      repeaterList.appendChild(item);
    };
    if (repeaterAddBtn) {
      repeaterAddBtn.addEventListener('click', addCollegeRow);
      form.querySelectorAll('[name="attended_college"]').forEach((r) => r.addEventListener('change', () => {
        if (r.checked && r.value === 'Yes, I attended College' && repeaterList.children.length === 0) addCollegeRow();
      }));
    }

    const dateDisplay = document.getElementById('todays-date-display');
    if (dateDisplay) dateDisplay.value = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    showPage(0);
  }
  promoPopup() {
    // No-op on pages that don't render the popup markup (renderPage's
    // showPromoPopup flag), so this can live in the shared runtime script.
    const overlay = document.getElementById('promo-popup-overlay');
    if (!overlay) return;
    const SEEN_KEY = 'valorScholarshipPromoSeen';
    let seen = false;
    try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch (e) {}
    if (seen) { overlay.remove(); return; }
    const markSeen = () => { try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) {} };
    const close = () => {
      overlay.classList.remove('is-visible');
      markSeen();
      setTimeout(() => overlay.classList.remove('is-open'), 400);
    };

    const reveal = () => {
      overlay.classList.add('is-open');
      requestAnimationFrame(() => overlay.classList.add('is-visible'));
    };
    // Wait for the promo graphic to actually finish loading before showing
    // the popup (instead of a flat timer), so it never appears mid-download.
    // A minimum delay keeps it from flashing in instantly on a fast/cached
    // load, and a max-wait fallback keeps a slow/blocked image from leaving
    // the popup permanently hidden.
    const img = document.getElementById('promo-popup-img');
    const MIN_DELAY = 600;
    const MAX_WAIT = 4000;
    let revealed = false;
    const revealOnce = () => { if (revealed) return; revealed = true; reveal(); };
    const start = Date.now();
    if (img) {
      const whenReady = () => setTimeout(revealOnce, Math.max(0, MIN_DELAY - (Date.now() - start)));
      if (img.complete && img.naturalWidth > 0) whenReady();
      else {
        img.addEventListener('load', whenReady, { once: true });
        img.addEventListener('error', whenReady, { once: true });
      }
      setTimeout(revealOnce, MAX_WAIT);
    } else {
      setTimeout(revealOnce, MIN_DELAY);
    }

    const closeBtn = document.getElementById('promo-popup-close');
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); close(); });
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
    [document.getElementById('promo-popup-link'), document.getElementById('promo-popup-cta')].forEach((el) => {
      if (el) el.addEventListener('click', markSeen);
    });
  }
  fixAutoplayVideos() {
    document.querySelectorAll('video[autoplay]').forEach(v => {
      v.muted = true;
      v.defaultMuted = true;
      v.loop = true;
      v.addEventListener('ended', () => { v.currentTime = 0; v.play(); });
    });
  }
  viewAllToggles() {
    // Rows inside .acc-row animate open/closed via max-height (instead of
    // display toggling) and, when also inside an .acc-group, auto-close
    // any sibling row that's already open — a true accordion. Anything
    // not using .acc-row keeps the original instant display:none toggle,
    // untouched, so this doesn't affect the site's other accordions.
    const setRowOpen = (key, open) => {
      document.querySelectorAll('[data-more="' + key + '"]').forEach(el => {
        el.style.maxHeight = open ? el.scrollHeight + 'px' : '0px';
      });
      document.querySelectorAll('[data-view-all="' + key + '"]').forEach(b => {
        const label = b.querySelector('[data-swap-label]') || b;
        label.textContent = open ? b.getAttribute('data-less-label') : b.getAttribute('data-more-label');
        const row = b.closest('.acc-row');
        if (row) row.classList.toggle('is-open', open);
      });
    };
    document.querySelectorAll('[data-view-all]').forEach(btn => {
      const key = btn.getAttribute('data-view-all');
      const items = Array.from(document.querySelectorAll('[data-more="' + key + '"]'));
      if (!items.length) return;
      const row = btn.closest('.acc-row');
      const group = row ? row.closest('.acc-group') : null;
      btn.addEventListener('click', () => {
        if (row) {
          const opening = !row.classList.contains('is-open');
          if (opening && group) {
            group.querySelectorAll('.acc-row.is-open').forEach(openRow => {
              if (openRow === row) return;
              const openBtn = openRow.querySelector('[data-view-all]');
              if (openBtn) setRowOpen(openBtn.getAttribute('data-view-all'), false);
            });
          }
          setRowOpen(key, opening);
          return;
        }
        const show = items[0].style.display === 'none';
        items.forEach(el => { el.style.display = show ? '' : 'none'; });
        document.querySelectorAll('[data-view-all="' + key + '"]').forEach(b => {
          const label = b.querySelector('[data-swap-label]') || b;
          label.textContent = show ? b.getAttribute('data-less-label') : b.getAttribute('data-more-label');
        });
      });
    });
    // Keep open rows correctly sized if content reflows (e.g. font load,
    // viewport resize) while they're open.
    window.addEventListener('resize', () => {
      document.querySelectorAll('.acc-row.is-open [data-more]').forEach(el => {
        el.style.maxHeight = el.scrollHeight + 'px';
      });
    });
  }
  quoteRotators() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.quote-stage').forEach(stage => {
      const slides = Array.from(stage.querySelectorAll('.quote-slide'));
      const dotsWrap = stage.parentElement.querySelector('.quote-dots');
      const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('button')) : [];
      if (slides.length < 2) return;
      let i = 0;
      const show = (next) => {
        slides[i].classList.remove('is-active');
        if (dots[i]) dots[i].classList.remove('is-active');
        i = next;
        slides[i].classList.add('is-active');
        if (dots[i]) dots[i].classList.add('is-active');
      };
      dots.forEach((dot, idx) => dot.addEventListener('click', () => show(idx)));
      if (reduceMotion) return;
      setInterval(() => show((i + 1) % slides.length), 6000);
    });
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
    const navItems = Array.from(nav.querySelectorAll('.nav-item'));
    const closeSubmenus = (except) => {
      navItems.forEach(item => {
        if (item === except) return;
        item.classList.remove('open');
        const t = item.querySelector('.submenu-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    };
    const closeMobileNav = () => {
      nav.classList.remove('open');
      btn.textContent = '☰';
      btn.setAttribute('aria-expanded', 'false');
      closeSubmenus();
    };
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.textContent = open ? '✕' : '☰';
      btn.setAttribute('aria-expanded', String(open));
      if (!open) closeSubmenus();
    });
    navItems.forEach(item => {
      const t = item.querySelector('.submenu-toggle');
      if (!t) return;
      t.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const willOpen = !item.classList.contains('open');
        closeSubmenus(item);
        item.classList.toggle('open', willOpen);
        t.setAttribute('aria-expanded', String(willOpen));
      });
    });
    nav.querySelectorAll('.dropdown a, .nav-item-row a').forEach(a => a.addEventListener('click', () => closeMobileNav()));
    nav.querySelectorAll('.dropdown').forEach(d => d.addEventListener('click', (e) => {
      if (e.target === d) closeSubmenus();
    }));
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) closeSubmenus();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSubmenus();
    });
  }
  reveal() {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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

// Shown once per browser session (sessionStorage) on the homepage, every
// Admissions page, and the Scholarships page — see promoPopup() in
// RUNTIME_SCRIPT for the open/close/dismiss behavior. Its markup only
// renders on pages that opt in via renderPage({ showPromoPopup: true }),
// but promoPopup() itself is a no-op (guarded by `if (!overlay) return`)
// on every other page, so it's safe to leave in the shared runtime script.
const PROMO_POPUP_HTML = `  <div id="promo-popup-overlay" class="promo-popup-overlay" role="dialog" aria-modal="true" aria-label="Scholarship opportunities at Valor Christian College">
    <div class="promo-popup">
      <button type="button" id="promo-popup-close" class="promo-popup-close" aria-label="Close">✕</button>
      <a href="tuition-aid-scholarships.html" id="promo-popup-link" class="promo-popup-link">
        <img id="promo-popup-img" src="${IMG.scholarshipPromoPopup}" alt="Need a scholarship? We've got you — World Changer, City Harvest Network, and Presidential Scholarships available at Valor Christian College" width="1200" height="510" loading="eager" fetchpriority="high" decoding="async">
      </a>
      <div class="promo-popup-body">
        <p class="promo-popup-text">Three scholarship opportunities are open right now. See which ones you qualify for and start your application in minutes.</p>
        <a href="tuition-aid-scholarships.html" id="promo-popup-cta" class="promo-popup-cta">Explore Scholarships <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
`;

function renderPage({ title, description, socialImage, bodyHtml, showPromoPopup }) {
  return `<!DOCTYPE html>
<html lang="en"><head>
${RESOURCE_MAP_SCRIPT}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${socialImage || IMG.social}">
<meta name="theme-color" content="#100E0D">
<link rel="icon" type="image/png" href="assets/images/favicon-32.png">
<link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png">
<link rel="preconnect" href="https://ik.imagekit.io" crossorigin>
<link rel="preload" as="image" href="${IMG.heroPoster}" fetchpriority="high">
${showPromoPopup ? `<link rel="preload" as="image" href="${IMG.scholarshipPromoPopup}">` : ''}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" referrerpolicy="no-referrer">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/fcb01a3d-49b1-4f6f-a634-7c16cd1ea3a9.woff2" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/4f4c1e77-709d-474f-bf96-392753485ee5.woff2" crossorigin="anonymous">
<script defer src="assets/js/de7b7d31-826e-4e82-9b83-eeefcf97e7dc.js"></script>
</head>
<body>
<x-dc>
<helmet data-dc-atomics="">
${FONT_FACE_CSS}
${BASE_STYLE}
</helmet>

<div id="page-top" style="background:#FFFFFF;overflow-x:hidden">

${renderHeader()}

<a href="tuition-aid-scholarships.html" class="floating-apply">Apply</a>
${showPromoPopup ? PROMO_POPUP_HTML : ''}
${bodyHtml}

${renderFooter()}
</div>

</x-dc>
${RUNTIME_SCRIPT}

</body></html>`;
}

module.exports = { renderPage, NAV, IMG, LOGO, HERO_VIDEO, escapeHtml, ROOT };
