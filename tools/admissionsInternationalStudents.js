const { IMG } = require('./build-site');

const ADMISSIONS_EMAIL = 'admissions@valorcollege.edu';
const APPLY_LINK = 'admissions-apply-now.html';
// Client-supplied Microsoft Bookings link for International Admissions
// specifically (from the source brief, section 7).
const INTL_BOOKING_LINK = 'https://bookings.cloud.microsoft/book/ValorChristianCollegeAdmissionsOffice@whc.life/?ismsaljsauthenabled=true';
// TODO: no International Student Admissions Package PDF has been supplied
// yet (the brief calls for "the detailed PDF" as a paperwork/instructions
// companion to this page). Routed to Admissions by email in the interim —
// swap in the real document link (likely a Directus asset, same as the
// other PDFs on the site) as soon as it exists.
const INTL_PACKAGE_LINK = `mailto:${ADMISSIONS_EMAIL}?subject=International%20Student%20Admissions%20Package`;

const STEPS = [
  { num: '01', label: 'Apply', copy: 'Complete your application to Valor Christian College and submit the required admissions materials.' },
  { num: '02', label: 'Submit Your Documents', copy: 'Provide the academic, identification and financial documentation required for international admission.' },
  { num: '03', label: 'Complete Financial Requirements', copy: 'Submit the required financial certification and supporting documentation demonstrating your ability to fund your education and living expenses.' },
  { num: '04', label: 'Complete International Enrollment', copy: 'Once your admissions and financial requirements have been completed, our team will guide you through the remaining international student enrollment process.' },
];

