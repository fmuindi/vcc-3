const { IMG } = require('./build-site');

// Roster pulled from the client-supplied reference doc / current live site
// (valorcollege.edu/our-team). No invented names, titles, or emails.
const LEADERSHIP = [
  { name: 'Scott Camp, D.Div., D.Min.', title: ['President', 'Professor of Preaching, Missions &amp; Evangelism'], email: 'camps@valorcollege.edu', cta: true },
  { name: 'Laquetta Cortner, Ph.D.', title: ['Provost'], email: 'cortnerl@valorcollege.edu' },
  { name: 'David Amos', title: ['Dean of Students'], email: 'deanofstudents@valorcollege.edu' },
  { name: 'Jay Baldwin', title: ['Administration &amp; Operations'], email: 'baldwinj@valorcollege.edu' },
];

const FACULTY = [
  { name: 'David Cook, Ed.D.', title: ['Assistant Professor'], email: 'cookd@valorcollege.edu' },
  { name: 'Trent Lambert, D.Min.', title: ['Assistant Professor'], email: 'lambertt@valorcollege.edu' },
  { name: 'Sean Sams, M.Div.', title: ['Professor, Bible &amp; Theology Chair'], email: 'samss@valorcollege.edu' },
  { name: 'Philip Tabler, M.B.A., M.A.M., M.A., M.T.-B.C.', title: ['Professor, Music Department Chair'], email: 'tablerp@valorcollege.edu' },
  { name: 'Mark Youngkin, M.A.', title: ['Professor, Church Ministries Chair', 'Valor Learning Center Director'], email: 'youngkinm@valorcollege.edu' },
  { name: 'Richard D. Burkhalter, Ed.D.', title: ['Assistant Professor'], email: 'burkhalterr@valorcollege.edu' },
];

const ADJUNCT = [
  { name: 'Robert Brown, M.Th.', title: [], email: 'brownr@valorcollege.edu' },
  { name: 'Jay Wright, M.S., MBA', title: [], email: 'wrightj@valorcollege.edu' },
  { name: 'Diane Rhynes, MFA', title: [], email: 'rhynesd@valorcollege.edu' },
];

const STAFF = [
  { name: 'Aislynn Rambayon', title: ['Manager of Student Life'], email: 'rambayona@valorcollege.edu' },
  { name: 'Tamar Sams', title: ['Registrar'], email: 'registrar@valorcollege.edu' },
  { name: 'Phil Supple', title: ['Financial Aid / IT Support'], email: 'supplep@valorcollege.edu' },
  { name: 'David Amos', title: ['Dean of Students'], email: 'deanofstudents@valorcollege.edu' },
  { name: 'George Lee', title: ['Financial Aid Advisor'], email: 'leea@valorcollege.edu' },
  { name: 'Norm Stoppenbrink', title: ['Financial Aid Consultant'], email: 'stoppenbrinkn@valorcollege.edu' },
];

const card = (p) => `        <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 22px">
          <div style="width:44px;height:44px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid fa-shield-halved" style="color:#E01B2E;font-size:17px"></i></div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;line-height:1.3;color:#100E0D;margin-bottom:6px">${p.name}</div>
          ${p.title.map((t) => `<div style="font-size:13px;line-height:1.5;color:rgba(16,14,13,.6)">${t}</div>`).join('\n          ')}
          <a href="mailto:${p.email}" style="display:inline-flex;align-items:flex-start;gap:6px;margin-top:12px;font-size:12.5px;color:#B3121F" style-hover="color:#E01B2E"><i class="fa-solid fa-envelope" style="font-size:11px;flex:none;margin-top:2px"></i><span>${p.email.replace('@', '@<wbr>')}</span></a>
          ${p.cta ? `<a href="#president" style="display:block;margin-top:16px;text-align:center;background:#100E0D;color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:12px;border-radius:8px" style-hover="background:#E01B2E;color:#fff">Meet Our President</a>` : ''}
        </div>`;

const teamSection = ({ id, label, blurb, people, gridClass, cols, viewAllLabel }) => `  <section id="${id}" class="about-grid" style="max-width:1320px;margin:0 auto;padding:56px 32px;display:grid;grid-template-columns:230px 1fr;gap:40px;align-items:start">
    <div data-reveal="">
      <div style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:12px">${label}</div>
      <div style="width:36px;height:2px;background:#E01B2E;margin-bottom:14px"></div>
      <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.6)">${blurb}</p>
    </div>
    <div>
      <div class="${gridClass}" style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:16px">
${people.map(card).join('\n')}
      </div>
      ${viewAllLabel ? `<div style="text-align:center;margin-top:28px"><a data-reveal="" href="about-contact.html" style="display:inline-block;border:1.5px solid rgba(224,27,46,.4);color:#B3121F;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:14px 26px;border-radius:999px" style-hover="background:rgba(224,27,46,.08)">${viewAllLabel}</a></div>` : ''}
    </div>
  </section>`;

