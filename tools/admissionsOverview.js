const { IMG } = require('./build-site');

const REQUEST_INFO_LINK = 'admissions-speak-with-a-counselor.html';

const PATHWAYS = [
  { label: 'On Campus', img: IMG.onCampus, copy: 'Experience college life in a Spirit-filled community with classes, chapel, ministry opportunities, and relationships that go beyond the classroom.' },
  { label: 'Online', img: IMG.online, copy: 'Earn your degree with the flexibility of online learning while receiving a Christ-centered education wherever you are.' },
  { label: 'Cohort', img: IMG.cohort, copy: "Grow and learn alongside a community of students through one of Valor's cohort opportunities." },
];

const pathwayCard = (p) => `      <div data-reveal="" style="position:relative;height:360px;border-radius:20px;overflow:hidden;color:#fff">
        <img src="${p.img}" alt="${p.label} at Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#FAF5EE;margin-bottom:10px">${p.label}</div>
          <p style="margin:0 0 18px;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">${p.copy}</p>
          <a href="${REQUEST_INFO_LINK}" style="display:inline-block;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#FF8A93" style-hover="color:#fff">Request Info →</a>
        </div>
      </div>`;

const STEPS = [
  { num: '01', label: 'Explore', copy: 'Discover our degree programs and find the path that aligns with your calling and goals.' },
  { num: '02', label: 'Connect', copy: 'Have questions? Our Admissions Team is ready to help you understand your options and your next steps.' },
  { num: '03', label: 'Apply', copy: 'Ready to become a Valor student? Start your application and take the first step toward your future.' },
];

const stepCard = (s) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:44px;line-height:1;color:rgba(224,27,46,.28);margin-bottom:16px">${s.num}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D;margin-bottom:10px">${s.label}</div>
        <p style="flex:1;margin:0;font-size:15px;line-height:1.6;color:rgba(16,14,13,.65)">${s.copy}</p>
      </div>`;

const ADMISSIONS_OVERVIEW_BODY = `  <section id="admissions-hero" style="position:relative;min-height:82vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:70px">
    <img src="${IMG.studentLifeGallery[3]}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Admissions</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(38px,6.5vw,88px);line-height:1;letter-spacing:-.03em;max-width:16ch;text-wrap:balance">Your Future Starts at Valor.</h1>
      <p data-reveal="" style="margin:0 0 36px;max-width:60ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Discover who God has called you to be and prepare to make an impact. At Valor Christian College, you will grow academically, spiritually, and practically in a community committed to helping you become a world changer.</p>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="admissions-apply-now.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply Now</a>
        <a href="${REQUEST_INFO_LINK}" style="background:#FAF5EE;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Request Info</a>
      </div>
    </div>
  </section>

  <section id="find-your-place" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="text-align:center;max-width:680px;margin:0 auto 48px">
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Find Your Place at Valor.</h2>
      <p data-reveal="" style="margin:0 0 16px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Whether you are beginning your college journey, transferring from another school, or taking the next step in your calling, there is a place for you at Valor.</p>
      <p data-reveal="" style="margin:0;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(16,14,13,.45)">Choose the learning experience that works for you.</p>
    </div>
    <div class="pathways-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${PATHWAYS.map(pathwayCard).join('\n')}
    </div>
  </section>

  <section id="next-step" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="text-align:center;max-width:680px;margin:0 auto 56px">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Ready to Take the Next Step?</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Starting your journey at Valor is simple.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-bottom:48px">
${STEPS.map(stepCard).join('\n')}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
      <a data-reveal="" href="admissions-apply-now.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply Now</a>
      <a data-reveal="" href="${REQUEST_INFO_LINK}" style="border:1.5px solid rgba(16,14,13,.25);color:#100E0D;font-size:14px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(16,14,13,.06)">Talk to Admissions</a>
    </div>
  </section>

  <section id="world-changer-cta" style="position:relative;margin-top:60px;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:900px;margin:0 auto;text-align:center">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(34px,5.5vw,74px);line-height:.98;letter-spacing:-.03em">Become a World Changer.</h2>
      <p data-reveal="" style="margin:22px auto 34px;max-width:52ch;font-size:18px;line-height:1.55;color:rgba(255,255,255,.85)">Your education is about more than earning a degree. It is about discovering your purpose, developing your gifts, and being equipped to make a difference wherever God calls you.</p>
      <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions-apply-now.html" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 38px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Apply to Valor</a>
        <a data-reveal="" href="${REQUEST_INFO_LINK}" style="border:1.5px solid rgba(255,255,255,.6);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 32px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.16);color:#fff">Request Info</a>
      </div>
    </div>
  </section>`;

module.exports = { ADMISSIONS_OVERVIEW_BODY };
