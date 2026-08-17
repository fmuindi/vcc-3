const { IMG } = require('./build-site');

// TODO: no real application URL has been provided anywhere in this project
// (the Student Portal page is likewise still waiting on its Populi deep
// link). Every "Apply" button below points to Speak with a Counselor as a
// safe, functioning interim destination — swap in the real Populi/
// application link(s) as soon as they're confirmed. Per the brief: if
// every path shares one application, all buttons can share one URL.
const APPLY_LINK = 'admissions-speak-with-a-counselor.html';
const REQUEST_INFO_LINK = 'admissions.html';
const TALK_TO_ADMISSIONS_LINK = 'admissions-speak-with-a-counselor.html';

const PATHWAYS = [
  { label: 'On Campus', img: IMG.onCampus, copy: 'Experience Valor in person through academics, chapel, ministry, community, and campus life.', cta: 'Apply On Campus' },
  { label: 'Online', img: IMG.online, copy: 'Pursue your degree with the flexibility of online learning while staying connected to the Valor community.', cta: 'Apply Online' },
  { label: 'Cohort', img: IMG.cohort, copy: "Pursue your education through one of Valor's cohort opportunities and learn alongside a community of students.", cta: 'Apply to a Cohort' },
];

const pathwayCard = (p) => `      <div data-reveal="" style="position:relative;height:360px;border-radius:20px;overflow:hidden;color:#fff">
        <img src="${p.img}" alt="${p.label} at Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#FAF5EE;margin-bottom:10px">${p.label}</div>
          <p style="margin:0 0 18px;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">${p.copy}</p>
          <a href="${APPLY_LINK}" style="display:inline-block;background:#E01B2E;color:#fff;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:13px 20px;border-radius:999px" style-hover="background:#F02338;color:#fff">${p.cta}</a>
        </div>
      </div>`;

const ADMISSIONS_APPLY_NOW_BODY = `  <section id="apply-hero" style="position:relative;min-height:70vh;display:flex;align-items:center;overflow:hidden;background:#100E0D;padding-top:70px">
    <div style="position:absolute;inset:0;background:radial-gradient(70% 90% at 30% 30%,rgba(224,27,46,.3),rgba(16,14,13,.97))"></div>
    <div style="position:relative;width:100%;max-width:900px;margin:0 auto;padding:0 32px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Apply Now</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(38px,6.5vw,84px);line-height:1;letter-spacing:-.03em;text-wrap:balance">Your Journey Starts Here.</h1>
      <p data-reveal="" style="margin:0 auto 36px;max-width:52ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Ready to take the next step? Begin your application to Valor Christian College and start preparing for the purpose God has placed on your life.</p>
      <a data-reveal="" href="${APPLY_LINK}" style="display:inline-block;background:#E01B2E;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 40px;border-radius:999px;box-shadow:0 10px 30px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Start Your Application</a>
    </div>
  </section>

  <section id="choose-your-path" style="max-width:1320px;margin:0 auto;padding:90px 32px 40px">
    <div style="text-align:center;max-width:640px;margin:0 auto 40px">
      <h2 data-reveal="" style="margin:0 0 14px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Choose Your Path.</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Choose the learning experience that is right for you.</p>
    </div>
    <div class="pathways-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${PATHWAYS.map(pathwayCard).join('\n')}
    </div>
  </section>

  <section id="not-sure" style="max-width:800px;margin:0 auto;padding:60px 32px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(24px,3.2vw,36px);line-height:1.1;letter-spacing:-.03em;color:#100E0D">Not Sure Where to Start?</h2>
    <p data-reveal="" style="margin:0 0 30px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Our Admissions Team can help you determine which option is right for you and answer any questions before you apply.</p>
    <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="${TALK_TO_ADMISSIONS_LINK}" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Talk to Admissions</a>
      <a data-reveal="" href="${REQUEST_INFO_LINK}" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Request Info</a>
    </div>
  </section>

  <section id="world-changer-cta" style="position:relative;margin-top:20px;background:#E01B2E;color:#fff;padding:100px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,5vw,64px);line-height:1;letter-spacing:-.03em">Become a World Changer.</h2>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.55;color:rgba(255,255,255,.85)">Take the first step toward your future at Valor Christian College.</p>
      <a data-reveal="" href="${APPLY_LINK}" style="display:inline-block;background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 40px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Apply Now</a>
    </div>
  </section>`;

module.exports = { ADMISSIONS_APPLY_NOW_BODY };
