const { IMG } = require('./build-site');

// Degree catalog per client-supplied content (no invented names/facts).
const BACHELOR_DEGREES = [
  {
    name: 'Bachelor of Arts in Biblical Studies',
    formats: ['Campus', 'Online'],
    copy: 'Study and apply biblical principles for a lifetime of ministry and leadership.',
  },
  {
    name: 'Bachelor of Arts in Christian Ministry',
    formats: ['Campus', 'Online'],
    copy: '120 credit hours built around a minor you choose, so your degree fits the calling God has placed on your life.',
    note: 'A limited number of transfer credits are accepted from accredited institutions.',
    minorsKey: 'christian-ministry-minors',
    minors: [
      'Biblical Counseling', 'Biblical Languages', 'Biblical Studies', 'Communications and Media',
      "Children's Ministry (online only)", 'Evangelism', 'Missions', 'Music Direction', 'Music Ministry',
      'Nonprofit Leadership', 'Online Church Ministry (online only)', 'Organizational Leadership',
      'Pastoral Leadership', 'Youth Ministry (online only)',
    ],
  },
  {
    name: 'Bachelor of Arts in Pastoral Leadership',
    formats: ['Campus', 'Online'],
    copy: 'Develop biblical, ethical, and administrative leadership skills to lead in ministry or organizations.',
  },
  {
    name: 'Bachelor of Arts in Worship Ministry',
    formats: ['Campus'],
    copy: 'Apply biblical principles to lead others in worship.',
  },
];

const ASSOCIATE_DEGREES = [
  'Advanced Leadership', 'Biblical Studies', 'Christian Ministries', 'Church Planting',
  'Communications and Media', 'Evangelism', 'Music Ministry', 'Organizational Leadership',
  'Organizational Management', 'Organizational Communication', 'Pastoral Leadership', 'Missions',
  'Youth Ministries',
].map((name) => ({ name, credits: name === 'Music Ministry' ? 64 : 63 }));

const CERTIFICATE_PROGRAMS = [
  'Biblical Studies', 'Church Planting', 'Evangelism', 'Music Ministry', 'Pastoral Studies',
  'General Studies', 'Organizational Communication',
];

const requestInfoLink = (program) => `admissions.html?program=${encodeURIComponent(program)}`;
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const badge = (f) => `<span style="font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#B3121F;background:rgba(224,27,46,.08);padding:5px 10px;border-radius:999px">${f}</span>`;

const bachelorCard = (p) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:32px 28px">
        <div style="display:flex;gap:8px;margin-bottom:16px">${p.formats.map(badge).join('')}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:19px;line-height:1.25;color:#100E0D;margin-bottom:12px">${p.name}</div>
        <p style="margin:0 0 18px;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.65)">${p.copy}</p>
        ${p.minors ? `<button type="button" data-view-all="${p.minorsKey}" data-more-label="View Minor Options ▾" data-less-label="Hide Minor Options ▴" style="display:block;margin-bottom:16px;background:none;border:none;padding:0;cursor:pointer;font-size:12.5px;font-weight:700;letter-spacing:.04em;color:rgba(16,14,13,.55)" style-hover="color:#E01B2E">View Minor Options ▾</button>
        <div data-more="${p.minorsKey}" style="display:none;margin:-6px 0 18px;padding-top:14px;border-top:1px solid rgba(16,14,13,.08)">
          <div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(16,14,13,.45);margin-bottom:10px">Minors Offered</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${p.minors.map((m) => `<span style="font-size:12px;padding:6px 12px;background:rgba(16,14,13,.04);border-radius:999px;color:rgba(16,14,13,.68)">${m}</span>`).join('')}</div>
        </div>` : ''}
        ${p.note ? `<p style="margin:0 0 16px;font-size:12px;line-height:1.5;color:rgba(16,14,13,.45)">${p.note}</p>` : ''}
        <a href="${requestInfoLink(p.name)}" style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:3px" style-hover="color:#E01B2E">Request Info →</a>
      </div>`;

const compactCard = (name, meta, more) => `        <div data-reveal="" ${more ? `data-more="${more}" style="display:none;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:14px;padding:20px 18px"` : `style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:14px;padding:20px 18px"`}>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:15px;line-height:1.3;color:#100E0D;margin-bottom:6px">${name}</div>
          <div style="font-size:12px;color:rgba(16,14,13,.55);margin-bottom:14px">${meta}</div>
          <a href="${requestInfoLink(name)}" style="font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border-bottom:2px solid #E01B2E;padding-bottom:2px" style-hover="color:#E01B2E">Request Info →</a>
        </div>`;

const ASSOCIATE_VISIBLE = 8;
const associateCards = ASSOCIATE_DEGREES.map((p, i) => compactCard(p.name, `Associate of Applied Science · ${p.credits} credit hours`, i >= ASSOCIATE_VISIBLE ? 'associate' : undefined)).join('\n');
const certificateCards = CERTIFICATE_PROGRAMS.map((name) => compactCard(name, 'One-Year Certificate')).join('\n');

const LEARNING_PATHS = [
  { label: 'On Campus', img: IMG.onCampus, copy: 'Experience college life through classroom learning, chapel, community, and hands-on ministry at Valor.' },
  { label: 'Online', img: IMG.online, copy: 'Pursue your degree with the flexibility to learn from wherever God has placed you while remaining connected to the Valor experience.' },
  { label: 'Cohort', img: IMG.cohort, copy: 'Experience Valor alongside a local community while pursuing your education through the cohort learning model.' },
];

const learningCard = (l) => `      <a href="${requestInfoLink(l.label)}" data-reveal="" style="position:relative;height:360px;border-radius:20px;overflow:hidden;display:block;color:#fff" style-hover="color:#fff">
        <img src="${l.img}" alt="${l.label} at Valor Christian College" loading="lazy" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(16,14,13,.94),rgba(16,14,13,.1) 55%)"></div>
        <div style="position:absolute;left:24px;right:24px;bottom:24px">
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:24px;color:#FAF5EE;margin-bottom:10px">${l.label}</div>
          <p style="margin:0 0 16px;font-size:14px;line-height:1.55;color:rgba(250,245,238,.8)">${l.copy}</p>
          <span style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#FF8A93">Request Info →</span>
        </div>
      </a>`;

const ACADEMICS_DEGREE_PROGRAMS_BODY = `  <section id="degree-hero" style="position:relative;min-height:68vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:70px">
    <img src="${IMG.degreeProgramsHero}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Academics</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,68px);line-height:1.05;letter-spacing:-.03em;max-width:18ch;text-wrap:balance">Find the Program That Fits Your Calling.</h1>
      <p data-reveal="" style="margin:0 0 36px;max-width:60ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Your education should prepare you for more than a career. Explore degree programs designed to strengthen your faith, develop your gifts, and equip you to pursue the purpose God has placed on your life.</p>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="#degree-programs" style="background:#FAF5EE;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Explore Programs</a>
        <a href="admissions.html" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Request Info</a>
      </div>
    </div>
  </section>

  <section id="degree-programs" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="text-align:center;max-width:640px;margin:0 auto 40px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Find Your Program</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">What Will You Study?</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Explore Valor's degree programs and find the path that aligns with your interests, goals, and calling.</p>
    </div>
    <div data-reveal="" style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:80px">
      <a href="#bachelors-degrees" style="font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border:1.5px solid rgba(16,14,13,.18);padding:11px 22px;border-radius:999px" style-hover="background:rgba(16,14,13,.05)">Bachelor's Degrees</a>
      <a href="#associate-degrees" style="font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border:1.5px solid rgba(16,14,13,.18);padding:11px 22px;border-radius:999px" style-hover="background:rgba(16,14,13,.05)">Associate Degrees</a>
      <a href="#certificate-programs" style="font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;border:1.5px solid rgba(16,14,13,.18);padding:11px 22px;border-radius:999px" style-hover="background:rgba(16,14,13,.05)">One-Year Certificates</a>
    </div>

    <div id="bachelors-degrees" style="margin-bottom:90px">
      <h3 data-reveal="" style="margin:0 0 28px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;letter-spacing:-.02em;color:#100E0D">Bachelor's Degrees</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(420px,1fr));gap:18px">
