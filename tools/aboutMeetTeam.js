const { IMG } = require('./build-site');

// Full roster from valorcollege.edu/our-team (captured Aug 13, 2026). No
// invented names, titles, phones, or emails — reproduced as published,
// except two obvious source typos corrected: LaKesha Ray's title
// ("Asstant" -> "Assistant") and Blake Rice's phone number (missing a
// digit vs. the college's number used everywhere else on the page).
const PHONE = '614-837-4088';

const ADMINISTRATION = [
  { name: 'Scott Camp, D.Div., D.Min.', title: ['President', 'Professor of Preaching, Missions and Evangelism'], phone: PHONE, email: 'camps@valorcollege.edu', cta: true },
  { name: 'Laquetta Cortner, Ph.D.', title: ['Provost'], phone: `${PHONE} ext. 4476`, email: 'cortnerl@valorcollege.edu' },
  { name: 'David Amos', title: ['Dean of Students'], phone: `${PHONE} ext. 4485`, email: 'deanofstudents@valorcollege.edu' },
  { name: 'LaKesha Ray', title: ['Executive Assistant to President and Provost'], phone: `${PHONE} ext. 4477`, email: 'rayl@valorcollege.edu' },
  { name: 'Jay Baldwin', title: ['Administration &amp; Operations'], email: 'baldwinj@valorcollege.edu' },
  { name: 'Sean Sams', title: ['Interim Director of Enrollment'], phone: `${PHONE} ext. 4475`, email: 'samss@valorcollege.edu' },
  { name: 'Megan Hassett, J.D.', title: ['Media Relations'], phone: PHONE, email: 'hassettm@valorcollege.edu' },
  { name: 'Cherisse Conley', title: ['Director of Housing'], phone: `${PHONE} ext. 4306`, email: 'conleyc@valorcollege.edu' },
  { name: 'Andrew Sturdon', title: ['Business Manager'], phone: `${PHONE} ext. 4513`, email: 'sturdona@valorcollege.edu' },
  { name: 'Ashton Parsley, M.A.', title: ['VP of Student Affairs'], email: 'studentaffairs@valorcollege.edu' },
];

const FACULTY = [
  { name: 'David Cook, Ed.D.', title: ['Assistant Professor'], email: 'cookd@valorcollege.edu' },
  { name: 'Trent Lambert, D.Min.', title: ['Assistant Professor'], email: 'lambertt@valorcollege.edu' },
  { name: 'Sean Sams, M.Div.', title: ['Professor, Bible &amp; Theology Chair'], phone: `${PHONE} ext. 4473`, email: 'samss@valorcollege.edu' },
  { name: 'Philip Tabler, M.B.A., M.A.M., M.A., M.T.-B.C.', title: ['Professor, Music Department Chair'], phone: `${PHONE} ext. 4484`, email: 'tablerp@valorcollege.edu' },
  { name: 'Mark Youngkin, M.A.', title: ['Professor, Church Ministries Chair', 'Valor Learning Center Director'], phone: `${PHONE} ext. 4472`, email: 'youngkinm@valorcollege.edu' },
  { name: 'Richard D. Burkhalter, Ed.D.', title: ['Assistant Professor'], phone: `${PHONE} ext. 1283`, email: 'burkhalterr@valorcollege.edu' },
  { name: 'Rob Starner, Ph.D.', title: ['Professor of New Testament'], phone: `${PHONE} ext. 4468`, email: 'starnerr@valorcollege.edu', more: 'faculty' },
  { name: 'Richard Hogue, D.Min.', title: ['Professor of Church History and Theology'], phone: `${PHONE} ext. 4469`, email: 'hoguer@valorcollege.edu', more: 'faculty' },
];

