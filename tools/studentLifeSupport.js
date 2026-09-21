const { IMG } = require('./build-site');

const DEAN_EMAIL = 'deanofstudents@valorcollege.edu';

// Source: valorcollege.edu's Student Life FAQ and Dorm Life pages (fetched
// 2026-09-21) — the live site has no single "Student Support" page; this
// content is consolidated from those two into one FAQ-style page here.
const FAQS = [
  {
    key: 'wifi',
    q: 'Getting Connected',
    a: "Connect your devices to the campus Wi-Fi using your student credentials, emailed to you along with your Populi login. Visit the Financial Aid department if you didn't receive these credentials.",
  },
  {
    key: 'housing-issues',
    q: 'Housing Issues',
    a: 'Complete the move-in checklist on move-in day to report any issues on arrival. For maintenance issues during the semester, fill out a student housing report, which goes directly to the Director of Student Housing, and let the Resident Housing team know so they can follow up. Lost room key: $50 replacement fee.',
  },
  {
    key: 'trash',
    q: 'Trash',
    a: 'Large dumpsters are located behind the Ministry Activity Center. No personal trash in kitchens or communal areas.',
  },
  {
    key: 'visitors',
    q: 'Visitors',
    a: "Visitors must report to the front office for a visitor's badge. Overnight visitors require a submitted and approved overnight visitors form. See the Student Handbook for full visiting hours and procedures.",
  },
  {
    key: 'curfew',
    q: 'Curfew',
    a: 'Residence Halls: 7 am–12 am Sunday–Thursday, 7 am–1 am Friday and Saturday.',
  },
  {
    key: 'housing-eligibility',
    q: 'Off-Campus Housing Eligibility',
    a: "Students are expected to live on campus unless married, a parent of children living at home, living with a close relative in the Columbus area, or above 28. Off-campus students who are single with no dependents may share housing with other single students of the same gender. Off-campus students may not rent from World Harvest Church members except in a genuinely separate dwelling. Violations can result in dismissal; questions go to the Dean of Students.",
  },
];

const faqAccordion = (f) => `      <div id="${f.key}" class="acc-row" data-reveal="" style="scroll-margin-top:130px">
        <button type="button" class="acc-header" data-view-all="${f.key}-details" data-more-label="${f.q}" data-less-label="${f.q}">
          <div style="display:flex;align-items:center;gap:16px;min-width:0">
            <span data-swap-label="" class="acc-title">${f.q}</span>
          </div>
          <span class="acc-toggle-btn"><i class="fa-solid fa-chevron-down" style="font-size:13px"></i></span>
        </button>
        <div data-more="${f.key}-details">
          <div class="acc-panel-inner">
            <p style="margin:0;font-size:14.5px;line-height:1.65;color:rgba(16,14,13,.65)">${f.a}</p>
          </div>
        </div>
      </div>`;

const STUDENT_LIFE_SUPPORT_BODY = `  <section id="support-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Student Life &nbsp;&middot;&nbsp; Student Support</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.6vw,56px);line-height:1.06;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Support Resources for Every Valor Student.</h1>
      <p data-reveal="" style="margin:0 0 32px;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">Answers to common questions about campus life, housing, and daily logistics.</p>
      <a data-reveal="" href="mailto:${DEAN_EMAIL}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact the Dean of Students</a>
    </div>
    <div data-reveal="" class="about-collage" style="height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[5]}" alt="Valor Christian College students on campus" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="faqs" style="max-width:1000px;margin:0 auto;padding:80px 32px 60px">
    <div style="max-width:640px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Frequently Asked Questions</h2>
    </div>
    <div class="acc-group" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(16,14,13,.06)">
${FAQS.map(faqAccordion).join('\n')}
    </div>
  </section>

  <section id="key-info" style="max-width:1000px;margin:0 auto;padding:20px 32px 120px">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
      <div data-reveal="" style="background:#FAF5EE;border-radius:18px;padding:28px 24px">
        <i class="fa-solid fa-envelope" style="color:#E01B2E;font-size:18px;margin-bottom:14px"></i>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;margin-bottom:8px">Mailing Address</div>
        <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.65)">10165 Wright Road<br>Canal Winchester, Columbus, OH 43110</p>
      </div>
      <div data-reveal="" style="background:#FAF5EE;border-radius:18px;padding:28px 24px">
        <i class="fa-solid fa-house-user" style="color:#E01B2E;font-size:18px;margin-bottom:14px"></i>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;margin-bottom:8px">Cunningham Hall</div>
        <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.65)">Delaney Jayne, Resident Director</p>
      </div>
      <div data-reveal="" style="background:#FAF5EE;border-radius:18px;padding:28px 24px">
        <i class="fa-solid fa-house-user" style="color:#E01B2E;font-size:18px;margin-bottom:14px"></i>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#100E0D;margin-bottom:8px">Jude Hall</div>
        <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(16,14,13,.65)">Joshua Pulas, Resident Director</p>
      </div>
    </div>
  </section>`;

module.exports = { STUDENT_LIFE_SUPPORT_BODY };