${BACHELOR_DEGREES.map(bachelorCard).join('\n')}
      </div>
    </div>

    <div id="associate-degrees" style="margin-bottom:90px">
      <h3 data-reveal="" style="margin:0 0 10px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;letter-spacing:-.02em;color:#100E0D">Associate Degrees</h3>
      <p data-reveal="" style="margin:0 0 28px;font-size:14px;line-height:1.6;color:rgba(16,14,13,.55)">Associate of Applied Science degrees. A limited number of transfer credits are accepted from accredited institutions.</p>
      <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">
${associateCards}
      </div>
      <div style="text-align:center;margin-top:28px"><button type="button" data-view-all="associate" data-more-label="View All Associate Degrees" data-less-label="Show Fewer" style="border:1.5px solid rgba(224,27,46,.4);background:none;color:#B3121F;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:14px 26px;border-radius:999px;cursor:pointer" style-hover="background:rgba(224,27,46,.08)">View All Associate Degrees</button></div>
    </div>

    <div id="certificate-programs">
      <h3 data-reveal="" style="margin:0 0 10px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px;letter-spacing:-.02em;color:#100E0D">One-Year Certificate Programs</h3>
      <p data-reveal="" style="margin:0 0 28px;font-size:14px;line-height:1.6;color:rgba(16,14,13,.55)">No transfer credits are accepted for certificate programs.</p>
      <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">
${certificateCards}
      </div>
    </div>

    <p data-reveal="" style="max-width:800px;margin:70px auto 0;text-align:center;font-size:14px;line-height:1.65;color:rgba(16,14,13,.5)">All programs include general education plus Bible/theology coursework, with the associate and certificate tracks also covering Christian leadership, ethics, and spiritual formation.</p>
  </section>

  <section id="how-do-you-want-to-learn" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="text-align:center;max-width:640px;margin:0 auto 48px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Built for Your Next Step</div>
      <h2 data-reveal="" style="margin:0 0 18px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Your Education. Your Path.</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">Valor gives students multiple ways to pursue their education while remaining connected to the Valor community and mission.</p>
    </div>
    <div class="pathways-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px">
${LEARNING_PATHS.map(learningCard).join('\n')}
    </div>
  </section>

  <section id="degree-cta" style="position:relative;margin-top:60px;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:900px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:16px">Find Your Next Step</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4.5vw,58px);line-height:1.05;letter-spacing:-.03em">Not Sure Which Program Is Right for You?</h2>
      <p data-reveal="" style="margin:22px auto 34px;max-width:52ch;font-size:17px;line-height:1.55;color:rgba(255,255,255,.85)">Our Admissions team is ready to help you explore your options and find the program that best fits your goals, interests, and calling.</p>
      <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="admissions.html" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 38px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Request Info</a>
        <a data-reveal="" href="admissions-speak-with-a-counselor.html" style="border:1.5px solid rgba(255,255,255,.6);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 32px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.16);color:#fff">Speak with Admissions</a>
      </div>
    </div>
  </section>`;

module.exports = { ACADEMICS_DEGREE_PROGRAMS_BODY };