const ADJUNCT = [
  { name: 'Robert Brown, M.Th.', title: [], email: 'brownr@valorcollege.edu' },
  { name: 'Jay Wright, M.S., MBA', title: [], email: 'wrightj@valorcollege.edu' },
  { name: 'Diane Rhynes, MFA', title: [], email: 'rhynesd@valorcollege.edu' },
  { name: 'Mark Hayes, M.S., M.Div.', title: [], email: 'hayesm@valorcollege.edu', more: 'adjunct' },
  { name: 'Dan Moreno', title: [], email: 'morenod@valorcollege.edu', more: 'adjunct' },
  { name: 'Ashlyn Rata, M.B.A.', title: [], email: 'rataa@valorcollege.edu', more: 'adjunct' },
  { name: 'Jeevon Harris, MBA', title: [], email: 'harrisj@valorcollege.edu', more: 'adjunct' },
  { name: 'Brandon Manyara', title: [], email: 'manyarab@valorcollege.edu', more: 'adjunct' },
  { name: 'Amelia Moran, M.S.', title: [], email: 'morana@valorcollege.edu', more: 'adjunct' },
  { name: 'Matthew Rice, M.Div., J.D.', title: [], email: 'ricem@valorcollege.edu', more: 'adjunct' },
  { name: 'Wayne Solomon, D.Min.', title: [], email: 'solomonw@valorcollege.edu', more: 'adjunct' },
  { name: 'Rick Celestino, MPT', title: [], email: 'celestior@breakthrough.net', more: 'adjunct' },
  { name: 'Justin Kazmierczak', title: [], email: 'kazmierczakj@breakthrough.net', more: 'adjunct' },
  { name: 'Nam Pham, M.A., MBA', title: [], email: 'phanm@valorcollege.edu', more: 'adjunct' },
  { name: 'David Amos', title: [], email: 'deanofstudents@valorcollege.edu', more: 'adjunct' },
  { name: 'Jordan Book, M.A.', title: [], email: 'bookj@valorcollege.edu', more: 'adjunct' },
  { name: 'Jerry Menseh, M.S.', title: [], email: 'mensehj@valorcollege.edu', more: 'adjunct' },
  { name: 'Brian Oswald, D.Min.', title: [], email: 'boswald@valorcollege.edu', more: 'adjunct' },
  { name: 'Denise Smith, M.Ed.', title: [], email: 'smithd@valorcollege.edu', more: 'adjunct' },
  { name: 'Megan Hassett, J.D.', title: [], email: 'hassettm@valorcollege.edu', more: 'adjunct' },
  { name: 'Stephen Burkhalter', title: [], email: 'burkhalters@valorcollege.edu', more: 'adjunct' },
  { name: 'Marvin Jones, Ph.D.', title: [], email: 'mjones@valorcollege.edu', more: 'adjunct' },
];

const STAFF = [
  { name: 'Aislynn Rambayon', title: ['Manager of Student Life'], phone: `${PHONE} ext. 4485`, email: 'rambayona@valorcollege.edu' },
  { name: 'Tamar Sams', title: ['Registrar'], phone: `${PHONE} ext. 4474`, email: 'registrar@valorcollege.edu' },
  { name: 'Phil Supple', title: ['Financial Aid / IT Support'], phone: `${PHONE} ext. 4481`, email: 'supplep@valorcollege.edu' },
  { name: 'David Amos', title: ['Dean of Students'], email: 'deanofstudents@valorcollege.edu' },
  { name: 'George Lee', title: ['Financial Aid Advisor'], phone: `${PHONE} ext. 4479`, email: 'leeg@valorcollege.edu' },
  { name: 'Norm Stoppenbrink', title: ['Financial Aid Consultant'], phone: `${PHONE} ext. 4481`, email: 'stoppenbrinkn@valorcollege.edu' },
  { name: 'Jeevon Harris, MBA', title: ['Online Lead'], email: 'harrisj@valorcollege.edu' },
  { name: 'Blake Rice', title: ['Director of Recruitment'], phone: `${PHONE} ext. 1228`, email: 'riceb@valorcollege.edu' },
  { name: 'Trent Lambert', title: ['Online Coordinator'], email: 'lambertt@valorcollege.edu' },
  { name: 'Joshua Pulas', title: ['Jude Hall Resident Director'], email: 'pulasj@valorcollege.edu' },
  { name: 'Delaney Jayne', title: ['Cunningham Hall Resident Director'], email: 'jayned@valorcollege.edu' },
  { name: 'Mia Sierra', title: ['Admissions Coordinator'], email: 'sierram@valorcollege.edu' },
  { name: 'Robert Thomas', title: ['Minister of Student Life'], email: 'thomasr@valorcollege.edu' },
];

