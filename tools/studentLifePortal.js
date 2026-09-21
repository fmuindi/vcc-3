const { IMG } = require('./build-site');

// Source: valorcollege.edu (fetched 2026-09-21) — both are real, live
// systems found on the current site; Populi under the main student portal
// link, Campus Ivy under Financial Aid. Included both rather than Populi
// alone since Campus Ivy is a genuinely separate system students need
// (financial aid), not a duplicate of Populi.
const PORTALS = [
  {
    key: 'populi',
    icon: 'fa-graduation-cap',
    name: 'Populi',
    copy: 'Courses, grades, your student record, and academic resources.',
    href: 'https://vcc.populiweb.com/',
    cta: 'Sign In to Populi',
  },
  {
    key: 'campus-ivy',
    icon: 'fa-hand-holding-dollar',
    name: 'Campus Ivy',
    copy: 'Your virtual Financial Aid office — manage aid, loans, and payments.',
    href: 'https://solutions.campusivy.com/apps/core/account/login',
    cta: 'Sign In to Campus Ivy',
  },
];

const portalCard = (p) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:22px;padding:40px 34px;display:flex;flex-direction:column;height:100%">
        <div style="flex:none;width:56px;height:56px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:22px"><i class="fa-solid ${p.icon}" style="color:#E01B2E;font-size:22px"></i></div>
        <h2 style="margin:0 0 12px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#100E0D">${p.name}</h2>
        <p style="flex:1;margin:0 0 26px;font-size:15px;line-height:1.6;color:rgba(16,14,13,.62)">${p.copy}</p>
        <a href="${p.href}" target="_blank" rel="noopener" style="align-self:flex-start;display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:13.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 28px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">${p.cta} <i class="fa-solid fa-arrow-right"></i></a>
      </div>`;

const STUDENT_LIFE_PORTAL_BODY = `  <section id="portal-hero" style="position:relative;min-height:56vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[8]}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.45">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.55) 45%,rgba(16,14,13,.97) 100%)"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:60px 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Student Portal</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,64px);line-height:1.05;letter-spacing:-.03em;text-wrap:balance">Everything You Need, Two Clicks Away.</h1>
      <p data-reveal="" style="margin:0 auto;max-width:56ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">Sign in to manage your classes, grades, billing, and financial aid.</p>
    </div>
  </section>

  <section id="portals" style="max-width:900px;margin:0 auto;padding:80px 32px 120px">
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px">
${PORTALS.map(portalCard).join('\n')}
    </div>
  </section>`;

module.exports = { STUDENT_LIFE_PORTAL_BODY };
