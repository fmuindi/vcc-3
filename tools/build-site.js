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
// across all 38 pages). WEB.png (the social-share/OG image) was not part of
// that export — it's the one filename with no entry here — so IK() falls
// back to the original ImageKit URL for anything not yet migrated.
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
  // Client-supplied Unsplash image, used as-is (not an ImageKit asset).
  online: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  cohort: IK('DHCOWYTE.jpg'),
  whyValorMain: IK('VCC.Graduation.2026-383.jpg'),
  whyValor2: IK('A7309778_1.jpg'),
  whyValor3: IK('A7303011.jpg'),
  testimonial: IK('DSC03901.jpg'),
  // Client-supplied Wix asset: Dr. Rod Parsley portrait, used on the Our Legacy page.
  founderPortrait: 'https://static.wixstatic.com/media/669db9_923e883eb33649e69d98998d7befea27~mv2.png',
  // Client-supplied Wix asset: Dr. Scott Camp portrait, used on the Meet Our Team page.
  presidentPortrait: 'https://static.wixstatic.com/media/669db9_dcb1a2caeb8d4dc494e4e1fca5702d34~mv2.png',
  // Client-supplied Wix assets for the Why Valor page (8 provided; 5 used across the page).
  whyValorPageHero: 'https://static.wixstatic.com/media/669db9_e6806bfcc9704675ae9fe4c7e57cdde1~mv2.png',
  whyValorPageCommunity: 'https://static.wixstatic.com/media/669db9_06a3df8407fb41fc962bf99323e50a05~mv2.png',
  whyValorPageMinistry: 'https://static.wixstatic.com/media/669db9_cbec4c08493c4490aa235125c2031fbf~mv2.jpg',
  whyValorPageAcademics: 'https://static.wixstatic.com/media/669db9_69a3fbd7575e4f1783e7333534188801~mv2.jpg',
  whyValorPageExperience: 'https://static.wixstatic.com/media/669db9_b5b08a58b52b48548bb4b5447a7cd0c7~mv2.jpg',
  // Client-supplied Wix asset for the Degree Programs page hero.
  degreeProgramsHero: 'https://static.wixstatic.com/media/669db9_b8f4446b613947f7853070891c988e8e~mv2.jpeg',
  // Client-supplied Wix asset for the Credit for Prior Learning page hero
  // (3 more were offered as alternates: dd7c87a3, 681eb7de, 4da42c0a).
  creditForPriorLearningHero: 'https://static.wixstatic.com/media/669db9_c74e2854fa5c4c66a53bb3390e495f4a~mv2.jpg',
  prog1: IK('DSC00837.jpg'),
  prog2: IK('A7301807.jpg'),
  prog3: IK('DSC09572.jpg'),
  prog4: IK('DSC05427.jpg'),
  prog5: IK('DSC08674.jpg'),
  social: IK('WEB.png'),
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
      { label: 'Complete Your Enrollment', href: 'admissions-complete-your-enrollment.html' },
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
      { label: 'Speak with the Finance Office', href: 'tuition-aid-speak-with-finance.html', children: [
        { label: 'Speak with a Financial Aid Counselor', href: 'tuition-aid-speak-with-financial-aid-counselor.html' },
      ] },
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
      { label: 'Work-Study Program', href: 'student-life-work-study.html' },
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
    { label: 'Complete Your Enrollment', href: 'admissions-complete-your-enrollment.html' },
  ] },
  { label: 'Tuition & Aid', items: NAV[3].children },
  { label: 'Student Life', items: [
    { label: 'Student Life Overview', href: 'student-life.html' },
    { label: 'Get Involved', href: 'student-life-get-involved.html' },
    { label: 'Student Handbook', href: 'student-life-handbook.html' },
    { label: 'Student Portal', href: 'student-life-portal.html' },
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
  .quote-stage{position:relative;min-height:200px}
  .quote-slide{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity 1s ease}
  .quote-slide.is-active{position:relative;opacity:1;visibility:visible}
  .quote-dots{display:flex;gap:8px;justify-content:center;margin-top:36px}
  .quote-dots button{width:8px;height:8px;border-radius:50%;border:none;background:rgba(250,245,238,.3);padding:0;cursor:pointer;transition:background .2s ease,transform .2s ease}
  .contact-form input,.contact-form textarea{outline:none;transition:border-color .2s ease}
  .contact-form input:focus,.contact-form textarea:focus{border-bottom-color:#fff}
  .contact-form input::placeholder,.contact-form textarea::placeholder{color:rgba(255,255,255,.4)}
  .quote-dots button.is-active{background:#E01B2E;transform:scale(1.3)}
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
    document.querySelectorAll('[data-view-all]').forEach(btn => {
      const key = btn.getAttribute('data-view-all');
      const items = Array.from(document.querySelectorAll('[data-more="' + key + '"]'));
      if (!items.length) return;
      btn.addEventListener('click', () => {
        const show = items[0].style.display === 'none';
        items.forEach(el => { el.style.display = show ? '' : 'none'; });
        document.querySelectorAll('[data-view-all="' + key + '"]').forEach(b => {
          const label = b.querySelector('[data-swap-label]') || b;
          label.textContent = show ? b.getAttribute('data-less-label') : b.getAttribute('data-more-label');
        });
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

function renderPage({ title, description, socialImage, bodyHtml }) {
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

<div id="page-top" style="background:#FAF5EE;overflow-x:hidden">

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