const card = (p) => `        <div data-reveal="" ${p.more ? `data-more="${p.more}" style="display:none;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 22px"` : `style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 22px"`}>
          <div style="width:44px;height:44px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:16px"><i class="fa-solid fa-shield-halved" style="color:#E01B2E;font-size:17px"></i></div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;line-height:1.3;color:#100E0D;margin-bottom:6px">${p.name}</div>
          ${p.title.map((t) => `<div style="font-size:13px;line-height:1.5;color:rgba(16,14,13,.6)">${t}</div>`).join('\n          ')}
          ${p.phone ? `<div style="display:flex;align-items:flex-start;gap:6px;margin-top:12px;font-size:12.5px;color:rgba(16,14,13,.55)"><i class="fa-solid fa-phone" style="font-size:10.5px;flex:none;margin-top:2px"></i><span>${p.phone}</span></div>` : ''}
          <a href="mailto:${p.email}" style="display:inline-flex;align-items:flex-start;gap:6px;margin-top:${p.phone ? '6' : '12'}px;font-size:12.5px;color:#B3121F" style-hover="color:#E01B2E"><i class="fa-solid fa-envelope" style="font-size:11px;flex:none;margin-top:2px"></i><span>${p.email.replace('@', '@<wbr>')}</span></a>
          ${p.cta ? `<a href="about-meet-our-president.html" style="display:block;margin-top:16px;text-align:center;background:#100E0D;color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:12px;border-radius:8px" style-hover="background:#E01B2E;color:#fff">Meet Our President</a>` : ''}
        </div>`;

const viewAllButton = (target, label) => `        <div style="text-align:center;margin-top:28px;grid-column:1/-1"><button type="button" data-view-all="${target}" data-more-label="${label}" data-less-label="Show Fewer" style="border:1.5px solid rgba(224,27,46,.4);background:none;color:#B3121F;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:14px 26px;border-radius:999px;cursor:pointer" style-hover="background:rgba(224,27,46,.08)">${label}</button></div>`;

const teamSection = ({ id, label, blurb, people, viewAllTarget, viewAllLabel }) => `  <section id="${id}" class="about-grid" style="max-width:1320px;margin:0 auto;padding:56px 32px;display:grid;grid-template-columns:230px 1fr;gap:40px;align-items:start">
    <div data-reveal="">
      <div style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:12px">${label}</div>
      <div style="width:36px;height:2px;background:#E01B2E;margin-bottom:14px"></div>
      <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.6)">${blurb}</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
${people.map(card).join('\n')}
${viewAllTarget ? viewAllButton(viewAllTarget, viewAllLabel) : ''}
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
    id: 'administration',
    label: 'Administration',
    blurb: 'Leading Valor forward with vision, integrity, and a heart for students.',
    people: ADMINISTRATION,
  })}

${teamSection({
    id: 'faculty',
    label: 'Faculty',
    blurb: 'Experienced educators and ministry leaders who are committed to your growth and your future.',
    people: FACULTY,
    viewAllTarget: 'faculty',
    viewAllLabel: 'View All Faculty',
  })}

${teamSection({
    id: 'adjunct-professors',
    label: 'Adjunct Professors',
    blurb: 'Ministry leaders and professionals bringing real-world experience into the classroom.',
    people: ADJUNCT,
    viewAllTarget: 'adjunct',
    viewAllLabel: 'View All Adjunct Professors',
  })}

${teamSection({
    id: 'staff',
    label: 'Staff',
    blurb: 'Here to support you throughout your journey at Valor.',
    people: STAFF,
  })}

  <section id="scholarship" style="max-width:1320px;margin:80px auto 100px;padding:0 32px">
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