const stepCard = (s) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:40px;line-height:1;color:rgba(224,27,46,.28);margin-bottom:16px">${s.num}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#100E0D;margin-bottom:10px">${s.label}</div>
        <p style="flex:1;margin:0;font-size:14.5px;line-height:1.6;color:rgba(16,14,13,.65)">${s.copy}</p>
      </div>`;

const REQUIREMENTS = [
  { icon: 'fa-file-lines', title: 'Academic Documents', copy: 'Required academic records and transcripts.' },
  { icon: 'fa-passport', title: 'Identification', copy: 'A valid passport and other required identification documentation.' },
  { icon: 'fa-hand-holding-dollar', title: 'Financial Certification', copy: 'Documentation demonstrating sufficient financial resources for your education and living expenses.' },
  { icon: 'fa-people-arrows', title: 'Sponsorship Documentation', copy: 'If another person or organization will financially support you, additional sponsorship documentation may be required.' },
  { icon: 'fa-user-check', title: 'Full-Time Enrollment', copy: 'International students are required to maintain the enrollment requirements applicable to their student status.' },
];

const requirementCard = (r) => `      <div data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 22px">
        <div style="width:46px;height:46px;border-radius:50%;background:rgba(224,27,46,.08);display:grid;place-items:center;margin-bottom:14px"><i class="fa-solid ${r.icon}" style="color:#E01B2E;font-size:17px"></i></div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:15px;color:#100E0D;margin-bottom:8px">${r.title}</div>
        <p style="flex:1;margin:0;font-size:13.5px;line-height:1.6;color:rgba(16,14,13,.62)">${r.copy}</p>
      </div>`;

const faqRow = (key, question, answerHtml) => `      <div data-reveal="" style="background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:16px;padding:26px 28px">
        <button type="button" data-view-all="${key}" data-more-label="${question} ▾" data-less-label="${question} ▴" style="display:flex;align-items:center;justify-content:space-between;gap:14px;width:100%;background:none;border:none;padding:0;cursor:pointer;text-align:left">
          <span data-swap-label="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;color:#100E0D">${question} ▾</span>
        </button>
        <div data-more="${key}" style="display:none;margin-top:18px;padding-top:18px;border-top:1px solid rgba(16,14,13,.08)">
          ${answerHtml}
        </div>
      </div>`;

const FAQS = [
  { key: 'full-time', q: 'Do international students have to attend full-time?', a: "International students must meet the full-time enrollment requirements applicable to their student status. Valor's International Admissions team can provide guidance regarding current enrollment requirements." },
  { key: 'work', q: 'Can international students work while attending Valor?', a: "Employment opportunities and restrictions may vary based on a student's immigration status. International students should speak with the appropriate Valor representative regarding employment eligibility and requirements." },
  { key: 'financial-proof', q: 'Do I need to provide proof of financial support?', a: 'Yes. International students are required to provide financial documentation demonstrating sufficient resources for their education and estimated living expenses.' },
  { key: 'sponsorship', q: 'What if someone is sponsoring my education?', a: 'Students receiving financial support from another person or organization may be required to submit an Affidavit of Sponsorship and supporting financial documentation.' },
  { key: 'family', q: 'What if I am married or have children?', a: 'Students planning to bring a spouse or dependent children may have additional documentation and financial requirements. Contact International Admissions for requirements specific to your situation.' },
  { key: 'i20', q: 'When will I receive my I-20?', a: `Our International Admissions team will confirm current I-20 timing and process details with you directly. <a href="mailto:${ADMISSIONS_EMAIL}" style="color:#B3121F" style-hover="color:#E01B2E">Contact International Admissions</a> for the most up-to-date guidance.` },
];

const ADMISSIONS_INTERNATIONAL_STUDENTS_BODY = `  <section id="intl-hero" style="position:relative;min-height:82vh;display:flex;align-items:flex-end;overflow:hidden;background:#100E0D;padding-top:110px">
    <img src="${IMG.studentLifeGallery[2]}" alt="Valor Christian College students" loading="eager" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6">
    <div style="position:absolute;inset:0;background:linear-gradient(200deg,rgba(224,27,46,.28) 0%,rgba(16,14,13,.4) 45%,rgba(16,14,13,.96) 100%)"></div>
    <div style="position:relative;width:100%;max-width:1320px;margin:0 auto;padding:0 32px 80px">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(250,245,238,.75);margin-bottom:16px">Welcome to Valor</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',Archivo,sans-serif;font-weight:800;color:#FAF5EE;font-size:clamp(36px,6vw,76px);line-height:1.03;letter-spacing:-.03em;max-width:18ch;text-wrap:balance">Your Journey to Valor Starts Here.</h1>
      <p data-reveal="" style="margin:0 0 14px;max-width:62ch;font-size:18px;line-height:1.6;color:rgba(250,245,238,.85)">Students from around the world come to Valor Christian College to prepare for their calling, grow in their faith and become equipped to change the world.</p>
      <p data-reveal="" style="margin:0 0 36px;max-width:62ch;font-size:17px;line-height:1.6;color:rgba(250,245,238,.75)">Our Admissions team is here to help international students navigate the application, financial documentation and enrollment process.</p>
      <div data-reveal="" class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px">
        <a href="${APPLY_LINK}" style="background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;box-shadow:0 8px 26px rgba(224,27,46,.4);transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Apply to Valor</a>
        <a href="${INTL_BOOKING_LINK}" target="_blank" rel="noopener" style="background:#FAF5EE;color:#100E0D;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#fff;color:#100E0D">Talk to International Admissions</a>
      </div>
    </div>
  </section>

  <section id="admissions-process" style="max-width:1320px;margin:0 auto;padding:100px 32px 40px">
    <div style="max-width:680px;margin:0 auto 48px;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:14px">Getting Started</div>
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">Your Path to Valor</h2>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:48px">
${STEPS.map(stepCard).join('\n')}
    </div>
    <div style="text-align:center">
      <a data-reveal="" href="${APPLY_LINK}" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Start Your Application <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </section>

  <section id="requirements" style="max-width:1320px;margin:0 auto;padding:60px 32px 40px">
    <div style="max-width:680px;margin:0 auto 44px;text-align:center">
      <h2 data-reveal="" style="margin:0 0 16px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">International Student Requirements</h2>
      <p data-reveal="" style="margin:0;font-size:16px;line-height:1.6;color:rgba(16,14,13,.65)">International applicants should be prepared to provide additional documentation as part of the admissions and enrollment process.</p>
    </div>
    <div class="programs-grid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:40px">