const ABOUT_MEET_TEAM_BODY = `  <section id="team-hero" style="position:relative;min-height:64vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:70px">
    <img src="${IMG.studentLifeGallery[6]}" alt="Valor faculty with students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.55">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 70px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">About &nbsp;·&nbsp; Meet Our Team</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(34px,5.5vw,68px);line-height:1.03;letter-spacing:-.03em;max-width:20ch;text-wrap:balance">More Than Professors. <span style="color:#E01B2E">Mentors for Your Calling.</span></h1>
      <p data-reveal="" style="margin:0;max-width:60ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.85)">At Valor, education is personal. Our faculty and staff are here to teach, encourage, and invest in you as you grow academically, spiritually, and into who God has called you to become.</p>
    </div>
  </section>

${teamSection({
    id: 'leadership',
    label: 'Leadership',
    blurb: 'Leading Valor forward with vision, integrity, and a heart for students.',
    people: LEADERSHIP,
    gridClass: 'stats-grid',
    cols: 4,
  })}

${teamSection({
    id: 'faculty',
    label: 'Faculty',
    blurb: 'Experienced educators and ministry leaders who are committed to your growth and your future.',
    people: FACULTY,
    gridClass: 'programs-grid',
    cols: 3,
    viewAllLabel: 'View All Faculty',
  })}

${teamSection({
    id: 'adjunct-professors',
    label: 'Adjunct Professors',
    blurb: 'Ministry leaders and professionals bringing real-world experience into the classroom.',
    people: ADJUNCT,
    gridClass: 'programs-grid',
    cols: 3,
    viewAllLabel: 'View All Adjunct Professors',
  })}

${teamSection({
    id: 'staff',
    label: 'Staff',
    blurb: 'Here to support you throughout your journey at Valor.',
    people: STAFF,
    gridClass: 'programs-grid',
    cols: 3,
  })}

  <section id="president" class="about-grid" style="max-width:1320px;margin:60px auto 0;padding:0 32px 100px;display:grid;grid-template-columns:.85fr 1.15fr;gap:64px;align-items:center">
    <div data-reveal="" class="about-collage" style="height:560px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.22)">
      <img src="${IMG.presidentPortrait}" alt="Dr. Scott Camp, President of Valor Christian College" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block">
    </div>
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:18px">Meet Our President</div>
      <h2 data-reveal="" style="margin:0 0 6px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,50px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Dr. Scott Camp</h2>
      <div data-reveal="" style="font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(16,14,13,.5);margin-bottom:24px">President</div>
      <p data-reveal="" style="margin:0 0 24px;font-size:16px;line-height:1.65;color:rgba(16,14,13,.72);max-width:62ch">Dr. Camp's academic achievements are a testament to his scholarly depth and dedication to theological education. He holds a Master of Arts in Theology (Summa Cum Laude) from Criswell College, a Master of Divinity from Southwestern Assemblies of God University, and a Master of Theology from Southwestern Baptist Theological Seminary.</p>
      <p data-reveal="" style="margin:0 0 28px;font-size:16px;line-height:1.65;color:rgba(16,14,13,.72);max-width:62ch">His pursuit of knowledge has taken him to doctoral studies at Southwestern Baptist Theological Seminary, Assemblies of God Theological Seminary, Baylor University, and Southern Evangelical Seminary. In 2007, he received an honorary Doctor of Divinity from St. Thomas Christian College in Jacksonville, FL, and earned his Doctorate of Ministry from Trinity Seminary in Accra, Ghana in 2025.</p>
      <a data-reveal="" href="mailto:camps@valorcollege.edu" style="display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#B3121F" style-hover="color:#E01B2E"><i class="fa-solid fa-envelope"></i> camps@valorcollege.edu</a>
    </div>
  </section>

  <section id="scholarship" style="max-width:1320px;margin:0 auto 100px;padding:0 32px">
    <div class="about-grid" style="display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;padding:56px">
      <div>
        <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Dr. Scott Camp Presidential Scholarship</div>
        <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.6vw,42px);line-height:1.08;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Invest in your future. Bring someone with you.</h2>
        <p data-reveal="" style="margin:0 0 28px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.7);max-width:56ch">Invite a friend to Valor Christian College and receive up to <strong>$2,500 per year</strong> toward your tuition when they apply and enroll.*</p>
        <a data-reveal="" href="tuition-aid-scholarships.html" style="display:inline-block;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Learn More About the Scholarship</a>
        <div data-reveal="" style="margin-top:16px;font-size:12px;color:rgba(16,14,13,.45)">*See scholarship terms for full eligibility details.</div>
      </div>
      <div data-reveal="" style="text-align:center;border-left:1px solid rgba(16,14,13,.12);padding-left:56px">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(44px,6vw,64px);line-height:1;color:#E01B2E">$2,500<span style="font-size:20px;font-weight:700">/yr</span></div>
        <div style="margin-top:12px;font-size:13px;font-weight:600;letter-spacing:.04em;color:rgba(16,14,13,.6)">Toward tuition when a friend you refer applies and enrolls</div>
      </div>
    </div>
  </section>

  <section id="team-contact" style="position:relative;background:#100E0D;padding:44px 32px">
    <div style="max-width:1320px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px">
      <p data-reveal="" style="margin:0;font-size:15px;color:rgba(250,245,238,.85)">We're here for you. If you have any questions, feel free to reach out!</p>
      <a data-reveal="" href="about-contact.html" style="background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:15px 26px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Us</a>
    </div>
  </section>`;

module.exports = { ABOUT_MEET_TEAM_BODY };
