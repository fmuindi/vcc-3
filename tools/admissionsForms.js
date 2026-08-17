const { IMG } = require('./build-site');

const ADMISSIONS_EMAIL = 'admissions@valorcollege.edu';
// TODO: no real PDF URLs were provided for this page (the brief said to
// reuse what's on the old site, but valorcollege.edu is unreachable from
// here). Each "View PDF" button below opens a pre-addressed email to
// Admissions naming the specific form as a working interim behavior —
// replace href with the real PDF URL per form once confirmed.
const formLink = (name) => `mailto:${ADMISSIONS_EMAIL}?subject=${encodeURIComponent(`Request: ${name}`)}`;

const ADMISSIONS_FORMS = [
  'Application Form', 'Medical Form', 'Pastoral Recommendation', 'Personal Testimony Bio',
  'Sponsor Affidavit', 'Spousal Letter of Support', 'Student Financial Certification',
];
// The reference mockup also showed a "Request Valor Transcript" card not
// listed in the brief's text — included here since the mockup is the more
// complete visual reference; flagged to the user for confirmation.
const TRANSCRIPT_FORMS = ['Request College Transcript', 'Request High School or GED Transcript', 'Request Valor Transcript'];
const STUDENT_FORMS = ['Schedule Adjustment'];

const formCard = (name) => `        <a href="${formLink(name)}" data-reveal="" style="display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid rgba(16,14,13,.08);border-radius:14px;padding:24px 22px;color:#100E0D" style-hover="color:#100E0D;border-color:rgba(224,27,46,.3)">
          <i class="fa-solid fa-file-pdf" style="color:#B3121F;font-size:22px;margin-bottom:16px"></i>
          <div style="flex:1;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:15px;line-height:1.3;margin-bottom:16px">${name}</div>
          <span style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#B3121F">View PDF →</span>
        </a>`;

const formCategory = (icon, label, forms) => `    <div style="margin-bottom:48px">
      <div data-reveal="" style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <i class="fa-solid ${icon}" style="color:#E01B2E;font-size:16px"></i>
        <div style="font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#E01B2E">${label}</div>
        <div style="flex:1;height:1px;background:rgba(16,14,13,.1)"></div>
      </div>
      <div class="programs-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">
${forms.map(formCard).join('\n')}
      </div>
    </div>`;

const ADMISSIONS_FORMS_BODY = `  <section id="forms-hero" class="about-grid" style="max-width:1320px;margin:0 auto;padding:150px 32px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center">
    <div>
      <div data-reveal="" style="font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E01B2E;margin-bottom:16px">Admissions &amp; Enrollment Forms</div>
      <h1 data-reveal="" style="margin:0 0 22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(32px,4.5vw,56px);line-height:1.05;letter-spacing:-.03em;color:#100E0D;text-wrap:balance">Admissions &amp; Enrollment Forms</h1>
      <p data-reveal="" style="margin:0;font-size:17px;line-height:1.6;color:rgba(16,14,13,.68);max-width:52ch">Everything you need to take your next step at Valor, all in one place.</p>
    </div>
    <div data-reveal="" class="about-collage" style="height:380px;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(16,14,13,.2)">
      <img src="${IMG.studentLifeGallery[1]}" alt="Valor Christian College campus" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
  </section>

  <section id="all-forms" style="max-width:1000px;margin:0 auto;padding:80px 32px 20px">
    <div style="text-align:center;max-width:600px;margin:0 auto 56px">
      <h2 data-reveal="" style="margin:0 0 14px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(26px,3.4vw,40px);line-height:1.05;letter-spacing:-.03em;color:#100E0D">All the Forms You'll Need</h2>
      <p data-reveal="" style="margin:0;font-size:15px;line-height:1.6;color:rgba(16,14,13,.6)">Select a form below to view or download the PDF.</p>
    </div>
${formCategory('fa-user', 'Admissions Forms', ADMISSIONS_FORMS)}
${formCategory('fa-graduation-cap', 'Transcript Forms', TRANSCRIPT_FORMS)}
${formCategory('fa-user-pen', 'Student Forms', STUDENT_FORMS)}
  </section>

  <section id="forms-help" style="max-width:1000px;margin:0 auto;padding:20px 32px 120px">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:28px;background:#FAF5EE;border:1px solid rgba(16,14,13,.1);border-radius:24px;padding:44px 40px">
      <div style="display:flex;align-items:center;gap:20px">
        <div style="flex:none;width:56px;height:56px;border-radius:50%;border:1.5px solid rgba(224,27,46,.35);display:grid;place-items:center"><i class="fa-solid fa-headset" style="color:#E01B2E;font-size:22px"></i></div>
        <div>
          <div data-reveal="" style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;color:#100E0D;margin-bottom:6px">Need Help Finding the Right Form?</div>
          <p data-reveal="" style="margin:0;font-size:14.5px;line-height:1.55;color:rgba(16,14,13,.62)">Our team is here to help.</p>
        </div>
      </div>
      <a data-reveal="" href="mailto:${ADMISSIONS_EMAIL}" style="flex:none;background:#E01B2E;color:#fff;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:15px 24px;border-radius:999px;transition:transform .18s ease" style-hover="transform:translateY(-2px);background:#F02338;color:#fff">Contact Admissions</a>
    </div>
  </section>`;

module.exports = { ADMISSIONS_FORMS_BODY };