${REQUIREMENTS.map(requirementCard).join('\n')}
    </div>
    <div style="text-align:center">
      <a data-reveal="" href="${INTL_PACKAGE_LINK}" style="display:inline-flex;align-items:center;gap:10px;border:1.5px solid rgba(224,27,46,.4);color:#B3121F;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 26px;border-radius:999px" style-hover="background:rgba(224,27,46,.08)"><i class="fa-solid fa-download"></i> Download International Student Admissions Package</a>
    </div>
  </section>

  <section id="financial-planning" class="about-grid" style="max-width:1320px;margin:100px auto 0;padding:0 32px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Plan Ahead</div>
      <h2 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Understand the Cost Before You Apply.</h2>
      <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.68);max-width:56ch">International students must demonstrate sufficient financial resources for their education and living expenses while studying in the United States.</p>
      <a data-reveal="" href="tuition-aid-international.html" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">View International Tuition &amp; Fees <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div data-reveal="" style="background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;padding:44px 40px">
      <div style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(16,14,13,.55);margin-bottom:6px">2026–2027 Academic Year</div>
      <div style="font-size:13px;color:rgba(16,14,13,.6);margin-bottom:26px">Full-time international student living on campus</div>
      <div style="display:flex;flex-direction:column;gap:22px">
        <div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,42px);color:#E01B2E;line-height:1">$21,804</div>
          <div style="font-size:13px;font-weight:600;color:rgba(16,14,13,.65);margin-top:6px">Estimated costs paid to Valor</div>
        </div>
        <div style="height:1px;background:rgba(16,14,13,.12)"></div>
        <div>
          <div style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(30px,4vw,42px);color:#100E0D;line-height:1">$40,732</div>
          <div style="font-size:13px;font-weight:600;color:rgba(16,14,13,.65);margin-top:6px">Estimated minimum financial requirement</div>
        </div>
      </div>
    </div>
  </section>

  <section id="sponsors-family" style="max-width:800px;margin:100px auto 0;padding:0 32px;text-align:center">
    <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Bringing Family or Receiving Financial Support?</h2>
    <p data-reveal="" style="margin:0 0 16px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.68)">International students whose education is being funded by a sponsor, or who plan to bring a spouse or dependent children, may have additional financial and documentation requirements.</p>
    <p data-reveal="" style="margin:0 0 32px;font-size:16px;line-height:1.6;color:rgba(16,14,13,.68)">Because every student's circumstances are different, our International Admissions team can help determine which documents and financial requirements apply to you.</p>
    <a data-reveal="" href="${INTL_BOOKING_LINK}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;background:#E01B2E;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:17px 30px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact International Admissions</a>
  </section>

  <section id="intl-faq" style="max-width:900px;margin:100px auto 0;padding:0 32px 40px">
    <div style="text-align:center;max-width:640px;margin:0 auto 48px">
      <h2 data-reveal="" style="margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(28px,3.6vw,44px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">International Student FAQ</h2>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
${FAQS.map((f) => faqRow(f.key, f.q, `<p style="margin:0;font-size:15px;line-height:1.65;color:rgba(16,14,13,.7)">${f.a}</p>`)).join('\n')}
    </div>
  </section>

  <section id="intl-final-cta" style="position:relative;margin-top:100px;background:#E01B2E;color:#fff;padding:110px 32px;overflow:hidden">
    <div style="position:absolute;top:-140px;right:-100px;width:420px;height:420px;border:1px solid rgba(255,255,255,.28);border-radius:50%"></div>
    <div style="position:absolute;bottom:-180px;left:-120px;width:480px;height:480px;border:1px solid rgba(255,255,255,.2);border-radius:50%"></div>
    <div style="position:relative;max-width:800px;margin:0 auto;text-align:center">
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:16px">Ready to Begin?</div>
      <h2 data-reveal="" style="margin:0 0 20px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,5vw,60px);line-height:1.02;letter-spacing:-.03em">Your World-Changing Journey Starts at Valor.</h2>
      <p data-reveal="" style="margin:0 auto 34px;max-width:56ch;font-size:17px;line-height:1.55;color:rgba(255,255,255,.85)">You don't have to navigate the international admissions process alone. Our team is ready to answer your questions and help you take your next step toward Valor Christian College.</p>
      <div class="help-cta-buttons" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
        <a data-reveal="" href="${APPLY_LINK}" style="background:#100E0D;color:#fff;font-size:15px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:20px 40px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-3px);background:#000;color:#fff">Apply to Valor</a>
        <a data-reveal="" href="${INTL_BOOKING_LINK}" target="_blank" rel="noopener" style="border:1.5px solid rgba(255,255,255,.55);color:#fff;font-size:15px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:19px 38px;border-radius:999px;transition:background .18s ease" style-hover="background:rgba(255,255,255,.14);color:#fff">Talk to International Admissions</a>
      </div>
    </div>
  </section>`;

module.exports = { ADMISSIONS_INTERNATIONAL_STUDENTS_BODY };
